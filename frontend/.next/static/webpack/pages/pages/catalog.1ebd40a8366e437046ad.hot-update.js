self["webpackHotUpdate_N_E"]("pages/pages/catalog",{

/***/ "./components/commerce/product-thumb.js":
/*!**********************************************!*\
  !*** ./components/commerce/product-thumb.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-thumb.js",
    _this = undefined;






var ProductThumb = function ProductThumb(_ref) {
  var _productThumb$attribu, _productThumbItem$att, _productThumbItem$att2, _productThumbItem$att3, _productThumbItem$att4, _productThumbItem$att5, _productThumbItem$att6;

  var productThumb = _ref.productThumb;
  console.log("load productThumb swr");

  var onSelected = function onSelected(a) {
    console.log("Set selectingProductItem");
    selectingProductItem = a;
  };

  var _getProductThumb = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getProductThumb)(productThumb.id, {
    populate: {
      Image: {
        populate: "*"
      },
      Custom_field: {
        populate: "*"
      }
    }
  }),
      data = _getProductThumb.data,
      error = _getProductThumb.error;

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  var productThumbItem = data.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: productThumb === null || productThumb === void 0 ? void 0 : (_productThumb$attribu = productThumb.attributes) === null || _productThumb$attribu === void 0 ? void 0 : _productThumb$attribu.slug,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      replace: true,
      href: "/pages/catalog?product=".concat(productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att = productThumbItem.attributes) === null || _productThumbItem$att === void 0 ? void 0 : _productThumbItem$att.slug),
      as: "/pages/catalog?product=".concat(productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att2 = productThumbItem.attributes) === null || _productThumbItem$att2 === void 0 ? void 0 : _productThumbItem$att2.slug),
      onClick: function onClick(e) {
        return onSelected(productThumb);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "w-full wow fadeInUp",
        "data-wow-delay": ".2s",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "feature-box single-product",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "tumb",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
              image: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att3 = productThumbItem.attributes) === null || _productThumbItem$att3 === void 0 ? void 0 : _productThumbItem$att3.Image,
              imageClass: "product-image-horizontal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            "class": "text-price",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: [(_productThumbItem$att4 = productThumbItem.attributes) === null || _productThumbItem$att4 === void 0 ? void 0 : _productThumbItem$att4.Price, " VN\u0110"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 38
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            "class": "text-title",
            children: (_productThumbItem$att5 = productThumbItem.attributes) === null || _productThumbItem$att5 === void 0 ? void 0 : _productThumbItem$att5.Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            children: (_productThumbItem$att6 = productThumbItem.attributes) === null || _productThumbItem$att6 === void 0 ? void 0 : _productThumbItem$att6.ShortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, _this)
    }, productThumbItem.id, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_c = ProductThumb;
/* harmony default export */ __webpack_exports__["default"] = (ProductThumb);

var _c;

$RefreshReg$(_c, "ProductThumb");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LXRodW1iLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RUaHVtYiIsInByb2R1Y3RUaHVtYiIsImNvbnNvbGUiLCJsb2ciLCJvblNlbGVjdGVkIiwiYSIsInNlbGVjdGluZ1Byb2R1Y3RJdGVtIiwiZ2V0UHJvZHVjdFRodW1iIiwiaWQiLCJwb3B1bGF0ZSIsIkltYWdlIiwiQ3VzdG9tX2ZpZWxkIiwiZGF0YSIsImVycm9yIiwicHJvZHVjdFRodW1iSXRlbSIsImF0dHJpYnV0ZXMiLCJzbHVnIiwiZSIsIlByaWNlIiwiVGl0bGUiLCJTaG9ydERlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUssU0FBakJBLFlBQWlCLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLFlBQXFCLFFBQXJCQSxZQUFxQjtBQUM3Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBRyx3QkFBb0IsR0FBR0QsQ0FBdkI7QUFDRCxHQUhEOztBQUg2Qyx5QkFRbkJFLHlEQUFlLENBQUNOLFlBQVksQ0FBQ08sRUFBZCxFQUFrQjtBQUN6REMsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRTtBQUFFRCxnQkFBUSxFQUFFO0FBQVosT0FEQztBQUVSRSxrQkFBWSxFQUFHO0FBQUVGLGdCQUFRLEVBQUU7QUFBWjtBQUZQO0FBRCtDLEdBQWxCLENBUkk7QUFBQSxNQVFyQ0csSUFScUMsb0JBUXJDQSxJQVJxQztBQUFBLE1BUS9CQyxLQVIrQixvQkFRL0JBLEtBUitCOztBQWU5QyxNQUFJQSxLQUFKLEVBQVcsT0FBTyx3QkFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU8sWUFBUDtBQUVYLE1BQU1FLGdCQUFnQixHQUFJRixJQUFJLENBQUNBLElBQS9CO0FBRUMsc0JBQ0U7QUFBSyxNQUFFLEVBQUVYLFlBQUYsYUFBRUEsWUFBRixnREFBRUEsWUFBWSxDQUFFYyxVQUFoQiwwREFBRSxzQkFBMEJDLElBQW5DO0FBQUEsMkJBQ0UsOERBQUMsa0RBQUQ7QUFBaUMsYUFBTyxNQUF4QztBQUMwQixVQUFJLG1DQUE0QkYsZ0JBQTVCLGFBQTRCQSxnQkFBNUIsZ0RBQTRCQSxnQkFBZ0IsQ0FBRUMsVUFBOUMsMERBQTRCLHNCQUE4QkMsSUFBMUQsQ0FEOUI7QUFFMEIsUUFBRSxtQ0FBNEJGLGdCQUE1QixhQUE0QkEsZ0JBQTVCLGlEQUE0QkEsZ0JBQWdCLENBQUVDLFVBQTlDLDJEQUE0Qix1QkFBOEJDLElBQTFELENBRjVCO0FBR3FELGFBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGVBQU1iLFVBQVUsQ0FBQ0gsWUFBRCxDQUFoQjtBQUFBLE9BSDlEO0FBQUEsNkJBSUY7QUFBSyxpQkFBTSxxQkFBWDtBQUFpQywwQkFBZSxLQUFoRDtBQUFBLCtCQUNvQjtBQUFLLG1CQUFNLDRCQUFYO0FBQUEsa0NBQ0k7QUFBSyxxQkFBTSxNQUFYO0FBQUEsbUNBRUksOERBQUMsMkNBQUQ7QUFBYSxtQkFBSyxFQUFFYSxnQkFBRixhQUFFQSxnQkFBRixpREFBRUEsZ0JBQWdCLENBQUVDLFVBQXBCLDJEQUFFLHVCQUE4QkwsS0FBbEQ7QUFBeUQsd0JBQVUsRUFBRTtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtWO0FBQUkscUJBQU0sWUFBVjtBQUFBLG1DQUF1QjtBQUFBLG1EQUFJSSxnQkFBZ0IsQ0FBQ0MsVUFBckIsMkRBQUksdUJBQTZCRyxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMVSxlQU1WO0FBQUkscUJBQU0sWUFBVjtBQUFBLGdEQUF3QkosZ0JBQWdCLENBQUNDLFVBQXpDLDJEQUF3Qix1QkFBNkJJO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTlUsZUFPWjtBQUFBLGdEQUFJTCxnQkFBZ0IsQ0FBQ0MsVUFBckIsMkRBQUksdUJBQTZCSztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkUsT0FHK0JOLGdCQUFnQixDQUFDTixFQUhoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBeENEOztLQUFNUixZO0FBMENOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuMWViZDQwYTgzNjZlNDM3MDQ2YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmNvbnN0IFByb2R1Y3RUaHVtYiA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwibG9hZCBwcm9kdWN0VGh1bWIgc3dyXCIpO1xyXG5cclxuICBjb25zdCBvblNlbGVjdGVkID0gKGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2V0IHNlbGVjdGluZ1Byb2R1Y3RJdGVtXCIpO1xyXG4gICAgc2VsZWN0aW5nUHJvZHVjdEl0ZW0gPSBhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gICBnZXRQcm9kdWN0VGh1bWIocHJvZHVjdFRodW1iLmlkLCB7XHJcbiAgICBwb3B1bGF0ZToge1xyXG4gICAgICBJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgICAgQ3VzdG9tX2ZpZWxkIDogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuIGNvbnN0IHByb2R1Y3RUaHVtYkl0ZW0gPSAgZGF0YS5kYXRhO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e3Byb2R1Y3RUaHVtYj8uYXR0cmlidXRlcz8uc2x1Z30+XHJcbiAgICAgIDxMaW5rIGtleT17cHJvZHVjdFRodW1iSXRlbT8uaWR9IHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nP3Byb2R1Y3Q9JHtwcm9kdWN0VGh1bWJJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0VGh1bWJJdGVtLmlkfSAgb25DbGljaz17KGUpID0+b25TZWxlY3RlZChwcm9kdWN0VGh1bWIpfT5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIuMnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtYm94IHNpbmdsZS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZmVhdHVyZXMvZmVhdHVyZS1pY29uLTEucG5nXCIgYWx0PVwiXCIvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LkltYWdlfSBpbWFnZUNsYXNzPXtcInByb2R1Y3QtaW1hZ2UtaG9yaXpvbnRhbFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXByaWNlXCI+PGI+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uUHJpY2V9IFZOxJA8L2I+PC9oND5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXRpdGxlXCI+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uVGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPGk+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uU2hvcnREZXNjcmlwdGlvbn08L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFRodW1iXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=