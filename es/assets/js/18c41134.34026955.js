"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3494:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},s="Markdown Features",i={unversionedId:"tutorial-basics/markdown-features",id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/docusaurus-gitbuilding/es/docs/tutorial-basics/markdown-features",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/docusaurus-gitbuilding/es/docs/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/docusaurus-gitbuilding/es/docs/tutorial-basics/deploy-your-site"}},l={},u=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],c=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${t}`)}},t)},p={toc:u,Highlight:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"markdown-features"},"Markdown Features"),(0,a.kt)("p",null,"Docusaurus supports ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,a.kt)("strong",{parentName:"p"},"additional features"),"."),(0,a.kt)("h2",{id:"front-matter"},"Front Matter"),(0,a.kt)("p",null,"Markdown documents have metadata at the top called ",(0,a.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/create-a-page).\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./create-a-page.md).\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus-gitbuilding/es/docs/tutorial-basics/create-a-page"},"Create a page"),"."),(0,a.kt)("h2",{id:"images"},"Images"),(0,a.kt)("p",null,"Regular Markdown images are supported."),(0,a.kt)("p",null,"You can use absolute paths to reference images in the static directory (",(0,a.kt)("inlineCode",{parentName:"p"},"static/img/docusaurus.png"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/docusaurus.png)\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus logo",src:n(9395).Z,width:"200",height:"200"})),(0,a.kt)("p",null,"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](./img/docusaurus.png)\n")),(0,a.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,a.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,a.kt)("h2",{id:"admonitions"},"Admonitions"),(0,a.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,a.kt)("admonition",{title:"My tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,a.kt)("admonition",{title:"Take care",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This action is dangerous")),(0,a.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,a.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,a.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,a.kt)("p",null,"This is ",(0,a.kt)(c,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,a.kt)("p",null,"This is ",(0,a.kt)(c,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}m.isMDXComponent=!0},9395:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-07916c101cce0121844478d29aad6230.png"}}]);