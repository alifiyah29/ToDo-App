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

/***/ "./src/hooks/useTheme.js":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useTheme: function() { return /* binding */ useTheme; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useTheme = ()=>{\n    _s();\n    const [darkTheme, setDarkTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const toggleTheme = ()=>{\n        setDarkTheme(!darkTheme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(\"theme:\".concat(darkTheme ? \"dark\" : \"light\"), val);\n    return {\n        darkTheme,\n        toggleTheme\n    };\n};\n_s(useTheme, \"VcZDQuIf1J7x8iHb5eQ/BLJ2iX0=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVGhlbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRDtBQUV6QyxNQUFNRSxXQUFXOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTUksY0FBYztRQUNsQkQsYUFBYSxDQUFDRDtJQUNoQjtJQUVBSCxvREFBYUEsQ0FBQyxTQUFzQyxPQUE3QkcsWUFBWSxTQUFTLFVBQzdDRztJQUVDLE9BQU87UUFDTEg7UUFDQUU7SUFDRjtBQUNGLEVBQUU7R0FiV0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVRoZW1lLmpzPzMxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGVidWdWYWx1ZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpID0+IHtcclxuICBjb25zdCBbZGFya1RoZW1lLCBzZXREYXJrVGhlbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgc2V0RGFya1RoZW1lKCFkYXJrVGhlbWUpO1xyXG4gIH07XHJcblxyXG4gIHVzZURlYnVnVmFsdWUoYHRoZW1lOiR7ZGFya1RoZW1lID8gXCJkYXJrXCIgOiBcImxpZ2h0XCJ9YCxcclxuKHZhbClcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXJrVGhlbWUsXHJcbiAgICB0b2dnbGVUaGVtZSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlRGVidWdWYWx1ZSIsInVzZVN0YXRlIiwidXNlVGhlbWUiLCJkYXJrVGhlbWUiLCJzZXREYXJrVGhlbWUiLCJ0b2dnbGVUaGVtZSIsInZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useTheme.js\n"));

/***/ })

});