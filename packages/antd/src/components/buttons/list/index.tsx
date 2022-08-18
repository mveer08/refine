import React from "react";
import { Button, ButtonProps } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import {
    useCan,
    useNavigation,
    useTranslate,
    userFriendlyResourceName,
    useResource,
    useRouterContext,
} from "@pankod/refine-core";
import {
    RefineListButtonProps,
    RefineButtonTestIds,
} from "@pankod/refine-ui-types";

export type ListButtonProps = RefineListButtonProps<
    ButtonProps,
    {
        /**
         * @deprecated resourceName deprecated. Use resourceNameOrRouteName instead # https://github.com/pankod/refine/issues/1618
         */
        resourceName?: string;
    }
>;

/**
 * `<ListButton>` is using Ant Design's {@link https://ant.design/components/button/ `<Button>`} component.
 * It uses the  {@link https://refine.dev/docs/core/hooks/navigation/useNavigation#list `list`} method from {@link https://refine.dev/docs/core/hooks/navigation/useNavigation `useNavigation`} under the hood.
 * It can be useful when redirecting the app to the list page route of resource}.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/buttons/list-button} for more details.
 */
export const ListButton: React.FC<ListButtonProps> = ({
    resourceName: propResourceName,
    resourceNameOrRouteName: propResourceNameOrRouteName,
    hideText = false,
    ignoreAccessControlProvider = false,
    children,
    onClick,
    ...rest
}) => {
    const { listUrl: generateListUrl } = useNavigation();
    const { Link } = useRouterContext();
    const translate = useTranslate();

    const { resourceName, resource } = useResource({
        resourceName: propResourceName,
        resourceNameOrRouteName: propResourceNameOrRouteName,
    });

    const { data } = useCan({
        resource: resourceName,
        action: "list",
        queryOptions: {
            enabled: !ignoreAccessControlProvider,
        },
        params: {
            resource,
        },
    });

    const createButtonDisabledTitle = () => {
        if (data?.can) return "";
        else if (data?.reason) return data.reason;
        else
            return translate(
                "buttons.notAccessTitle",
                "You don't have permission to access",
            );
    };

    const listUrl = generateListUrl(propResourceName ?? resource.route!);

    return (
        <Link
            to={listUrl}
            replace={false}
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                if (onClick) {
                    e.preventDefault();
                    onClick(e);
                }
            }}
        >
            <Button
                icon={<BarsOutlined />}
                disabled={data?.can === false}
                title={createButtonDisabledTitle()}
                data-testid={RefineButtonTestIds.ListButton}
                {...rest}
            >
                {!hideText &&
                    (children ??
                        translate(
                            `${resourceName}.titles.list`,
                            userFriendlyResourceName(
                                resource.label ?? resourceName,
                                "plural",
                            ),
                        ))}
            </Button>
        </Link>
    );
};
