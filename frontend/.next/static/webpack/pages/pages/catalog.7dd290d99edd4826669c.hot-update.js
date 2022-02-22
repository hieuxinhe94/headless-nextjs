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

  var _productDetailItem$at2, _productDetailItem$at3, _productDetailItem$at5, _productDetailItem$at6, _productDetailItem$at7, _productDetailItem$at8, _productDetailItem$at9, _productDetailItem$at10, _productDetailItem$at11, _productDetailItem$at12, _productDetailItem$at13;

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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              "class": "section-title",
              onClick: function onClick(e) {
                var _productDetailItem$at;

                router.replace("/pages/catalog#".concat(productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at = productDetailItem.attributes) === null || _productDetailItem$at === void 0 ? void 0 : _productDetailItem$at.slug));
              },
              href: "/pages/catalog#".concat(productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at2 = productDetailItem.attributes) === null || _productDetailItem$at2 === void 0 ? void 0 : _productDetailItem$at2.slug),
              as: "/pages/catalog#".concat(productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at3 = productDetailItem.attributes) === null || _productDetailItem$at3 === void 0 ? void 0 : _productDetailItem$at3.slug),
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
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              "class": "section-title",
              onClick: function onClick(e) {
                var _productDetailItem$at4;

                router.replace("/pages/catalog#".concat(productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at4 = productDetailItem.attributes) === null || _productDetailItem$at4 === void 0 ? void 0 : _productDetailItem$at4.slug));
              },
              href: "/pages/catalog#".concat(productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at5 = productDetailItem.attributes) === null || _productDetailItem$at5 === void 0 ? void 0 : _productDetailItem$at5.slug),
              as: "/pages/catalog#".concat(productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at6 = productDetailItem.attributes) === null || _productDetailItem$at6 === void 0 ? void 0 : _productDetailItem$at6.slug),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "lni lni-close",
                children: " "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 14
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
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
              image: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at7 = productDetailItem.attributes) === null || _productDetailItem$at7 === void 0 ? void 0 : _productDetailItem$at7.Image,
              imageClass: "product-image-horizontal-2x",
              style: "height: 250px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "lg:w-1/2 wow fadeInLeft ml-10 product-detail-right",
          "data-wow-delay": "0.3s",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            "class": "section-title wow fadeInUp",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at8 = productDetailItem.attributes) === null || _productDetailItem$at8 === void 0 ? void 0 : _productDetailItem$at8.Title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            "class": "intro-desc",
            children: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at9 = productDetailItem.attributes) === null || _productDetailItem$at9 === void 0 ? void 0 : _productDetailItem$at9.ShortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            "class": "",
            children: ["    ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              "class": "lni lni-coin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 30
            }, _this), "  Gi\xE1 :"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            "class": "list-specification",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              "class": "text-price",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "class": "text-line-through pr-5",
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at10 = productDetailItem.attributes) === null || _productDetailItem$at10 === void 0 ? void 0 : _productDetailItem$at10.OriginalPrice, "  "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "money-protection"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at11 = productDetailItem.attributes) === null || _productDetailItem$at11 === void 0 ? void 0 : _productDetailItem$at11.Price, " VN\u0110 "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 48
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this), productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at12 = productDetailItem.attributes.Custom_field) === null || _productDetailItem$at12 === void 0 ? void 0 : _productDetailItem$at12.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  "class": "lni lni-checkmark-circle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 21
                }, _this), " ", item.Title, " : ", item.Options]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
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
                lineNumber: 88,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
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
                lineNumber: 94,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "row product-description pt-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_body_content__WEBPACK_IMPORTED_MODULE_6__.default, {
          data: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at13 = productDetailItem.attributes) === null || _productDetailItem$at13 === void 0 ? void 0 : _productDetailItem$at13.Description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LWRldGFpbC1mdWxsLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxGdWxsIiwicHJvZHVjdFRodW1iIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZHVjdFNsdWciLCJxdWVyeSIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsImdldFByb2R1Y3REZXRhaWwiLCJwb3B1bGF0ZSIsIkltYWdlIiwiQ3VzdG9tX2ZpZWxkIiwiZGF0YSIsImVycm9yIiwicHJvZHVjdERldGFpbEl0ZW0iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJlIiwiYXR0cmlidXRlcyIsInNsdWciLCJUaXRsZSIsIlNob3J0RGVzY3JpcHRpb24iLCJPcmlnaW5hbFByaWNlIiwiUHJpY2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJPcHRpb25zIiwiRGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUssU0FBdEJBLGlCQUFzQixPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQXJCQyxZQUFxQixRQUFyQkEsWUFBcUI7QUFFbEQsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFdBQVcsR0FBSUYsTUFBTSxDQUFDRyxLQUFQLENBQWFDLE9BQWxDO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixXQUFaOztBQUVBLE1BQUcsQ0FBQ0EsV0FBSixFQUFpQjtBQUNmRixVQUFNLENBQUNPLE9BQVAsQ0FBZSxnQkFBZjtBQUNBLHdCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFDRDs7QUFFREYsU0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7O0FBWGtELDBCQVl4QkUsMERBQWdCLENBQUNOLFdBQUQsRUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCSixlQTJERTtBQUFLLGlCQUFNLCtCQUFYO0FBQUEsK0JBQ1EsOERBQUMsMERBQUQ7QUFBb0IsY0FBSSxFQUFFZCxpQkFBRixhQUFFQSxpQkFBRixrREFBRUEsaUJBQWlCLENBQUVLLFVBQXJCLDREQUFFLHdCQUErQlU7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBb0VELENBcEdEOztHQUFNL0IsaUI7VUFFV0csa0Q7OztLQUZYSCxpQjtBQXNHTiwrREFBZUEsaUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvY2F0YWxvZy43ZGQyOTBkOTllZGQ0ODI2NjY5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZFByb2R1Y3RUaHVtYiwgZ2V0UHJvZHVjdERldGFpbCwgZ2V0UHJvZHVjdFRodW1iIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUHJvZHVjdEJvZHlDb250ZW50IGZyb20gXCIuL3Byb2R1Y3QtYm9keS1jb250ZW50XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlsRnVsbCA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwcm9kdWN0U2x1ZyA9ICByb3V0ZXIucXVlcnkucHJvZHVjdDtcclxuICBjb25zb2xlLmxvZyhwcm9kdWN0U2x1Zyk7XHJcblxyXG4gIGlmKCFwcm9kdWN0U2x1Zykge1xyXG4gICAgcm91dGVyLnJlcGxhY2UoXCIvcGFnZXMvY2F0YWxvZ1wiKTtcclxuICAgIHJldHVybiAoPGgzPkVtcHR5ICAgPC9oMz4pXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhcImxvYWQgcHJvZHVjdCBkZXRhaWwgc3dyXCIpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9ICAgZ2V0UHJvZHVjdERldGFpbChwcm9kdWN0U2x1Zywge1xyXG4gICAgcG9wdWxhdGU6IHtcclxuICAgICAgcG9wdWxhdGU6IFwiKlwiICxcclxuICAgICAgSW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICAgIEN1c3RvbV9maWVsZCA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkLlwiO1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImxvYWQgUHJvZHVjdERldGFpbEZ1bGxcIik7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdERldGFpbEl0ZW0pO1xyXG5cclxuICBpZighZGF0YT8uZGF0YSB8fCBBcnJheS5mcm9tKGRhdGEuZGF0YSkubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuICg8aDM+RW1wdHk8L2gzPilcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2R1Y3REZXRhaWxJdGVtID0gIGRhdGEuZGF0YVswXTtcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxzZWN0aW9uIGlkPVwiZGV0YWlsLXNlY3Rpb25cIiBjbGFzcz1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZS1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIiBvbkNsaWNrPXsoZSkgPT4ge3JvdXRlci5yZXBsYWNlKGAvcGFnZXMvY2F0YWxvZyMke3Byb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWApfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3BhZ2VzL2NhdGFsb2cjJHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3BhZ2VzL2NhdGFsb2cjJHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gfT5cclxuICAgICAgICAgICAgIDxpIGNsYXNzPVwibG5pIGxuaS1jbG9zZVwiPiA8L2k+IFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCIgb25DbGljaz17KGUpID0+IHtyb3V0ZXIucmVwbGFjZShgL3BhZ2VzL2NhdGFsb2cjJHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wYWdlcy9jYXRhbG9nIyR7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nIyR7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICA8aSBjbGFzcz1cImxuaSBsbmktY2xvc2VcIj4gPC9pPiBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGc6dy0xLzIgd293IGZhZGVJblJpZ2h0IHByb2R1Y3QtZGV0YWlsLWxlZnRcIiBkYXRhLXdvdy1kZWxheT1cIjAuM3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvXCI+XHJcbiAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LkltYWdlfSBpbWFnZUNsYXNzPXtcInByb2R1Y3QtaW1hZ2UtaG9yaXpvbnRhbC0yeFwifSBzdHlsZT17XCJoZWlnaHQ6IDI1MHB4XCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGc6dy0xLzIgd293IGZhZGVJbkxlZnQgbWwtMTAgcHJvZHVjdC1kZXRhaWwtcmlnaHRcIiBkYXRhLXdvdy1kZWxheT1cIjAuM3NcIj5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8aDEgY2xhc3M9XCJzZWN0aW9uLXRpdGxlIHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiPlxyXG4gICAgICAgICAgICAgIDxiPiB7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LlRpdGxlfTwvYj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpbnRyby1kZXNjXCI+IFxyXG4gICAgICAgICAgICAgIHsgcHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LlNob3J0RGVzY3JpcHRpb24gfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cIlwiPiAgICA8aSBjbGFzcz1cImxuaSBsbmktY29pblwiPjwvaT4gIEdpw6EgOjwvaDM+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3Qtc3BlY2lmaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRleHQtcHJpY2VcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbGluZS10aHJvdWdoIHByLTVcIj4geyBwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uT3JpZ2luYWxQcmljZX0gIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1vbmV5LXByb3RlY3Rpb25cIj48L2k+IDxiPiB7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LlByaWNlfSBWTsSQIDwvYj5cclxuICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgeyBwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcy5DdXN0b21fZmllbGQ/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzcz1cImxuaSBsbmktY2hlY2ttYXJrLWNpcmNsZVwiPjwvaT4ge2l0ZW0uVGl0bGV9IDoge2l0ZW0uT3B0aW9uc308L2xpPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgbGc6dy0xLzIgcC1ob3JpLTE1XCIgPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInctZnVsbCBidG4gYnRuLWNvbW1vbiAgd293XCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIxLjFzXCI+XHJcbiAgICAgICAgICAgICAgICAgIE11YSBuZ2F5XHJcbiAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBsZzp3LTEvMiBwLWhvcmktMTVcIiA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidy1mdWxsIGJ0biBidG4tY29tbW9uIHdvd1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMS4zc1wiIGRhdGEtd293LWRlbGF5PVwiMS4xc1wiPlxyXG4gICAgICAgICAgICAgICAgICBUaMOqbSB2w6BvIGdp4buPXHJcbiAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHJvZHVjdC1kZXNjcmlwdGlvbiBwdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RCb2R5Q29udGVudCBkYXRhPXtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uRGVzY3JpcHRpb24gfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsRnVsbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9