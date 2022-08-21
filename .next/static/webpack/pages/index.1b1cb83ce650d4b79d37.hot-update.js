webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/logo */ \"./src/components/logo.js\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobile-drawer */ \"./src/components/header/mobile-drawer.js\");\n/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.data */ \"./src/components/header/header.data.js\");\n\n\nvar _jsxFileName = \"/Users/adefebrian/github/Tech-Startup/src/components/header/header.js\",\n    _templateObject;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\n\nfunction Header(_ref) {\n  var _this = this;\n\n  var className = _ref.className;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"header\", {\n    sx: styles.header,\n    className: className,\n    id: \"header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    sx: styles.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(components_logo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    as: \"nav\",\n    sx: styles.nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, _header_data__WEBPACK_IMPORTED_MODULE_9__[\"default\"].map(function (item, index) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n      activeClass: \"active\",\n      to: item.path,\n      spy: true,\n      smooth: true,\n      offset: -70,\n      duration: 500,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 15\n      }\n    }, item.label);\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"#pricing\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    className: \"donate__btn\",\n    variant: \"secondary\",\n    \"aria-label\": \"Get Started\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, \"Work with us\")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  })));\n}\n_c = Header;\nvar positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"keyframes\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    position: fixed;\\n    opacity: 1;\\n  }\\n\\n  to {\\n    position: absolute;\\n    opacity: 1;\\n    transition: all 0.4s ease;\\n  }\\n\"])));\nvar styles = {\n  header: {\n    color: 'text',\n    fontWeight: 'body',\n    py: 4,\n    width: '100%',\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    backgroundColor: 'transparent',\n    transition: 'all 0.4s ease',\n    animation: \"\".concat(positionAnim, \" 0.4s ease\"),\n    '.donate__btn': {\n      flexShrink: 0,\n      mr: [15, 20, null, null, 0],\n      ml: ['auto', null, null, null, 0]\n    },\n    '&.sticky': {\n      position: 'fixed',\n      backgroundColor: 'background',\n      color: '#000000',\n      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',\n      py: 3,\n      'nev > a': {\n        color: 'text'\n      }\n    }\n  },\n  container: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'space-between'\n  },\n  nav: {\n    mx: 'auto',\n    display: 'none',\n    '@media screen and (min-width: 1024px)': {\n      display: 'block'\n    },\n    a: {\n      fontSize: 2,\n      fontWeight: 'body',\n      px: 5,\n      cursor: 'pointer',\n      lineHeight: '1.2',\n      transition: 'all 0.15s',\n      '&:hover': {\n        color: 'primary'\n      },\n      '&.active': {\n        color: 'primary'\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcz8xMjBlIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlciIsImNvbnRhaW5lciIsIkxvZ29EYXJrIiwibmF2IiwibWVudUl0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwicGF0aCIsImxhYmVsIiwicG9zaXRpb25BbmltIiwia2V5ZnJhbWVzIiwiY29sb3IiLCJmb250V2VpZ2h0IiwicHkiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJhbmltYXRpb24iLCJmbGV4U2hyaW5rIiwibXIiLCJtbCIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJteCIsImEiLCJmb250U2l6ZSIsInB4IiwiY3Vyc29yIiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUErQjtFQUFBOztFQUFBLElBQWJDLFNBQWEsUUFBYkEsU0FBYTtFQUM1QyxPQUNJO0lBQVEsRUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0lBQTJCLFNBQVMsRUFBRUYsU0FBdEM7SUFBaUQsRUFBRSxFQUFDLFFBQXBEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxxREFBQyxrREFBRDtJQUFXLEVBQUUsRUFBRUMsTUFBTSxDQUFDRSxTQUF0QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UscURBQUMsdURBQUQ7SUFBTSxHQUFHLEVBQUVDLHNEQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQUVFLHFEQUFDLDZDQUFEO0lB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ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBMaW5rICBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgTG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28uc3ZnJztcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSAnLi9tb2JpbGUtZHJhd2VyJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgICA8aGVhZGVyIHN4PXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPExvZ28gc3JjPXtMb2dvRGFya30vPlxuICAgICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxTY3JvbGxMaW5rXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9J2FjdGl2ZSdcbiAgICAgICAgICAgICAgICB0bz17aXRlbS5wYXRofVxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIDwvU2Nyb2xsTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgPExpbmsgaHJlZj0nI3ByaWNpbmcnID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJkb25hdGVfX2J0blwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIj5cbiAgICAgICAgICAgICAgICBXb3JrIHdpdGggdXNcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPE1vYmlsZURyYXdlciAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyOiB7XG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgcHk6IDQsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxuICAgICcuZG9uYXRlX19idG4nOiB7XG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxuICAgICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDBdLFxuICAgIH0sXG4gICAgJyYuc3RpY2t5Jzoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICBweTogMyxcbiAgICAgICduZXYgPiBhJzoge1xuICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgbmF2OiB7XG4gICAgbXg6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgZm9udFNpemU6IDIsXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBweDogNSxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbGluZUhlaWdodDogJzEuMicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMTVzJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/header.js\n");

/***/ })

})