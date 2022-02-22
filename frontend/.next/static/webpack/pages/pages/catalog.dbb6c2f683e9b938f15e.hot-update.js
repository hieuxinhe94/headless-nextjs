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
      "class": "cursor",
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


/***/ }),

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
      "class": "cursor",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LXRodW1iLTIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbWVyY2UvcHJvZHVjdC10aHVtYi5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0VGh1bWIyIiwicHJvZHVjdFRodW1iIiwiY29uc29sZSIsImxvZyIsImdldFByb2R1Y3RUaHVtYiIsImlkIiwicG9wdWxhdGUiLCJJbWFnZSIsIkN1c3RvbV9maWVsZCIsImRhdGEiLCJlcnJvciIsInByb2R1Y3RUaHVtYkl0ZW0iLCJvblNlbGVjdGVkIiwiYSIsInNlbGVjdGluZ1Byb2R1Y3RJdGVtIiwiYXR0cmlidXRlcyIsInNsdWciLCJlIiwiUHJpY2UiLCJUaXRsZSIsIlNob3J0RGVzY3JpcHRpb24iLCJQcm9kdWN0VGh1bWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGFBQWEsR0FBSyxTQUFsQkEsYUFBa0IsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsWUFBcUIsUUFBckJBLFlBQXFCO0FBQzlDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjs7QUFEOEMseUJBRXBCQyx5REFBZSxDQUFDSCxZQUFZLENBQUNJLEVBQWQsRUFBa0I7QUFDekRDLFlBQVEsRUFBRTtBQUNSQyxXQUFLLEVBQUU7QUFBRUQsZ0JBQVEsRUFBRTtBQUFaLE9BREM7QUFFUkUsa0JBQVksRUFBRztBQUFFRixnQkFBUSxFQUFFO0FBQVo7QUFGUDtBQUQrQyxHQUFsQixDQUZLO0FBQUEsTUFFdENHLElBRnNDLG9CQUV0Q0EsSUFGc0M7QUFBQSxNQUVoQ0MsS0FGZ0Msb0JBRWhDQSxLQUZnQzs7QUFTL0MsTUFBSUEsS0FBSixFQUFXLE9BQU8sd0JBQVA7QUFDWCxNQUFJLENBQUNELElBQUwsRUFBVyxPQUFPLFlBQVA7QUFFWCxNQUFNRSxnQkFBZ0IsR0FBSUYsSUFB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O0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFLVjtBQUFJLHFCQUFNLFlBQVY7QUFBQSxtQ0FBdUI7QUFBQSxtREFBSUksZ0JBQWdCLENBQUNJLFVBQXJCLDJEQUFJLHVCQUE2QkcsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTFUsZUFNVjtBQUFJLHFCQUFNLFlBQVY7QUFBQSxnREFBd0JQLGdCQUFnQixDQUFDSSxVQUF6QywyREFBd0IsdUJBQTZCSTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5VLGVBT1o7QUFBQSxnREFBSVIsZ0JBQWdCLENBQUNJLFVBQXJCLDJEQUFJLHVCQUE2Qks7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpFLE9BRytCVCxnQkFBZ0IsQ0FBQ04sRUFIaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXhDRDs7S0FBTWdCLFk7QUEwQ04sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvY2F0YWxvZy5kYmI2YzJmNjgzZTliOTM4ZjE1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZFByb2R1Y3RUaHVtYiwgZ2V0UHJvZHVjdFRodW1iIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5jb25zdCBQcm9kdWN0VGh1bWIyID0gICAoeyBwcm9kdWN0VGh1bWIgIH0pICA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJsb2FkIHByb2R1Y3RUaHVtYiBzd3JcIik7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gICBnZXRQcm9kdWN0VGh1bWIocHJvZHVjdFRodW1iLmlkLCB7XHJcbiAgICBwb3B1bGF0ZToge1xyXG4gICAgICBJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgICAgQ3VzdG9tX2ZpZWxkIDogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuIGNvbnN0IHByb2R1Y3RUaHVtYkl0ZW0gPSAgZGF0YS5kYXRhO1xyXG4gXHJcbiAgY29uc3Qgb25TZWxlY3RlZCA9IChhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNldCBzZWxlY3RpbmdQcm9kdWN0SXRlbVwiKTtcclxuICAgIHNlbGVjdGluZ1Byb2R1Y3RJdGVtID0gYTtcclxuICB9XHJcblxyXG4gcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtwcm9kdWN0VGh1bWJJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfSBjbGFzcz1cImNvbC1tZC02IGNvbC1sZy00IGNvbC14cy0xMiBwYWRkaW5nLW5vbmVcIj5cclxuICAgICAgICA8TGluayBjbGFzcz1cImN1cnNvclwiIGtleT17cHJvZHVjdFRodW1iSXRlbT8uaWR9IHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nP3Byb2R1Y3Q9JHtwcm9kdWN0VGh1bWJJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0VGh1bWJJdGVtLmlkfSAgb25DbGljaz17KGUpID0+b25TZWxlY3RlZChwcm9kdWN0VGh1bWIpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VydmljZXMtaXRlbSB3b3cgZmFkZUluXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR1bWJcIj5cclxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ZlYXR1cmVzL2ZlYXR1cmUtaWNvbi0xLnBuZ1wiIGFsdD1cIlwiLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LkltYWdlfSBpbWFnZUNsYXNzPXtcInByb2R1Y3QtaW1hZ2UtaG9yaXpvbnRhbFwifSBzdHlsZT17XCJoZWlnaHQ6IDI1MHB4XCJ9Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlcy1jb250ZW50XCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXByaWNlXCI+PGI+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uUHJpY2V9IFZOxJA8L2I+PC9oND5cclxuICAgICAgICAgICAgPGgzPjxiPntwcm9kdWN0VGh1bWJJdGVtLmF0dHJpYnV0ZXM/LlRpdGxlfTwvYj48L2gzPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5TaG9ydERlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGh1bWIyXHJcbiIsImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmNvbnN0IFByb2R1Y3RUaHVtYiA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwibG9hZCBwcm9kdWN0VGh1bWIgc3dyXCIpO1xyXG5cclxuICBjb25zdCBvblNlbGVjdGVkID0gKGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2V0IHNlbGVjdGluZ1Byb2R1Y3RJdGVtXCIpO1xyXG4gICAgc2VsZWN0aW5nUHJvZHVjdEl0ZW0gPSBhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gICBnZXRQcm9kdWN0VGh1bWIocHJvZHVjdFRodW1iLmlkLCB7XHJcbiAgICBwb3B1bGF0ZToge1xyXG4gICAgICBJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgICAgQ3VzdG9tX2ZpZWxkIDogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuIGNvbnN0IHByb2R1Y3RUaHVtYkl0ZW0gPSAgZGF0YS5kYXRhO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e3Byb2R1Y3RUaHVtYj8uYXR0cmlidXRlcz8uc2x1Z30+XHJcbiAgICAgIDxMaW5rIGNsYXNzPVwiY3Vyc29yXCIga2V5PXtwcm9kdWN0VGh1bWJJdGVtPy5pZH0gcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcGFnZXMvY2F0YWxvZz9wcm9kdWN0PSR7cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3RUaHVtYkl0ZW0uaWR9ICBvbkNsaWNrPXsoZSkgPT5vblNlbGVjdGVkKHByb2R1Y3RUaHVtYil9PlxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIi4yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1ib3ggc2luZ2xlLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9mZWF0dXJlcy9mZWF0dXJlLWljb24tMS5wbmdcIiBhbHQ9XCJcIi8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uSW1hZ2V9IGltYWdlQ2xhc3M9e1wicHJvZHVjdC1pbWFnZS1ob3Jpem9udGFsXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtcHJpY2VcIj48Yj57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5QcmljZX0gVk7EkDwvYj48L2g0PlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtdGl0bGVcIj57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5UaXRsZX08L2g0PlxyXG4gICAgICAgICAgICA8aT57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5TaG9ydERlc2NyaXB0aW9ufTwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGh1bWJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==