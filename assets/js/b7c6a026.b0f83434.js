"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[9454],{232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=t(4848),a=t(8453),o=t(3859),i=t(9365);const s={title:"Running Juno on GCP"},l="Running Juno on GCP :cloud:",u={id:"running-on-gcp",title:"Running Juno on GCP",description:"To run Juno on the Google Cloud Platform (GCP), you can use the Starknet RPC Virtual Machine (VM) developed by Nethermind.",source:"@site/docs/running-on-gcp.md",sourceDirName:".",slug:"/running-on-gcp",permalink:"/next/running-on-gcp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Running Juno on GCP"},sidebar:"main",previous:{title:"Configuring Juno",permalink:"/next/configuring"},next:{title:"Updating Juno",permalink:"/next/updating"}},c={},d=[{value:"1. Install the Starknet RPC Node",id:"1-install-the-starknet-rpc-node",level:2},{value:"2. Configure the Juno client",id:"2-configure-the-juno-client",level:2},{value:"3. Post-configuration and testing",id:"3-post-configuration-and-testing",level:2},{value:"4. Enable Juno during startup",id:"4-enable-juno-during-startup",level:2},{value:"5. Interact with the Juno node",id:"5-interact-with-the-juno-node",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"running-juno-on-gcp-cloud",children:["Running Juno on GCP ","\u2601\ufe0f"]}),"\n",(0,r.jsx)(n.p,{children:"To run Juno on the Google Cloud Platform (GCP), you can use the Starknet RPC Virtual Machine (VM) developed by Nethermind."}),"\n",(0,r.jsx)(n.h2,{id:"1-install-the-starknet-rpc-node",children:"1. Install the Starknet RPC Node"}),"\n",(0,r.jsxs)(n.p,{children:["Head to the ",(0,r.jsx)(n.a,{href:"https://console.cloud.google.com/marketplace/browse?q=Starknet%20RPC%20Node",children:"Google Marketplace"})," and search for ",(0,r.jsx)(n.strong,{children:'"Starknet RPC Node"'}),". Then, click the ",(0,r.jsx)(n.strong,{children:'"GET STARTED"'})," button to begin the deployment process."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Starknet RPC Node overview",src:t(3745).A+"",width:"2022",height:"1543"})}),"\n",(0,r.jsx)(n.h2,{id:"2-configure-the-juno-client",children:"2. Configure the Juno client"}),"\n",(0,r.jsxs)(n.p,{children:["Choose the configuration settings for the Juno client and click the ",(0,r.jsx)(n.strong,{children:'"DEPLOY"'})," button."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Starknet RPC Node configuration",src:t(8506).A+"",width:"2002",height:"1464"})}),"\n",(0,r.jsx)(n.h2,{id:"3-post-configuration-and-testing",children:"3. Post-configuration and testing"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Starknet RPC Node testing",src:t(2974).A+"",width:"2320",height:"1451"})}),"\n",(0,r.jsx)(n.h2,{id:"4-enable-juno-during-startup",children:"4. Enable Juno during startup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Click on the name of the newly created VM instance to view its details."}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:'"Edit"'})," button."]}),"\n",(0,r.jsxs)(n.li,{children:["Head to the ",(0,r.jsx)(n.strong,{children:'"Automation"'})," section and enter the following startup script:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#! /bin/bash\nsudo /usr/local/bin/run_juno.sh\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:'"Save"'})," button."]}),"\n",(0,r.jsx)(n.li,{children:"Restart the VM."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"5-interact-with-the-juno-node",children:"5. Interact with the Juno node"}),"\n",(0,r.jsxs)(n.p,{children:["You can interact with Juno using its ",(0,r.jsx)(n.a,{href:"json-rpc",children:"JSON-RPC Interface"}),". Here's an example to check the availability of Juno:"]}),"\n","\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(i.A,{value:"request",label:"Request",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl --location \'http://localhost:6060\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "jsonrpc": "2.0",\n    "method": "juno_version",\n    "params": [],\n    "id": 1\n}\'\n'})})}),(0,r.jsx)(i.A,{value:"response",label:"Response",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": "v0.11.7",\n  "id": 1\n}\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To learn how to configure Juno, check out the ",(0,r.jsx)(n.a,{href:"configuring",children:"Configuring Juno"})," guide."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},3859:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),a=t(4164),o=t(6641),i=t(6347),s=t(205),l=t(8874),u=t(4035),c=t(2993);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,d]=g({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=u??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function C(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(x,{...e,...n})]})}function k(e){const n=(0,m.A)();return(0,j.jsx)(C,{...e,children:d(e.children)},String(n))}},8506:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/config-478358ba911e0114fef442e203445ca5.png"},3745:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/overview-20be8c1b413f1411f9ea1876d7def3e3.png"},2974:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/testing-d394a5fc578faa9fa356112a62367548.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);