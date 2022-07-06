"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18835],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33337:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(84625),i=a(95153);const p={id:"overview",title:"Overview"},s=void 0,l={unversionedId:"getting-started/overview",id:"getting-started/overview",title:"Overview",description:"What is refine?",source:"@site/docs/getting-started/overview.md",sourceDirName:"getting-started",slug:"/getting-started/overview",permalink:"/docs/getting-started/overview",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/getting-started/overview.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1657017989,formattedLastUpdatedAt:"7/5/2022",frontMatter:{id:"overview",title:"Overview"},sidebar:"someSidebar",next:{title:"Learn the Basics",permalink:"/docs/getting-started/basics"}},c={},m=[{value:"What is refine?",id:"what-is-refine",level:2},{value:"Key features",id:"key-features",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Benchmark",id:"benchmark",level:3},{value:"Quick Start",id:"quick-start",level:3},{value:"Next Steps",id:"next-steps",level:2}],u={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-refine"},"What is refine?"),(0,r.kt)("p",null,"refine\xa0is a\xa0",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"-based\xa0framework for rapid building of internal tools. It's is a a collection of helper hooks, components and providers. They are all decoupled from your UI components and business logic, so they never keep you from customizing your UI or coding your own flow."),(0,r.kt)("p",null,"Refine offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to\xa0admin panels,\xa0B2B applications\xa0and\xa0dashboards."),(0,r.kt)("h3",{id:""}),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("p",null,"\ud83d\udd25 ",(0,r.kt)("strong",{parentName:"p"},"Headless")," : Works with any UI framework"),(0,r.kt)("p",null,"\u2699\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Zero-configuration")," : One-line setup with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate"),". It takes less than a minute to start a project."),(0,r.kt)("p",null,"\ud83d\udce6 ",(0,r.kt)("strong",{parentName:"p"},"Out-of-the-box")," : Routing, networking, authentication, state management, i18n and UI."),(0,r.kt)("p",null,"\ud83d\udd0c ",(0,r.kt)("strong",{parentName:"p"},"Backend Agnostic")," : Connects to any custom backend. Built-in support for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/simple-rest"},"REST API"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/graphql"},"GraphQL"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/nestjsx-crud"},"NestJs CRUD"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/airtable"},"Airtable"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/strapi"},"Strapi"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/strapi-v4"},"Strapi v4"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/strapi-graphql"},"Strapi GraphQL"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/supabase"},"Supabase"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/hasura"},"Hasura"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/nhost"},"Nhost"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/appwrite"},"Appwrite"),", ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase"),", ",(0,r.kt)("a",{parentName:"p",href:"https://directus.io/"},"Directus")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/altogic"},"Altogic"),"."),(0,r.kt)("p",null,"\ud83d\udcdd ",(0,r.kt)("strong",{parentName:"p"},"Native Typescript Core")," : You can always opt out for plain JavaScript."),(0,r.kt)("p",null,"\ud83d\udc1c ",(0,r.kt)("strong",{parentName:"p"},"Enterprise UI")," : Works seamlessly with Ant Design System. (Support for multiple UI frameworks is on the Roadmap)"),(0,r.kt)("p",null,"\ud83d\udcdd ",(0,r.kt)("strong",{parentName:"p"},"Boilerplate-free Code")," : Keeps your codebase clean and readable."),(0,r.kt)("h3",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Higher-level frontend frameworks can save you a lot time, but they typically offer you a trade-off between speed and flexibility."),(0,r.kt)("p",null,"After many years of experience in developing B2B frontend applications and working with popular frameworks, we came up with a new approach to tackle this dilemma. This is how ",(0,r.kt)("strong",{parentName:"p"},"refine")," is born."),(0,r.kt)("p",null,"As ",(0,r.kt)("strong",{parentName:"p"},"refine")," is totally ",(0,r.kt)("em",{parentName:"p"},"unopinionated")," about UI and logic, it's strongly ",(0,r.kt)("em",{parentName:"p"},"opinionated")," about three parts of your application:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"API Networking")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"State Management")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Authentication & Authorization"))),(0,r.kt)("p",null,"We believe, these are the most important components of a data-intensive frontend application and should be handled in a robust way by leveraging industry best practices."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," guarantees you a perfect implementation of these building blocks in your project, so you can focus on your development."),(0,r.kt)("h3",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," makes extensive use of ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#gatsby-focus-wrapper"},"hooks")," as a default way for interacting with your components.\nUnder the hood, ",(0,r.kt)("strong",{parentName:"p"},"refine")," relies heavily to ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"React Query")," for data handling, caching and state management.\nAccess to external sources and API's happen via providers which are basically plug-in type components for extendibility."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:o.Z,width:"400px"})),(0,r.kt)("h3",{id:"benchmark"},"Benchmark"),(0,r.kt)("p",null,"After releasing the first internal versions, we had the chance to migrate some of our ",(0,r.kt)("em",{parentName:"p"},"React")," projects to ",(0,r.kt)("strong",{parentName:"p"},"refine"),".\nIn addition to ",(0,r.kt)("strong",{parentName:"p"},"shorter development")," times and ",(0,r.kt)("strong",{parentName:"p"},"overall performance gains"),", we've measured significant reduction in project size."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," makes your codebase significantly smaller, by eliminating redundant code such as ",(0,r.kt)("em",{parentName:"p"},"reducers"),", ",(0,r.kt)("em",{parentName:"p"},"actions")," and ",(0,r.kt)("em",{parentName:"p"},"unit tests"),". Below is a size comparison for an example project:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:i.Z,width:"400px"})),(0,r.kt)("h3",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("strong",{parentName:"p"},"superplate")," tool with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx superplate-cli -p refine-react tutorial\n")),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("em",{parentName:"p"},"CLI wizard")," to select options and start creating your project."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Select the following options to complete the _CLI wizard_:"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI options selection"',title:'"CLI',options:!0,'selection"':!0},"? What will be the name of your app:\n> tutorial\n\n? Do you want to use a UI Framework?:\n\u276f Ant Design\n\n? Do you want a customized theme?:\n\u276f Default theme\n\n? Router Provider:\n\u276f React Router v6\n\n? Data Provider:\n\u276f REST API\n\n? Auth Provider:\n\u276f None\n\n? Do you want to add example pages?:\n\u276f No\n\n? Do you want a customized layout?:\n\u276f No\n\n? i18n - Internationalization:\n\u276f No\n")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"After setup is complete, navigate to the project folder and start your project with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,r.kt)("p",null,"Your ",(0,r.kt)("strong",{parentName:"p"},"refine")," application will be accessible at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,r.kt)("p",null,"Replace the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, useMany } from "@pankod/refine-core";\nimport { useTable, List, Table, DateField } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <List>\n            <Table<IPost> {...tableProps} rowKey="id">\n                <Table.Column dataIndex="title" title="title" />\n                <Table.Column\n                    dataIndex={["category", "id"]}\n                    title="category"\n                    render={(value: number) => {\n                        if (isLoading) {\n                            return "loading...";\n                        }\n\n                        return data?.data.find(\n                            (item: ICategory) => item.id === value,\n                        )?.title;\n                    }}\n                />\n                <Table.Column\n                    dataIndex="createdAt"\n                    title="createdAt"\n                    render={(value: string) => <DateField format="LLL" value={value} />}\n                />\n            </Table>\n        </List>\n    );\n};\n\nexport default App;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="interfaces.d.ts"',title:'"interfaces.d.ts"'},"interface IPost {\n    title: string;\n    createdAt: string;\n    category: { id: number };\n}\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/basics"},"Learn the basics ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/comparison"},"Comparison | Refine vs React-Admin vs AdminBro vs Retool ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/core/tutorial"},"Next.js + Tailwind Tutorial ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/tutorial"},"Create React App + Ant Design Tutorial ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/upload/multipart-upload"},"Check the Guides & Concept section to learn generic solutions to common problems ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/examples/tutorial/antd-tutorial"},"Check example section for code snippets ","\u2192")))))}d.isMDXComponent=!0},95153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/benchmark-86c224f2232bb9d7874bcc071612b6bf.png"},84625:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/refine_architecture-0304f0522f92bde8abea6451753199e5.png"}}]);