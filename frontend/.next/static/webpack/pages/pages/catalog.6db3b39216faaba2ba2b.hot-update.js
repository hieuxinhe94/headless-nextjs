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

  var _productDetailItem$at2, _productDetailItem$at3, _productDetailItem$at4, _productDetailItem$at5, _productDetailItem$at6, _productDetailItem$at7, _productDetailItem$at8;

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
              href: "/pages/catalog",
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
              image: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at2 = productDetailItem.attributes) === null || _productDetailItem$at2 === void 0 ? void 0 : _productDetailItem$at2.Image,
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
              children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at3 = productDetailItem.attributes) === null || _productDetailItem$at3 === void 0 ? void 0 : _productDetailItem$at3.Title]
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
            children: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at4 = productDetailItem.attributes) === null || _productDetailItem$at4 === void 0 ? void 0 : _productDetailItem$at4.ShortDescription
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
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at5 = productDetailItem.attributes) === null || _productDetailItem$at5 === void 0 ? void 0 : _productDetailItem$at5.OriginalPrice, "  "]
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
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at6 = productDetailItem.attributes) === null || _productDetailItem$at6 === void 0 ? void 0 : _productDetailItem$at6.Price, " VN\u0110 "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 48
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at7 = productDetailItem.attributes.Custom_field) === null || _productDetailItem$at7 === void 0 ? void 0 : _productDetailItem$at7.map(function (item, index) {
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
          data: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at8 = productDetailItem.attributes) === null || _productDetailItem$at8 === void 0 ? void 0 : _productDetailItem$at8.Description
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LWRldGFpbC1mdWxsLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxGdWxsIiwicHJvZHVjdFRodW1iIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZHVjdFNsdWciLCJxdWVyeSIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsImdldFByb2R1Y3REZXRhaWwiLCJwb3B1bGF0ZSIsIkltYWdlIiwiQ3VzdG9tX2ZpZWxkIiwiZGF0YSIsImVycm9yIiwicHJvZHVjdERldGFpbEl0ZW0iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJlIiwiYXR0cmlidXRlcyIsInNsdWciLCJUaXRsZSIsIlNob3J0RGVzY3JpcHRpb24iLCJPcmlnaW5hbFByaWNlIiwiUHJpY2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJPcHRpb25zIiwiRGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUssU0FBdEJBLGlCQUFzQixPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQXJCQyxZQUFxQixRQUFyQkEsWUFBcUI7QUFFbEQsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFdBQVcsR0FBSUYsTUFBTSxDQUFDRyxLQUFQLENBQWFDLE9BQWxDO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixXQUFaOztBQUVBLE1BQUcsQ0FBQ0EsV0FBSixFQUFpQjtBQUNmRixVQUFNLENBQUNPLE9BQVAsQ0FBZSxnQkFBZjtBQUNBLHdCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFDRDs7QUFFREYsU0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7O0FBWGtELDBCQVl4QkUsMERBQWdCLENBQUNOLFdBQUQsRUFB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QixNQUFqRTtBQUF3RSxrQ0FBZSxNQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFPRTtBQUFLLHVCQUFNLHFCQUFYO0FBQUEscUNBQ0U7QUFBRyxvQkFBSSxFQUFDLEdBQVI7QUFBWSx5QkFBTSwyQkFBbEI7QUFBOEMscUNBQWtCLE1BQWhFO0FBQXVFLGtDQUFlLE1BQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSixlQXVERTtBQUFLLGlCQUFNLCtCQUFYO0FBQUEsK0JBQ1EsOERBQUMsMERBQUQ7QUFBb0IsY0FBSSxFQUFFZCxpQkFBRixhQUFFQSxpQkFBRixpREFBRUEsaUJBQWlCLENBQUVLLFVBQXJCLDJEQUFFLHVCQUErQlU7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBZ0VELENBaEdEOztHQUFNL0IsaUI7VUFFV0csa0Q7OztLQUZYSCxpQjtBQWtHTiwrREFBZUEsaUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvY2F0YWxvZy42ZGIzYjM5MjE2ZmFhYmEyYmEyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZFByb2R1Y3RUaHVtYiwgZ2V0UHJvZHVjdERldGFpbCwgZ2V0UHJvZHVjdFRodW1iIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUHJvZHVjdEJvZHlDb250ZW50IGZyb20gXCIuL3Byb2R1Y3QtYm9keS1jb250ZW50XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlsRnVsbCA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwcm9kdWN0U2x1ZyA9ICByb3V0ZXIucXVlcnkucHJvZHVjdDtcclxuICBjb25zb2xlLmxvZyhwcm9kdWN0U2x1Zyk7XHJcblxyXG4gIGlmKCFwcm9kdWN0U2x1Zykge1xyXG4gICAgcm91dGVyLnJlcGxhY2UoXCIvcGFnZXMvY2F0YWxvZ1wiKTtcclxuICAgIHJldHVybiAoPGgzPkVtcHR5ICAgPC9oMz4pXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhcImxvYWQgcHJvZHVjdCBkZXRhaWwgc3dyXCIpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9ICAgZ2V0UHJvZHVjdERldGFpbChwcm9kdWN0U2x1Zywge1xyXG4gICAgcG9wdWxhdGU6IHtcclxuICAgICAgcG9wdWxhdGU6IFwiKlwiICxcclxuICAgICAgSW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICAgIEN1c3RvbV9maWVsZCA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkLlwiO1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImxvYWQgUHJvZHVjdERldGFpbEZ1bGxcIik7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdERldGFpbEl0ZW0pO1xyXG5cclxuICBpZighZGF0YT8uZGF0YSB8fCBBcnJheS5mcm9tKGRhdGEuZGF0YSkubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuICg8aDM+RW1wdHk8L2gzPilcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2R1Y3REZXRhaWxJdGVtID0gIGRhdGEuZGF0YVswXTtcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxzZWN0aW9uIGlkPVwiZGV0YWlsLXNlY3Rpb25cIiBjbGFzcz1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZS1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIiBvbkNsaWNrPXsoZSkgPT4ge3JvdXRlci5yZXBsYWNlKGAvcGFnZXMvY2F0YWxvZyMke3Byb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWApfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3BhZ2VzL2NhdGFsb2dgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3BhZ2VzL2NhdGFsb2dgfT5cclxuICAgICAgICAgICAgIDxpIGNsYXNzPVwibG5pIGxuaS1jbG9zZVwiPiA8L2k+IFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwcm9kdWN0LWRldGFpbFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxnOnctMS8yIHdvdyBmYWRlSW5SaWdodCBwcm9kdWN0LWRldGFpbC1sZWZ0XCIgZGF0YS13b3ctZGVsYXk9XCIwLjNzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlb1wiPlxyXG4gICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e3Byb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5JbWFnZX0gaW1hZ2VDbGFzcz17XCJwcm9kdWN0LWltYWdlLWhvcml6b250YWwtMnhcIn0gc3R5bGU9e1wiaGVpZ2h0OiAyNTBweFwifSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxnOnctMS8yIHdvdyBmYWRlSW5MZWZ0IG1sLTEwIHByb2R1Y3QtZGV0YWlsLXJpZ2h0XCIgZGF0YS13b3ctZGVsYXk9XCIwLjNzXCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPGgxIGNsYXNzPVwic2VjdGlvbi10aXRsZSB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICAgICAgICA8Yj4ge3Byb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5UaXRsZX08L2I+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaW50cm8tZGVzY1wiPiBcclxuICAgICAgICAgICAgICB7IHByb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5TaG9ydERlc2NyaXB0aW9uIH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJcIj4gICAgPGkgY2xhc3M9XCJsbmkgbG5pLWNvaW5cIj48L2k+ICBHacOhIDo8L2gzPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LXNwZWNpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0ZXh0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWxpbmUtdGhyb3VnaCBwci01XCI+IHsgcHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/Lk9yaWdpbmFsUHJpY2V9ICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtb25leS1wcm90ZWN0aW9uXCI+PC9pPiA8Yj4ge3Byb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5QcmljZX0gVk7EkCA8L2I+XHJcbiAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHsgcHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXMuQ3VzdG9tX2ZpZWxkPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJsbmkgbG5pLWNoZWNrbWFyay1jaXJjbGVcIj48L2k+IHtpdGVtLlRpdGxlfSA6IHtpdGVtLk9wdGlvbnN9PC9saT5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGxnOnctMS8yIHAtaG9yaS0xNVwiID5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ3LWZ1bGwgYnRuIGJ0bi1jb21tb24gIHdvd1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMS4zc1wiIGRhdGEtd293LWRlbGF5PVwiMS4xc1wiPlxyXG4gICAgICAgICAgICAgICAgICBNdWEgbmdheVxyXG4gICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgbGc6dy0xLzIgcC1ob3JpLTE1XCIgPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInctZnVsbCBidG4gYnRuLWNvbW1vbiB3b3dcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjEuMXNcIj5cclxuICAgICAgICAgICAgICAgICAgVGjDqm0gdsOgbyBnaeG7j1xyXG4gICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHByb2R1Y3QtZGVzY3JpcHRpb24gcHQtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0Qm9keUNvbnRlbnQgZGF0YT17cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LkRlc2NyaXB0aW9uIH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbEZ1bGxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==