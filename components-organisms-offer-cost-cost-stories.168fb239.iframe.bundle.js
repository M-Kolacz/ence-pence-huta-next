"use strict";(self.webpackChunkence_pence_huta_next=self.webpackChunkence_pence_huta_next||[]).push([[4450],{"./src/components/organisms/offer/cost/cost.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Desktop:()=>Desktop,Mobile:()=>Mobile,Tablet:()=>Tablet,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_templates__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/templates/index.tsx"),_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/storybook.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Organisms/Offer/Cost",component:__webpack_require__("./src/components/organisms/offer/cost/cost.tsx")._,parameters:{layout:"fullscreen",...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.lr)("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta?node-id=467-6161&t=nWj3xrDFwTTZ7yj3-4")},args:{},argTypes:{},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_templates__WEBPACK_IMPORTED_MODULE_1__.RT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},Mobile={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.hI)("Mobile")}},Tablet={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.hI)("Tablet")}},Desktop={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.hI)("Desktop")}},__namedExportsOrder=["Mobile","Tablet","Desktop"];Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Mobile")\n  }\n}',...Mobile.parameters?.docs?.source}}},Tablet.parameters={...Tablet.parameters,docs:{...Tablet.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Tablet")\n  }\n}',...Tablet.parameters?.docs?.source}}},Desktop.parameters={...Desktop.parameters,docs:{...Desktop.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Desktop")\n  }\n}',...Desktop.parameters?.docs?.source}}}},"./src/components/organisms/offer/cost/cost.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Cost});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),atoms=__webpack_require__("./src/components/atoms/index.ts"),templates=__webpack_require__("./src/components/templates/index.tsx");const cost={src:"static/media/cost.5c193091.svg",height:389,width:521,blurDataURL:"static/media/cost.5c193091.svg"};var next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const Cost=()=>(0,jsx_runtime.jsxs)(templates.wn,{className:"flex flex-col gap-strong md:flex-row md:items-center","aria-labelledby":"cost",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-subtle md:justify-center",children:[(0,jsx_runtime.jsx)("h2",{className:"w-full max-w-prose font-headings text-h2 text-text",id:"cost",children:"Opłaty związane z pobytem dziecka"}),(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-subtle",children:(0,jsx_runtime.jsxs)("ul",{className:"flex flex-col gap-4",children:[(0,jsx_runtime.jsxs)("li",{className:"flex gap-2 align-middle",children:[(0,jsx_runtime.jsx)(atoms.In,{name:"document-money",className:"h-8 w-8 flex-shrink-0"}),(0,jsx_runtime.jsx)("p",{className:"max-w-prose text-p1 text-text-subtle",children:"Wpisowe w wysokości 450 zł - to opłata jednorazowa, bezzwrotna, płatna przy podpisaniu umowy."})]}),(0,jsx_runtime.jsxs)("li",{className:"flex gap-2 align-middle",children:[(0,jsx_runtime.jsx)(atoms.In,{name:"dollars",className:"h-8 w-8 flex-shrink-0"}),(0,jsx_runtime.jsx)("p",{className:"max-w-prose text-p1 text-text-subtle",children:"Podstawowe czesne: 1860 zł - kwota bez uwzględnienia dotacji."})]}),(0,jsx_runtime.jsxs)("li",{className:"flex gap-2 align-middle",children:[(0,jsx_runtime.jsx)(atoms.In,{name:"piggy-bank",className:"h-8 w-8 flex-shrink-0"}),(0,jsx_runtime.jsx)("p",{className:"max-w-prose text-p1 text-text-subtle",children:"Czesne z uwzględnieniem dotacji z ZUS i UM wynosi około 750 zł za 10 godzin."})]})]})})]}),(0,jsx_runtime.jsx)(next_image.A,{src:cost,alt:"",className:"max-h-[500px] max-w-[500px] md:order-first md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"})]});Cost.__docgenInfo={description:"",methods:[],displayName:"Cost"}},"./src/components/templates/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RT:()=>AppContainer,gZ:()=>Main,wn:()=>Section});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),misc=__webpack_require__("./src/utils/misc.tsx");const AppContainer=({className,...props})=>(0,jsx_runtime.jsx)("div",{className:(0,misc.cn)("mx-auto grid max-w-[1920px] grid-cols-1 grid-rows-[auto_1fr_auto] gap-y-section p-app lg:grid-cols-12",className),...props});AppContainer.__docgenInfo={description:"",methods:[],displayName:"AppContainer"};const Main=({className,...props})=>(0,jsx_runtime.jsx)("main",{className:(0,misc.cn)("col-span-full grid grid-cols-1 gap-y-section lg:grid-cols-12",className),...props});Main.__docgenInfo={description:"",methods:[],displayName:"Main"};const Section=({className,...props})=>(0,jsx_runtime.jsx)("section",{className:(0,misc.cn)("col-span-full lg:col-start-2 lg:col-end-12",className),...props});Section.__docgenInfo={description:"",methods:[],displayName:"Section"}}}]);