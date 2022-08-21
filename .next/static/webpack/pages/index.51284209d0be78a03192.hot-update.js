webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KeyFeature; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ \"./src/components/feature-card-column.js\");\n/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ \"./src/assets/key-feature/performance.svg\");\n/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ \"./src/assets/key-feature/partnership.svg\");\n/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ \"./src/assets/key-feature/subscription.svg\");\n/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ \"./src/assets/key-feature/support.svg\");\n/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/adefebrian/github/Tech-Startup/src/sections/key-feature.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  altText: 'Fast Performance',\n  title: 'Fast Performance',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 2,\n  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  altText: 'Partnership deal',\n  title: 'Partnership deal',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 3,\n  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n  altText: 'Pro Subscription',\n  title: 'Pro Subscription',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 4,\n  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n  altText: 'Customer Support',\n  title: 'Customer Support',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}];\nfunction KeyFeature() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    id: \"feature\",\n    sx: {\n      variant: 'section.keyFeature'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 6\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    slogan: \"What's the function\",\n    title: \"Meet the feature of our Service\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 8\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 8\n    }\n  }, data.map(function (item) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: item.id,\n      src: item.imgSrc,\n      alt: item.altText,\n      title: item.title,\n      text: item.text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }\n    });\n  }))));\n}\n_c = KeyFeature;\nvar styles = {\n  grid: {\n    width: ['100%', '80%', '100%'],\n    mx: 'auto',\n    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],\n    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"KeyFeature\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzP2Q5OTEiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiUGFydG5lcnNoaXAiLCJTdWJzY3JpcHRpb24iLCJTdXBwb3J0IiwiS2V5RmVhdHVyZSIsInZhcmlhbnQiLCJzdHlsZXMiLCJncmlkIiwibWFwIiwiaXRlbSIsIndpZHRoIiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0VBQ0VDLEVBQUUsRUFBRSxDQUROO0VBRUVDLE1BQU0sRUFBRUMseUVBRlY7RUFHRUMsT0FBTyxFQUFFLGtCQUhYO0VBSUVDLEtBQUssRUFBRSxrQkFKVDtFQUtFQyxJQUFJLEVBQ0Y7QUFOSixDQURXLEVBU1g7RUFDRUwsRUFBRSxFQUFFLENBRE47RUFFRUMsTUFBTSxFQUFFSyx5RUFGVjtFQUdFSCxPQUFPLEVBQUUsa0JBSFg7RUFJRUMsS0FBSyxFQUFFLGtCQUpUO0VBS0VDLElBQUksRUFDRjtBQU5KLENBVFcsRUFpQlg7RUFDRUwsRUFBRSxFQUFFLENBRE47RUFFRUMsTUFBTSxFQUFFTSwwRUFGVjtFQUdFSixPQUFPLEVBQUUsa0JBSFg7RUFJRUMsS0FBSyxFQUFFLGtCQUpUO0VBS0VDLElBQUksRUFDRjtBQU5KLENBakJXLEVBeUJYO0VBQ0VMLEVBQUUsRUFBRSxDQUROO0VBRUVDLE1BQU0sRUFBRU8scUVBRlY7RUFHRUwsT0FBTyxFQUFFLGtCQUhYO0VBSUVDLEtBQUssRUFBRSxrQkFKVDtFQUtFQyxJQUFJLEVBQ0Y7QUFOSixDQXpCVyxDQUFiO0FBbUNlLFNBQVNJLFVBQVQsR0FBc0I7RUFBQTs7RUFDbkMsT0FDQztJQUFTLEVBQUUsRUFBQyxTQUFaO0lBQXNCLEVBQUUsRUFBRTtNQUFDQyxPQUFPLEVBQUU7SUFBVixDQUExQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UscURBQUMsa0RBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLHFEQUFDLGtFQUFEO0lBQWUsTUFBTSxFQUFDLHFCQUF0QjtJQUE0QyxLQUFLLEVBQUMsaUNBQWxEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQUVFLHFEQUFDLDZDQUFEO0lBQU0sRUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWpCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSWIsSUFBSSxDQUFDYyxHQUFMLENBQVMsVUFBQ0MsSUFBRDtJQUFBLE9BQ1IscURBQUMseUVBQUQ7TUFDRSxHQUFHLEVBQUVBLElBQUksQ0FBQ2QsRUFEWjtNQUVFLEdBQUcsRUFBRWMsSUFBSSxDQUFDYixNQUZaO01BR0UsR0FBRyxFQUFFYSxJQUFJLENBQUNYLE9BSFo7TUFJRSxLQUFLLEVBQUVXLElBQUksQ0FBQ1YsS0FKZDtNQUtFLElBQUksRUFBRVUsSUFBSSxDQUFDVCxJQUxiO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFEUTtFQUFBLENBQVQsQ0FESixDQUZGLENBREYsQ0FERDtBQWlCRDtLQWxCdUJJLFU7QUFvQnhCLElBQU1FLE1BQU0sR0FBRztFQUNiQyxJQUFJLEVBQUU7SUFDSkcsS0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsTUFBaEIsQ0FESDtJQUVKQyxFQUFFLEVBQUUsTUFGQTtJQUdKQyxPQUFPLEVBQUUsQ0FDUCxRQURPLEVBRVAsSUFGTyxFQUdQLFdBSE8sRUFJUCxXQUpPLEVBS1AsTUFMTyxFQU1QLFdBTk8sRUFPUCxXQVBPLENBSEw7SUFZSkMsbUJBQW1CLEVBQUUsQ0FDbkIsZUFEbUIsRUFFbkIsSUFGbUIsRUFHbkIsZUFIbUIsRUFJbkIsSUFKbUIsRUFLbkIsZUFMbUI7RUFaakI7QUFETyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCBGZWF0dXJlQ2FyZENvbHVtbiBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMnO1xuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmcnO1xuaW1wb3J0IFBhcnRuZXJzaGlwIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmcnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2Zyc7XG5pbXBvcnQgU3VwcG9ydCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvc3VwcG9ydC5zdmcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaW1nU3JjOiBQZXJmb3JtYW5jZSxcbiAgICBhbHRUZXh0OiAnRmFzdCBQZXJmb3JtYW5jZScsXG4gICAgdGl0bGU6ICdGYXN0IFBlcmZvcm1hbmNlJyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1nU3JjOiBQYXJ0bmVyc2hpcCxcbiAgICBhbHRUZXh0OiAnUGFydG5lcnNoaXAgZGVhbCcsXG4gICAgdGl0bGU6ICdQYXJ0bmVyc2hpcCBkZWFsJyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaW1nU3JjOiBTdWJzY3JpcHRpb24sXG4gICAgYWx0VGV4dDogJ1BybyBTdWJzY3JpcHRpb24nLFxuICAgIHRpdGxlOiAnUHJvIFN1YnNjcmlwdGlvbicsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGltZ1NyYzogU3VwcG9ydCxcbiAgICBhbHRUZXh0OiAnQ3VzdG9tZXIgU3VwcG9ydCcsXG4gICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5RmVhdHVyZSgpIHtcbiAgcmV0dXJuIChcbiAgIDxzZWN0aW9uIGlkPSdmZWF0dXJlJyBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uLmtleUZlYXR1cmUnfX0+XG4gICAgIDxDb250YWluZXI+XG4gICAgICAgPFNlY3Rpb25IZWFkZXIgc2xvZ2FuPVwiV2hhdCdzIHRoZSBmdW5jdGlvblwiIHRpdGxlPVwiTWVldCB0aGUgZmVhdHVyZSBvZiBvdXIgU2VydmljZVwiIC8+XG4gICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxGZWF0dXJlQ2FyZENvbHVtbiBcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0VGV4dH0gXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9Lz5cbiAgICAgICAgICApKX1cbiAgICAgICA8L0dyaWQ+XG4gICAgIDwvQ29udGFpbmVyPlxuICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGdyaWQ6IHtcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnMzVweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDBweCA0MHB4JyxcbiAgICAgICc1MHB4IDYwcHgnLFxuICAgICAgJzMwcHgnLFxuICAgICAgJzUwcHggNDBweCcsXG4gICAgICAnNTVweCA5MHB4JyxcbiAgICBdLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxuICAgIF0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/key-feature.js\n");

/***/ })

})