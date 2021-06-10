/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/posts */ \"./lib/posts.js\");\n\nvar _jsxFileName = \"/Users/KWE/nextjs-superherocars/pages/index.js\";\n\n\n\n\n\n\nasync function getStaticProps() {\n  const allPostsData = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_5__.getSortedPostsData)();\n  return {\n    props: {\n      allPostsData\n    }\n  };\n}\nfunction Home({\n  allPostsData\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    home: true,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: _components_layout__WEBPACK_IMPORTED_MODULE_2__.siteTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().headingMd),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Looking for a car fit for a superhero? You have come to the right place! Our site only features vehicles with unusual capabilities, to help you in the fight against evil.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: `${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().headingMd)} ${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().padding1px)}`,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().headingLg),\n        children: \"For Sale\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n        children: allPostsData.map(({\n          id,\n          date,\n          title\n        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().listItem),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: `/posts/${id}`,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n            className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().lightText),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_4__.default, {\n              dateString: date\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsImFsbFBvc3RzRGF0YSIsImdldFNvcnRlZFBvc3RzRGF0YSIsInByb3BzIiwiSG9tZSIsInNpdGVUaXRsZSIsInV0aWxTdHlsZXMiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sZUFBZUEsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxZQUFZLEdBQUdDLDhEQUFrQixFQUF2QztBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xGO0FBREs7QUFERixHQUFQO0FBS0Q7QUFFYyxTQUFTRyxJQUFULENBQWM7QUFBRUg7QUFBRixDQUFkLEVBQWdDO0FBQzdDLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsUUFBSSxNQUFaO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFRSSx5REFBU0E7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQVMsZUFBUyxFQUFFQywyRUFBcEI7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQU9FO0FBQVMsZUFBUyxFQUFHLEdBQUVBLDJFQUFxQixJQUFHQSw0RUFBc0IsRUFBckU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVBLDJFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUVBLHNFQUFmO0FBQUEsa0JBQ0dMLFlBQVksQ0FBQ00sR0FBYixDQUFpQixDQUFDO0FBQUVDLFlBQUY7QUFBTUMsY0FBTjtBQUFZQztBQUFaLFNBQUQsa0JBQ2hCO0FBQUksbUJBQVMsRUFBRUosMEVBQWY7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUcsVUFBU0UsRUFBRyxFQUF6QjtBQUFBLG1DQUNFO0FBQUEsd0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBS0U7QUFBTyxxQkFBUyxFQUFFSiwyRUFBbEI7QUFBQSxtQ0FDRSw4REFBQyxxREFBRDtBQUFNLHdCQUFVLEVBQUVHO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUEsV0FBeUNELEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZSdcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbFBvc3RzRGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgPHA+TG9va2luZyBmb3IgYSBjYXIgZml0IGZvciBhIHN1cGVyaGVybz8gWW91IGhhdmUgY29tZSB0byB0aGUgcmlnaHQgcGxhY2UhIE91ciBzaXRlIG9ubHkgZmVhdHVyZXMgdmVoaWNsZXMgd2l0aCB1bnVzdWFsIGNhcGFiaWxpdGllcywgdG8gaGVscCB5b3UgaW4gdGhlIGZpZ2h0IGFnYWluc3QgZXZpbC48L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMucGFkZGluZzFweH1gfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PkZvciBTYWxlPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cbiAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUgfSkgPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0SXRlbX0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpZ2h0VGV4dH0+XG4gICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","components_date_js-components_layout_js-lib_posts_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();