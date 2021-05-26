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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./components/date.js":
/*!****************************!*\
  !*** ./components/date.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Date; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/KWE/nextjs-superherocars/components/date.js\";\n\nfunction Date({\n  dateString\n}) {\n  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n    dateTime: dateString,\n    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'LLLL d, yyyy')\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9kYXRlLmpzP2ViOTEiXSwibmFtZXMiOlsiRGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwicGFyc2VJU08iLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBOEI7QUFDM0MsUUFBTUMsSUFBSSxHQUFHQyxrREFBUSxDQUFDRixVQUFELENBQXJCO0FBQ0Esc0JBQU87QUFBTSxZQUFRLEVBQUVBLFVBQWhCO0FBQUEsY0FBNkJHLGdEQUFNLENBQUNGLElBQUQsRUFBTyxjQUFQO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlKHsgZGF0ZVN0cmluZyB9KSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxuICByZXR1cm4gPHRpbWUgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9Pntmb3JtYXQoZGF0ZSwgJ0xMTEwgZCwgeXl5eScpfTwvdGltZT5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/date.js\n");

/***/ }),

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/date */ \"./components/date.js\");\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/posts */ \"./lib/posts.js\");\n\nvar _jsxFileName = \"/Users/KWE/nextjs-superherocars/pages/posts/[id].js\";\n\n\n\n\nasync function getStaticProps({\n  params\n}) {\n  const postData = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_4__.getPostData)(params.id);\n  return {\n    props: {\n      postData\n    }\n  };\n}\nasync function getStaticPaths() {\n  const paths = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_4__.getAllPostIds)();\n  return {\n    paths,\n    fallback: false\n  };\n}\nfunction Post({\n  postData\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: postData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), postData.title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 6\n    }, this), postData.id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 6\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_3__.default, {\n      dateString: postData.date\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 6\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 6\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: postData.contentHtml\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 6\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvcG9zdHMvW2lkXS5qcz9jODZmIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicG9zdERhdGEiLCJnZXRQb3N0RGF0YSIsImlkIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZ2V0QWxsUG9zdElkcyIsImZhbGxiYWNrIiwiUG9zdCIsInRpdGxlIiwiZGF0ZSIsIl9faHRtbCIsImNvbnRlbnRIdG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLGVBQWVBLGNBQWYsQ0FBOEI7QUFBRUM7QUFBRixDQUE5QixFQUEwQztBQUMvQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsdURBQVcsQ0FBQ0YsTUFBTSxDQUFDRyxFQUFSLENBQWxDO0FBQ0EsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTEg7QUFESztBQURGLEdBQVA7QUFLRDtBQUVNLGVBQWVJLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsS0FBSyxHQUFHQyx5REFBYSxFQUEzQjtBQUNBLFNBQU87QUFDTEQsU0FESztBQUVMRSxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQ7QUFFYyxTQUFTQyxJQUFULENBQWM7QUFBRVI7QUFBRixDQUFkLEVBQTRCO0FBQ3pDLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFRQSxRQUFRLENBQUNTO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFJRVQsUUFBUSxDQUFDUyxLQUpYLGVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELEVBTUVULFFBQVEsQ0FBQ0UsRUFOWCxlQU9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQVFDLDhEQUFDLHFEQUFEO0FBQU0sZ0JBQVUsRUFBRUYsUUFBUSxDQUFDVTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsZUFTQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQsZUFVQztBQUFLLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBRVgsUUFBUSxDQUFDWTtBQUFuQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRCIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kYXRlJ1xuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi9saWIvcG9zdHMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gZ2V0QWxsUG9zdElkcygpXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3REYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9zdERhdGEudGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAge3Bvc3REYXRhLnRpdGxlfVxuICAgICA8YnIgLz5cbiAgICAge3Bvc3REYXRhLmlkfVxuICAgICA8YnIgLz5cbiAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdERhdGEuZGF0ZX0gLz5cbiAgICAgPGJyIC8+XG4gICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0RGF0YS5jb250ZW50SHRtbCB9fSAvPlxuICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","components_layout_js-lib_posts_js"], function() { return __webpack_exec__("./pages/posts/[id].js"); });
module.exports = __webpack_exports__;

})();