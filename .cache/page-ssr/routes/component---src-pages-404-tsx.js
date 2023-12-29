"use strict";
exports.id = "component---src-pages-404-tsx";
exports.ids = ["component---src-pages-404-tsx"];
exports.modules = {

/***/ "./src/components/Common/Seo/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Common/Seo/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SEO: () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_favicons_favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/favicons/favicon.ico */ "./src/assets/favicons/favicon.ico");


const SEO = ({
  title,
  children,
  description
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "icon",
    href: _assets_favicons_favicon_ico__WEBPACK_IMPORTED_MODULE_1__["default"],
    type: "image/ico"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:description",
    content: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:site_name",
    content: "Perfect Tychy"
  }), children);
};

/***/ }),

/***/ "./src/pages/404.tsx?export=default":
/*!******************************************!*\
  !*** ./src/pages/404.tsx?export=default ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Common_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Common/Seo */ "./src/components/Common/Seo/index.tsx");



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
  }, "Sorry \uD83D\uDE14, we couldn\u2019t find what you were looking for.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),  true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Try creating a page in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    style: codeStyles
  }, "src/pages/"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)) : 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Go home"), "."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);
const Head = ({
  location
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Common_Seo__WEBPACK_IMPORTED_MODULE_2__.SEO, {
  title: "Perfect Tychy - Not found",
  description: "Page not found!",
  pathname: location.pathname
});

/***/ }),

/***/ "./src/assets/favicons/favicon.ico":
/*!*****************************************!*\
  !*** ./src/assets/favicons/favicon.ico ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/favicon-7b59589f9a05b2200a34a5acb97b43de.ico");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-tsx.js.map