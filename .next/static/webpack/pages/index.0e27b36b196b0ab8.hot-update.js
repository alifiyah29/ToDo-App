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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_todo_ToDoListWithToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todo/ToDoListWithToolbar */ \"./src/components/todo/ToDoListWithToolbar.js\");\n/* harmony import */ var _contexts_ToDosDataContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contexts/ToDosDataContext */ \"./src/contexts/ToDosDataContext.js\");\n/* harmony import */ var _components_todo_ToDoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todo/ToDoManager */ \"./src/components/todo/ToDoManager.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/Layout */ \"./src/components/layout/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst App = ()=>{\n    _s();\n    const [displayStatus, setDisplayStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\"); // all, pending, completed\n    const [important, setImportant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ToDosDataContext__WEBPACK_IMPORTED_MODULE_3__.TodosDataProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_todo_ToDoListWithToolbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    displayStatus: displayStatus,\n                    setDisplayStatus: setDisplayStatus,\n                    import: important,\n                    setImportant: setImportant,\n                    searchText: searchText,\n                    setSearchText: setSearchText,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_todo_ToDoManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        displayStatus: displayStatus,\n                        important: important,\n                        searchText: searchText\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\ToDo-App\\\\src\\\\App.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\ToDo-App\\\\src\\\\App.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\ToDo-App\\\\src\\\\App.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\ToDo-App\\\\src\\\\App.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\ToDo-App\\\\src\\\\App.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"6tVCXQ/Fq6Ij0VwVI95mfnHyrJA=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VDO0FBQ1I7QUFDUjtBQUNSO0FBR2hELE1BQU1LLE1BQU07O0lBQ1YsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUMsUUFBUSwwQkFBMEI7SUFDckYsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUc3QyxxQkFDRSw4REFBQ0UseUVBQWlCQTtrQkFDaEIsNEVBQUNVO3NCQUNELDRFQUFDUixpRUFBTUE7MEJBQ0wsNEVBQUNILDRFQUFtQkE7b0JBQ2xCSyxlQUFlQTtvQkFDZkMsa0JBQWtCQTtvQkFDbEJNLFFBQVFMO29CQUNSQyxjQUFjQTtvQkFDZEMsWUFBWUE7b0JBQ1pDLGVBQWVBOzhCQUVmLDRFQUFDUixvRUFBV0E7d0JBQ1ZHLGVBQWVBO3dCQUNmRSxXQUFXQTt3QkFDWEUsWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hCO0dBNUJNTDtLQUFBQTtBQTZCTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQXBwLmpzP2UzZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUb0RvTGlzdFdpdGhUb29sYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvdG9kby9Ub0RvTGlzdFdpdGhUb29sYmFyXCI7XG5pbXBvcnQgeyBUb2Rvc0RhdGFQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHRzL1RvRG9zRGF0YUNvbnRleHRcIjtcbmltcG9ydCBUb0RvTWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL3RvZG8vVG9Eb01hbmFnZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbZGlzcGxheVN0YXR1cywgc2V0RGlzcGxheVN0YXR1c10gPSB1c2VTdGF0ZShcImFsbFwiKTsgLy8gYWxsLCBwZW5kaW5nLCBjb21wbGV0ZWRcbiAgY29uc3QgW2ltcG9ydGFudCwgc2V0SW1wb3J0YW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuICByZXR1cm4gKFxuICAgIDxUb2Rvc0RhdGFQcm92aWRlcj5cbiAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgPExheW91dCA+XG4gICAgICAgIDxUb0RvTGlzdFdpdGhUb29sYmFyXG4gICAgICAgICAgZGlzcGxheVN0YXR1cz17ZGlzcGxheVN0YXR1c31cbiAgICAgICAgICBzZXREaXNwbGF5U3RhdHVzPXtzZXREaXNwbGF5U3RhdHVzfVxuICAgICAgICAgIGltcG9ydD17aW1wb3J0YW50fVxuICAgICAgICAgIHNldEltcG9ydGFudD17c2V0SW1wb3J0YW50fVxuICAgICAgICAgIHNlYXJjaFRleHQ9e3NlYXJjaFRleHR9XG4gICAgICAgICAgc2V0U2VhcmNoVGV4dD17c2V0U2VhcmNoVGV4dH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUb0RvTWFuYWdlclxuICAgICAgICAgICAgZGlzcGxheVN0YXR1cz17ZGlzcGxheVN0YXR1c31cbiAgICAgICAgICAgIGltcG9ydGFudD17aW1wb3J0YW50fVxuICAgICAgICAgICAgc2VhcmNoVGV4dD17c2VhcmNoVGV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RvRG9MaXN0V2l0aFRvb2xiYXI+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1RvZG9zRGF0YVByb3ZpZGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRvRG9MaXN0V2l0aFRvb2xiYXIiLCJUb2Rvc0RhdGFQcm92aWRlciIsIlRvRG9NYW5hZ2VyIiwiTGF5b3V0IiwiQXBwIiwiZGlzcGxheVN0YXR1cyIsInNldERpc3BsYXlTdGF0dXMiLCJpbXBvcnRhbnQiLCJzZXRJbXBvcnRhbnQiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsIlRoZW1lUHJvdmlkZXIiLCJpbXBvcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.js\n"));

/***/ })

});