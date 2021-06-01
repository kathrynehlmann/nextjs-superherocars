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

/***/ "./components/date.js":
/*!****************************!*\
  !*** ./components/date.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Date; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/KWE/nextjs-superherocars/components/date.js\";\n\nfunction Date({\n  dateString\n}) {\n  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n    dateTime: dateString,\n    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'LLLL d, yyyy')\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9kYXRlLmpzP2ViOTEiXSwibmFtZXMiOlsiRGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwicGFyc2VJU08iLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBOEI7QUFDM0MsUUFBTUMsSUFBSSxHQUFHQyxrREFBUSxDQUFDRixVQUFELENBQXJCO0FBQ0Esc0JBQU87QUFBTSxZQUFRLEVBQUVBLFVBQWhCO0FBQUEsY0FBNkJHLGdEQUFNLENBQUNGLElBQUQsRUFBTyxjQUFQO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlKHsgZGF0ZVN0cmluZyB9KSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxuICByZXR1cm4gPHRpbWUgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9Pntmb3JtYXQoZGF0ZSwgJ0xMTEwgZCwgeXl5eScpfTwvdGltZT5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/date.js\n");

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"siteTitle\": function() { return /* binding */ siteTitle; },\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/KWE/nextjs-superherocars/components/layout.js\";\n\n\n\n\n\nconst name = 'Hero Vehicles for Sale';\nconst siteTitle = 'Super Cars for Sale';\nfunction Layout({\n  children,\n  home\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Tired of flying everywhere? Drive one of these instead!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"og:title\",\n        content: siteTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary_large_image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n      children: home ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          priority: true,\n          src: \"/images/profile.jpg\",\n          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderCircle),\n          height: 244,\n          width: 344,\n          alt: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().heading2Xl),\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              priority: true,\n              src: \"/images/profile.jpg\",\n              className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderCircle),\n              height: 108,\n              width: 108,\n              alt: name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().headingLg),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().colorInherit),\n              children: name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), !home && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().backToHome),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"\\u2190 Back to home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MDlhNyJdLCJuYW1lcyI6WyJuYW1lIiwic2l0ZVRpdGxlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJob21lIiwic3R5bGVzIiwidXRpbFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLHdCQUFiO0FBQ08sTUFBTUMsU0FBUyxHQUFHLHFCQUFsQjtBQUVRLFNBQVNDLE1BQVQsQ0FBZ0I7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQWhCLEVBQW9DO0FBQ2pELHNCQUNFO0FBQUssYUFBUyxFQUFFQyxxRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFNRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBRUo7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBTSxZQUFJLEVBQUMsY0FBWDtBQUEwQixlQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBVUU7QUFBUSxlQUFTLEVBQUVJLGtFQUFuQjtBQUFBLGdCQUNHRCxJQUFJLGdCQUNIO0FBQUEsZ0NBQ0UsOERBQUMsbURBQUQ7QUFDRSxrQkFBUSxNQURWO0FBRUUsYUFBRyxFQUFDLHFCQUZOO0FBR0UsbUJBQVMsRUFBRUUsOEVBSGI7QUFJRSxnQkFBTSxFQUFFLEdBSlY7QUFLRSxlQUFLLEVBQUUsR0FMVDtBQU1FLGFBQUcsRUFBRU47QUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0U7QUFBSSxtQkFBUyxFQUFFTSw0RUFBZjtBQUFBLG9CQUF1Q047QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBLHNCQURHLGdCQWFIO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNFO0FBQUEsbUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxzQkFBUSxNQURWO0FBRUUsaUJBQUcsRUFBQyxxQkFGTjtBQUdFLHVCQUFTLEVBQUVNLDhFQUhiO0FBSUUsb0JBQU0sRUFBRSxHQUpWO0FBS0UsbUJBQUssRUFBRSxHQUxUO0FBTUUsaUJBQUcsRUFBRU47QUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFhRTtBQUFJLG1CQUFTLEVBQUVNLDJFQUFmO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUVBLDhFQUFkO0FBQUEsd0JBQXdDTjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkY7QUFBQTtBQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQTZDRTtBQUFBLGdCQUFPRztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Q0YsRUE4Q0csQ0FBQ0MsSUFBRCxpQkFDQztBQUFLLGVBQVMsRUFBRUMsc0VBQWhCO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3REQiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IG5hbWUgPSAnSGVybyBWZWhpY2xlcyBmb3IgU2FsZSdcbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSAnU3VwZXIgQ2FycyBmb3IgU2FsZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIGhvbWUgfSkge1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIlRpcmVkIG9mIGZseWluZyBldmVyeXdoZXJlPyBEcml2ZSBvbmUgb2YgdGhlc2UgaW5zdGVhZCFcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIHtob21lID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wcm9maWxlLmpwZ1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9XG4gICAgICAgICAgICAgIGhlaWdodD17MjQ0fVxuICAgICAgICAgICAgICB3aWR0aD17MzQ0fVxuICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nMlhsfT57bmFtZX08L2gxPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwOH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDh9XG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb2xvckluaGVyaXR9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIHshaG9tZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja1RvSG9tZX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSortedPostsData\": function() { return /* binding */ getSortedPostsData; },\n/* harmony export */   \"getAllPostIds\": function() { return /* binding */ getAllPostIds; },\n/* harmony export */   \"getPostData\": function() { return /* binding */ getPostData; }\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_4__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'posts');\nfunction getSortedPostsData() {\n  // Get file names under /posts\n  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n  const allPostsData = fileNames.map(fileName => {\n    // Remove \".md\" from file name to get id\n    const id = fileName.replace(/\\.md$/, ''); // Read markdown file as string\n\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section\n\n    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); // Combine the data with the id\n\n    return _objectSpread({\n      id\n    }, matterResult.data);\n  }); // Sort posts by date\n\n  return allPostsData.sort((a, b) => {\n    if (a.date < b.date) {\n      return 1;\n    } else {\n      return -1;\n    }\n  });\n}\nfunction getAllPostIds() {\n  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory); // Returns an array that looks like this:\n  // [\n  //   {\n  //     params: {\n  //       id: 'lola'\n  //     }\n  //   },\n  //   {\n  //     params: {\n  //       id: 'turtle-van'\n  //     }\n  //   }\n  // ]\n\n  return fileNames.map(fileName => {\n    return {\n      params: {\n        id: fileName.replace(/\\.md$/, '')\n      }\n    };\n  });\n}\nasync function getPostData(id) {\n  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);\n  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section\n\n  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); //Use remark to convert markdown into HTML string\n\n  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use((remark_html__WEBPACK_IMPORTED_MODULE_4___default())).process(matterResult.content);\n  const contentHtml = processedContent.toString(); // Combine the data with the id and contentHtml\n\n  return _objectSpread({\n    id,\n    contentHtml\n  }, matterResult.data);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vbGliL3Bvc3RzLmpzPzk3NTQiXSwibmFtZXMiOlsicG9zdHNEaXJlY3RvcnkiLCJwYXRoIiwicHJvY2VzcyIsImN3ZCIsImdldFNvcnRlZFBvc3RzRGF0YSIsImZpbGVOYW1lcyIsImZzIiwiYWxsUG9zdHNEYXRhIiwibWFwIiwiZmlsZU5hbWUiLCJpZCIsInJlcGxhY2UiLCJmdWxsUGF0aCIsImZpbGVDb250ZW50cyIsIm1hdHRlclJlc3VsdCIsIm1hdHRlciIsImRhdGEiLCJzb3J0IiwiYSIsImIiLCJkYXRlIiwiZ2V0QWxsUG9zdElkcyIsInBhcmFtcyIsImdldFBvc3REYXRhIiwicHJvY2Vzc2VkQ29udGVudCIsInJlbWFyayIsInVzZSIsImh0bWwiLCJjb250ZW50IiwiY29udGVudEh0bWwiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLGdEQUFBLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLE9BQXpCLENBQXZCO0FBRU8sU0FBU0Msa0JBQVQsR0FBOEI7QUFDbkM7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLHFEQUFBLENBQWVOLGNBQWYsQ0FBbEI7QUFDQSxRQUFNTyxZQUFZLEdBQUdGLFNBQVMsQ0FBQ0csR0FBVixDQUFjQyxRQUFRLElBQUk7QUFDN0M7QUFDQSxVQUFNQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixPQUFqQixFQUEwQixFQUExQixDQUFYLENBRjZDLENBSTdDOztBQUNBLFVBQU1DLFFBQVEsR0FBR1gsZ0RBQUEsQ0FBVUQsY0FBVixFQUEwQlMsUUFBMUIsQ0FBakI7QUFDQSxVQUFNSSxZQUFZLEdBQUdQLHNEQUFBLENBQWdCTSxRQUFoQixFQUEwQixNQUExQixDQUFyQixDQU42QyxDQVE3Qzs7QUFDQSxVQUFNRSxZQUFZLEdBQUdDLGtEQUFNLENBQUNGLFlBQUQsQ0FBM0IsQ0FUNkMsQ0FXN0M7O0FBQ0E7QUFDRUg7QUFERixPQUVLSSxZQUFZLENBQUNFLElBRmxCO0FBSUQsR0FoQm9CLENBQXJCLENBSG1DLENBb0JuQzs7QUFDQSxTQUFPVCxZQUFZLENBQUNVLElBQWIsQ0FBa0IsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDakMsUUFBSUQsQ0FBQyxDQUFDRSxJQUFGLEdBQVNELENBQUMsQ0FBQ0MsSUFBZixFQUFxQjtBQUNuQixhQUFPLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLENBQUMsQ0FBUjtBQUNEO0FBQ0YsR0FOTSxDQUFQO0FBT0Q7QUFFTSxTQUFTQyxhQUFULEdBQXlCO0FBQzlCLFFBQU1oQixTQUFTLEdBQUdDLHFEQUFBLENBQWVOLGNBQWYsQ0FBbEIsQ0FEOEIsQ0FHOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBT0ssU0FBUyxDQUFDRyxHQUFWLENBQWNDLFFBQVEsSUFBSTtBQUMvQixXQUFPO0FBQ0xhLFlBQU0sRUFBRTtBQUNOWixVQUFFLEVBQUVELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixPQUFqQixFQUEwQixFQUExQjtBQURFO0FBREgsS0FBUDtBQUtELEdBTk0sQ0FBUDtBQU9EO0FBRU0sZUFBZVksV0FBZixDQUEyQmIsRUFBM0IsRUFBK0I7QUFDcEMsUUFBTUUsUUFBUSxHQUFHWCxnREFBQSxDQUFVRCxjQUFWLEVBQTJCLEdBQUVVLEVBQUcsS0FBaEMsQ0FBakI7QUFDQSxRQUFNRyxZQUFZLEdBQUdQLHNEQUFBLENBQWdCTSxRQUFoQixFQUEwQixNQUExQixDQUFyQixDQUZvQyxDQUlwQzs7QUFDQSxRQUFNRSxZQUFZLEdBQUdDLGtEQUFNLENBQUNGLFlBQUQsQ0FBM0IsQ0FMb0MsQ0FPcEM7O0FBQ0EsUUFBTVcsZ0JBQWdCLEdBQUcsTUFBTUMsNkNBQU0sR0FDbENDLEdBRDRCLENBQ3hCQyxvREFEd0IsRUFFNUJ6QixPQUY0QixDQUVwQlksWUFBWSxDQUFDYyxPQUZPLENBQS9CO0FBR0EsUUFBTUMsV0FBVyxHQUFHTCxnQkFBZ0IsQ0FBQ00sUUFBakIsRUFBcEIsQ0FYb0MsQ0FhcEM7O0FBQ0E7QUFDRXBCLE1BREY7QUFFRW1CO0FBRkYsS0FHS2YsWUFBWSxDQUFDRSxJQUhsQjtBQUtEIiwiZmlsZSI6Ii4vbGliL3Bvc3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXG5pbXBvcnQgcmVtYXJrIGZyb20gJ3JlbWFyaydcbmltcG9ydCBodG1sIGZyb20gJ3JlbWFyay1odG1sJ1xuXG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncG9zdHMnKVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ydGVkUG9zdHNEYXRhKCkge1xuICAvLyBHZXQgZmlsZSBuYW1lcyB1bmRlciAvcG9zdHNcbiAgY29uc3QgZmlsZU5hbWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpXG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGZpbGVOYW1lcy5tYXAoZmlsZU5hbWUgPT4ge1xuICAgIC8vIFJlbW92ZSBcIi5tZFwiIGZyb20gZmlsZSBuYW1lIHRvIGdldCBpZFxuICAgIGNvbnN0IGlkID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpXG5cbiAgICAvLyBSZWFkIG1hcmtkb3duIGZpbGUgYXMgc3RyaW5nXG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGZpbGVOYW1lKVxuICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0ZjgnKVxuXG4gICAgLy8gVXNlIGdyYXktbWF0dGVyIHRvIHBhcnNlIHRoZSBwb3N0IG1ldGFkYXRhIHNlY3Rpb25cbiAgICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKVxuXG4gICAgLy8gQ29tYmluZSB0aGUgZGF0YSB3aXRoIHRoZSBpZFxuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIC4uLm1hdHRlclJlc3VsdC5kYXRhXG4gICAgfVxuICB9KVxuICAvLyBTb3J0IHBvc3RzIGJ5IGRhdGVcbiAgcmV0dXJuIGFsbFBvc3RzRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEuZGF0ZSA8IGIuZGF0ZSkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdElkcygpIHtcbiAgY29uc3QgZmlsZU5hbWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpXG5cbiAgLy8gUmV0dXJucyBhbiBhcnJheSB0aGF0IGxvb2tzIGxpa2UgdGhpczpcbiAgLy8gW1xuICAvLyAgIHtcbiAgLy8gICAgIHBhcmFtczoge1xuICAvLyAgICAgICBpZDogJ2xvbGEnXG4gIC8vICAgICB9XG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBwYXJhbXM6IHtcbiAgLy8gICAgICAgaWQ6ICd0dXJ0bGUtdmFuJ1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gXVxuICByZXR1cm4gZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZDogZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGEoaWQpIHtcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGAke2lkfS5tZGApXG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0ZjgnKVxuXG4gIC8vIFVzZSBncmF5LW1hdHRlciB0byBwYXJzZSB0aGUgcG9zdCBtZXRhZGF0YSBzZWN0aW9uXG4gIGNvbnN0IG1hdHRlclJlc3VsdCA9IG1hdHRlcihmaWxlQ29udGVudHMpXG5cbiAgLy9Vc2UgcmVtYXJrIHRvIGNvbnZlcnQgbWFya2Rvd24gaW50byBIVE1MIHN0cmluZ1xuICBjb25zdCBwcm9jZXNzZWRDb250ZW50ID0gYXdhaXQgcmVtYXJrKClcbiAgICAudXNlKGh0bWwpXG4gICAgLnByb2Nlc3MobWF0dGVyUmVzdWx0LmNvbnRlbnQpXG4gIGNvbnN0IGNvbnRlbnRIdG1sID0gcHJvY2Vzc2VkQ29udGVudC50b1N0cmluZygpXG5cbiAgLy8gQ29tYmluZSB0aGUgZGF0YSB3aXRoIHRoZSBpZCBhbmQgY29udGVudEh0bWxcbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBjb250ZW50SHRtbCxcbiAgICAuLi5tYXR0ZXJSZXN1bHQuZGF0YVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/posts */ \"./lib/posts.js\");\n\nvar _jsxFileName = \"/Users/KWE/nextjs-superherocars/pages/index.js\";\n\n\n\n\n\n\nasync function getStaticProps() {\n  const allPostsData = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_5__.getSortedPostsData)();\n  return {\n    props: {\n      allPostsData\n    }\n  };\n}\nfunction Home({\n  allPostsData\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    home: true,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: _components_layout__WEBPACK_IMPORTED_MODULE_2__.siteTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().headingMd),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Looking for a car fit for a superhero? You have come to the right place! Our site only features vehicles with unusual capabilities, to help you in the fight against evil.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: `${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().headingMd)} ${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().padding1px)}`,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().headingLg),\n        children: \"For Sale\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n        children: allPostsData.map(({\n          id,\n          date,\n          title\n        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().listItem),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: `/posts/${id}`,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n            className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().lightText),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_4__.default, {\n              dateString: date\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsImFsbFBvc3RzRGF0YSIsImdldFNvcnRlZFBvc3RzRGF0YSIsInByb3BzIiwiSG9tZSIsInNpdGVUaXRsZSIsInV0aWxTdHlsZXMiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sZUFBZUEsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxZQUFZLEdBQUdDLDhEQUFrQixFQUF2QztBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xGO0FBREs7QUFERixHQUFQO0FBS0Q7QUFFYyxTQUFTRyxJQUFULENBQWM7QUFBRUg7QUFBRixDQUFkLEVBQWdDO0FBQzdDLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsUUFBSSxNQUFaO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFRSSx5REFBU0E7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQVMsZUFBUyxFQUFFQywyRUFBcEI7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQU9FO0FBQVMsZUFBUyxFQUFHLEdBQUVBLDJFQUFxQixJQUFHQSw0RUFBc0IsRUFBckU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVBLDJFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUVBLHNFQUFmO0FBQUEsa0JBQ0dMLFlBQVksQ0FBQ00sR0FBYixDQUFpQixDQUFDO0FBQUVDLFlBQUY7QUFBTUMsY0FBTjtBQUFZQztBQUFaLFNBQUQsa0JBQ2hCO0FBQUksbUJBQVMsRUFBRUosMEVBQWY7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUcsVUFBU0UsRUFBRyxFQUF6QjtBQUFBLG1DQUNFO0FBQUEsd0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBS0U7QUFBTyxxQkFBUyxFQUFFSiwyRUFBbEI7QUFBQSxtQ0FDRSw4REFBQyxxREFBRDtBQUFNLHdCQUFVLEVBQUVHO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUEsV0FBeUNELEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZSdcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbFBvc3RzRGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgPHA+TG9va2luZyBmb3IgYSBjYXIgZml0IGZvciBhIHN1cGVyaGVybz8gWW91IGhhdmUgY29tZSB0byB0aGUgcmlnaHQgcGxhY2UhIE91ciBzaXRlIG9ubHkgZmVhdHVyZXMgdmVoaWNsZXMgd2l0aCB1bnVzdWFsIGNhcGFiaWxpdGllcywgdG8gaGVscCB5b3UgaW4gdGhlIGZpZ2h0IGFnYWluc3QgZXZpbC48L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMucGFkZGluZzFweH1gfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PkZvciBTYWxlPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cbiAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUgfSkgPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0SXRlbX0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpZ2h0VGV4dH0+XG4gICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./components/layout.module.css":
/*!**************************************!*\
  !*** ./components/layout.module.css ***!
  \**************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"layout_container__2t4v2\",\n\t\"header\": \"layout_header__2rhWq\",\n\t\"backToHome\": \"layout_backToHome__1vZsp\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9sYXlvdXQubW9kdWxlLmNzcz9kZGU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJsYXlvdXRfY29udGFpbmVyX18ydDR2MlwiLFxuXHRcImhlYWRlclwiOiBcImxheW91dF9oZWFkZXJfXzJyaFdxXCIsXG5cdFwiYmFja1RvSG9tZVwiOiBcImxheW91dF9iYWNrVG9Ib21lX18xdlpzcFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.module.css\n");

/***/ }),

