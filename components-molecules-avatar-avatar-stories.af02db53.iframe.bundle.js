"use strict";(self.webpackChunkence_pence_huta_next=self.webpackChunkence_pence_huta_next||[]).push([[831],{"./src/components/molecules/avatar/avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/storybook.ts"),_avatar_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/molecules/avatar/avatar.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/Avatar",component:_avatar_tsx__WEBPACK_IMPORTED_MODULE_2__.Cy,parameters:{layout:"centered",...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_1__.lr)("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=271-5457&t=FP6B4g9BwT0pCpt3-4")},tags:["autodocs"]},Component={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_avatar_tsx__WEBPACK_IMPORTED_MODULE_2__.Cy,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avatar_tsx__WEBPACK_IMPORTED_MODULE_2__.d9,{src:"/img/parents/1.svg",alt:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_avatar_tsx__WEBPACK_IMPORTED_MODULE_2__.tN,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avatar_tsx__WEBPACK_IMPORTED_MODULE_2__.YU,{children:"Patrycja"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avatar_tsx__WEBPACK_IMPORTED_MODULE_2__.ix,{children:"Mama Łucji"})]})]})},__namedExportsOrder=["Component"];Component.parameters={...Component.parameters,docs:{...Component.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <AvatarRoot {...args}>\n                <AvatarImg src="/img/parents/1.svg" alt="" />\n                <AvatarTextRoot>\n                    <AvatarTitle>Patrycja</AvatarTitle>\n                    <AvatarCaption>Mama Łucji</AvatarCaption>\n                </AvatarTextRoot>\n            </AvatarRoot>;\n  }\n}',...Component.parameters?.docs?.source}}}},"./src/components/molecules/avatar/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cy:()=>AvatarRoot,YU:()=>AvatarTitle,d9:()=>AvatarImg,ix:()=>AvatarCaption,tN:()=>AvatarTextRoot});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_utils_misc_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/misc.tsx"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const AvatarRoot=({className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_app_utils_misc_tsx__WEBPACK_IMPORTED_MODULE_2__.cn)("flex gap-4",className),...props}),AvatarImg=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{...props,alt:props.alt||""}),AvatarTextRoot=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props}),AvatarTitle=({className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:(0,_app_utils_misc_tsx__WEBPACK_IMPORTED_MODULE_2__.cn)("text-p2 text-text-subtle",className),...props}),AvatarCaption=({className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:(0,_app_utils_misc_tsx__WEBPACK_IMPORTED_MODULE_2__.cn)("text-p1 text-text",className),...props});AvatarRoot.__docgenInfo={description:"",methods:[],displayName:"AvatarRoot"},AvatarImg.__docgenInfo={description:"",methods:[],displayName:"AvatarImg"},AvatarTextRoot.__docgenInfo={description:"",methods:[],displayName:"AvatarTextRoot"},AvatarTitle.__docgenInfo={description:"",methods:[],displayName:"AvatarTitle"},AvatarCaption.__docgenInfo={description:"",methods:[],displayName:"AvatarCaption"}},"./src/utils/misc.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/utils/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hI:()=>setViewport,kK:()=>disableA11yRules,lr:()=>setDesignPreview,rv:()=>disableControls});__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var _storybook_modes_ts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/modes.ts");__webpack_require__("./node_modules/process/browser.js");const disableControls=controls=>{const disabledOptions={};return controls.forEach((control=>Object.assign(disabledOptions,{[control]:{table:{disable:!0}}}))),disabledOptions},disableA11yRules=rules=>({a11y:{config:{rules:rules.map((rule=>({id:rule,enabled:!1})))}}}),setViewport=device=>({viewport:{defaultViewport:device},chromatic:{modes:{[device]:_storybook_modes_ts__WEBPACK_IMPORTED_MODULE_1__.AF[device]}}}),setDesignPreview=url=>({design:{type:"figma",url:url.replace("/design/","/file/")}})}}]);