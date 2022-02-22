self["webpackHotUpdate_N_E"]("pages/pages/catalog",{

/***/ "./components/commerce/product-detail-full.js":
/*!****************************************************!*\
  !*** ./components/commerce/product-detail-full.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_body_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-body-content */ "./components/commerce/product-body-content.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-detail-full.js",
    _this = undefined,
    _s = $RefreshSig$();








var ProductDetailFull = function ProductDetailFull(_ref) {
  _s();

  var _productDetailItem$at2, _productDetailItem$at3, _productDetailItem$at4, _productDetailItem$at5, _productDetailItem$at6, _productDetailItem$at7, _productDetailItem$at8, _productDetailItem$at9;

  var productThumb = _ref.productThumb;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var productSlug = router.query.product;
  console.log(productSlug);

  if (!productSlug) {
    router.replace("/pages/catalog");
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Empty   "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this);
  }

  console.log("load product detail swr");

  var _getProductDetail = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getProductDetail)(productSlug, {
    populate: {
      populate: "*",
      Image: {
        populate: "*"
      },
      Custom_field: {
        populate: "*"
      }
    }
  }),
      data = _getProductDetail.data,
      error = _getProductDetail.error;

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log("load ProductDetailFull");
  console.log(productDetailItem);

  if (!(data !== null && data !== void 0 && data.data) || Array.from(data.data).length == 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Empty"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }, _this);
  }

  var productDetailItem = data.data[0];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "detail-section",
    "class": "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "col-12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "section-title-header text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              "class": "section-title",
              onClick: function onClick(e) {
                var _productDetailItem$at;

                router.replace("/pages/catalog#".concat(productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at = productDetailItem.attributes) === null || _productDetailItem$at === void 0 ? void 0 : _productDetailItem$at.slug));
              },
              href: "/pages/catalog#".concat(productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at2 = productDetailItem.attributes) === null || _productDetailItem$at2 === void 0 ? void 0 : _productDetailItem$at2.slug),
              as: "/pages/catalog",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "lni lni-close",
                children: " "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 14
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "row product-detail",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "lg:w-1/2 wow fadeInRight product-detail-left",
          "data-wow-delay": "0.3s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "video",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
              image: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at3 = productDetailItem.attributes) === null || _productDetailItem$at3 === void 0 ? void 0 : _productDetailItem$at3.Image,
              imageClass: "product-image-horizontal-2x",
              style: "height: 250px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "lg:w-1/2 wow fadeInLeft ml-10 product-detail-right",
          "data-wow-delay": "0.3s",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            "class": "section-title wow fadeInUp",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at4 = productDetailItem.attributes) === null || _productDetailItem$at4 === void 0 ? void 0 : _productDetailItem$at4.Title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            "class": "intro-desc",
            children: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at5 = productDetailItem.attributes) === null || _productDetailItem$at5 === void 0 ? void 0 : _productDetailItem$at5.ShortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            "class": "",
            children: ["    ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              "class": "lni lni-coin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 30
            }, _this), "  Gi\xE1 :"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            "class": "list-specification",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              "class": "text-price",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "class": "text-line-through pr-5",
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at6 = productDetailItem.attributes) === null || _productDetailItem$at6 === void 0 ? void 0 : _productDetailItem$at6.OriginalPrice, "  "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "money-protection"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at7 = productDetailItem.attributes) === null || _productDetailItem$at7 === void 0 ? void 0 : _productDetailItem$at7.Price, " VN\u0110 "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 48
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at8 = productDetailItem.attributes.Custom_field) === null || _productDetailItem$at8 === void 0 ? void 0 : _productDetailItem$at8.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  "class": "lni lni-checkmark-circle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 21
                }, _this), " ", item.Title, " : ", item.Options]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "row w-full",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": " lg:w-1/2 p-hori-15",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                "class": "w-full btn btn-common  wow",
                "data-wow-duration": "1.3s",
                "data-wow-delay": "1.1s",
                children: "Mua ngay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": " lg:w-1/2 p-hori-15",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                "class": "w-full btn btn-common wow",
                "data-wow-duration": "1.3s",
                "data-wow-delay": "1.1s",
                children: "Th\xEAm v\xE0o gi\u1ECF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "row product-description pt-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_body_content__WEBPACK_IMPORTED_MODULE_6__.default, {
          data: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at9 = productDetailItem.attributes) === null || _productDetailItem$at9 === void 0 ? void 0 : _productDetailItem$at9.Description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_s(ProductDetailFull, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = ProductDetailFull;
/* harmony default export */ __webpack_exports__["default"] = (ProductDetailFull);

var _c;

$RefreshReg$(_c, "ProductDetailFull");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LWRldGFpbC1mdWxsLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxGdWxsIiwicHJvZHVjdFRodW1iIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZHVjdFNsdWciLCJxdWVyeSIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsImdldFByb2R1Y3REZXRhaWwiLCJwb3B1bGF0ZSIsIkltYWdlIiwiQ3VzdG9tX2ZpZWxkIiwiZGF0YSIsImVycm9yIiwicHJvZHVjdERldGFpbEl0ZW0iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJlIiwiYXR0cmlidXRlcyIsInNsdWciLCJUaXRsZSIsIlNob3J0RGVzY3JpcHRpb24iLCJPcmlnaW5hbFByaWNlIiwiUHJpY2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJPcHRpb25zIiwiRGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUssU0FBdEJBLGlCQUFzQixPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQXJCQyxZQUFxQixRQUFyQkEsWUFBcUI7QUFFbEQsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFdBQVcsR0FBSUYsTUFBTSxDQUFDRyxLQUFQLENBQWFDLE9BQWxDO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixXQUFaOztBQUVBLE1BQUcsQ0FBQ0EsV0FBSixFQUFpQjtBQUNmRixVQUFNLENBQUNPLE9BQVAsQ0FBZSxnQkFBZjtBQUNBLHdCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFDRDs7QUFFREYsU0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7O0FBWGtELDBCQVl4QkUsMERBQWdCLENBQUNOLFdBQUQsRUFBYztBQUN0RE8sWUFBUSxFQUFFO0FBQ1JBLGNBQVEsRUFBRSxHQURGO0FBRVJDLFdBQUssRUFBRTtBQUFFRCxnQkFBUSxFQUFFO0FBQVosT0FGQztBQUdSRSxrQkFBWSxFQUFHO0FBQUVGLGdCQUFRLEVBQUU7QUFBWjtBQUhQO0FBRDRDLEdBQWQsQ0FaUTtBQUFBLE1BWTFDRyxJQVowQyxxQkFZMUNBLElBWjBDO0FBQUEsTUFZcENDLEtBWm9DLHFCQVlwQ0EsS0Fab0M7O0FBb0JsRCxNQUFJQSxLQUFKLEVBQVcsT0FBTyx3QkFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU8sWUFBUDtBQUVYUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWVEsaUJBQVo7O0FBRUEsTUFBRyxFQUFDRixJQUFELGFBQUNBLElBQUQsZUFBQ0EsSUFBSSxDQUFFQSxJQUFQLEtBQWVHLEtBQUssQ0FBQ0MsSUFBTixDQUFXSixJQUFJLENBQUNBLElBQWhCLEVBQXNCSyxNQUF0QixJQUFnQyxDQUFsRCxFQUFxRDtBQUNqRCx3QkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBQ0g7O0FBRUQsTUFBTUgsaUJBQWlCLEdBQUlGLElBQUksQ0FBQ0EsSUFBTCxDQUFVLENBQVYsQ0FBM0I7QUFFQSxzQkFFRTtBQUFTLE1BQUUsRUFBQyxnQkFBWjtBQUE2QixhQUFNLEVBQW5DO0FBQUEsMkJBQ0U7QUFBSyxlQUFNLFdBQVg7QUFBQSw4QkFDRTtBQUFLLGlCQUFNLEtBQVg7QUFBQSwrQkFDRTtBQUFLLG1CQUFNLFFBQVg7QUFBQSxpQ0FDRTtBQUFLLHFCQUFNLGtDQUFYO0FBQUEsbUNBQ0E7QUFBUSx1QkFBTSxlQUFkO0FBQThCLHFCQUFPLEVBQUUsaUJBQUNNLENBQUQsRUFBTztBQUFBOztBQUFDbEIsc0JBQU0sQ0FBQ08sT0FBUCwwQkFBaUNPLGlCQUFqQyxhQUFpQ0EsaUJBQWpDLGdEQUFpQ0EsaUJBQWlCLENBQUVLLFVBQXBELDBEQUFpQyxzQkFBK0JDLElBQWhFO0FBQXdFLGVBQXZIO0FBQ29CLGtCQUFJLDJCQUFvQk4saUJBQXBCLGFBQW9CQSxpQkFBcEIsaURBQW9CQSxpQkFBaUIsQ0FBRUssVUFBdkMsMkRBQW9CLHVCQUErQkMsSUFBbkQsQ0FEeEI7QUFFb0IsZ0JBQUUsa0JBRnRCO0FBQUEscUNBR0M7QUFBRyx5QkFBTSxlQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBYUk7QUFBSyxpQkFBTSxvQkFBWDtBQUFBLGdDQUVBO0FBQUssbUJBQU0sOENBQVg7QUFBMEQsNEJBQWUsTUFBekU7QUFBQSxpQ0FDRTtBQUFLLHFCQUFNLE9BQVg7QUFBQSxtQ0FDQSw4REFBQywyQ0FBRDtBQUFhLG1CQUFLLEVBQUVOLGlCQUFGLGFBQUVBLGlCQUFGLGlEQUFFQSxpQkFBaUIsQ0FBRUssVUFBckIsMkRBQUUsdUJBQStCVCxLQUFuRDtBQUEwRCx3QkFBVSxFQUFFLDZCQUF0RTtBQUFxRyxtQkFBSyxFQUFFO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxlQU9BO0FBQUssbUJBQU0sb0RBQVg7QUFBZ0UsNEJBQWUsTUFBL0U7QUFBQSxrQ0FFQTtBQUFJLHFCQUFNLDRCQUFWO0FBQXVDLDhCQUFlLE1BQXREO0FBQUEsbUNBQ0k7QUFBQSw4QkFBS0ksaUJBQUwsYUFBS0EsaUJBQUwsaURBQUtBLGlCQUFpQixDQUFFSyxVQUF4QiwyREFBSyx1QkFBK0JFLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFLRTtBQUFHLHFCQUFNLFlBQVQ7QUFBQSxzQkFDSVAsaUJBREosYUFDSUEsaUJBREosaURBQ0lBLGlCQUFpQixDQUFFSyxVQUR2QiwyREFDSSx1QkFBK0JHO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFRRTtBQUFJLHFCQUFNLEVBQVY7QUFBQSw0Q0FBaUI7QUFBRyx1QkFBTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQVNFO0FBQUkscUJBQU0sb0JBQVY7QUFBQSxvQ0FDRTtBQUFJLHVCQUFNLFlBQVY7QUFBQSxzQ0FDQTtBQUFNLHlCQUFNLHdCQUFaO0FBQUEsZ0NBQXdDUixpQkFBeEMsYUFBd0NBLGlCQUF4QyxpREFBd0NBLGlCQUFpQixDQUFFSyxVQUEzRCwyREFBd0MsdUJBQStCSSxhQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsZUFFQTtBQUFHLHlCQUFNO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGQSxvQkFFaUM7QUFBQSxnQ0FBS1QsaUJBQUwsYUFBS0EsaUJBQUwsaURBQUtBLGlCQUFpQixDQUFFSyxVQUF4QiwyREFBSyx1QkFBK0JLLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBS0lWLGlCQUxKLGFBS0lBLGlCQUxKLGlEQUtJQSxpQkFBaUIsQ0FBRUssVUFBbkIsQ0FBOEJSLFlBTGxDLDJEQUtJLHVCQUE0Q2MsR0FBNUMsQ0FBZ0QsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsa0NBQ2hEO0FBQUEsd0NBQUk7QUFBRywyQkFBTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQUosT0FBOENELElBQUksQ0FBQ0wsS0FBbkQsU0FBNkRLLElBQUksQ0FBQ0UsT0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURnRDtBQUFBLGFBQWhELENBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBbUJFO0FBQUsscUJBQU0sWUFBWDtBQUFBLG9DQUNFO0FBQUssdUJBQU0scUJBQVg7QUFBQSxxQ0FDRTtBQUFHLG9CQUFJLEVBQUMsR0FBUjtBQUFZLHlCQUFNLDRCQUFsQjtBQUErQyxxQ0FBa0IsTUFBakU7QUFBd0Usa0NBQWUsTUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0U7QUFBSyx1QkFBTSxxQkFBWDtBQUFBLHFDQUNFO0FBQUcsb0JBQUksRUFBQyxHQUFSO0FBQVkseUJBQU0sMkJBQWxCO0FBQThDLHFDQUFrQixNQUFoRTtBQUF1RSxrQ0FBZSxNQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkosZUF1REU7QUFBSyxpQkFBTSwrQkFBWDtBQUFBLCtCQUNRLDhEQUFDLDBEQUFEO0FBQW9CLGNBQUksRUFBRWQsaUJBQUYsYUFBRUEsaUJBQUYsaURBQUVBLGlCQUFpQixDQUFFSyxVQUFyQiwyREFBRSx1QkFBK0JVO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQWdFRCxDQWhHRDs7R0FBTS9CLGlCO1VBRVdHLGtEOzs7S0FGWEgsaUI7QUFrR04sK0RBQWVBLGlCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuNWY2MDcwZWZmNzUwNjYyYTRjYjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3REZXRhaWwsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFByb2R1Y3RCb2R5Q29udGVudCBmcm9tIFwiLi9wcm9kdWN0LWJvZHktY29udGVudFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdERldGFpbEZ1bGwgPSAgICh7IHByb2R1Y3RUaHVtYiAgfSkgID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcHJvZHVjdFNsdWcgPSAgcm91dGVyLnF1ZXJ5LnByb2R1Y3Q7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdFNsdWcpO1xyXG5cclxuICBpZighcHJvZHVjdFNsdWcpIHtcclxuICAgIHJvdXRlci5yZXBsYWNlKFwiL3BhZ2VzL2NhdGFsb2dcIik7XHJcbiAgICByZXR1cm4gKDxoMz5FbXB0eSAgIDwvaDM+KVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coXCJsb2FkIHByb2R1Y3QgZGV0YWlsIHN3clwiKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSAgIGdldFByb2R1Y3REZXRhaWwocHJvZHVjdFNsdWcsIHtcclxuICAgIHBvcHVsYXRlOiB7XHJcbiAgICAgIHBvcHVsYXRlOiBcIipcIiAsXHJcbiAgICAgIEltYWdlOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxyXG4gICAgICBDdXN0b21fZmllbGQgOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuICBpZiAoIWRhdGEpIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcclxuXHJcbiAgY29uc29sZS5sb2coXCJsb2FkIFByb2R1Y3REZXRhaWxGdWxsXCIpO1xyXG4gIGNvbnNvbGUubG9nKHByb2R1Y3REZXRhaWxJdGVtKTtcclxuXHJcbiAgaWYoIWRhdGE/LmRhdGEgfHwgQXJyYXkuZnJvbShkYXRhLmRhdGEpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiAoPGgzPkVtcHR5PC9oMz4pXHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9kdWN0RGV0YWlsSXRlbSA9ICBkYXRhLmRhdGFbMF07XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8c2VjdGlvbiBpZD1cImRldGFpbC1zZWN0aW9uXCIgY2xhc3M9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGUtaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCIgb25DbGljaz17KGUpID0+IHtyb3V0ZXIucmVwbGFjZShgL3BhZ2VzL2NhdGFsb2cjJHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wYWdlcy9jYXRhbG9nIyR7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nYH0+XHJcbiAgICAgICAgICAgICA8aSBjbGFzcz1cImxuaSBsbmktY2xvc2VcIj4gPC9pPiBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzp3LTEvMiB3b3cgZmFkZUluUmlnaHQgcHJvZHVjdC1kZXRhaWwtbGVmdFwiIGRhdGEtd293LWRlbGF5PVwiMC4zc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW9cIj5cclxuICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uSW1hZ2V9IGltYWdlQ2xhc3M9e1wicHJvZHVjdC1pbWFnZS1ob3Jpem9udGFsLTJ4XCJ9IHN0eWxlPXtcImhlaWdodDogMjUwcHhcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzp3LTEvMiB3b3cgZmFkZUluTGVmdCBtbC0xMCBwcm9kdWN0LWRldGFpbC1yaWdodFwiIGRhdGEtd293LWRlbGF5PVwiMC4zc1wiPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxoMSBjbGFzcz1cInNlY3Rpb24tdGl0bGUgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcbiAgICAgICAgICAgICAgPGI+IHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uVGl0bGV9PC9iPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWRlc2NcIj4gXHJcbiAgICAgICAgICAgICAgeyBwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uU2hvcnREZXNjcmlwdGlvbiB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiXCI+ICAgIDxpIGNsYXNzPVwibG5pIGxuaS1jb2luXCI+PC9pPiAgR2nDoSA6PC9oMz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1zcGVjaWZpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGV4dC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1saW5lLXRocm91Z2ggcHItNVwiPiB7IHByb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5PcmlnaW5hbFByaWNlfSAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibW9uZXktcHJvdGVjdGlvblwiPjwvaT4gPGI+IHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uUHJpY2V9IFZOxJAgPC9iPlxyXG4gICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7IHByb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzLkN1c3RvbV9maWVsZD8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwibG5pIGxuaS1jaGVja21hcmstY2lyY2xlXCI+PC9pPiB7aXRlbS5UaXRsZX0gOiB7aXRlbS5PcHRpb25zfTwvbGk+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBsZzp3LTEvMiBwLWhvcmktMTVcIiA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidy1mdWxsIGJ0biBidG4tY29tbW9uICB3b3dcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjEuMXNcIj5cclxuICAgICAgICAgICAgICAgICAgTXVhIG5nYXlcclxuICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGxnOnctMS8yIHAtaG9yaS0xNVwiID5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ3LWZ1bGwgYnRuIGJ0bi1jb21tb24gd293XCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIxLjFzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRow6ptIHbDoG8gZ2nhu49cclxuICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwcm9kdWN0LWRlc2NyaXB0aW9uIHB0LTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEJvZHlDb250ZW50IGRhdGE9e3Byb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5EZXNjcmlwdGlvbiB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxGdWxsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=