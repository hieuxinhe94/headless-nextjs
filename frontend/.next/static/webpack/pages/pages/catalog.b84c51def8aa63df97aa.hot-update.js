self["webpackHotUpdate_N_E"]("pages/pages/catalog",{

/***/ "./components/commerce/product-grid.js":
/*!*********************************************!*\
  !*** ./components/commerce/product-grid.js ***!
  \*********************************************/
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
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-grid.js",
    _this = undefined,
    _s = $RefreshSig$();







var defaultgroupId;
var featureProductWrapTmp;
var productsFiltered;

var ProductGridThumb = function ProductGridThumb(_ref) {
  _s();

  var _defaultgroupId, _productsFiltered;

  var _ref$featureProductWr = _ref.featureProductWrap,
      featureProductWrap = _ref$featureProductWr === void 0 ? [] : _ref$featureProductWr,
      _ref$categories = _ref.categories,
      categories = _ref$categories === void 0 ? [] : _ref$categories,
      _ref$col = _ref.col,
      col = _ref$col === void 0 ? 3 : _ref$col,
      _ref$row = _ref.row,
      row = _ref$row === void 0 ? 5 : _ref$row;
  if (!featureProductWrap || featureProductWrap.length == 0) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
  featureProductWrapTmp = featureProductWrap;
  defaultgroupId = (_defaultgroupId = defaultgroupId) !== null && _defaultgroupId !== void 0 ? _defaultgroupId : featureProductWrap[0].id;
  productsFiltered = (_productsFiltered = productsFiltered) !== null && _productsFiltered !== void 0 ? _productsFiltered : featureProductWrap.filter(function (t) {
    return t.id == defaultgroupId;
  })[0].Items;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var ChangeFilter = function ChangeFilter(a) {
    defaultgroupId = a.id;
    productsFiltered = a.Items;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "product-section",
    className: "container flex flex-wrap mx-auto gap-2 mt-8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "w-full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "w-full lg:w-1/3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
              id: "schedules",
              "class": "schedule section-padding",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "container",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "schedule-area  wow fadeInDown",
                  "data-wow-delay": "0.3s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    "class": "schedule-tab-title col-md-3 col-lg-3 col-xs-12",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      "class": "table-responsive",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                        "class": "nav nav-tabs",
                        id: "myTab",
                        role: "tablist",
                        children: featureProductWrap.map(function (item, index) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                            id: "#" + item.id,
                            "class": "nav-item row",
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
                                "class": "item-text",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                  children: [" ", item.GroupName]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 44,
                                  columnNumber: 45
                                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 45,
                                  columnNumber: 45
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 43,
                                columnNumber: 45
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 42,
                              columnNumber: 41
                            }, _this)
                          }, index, false, {
                            fileName: _jsxFileName,
                            lineNumber: 41,
                            columnNumber: 37
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 39,
                        columnNumber: 37
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 37
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 33
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "w-full lg:w-2/3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "row",
              children: productsFiltered.map(function (_product) {
                return _product !== null && _product !== void 0 && _product.detail ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "w-full lg:w-1/2",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_thumb__WEBPACK_IMPORTED_MODULE_2__.default, {
                    productThumb: _product.detail.data
                  }, _product.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 37
                  }, _this)
                }, _product.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 33
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, _product.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 35
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(ProductGridThumb, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = ProductGridThumb;
/* harmony default export */ __webpack_exports__["default"] = (ProductGridThumb);

var _c;

$RefreshReg$(_c, "ProductGridThumb");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LWdyaWQuanMiXSwibmFtZXMiOlsiZGVmYXVsdGdyb3VwSWQiLCJmZWF0dXJlUHJvZHVjdFdyYXBUbXAiLCJwcm9kdWN0c0ZpbHRlcmVkIiwiUHJvZHVjdEdyaWRUaHVtYiIsImZlYXR1cmVQcm9kdWN0V3JhcCIsImNhdGVnb3JpZXMiLCJjb2wiLCJyb3ciLCJsZW5ndGgiLCJpZCIsImZpbHRlciIsInQiLCJJdGVtcyIsInJvdXRlciIsInVzZVJvdXRlciIsIkNoYW5nZUZpbHRlciIsImEiLCJyZXBsYWNlIiwiYXNQYXRoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZSIsIkdyb3VwTmFtZSIsIl9wcm9kdWN0IiwiZGV0YWlsIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGNBQUo7QUFDQSxJQUFJQyxxQkFBSjtBQUNBLElBQUlDLGdCQUFKOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBb0U7QUFBQTs7QUFBQTs7QUFBQSxtQ0FBakVDLGtCQUFpRTtBQUFBLE1BQWpFQSxrQkFBaUUsc0NBQTVDLEVBQTRDO0FBQUEsNkJBQXhDQyxVQUF3QztBQUFBLE1BQXhDQSxVQUF3QyxnQ0FBM0IsRUFBMkI7QUFBQSxzQkFBdkJDLEdBQXVCO0FBQUEsTUFBdkJBLEdBQXVCLHlCQUFqQixDQUFpQjtBQUFBLHNCQUFkQyxHQUFjO0FBQUEsTUFBZEEsR0FBYyx5QkFBUixDQUFRO0FBRXpGLE1BQUcsQ0FBQ0gsa0JBQUQsSUFBdUJBLGtCQUFrQixDQUFDSSxNQUFuQixJQUE0QixDQUF0RCxFQUF5RCxvQkFBTyw2SUFBUDtBQUV6RFAsdUJBQXFCLEdBQUdHLGtCQUF4QjtBQUNBSixnQkFBYyxzQkFBR0EsY0FBSCw2REFBcUJJLGtCQUFrQixDQUFDLENBQUQs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QkFDQTtBQUF1QiwyQkFBTSxpQkFBN0I7QUFBQSx5Q0FDSSw4REFBQyxtREFBRDtBQUFnQyxnQ0FBWSxFQUFFRCxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDO0FBQTlELHFCQUFtQkYsUUFBUSxDQUFDZixFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBQVVlLFFBQVEsQ0FBQ2YsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxnQkFJRSx5RUFBVWUsUUFBUSxDQUFDZixFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxpQjtBQUFBLGVBQXJCO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkNELENBNUREOztHQUFNTixnQjtVQU9hVyxrRDs7O0tBUGJYLGdCO0FBOEROLCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYWdlcy9jYXRhbG9nLmI4NGM1MWRlZjhhYTYzZGY5N2FhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFByb2R1Y3RUaHVtYiBmcm9tIFwiLi9wcm9kdWN0LXRodW1iXCJcclxuaW1wb3J0IFByb2R1Y3RDYXRlZ29yeSBmcm9tIFwiLi9Qcm9kdWN0Q2F0ZWdvcnlcIlxyXG5pbXBvcnQgIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbnZhciBkZWZhdWx0Z3JvdXBJZDtcclxudmFyIGZlYXR1cmVQcm9kdWN0V3JhcFRtcDtcclxudmFyIHByb2R1Y3RzRmlsdGVyZWQ7XHJcblxyXG5jb25zdCBQcm9kdWN0R3JpZFRodW1iID0gKHsgZmVhdHVyZVByb2R1Y3RXcmFwID0gW10sIGNhdGVnb3JpZXMgPSBbXSwgY29sID0gMywgcm93ID0gNSB9KSA9PiB7XHJcblxyXG4gICAgaWYoIWZlYXR1cmVQcm9kdWN0V3JhcCB8fCBmZWF0dXJlUHJvZHVjdFdyYXAubGVuZ3RoID09MCkgcmV0dXJuIDw+PC8+XHJcbiAgICBcclxuICAgIGZlYXR1cmVQcm9kdWN0V3JhcFRtcCA9IGZlYXR1cmVQcm9kdWN0V3JhcDtcclxuICAgIGRlZmF1bHRncm91cElkID0gZGVmYXVsdGdyb3VwSWQgPz8gZmVhdHVyZVByb2R1Y3RXcmFwWzBdLmlkO1xyXG4gICAgcHJvZHVjdHNGaWx0ZXJlZCA9IHByb2R1Y3RzRmlsdGVyZWQgPz8gZmVhdHVyZVByb2R1Y3RXcmFwLmZpbHRlcih0PT4gdC5pZCA9PSBkZWZhdWx0Z3JvdXBJZClbMF0uSXRlbXM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBDaGFuZ2VGaWx0ZXIgPSAoYSkgPT4ge1xyXG4gICAgZGVmYXVsdGdyb3VwSWQgPSBhLmlkO1xyXG4gICAgcHJvZHVjdHNGaWx0ZXJlZCA9IGEuSXRlbXM7XHJcbiAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoLnJlcGxhY2UoL1xcIy4rLywgJycpICsgXCIjXCIgKyBhLmlkKVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInByb2R1Y3Qtc2VjdGlvblwiIGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtd3JhcCBteC1hdXRvIGdhcC0yIG10LThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJvZHVjdENhdGVnb3J5IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IG9uU2VsZWN0ZWQ9e29uQ2hhbmdlRmlsdGVyfS8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInNjaGVkdWxlc1wiIGNsYXNzPVwic2NoZWR1bGUgc2VjdGlvbi1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjaGVkdWxlLWFyZWEgIHdvdyBmYWRlSW5Eb3duXCIgZGF0YS13b3ctZGVsYXk9XCIwLjNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjaGVkdWxlLXRhYi10aXRsZSBjb2wtbWQtMyBjb2wtbGctMyBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlUHJvZHVjdFdyYXAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gaWQ9e1wiI1wiICsgaXRlbS5pZH0gY2xhc3M9XCJuYXYtaXRlbSByb3dcIiBvbkNsaWNrPXsoZSkgPT5DaGFuZ2VGaWx0ZXIoaXRlbSl9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInRodXJzZGF5LXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj17XCIjXCIgKyBpdGVtLmlkfSByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInRodXJzZGF5XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4ge2l0ZW0uR3JvdXBOYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0yLzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9kdWN0c0ZpbHRlcmVkLm1hcCgoX3Byb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3Byb2R1Y3Q/LmRldGFpbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtfcHJvZHVjdC5pZH0gY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUaHVtYiBrZXk9e19wcm9kdWN0LmlkfSBwcm9kdWN0VGh1bWI9e19wcm9kdWN0LmRldGFpbC5kYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBrZXk9e19wcm9kdWN0LmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0R3JpZFRodW1iXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=