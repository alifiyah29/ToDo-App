"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Layout.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./src/components/layout/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/components/layout/Footer.js\");\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/ThemeContext */ \"./src/contexts/ThemeContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Inner = (param)=>{\n    let { children } = param;\n    _s();\n    const { darkTheme } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n    const layoutVersion = \"Layout Version 2.0\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        \"data-theme\": darkTheme ? \"dark\" : \"light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                layoutVersion: layoutVersion,\n                toggleTheme: to\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\Task-Alchemy\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\Task-Alchemy\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\Task-Alchemy\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\Task-Alchemy\\\\src\\\\components\\\\layout\\\\Layout.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Inner, \"g941YcCeJON9Hh0mW96OT7mOLxA=\");\n_c = Inner;\nconst Layout = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Inner, {\n            ...props\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\Task-Alchemy\\\\src\\\\components\\\\layout\\\\Layout.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\Task-Alchemy\\\\src\\\\components\\\\layout\\\\Layout.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c, _c1;\n$RefreshReg$(_c, \"Inner\");\n$RefreshReg$(_c1, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDQTtBQUlPO0FBQ0Y7QUFFbkMsTUFBTUssUUFBUTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDekIsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0gsaURBQVVBLENBQUNGLGdFQUFZQTtJQUM3QyxNQUFNTSxnQkFBZ0I7SUFDdEIscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsY0FBWUosWUFBWSxTQUFTOzswQkFFakMsOERBQUNQLCtDQUFNQTtnQkFBQ1EsZUFBZUE7Z0JBQWVJLGFBQWVDOzs7Ozs7WUFDcERQOzBCQUNELDhEQUFDUTs7Ozs7MEJBQ0QsOERBQUNiLCtDQUFNQTs7Ozs7Ozs7Ozs7QUFHYjtHQWRNSTtLQUFBQTtBQWdCTixNQUFNVSxTQUFTLENBQUNDO0lBQ2QscUJBQ0UsOERBQUNiLGlFQUFhQTtrQkFDWiw0RUFBQ0U7WUFBTyxHQUFHVyxLQUFLOzs7Ozs7Ozs7OztBQUd0QjtNQU5NRDtBQVFOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanM/Y2JhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCB7XG4gIFRoZW1lQ29udGV4dCxcbiAgVGhlbWVQcm92aWRlcixcbn0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbm5lciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBkYXJrVGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgY29uc3QgbGF5b3V0VmVyc2lvbiA9IFwiTGF5b3V0IFZlcnNpb24gMi4wXCI7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcbiAgICAgIGRhdGEtdGhlbWU9e2RhcmtUaGVtZSA/IFwiZGFya1wiIDogXCJsaWdodFwifVxuICAgID5cbiAgICAgIDxIZWFkZXIgbGF5b3V0VmVyc2lvbj17bGF5b3V0VmVyc2lvbn0gdG9nZ2xlVGhlbWUgPSB7dG99IC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8YnIgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgPElubmVyIHsuLi5wcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiRm9vdGVyIiwiVGhlbWVDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsInVzZUNvbnRleHQiLCJJbm5lciIsImNoaWxkcmVuIiwiZGFya1RoZW1lIiwibGF5b3V0VmVyc2lvbiIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtdGhlbWUiLCJ0b2dnbGVUaGVtZSIsInRvIiwiYnIiLCJMYXlvdXQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/Layout.js\n"));

/***/ })

});