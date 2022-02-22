self["webpackHotUpdate_N_E"]("pages/pages/catalog",{

/***/ "./components/commerce/product-thumb-3.js":
/*!************************************************!*\
  !*** ./components/commerce/product-thumb-3.js ***!
  \************************************************/
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


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-thumb-3.js",
    _this = undefined;






var ProductThumb3 = function ProductThumb3(_ref) {
  var _productThumbItem$att, _productThumbItem$att2, _productThumbItem$att3, _productThumbItem$att4, _productThumbItem$att5, _productThumbItem$att6, _productThumbItem$att7;

  var productThumb = _ref.productThumb;
  console.log("load productThumb swr");

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

  var onSelected = function onSelected(a) {
    console.log("Set selectingProductItem");
    selectingProductItem = a;
  };

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  var productThumbItem = data.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    "class": "col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center text-white",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      replace: true,
      href: "/pages/catalog?product=".concat(productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att2 = productThumbItem.attributes) === null || _productThumbItem$att2 === void 0 ? void 0 : _productThumbItem$att2.slug),
      as: "/pages/catalog?product=".concat(productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att3 = productThumbItem.attributes) === null || _productThumbItem$att3 === void 0 ? void 0 : _productThumbItem$att3.slug),
      onClick: function onClick(e) {
        return onSelected(productThumb);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "counter wow fadeInRight",
        "data-wow-delay": "0.3s",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "icon",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att4 = productThumbItem.attributes) === null || _productThumbItem$att4 === void 0 ? void 0 : _productThumbItem$att4.Image,
            imageClass: "product-image-horizontal",
            style: "height: 250px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          "class": "text-price",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: [(_productThumbItem$att5 = productThumbItem.attributes) === null || _productThumbItem$att5 === void 0 ? void 0 : _productThumbItem$att5.Price, " VN\u0110"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 34
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: (_productThumbItem$att6 = productThumbItem.attributes) === null || _productThumbItem$att6 === void 0 ? void 0 : _productThumbItem$att6.Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: (_productThumbItem$att7 = productThumbItem.attributes) === null || _productThumbItem$att7 === void 0 ? void 0 : _productThumbItem$att7.ShortDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, _this)
    }, productThumbItem.id, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)
  }, productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att = productThumbItem.attributes) === null || _productThumbItem$att === void 0 ? void 0 : _productThumbItem$att.slug, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_c = ProductThumb3;
/* harmony default export */ __webpack_exports__["default"] = (ProductThumb3);

var _c;

