self["webpackHotUpdate_N_E"]("pages/pages/[slug]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJzbHVnIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibGF5b3V0SW5mbyIsImZpbHRlciIsInBhZ2UiLCJhdHRyaWJ1dGVzIiwiY29uc29sZSIsImxvZyIsIlRleHRDb2xvciIsInRleHRDb2xvciIsIlBhZ2VIZXJvIiwiUGFnZUJvZHkiLCJOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0Q7QUFBQTs7QUFBQSxNQUE3Q0MsSUFBNkMsUUFBN0NBLElBQTZDO0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1QztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBRUFGLFVBQVEsR0FBR0MsVUFBVSxDQUFDRSxNQUFYLENBQWtCLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNDLFVBQUwsQ0FBZ0JOLElBQWhCLEtBQXlCQSxJQUE3QjtBQUFBLEdBQXRCLEVBQXlELENBQXpELENBQVgsQ0FOMkQsQ0FPM0Q7QUFDQTs7QUFFQU8sU0FBTyxDQUFDQyxHQUFSLGNBQVlQLFFBQVosOENBQVksVUFBVUssVUFBVixDQUFxQkcsU0FBakM7QUFFQSxNQUFJQyxTQUFKOztBQUNBLE1BQUcsZUFBQVQsUUFBUSxVQUFSLHlFQUFVSyxVQUFWLGdGQUFzQkcsU0FBdEIsS0FBbUMsT0FBdEMsRUFBK0M7QUFDM0NDLGFBQVMsR0FBRyxZQUFaO0FBQ0gsR0FGRCxNQUVPO0FBQ0hBLGFBQVMsR0FBRyxZQUFaO0FBQ0g7O0FBRUQsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFVLEVBQUVSLFVBQXBCO0FBQWdDLFVBQU0sRUFBRUMsVUFBeEM7QUFBb0QsU0FBSyxFQUFFTyxTQUEzRDtBQUFBLDRCQUVFLDhEQUFDLGtFQUFEO0FBQVUsVUFBSSxFQUFFVCxRQUFRLENBQUNLLFVBQVQsQ0FBb0JLLFFBQXBDO0FBQThDLFdBQUssRUFBRUQ7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMscUVBQUQ7QUFBVSxVQUFJLEVBQUVULFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQk07QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLEVBSUdYLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQk8sSUFKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQTNCRDs7S0FBTWQsSTs7QUFvRU4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvW3NsdWddLjk5NzM5YmNmZWUyOWNjMzlmNGRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCIgXG5pbXBvcnQgUGFnZUhlcm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9hcnRpY2xlLWhlcm9cIlxuaW1wb3J0IFBhZ2VCb2R5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvYXJ0aWNsZS1jb250ZW50XCI7XG5cbmNvbnN0IFBhZ2UgPSAoeyBzbHVnLCBjYXRlZ29yeSwgY2F0ZWdvcmllcywgbGF5b3V0SW5mbyB9KSA9PiB7XG4gIC8vIGNvbnN0IHNlbyA9IHtcbiAgLy8gICBtZXRhVGl0bGU6IGNhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZSxcbiAgLy8gICBtZXRhRGVzY3JpcHRpb246IGBBbGwgJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9IGFydGljbGVzYCxcbiAgLy8gfVxuICAgXG4gIGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maWx0ZXIocGFnZSA9PiBwYWdlLmF0dHJpYnV0ZXMuc2x1ZyA9PT0gc2x1ZylbMF07XG4gIC8vIGNvbnNvbGUubG9nKFwiY2F0ZWdvcnlcIik7XG4gIC8vIGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcblxuICBjb25zb2xlLmxvZyhjYXRlZ29yeT8uYXR0cmlidXRlcy5UZXh0Q29sb3IgKVxuXG4gIHZhciB0ZXh0Q29sb3IgIDtcbiAgaWYoY2F0ZWdvcnk/LmF0dHJpYnV0ZXM/LlRleHRDb2xvciA9PSAnQmxhY2snKSB7XG4gICAgICB0ZXh0Q29sb3IgPSAndGV4dC1ibGFjaydcbiAgfSBlbHNlIHtcbiAgICAgIHRleHRDb2xvciA9ICd0ZXh0LXdoaXRlJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IGxheW91dD17bGF5b3V0SW5mb30gY29sb3I9e3RleHRDb2xvcn0gID5cbiAgICAgIHsvKiA8U2VvIHNlbz17c2VvfSAvPiAqL31cbiAgICAgIDxQYWdlSGVybyBkYXRhPXtjYXRlZ29yeS5hdHRyaWJ1dGVzLlBhZ2VIZXJvfSBjb2xvcj17dGV4dENvbG9yfSAvPlxuICAgICAgPFBhZ2VCb2R5IGRhdGE9e2NhdGVnb3J5LmF0dHJpYnV0ZXMuUGFnZUJvZHl9IC8+XG4gICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5OYW1lfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyhjb250ZXh0KSB7XG4gIGNvbnNvbGUubG9nKFwiY29udGV4dC5zbHVnXCIpXG4gIGNvbnNvbGUubG9nKGNvbnRleHQpXG4gIGNvbnN0IGNhdGVnb3JpZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHsgZmllbGRzOiBbXCJzbHVnXCJdIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogY2F0ZWdvcmllc1Jlcy5kYXRhLm1hcCgoY2F0ZWdvcnkpID0+ICh7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogY2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnLFxuICAgICAgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIC8vIGNvbnN0IGFydGljbGVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7XG4gIC8vICAgZmlsdGVyczoge1xuICAvLyAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXG4gIC8vICAgfSxcbiAgLy8gICBwb3B1bGF0ZToge1xuICAvLyAgICAgUGFnZUNvbnRlbnQ6IHsgcG9wdWxhdGU6IFwiKlwiIH1cbiAgLy8gICB9LFxuICAvLyB9KVxuXG4gIC8vIGNvbnNvbGUubG9nKFwiYXJ0aWNsZXNSZXNcIik7XG4gIC8vIGNvbnNvbGUubG9nKGFydGljbGVzUmVzLmRhdGEuYXR0cmlidXRlcyk7XG4gIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1Z1xuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuIFxuIFxuIFxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9