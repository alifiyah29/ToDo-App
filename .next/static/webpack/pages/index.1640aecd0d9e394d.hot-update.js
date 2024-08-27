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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeContext: function() { return /* binding */ ThemeContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_todo_ToDoListWithToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todo/ToDoListWithToolbar */ \"./src/components/todo/ToDoListWithToolbar.js\");\n/* harmony import */ var _contexts_ToDosDataContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contexts/ToDosDataContext */ \"./src/contexts/ToDosDataContext.js\");\n/* harmony import */ var _components_todo_ToDoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todo/ToDoManager */ \"./src/components/todo/ToDoManager.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/Layout */ \"./src/components/layout/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst App = ()=>{\n    _s();\n    const [displayStatus, setDisplayStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\"); // all, pending, completed\n    const [important, setImportant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [darkTheme, setDarkTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleTheme = ()=>setDarkTheme(!darkTheme);\n    const value = {\n        darkTheme: darkTheme,\n        toggleTheme: toggleTheme\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ToDosDataContext__WEBPACK_IMPORTED_MODULE_3__.TodosDataProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            value: value,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_todo_ToDoListWithToolbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                displayStatus: displayStatus,\n                setDisplayStatus: setDisplayStatus,\n                import: important,\n                setImportant: setImportant,\n                searchText: searchText,\n                setSearchText: setSearchText,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_todo_ToDoManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    displayStatus: displayStatus,\n                    important: important,\n                    searchText: searchText,\n                    darkTheme: darkTheme\n                }, void 0, false, {\n                    fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\ToDo-App\\\\src\\\\App.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\ToDo-App\\\\src\\\\App.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\ToDo-App\\\\src\\\\App.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\next.js\\\\ToDo-App\\\\src\\\\App.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"M2abYLYVsPiiP/YltYoA8TMlaNk=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3dCO0FBQ1I7QUFDUjtBQUNSO0FBRXpDLE1BQU1NLDZCQUFlTixvREFBYUEsQ0FBQyxDQUFDLEdBQUc7QUFFOUMsTUFBTU8sTUFBTTs7SUFDVixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQyxRQUFRLDBCQUEwQjtJQUNyRixNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNZSxjQUFjLElBQU1ELGFBQWEsQ0FBQ0Q7SUFFeEMsTUFBTUcsUUFBUTtRQUFFSCxXQUFXQTtRQUFXRSxhQUFhQTtJQUFZO0lBQy9ELHFCQUNFLDhEQUFDYix5RUFBaUJBO2tCQUNoQiw0RUFBQ0UsaUVBQU1BO1lBQUNZLE9BQVNBO3NCQUNmLDRFQUFDZiw0RUFBbUJBO2dCQUNsQk0sZUFBZUE7Z0JBQ2ZDLGtCQUFrQkE7Z0JBQ2xCUyxRQUFRUjtnQkFDUkMsY0FBY0E7Z0JBQ2RDLFlBQVlBO2dCQUNaQyxlQUFlQTswQkFFZiw0RUFBQ1Qsb0VBQVdBO29CQUNWSSxlQUFlQTtvQkFDZkUsV0FBV0E7b0JBQ1hFLFlBQVlBO29CQUNaRSxXQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZCO0dBN0JNUDtLQUFBQTtBQThCTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQXBwLmpzP2UzZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUb0RvTGlzdFdpdGhUb29sYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvdG9kby9Ub0RvTGlzdFdpdGhUb29sYmFyXCI7XG5pbXBvcnQgeyBUb2Rvc0RhdGFQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHRzL1RvRG9zRGF0YUNvbnRleHRcIjtcbmltcG9ydCBUb0RvTWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL3RvZG8vVG9Eb01hbmFnZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbZGlzcGxheVN0YXR1cywgc2V0RGlzcGxheVN0YXR1c10gPSB1c2VTdGF0ZShcImFsbFwiKTsgLy8gYWxsLCBwZW5kaW5nLCBjb21wbGV0ZWRcbiAgY29uc3QgW2ltcG9ydGFudCwgc2V0SW1wb3J0YW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXJrVGhlbWUsIHNldERhcmtUaGVtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4gc2V0RGFya1RoZW1lKCFkYXJrVGhlbWUpO1xuXG4gIGNvbnN0IHZhbHVlID0geyBkYXJrVGhlbWU6IGRhcmtUaGVtZSwgdG9nZ2xlVGhlbWU6IHRvZ2dsZVRoZW1lIH07XG4gIHJldHVybiAoXG4gICAgPFRvZG9zRGF0YVByb3ZpZGVyPlxuICAgICAgPExheW91dCB2YWx1ZSA9IHt2YWx1ZX0+XG4gICAgICAgIDxUb0RvTGlzdFdpdGhUb29sYmFyXG4gICAgICAgICAgZGlzcGxheVN0YXR1cz17ZGlzcGxheVN0YXR1c31cbiAgICAgICAgICBzZXREaXNwbGF5U3RhdHVzPXtzZXREaXNwbGF5U3RhdHVzfVxuICAgICAgICAgIGltcG9ydD17aW1wb3J0YW50fVxuICAgICAgICAgIHNldEltcG9ydGFudD17c2V0SW1wb3J0YW50fVxuICAgICAgICAgIHNlYXJjaFRleHQ9e3NlYXJjaFRleHR9XG4gICAgICAgICAgc2V0U2VhcmNoVGV4dD17c2V0U2VhcmNoVGV4dH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUb0RvTWFuYWdlclxuICAgICAgICAgICAgZGlzcGxheVN0YXR1cz17ZGlzcGxheVN0YXR1c31cbiAgICAgICAgICAgIGltcG9ydGFudD17aW1wb3J0YW50fVxuICAgICAgICAgICAgc2VhcmNoVGV4dD17c2VhcmNoVGV4dH1cbiAgICAgICAgICAgIGRhcmtUaGVtZT17ZGFya1RoZW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVG9Eb0xpc3RXaXRoVG9vbGJhcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvVG9kb3NEYXRhUHJvdmlkZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlRvRG9MaXN0V2l0aFRvb2xiYXIiLCJUb2Rvc0RhdGFQcm92aWRlciIsIlRvRG9NYW5hZ2VyIiwiTGF5b3V0IiwiVGhlbWVDb250ZXh0IiwiQXBwIiwiZGlzcGxheVN0YXR1cyIsInNldERpc3BsYXlTdGF0dXMiLCJpbXBvcnRhbnQiLCJzZXRJbXBvcnRhbnQiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsImRhcmtUaGVtZSIsInNldERhcmtUaGVtZSIsInRvZ2dsZVRoZW1lIiwidmFsdWUiLCJpbXBvcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.js\n"));

/***/ })

});