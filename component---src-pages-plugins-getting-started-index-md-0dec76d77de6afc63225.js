"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[77],{74836:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return c}});var t=n(87462),i=n(45987),p=(n(15007),n(64983)),l=n(91515);const o=["components"],d={},r=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.mdx)("div",e)});var s;const u={_frontmatter:d},g=l.Z;function c(e){let{components:a}=e,n=(0,i.Z)(e,o);return(0,p.mdx)(g,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"building-your-first-plugin"},"Building your first plugin"),(0,p.mdx)("p",null,"This tutorial will walk you through the process of building your first plugin. You will learn how to create a plugin, add a command to it, and then run it in InDesign."),(0,p.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,p.mdx)("p",null,"Before you start, make sure you have the following software installed on your machine:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"InDesign 2023 (v18.5)")," or later (can be installed from the ",(0,p.mdx)("em",{parentName:"li"},"Creative Cloud Desktop")," app)"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"UXP Developer Tool v1.9")," (can be ",(0,p.mdx)("a",{parentName:"li",href:"https://creativecloud.adobe.com/apps/download/uxp-developer-tools"},"installed from the ",(0,p.mdx)("em",{parentName:"a"},"Creative Cloud Desktop")," app"),")"),(0,p.mdx)("li",{parentName:"ul"},"A ",(0,p.mdx)("strong",{parentName:"li"},"code editor")," of your choice (for example, ",(0,p.mdx)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),")")),(0,p.mdx)("h2",{id:"steps"},"Steps"),(0,p.mdx)("h3",{id:"step-1-create-a-plugin"},"Step 1: Create a plugin"),(0,p.mdx)("p",null,"You can create your plugin directly in the UXP Developer Tool. To do so, open the UXP Developer Tool and click ",(0,p.mdx)("strong",{parentName:"p"},"Create Plugin"),"."),(0,p.mdx)("p",null,"This opens a dialog where you can enter the details for your plugin:"),(0,p.mdx)("figure",null,"\n  ",(0,p.mdx)("span",{parentName:"figure",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/5530d/create-plugin.webp 320w","/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/0c8fb/create-plugin.webp 640w","/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/94b1e/create-plugin.webp 1280w","/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/0b34d/create-plugin.webp 1920w","/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/e3dad/create-plugin.webp 2214w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/dd4a7/create-plugin.png 320w","/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/0f09e/create-plugin.png 640w","/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/bbbf7/create-plugin.png 1280w","/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/ac7a9/create-plugin.png 1920w","/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/35d52/create-plugin.png 2214w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/34d8a6a31d12429b5c05ae1879c42001/bbbf7/create-plugin.png",alt:"Screenshot of the create plugin dialog",title:"Screenshot of the create plugin dialog",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n  ",(0,p.mdx)("figcaption",{parentName:"figure"},"The create plugin dialog")),(0,p.mdx)("p",null,"In the dialog, enter the following information:"),(0,p.mdx)("table",null,(0,p.mdx)("thead",{parentName:"table"},(0,p.mdx)("tr",{parentName:"thead"},(0,p.mdx)("th",{parentName:"tr",align:null},"Field"),(0,p.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,p.mdx)("tbody",{parentName:"table"},(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Name"),(0,p.mdx)("td",{parentName:"tr",align:null},"My First Plugin")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Host Application"),(0,p.mdx)("td",{parentName:"tr",align:null},"Adobe InDesign")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Host Application Version"),(0,p.mdx)("td",{parentName:"tr",align:null},"18.5")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Template"),(0,p.mdx)("td",{parentName:"tr",align:null},"quick-starter")))),(0,p.mdx)("p",null,"Then click ",(0,p.mdx)("strong",{parentName:"p"},"Select Folder")," and choose a location on your machine where you want to create the plugin."),(0,p.mdx)("p",null,"The UXP Developer Tool will create a new folder with the name you specified in the location you specified. The folder will contain the following files:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre"},"My First Plugin\n├── manifest.json\n├── index.html\n└── index.js\n")),(0,p.mdx)("h3",{id:"step-2-run-the-plugin"},"Step 2: Run the plugin"),(0,p.mdx)("p",null,"Now that you have created your plugin, you can run it in InDesign."),(0,p.mdx)("p",null,"First things first, you'll need to run InDesign."),(0,p.mdx)("p",null,"Then, in the UXP Developer Tool, in the row for your plugin, click ",(0,p.mdx)("strong",{parentName:"p"},"⋯ ","→"," Load"),":"),(0,p.mdx)("figure",null,"\n  ",(0,p.mdx)("span",{parentName:"figure",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/91c2dca2aaed77336735595e074f5b06/5530d/load-plugin.webp 320w","/uxp-indesign/static/91c2dca2aaed77336735595e074f5b06/0c8fb/load-plugin.webp 640w","/uxp-indesign/static/91c2dca2aaed77336735595e074f5b06/94b1e/load-plugin.webp 1280w","/uxp-indesign/static/91c2dca2aaed77336735595e074f5b06/e3f3a/load-plugin.webp 1854w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/91c2dca2aaed77336735595e074f5b06/dd4a7/load-plugin.png 320w","/uxp-indesign/static/91c2dca2aaed77336735595e074f5b06/0f09e/load-plugin.png 640w","/uxp-indesign/static/91c2dca2aaed77336735595e074f5b06/bbbf7/load-plugin.png 1280w","/uxp-indesign/static/91c2dca2aaed77336735595e074f5b06/b7708/load-plugin.png 1854w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/91c2dca2aaed77336735595e074f5b06/bbbf7/load-plugin.png",alt:"Screenshot of the UXP Developer Tool with the load button highlighted",title:"Screenshot of the UXP Developer Tool with the load button highlighted",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n  ",(0,p.mdx)("figcaption",{parentName:"figure"},"The load button")),(0,p.mdx)("p",null,"This will load your plugin into InDesign. You should see the plugin's panel appear in InDesign:"),(0,p.mdx)("figure",null,"\n  ",(0,p.mdx)("span",{parentName:"figure",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/5530d/loaded-plugin.webp 320w","/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/0c8fb/loaded-plugin.webp 640w","/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/94b1e/loaded-plugin.webp 1280w","/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/0b34d/loaded-plugin.webp 1920w","/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/c0c3e/loaded-plugin.webp 2084w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/dd4a7/loaded-plugin.png 320w","/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/0f09e/loaded-plugin.png 640w","/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/bbbf7/loaded-plugin.png 1280w","/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/ac7a9/loaded-plugin.png 1920w","/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/ba1e1/loaded-plugin.png 2084w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/0e43ea770ef9a885e43ae57244243ae0/bbbf7/loaded-plugin.png",alt:"Screenshot of InDesign with the plugin panel open",title:"Screenshot of InDesign with the plugin panel open",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n  ",(0,p.mdx)("figcaption",{parentName:"figure"},"The plugin panel")),(0,p.mdx)("h3",{id:"step-3-make-a-change"},"Step 3: Make a change"),(0,p.mdx)("p",null,"Now that you have your plugin running in InDesign, let's make this plugin your own."),(0,p.mdx)("p",null,"Open the ",(0,p.mdx)("inlineCode",{parentName:"p"},"index.html")," file in your code editor. You should see the following code:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <script src="./index.js"><\/script>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n    <button id="btnCreateText">Create Text</button>\n  </body>\n</html>\n')),(0,p.mdx)("p",null,"This is the HTML code that defines the content of your plugin's panel. You can change it to whatever you want."),(0,p.mdx)("p",null,'For example, you could change the heading to say "My First Plugin":'),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-html"},"<h1>My First Plugin</h1>\n")),(0,p.mdx)("p",null,"Or you could add a paragraph below the heading:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-html"},"<p>This is my first plugin.</p>\n")),(0,p.mdx)("p",null,"To see your changes, you'll need to reload the plugin in InDesign. To do so, in the UXP Developer Tool, in the row for your plugin, click ",(0,p.mdx)("strong",{parentName:"p"},"⋯ ","→"," Reload"),":"),(0,p.mdx)("figure",null,"\n  ",(0,p.mdx)("span",{parentName:"figure",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/17af7d4f33fc57cb82835c2e862ae565/5530d/reload-plugin.webp 320w","/uxp-indesign/static/17af7d4f33fc57cb82835c2e862ae565/0c8fb/reload-plugin.webp 640w","/uxp-indesign/static/17af7d4f33fc57cb82835c2e862ae565/94b1e/reload-plugin.webp 1280w","/uxp-indesign/static/17af7d4f33fc57cb82835c2e862ae565/6a1cb/reload-plugin.webp 1844w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/17af7d4f33fc57cb82835c2e862ae565/dd4a7/reload-plugin.png 320w","/uxp-indesign/static/17af7d4f33fc57cb82835c2e862ae565/0f09e/reload-plugin.png 640w","/uxp-indesign/static/17af7d4f33fc57cb82835c2e862ae565/bbbf7/reload-plugin.png 1280w","/uxp-indesign/static/17af7d4f33fc57cb82835c2e862ae565/b88a2/reload-plugin.png 1844w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/17af7d4f33fc57cb82835c2e862ae565/bbbf7/reload-plugin.png",alt:"Screenshot of the UXP Developer Tool with the reload button highlighted",title:"Screenshot of the UXP Developer Tool with the reload button highlighted",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n  ",(0,p.mdx)("figcaption",{parentName:"figure"},"The reload button")),(0,p.mdx)(r,{slots:"text",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"If you make any changes to the ",(0,p.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file, you'll need to fully unload and reload the plugin. To do so, in the UXP Developer Tool, in the row for your plugin, click ",(0,p.mdx)("strong",{parentName:"p"},"⋯ ","→"," Unload")," and ",(0,p.mdx)("strong",{parentName:"p"},"⋯ ","→"," Load"),":"),(0,p.mdx)("h2",{id:"next-steps"},"Next steps"),(0,p.mdx)("p",null,"Congratulations! You have successfully created your first plugin. Next, we'll take a look at some of the concepts that are important for plugin development."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-plugins-getting-started-index-md-0dec76d77de6afc63225.js.map