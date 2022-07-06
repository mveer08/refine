"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||l[u]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={id:"custom-layout",title:"Custom Layout"},i=void 0,p={unversionedId:"guides-and-concepts/custom-layout",id:"guides-and-concepts/custom-layout",title:"Custom Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/docs/guides-and-concepts/custom-layout.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/custom-layout",permalink:"/docs/guides-and-concepts/custom-layout",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/custom-layout.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1657104595,formattedLastUpdatedAt:"7/6/2022",frontMatter:{id:"custom-layout",title:"Custom Layout"},sidebar:"someSidebar",previous:{title:"Auth0 Login",permalink:"/docs/guides-and-concepts/auth/auth0"},next:{title:"Custom Pages",permalink:"/docs/guides-and-concepts/custom-pages"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],c={toc:d};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can create custom layouts using ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,o.kt)("p",null,"Both of these components can accept the listed props for customization. ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," being for global customization and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," being for local."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"Layout"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"Sider"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#footer"},(0,o.kt)("inlineCode",{parentName:"a"},"Footer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#header"},(0,o.kt)("inlineCode",{parentName:"a"},"Header"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#offlayoutarea"},(0,o.kt)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#title"},(0,o.kt)("inlineCode",{parentName:"a"},"Title")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To make this example more visual, we used the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/refine-antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/refine-antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package."))),(0,o.kt)("p",null,"Let's look at an example of modifying the default layout to have a top menu layout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/App.tsx"',title:'"/src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport { AntdLayout, ReadyPage, notificationProvider, ErrorComponent } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nimport { PostList } from "pages/posts";\n// highlight-next-line\nimport { CustomSider } from "components";\n\nconst { Link } = routerProvider;\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n// highlight-start\n            Layout={({ children, Footer, OffLayoutArea }) => (\n                <AntdLayout>\n                    <AntdLayout.Header>\n                        <CustomSider />\n                    </AntdLayout.Header>\n                    <AntdLayout.Content>\n                        <AntdLayout.Content>\n                            <div style={{ padding: 24, minHeight: 360 }}>\n                                {children}\n                            </div>\n                        </AntdLayout.Content>\n                        {Footer && <Footer />}\n                    </AntdLayout.Content>\n                    {OffLayoutArea && <OffLayoutArea />}\n                </AntdLayout>\n            )}\n// highlight-end\n            Title={() => (\n                <Link to="/" style={{ float: "left", marginRight: "10px" }}>\n                    <img src="/refine.svg" alt="Refine" />\n                </Link>\n            )}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"Here, we override the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#title"},(0,o.kt)("inlineCode",{parentName:"a"},"<Title>"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"<Layout>"))," components. When we override ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"<Layout>")),", we put the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CustomSider>")," (insted of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"<Sider>"))," that was provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"<Layout>"))," to render it by default) on top of ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/layout/"},(0,o.kt)("inlineCode",{parentName:"a"},"<AntdLayout>")),"."),(0,o.kt)("p",null,"So, we just provided a custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"<Sider>")),". Here's our custom sider that looks horizontal, instead of the default vertical one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/components/sider/index.tsx"',title:'"/src/components/sider/index.tsx"'},'import { useTitle, useMenu } from "@pankod/refine-core";\nimport { Menu } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nconst { Link } = routerProvider;\n\nexport const CustomSider: React.FC = () => {\n// highlight-start\n    const Title = useTitle();\n    const { menuItems, selectedKey } = useMenu();\n// highlight-end\n\n    return (\n        <>\n// highlight-start\n            {Title && <Title collapsed={false} />}\n            <Menu selectedKeys={[selectedKey]} mode="horizontal">\n                {menuItems.map(({ icon, route, label }) => (\n                    <Menu.Item key={route} icon={icon}>\n                        <Link to={route ?? ""}>{label}</Link>\n                    </Menu.Item>\n                ))}\n            </Menu>\n// highlight-end\n        </>\n    );\n};\n')),(0,o.kt)("p",null,"Here, we use ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/ui/useMenu"},(0,o.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook to get the list of current resources and print it."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default, ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"<Sider>"))," is responsible for rendering ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#title"},(0,o.kt)("inlineCode",{parentName:"a"},"<Title>")),". It gets this component (configured by ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and/or ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")),") by ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/refine/useTitle"},(0,o.kt)("inlineCode",{parentName:"a"},"useTitle"))," hook."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},"refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192")))),(0,o.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,o.kt)("p",null,"Here's how it looks in the end:"),(0,o.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/customization/topMenuLayout?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-top-menu-layout-example"}))}l.isMDXComponent=!0}}]);