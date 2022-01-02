self["webpackHotUpdate_N_E"]("pages/pages/[slug]",{

/***/ "./components/home/article-content.js":
/*!********************************************!*\
  !*** ./components/home/article-content.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\article-content.js",
    _this = undefined;




var PageBody = function PageBody(_ref) {
  var data = _ref.data;
  console.log("PageBody");
  console.log(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "content",
    "class": "services-area pt-120 age-content",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "pb-10 text-center section-title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "m-auto line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactMarkdown, {
              source: data.attributes.PageContent,
              escapeHtml: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "justify-center pt-12 row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactMarkdown, {
          source: data.attributes.PageContent,
          escapeHtml: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 18
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, _this);
};

_c = PageBody;
/* harmony default export */ __webpack_exports__["default"] = (PageBody);

var _c;

$RefreshReg$(_c, "PageBody");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/pages/[slug].js":
/*!*******************************!*\
  !*** ./pages/pages/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_home_article_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/article-hero */ "./components/home/article-hero.js");
/* harmony import */ var _components_home_article_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/article-content */ "./components/home/article-content.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\pages\\pages\\[slug].js",
    _this = undefined;





var Page = function Page(_ref) {
  var _category, _category2, _category2$attributes;

  var slug = _ref.slug,
      category = _ref.category,
      categories = _ref.categories,
      layoutInfo = _ref.layoutInfo;
  // const seo = {
  //   metaTitle: category.attributes.name,
  //   metaDescription: `All ${category.attributes.name} articles`,
  // }
  category = categories.filter(function (page) {
    return page.attributes.slug === slug;
  })[0]; // console.log("category");
  // console.log(category);

  console.log((_category = category) === null || _category === void 0 ? void 0 : _category.attributes.TextColor);
  var textColor;

  if (((_category2 = category) === null || _category2 === void 0 ? void 0 : (_category2$attributes = _category2.attributes) === null || _category2$attributes === void 0 ? void 0 : _category2$attributes.TextColor) == 'Black') {
    textColor = 'text-black';
  } else {
    textColor = 'text-white';
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    categories: categories,
    layout: layoutInfo,
    color: textColor,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_article_hero__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: category.attributes.PageHero,
      color: textColor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_article_content__WEBPACK_IMPORTED_MODULE_3__.default, {
      data: category.attributes.PageBody
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), category.attributes.Name]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_c = Page;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2FydGljbGUtY29udGVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBhZ2VCb2R5IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhdHRyaWJ1dGVzIiwiUGFnZUNvbnRlbnQiLCJQYWdlIiwic2x1ZyIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImxheW91dEluZm8iLCJmaWx0ZXIiLCJwYWdlIiwiVGV4dENvbG9yIiwidGV4dENvbG9yIiwiUGFnZUhlcm8iLCJOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDM0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFFQSxzQkFDUTtBQUFTLE1BQUUsRUFBQyxTQUFaO0FBQXNCLGFBQU0sa0NBQTVCO0FBQUEsMkJBQ0E7QUFBSyxlQUFNLFdBQVg7QUFBQSw4QkFDSTtBQUFLLGlCQUFNLG9CQUFYO0FBQUEsK0JBQ0k7QUFBSyxtQkFBTSxpQkFBWDtBQUFBLGlDQUNJO0FBQUsscUJBQU0saUNBQVg7QUFBQSxvQ0FDSTtBQUFLLHVCQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJLDhEQUFDLGFBQUQ7QUFDSSxvQkFBTSxFQUFFQSxJQUFJLENBQUNHLFVBQUwsQ0FBZ0JDLFdBRDVCO0FBRUksd0JBQVUsRUFBRTtBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFZSTtBQUFLLGlCQUFNLDBCQUFYO0FBQUEsK0JBQ0MsOERBQUMsYUFBRDtBQUNlLGdCQUFNLEVBQUVKLElBQUksQ0FBQ0csVUFBTCxDQUFnQkMsV0FEdkM7QUFFZSxvQkFBVSxFQUFFO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURSO0FBdUJILENBM0JEOztLQUFNTCxRO0FBOEJOLCtEQUFlQSxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0Q7QUFBQTs7QUFBQSxNQUE3Q0MsSUFBNkMsUUFBN0NBLElBQTZDO0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1QztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBRUFGLFVBQVEsR0FBR0MsVUFBVSxDQUFDRSxNQUFYLENBQWtCLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNSLFVBQUwsQ0FBZ0JHLElBQWhCLEtBQXlCQSxJQUE3QjtBQUFBLEdBQXRCLEVBQXlELENBQXpELENBQVgsQ0FOMkQsQ0FPM0Q7QUFDQTs7QUFFQUwsU0FBTyxDQUFDQyxHQUFSLGNBQVlLLFFBQVosOENBQVksVUFBVUosVUFBVixDQUFxQlMsU0FBakM7QUFFQSxNQUFJQyxTQUFKOztBQUNBLE1BQUcsZUFBQU4sUUFBUSxVQUFSLHlFQUFVSixVQUFWLGdGQUFzQlMsU0FBdEIsS0FBbUMsT0FBdEMsRUFBK0M7QUFDM0NDLGFBQVMsR0FBRyxZQUFaO0FBQ0gsR0FGRCxNQUVPO0FBQ0hBLGFBQVMsR0FBRyxZQUFaO0FBQ0g7O0FBRUQsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFVLEVBQUVMLFVBQXBCO0FBQWdDLFVBQU0sRUFBRUMsVUFBeEM7QUFBb0QsU0FBSyxFQUFFSSxTQUEzRDtBQUFBLDRCQUVFLDhEQUFDLGtFQUFEO0FBQVUsVUFBSSxFQUFFTixRQUFRLENBQUNKLFVBQVQsQ0FBb0JXLFFBQXBDO0FBQThDLFdBQUssRUFBRUQ7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMscUVBQUQ7QUFBVSxVQUFJLEVBQUVOLFFBQVEsQ0FBQ0osVUFBVCxDQUFvQko7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLEVBSUdRLFFBQVEsQ0FBQ0osVUFBVCxDQUFvQlksSUFKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQTNCRDs7S0FBTVYsSTs7QUFvRU4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvW3NsdWddLjUxMDA4MzJiNTMzODYzNmQzMWY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcblxyXG5jb25zdCBQYWdlQm9keSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJQYWdlQm9keVwiKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cInNlcnZpY2VzLWFyZWEgcHQtMTIwIGFnZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi0xMCB0ZXh0LWNlbnRlciBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS1hdXRvIGxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkYXRhLmF0dHJpYnV0ZXMuUGFnZUNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciBwdC0xMiByb3dcIj4gXHJcbiAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2RhdGEuYXR0cmlidXRlcy5QYWdlQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUJvZHlcclxuXHJcbiIsImltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIiBcbmltcG9ydCBQYWdlSGVybyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL2FydGljbGUtaGVyb1wiXG5pbXBvcnQgUGFnZUJvZHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9hcnRpY2xlLWNvbnRlbnRcIjtcblxuY29uc3QgUGFnZSA9ICh7IHNsdWcsIGNhdGVnb3J5LCBjYXRlZ29yaWVzLCBsYXlvdXRJbmZvIH0pID0+IHtcbiAgLy8gY29uc3Qgc2VvID0ge1xuICAvLyAgIG1ldGFUaXRsZTogY2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lLFxuICAvLyAgIG1ldGFEZXNjcmlwdGlvbjogYEFsbCAke2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX0gYXJ0aWNsZXNgLFxuICAvLyB9XG4gICBcbiAgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbHRlcihwYWdlID0+IHBhZ2UuYXR0cmlidXRlcy5zbHVnID09PSBzbHVnKVswXTtcbiAgLy8gY29uc29sZS5sb2coXCJjYXRlZ29yeVwiKTtcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcnkpO1xuXG4gIGNvbnNvbGUubG9nKGNhdGVnb3J5Py5hdHRyaWJ1dGVzLlRleHRDb2xvciApXG5cbiAgdmFyIHRleHRDb2xvciAgO1xuICBpZihjYXRlZ29yeT8uYXR0cmlidXRlcz8uVGV4dENvbG9yID09ICdCbGFjaycpIHtcbiAgICAgIHRleHRDb2xvciA9ICd0ZXh0LWJsYWNrJ1xuICB9IGVsc2Uge1xuICAgICAgdGV4dENvbG9yID0gJ3RleHQtd2hpdGUnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gbGF5b3V0PXtsYXlvdXRJbmZvfSBjb2xvcj17dGV4dENvbG9yfSAgPlxuICAgICAgey8qIDxTZW8gc2VvPXtzZW99IC8+ICovfVxuICAgICAgPFBhZ2VIZXJvIGRhdGE9e2NhdGVnb3J5LmF0dHJpYnV0ZXMuUGFnZUhlcm99IGNvbG9yPXt0ZXh0Q29sb3J9IC8+XG4gICAgICA8UGFnZUJvZHkgZGF0YT17Y2F0ZWdvcnkuYXR0cmlidXRlcy5QYWdlQm9keX0gLz5cbiAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLk5hbWV9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKGNvbnRleHQpIHtcbiAgY29uc29sZS5sb2coXCJjb250ZXh0LnNsdWdcIilcbiAgY29uc29sZS5sb2coY29udGV4dClcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBmaWVsZHM6IFtcInNsdWdcIl0gfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBjYXRlZ29yaWVzUmVzLmRhdGEubWFwKChjYXRlZ29yeSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWcsXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgLy8gY29uc3QgYXJ0aWNsZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHtcbiAgLy8gICBmaWx0ZXJzOiB7XG4gIC8vICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgLy8gICB9LFxuICAvLyAgIHBvcHVsYXRlOiB7XG4gIC8vICAgICBQYWdlQ29udGVudDogeyBwb3B1bGF0ZTogXCIqXCIgfVxuICAvLyAgIH0sXG4gIC8vIH0pXG5cbiAgLy8gY29uc29sZS5sb2coXCJhcnRpY2xlc1Jlc1wiKTtcbiAgLy8gY29uc29sZS5sb2coYXJ0aWNsZXNSZXMuZGF0YS5hdHRyaWJ1dGVzKTtcbiAgXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG4gXG4gXG4gXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=