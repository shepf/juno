"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[6858],{8211:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>h,toc:()=>i});var s=t(4848),o=t(8453);const a={title:"Database Snapshots"},r="Database Snapshots :camera_flash:",h={id:"snapshots",title:"Database Snapshots",description:"You can download a snapshot of the Juno database to reduce the network syncing time. Only the blocks created after the snapshot will be synced when you run the node.",source:"@site/docs/snapshots.md",sourceDirName:".",slug:"/snapshots",permalink:"/next/snapshots",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Database Snapshots"},sidebar:"main",previous:{title:"Monitoring Juno",permalink:"/next/monitoring"},next:{title:"Frequently Asked Questions",permalink:"/next/faq"}},d={},i=[{value:"Mainnet",id:"mainnet",level:2},{value:"Sepolia",id:"sepolia",level:2},{value:"Run Juno with a snapshot",id:"run-juno-with-a-snapshot",level:2},{value:"1. Download the snapshot",id:"1-download-the-snapshot",level:3},{value:"2. Prepare a directory",id:"2-prepare-a-directory",level:3},{value:"3. Extract the snapshot",id:"3-extract-the-snapshot",level:3},{value:"4. Run Juno",id:"4-run-juno",level:3}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"database-snapshots-camera_flash",children:["Database Snapshots ","\ud83d\udcf8"]}),"\n",(0,s.jsx)(e.p,{children:"You can download a snapshot of the Juno database to reduce the network syncing time. Only the blocks created after the snapshot will be synced when you run the node."}),"\n",(0,s.jsx)(e.h2,{id:"mainnet",children:"Mainnet"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Version"}),(0,s.jsx)(e.th,{children:"Size"}),(0,s.jsx)(e.th,{children:"Block"}),(0,s.jsx)(e.th,{children:"Download Link"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:">=v0.9.2"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"172 GB"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"654464"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://juno-snapshots.nethermind.dev/mainnet/juno_mainnet_v0.11.9_654464.tar",children:(0,s.jsx)(e.strong,{children:"juno_mainnet.tar"})})})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"sepolia",children:"Sepolia"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Version"}),(0,s.jsx)(e.th,{children:"Size"}),(0,s.jsx)(e.th,{children:"Block"}),(0,s.jsx)(e.th,{children:"Download Link"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:">=v0.9.2"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"5 GB"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"66477"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://juno-snapshots.nethermind.dev/sepolia/juno_sepolia_v0.11.7_66477.tar",children:(0,s.jsx)(e.strong,{children:"juno_sepolia.tar"})})})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"run-juno-with-a-snapshot",children:"Run Juno with a snapshot"}),"\n",(0,s.jsx)(e.h3,{id:"1-download-the-snapshot",children:"1. Download the snapshot"}),"\n",(0,s.jsx)(e.p,{children:"First, download a snapshot from one of the provided URLs:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"wget -O juno_mainnet.tar https://juno-snapshots.nethermind.dev/mainnet/juno_mainnet_v0.11.9_654464.tar\n"})}),"\n",(0,s.jsx)(e.h3,{id:"2-prepare-a-directory",children:"2. Prepare a directory"}),"\n",(0,s.jsxs)(e.p,{children:["Ensure you have a directory to store the snapshots. We will use the ",(0,s.jsx)(e.code,{children:"$HOME/snapshots"})," directory:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"mkdir -p $HOME/snapshots\n"})}),"\n",(0,s.jsx)(e.h3,{id:"3-extract-the-snapshot",children:"3. Extract the snapshot"}),"\n",(0,s.jsxs)(e.p,{children:["Extract the contents of the downloaded ",(0,s.jsx)(e.code,{children:".tar"})," file into the directory:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"tar -xvf juno_mainnet.tar -C $HOME/snapshots\n"})}),"\n",(0,s.jsx)(e.h3,{id:"4-run-juno",children:"4. Run Juno"}),"\n",(0,s.jsxs)(e.p,{children:["Run the Docker command to start Juno and provide the path to the snapshot using the ",(0,s.jsx)(e.code,{children:"db-path"})," option:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"docker run -d \\\n  --name juno \\\n  -p 6060:6060 \\\n  -v $HOME/snapshots/juno_mainnet:/snapshots/juno_mainnet \\\n  nethermind/juno \\\n  --http \\\n  --http-port 6060 \\\n  --http-host 0.0.0.0 \\\n  --db-path /snapshots/juno_mainnet\n  --eth-node <YOUR ETH NODE>\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["Replace <YOUR ETH NODE> with the WebSocket endpoint of your Ethereum node. For Infura users, your address should be: ",(0,s.jsx)(e.code,{children:"wss://mainnet.infura.io/ws/v3/your-infura-project-id"}),". Ensure you use the WebSocket URL (",(0,s.jsx)(e.code,{children:"ws"}),"/",(0,s.jsx)(e.code,{children:"wss"}),") instead of the HTTP URL (",(0,s.jsx)(e.code,{children:"http"}),"/",(0,s.jsx)(e.code,{children:"https"}),")."]})})]})}function l(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>h});var s=t(6540);const o={},a=s.createContext(o);function r(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);