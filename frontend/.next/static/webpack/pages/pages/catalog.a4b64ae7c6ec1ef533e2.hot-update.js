self["webpackHotUpdate_N_E"]("pages/pages/catalog",{

/***/ "./components/commerce/Product-grid-3.js":
/*!***********************************************!*\
  !*** ./components/commerce/Product-grid-3.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-thumb */ "./components/commerce/product-thumb.js");
/* harmony import */ var _ProductCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCategory */ "./components/commerce/ProductCategory.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_thumb_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-thumb-2 */ "./components/commerce/product-thumb-2.js");
/* harmony import */ var _product_thumb_3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-thumb-3 */ "./components/commerce/product-thumb-3.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\Product-grid-3.js",
    _this = undefined,
    _s = $RefreshSig$();










var defaultgroupIds = {};
var featureProductWrapTmp = {};
var productsFiltered = {};
defaultgroupIds["0"] = "";
featureProductWrapTmp["0"] = "";
productsFiltered["0"] = "";

var ProductGrid3Thumb = function ProductGrid3Thumb(_ref) {
  _s();

  var _defaultgroupIds$name, _productsFiltered$nam, _productsFiltered$nam2, _productsFiltered$nam3, _productsFiltered$nam4, _productsFiltered$nam5, _productsFiltered$nam6, _productsFiltered$nam7;

  var featureProductWrap = _ref.featureProductWrap,
      _ref$categories = _ref.categories,
      categories = _ref$categories === void 0 ? [] : _ref$categories,
      _ref$colClass = _ref.colClass,
      colClass = _ref$colClass === void 0 ? "w-full lg:w-1/2" : _ref$colClass,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "ProductGrid2Thumb" : _ref$name;
  console.log(name);
  if (!featureProductWrap || Array.from(featureProductWrap).length == 0) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
  featureProductWrapTmp[name] = featureProductWrap;
  defaultgroupIds[name] = (_defaultgroupIds$name = defaultgroupIds[name]) !== null && _defaultgroupIds$name !== void 0 ? _defaultgroupIds$name : featureProductWrap[0].id;
  productsFiltered[name] = (_productsFiltered$nam = productsFiltered[name]) !== null && _productsFiltered$nam !== void 0 ? _productsFiltered$nam : featureProductWrapTmp[name].filter(function (t) {
    return t.id == defaultgroupIds[name];
  })[0];
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var ChangeFilter = function ChangeFilter(a) {
    defaultgroupIds[name] = a.id;
    productsFiltered[name] = a;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    "class": "w-full",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      "class": "counter-section section-padding",
      style: {
        backgroundImage: "url(" + (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__.getStrapiURL)() + ((_productsFiltered$nam2 = productsFiltered[name]) === null || _productsFiltered$nam2 === void 0 ? void 0 : (_productsFiltered$nam3 = _productsFiltered$nam2.BgImage) === null || _productsFiltered$nam3 === void 0 ? void 0 : (_productsFiltered$nam4 = _productsFiltered$nam3.data) === null || _productsFiltered$nam4 === void 0 ? void 0 : (_productsFiltered$nam5 = _productsFiltered$nam4.attributes) === null || _productsFiltered$nam5 === void 0 ? void 0 : _productsFiltered$nam5.url) + ")"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "row justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "col-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              "class": "nav nav-tabs flex",
              id: "myTab",
              role: "tablist",
              children: featureProductWrap.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  id: "#" + item.id,
                  "class": "nav-product-grid-horizontal-active",
                  onClick: function onClick(e) {
                    return ChangeFilter(item);
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    "class": "nav-link",
                    id: "thursday-tab",
                    "data-toggle": "tab",
                    href: "#" + item.id,
                    role: "tab",
                    "aria-controls": "thursday",
                    "aria-selected": "false",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      "class": "item-text uppercase",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                        children: [" ", item.GroupName]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 45,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 45
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 41
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "row",
          children: (_productsFiltered$nam6 = productsFiltered[name]) === null || _productsFiltered$nam6 === void 0 ? void 0 : (_productsFiltered$nam7 = _productsFiltered$nam6.Items) === null || _productsFiltered$nam7 === void 0 ? void 0 : _productsFiltered$nam7.map(function (_product) {
            return _product !== null && _product !== void 0 && _product.detail ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": colClass,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_thumb_3__WEBPACK_IMPORTED_MODULE_7__.default, {
                productThumb: _product.detail.data
              }, _product.id, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 45
              }, _this)
            }, _product.id, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 41
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, _product.id, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 43
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }, _this);
};

