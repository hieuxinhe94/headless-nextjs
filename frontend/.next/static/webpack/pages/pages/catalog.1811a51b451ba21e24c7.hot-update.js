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

  var _productDetailItem$at2, _productDetailItem$at3, _productDetailItem$at4, _productDetailItem$at5, _productDetailItem$at6, _productDetailItem$at7, _productDetailItem$at8, _productDetailItem$at9, _productDetailItem$at10;

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
              image: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at4 = productDetailItem.attributes) === null || _productDetailItem$at4 === void 0 ? void 0 : _productDetailItem$at4.Image,
              imageClass: "product-image-horizontal-2x",
              style: "height: 250px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "lg:w-1/2 wow fadeInLeft ml-10 product-detail-right",
          "data-wow-delay": "0.3s",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            "class": "section-title wow fadeInUp",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at5 = productDetailItem.attributes) === null || _productDetailItem$at5 === void 0 ? void 0 : _productDetailItem$at5.Title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            "class": "intro-desc",
            children: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at6 = productDetailItem.attributes) === null || _productDetailItem$at6 === void 0 ? void 0 : _productDetailItem$at6.ShortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            "class": "",
            children: ["    ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              "class": "lni lni-coin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 30
            }, _this), "  Gi\xE1 :"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            "class": "list-specification",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              "class": "text-price",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "class": "text-line-through pr-5",
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at7 = productDetailItem.attributes) === null || _productDetailItem$at7 === void 0 ? void 0 : _productDetailItem$at7.OriginalPrice, "  "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "money-protection"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at8 = productDetailItem.attributes) === null || _productDetailItem$at8 === void 0 ? void 0 : _productDetailItem$at8.Price, " VN\u0110 "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 48
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at9 = productDetailItem.attributes.Custom_field) === null || _productDetailItem$at9 === void 0 ? void 0 : _productDetailItem$at9.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  "class": "lni lni-checkmark-circle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, _this), " ", item.Title, " : ", item.Options]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
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
                lineNumber: 83,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
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
                lineNumber: 89,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "row product-description pt-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_body_content__WEBPACK_IMPORTED_MODULE_6__.default, {
          data: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at10 = productDetailItem.attributes) === null || _productDetailItem$at10 === void 0 ? void 0 : _productDetailItem$at10.Description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-thumb.js",
    _this = undefined;





var ProductThumb = function ProductThumb(_ref) {
  var _productThumbItem$att, _productThumbItem$att2, _productThumbItem$att3, _productThumbItem$att4, _productThumbItem$att5, _productThumbItem$att6, _productThumbItem$att7;

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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
      replace: true,
      href: "/pages/catalog?product=".concat(productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att2 = productThumbItem.attributes) === null || _productThumbItem$att2 === void 0 ? void 0 : _productThumbItem$att2.slug),
      as: "/pages/catalog?product=".concat(productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att3 = productThumbItem.attributes) === null || _productThumbItem$att3 === void 0 ? void 0 : _productThumbItem$att3.slug),
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
              image: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att4 = productThumbItem.attributes) === null || _productThumbItem$att4 === void 0 ? void 0 : _productThumbItem$att4.Image,
              imageClass: "product-image-horizontal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            "class": "text-price",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: [(_productThumbItem$att5 = productThumbItem.attributes) === null || _productThumbItem$att5 === void 0 ? void 0 : _productThumbItem$att5.Price, " VN\u0110"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 38
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            "class": "text-title",
            children: (_productThumbItem$att6 = productThumbItem.attributes) === null || _productThumbItem$att6 === void 0 ? void 0 : _productThumbItem$att6.Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            children: (_productThumbItem$att7 = productThumbItem.attributes) === null || _productThumbItem$att7 === void 0 ? void 0 : _productThumbItem$att7.ShortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
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


/***/ }),

/***/ "./pages/pages/catalog.js":
/*!********************************!*\
  !*** ./pages/pages/catalog.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_commerce_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/commerce/Carousel */ "./components/commerce/Carousel.js");
/* harmony import */ var _components_commerce_commerce_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/commerce/commerce-hero */ "./components/commerce/commerce-hero.js");
/* harmony import */ var _components_commerce_product_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/commerce/product-grid */ "./components/commerce/product-grid.js");
/* harmony import */ var _components_commerce_Product_grid_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/commerce/Product-grid-2 */ "./components/commerce/Product-grid-2.js");
/* harmony import */ var _components_commerce_Product_grid_3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/commerce/Product-grid-3 */ "./components/commerce/Product-grid-3.js");
/* harmony import */ var _components_layout_commerce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout-commerce */ "./components/layout-commerce.js");
/* harmony import */ var _components_page_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/page-seo */ "./components/page-seo.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_commerce_product_detail_full__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/commerce/product-detail-full */ "./components/commerce/product-detail-full.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\pages\\pages\\catalog.js",
    _this = undefined,
    _s = $RefreshSig$();












