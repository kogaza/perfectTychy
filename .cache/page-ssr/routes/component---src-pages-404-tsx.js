"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 6527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ SEO)
});

// EXTERNAL MODULE: external "/Users/krzysztofogaza/Documents/perfectTychy/node_modules/react/index.js"
var index_js_ = __webpack_require__(8534);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/assets/favicons/favicon.ico
/* harmony default export */ const favicon = ("/perfectTychy/static/favicon-7b59589f9a05b2200a34a5acb97b43de.ico");
;// CONCATENATED MODULE: ./src/components/Common/Seo/index.tsx
const SEO=({title,children,description})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("title",null,title),/*#__PURE__*/index_js_default().createElement("meta",{name:"description",content:description}),/*#__PURE__*/index_js_default().createElement("link",{rel:"icon",href:favicon,type:"image/ico"}),/*#__PURE__*/index_js_default().createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/index_js_default().createElement("meta",{property:"og:description",content:description}),/*#__PURE__*/index_js_default().createElement("meta",{property:"og:site_name",content:"Perfect Tychy"}),children);};

/***/ }),

/***/ 2513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _components_Common_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6527);



const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};
const paragraphStyles = {
  marginBottom: 48
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4
};
const NotFoundPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    style: pageStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    style: headingStyles
  }, "Page not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: paragraphStyles
  }, "Sorry \uD83D\uDE14, we couldn\u2019t find what you were looking for.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),  false ? /*#__PURE__*/0 : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Go home"), "."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);
const Head = ({
  location
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Common_Seo__WEBPACK_IMPORTED_MODULE_2__/* .SEO */ .H, {
  title: "Perfect Tychy - Not found",
  description: "Page not found!",
  pathname: location.pathname
});

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-tsx.js.map