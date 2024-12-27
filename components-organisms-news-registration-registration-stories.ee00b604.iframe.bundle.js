"use strict";(self.webpackChunkence_pence_huta_next=self.webpackChunkence_pence_huta_next||[]).push([[317],{"./src/components/organisms/news/registration/registration.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Desktop:()=>Desktop,Mobile:()=>Mobile,Tablet:()=>Tablet,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_templates__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/templates/index.tsx"),_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/storybook.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Organisms/News/Registration",component:__webpack_require__("./src/components/organisms/news/registration/registration.tsx").c,parameters:{layout:"fullscreen",...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.lr)("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=338-11091&t=GhlP2VAdQe4cmQbA-4")},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_templates__WEBPACK_IMPORTED_MODULE_1__.RT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_templates__WEBPACK_IMPORTED_MODULE_1__.gZ,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})})]},Mobile={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.hI)("Mobile")}},Tablet={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.hI)("Tablet")}},Desktop={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.hI)("Desktop")}},__namedExportsOrder=["Mobile","Tablet","Desktop"];Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Mobile")\n  }\n}',...Mobile.parameters?.docs?.source}}},Tablet.parameters={...Tablet.parameters,docs:{...Tablet.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Tablet")\n  }\n}',...Tablet.parameters?.docs?.source}}},Desktop.parameters={...Desktop.parameters,docs:{...Desktop.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Desktop")\n  }\n}',...Desktop.parameters?.docs?.source}}}},"./src/components/organisms/news/registration/registration.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Registration});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),atoms=__webpack_require__("./src/components/atoms/index.ts"),templates=__webpack_require__("./src/components/templates/index.tsx");const adult_talking={src:"static/media/adult-talking.da45e6ad.svg",height:500,width:500,blurDataURL:"static/media/adult-talking.da45e6ad.svg"};var next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const Registration=()=>{const{currentYear,nextYear}=(()=>{const currentDate=new Date;return currentDate.getMonth()<6?{currentYear:currentDate.getFullYear()-1,nextYear:currentDate.getFullYear()}:{currentYear:currentDate.getFullYear(),nextYear:currentDate.getFullYear()+1}})();return(0,jsx_runtime.jsxs)(templates.wn,{className:"flex flex-col items-center gap-strong",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center gap-subtle",children:[(0,jsx_runtime.jsxs)("h2",{className:"text-center font-headings text-h2 text-text",children:["Zapisy na rok ",currentYear,"/",nextYear]}),(0,jsx_runtime.jsxs)("p",{className:"max-w-prose text-center text-p1 text-text-subtle",children:["Zapisy na rok ",currentYear,"/",nextYear," już rozpoczęte. Nasz żłobek znajduje się na Osiedlu Kliny, zaledwie kilka kroków od pętli autobusowej. Aby zapytać o dostępność miejsc, skontaktuj się z nami pod numerem telefonu ",(0,jsx_runtime.jsx)(atoms.N_,{href:"tel:+48691999935",children:"691 999 935"})," ","lub skorzystaj z"," ",(0,jsx_runtime.jsx)(atoms.N_,{href:"/kontakt#contact-form-title",children:"formularza kontaktowego"})," ","na stronie."," ",(0,jsx_runtime.jsx)(atoms.N_,{href:"https://www.facebook.com/encepencehuta",children:"Sprawdź również nasz fanpage"}),", ","aby dowiedzieć się więcej!"," "]})]}),(0,jsx_runtime.jsx)(next_image.A,{src:adult_talking,alt:""})]})};Registration.__docgenInfo={description:"",methods:[],displayName:"Registration"}},"./src/components/templates/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RT:()=>AppContainer,gZ:()=>Main,wn:()=>Section});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),misc=__webpack_require__("./src/utils/misc.tsx");const AppContainer=({className,...props})=>(0,jsx_runtime.jsx)("div",{className:(0,misc.cn)("mx-auto grid max-w-[1920px] grid-cols-1 grid-rows-[auto_1fr_auto] gap-y-section p-app lg:grid-cols-12",className),...props});AppContainer.__docgenInfo={description:"",methods:[],displayName:"AppContainer"};const Main=({className,...props})=>(0,jsx_runtime.jsx)("main",{className:(0,misc.cn)("col-span-full grid grid-cols-1 gap-y-section lg:grid-cols-12",className),...props});Main.__docgenInfo={description:"",methods:[],displayName:"Main"};const Section=({className,...props})=>(0,jsx_runtime.jsx)("section",{className:(0,misc.cn)("col-span-full lg:col-start-2 lg:col-end-12",className),...props});Section.__docgenInfo={description:"",methods:[],displayName:"Section"}}}]);