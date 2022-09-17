import { GraphQLClient } from "graphql-request";
import * as gql from "gql-query-builder";
import {
    CrudOperators,
    CrudFilters,
    CrudSorting,
    DataProvider,
} from "@pankod/refine-core";
import setWith from "lodash/setWith";
import set from "lodash/set";

export type HasuraSortingType = Record<string, "asc" | "desc">;

export type GenerateSortingType = {
    (sorting?: CrudSorting): HasuraSortingType | undefined;
};

export const generateSorting: GenerateSortingType = (sorting?: CrudSorting) => {
    if (!sorting) {
        return undefined;
    }

    const sortingQueryResult: Record<
        string,
        "asc" | "desc" | HasuraSortingType
    > = {};

    sorting.forEach((sortItem) => {
        set(sortingQueryResult, sortItem.field, sortItem.order);
    });

    return sortingQueryResult as HasuraSortingType;
};

export type HasuraFilterCondition =
    | "_and"
    | "_not"
    | "_or"
    | "_eq"
    | "_gt"
    | "_gte"
    | "_lt"
    | "_lte"
    | "_neq"
    | "_in"
    | "_nin"
    | "_like"
    | "_nlike"
    | "_ilike"
    | "_nilike"
    | "_is_null";

const hasuraFilters: Record<CrudOperators, HasuraFilterCondition | undefined> =
    {
        eq: "_eq",
        ne: "_neq",
        lt: "_lt",
        gt: "_gt",
        lte: "_lte",
        gte: "_gte",
        in: "_in",
        nin: "_nin",
        contains: "_ilike",
        ncontains: "_nilike",
        containss: "_like",
        ncontainss: "_nlike",
        null: "_is_null",
        or: "_or",
        between: undefined,
        nbetween: undefined,
        nnull: undefined,
        startswith: undefined,
        nstartswith: undefined,
        startswiths: undefined,
        nstartswiths: undefined,
        endswith: undefined,
        nendswith: undefined,
        endswiths: undefined,
        nendswiths: undefined,
    };

export const generateFilters: any = (filters?: CrudFilters) => {
    if (!filters) {
        return undefined;
    }

    const resultFilter: any = {};

    filters.map((filter) => {
        const operator = hasuraFilters[filter.operator];
        if (!operator) {
            throw new Error(`Operator ${filter.operator} is not supported`);
        }

        if (filter.operator !== "or") {
            const fieldsArray = filter.field.split(".");
            const fieldsWithOperator = [...fieldsArray, operator];
            setWith(resultFilter, fieldsWithOperator, filter.value, Object);
        } else {
            const orFilter: any = [];

            filter.value.map((val) => {
                const filterObject: any = {};
                const mapedOperator = hasuraFilters[val.operator];

                if (!mapedOperator) {
                    throw new Error(
                        `Operator ${val.operator} is not supported`,
                    );
                }
                if (!filterObject.hasOwnProperty(val.field)) {
                    filterObject[val.field] = {};
                }
                filterObject[val.field][mapedOperator] = val.value;
                orFilter.push(filterObject);
            });

            resultFilter[operator] = orFilter;
        }
    });

    return resultFilter;
};