_s(ProductGrid3Thumb, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = ProductGrid3Thumb;
/* harmony default export */ __webpack_exports__["default"] = (ProductGrid3Thumb);

var _c;

$RefreshReg$(_c, "ProductGrid3Thumb");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9Qcm9kdWN0LWdyaWQtMy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Z3JvdXBJZHMiLCJmZWF0dXJlUHJvZHVjdFdyYXBUbXAiLCJwcm9kdWN0c0ZpbHRlcmVkIiwiUHJvZHVjdEdyaWQzVGh1bWIiLCJmZWF0dXJlUHJvZHVjdFdyYXAiLCJjYXRlZ29yaWVzIiwiY29sQ2xhc3MiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImlkIiwiZmlsdGVyIiwidCIsInJvdXRlciIsInVzZVJvdXRlciIsIkNoYW5nZUZpbHRlciIsImEiLCJyZXBsYWNlIiwiYXNQYXRoIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0U3RyYXBpVVJMIiwiQmdJbWFnZSIsImRhdGEiLCJhdHRyaWJ1dGVzIiwidXJsIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZSIsIkdyb3VwTmFtZSIsIkl0ZW1zIiwiX3Byb2R1Y3QiLCJkZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxlQUFlLEdBQUcsRUFBdEI7QUFDQSxJQUFJQyxxQkFBcUIsR0FBRyxFQUE1QjtBQUNBLElBQUlDLGdCQUFnQixHQUFHLEVBQXZCO0FBRUFGLGVBQWUsQ0FBQyxHQUFELENBQWYsR0FBdUIsRUFBdkI7QUFDQUMscUJBQXFCLENBQUMsR0FBRCxDQUFyQixHQUE2QixFQUE3QjtBQUNBQyxnQkFBZ0IsQ0FBQyxHQUFELENBQWhCLEdBQXdCLEVBQXhCOztBQUNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBc0c7QUFBQTs7QUFBQTs7QUFBQSxNQUFuR0Msa0JBQW1HLFFBQW5HQSxrQkFBbUc7QUFBQSw2QkFBOUVDLFVBQThFO0FBQUEsTUFBOUVBLFVBQThFLGdDQUFq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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFBU0YsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUR3QjtBQUFBLGVBQXZCO0FBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxlQWtCRTtBQUFLLG1CQUFNLEtBQVg7QUFBQSw4Q0FDTzVCLGdCQUFnQixDQUFDSyxJQUFELENBRHZCLHFGQUNPLHVCQUF3QjBCLEtBRC9CLDJEQUNPLHVCQUErQkwsR0FBL0IsQ0FBbUMsVUFBQ00sUUFBRDtBQUFBLG1CQUNUQSxRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFQyxNQUFYLGdCQUVBO0FBQXVCLHVCQUFPN0IsUUFBOUI7QUFBQSxxQ0FDSSw4REFBQyxxREFBRDtBQUFpQyw0QkFBWSxFQUFFNEIsUUFBUSxDQUFDQyxNQUFULENBQWdCVjtBQUEvRCxpQkFBb0JTLFFBQVEsQ0FBQ3JCLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixlQUFVcUIsUUFBUSxDQUFDckIsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQSxnQkFLRSx5RUFBVXFCLFFBQVEsQ0FBQ3JCLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTlE7QUFBQSxXQUFuQztBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQ0QsQ0FsREQ7O0dBQU1WLGlCO1VBTWFjLGtEOzs7S0FOYmQsaUI7QUFvRE4sK0RBQWVBLGlCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuYTRiNjRhZTdjNmVjMWVmNTMzZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUHJvZHVjdFRodW1iIGZyb20gXCIuL3Byb2R1Y3QtdGh1bWJcIlxyXG5pbXBvcnQgUHJvZHVjdENhdGVnb3J5IGZyb20gXCIuL1Byb2R1Y3RDYXRlZ29yeVwiXHJcbmltcG9ydCAge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUHJvZHVjdFRodW1iMiBmcm9tIFwiLi9wcm9kdWN0LXRodW1iLTJcIjtcclxuaW1wb3J0IFByb2R1Y3RUaHVtYjMgZnJvbSBcIi4vcHJvZHVjdC10aHVtYi0zXCI7XHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcblxyXG52YXIgZGVmYXVsdGdyb3VwSWRzID0ge307XHJcbnZhciBmZWF0dXJlUHJvZHVjdFdyYXBUbXAgPSB7fVxyXG52YXIgcHJvZHVjdHNGaWx0ZXJlZCA9IHt9O1xyXG5cclxuZGVmYXVsdGdyb3VwSWRzW1wiMFwiXSA9IFwiXCI7XHJcbmZlYXR1cmVQcm9kdWN0V3JhcFRtcFtcIjBcIl0gPSBcIlwiO1xyXG5wcm9kdWN0c0ZpbHRlcmVkW1wiMFwiXSA9IFwiXCI7XHJcbmNvbnN0IFByb2R1Y3RHcmlkM1RodW1iID0gKHsgZmVhdHVyZVByb2R1Y3RXcmFwICwgY2F0ZWdvcmllcyA9IFtdLCBjb2xDbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiLCBuYW1lID0gXCJQcm9kdWN0R3JpZDJUaHVtYlwiIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICBpZighZmVhdHVyZVByb2R1Y3RXcmFwIHx8IEFycmF5LmZyb20oZmVhdHVyZVByb2R1Y3RXcmFwKS5sZW5ndGggPT0gMCkgcmV0dXJuIDw+PC8+XHJcbiAgICBmZWF0dXJlUHJvZHVjdFdyYXBUbXBbbmFtZV0gPSBmZWF0dXJlUHJvZHVjdFdyYXA7XHJcbiAgICBkZWZhdWx0Z3JvdXBJZHNbbmFtZV0gPSBkZWZhdWx0Z3JvdXBJZHNbbmFtZV0gPz8gZmVhdHVyZVByb2R1Y3RXcmFwWzBdLmlkO1xyXG4gICAgcHJvZHVjdHNGaWx0ZXJlZFtuYW1lXSA9IHByb2R1Y3RzRmlsdGVyZWRbbmFtZV0gPz8gZmVhdHVyZVByb2R1Y3RXcmFwVG1wW25hbWVdLmZpbHRlcih0PT4gdC5pZCA9PSBkZWZhdWx0Z3JvdXBJZHNbbmFtZV0pWzBdO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgQ2hhbmdlRmlsdGVyID0gKGEpID0+IHtcclxuICAgIGRlZmF1bHRncm91cElkc1tuYW1lXSA9IGEuaWQ7XHJcbiAgICBwcm9kdWN0c0ZpbHRlcmVkW25hbWVdID0gYTtcclxuICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlci5hc1BhdGgucmVwbGFjZSgvXFwjLisvLCAnJykgKyBcIiNcIiArIGEuaWQpXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY291bnRlci1zZWN0aW9uIHNlY3Rpb24tcGFkZGluZ1wiIFxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAgYHVybChgK2dldFN0cmFwaVVSTCgpICsgcHJvZHVjdHNGaWx0ZXJlZFtuYW1lXT8uQmdJbWFnZT8uZGF0YT8uYXR0cmlidXRlcz8udXJsK2ApYCB9fSA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnMgZmxleFwiIGlkPVwibXlUYWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZVByb2R1Y3RXcmFwLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGlkPXtcIiNcIiArIGl0ZW0uaWR9IGNsYXNzPVwibmF2LXByb2R1Y3QtZ3JpZC1ob3Jpem9udGFsLWFjdGl2ZVwiIG9uQ2xpY2s9eyhlKSA9PkNoYW5nZUZpbHRlcihpdGVtKX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwidGh1cnNkYXktdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPXtcIiNcIiArIGl0ZW0uaWR9IHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwidGh1cnNkYXlcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS10ZXh0IHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCA+IHtpdGVtLkdyb3VwTmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPikpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICB7IHByb2R1Y3RzRmlsdGVyZWRbbmFtZV0/Lkl0ZW1zPy5tYXAoKF9wcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3Byb2R1Y3Q/LmRldGFpbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e19wcm9kdWN0LmlkfSBjbGFzcz17Y29sQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VGh1bWIzIGtleT17X3Byb2R1Y3QuaWR9IHByb2R1Y3RUaHVtYj17X3Byb2R1Y3QuZGV0YWlsLmRhdGF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBrZXk9e19wcm9kdWN0LmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RHcmlkM1RodW1iXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=