"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[8319],{71417:function(e,t,i){i.r(t),i.d(t,{_frontmatter:function(){return c},default:function(){return r}});var n=i(87462),a=i(45987),s=(i(15007),i(64983)),p=i(91515);const d=["components"],c={},o={_frontmatter:c},b=p.Z;function r(e){let{components:t}=e,i=(0,a.Z)(e,d);return(0,s.mdx)(b,(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"debugging-a-script"},"Debugging a Script"),(0,s.mdx)("p",null,"This page goes over how to debug common problems you may run into while using InDesign Scripting. "),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The UXP logs and console.log from script gets written to path ",(0,s.mdx)("inlineCode",{parentName:"li"},"/Users/<user name>/Library/Caches/UXPLogs/")," in Mac and ",(0,s.mdx)("inlineCode",{parentName:"li"},"C:\\Users\\<username>\\AppData\\Local\\Temp\\UXPLogs")," in Windows. If you find multiple files in the location, pick the one with the latest timestamp."),(0,s.mdx)("li",{parentName:"ul"},"All the sample scripts have a try /catch block. Any exceptions raised from the InDesign side can be caught and dumped to the console or displayed on the dialog box."),(0,s.mdx)("li",{parentName:"ul"},"Interpreter parsing errors go directly to the UXP logs."),(0,s.mdx)("li",{parentName:"ul"},"User can print any message using ‘console.log(formatted message). Messages will appear in a log file.")),(0,s.mdx)("h2",{id:"debugging-script-files-using-udt"},"Debugging Script files using UDT"),(0,s.mdx)("p",null,"Script files are executed in a context that is mostly the same as those used in UXP plugins. Using ",(0,s.mdx)("a",{parentName:"p",href:"https://creativecloud.adobe.com/apps/download/uxp-developer-tools"},"UXP Developer Tool")," (UDT) version 1.7.0, you can step through and debug a script."),(0,s.mdx)("p",null,'You can debug script files in UDT by clicking on "Connected Apps", choosing InDesign, and then adding your script from there:'),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/5530d/step1.webp 320w","/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/0c8fb/step1.webp 640w","/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/94b1e/step1.webp 1280w","/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/0b34d/step1.webp 1920w","/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/d5269/step1.webp 2560w","/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/cb3df/step1.webp 4434w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/dd4a7/step1.png 320w","/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/0f09e/step1.png 640w","/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/bbbf7/step1.png 1280w","/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/ac7a9/step1.png 1920w","/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/c7a69/step1.png 2560w","/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/09be0/step1.png 4434w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/3b90d9e8891b70e98be4aa00e767cdcb/bbbf7/step1.png",alt:"step 1 of loading an InDesign script into UDT",title:"step 1 of loading an InDesign script into UDT",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/5530d/step2.webp 320w","/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/0c8fb/step2.webp 640w","/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/94b1e/step2.webp 1280w","/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/0b34d/step2.webp 1920w","/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/d5269/step2.webp 2560w","/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/cb3df/step2.webp 4434w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/dd4a7/step2.png 320w","/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/0f09e/step2.png 640w","/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/bbbf7/step2.png 1280w","/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/ac7a9/step2.png 1920w","/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/c7a69/step2.png 2560w","/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/09be0/step2.png 4434w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/358bb18d30076b7661726cd6914e936e/bbbf7/step2.png",alt:"step 2 of loading an InDesign script into UDT",title:"step 2 of loading an InDesign script into UDT",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Once you've loaded a script in, you can debug with a breakpoint activated. From here you set breakpoints or Step Into the script files. "))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-debugging-index-md-234ba54c0a9bec4bfe95.js.map