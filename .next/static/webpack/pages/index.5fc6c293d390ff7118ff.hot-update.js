webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KeyFeature; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ \"./src/components/feature-card-column.js\");\n/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ \"./src/assets/key-feature/performance.svg\");\n/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ \"./src/assets/key-feature/partnership.svg\");\n/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ \"./src/assets/key-feature/subscription.svg\");\n/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ \"./src/assets/key-feature/support.svg\");\n/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/adefebrian/github/Tech-Startup/src/sections/key-feature.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  altText: 'Fast Performance',\n  title: 'Fast Performance',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 2,\n  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  altText: 'Partnership deal',\n  title: 'Partnership deal',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 3,\n  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n  altText: 'Pro Subscription',\n  title: 'Pro Subscription',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 4,\n  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n  altText: 'Customer Support',\n  title: 'Customer Support',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}];\nfunction KeyFeature() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    id: \"feature\",\n    sx: {\n      variant: 'section.keyFeature'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 6\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    slogan: \"About us\",\n    title: \"Why should you join airdrop sultan?\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 8\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 8\n    }\n  }, data.map(function (item) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: item.id,\n      src: item.imgSrc,\n      alt: item.altText,\n      title: item.title,\n      text: item.text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }\n    });\n  }))));\n}\n_c = KeyFeature;\nvar styles = {\n  grid: {\n    width: ['100%', '80%', '100%'],\n    mx: 'auto',\n    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],\n    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"KeyFeature\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzP2Q5OTEiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiUGFydG5lcnNoaXAiLCJTdWJzY3JpcHRpb24iLCJTdXBwb3J0IiwiS2V5RmVhdHVyZSIsInZhcmlhbnQiLCJzdHlsZXMiLCJncmlkIiwibWFwIiwiaXRlbSIsIndpZHRoIiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0VBQ0VDLEVBQUUsRUFBRSxDQUROO0VBRUVDLE1BQU0sRUFBRUMseUVBRlY7RUFHRUMsT0FBTyxFQUFFLGtCQUhYO0VBSUVDLEtBQUssRUFBRSxrQkFKVDtFQUtFQyxJQUFJLEVBQ0Y7QUFOSixDQURXLEVBU1g7RUFDRUwsRUFBRSxFQUFFLENBRE47RUFFRUMsTUFBTSxFQUFFSyx5RUFGVjtFQUdFSCxPQUFPLEVBQUUsa0JBSFg7RUFJRUMsS0FBSyxFQUFFLGtCQUpUO0VBS0VDLElBQUksRUFDRjtBQU5KLENBVFcsRUFpQlg7RUFDRUwsRUFBRSxFQUFFLENBRE47RUFFRUMsTUFBTSxFQUFFTSwwRUFGVjtFQUdFSixPQUFPLEVBQUUsa0JBSFg7RUFJRUMsS0FBSyxFQUFFLGtCQUpUO0VBS0VDLElBQUksRUFDRjtBQU5KLENBakJXLEVBeUJYO0VBQ0VMLEVBQUUsRUFBRSxDQUROO0VBRUVDLE1BQU0sRUFBRU8scUVBRlY7RUFHRUwsT0FBTyxFQUFFLGtCQUhYO0VBSUVDLEtBQUssRUFBRSxrQkFKVDtFQUtFQyxJQUFJLEVBQ0Y7QUFOSixDQXpCVyxDQUFiO0FBbUNlLFNBQVNJLFVBQVQsR0FBc0I7RUFBQTs7RUFDbkMsT0FDQztJQUFTLEVBQUUsRUFBQyxTQUFaO0lBQXNCLEVBQUUsRUFBRTtNQUFDQyxPQUFPLEVBQUU7SUFBVixDQUExQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UscURBQUMsa0RBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLHFEQUFDLGtFQUFEO0lBQWUsTUFBTSxFQUFDLFVBQXRCO0lBQWlDLEtBQUssRUFBQyxxQ0FBdkM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLEVBRUUscURBQUMsNkNBQUQ7SUFBTSxFQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBakI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJYixJQUFJLENBQUNjLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0lBQUEsT0FDUixxREFBQyx5RUFBRDtNQUNFLEdBQUcsRUFBRUEsSUFBSSxDQUFDZCxFQURaO01BRUUsR0FBRyxFQUFFYyxJQUFJLENBQUNiLE1BRlo7TUFHRSxHQUFHLEVBQUVhLElBQUksQ0FBQ1gsT0FIWjtNQUlFLEtBQUssRUFBRVcsSUFBSSxDQUFDVixLQUpkO01BS0UsSUFBSSxFQUFFVSxJQUFJLENBQUNULElBTGI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQURRO0VBQUEsQ0FBVCxDQURKLENBRkYsQ0FERixDQUREO0FBaUJEO0tBbEJ1QkksVTtBQW9CeEIsSUFBTUUsTUFBTSxHQUFHO0VBQ2JDLElBQUksRUFBRTtJQUNKRyxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixDQURIO0lBRUpDLEVBQUUsRUFBRSxNQUZBO0lBR0pDLE9BQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsV0FITyxFQUlQLFdBSk8sRUFLUCxNQUxPLEVBTVAsV0FOTyxFQU9QLFdBUE8sQ0FITDtJQVlKQyxtQkFBbUIsRUFBRSxDQUNuQixlQURtQixFQUVuQixJQUZtQixFQUduQixlQUhtQixFQUluQixJQUptQixFQUtuQixlQUxtQjtFQVpqQjtBQURPLENBQWYiLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMva2V5LWZlYXR1cmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuaW1wb3J0IEZlYXR1cmVDYXJkQ29sdW1uIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qcyc7XG5pbXBvcnQgUGVyZm9ybWFuY2UgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3BlcmZvcm1hbmNlLnN2Zyc7XG5pbXBvcnQgUGFydG5lcnNoaXAgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3BhcnRuZXJzaGlwLnN2Zyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9zdWJzY3JpcHRpb24uc3ZnJztcbmltcG9ydCBTdXBwb3J0IGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9zdXBwb3J0LnN2Zyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpbWdTcmM6IFBlcmZvcm1hbmNlLFxuICAgIGFsdFRleHQ6ICdGYXN0IFBlcmZvcm1hbmNlJyxcbiAgICB0aXRsZTogJ0Zhc3QgUGVyZm9ybWFuY2UnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBpbWdTcmM6IFBhcnRuZXJzaGlwLFxuICAgIGFsdFRleHQ6ICdQYXJ0bmVyc2hpcCBkZWFsJyxcbiAgICB0aXRsZTogJ1BhcnRuZXJzaGlwIGRlYWwnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpbWdTcmM6IFN1YnNjcmlwdGlvbixcbiAgICBhbHRUZXh0OiAnUHJvIFN1YnNjcmlwdGlvbicsXG4gICAgdGl0bGU6ICdQcm8gU3Vic2NyaXB0aW9uJyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaW1nU3JjOiBTdXBwb3J0LFxuICAgIGFsdFRleHQ6ICdDdXN0b21lciBTdXBwb3J0JyxcbiAgICB0aXRsZTogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLZXlGZWF0dXJlKCkge1xuICByZXR1cm4gKFxuICAgPHNlY3Rpb24gaWQ9J2ZlYXR1cmUnIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24ua2V5RmVhdHVyZSd9fT5cbiAgICAgPENvbnRhaW5lcj5cbiAgICAgICA8U2VjdGlvbkhlYWRlciBzbG9nYW49XCJBYm91dCB1c1wiIHRpdGxlPVwiV2h5IHNob3VsZCB5b3Ugam9pbiBhaXJkcm9wIHN1bHRhbj9cIiAvPlxuICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8RmVhdHVyZUNhcmRDb2x1bW4gXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cbiAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdFRleHR9IFxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fS8+XG4gICAgICAgICAgKSl9XG4gICAgICAgPC9HcmlkPlxuICAgICA8L0NvbnRhaW5lcj5cbiAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxuICAgIG14OiAnYXV0bycsXG4gICAgZ3JpZEdhcDogW1xuICAgICAgJzM1cHggMCcsXG4gICAgICBudWxsLFxuICAgICAgJzQwcHggNDBweCcsXG4gICAgICAnNTBweCA2MHB4JyxcbiAgICAgICczMHB4JyxcbiAgICAgICc1MHB4IDQwcHgnLFxuICAgICAgJzU1cHggOTBweCcsXG4gICAgXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcbiAgICBdLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/key-feature.js\n");

/***/ })

})