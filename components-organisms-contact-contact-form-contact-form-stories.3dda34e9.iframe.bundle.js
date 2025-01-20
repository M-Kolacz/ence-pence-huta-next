"use strict";(self.webpackChunkence_pence_huta_next=self.webpackChunkence_pence_huta_next||[]).push([[8404],{"./src/components/organisms/contact/contact-form/contact-form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Desktop:()=>Desktop,Mobile:()=>Mobile,Tablet:()=>Tablet,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_templates__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/templates/index.tsx"),_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/storybook.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Organisms/Contact/ContactForm",component:__webpack_require__("./src/components/organisms/contact/contact-form/contact-form.tsx").D,parameters:{layout:"fullscreen",...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.lr)("https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=389-6075&t=3GHU1CB83W6Edr2g-4")},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_templates__WEBPACK_IMPORTED_MODULE_1__.RT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_templates__WEBPACK_IMPORTED_MODULE_1__.gZ,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})})]},Mobile={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.hI)("Mobile")}},Tablet={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.hI)("Tablet")}},Desktop={parameters:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.hI)("Desktop")}},__namedExportsOrder=["Mobile","Tablet","Desktop"];Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Mobile")\n  }\n}',...Mobile.parameters?.docs?.source}}},Tablet.parameters={...Tablet.parameters,docs:{...Tablet.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Tablet")\n  }\n}',...Tablet.parameters?.docs?.source}}},Desktop.parameters={...Desktop.parameters,docs:{...Desktop.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    ...setViewport("Desktop")\n  }\n}',...Desktop.parameters?.docs?.source}}}},"./src/components/organisms/contact/contact-form/contact-form.helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vz:()=>getFormStatus,ZM:()=>sendEmail,bF:()=>toasts,qX:()=>ContactFormSchema});var zod__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/zod/lib/index.mjs"),_app_utils_env__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/env.ts");const ContactFormSchema=zod__WEBPACK_IMPORTED_MODULE_1__.z.object({email:zod__WEBPACK_IMPORTED_MODULE_1__.z.string({message:"Adres e-mail jest wymagany."}).email({message:"Podany adres e-mail ma nieprawidłowy format."}),topic:zod__WEBPACK_IMPORTED_MODULE_1__.z.string({message:"Temat wiadomości jest wymagany."}).min(2,"Temat wiadomości musi mieć co najmniej 2 znaki.").max(50,"Temat wiadomości nie może mieć więcej niż 50 znaków."),message:zod__WEBPACK_IMPORTED_MODULE_1__.z.string({message:"Wiadomość jest wymagana."}).min(10,"Wiadomość musi mieć co najmniej 10 znaków.").max(500,"Wiadomość nie może mieć więcej niż 500 znaków.")}),sendEmail=async data=>await fetch(_app_utils_env__WEBPACK_IMPORTED_MODULE_0__._.EMAIL_API_URL,{method:"POST",body:JSON.stringify({service_id:_app_utils_env__WEBPACK_IMPORTED_MODULE_0__._.EMAIL_SERVICE_ID,template_id:_app_utils_env__WEBPACK_IMPORTED_MODULE_0__._.EMAIL_TEMPLATE_ID,user_id:_app_utils_env__WEBPACK_IMPORTED_MODULE_0__._.EMAIL_PUBLIC_KEY,accessToken:_app_utils_env__WEBPACK_IMPORTED_MODULE_0__._.EMAIL_PRIVATE_KEY,template_params:data}),headers:{"Content-Type":"application/json"}}),getFormStatus=(isPending,response)=>isPending?"loading":"email-sent"!==response||isPending?"email-failed"!==response||isPending?"idle":"error":"success",toasts={loading:{title:"Wysyłanie wiadomości...",description:"Proces może chwilę potrwać. Dziękujemy za wyrozumiałość."},success:{title:"Dziękujemy za wiadomość!",description:"Twoja wiadomość została pomyślnie wysłana. Skontaktujemy się z Tobą wkrótce."},error:{title:"Nie udało się wysłać wiadomości.",description:"Przepraszamy za utrudnienia. Spróbuj ponownie za chwilę."}}},"./src/components/organisms/contact/contact-form/contact-form.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>ContactForm});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),hooks=__webpack_require__("./node_modules/@conform-to/react/hooks.mjs"),helpers=__webpack_require__("./node_modules/@conform-to/react/helpers.mjs"),constraint=__webpack_require__("./node_modules/@conform-to/zod/constraint.mjs"),parse=__webpack_require__("./node_modules/@conform-to/zod/parse.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/sonner/dist/index.mjs"),molecules=__webpack_require__("./src/components/molecules/index.ts"),templates=__webpack_require__("./src/components/templates/index.tsx"),misc=__webpack_require__("./src/utils/misc.tsx"),contact_form_helpers=__webpack_require__("./src/components/organisms/contact/contact-form/contact-form.helpers.ts"),esm_exports=__webpack_require__("./node_modules/@sentry/core/build/esm/exports.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const sendEmailServerAction=async(prevState,formData)=>{const submission=(0,parse.L)(formData,{schema:contact_form_helpers.qX});if("success"!==submission.status)return{result:submission.reply()};return(await(0,contact_form_helpers.ZM)(submission.value).catch((error=>(esm_exports.Cp(error),console.error("🛑 Error occured while sending email",error),{ok:!1})))).ok?{response:"email-sent"}:{response:"email-failed",result:submission.reply({formErrors:["Nie udało się wysłać wiadomości do żłobka. Spróbuj ponownie za chwilę. W razie dalszych trudności prosimy o kontakt bezpośredni na adres zlobekhuta@gmail.com."]})}},ContactForm=({className,...props})=>{const[formState,action,isPending]=(0,react.useActionState)(sendEmailServerAction,void 0),[form,fields]=(0,hooks.mN)({id:"contact-form",constraint:(0,constraint.z)(contact_form_helpers.qX),onValidate:({formData})=>(0,parse.L)(formData,{schema:contact_form_helpers.qX}),lastResult:null==formState?void 0:formState.result,shouldRevalidate:"onBlur"});return(0,react.useEffect)((()=>{const formStatus=(0,contact_form_helpers.Vz)(isPending,null==formState?void 0:formState.response);"idle"!==formStatus&&(dist.oR.dismiss(),dist.oR[formStatus](contact_form_helpers.bF[formStatus].title,{description:contact_form_helpers.bF[formStatus].description}))}),[null==formState?void 0:formState.response,isPending]),(0,jsx_runtime.jsxs)(templates.wn,{"aria-labelledby":"contact-form-title",...props,className:(0,misc.cn)("z-10 flex flex-col gap-strong rounded-lg bg-secondary-100 p-strong lg:col-start-3 lg:col-end-11",className),children:[(0,jsx_runtime.jsx)("h2",{className:"font-headings text-h2 text-primary-900",id:"contact-form-title",children:"Napisz do nas wiadomość"}),(0,jsx_runtime.jsxs)("form",{action,className:"flex flex-col",...(0,helpers.NE)(form),children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col md:flex-row md:gap-subtle",children:[(0,jsx_runtime.jsx)(molecules.D0,{className:"md:w-1/2",labelProps:{children:"Adres e-mail"},inputProps:{...(0,helpers.ti)(fields.email,{type:"email"})},errors:fields.email.errors}),(0,jsx_runtime.jsx)(molecules.D0,{className:"md:w-1/2",labelProps:{children:"Temat wiadomości"},inputProps:{...(0,helpers.ti)(fields.topic,{type:"text"})},errors:fields.topic.errors})]}),(0,jsx_runtime.jsx)(molecules.Vq,{labelProps:{children:"Twoja wiadomość"},textareaProps:{...(0,helpers.hm)(fields.message),placeholder:"Opisz w czym możemy Ci pomóc",rows:8},errors:fields.message.errors}),(0,jsx_runtime.jsx)(molecules.b7,{type:"submit",className:"w-fit",children:"Wyślij wiadomość"}),(0,jsx_runtime.jsx)(molecules.VS,{errors:form.errors,id:form.errorId,className:"pt-2 max-w-prose"})]}),(0,jsx_runtime.jsx)(molecules.l$,{})]})};ContactForm.__docgenInfo={description:"",methods:[],displayName:"ContactForm"}},"./src/utils/env.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>env});var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@t3-oss/env-nextjs/dist/index.js"),zod__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/zod/lib/index.mjs");const env=(0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.w)({server:{EMAIL_API_URL:zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url(),EMAIL_SERVICE_ID:zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),EMAIL_TEMPLATE_ID:zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),EMAIL_PUBLIC_KEY:zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),EMAIL_PRIVATE_KEY:zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),SENTRY_AUTH_TOKEN:zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),SENTRY_ORG:zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),SENTRY_PROJECT:zod__WEBPACK_IMPORTED_MODULE_1__.z.string()},client:{NEXT_PUBLIC_GOOGLE_MAP_API_KEY:zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),NEXT_PUBLIC_GOOGLE_MAP_ID:zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),NEXT_PUBLIC_SENTRY_DSN:zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url()},experimental__runtimeEnv:{NEXT_PUBLIC_GOOGLE_MAP_API_KEY:"AIzaSyBVA__7X4zMgS67uJseB9PR_3H_zQGFLKg",NEXT_PUBLIC_GOOGLE_MAP_ID:"2dc9a6655567c23f",NEXT_PUBLIC_SENTRY_DSN:"https://1aaffca5f6af564ce7bd12bae9134a08@o4504402487410688.ingest.us.sentry.io/4507424382648320"}})}}]);