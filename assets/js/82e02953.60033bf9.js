"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57787],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),s=r(7094),c=r(12466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,r;const{lazy:o,block:p,defaultValue:d,values:f,groupId:b,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===d?d:null!=(t=null!=d?d:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?t:v[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:O}=(0,s.U)(),[E,T]=(0,a.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==E&&g.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,r=j.indexOf(t),n=g[r].value;n!==E&&(P(t),T(n),null!=b&&O(b,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;r=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var a;const t=j.indexOf(e.currentTarget)-1;r=null!=(a=j[t])?a:j[j.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},g.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>j.push(e),onKeyDown:x,onFocus:_,onClick:_},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},96407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));r(65488),r(85162),r(75338),r(44160),r(51635);const l={title:"Refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of refine and react-admin",slug:"refine-vs-react-admin",authors:"melih",tags:["refine","react-admin","react","admin-panel"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},o=void 0,i={permalink:"/blog/refine-vs-react-admin",source:"@site/blog/2021-11-26-refine-vs-react-admin.md",title:"Refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of refine and react-admin",date:"2021-11-26T00:00:00.000Z",formattedDate:"November 26, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react-admin",permalink:"/blog/tags/react-admin"},{label:"react",permalink:"/blog/tags/react"},{label:"admin-panel",permalink:"/blog/tags/admin-panel"}],readingTime:14.59,truncated:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of refine and react-admin",slug:"refine-vs-react-admin",authors:"melih",tags:["refine","react-admin","react","admin-panel"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},prevItem:{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro"},nextItem:{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you are reading this, chances are you are a developer researching options for delivering an admin panel or another internal tool. Together with you, we will take a look at the best admin panel frameworks in response to this need."))}m.isMDXComponent=!0},75338:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/admin_flow-a47b27c6306b409280ca8110729448c1.png"},51635:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/project_setup-5bc45c38f1c5c00d2087791ecd93b1d8.gif"},44160:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/refine_flow-3900c017d7457201e2d8f306c9dec91f.png"}}]);