$RefreshReg$(_c, "ProductThumb3");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LXRodW1iLTMuanMiXSwibmFtZXMiOlsiUHJvZHVjdFRodW1iMyIsInByb2R1Y3RUaHVtYiIsImNvbnNvbGUiLCJsb2ciLCJnZXRQcm9kdWN0VGh1bWIiLCJpZCIsInBvcHVsYXRlIiwiSW1hZ2UiLCJDdXN0b21fZmllbGQiLCJkYXRhIiwiZXJyb3IiLCJvblNlbGVjdGVkIiwiYSIsInNlbGVjdGluZ1Byb2R1Y3RJdGVtIiwicHJvZHVjdFRodW1iSXRlbSIsImF0dHJpYnV0ZXMiLCJzbHVnIiwiZSIsIlByaWNlIiwiVGl0bGUiLCJTaG9ydERlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUssU0FBbEJBLGFBQWtCLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLFlBQXFCLFFBQXJCQSxZQUFxQjtBQUM5Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7O0FBRDhDLHlCQUVwQkMseURBQWUsQ0FBQ0gsWUFBWSxDQUFDSSxFQUFkLEVBQWtCO0FBQ3pEQyxZQUFRLEVBQUU7QUFDUkMsV0FBSyxFQUFFO0FBQUVELGdCQUFRLEVBQUU7QUFBWixPQURDO0FBRVJFLGtCQUFZLEVBQUc7QUFBRUYsZ0JBQVEsRUFBRTtBQUFaO0FBRlA7QUFEK0MsR0FBbEIsQ0FGSztBQUFBLE1BRXRDRyxJQUZzQyxvQkFFdENBLElBRnNDO0FBQUEsTUFFaENDLEtBRmdDLG9CQUVoQ0EsS0FGZ0M7O0FBUzlDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN4QlYsV0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQVUsd0JBQW9CLEdBQUdELENBQXZCO0FBQ0QsR0FIRDs7QUFLRCxNQUFJRixLQUFKLEVBQVcsT0FBTyx3QkFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU8sWUFBUDtBQUVYLE1BQU1LLGdCQUFnQixHQUFJTCxJQUFJLENBQUNBLElBQS9CO0FBRUMsc0JBQ0U7QUFBK0MsYUFBTSx3RUFBckQ7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFpQyxhQUFPLE1BQXhDO0FBQzBCLFVBQUksbUNBQTRCSyxnQkFBNUIsYUFBNEJBLGdCQUE1QixpREFBNEJBLGdCQUFnQixDQUFFQyxVQUE5QywyREFBNEIsdUJBQThCQyxJQUExRCxDQUQ5QjtBQUUwQixRQUFFLG1DQUE0QkYsZ0JBQTVCLGFBQTRCQSxnQkFBNUIsaURBQTRCQSxnQkFBZ0IsQ0FBRUMsVUFBOUMsMkRBQTRCLHVCQUE4QkMsSUFBMUQsQ0FGNUI7QUFHcUQsYUFBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsZUFBTU4sVUFBVSxDQUFDVixZQUFELENBQWhCO0FBQUEsT0FIOUQ7QUFBQSw2QkFJQTtBQUFLLGlCQUFNLHlCQUFYO0FBQXFDLDBCQUFlLE1BQXBEO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBTSxNQUFYO0FBQUEsaUNBQ0EsOERBQUMsMkNBQUQ7QUFBYSxpQkFBSyxFQUFFYSxnQkFBRixhQUFFQSxnQkFBRixpREFBRUEsZ0JBQWdCLENBQUVDLFVBQXBCLDJEQUFFLHVCQUE4QlIsS0FBbEQ7QUFBeUQsc0JBQVUsRUFBRSwwQkFBckU7QUFBaUcsaUJBQUssRUFBRTtBQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlJO0FBQUksbUJBQU0sWUFBVjtBQUFBLGlDQUF1QjtBQUFBLGlEQUFJTyxnQkFBZ0IsQ0FBQ0MsVUFBckIsMkRBQUksdUJBQTZCRyxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQUEsaUNBQUk7QUFBQSxnREFBSUosZ0JBQWdCLENBQUNDLFVBQXJCLDJEQUFJLHVCQUE2Qkk7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSTtBQUFBLDhDQUFJTCxnQkFBZ0IsQ0FBQ0MsVUFBckIsMkRBQUksdUJBQTZCSztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLE9BRytCTixnQkFBZ0IsQ0FBQ1QsRUFIaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEtBQVdTLGdCQUFYLGFBQVdBLGdCQUFYLGdEQUFXQSxnQkFBZ0IsQ0FBRUMsVUFBN0IsMERBQVcsc0JBQThCQyxJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0FwQ0Q7O0tBQU1oQixhO0FBc0NOLCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuMDM2ZGFhYWM5MDJmNTJlNTI1ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuIFxyXG5jb25zdCBQcm9kdWN0VGh1bWIzID0gICAoeyBwcm9kdWN0VGh1bWIgIH0pICA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJsb2FkIHByb2R1Y3RUaHVtYiBzd3JcIik7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gICBnZXRQcm9kdWN0VGh1bWIocHJvZHVjdFRodW1iLmlkLCB7XHJcbiAgICBwb3B1bGF0ZToge1xyXG4gICAgICBJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgICAgQ3VzdG9tX2ZpZWxkIDogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25TZWxlY3RlZCA9IChhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNldCBzZWxlY3RpbmdQcm9kdWN0SXRlbVwiKTtcclxuICAgIHNlbGVjdGluZ1Byb2R1Y3RJdGVtID0gYTtcclxuICB9XHJcbiAgXHJcbiBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuIGNvbnN0IHByb2R1Y3RUaHVtYkl0ZW0gPSAgZGF0YS5kYXRhO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgIGtleT17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z30gY2xhc3M9XCJjb2wtbWQtNiBjb2wtbGctMyBjb2wteHMtMTIgd29yay1jb3VudGVyLXdpZGdldCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIDxMaW5rIGtleT17cHJvZHVjdFRodW1iSXRlbT8uaWR9IHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nP3Byb2R1Y3Q9JHtwcm9kdWN0VGh1bWJJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0VGh1bWJJdGVtLmlkfSAgb25DbGljaz17KGUpID0+b25TZWxlY3RlZChwcm9kdWN0VGh1bWIpfT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZXIgd293IGZhZGVJblJpZ2h0XCIgZGF0YS13b3ctZGVsYXk9XCIwLjNzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LkltYWdlfSBpbWFnZUNsYXNzPXtcInByb2R1Y3QtaW1hZ2UtaG9yaXpvbnRhbFwifSBzdHlsZT17XCJoZWlnaHQ6IDI1MHB4XCJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtcHJpY2VcIj48Yj57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5QcmljZX0gVk7EkDwvYj48L2g0PlxyXG4gICAgICAgICAgPGgzPjxiPntwcm9kdWN0VGh1bWJJdGVtLmF0dHJpYnV0ZXM/LlRpdGxlfTwvYj48L2gzPlxyXG4gICAgICAgICAgPGk+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uU2hvcnREZXNjcmlwdGlvbn08L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGh1bWIzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=