const dataProvider = (client: GraphQLClient): DataProvider => {
    return {
        getOne: async ({ resource, id, metaData }) => {
            const operation = `${metaData?.operation ?? resource}_by_pk`;

            const { query, variables } = gql.query({
                operation,
                variables: {
                    id: { value: id, type: "uuid", required: true },
                    ...metaData?.variables,
                },
                fields: metaData?.fields,
            });

            const response = await client.request(query, variables);

            return {
                data: response[operation],
            };
        },

        getMany: async ({ resource, ids, metaData }) => {
            const operation = metaData?.operation ?? resource;

            const { query, variables } = gql.query({
                operation,
                fields: metaData?.fields,
                variables: metaData?.variables ?? {
                    where: {
                        type: `${operation}_bool_exp`,
                        value: {
                            id: {
                                _in: ids,
                            },
                        },
                    },
                },
            });

            const result = await client.request(query, variables);

            return {
                data: result[operation],
            };
        },

        getList: async ({
            resource,
            sort,
            filters,
            hasPagination = true,
            pagination = { current: 1, pageSize: 10 },
            metaData,
        }) => {
            const { current = 1, pageSize: limit = 10 } = pagination ?? {};

            const hasuraSorting = generateSorting(sort);
            const hasuraFilters = generateFilters(filters);

            const operation = metaData?.operation ?? resource;

            const aggregateOperation = `${operation}_aggregate`;

            const hasuraSortingType = `[${operation}_order_by!]`;
            const hasuraFiltersType = `${operation}_bool_exp`;

            const { query, variables } = gql.query([
                {
                    operation,
                    fields: metaData?.fields,
                    variables: {
                        ...(hasPagination
                            ? {
                                  limit,
                                  offset: (current - 1) * limit,
                              }
                            : {}),
                        ...(hasuraSorting && {
                            order_by: {
                                value: hasuraSorting,
                                type: hasuraSortingType,
                            },
                        }),
                        ...(hasuraFilters && {
                            where: {
                                value: hasuraFilters,
                                type: hasuraFiltersType,
                            },
                        }),
                    },
                },
                {
                    operation: aggregateOperation,
                    fields: [{ aggregate: ["count"] }],
                    variables: {
                        where: {
                            value: hasuraFilters,
                            type: hasuraFiltersType,
                        },
                    },
                },
            ]);

            const result = await client.request(query, variables);

            return {
                data: result[operation],
                total: result[aggregateOperation].aggregate.count,
            };
        },

        create: async ({ resource, variables, metaData }) => {
            const operation = metaData?.operation ?? resource;

            const insertOperation = `insert_${operation}_one`;
            const insertType = `${operation}_insert_input`;

            const { query, variables: gqlVariables } = gql.mutation({
                operation: insertOperation,
                variables: {
                    object: {
                        type: insertType,
                        value: variables,
                        required: true,
                    },
                },
                fields: metaData?.fields ?? ["id", ...Object.keys(variables)],
            });

            const response = await client.request(query, gqlVariables);

            return {
                data: response[insertOperation],
            };
        },

        createMany: async ({ resource, variables, metaData }) => {
            const operation = metaData?.operation ?? resource;

            const insertOperation = `insert_${operation}`;
            const insertType = `[${operation}_insert_input!]`;

            const { query, variables: gqlVariables } = gql.mutation({
                operation: insertOperation,
                variables: {
                    objects: {
                        type: insertType,
                        value: variables,
                        required: true,
                    },
                },
                fields: [
                    {
                        returning: metaData?.fields ?? ["id"],
                    },
                ],
            });

            const response = await client.request(query, gqlVariables);

            return {
                data: response[insertOperation]["returning"],
            };
        },

        update: async ({ resource, id, variables, metaData }) => {
            const operation = metaData?.operation ?? resource;

            const updateOperation = `update_${operation}_by_pk`;

            const pkColumnsType = `${operation}_pk_columns_input`;
            const setInputType = `${operation}_set_input`;

            const { query, variables: gqlVariables } = gql.mutation({
                operation: updateOperation,
                variables: {
                    pk_columns: {
                        type: pkColumnsType,
                        value: {
                            id: id,
                        },
                        required: true,
                    },
                    _set: {
                        type: setInputType,
                        value: variables,
                        required: true,
                    },
                },
                fields: metaData?.fields ?? ["id"],
            });

            const response = await client.request(query, gqlVariables);

            return {
                data: response[updateOperation],
            };
        },
        updateMany: async ({ resource, ids, variables, metaData }) => {
            const operation = metaData?.operation ?? resource;

            const updateOperation = `update_${operation}`;

            const whereType = `${operation}_bool_exp`;
            const setInputType = `${operation}_set_input`;

            const { query, variables: gqlVariables } = gql.mutation({
                operation: updateOperation,
                variables: {
                    where: {
                        type: whereType,
                        value: {
                            id: {
                                _in: ids,
                            },
                        },
                        required: true,
                    },
                    _set: {
                        type: setInputType,
                        value: variables,
                        required: true,
                    },
                },
                fields: [
                    {
                        returning: metaData?.fields ?? ["id"],
                    },
                ],
            });

            const response = await client.request(query, gqlVariables);

            return {
                data: response[updateOperation]["returning"],
            };
        },

        deleteOne: async ({ resource, id, metaData }) => {
            const operation = metaData?.operation ?? resource;

            const deleteOperation = `delete_${operation}_by_pk`;

            const { query, variables } = gql.mutation({
                operation: deleteOperation,
                variables: {
                    id: { value: id, type: "uuid", required: true },
                    ...metaData?.variables,
                },
                fields: metaData?.fields ?? ["id"],
            });

            const response = await client.request(query, variables);

            return {
                data: response[deleteOperation],
            };
        },

        deleteMany: async ({ resource, ids, metaData }) => {
            const operation = metaData?.operation ?? resource;

            const deleteOperation = `delete_${operation}`;

            const whereType = `${operation}_bool_exp`;

            const { query, variables } = gql.mutation({
                operation: deleteOperation,
                fields: [
                    {
                        returning: metaData?.fields ?? ["id"],
                    },
                ],
                variables: metaData?.variables ?? {
                    where: {
                        type: whereType,
                        required: true,
                        value: {
                            id: {
                                _in: ids,
                            },
                        },
                    },
                },
            });

            const result = await client.request(query, variables);

            return {
                data: result[deleteOperation]["returning"],
            };
        },

        getApiUrl: () => {
            throw new Error(
                "getApiUrl method is not implemented on refine-hasura data provider.",
            );
        },

        custom: async ({ url, method, headers, metaData }) => {
            let gqlClient = client;

            if (url) {
                gqlClient = new GraphQLClient(url, { headers });
            }

            if (metaData) {
                if (metaData.operation) {
                    if (method === "get") {
                        const { query, variables } = gql.query({
                            operation: metaData.operation,
                            fields: metaData.fields,
                            variables: metaData.variables,
                        });

                        const response = await gqlClient.request(
                            query,
                            variables,
                        );

                        return {
                            data: response[metaData.operation],
                        };
                    } else {
                        const { query, variables } = gql.mutation({
                            operation: metaData.operation,
                            fields: metaData.fields,
                            variables: metaData.variables,
                        });

                        const response = await gqlClient.request(
                            query,
                            variables,
                        );

                        return {
                            data: response[metaData.operation],
                        };
                    }
                } else {
                    throw Error("GraphQL operation name required.");
                }
            } else {
                throw Error(
                    "GraphQL need to operation, fields and variables values in metaData object.",
                );
            }
        },
    };
};

export default dataProvider;
