"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[9587],{54018:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return m}});var n=a(87462),r=a(45987),o=(a(15007),a(64983)),i=a(91515);const s=["components"],d={},l={_frontmatter:d},p=i.Z;function m(e){let{components:t}=e,a=(0,r.Z)(e,s);return(0,o.mdx)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"understanding-the-indesign-object-model"},"Understanding the InDesign object model"),(0,o.mdx)("p",null,"This page goes over how the InDesign object model in more detail. "),(0,o.mdx)("p",null,"When you think about InDesign and InDesign documents, you probably organize the program and its components in your mind. You know that paragraphs are contained by text frames which, in turn, appear on a page. A page is a part of a spread, and one or more spreads make up a document. Documents contain colors, styles, layers, and master spreads. As you think about the layouts you create, you intuitively understand that there is an order to them."),(0,o.mdx)("p",null,'InDesign "thinks" about the contents of a document in the same way. A document contains pages which contain page items (text frames, rectangles, ellipses, and so on). Text frames contain characters, words, paragraphs, and anchored frames; graphics frames contain images, EPS files, or PDF files; and groups have other page items. The things we mention here are the objects that make up an InDesign publication, and they are what we work with when we write InDesign scripts.'),(0,o.mdx)("p",null,"Objects in your publication are arranged in a specific order: frames are on pages, which are inside a document, which is inside the InDesign application object.We are talking about this structure when we speak of an object model or a hierarchy. Understanding the object model is the key to finding the object you want to work with, and your best guide to InDesign scripting is your knowledge of InDesign itself."),(0,o.mdx)("p",null,"Objects have properties (attributes). For example, the properties of a text object include the font used to format the text, the point size, and the leading applied to the text."),(0,o.mdx)("p",null,'Properties have values; for example, the point size of text can be either a number (in points) or the string "Auto" for auto leading. The fill color property of text can be set to a color, a gradient, a mixed ink, or a swatch.'),(0,o.mdx)("p",null,"Properties also can be read/write or read-only. Read/write properties can be set to other values; read-only properties cannot."),(0,o.mdx)("p",null,"Objects also have methods - the verbs of the scripting world or the actions an object can perform. For example, the document object has print, export, and save methods."),(0,o.mdx)("p",null,"Methods have parameters or values that define the effect of the method. For example, the place method of a document has a parameter that defines the file you want to place. Parameters can be required or optional, depending on the method."),(0,o.mdx)("p",null,"The following figure is an overview of the InDesign object model. The diagram isn't a comprehensive list of the objects available to InDesign scripting; instead, it's a conceptual framework for understanding the relationships between the types of objects."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"462px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.18749999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/ff365b75a16cd870e6dfa7150055a6b2/5530d/id-om.webp 320w","/uxp-indesign/static/ff365b75a16cd870e6dfa7150055a6b2/0b6e4/id-om.webp 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/ff365b75a16cd870e6dfa7150055a6b2/dd4a7/id-om.png 320w","/uxp-indesign/static/ff365b75a16cd870e6dfa7150055a6b2/a9e02/id-om.png 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/ff365b75a16cd870e6dfa7150055a6b2/a9e02/id-om.png",alt:"InDesign object model",title:"InDesign object model",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"The objects in the diagram are explained in the following table:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Term"),(0,o.mdx)("th",{parentName:"tr",align:null},"What it represents"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Term"),(0,o.mdx)("td",{parentName:"tr",align:null},"What it represents")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Application"),(0,o.mdx)("td",{parentName:"tr",align:null},"InDesign.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Application defaults"),(0,o.mdx)("td",{parentName:"tr",align:null},"Application default settings, such as colors, paragraph styles, and object styles. Application defaults affect all new documents.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Application methods"),(0,o.mdx)("td",{parentName:"tr",align:null},"JavaScript(Objects also haveExtend Script)The application can take actions such as finding and changing text, copying the selection, creating new documents, and opening libraries.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Application preferences"),(0,o.mdx)("td",{parentName:"tr",align:null},"For example, text preferences, PDF export preferences, and document preferences. Many of the preferences objects also exist at the document level. Just as in the user interface, application preferences are applied to new documents. Document preferences change the settings of a specific document.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Application properties"),(0,o.mdx)("td",{parentName:"tr",align:null},"The properties of the application, for example, the full path to the application, the locale of the application, and the user name.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Books"),(0,o.mdx)("td",{parentName:"tr",align:null},"A collection of open books.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Document"),(0,o.mdx)("td",{parentName:"tr",align:null},"An InDesign document.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Document defaults"),(0,o.mdx)("td",{parentName:"tr",align:null},"Document default settings, such as colors, paragraph styles, and text formatting defaults.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Document elements"),(0,o.mdx)("td",{parentName:"tr",align:null},"For example, the stories, imported graphics, and pages of a document. The figure that precedes this table shows pages and stories because those objects are essential containers for other objects, but document elements also include rectangles, ovals, groups, XML elements, and any other type of object you can import or create.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Document methods"),(0,o.mdx)("td",{parentName:"tr",align:null},"Sample Scripts with UXP APIsThe documents can take actions such as closing a document, printing a document, and exporting a document.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Document preferences"),(0,o.mdx)("td",{parentName:"tr",align:null},"The preferences of a document, such as guide preferences, view preferences, and document preferences.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Document properties"),(0,o.mdx)("td",{parentName:"tr",align:null},"For example, the document filename, number of pages, and zero point location.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Documents"),(0,o.mdx)("td",{parentName:"tr",align:null},"A collection of open documents.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Libraries"),(0,o.mdx)("td",{parentName:"tr",align:null},"A collection of open libraries.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Page"),(0,o.mdx)("td",{parentName:"tr",align:null},"A single page in an InDesign document.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Page items"),(0,o.mdx)("td",{parentName:"tr",align:null},"Any object you can create or place on a page. There are many types of page items, such as text frames, rectangles, graphic lines, or groups.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Pages or spreads"),(0,o.mdx)("td",{parentName:"tr",align:null},"The pages or spreads in an InDesign document.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Stories"),(0,o.mdx)("td",{parentName:"tr",align:null},"The text in an InDesign document.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Text objects"),(0,o.mdx)("td",{parentName:"tr",align:null},"Characters, words, lines, paragraphs, and text columns are examples of text objects in an InDesign story.")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-object-modal-in-design-object-model-index-md-8d752365dd6a1a33eea8.js.map