react_modal__WEBPACK_IMPORTED_MODULE_9___default().setAppElement("#__next");
var selectingProductItem = {};

var Home = function Home(_ref) {
  _s();

  var catalog = _ref.catalog,
      catalogpage = _ref.catalogpage,
      layoutInfo = _ref.layoutInfo;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_commerce__WEBPACK_IMPORTED_MODULE_7__.default, {
    categories: catalog,
    layout: layoutInfo,
    page: catalogpage,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_page_seo__WEBPACK_IMPORTED_MODULE_8__.default, {
      seo: catalogpage.attributes.seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_commerce_hero__WEBPACK_IMPORTED_MODULE_3__.default, {
      hero: catalogpage.attributes.Hero,
      page: catalogpage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "margin-box-1x"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_product_grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      categories: catalog,
      featureProductWrap: catalogpage.attributes.FeatureProductWrap
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "margin-box-1x"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "margin-box-1x"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this), catalogpage.attributes.SaleOffProductWrap && Array.from(catalogpage.attributes.SaleOffProductWrap).length != 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_Product_grid_3__WEBPACK_IMPORTED_MODULE_6__.default, {
        name: "SaleOffProductWrap",
        categories: catalog,
        featureProductWrap: catalogpage.attributes.SaleOffProductWrap,
        colClass: "w-full lg:w-1/3"
      }, "SaleOffProductWrap", false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 205
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 235
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 240
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), catalogpage.attributes.MainProductWrap && Array.from(catalogpage.attributes.MainProductWrap).length != 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_Product_grid_2__WEBPACK_IMPORTED_MODULE_5__.default, {
        name: "MainProductWrap",
        categories: catalog,
        featureProductWrap: catalogpage.attributes.MainProductWrap,
        colClass: "w-full lg:w-1/3"
      }, "MainProductWrap", false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 197
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 226
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 231
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), catalogpage.attributes.RecommendProductWrap && Array.from(catalogpage.attributes.RecommendProductWrap).length != 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_Product_grid_2__WEBPACK_IMPORTED_MODULE_5__.default, {
        name: "RecommendProductWrap",
        categories: catalog,
        featureProductWrap: catalogpage.attributes.RecommendProductWrap,
        colClass: "w-full lg:w-1/3"
      }, "RecommendProductWrap", false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 212
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 241
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 246
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 12
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "margin-box-1x"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_9___default()), {
      isOpen: !!router.query.product,
      onRequestClose: function onRequestClose() {
        return router.replace("/pages/catalog");
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_product_detail_full__WEBPACK_IMPORTED_MODULE_11__.default, {
        productThumb: selectingProductItem
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(Home, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter];
});

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LWRldGFpbC1mdWxsLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtdGh1bWIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbEZ1bGwiLCJwcm9kdWN0VGh1bWIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9kdWN0U2x1ZyIsInF1ZXJ5IiwicHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiZ2V0UHJvZHVjdERldGFpbCIsInBvcHVsYXRlIiwiSW1hZ2UiLCJDdXN0b21fZmllbGQiLCJkYXRhIiwiZXJyb3IiLCJwcm9kdWN0RGV0YWlsSXRlbSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImUiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsIlRpdGxlIiwiU2hvcnREZXNjcmlwdGlvbiIsIk9yaWdpbmFsUHJpY2UiLCJQcmljZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIk9wdGlvbnMiLCJEZXNjcmlwdGlvbiIsIlByb2R1Y3RUaHVtYiIsIm9uU2VsZWN0ZWQiLCJhIiwic2VsZWN0aW5nUHJvZHVjdEl0ZW0iLCJnZXRQcm9kdWN0VGh1bWIiLCJpZCIsInByb2R1Y3RUaHVtYkl0ZW0iLCJNb2RhbCIsIkhvbWUiLCJjYXRhbG9nIiwiY2F0YWxvZ3BhZ2UiLCJsYXlvdXRJbmZvIiwic2VvIiwiSGVybyIsIkZlYXR1cmVQcm9kdWN0V3JhcCIsIlNhbGVPZmZQcm9kdWN0V3JhcCIsIk1haW5Qcm9kdWN0V3JhcCIsIlJlY29tbWVuZFByb2R1Y3RXcmFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFLLFNBQXRCQSxpQkFBc0IsT0FBd0I7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QURELGdCQUNxUiw2SUFyQjNSLGVBd0JJO0FBQUssZUFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkosZUF5QkksOERBQUMsb0RBQUQ7QUFBTyxZQUFNLEVBQUUsQ0FBQyxDQUFDL0MsTUFBTSxDQUFDRyxLQUFQLENBQWFDLE9BQTlCO0FBQXVDLG9CQUFjLEVBQUU7QUFBQSxlQUFNSixNQUFNLENBQUNPLE9BQVAsQ0FBZSxnQkFBZixDQUFOO0FBQUEsT0FBdkQ7QUFBQSw2QkFDRSw4REFBQyw4RUFBRDtBQUFtQixvQkFBWSxFQUFFMEI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0FsQ0Q7O0dBQU1LLEk7VUFFV3JDLG1EOzs7S0FGWHFDLEk7O0FBbUVOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuMTgxMWE1MWI0NTFiYTIxZTI0YzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3REZXRhaWwsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFByb2R1Y3RCb2R5Q29udGVudCBmcm9tIFwiLi9wcm9kdWN0LWJvZHktY29udGVudFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdERldGFpbEZ1bGwgPSAgICh7IHByb2R1Y3RUaHVtYiAgfSkgID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcHJvZHVjdFNsdWcgPSAgcm91dGVyLnF1ZXJ5LnByb2R1Y3Q7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdFNsdWcpO1xyXG5cclxuICBpZighcHJvZHVjdFNsdWcpIHtcclxuICAgIHJvdXRlci5yZXBsYWNlKFwiL3BhZ2VzL2NhdGFsb2dcIik7XHJcbiAgICByZXR1cm4gKDxoMz5FbXB0eSAgIDwvaDM+KVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coXCJsb2FkIHByb2R1Y3QgZGV0YWlsIHN3clwiKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSAgIGdldFByb2R1Y3REZXRhaWwocHJvZHVjdFNsdWcsIHtcclxuICAgIHBvcHVsYXRlOiB7XHJcbiAgICAgIHBvcHVsYXRlOiBcIipcIiAsXHJcbiAgICAgIEltYWdlOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxyXG4gICAgICBDdXN0b21fZmllbGQgOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuICBpZiAoIWRhdGEpIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcclxuXHJcbiAgY29uc29sZS5sb2coXCJsb2FkIFByb2R1Y3REZXRhaWxGdWxsXCIpO1xyXG4gIGNvbnNvbGUubG9nKHByb2R1Y3REZXRhaWxJdGVtKTtcclxuXHJcbiAgaWYoIWRhdGE/LmRhdGEgfHwgQXJyYXkuZnJvbShkYXRhLmRhdGEpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiAoPGgzPkVtcHR5PC9oMz4pXHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9kdWN0RGV0YWlsSXRlbSA9ICBkYXRhLmRhdGFbMF07XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8c2VjdGlvbiBpZD1cImRldGFpbC1zZWN0aW9uXCIgY2xhc3M9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGUtaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCIgb25DbGljaz17KGUpID0+IHtyb3V0ZXIucmVwbGFjZShgL3BhZ2VzL2NhdGFsb2cjJHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wYWdlcy9jYXRhbG9nIyR7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nIyR7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICA8aSBjbGFzcz1cImxuaSBsbmktY2xvc2VcIj4gPC9pPiBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzp3LTEvMiB3b3cgZmFkZUluUmlnaHQgcHJvZHVjdC1kZXRhaWwtbGVmdFwiIGRhdGEtd293LWRlbGF5PVwiMC4zc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW9cIj5cclxuICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uSW1hZ2V9IGltYWdlQ2xhc3M9e1wicHJvZHVjdC1pbWFnZS1ob3Jpem9udGFsLTJ4XCJ9IHN0eWxlPXtcImhlaWdodDogMjUwcHhcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzp3LTEvMiB3b3cgZmFkZUluTGVmdCBtbC0xMCBwcm9kdWN0LWRldGFpbC1yaWdodFwiIGRhdGEtd293LWRlbGF5PVwiMC4zc1wiPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxoMSBjbGFzcz1cInNlY3Rpb24tdGl0bGUgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcbiAgICAgICAgICAgICAgPGI+IHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uVGl0bGV9PC9iPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWRlc2NcIj4gXHJcbiAgICAgICAgICAgICAgeyBwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uU2hvcnREZXNjcmlwdGlvbiB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiXCI+ICAgIDxpIGNsYXNzPVwibG5pIGxuaS1jb2luXCI+PC9pPiAgR2nDoSA6PC9oMz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1zcGVjaWZpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGV4dC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1saW5lLXRocm91Z2ggcHItNVwiPiB7IHByb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5PcmlnaW5hbFByaWNlfSAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibW9uZXktcHJvdGVjdGlvblwiPjwvaT4gPGI+IHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uUHJpY2V9IFZOxJAgPC9iPlxyXG4gICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7IHByb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzLkN1c3RvbV9maWVsZD8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwibG5pIGxuaS1jaGVja21hcmstY2lyY2xlXCI+PC9pPiB7aXRlbS5UaXRsZX0gOiB7aXRlbS5PcHRpb25zfTwvbGk+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBsZzp3LTEvMiBwLWhvcmktMTVcIiA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidy1mdWxsIGJ0biBidG4tY29tbW9uICB3b3dcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjEuMXNcIj5cclxuICAgICAgICAgICAgICAgICAgTXVhIG5nYXlcclxuICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGxnOnctMS8yIHAtaG9yaS0xNVwiID5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ3LWZ1bGwgYnRuIGJ0bi1jb21tb24gd293XCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIxLjFzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRow6ptIHbDoG8gZ2nhu49cclxuICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwcm9kdWN0LWRlc2NyaXB0aW9uIHB0LTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEJvZHlDb250ZW50IGRhdGE9e3Byb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5EZXNjcmlwdGlvbiB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxGdWxsXHJcbiIsImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG4gXHJcbmNvbnN0IFByb2R1Y3RUaHVtYiA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwibG9hZCBwcm9kdWN0VGh1bWIgc3dyXCIpO1xyXG5cclxuICBjb25zdCBvblNlbGVjdGVkID0gKGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2V0IHNlbGVjdGluZ1Byb2R1Y3RJdGVtXCIpO1xyXG4gICAgc2VsZWN0aW5nUHJvZHVjdEl0ZW0gPSBhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gICBnZXRQcm9kdWN0VGh1bWIocHJvZHVjdFRodW1iLmlkLCB7XHJcbiAgICBwb3B1bGF0ZToge1xyXG4gICAgICBJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgICAgQ3VzdG9tX2ZpZWxkIDogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuIGNvbnN0IHByb2R1Y3RUaHVtYkl0ZW0gPSAgZGF0YS5kYXRhO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYga2V5PXtwcm9kdWN0VGh1bWJJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfT5cclxuICAgICAgPExpbmsga2V5PXtwcm9kdWN0VGh1bWJJdGVtPy5pZH0gcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcGFnZXMvY2F0YWxvZz9wcm9kdWN0PSR7cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3RUaHVtYkl0ZW0uaWR9ICBvbkNsaWNrPXsoZSkgPT5vblNlbGVjdGVkKHByb2R1Y3RUaHVtYil9PlxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIi4yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1ib3ggc2luZ2xlLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9mZWF0dXJlcy9mZWF0dXJlLWljb24tMS5wbmdcIiBhbHQ9XCJcIi8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uSW1hZ2V9IGltYWdlQ2xhc3M9e1wicHJvZHVjdC1pbWFnZS1ob3Jpem9udGFsXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtcHJpY2VcIj48Yj57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5QcmljZX0gVk7EkDwvYj48L2g0PlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtdGl0bGVcIj57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5UaXRsZX08L2g0PlxyXG4gICAgICAgICAgICA8aT57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5TaG9ydERlc2NyaXB0aW9ufTwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGh1bWJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9DYXJvdXNlbFwiXHJcbmltcG9ydCBDb21tZXJjZUhlcm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbWVyY2UvY29tbWVyY2UtaGVyb1wiXHJcbmltcG9ydCBQcm9kdWN0R3JpZFRodW1iIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtZ3JpZFwiXHJcbmltcG9ydCBQcm9kdWN0R3JpZDJUaHVtYiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9Qcm9kdWN0LWdyaWQtMlwiXHJcbmltcG9ydCBQcm9kdWN0R3JpZDNUaHVtYiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9Qcm9kdWN0LWdyaWQtM1wiXHJcbmltcG9ydCBMYXlvdXRDb21tZXJjZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQtY29tbWVyY2VcIlxyXG5pbXBvcnQgUGFnZVNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlLXNlb1wiXHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIlxyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsRnVsbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LWRldGFpbC1mdWxsXCJcclxuTW9kYWwuc2V0QXBwRWxlbWVudChcIiNfX25leHRcIik7XHJcbnZhciBzZWxlY3RpbmdQcm9kdWN0SXRlbSA9IHt9O1xyXG5cclxuY29uc3QgSG9tZSA9ICh7Y2F0YWxvZywgY2F0YWxvZ3BhZ2UsIGxheW91dEluZm8gfSkgPT4ge1xyXG4gICAgIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0Q29tbWVyY2UgY2F0ZWdvcmllcz17Y2F0YWxvZ30gbGF5b3V0PXtsYXlvdXRJbmZvfSBwYWdlPXtjYXRhbG9ncGFnZX0+XHJcbiAgICAgICAgPFBhZ2VTZW8gc2VvPXtjYXRhbG9ncGFnZS5hdHRyaWJ1dGVzLnNlb30gLz5cclxuICAgICAgICA8Q29tbWVyY2VIZXJvIGhlcm89e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuSGVyb30gcGFnZT17Y2F0YWxvZ3BhZ2V9Lz4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPlxyXG4gICAgICAgIDxQcm9kdWN0R3JpZFRodW1iIGNhdGVnb3JpZXM9e2NhdGFsb2d9IGZlYXR1cmVQcm9kdWN0V3JhcD17Y2F0YWxvZ3BhZ2UuYXR0cmlidXRlcy5GZWF0dXJlUHJvZHVjdFdyYXB9IC8+ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiAgY2xhc3M9XCJtYXJnaW4tYm94LTF4XCIgLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoY2F0YWxvZ3BhZ2UuYXR0cmlidXRlcy5TYWxlT2ZmUHJvZHVjdFdyYXAgJiYgQXJyYXkuZnJvbShjYXRhbG9ncGFnZS5hdHRyaWJ1dGVzLlNhbGVPZmZQcm9kdWN0V3JhcCkubGVuZ3RoICE9IDApID8gXHJcbiAgICAgICAgICAoPGRpdj48UHJvZHVjdEdyaWQzVGh1bWIga2V5PXtcIlNhbGVPZmZQcm9kdWN0V3JhcFwifSBuYW1lPXtcIlNhbGVPZmZQcm9kdWN0V3JhcFwifSBjYXRlZ29yaWVzPXtjYXRhbG9nfSBmZWF0dXJlUHJvZHVjdFdyYXA9e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuU2FsZU9mZlByb2R1Y3RXcmFwfSBjb2xDbGFzcz1cInctZnVsbCBsZzp3LTEvM1wiIC8+IDxkaXYgIGNsYXNzPVwibWFyZ2luLWJveC0xeFwiIC8+PGhyLz48ZGl2ICBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPjwvZGl2PiApIDogKDw+PC8+KVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIChjYXRhbG9ncGFnZS5hdHRyaWJ1dGVzLk1haW5Qcm9kdWN0V3JhcCAmJiBBcnJheS5mcm9tKGNhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuTWFpblByb2R1Y3RXcmFwKS5sZW5ndGggIT0gMCkgPyBcclxuICAgICAgICAgICg8ZGl2PjxQcm9kdWN0R3JpZDJUaHVtYiAga2V5PXtcIk1haW5Qcm9kdWN0V3JhcFwifSBuYW1lPXtcIk1haW5Qcm9kdWN0V3JhcFwifSBjYXRlZ29yaWVzPXtjYXRhbG9nfSBmZWF0dXJlUHJvZHVjdFdyYXA9e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuTWFpblByb2R1Y3RXcmFwfSBjb2xDbGFzcz1cInctZnVsbCBsZzp3LTEvM1wiIC8+IDxkaXYgY2xhc3M9XCJtYXJnaW4tYm94LTF4XCIgLz48aHIvPjxkaXYgIGNsYXNzPVwibWFyZ2luLWJveC0xeFwiIC8+PC9kaXY+ICkgOiAoPD48Lz4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoY2F0YWxvZ3BhZ2UuYXR0cmlidXRlcy5SZWNvbW1lbmRQcm9kdWN0V3JhcCAmJiBBcnJheS5mcm9tKGNhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuUmVjb21tZW5kUHJvZHVjdFdyYXApLmxlbmd0aCAhPSAwKSA/IFxyXG4gICAgICAgICAgKDxkaXY+PFByb2R1Y3RHcmlkMlRodW1iICBrZXk9e1wiUmVjb21tZW5kUHJvZHVjdFdyYXBcIn0gbmFtZT17XCJSZWNvbW1lbmRQcm9kdWN0V3JhcFwifSBjYXRlZ29yaWVzPXtjYXRhbG9nfSBmZWF0dXJlUHJvZHVjdFdyYXA9e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuUmVjb21tZW5kUHJvZHVjdFdyYXB9IGNvbENsYXNzPVwidy1mdWxsIGxnOnctMS8zXCIgLz4gPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPjxoci8+PGRpdiAgY2xhc3M9XCJtYXJnaW4tYm94LTF4XCIgLz48L2Rpdj4gKSA6ICg8PjwvPilcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPlxyXG4gICAgICAgIDxNb2RhbCBpc09wZW49eyEhcm91dGVyLnF1ZXJ5LnByb2R1Y3R9IG9uUmVxdWVzdENsb3NlPXsoKSA9PiByb3V0ZXIucmVwbGFjZShcIi9wYWdlcy9jYXRhbG9nXCIpfSA+XHJcbiAgICAgICAgICA8UHJvZHVjdERldGFpbEZ1bGwgcHJvZHVjdFRodW1iPXtzZWxlY3RpbmdQcm9kdWN0SXRlbX0gLz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvTGF5b3V0Q29tbWVyY2U+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcclxuICBjb25zdCBbY2F0YWxvZ1JlcywgY2F0YWxvZ3BhZ2VSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZmV0Y2hBUEkoXCIvcHJvZHVjdC1jYXRlZ29yaWVzXCIsICB7XHJcbiAgICAgICAgcG9wdWxhdGU6IHtcclxuICAgICAgICAgIEZlYXR1cmVQcm9kdWN0czogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgIH19KSwgXHJcbiAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvY2F0YWxvZy1wYWdlP3BvcHVsYXRlW0ZlYXR1cmVQcm9kdWN0V3JhcF1bcG9wdWxhdGVdW0l0ZW1zXVtwb3B1bGF0ZV09KlxyXG4gICAgZmV0Y2hBUEkoXCIvY2F0YWxvZy1wYWdlXCIsICB7XHJcbiAgICAgIHBvcHVsYXRlOiB7XHJcbiAgICAgICAgcG9wdWxhdGU6IFwiKlwiICxcclxuICAgICAgICBIZXJvOiB7IHBvcHVsYXRlOiBcIipcIiAsSW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sQmdJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSx9LFxyXG4gICAgICAgIEZvb3RlcjogICB7IHBvcHVsYXRlOiAgeyAgICAgICAgU3ViY3JpYmVCb3g6IHsgcG9wdWxhdGU6IFwiKlwiIH0sSHlwZXJMaW5rICA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sQmdJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSB9fSxcclxuICAgICAgICAgQ2Fyb3VzZWxHYWxsZXJ5IDogeyAgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICAgICAgIEZlYXR1cmVQcm9kdWN0V3JhcCAgOiAgICAgeyBwb3B1bGF0ZToge0l0ZW1zOiB7IHBvcHVsYXRlOiBcIipcIiB9fX0sIFxyXG4gICAgICAgICBNYWluUHJvZHVjdFdyYXAgICA6ICAgICB7IHBvcHVsYXRlOiB7SXRlbXM6IHsgcG9wdWxhdGU6IFwiKlwiIH19fSxcclxuICAgICAgICAgUmVjb21tZW5kUHJvZHVjdFdyYXAgIDogICAgIHsgcG9wdWxhdGU6IHtJdGVtczogeyBwb3B1bGF0ZTogXCIqXCIgfX19LFxyXG4gICAgICAgICBTYWxlT2ZmUHJvZHVjdFdyYXAgIDogICAgIHsgcG9wdWxhdGU6IHtJdGVtczogeyBwb3B1bGF0ZTogXCIqXCIgfSwgQmdJbWFnZTogIHsgcG9wdWxhdGU6IFwiKlwiIH19fSxcclxuICAgICAgfX0pLCBcclxuICBdKTtcclxuICAgIFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjYXRhbG9nOiBjYXRhbG9nUmVzLmRhdGEsXHJcbiAgICAgIGNhdGFsb2dwYWdlOiBjYXRhbG9ncGFnZVJlcy5kYXRhLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=