/***/ "./styles/utils.module.css":
/*!*********************************!*\
  !*** ./styles/utils.module.css ***!
  \*********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"heading2Xl\": \"utils_heading2Xl__1I65m\",\n\t\"headingXl\": \"utils_headingXl__1XecN\",\n\t\"headingLg\": \"utils_headingLg__de7p0\",\n\t\"headingMd\": \"utils_headingMd__3de6G\",\n\t\"borderCircle\": \"utils_borderCircle__13qdJ\",\n\t\"colorInherit\": \"utils_colorInherit__3Gudf\",\n\t\"padding1px\": \"utils_padding1px__oCny8\",\n\t\"list\": \"utils_list__S7_pe\",\n\t\"listItem\": \"utils_listItem__2eJpJ\",\n\t\"lightText\": \"utils_lightText__12Ckm\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3M/MjNiZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGluZzJYbFwiOiBcInV0aWxzX2hlYWRpbmcyWGxfXzFJNjVtXCIsXG5cdFwiaGVhZGluZ1hsXCI6IFwidXRpbHNfaGVhZGluZ1hsX18xWGVjTlwiLFxuXHRcImhlYWRpbmdMZ1wiOiBcInV0aWxzX2hlYWRpbmdMZ19fZGU3cDBcIixcblx0XCJoZWFkaW5nTWRcIjogXCJ1dGlsc19oZWFkaW5nTWRfXzNkZTZHXCIsXG5cdFwiYm9yZGVyQ2lyY2xlXCI6IFwidXRpbHNfYm9yZGVyQ2lyY2xlX18xM3FkSlwiLFxuXHRcImNvbG9ySW5oZXJpdFwiOiBcInV0aWxzX2NvbG9ySW5oZXJpdF9fM0d1ZGZcIixcblx0XCJwYWRkaW5nMXB4XCI6IFwidXRpbHNfcGFkZGluZzFweF9fb0NueThcIixcblx0XCJsaXN0XCI6IFwidXRpbHNfbGlzdF9fUzdfcGVcIixcblx0XCJsaXN0SXRlbVwiOiBcInV0aWxzX2xpc3RJdGVtX18yZUpwSlwiLFxuXHRcImxpZ2h0VGV4dFwiOiBcInV0aWxzX2xpZ2h0VGV4dF9fMTJDa21cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/utils.module.css\n");

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();