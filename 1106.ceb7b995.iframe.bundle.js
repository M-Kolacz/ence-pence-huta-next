(self.webpackChunkence_pence_huta_next=self.webpackChunkence_pence_huta_next||[]).push([[1106],{"./node_modules/next/dist/client/get-domain-locale.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}});const _normalizetrailingslash=__webpack_require__("./node_modules/next/dist/client/normalize-trailing-slash.js"),basePath=process.env.__NEXT_ROUTER_BASEPATH||"";function getDomainLocale(path,locale,locales,domainLocales){if(process.env.__NEXT_I18N_SUPPORT){const normalizeLocalePath=__webpack_require__("./node_modules/next/dist/client/normalize-locale-path.js").normalizeLocalePath,detectDomainLocale=__webpack_require__("./node_modules/next/dist/client/detect-domain-locale.js").detectDomainLocale,target=locale||normalizeLocalePath(path,locales).detectedLocale,domain=detectDomainLocale(domainLocales,void 0,target);if(domain){const proto="http"+(domain.http?"":"s")+"://",finalLocale=target===domain.defaultLocale?"":"/"+target;return""+proto+domain.domain+(0,_normalizetrailingslash.normalizePathTrailingSlash)(""+basePath+finalLocale+path)}return!1}return!1}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/link.js":(module,exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_jsxruntime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_react=_interop_require_default._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_resolvehref=__webpack_require__("./node_modules/next/dist/client/resolve-href.js"),_islocalurl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/is-local-url.js"),_formaturl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/format-url.js"),_utils=__webpack_require__("./node_modules/next/dist/shared/lib/utils.js"),_addlocale=__webpack_require__("./node_modules/next/dist/client/add-locale.js"),_routercontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/router-context.shared-runtime.js"),_useintersection=__webpack_require__("./node_modules/next/dist/client/use-intersection.js"),_getdomainlocale=__webpack_require__("./node_modules/next/dist/client/get-domain-locale.js"),_addbasepath=__webpack_require__("./node_modules/next/dist/client/add-base-path.js"),_usemergedref=__webpack_require__("./node_modules/next/dist/client/use-merged-ref.js"),prefetched=new Set;function prefetch(router,href,as,options){if("undefined"!=typeof window&&(0,_islocalurl.isLocalURL)(href)){if(!options.bypassPrefetchedCheck){const prefetchedKey=href+"%"+as+"%"+(void 0!==options.locale?options.locale:"locale"in router?router.locale:void 0);if(prefetched.has(prefetchedKey))return;prefetched.add(prefetchedKey)}router.prefetch(href,as,options).catch((err=>{0}))}}function formatStringOrUrl(urlObjOrString){return"string"==typeof urlObjOrString?urlObjOrString:(0,_formaturl.formatUrl)(urlObjOrString)}const _default=_react.default.forwardRef((function LinkComponent(props,forwardedRef){let children;const{href:hrefProp,as:asProp,children:childrenProp,prefetch:prefetchProp=null,passHref,replace,shallow,scroll,locale,onClick,onMouseEnter:onMouseEnterProp,onTouchStart:onTouchStartProp,legacyBehavior=!1,...restProps}=props;children=childrenProp,!legacyBehavior||"string"!=typeof children&&"number"!=typeof children||(children=(0,_jsxruntime.jsx)("a",{children}));const router=_react.default.useContext(_routercontextsharedruntime.RouterContext),prefetchEnabled=!1!==prefetchProp;const{href,as}=_react.default.useMemo((()=>{if(!router){const resolvedHref=formatStringOrUrl(hrefProp);return{href:resolvedHref,as:asProp?formatStringOrUrl(asProp):resolvedHref}}const[resolvedHref,resolvedAs]=(0,_resolvehref.resolveHref)(router,hrefProp,!0);return{href:resolvedHref,as:asProp?(0,_resolvehref.resolveHref)(router,asProp):resolvedAs||resolvedHref}}),[router,hrefProp,asProp]),previousHref=_react.default.useRef(href),previousAs=_react.default.useRef(as);let child;legacyBehavior&&(child=_react.default.Children.only(children));const childRef=legacyBehavior?child&&"object"==typeof child&&child.ref:forwardedRef,[setIntersectionRef,isVisible,resetVisible]=(0,_useintersection.useIntersection)({rootMargin:"200px"}),setIntersectionWithResetRef=_react.default.useCallback((el=>{previousAs.current===as&&previousHref.current===href||(resetVisible(),previousAs.current=as,previousHref.current=href),setIntersectionRef(el)}),[as,href,resetVisible,setIntersectionRef]),setRef=(0,_usemergedref.useMergedRef)(setIntersectionWithResetRef,childRef);_react.default.useEffect((()=>{router&&isVisible&&prefetchEnabled&&prefetch(router,href,as,{locale})}),[as,href,isVisible,locale,prefetchEnabled,null==router?void 0:router.locale,router]);const childProps={ref:setRef,onClick(e){legacyBehavior||"function"!=typeof onClick||onClick(e),legacyBehavior&&child.props&&"function"==typeof child.props.onClick&&child.props.onClick(e),router&&(e.defaultPrevented||function linkClicked(e,router,href,as,replace,shallow,scroll,locale){const{nodeName}=e.currentTarget;if("A"===nodeName.toUpperCase()&&(function isModifiedEvent(event){const target=event.currentTarget.getAttribute("target");return target&&"_self"!==target||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.nativeEvent&&2===event.nativeEvent.which}(e)||!(0,_islocalurl.isLocalURL)(href)))return;e.preventDefault(),(()=>{const routerScroll=null==scroll||scroll;"beforePopState"in router?router[replace?"replace":"push"](href,as,{shallow,locale,scroll:routerScroll}):router[replace?"replace":"push"](as||href,{scroll:routerScroll})})()}(e,router,href,as,replace,shallow,scroll,locale))},onMouseEnter(e){legacyBehavior||"function"!=typeof onMouseEnterProp||onMouseEnterProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onMouseEnter&&child.props.onMouseEnter(e),router&&prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:process.env.__NEXT_LINK_NO_TOUCH_START?void 0:function onTouchStart(e){legacyBehavior||"function"!=typeof onTouchStartProp||onTouchStartProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onTouchStart&&child.props.onTouchStart(e),router&&prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0})}};if((0,_utils.isAbsoluteUrl)(as))childProps.href=as;else if(!legacyBehavior||passHref||"a"===child.type&&!("href"in child.props)){const curLocale=void 0!==locale?locale:null==router?void 0:router.locale,localeDomain=(null==router?void 0:router.isLocaleDomain)&&(0,_getdomainlocale.getDomainLocale)(as,curLocale,null==router?void 0:router.locales,null==router?void 0:router.domainLocales);childProps.href=localeDomain||(0,_addbasepath.addBasePath)((0,_addlocale.addLocale)(as,curLocale,null==router?void 0:router.defaultLocale))}return legacyBehavior?_react.default.cloneElement(child,childProps):(0,_jsxruntime.jsx)("a",{...restProps,...childProps,children})}));("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/normalize-locale-path.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"normalizeLocalePath",{enumerable:!0,get:function(){return normalizeLocalePath}});const normalizeLocalePath=(pathname,locales)=>process.env.__NEXT_I18N_SUPPORT?__webpack_require__("./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js").normalizeLocalePath(pathname,locales):{pathname,detectedLocale:void 0};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/use-intersection.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});const _react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_requestidlecallback=__webpack_require__("./node_modules/next/dist/client/request-idle-callback.js"),hasIntersectionObserver="function"==typeof IntersectionObserver,observers=new Map,idList=[];function observe(element,callback,options){const{id,observer,elements}=function createObserver(options){const id={root:options.root||null,margin:options.rootMargin||""},existing=idList.find((obj=>obj.root===id.root&&obj.margin===id.margin));let instance;if(existing&&(instance=observers.get(existing),instance))return instance;const elements=new Map,observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{const callback=elements.get(entry.target),isVisible=entry.isIntersecting||entry.intersectionRatio>0;callback&&isVisible&&callback(isVisible)}))}),options);return instance={id,observer,elements},idList.push(id),observers.set(id,instance),instance}(options);return elements.set(element,callback),observer.observe(element),function unobserve(){if(elements.delete(element),observer.unobserve(element),0===elements.size){observer.disconnect(),observers.delete(id);const index=idList.findIndex((obj=>obj.root===id.root&&obj.margin===id.margin));index>-1&&idList.splice(index,1)}}}function useIntersection(param){let{rootRef,rootMargin,disabled}=param;const isDisabled=disabled||!hasIntersectionObserver,[visible,setVisible]=(0,_react.useState)(!1),elementRef=(0,_react.useRef)(null),setElement=(0,_react.useCallback)((element=>{elementRef.current=element}),[]);(0,_react.useEffect)((()=>{if(hasIntersectionObserver){if(isDisabled||visible)return;const element=elementRef.current;if(element&&element.tagName){return observe(element,(isVisible=>isVisible&&setVisible(isVisible)),{root:null==rootRef?void 0:rootRef.current,rootMargin})}}else if(!visible){const idleCallback=(0,_requestidlecallback.requestIdleCallback)((()=>setVisible(!0)));return()=>(0,_requestidlecallback.cancelIdleCallback)(idleCallback)}}),[isDisabled,rootMargin,rootRef,visible,elementRef.current]);const resetVisible=(0,_react.useCallback)((()=>{setVisible(!1)}),[]);return[setElement,visible,resetVisible]}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/link.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/client/link.js")}}]);