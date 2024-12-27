"use strict";(self.webpackChunkence_pence_huta_next=self.webpackChunkence_pence_huta_next||[]).push([[634],{"./src/components/organisms/homepage/testimonials/testimonials.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Desktop:()=>Desktop,Mobile:()=>Mobile,NavigateThroughTestimonials:()=>NavigateThroughTestimonials,Tablet:()=>Tablet,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_app_components_templates__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/templates/index.tsx"),_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/storybook.ts"),_testimonials_helpers_ts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/organisms/homepage/testimonials/testimonials.helpers.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Organisms/Homepage/Testimonials",component:__webpack_require__("./src/components/organisms/homepage/testimonials/testimonials.tsx").b,parameters:{layout:"fullscreen",...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_3__.lr)("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=261-4716&t=GhlP2VAdQe4cmQbA-4")},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_templates__WEBPACK_IMPORTED_MODULE_2__.RT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_templates__WEBPACK_IMPORTED_MODULE_2__.gZ,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})})]},Mobile={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_3__.hI)("Mobile")}},Tablet={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_3__.hI)("Tablet")}},Desktop={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_3__.hI)("Desktop")}},NavigateThroughTestimonials={name:"Navigate through testimonials",play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement),testimonialButtons=await canvas.findAllByRole("button",{name:/Wyświetl opinie numer.*/});await canvas.findByText(_testimonials_helpers_ts__WEBPACK_IMPORTED_MODULE_4__.r[0].description),await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(testimonialButtons[1]),await canvas.findByText(_testimonials_helpers_ts__WEBPACK_IMPORTED_MODULE_4__.r[1].description);const nextButton=await canvas.findByRole("button",{name:"Następna opinia"});await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(nextButton),await canvas.findByText(_testimonials_helpers_ts__WEBPACK_IMPORTED_MODULE_4__.r[2].description);const prevButton=await canvas.findByRole("button",{name:"Poprzednia opinia"});await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(prevButton),await canvas.findByText(_testimonials_helpers_ts__WEBPACK_IMPORTED_MODULE_4__.r[1].description)}},__namedExportsOrder=["Mobile","Tablet","Desktop","NavigateThroughTestimonials"];Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Mobile")\n  }\n}',...Mobile.parameters?.docs?.source}}},Tablet.parameters={...Tablet.parameters,docs:{...Tablet.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Tablet")\n  }\n}',...Tablet.parameters?.docs?.source}}},Desktop.parameters={...Desktop.parameters,docs:{...Desktop.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Desktop")\n  }\n}',...Desktop.parameters?.docs?.source}}},NavigateThroughTestimonials.parameters={...NavigateThroughTestimonials.parameters,docs:{...NavigateThroughTestimonials.parameters?.docs,source:{originalSource:'{\n  name: "Navigate through testimonials",\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const testimonialButtons = await canvas.findAllByRole("button", {\n      name: /Wyświetl opinie numer.*/\n    });\n    await canvas.findByText(testimonials[0].description);\n    await userEvent.click(testimonialButtons[1] as Element);\n    await canvas.findByText(testimonials[1].description);\n    const nextButton = await canvas.findByRole("button", {\n      name: "Następna opinia"\n    });\n    await userEvent.click(nextButton);\n    await canvas.findByText(testimonials[2].description);\n    const prevButton = await canvas.findByRole("button", {\n      name: "Poprzednia opinia"\n    });\n    await userEvent.click(prevButton);\n    await canvas.findByText(testimonials[1].description);\n  }\n}',...NavigateThroughTestimonials.parameters?.docs?.source}}}}}]);