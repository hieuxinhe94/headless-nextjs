self["webpackHotUpdate_N_E"]("pages/pages/catalog",{

/***/ "./components/commerce/product-thumb-2.js":
/*!************************************************!*\
  !*** ./components/commerce/product-thumb-2.js ***!
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


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-thumb-2.js",
    _this = undefined;






var ProductThumb2 = function ProductThumb2(_ref) {
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

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  var productThumbItem = data.data;

  var onSelected = function onSelected(a) {
    console.log("Set selectingProductItem");
    selectingProductItem = a;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att = productThumbItem.attributes) === null || _productThumbItem$att === void 0 ? void 0 : _productThumbItem$att.slug,
    "class": "col-md-6 col-lg-4 col-xs-12 padding-none",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      replace: true,
      href: "/pages/catalog?product=".concat(productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att2 = productThumbItem.attributes) === null || _productThumbItem$att2 === void 0 ? void 0 : _productThumbItem$att2.slug),
      as: "/pages/catalog?product=".concat(productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att3 = productThumbItem.attributes) === null || _productThumbItem$att3 === void 0 ? void 0 : _productThumbItem$att3.slug),
      onClick: function onClick(e) {
        return onSelected(productThumb);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "services-item wow fadeIn",
        "data-wow-delay": "0.2s",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "tumb",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att4 = productThumbItem.attributes) === null || _productThumbItem$att4 === void 0 ? void 0 : _productThumbItem$att4.Image,
            imageClass: "product-image-horizontal",
            style: "height: 250px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "services-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            "class": "text-price",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: [(_productThumbItem$att5 = productThumbItem.attributes) === null || _productThumbItem$att5 === void 0 ? void 0 : _productThumbItem$att5.Price, " VN\u0110"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 34
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: (_productThumbItem$att6 = productThumbItem.attributes) === null || _productThumbItem$att6 === void 0 ? void 0 : _productThumbItem$att6.Title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: (_productThumbItem$att7 = productThumbItem.attributes) === null || _productThumbItem$att7 === void 0 ? void 0 : _productThumbItem$att7.ShortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, productThumbItem.id, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_c = ProductThumb2;
/* harmony default export */ __webpack_exports__["default"] = (ProductThumb2);

var _c;

$RefreshReg$(_c, "ProductThumb2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LXRodW1iLTIuanMiXSwibmFtZXMiOlsiUHJvZHVjdFRodW1iMiIsInByb2R1Y3RUaHVtYiIsImNvbnNvbGUiLCJsb2ciLCJnZXRQcm9kdWN0VGh1bWIiLCJpZCIsInBvcHVsYXRlIiwiSW1hZ2UiLCJDdXN0b21fZmllbGQiLCJkYXRhIiwiZXJyb3IiLCJwcm9kdWN0VGh1bWJJdGVtIiwib25TZWxlY3RlZCIsImEiLCJzZWxlY3RpbmdQcm9kdWN0SXRlbSIsImF0dHJpYnV0ZXMiLCJzbHVnIiwiZSIsIlByaWNlIiwiVGl0bGUiLCJTaG9ydERlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxhQUFhLEdBQUssU0FBbEJBLGFBQWtCLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLFlBQXFCLFFBQXJCQSxZQUFxQjtBQUM5Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7O0FBRDhDLHlCQUVwQkMseURBQWUsQ0FBQ0gsWUFBWSxDQUFDSSxFQUFkLEVBQWtCO0FBQ3pEQyxZQUFRLEVBQUU7QUFDUkMsV0FBSyxFQUFFO0FBQUVELGdCQUFRLEVBQUU7QUFBWixPQURDO0FBRVJFLGtCQUFZLEVBQUc7QUFBRUYsZ0JBQVEsRUFBRTtBQUFaO0FBRlA7QUFEK0MsR0FBbEIsQ0FGSztBQUFBLE1BRXRDRyxJQUZzQyxvQkFFdENBLElBRnNDO0FBQUEsTUFFaENDLEtBRmdDLG9CQUVoQ0EsS0FGZ0M7O0FBUy9DLE1BQUlBLEtBQUosRUFBVyxPQUFPLHdCQUFQO0FBQ1gsTUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTyxZQUFQO0FBRVgsTUFBTUUsZ0JBQWdCLEdBQUlGLElBQUksQ0FBQ0EsSUFBL0I7O0FBRUMsTUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCWCxXQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBVyx3QkFBb0IsR0FBR0QsQ0FBdkI7QUFDRCxHQUhEOztBQUtELHNCQUNPO0FBQUssTUFBRSxFQUFFRixnQkFBRixhQUFFQSxnQkFBRixnREFBRUEsZ0JBQWdCLENBQUVJLFVBQXBCLDBEQUFFLHNCQUE4QkMsSUFBdkM7QUFBNkMsYUFBTSwwQ0FBbkQ7QUFBQSwyQkFDQSw4REFBQyxrREFBRDtBQUFpQyxhQUFPLE1BQXhDO0FBQ3dCLFVBQUksbUNBQTRCTCxnQkFBNUIsYUFBNEJBLGdCQUE1QixpREFBNEJBLGdCQUFnQixDQUFFSSxVQUE5QywyREFBNEIsdUJBQThCQyxJQUExRCxDQUQ1QjtBQUV3QixRQUFFLG1DQUE0QkwsZ0JBQTVCLGFBQTRCQSxnQkFBNUIsaURBQTRCQSxnQkFBZ0IsQ0FBRUksVUFBOUMsMkRBQTRCLHVCQUE4QkMsSUFBMUQsQ0FGMUI7QUFHbUQsYUFBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsZUFBTUwsVUFBVSxDQUFDWCxZQUFELENBQWhCO0FBQUEsT0FINUQ7QUFBQSw2QkFJQTtBQUFLLGlCQUFNLDBCQUFYO0FBQXNDLDBCQUFlLE1BQXJEO0FBQUEsZ0NBQ0E7QUFBSyxtQkFBTSxNQUFYO0FBQUEsaUNBRVEsOERBQUMsMkNBQUQ7QUFBYSxpQkFBSyxFQUFFVSxnQkFBRixhQUFFQSxnQkFBRixpREFBRUEsZ0JBQWdCLENBQUVJLFVBQXBCLDJEQUFFLHVCQUE4QlIsS0FBbEQ7QUFBeUQsc0JBQVUsRUFBRSwwQkFBckU7QUFBaUcsaUJBQUssRUFBRTtBQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUtFO0FBQUssbUJBQU0sa0JBQVg7QUFBQSxrQ0FDQTtBQUFJLHFCQUFNLFlBQVY7QUFBQSxtQ0FBdUI7QUFBQSxtREFBSUksZ0JBQWdCLENBQUNJLFVBQXJCLDJEQUFJLHVCQUE2QkcsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFRTtBQUFBLG1DQUFJO0FBQUEsa0RBQUlQLGdCQUFnQixDQUFDSSxVQUFyQiwyREFBSSx1QkFBNkJJO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSxnREFBSVIsZ0JBQWdCLENBQUNJLFVBQXJCLDJEQUFJLHVCQUE2Qks7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsT0FHNkJULGdCQUFnQixDQUFDTixFQUg5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURQO0FBb0JBLENBdkNEOztLQUFNTCxhO0FBeUNOLCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuMmQxYWJhMjcyOTlkZDIxYjNkZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuY29uc3QgUHJvZHVjdFRodW1iMiA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwibG9hZCBwcm9kdWN0VGh1bWIgc3dyXCIpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9ICAgZ2V0UHJvZHVjdFRodW1iKHByb2R1Y3RUaHVtYi5pZCwge1xyXG4gICAgcG9wdWxhdGU6IHtcclxuICAgICAgSW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICAgIEN1c3RvbV9maWVsZCA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gaWYgKGVycm9yKSByZXR1cm4gXCJBbiBlcnJvciBoYXMgb2NjdXJyZWQuXCI7XHJcbiBpZiAoIWRhdGEpIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcclxuXHJcbiBjb25zdCBwcm9kdWN0VGh1bWJJdGVtID0gIGRhdGEuZGF0YTtcclxuIFxyXG4gIGNvbnN0IG9uU2VsZWN0ZWQgPSAoYSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJTZXQgc2VsZWN0aW5nUHJvZHVjdEl0ZW1cIik7XHJcbiAgICBzZWxlY3RpbmdQcm9kdWN0SXRlbSA9IGE7XHJcbiAgfVxyXG5cclxuIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z30gY2xhc3M9XCJjb2wtbWQtNiBjb2wtbGctNCBjb2wteHMtMTIgcGFkZGluZy1ub25lXCI+XHJcbiAgICAgICAgPExpbmsga2V5PXtwcm9kdWN0VGh1bWJJdGVtPy5pZH0gcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcGFnZXMvY2F0YWxvZz9wcm9kdWN0PSR7cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3RUaHVtYkl0ZW0uaWR9ICBvbkNsaWNrPXsoZSkgPT5vblNlbGVjdGVkKHByb2R1Y3RUaHVtYil9PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlcy1pdGVtIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHVtYlwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZmVhdHVyZXMvZmVhdHVyZS1pY29uLTEucG5nXCIgYWx0PVwiXCIvPiAqL31cclxuICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uSW1hZ2V9IGltYWdlQ2xhc3M9e1wicHJvZHVjdC1pbWFnZS1ob3Jpem9udGFsXCJ9IHN0eWxlPXtcImhlaWdodDogMjUwcHhcIn0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlcnZpY2VzLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtcHJpY2VcIj48Yj57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5QcmljZX0gVk7EkDwvYj48L2g0PlxyXG4gICAgICAgICAgICA8aDM+PGI+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uVGl0bGV9PC9iPjwvaDM+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0VGh1bWJJdGVtLmF0dHJpYnV0ZXM/LlNob3J0RGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RUaHVtYjJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==