self["webpackHotUpdate_N_E"]("pages/pages/[slug]",{

/***/ "./components/home/activity.js":
/*!*************************************!*\
  !*** ./components/home/activity.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* harmony import */ var _home_business_talk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/business-talk */ "./components/home/business-talk.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\activity.js",
    _this = undefined;






var Activity = function Activity(_ref) {
  var activity = _ref.activity;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: activity === null || activity === void 0 ? void 0 : activity.map(function (item, i) {
      return buildActivityStyle(i, item);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, _this);
};

_c = Activity;

var buildBusinessStepViewStyle = function buildBusinessStepViewStyle(index, item) {
  if (index % 2 === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      "class": "relative pt-20 about-area",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "w-full lg:w-1/2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "mx-4 mt-12 about-content wow fadeInLeftBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "mb-4 section-title",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "line"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "title",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                    source: item.Title,
                    escapeHtml: false
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 33
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                source: item.Description,
                escapeHtml: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: item.NavigateLink,
                "class": "main-btn gradient-btn",
                children: item.NavigateLable
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "w-full lg:w-1/2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "mx-4 mt-12 text-center about-image wow fadeInRightBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
                image: item.Media
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "about-shape-1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: item.BgMedia
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      "class": "relative pt-20 about-area",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "about-shape-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: item.BgMedia
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "w-full lg:w-1/2 lg:order-last",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "mx-4 mt-12 about-content wow fadeInLeftBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "mb-4 section-title",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "line"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 29
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "title",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                    source: item.Title,
                    escapeHtml: false
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 29
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 29
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 25
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                source: item.Description,
                escapeHtml: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 25
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: item.NavigateLink,
                "class": "main-btn gradient-btn",
                children: item.NavigateLable
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 25
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "w-full lg:w-1/2 lg:order-first",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "mx-4 mt-12 text-center about-image wow fadeInRightBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
                image: item.Media
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 12
    }, _this);
  }
};

var buildBusinessInvestmentViewStyle = function buildBusinessInvestmentViewStyle(index, item) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_business_talk__WEBPACK_IMPORTED_MODULE_4__.default, {
      business: item
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 13
  }, _this);
};

var buildActivityStyle = function buildActivityStyle(index, item) {
  if (item.__component.indexOf('business-steps') !== -1) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: item.Steps.map(function (item, index) {
      return buildBusinessStepViewStyle(index, item);
    })
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 9
  }, _this);
  if (item.__component.indexOf('investment') !== -1) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: buildBusinessInvestmentViewStyle(index, item)
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 9
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (Activity);

var _c;

$RefreshReg$(_c, "Activity");

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

/***/ "./components/home/article-content.js":
/*!********************************************!*\
  !*** ./components/home/article-content.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_component_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/component-resolver */ "./lib/component-resolver.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\article-content.js",
    _this = undefined;






var PageBody = function PageBody(_ref) {
  var data = _ref.data;
  console.log("PageBody");
  console.log(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "content",
    "class": "services-area pt-120 age-content",
    children: (0,_lib_component_resolver__WEBPACK_IMPORTED_MODULE_4__.resolverDynamicComponent)(data, "content")
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }, _this);
};

_c = PageBody;
/* harmony default export */ __webpack_exports__["default"] = (PageBody);

var _c;

$RefreshReg$(_c, "PageBody");

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

/***/ "./components/home/brand.js":
/*!**********************************!*\
  !*** ./components/home/brand.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\brand.js",
    _this = undefined;





var Brand = function Brand(_ref) {
  var brand = _ref.brand;
  var brandItemss = brand.BrandLogo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    "class": "pt-24 brand-area",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "w-full",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "items-center justify-center row lg:justify-between",
            children: brandItemss.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "single-logo hover:opacity-100 wow fadeIn",
                "data-wow-duration": "1s",
                "data-wow-delay": "0.2s",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
                  image: item.Logo
                }, item.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 29
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 25
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_c = Brand;
/* harmony default export */ __webpack_exports__["default"] = (Brand);

var _c;

$RefreshReg$(_c, "Brand");

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

/***/ "./components/home/business-talk.js":
/*!******************************************!*\
  !*** ./components/home/business-talk.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\business-talk.js",
    _this = undefined;






var BusinessTalk = function BusinessTalk(_ref) {
  var _business$Items;

  var business = _ref.business;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "facts",
    "class": "pt-20 video-counter",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "w-full lg:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "relative pb-8 mt-12 video-content wow fadeIn",
            "data-wow-duration": "1s",
            "data-wow-delay": "0.5s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
              image: business.BgMedia,
              imageClass: "absolute bottom-0 left-0 -ml-8 dots"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "relative mr-6 rounded-lg shadow-md video-wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "video-image",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                  image: business.Media
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 29
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "w-full lg:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn",
            "data-wow-duration": "1s",
            "data-wow-delay": "0.8s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "counter-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "mb-8 section-title",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "line"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                  source: business.Title,
                  escapeHtml: false
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                "class": "text",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                  source: business.Description,
                  escapeHtml: false
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "row no-gutters",
              children: (_business$Items = business.Items) === null || _business$Items === void 0 ? void 0 : _business$Items.map(function (item, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "flex items-center justify-center single-counter counter-color-" + (i + 1),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    "class": "text-center counter-items",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      "class": "text-xl font-bold text-white",
                      children: item.Title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 35
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      "class": "text-white",
                      children: item.Description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 35
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 31
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 31
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_c = BusinessTalk;
/* harmony default export */ __webpack_exports__["default"] = (BusinessTalk);

var _c;

$RefreshReg$(_c, "BusinessTalk");

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

/***/ "./components/home/feature.js":
/*!************************************!*\
  !*** ./components/home/feature.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\feature.js",
    _this = undefined;






var Feature = function Feature(_ref) {
  var feature = _ref.feature;
  var title = feature.CentralText;
  var items = feature.Items;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "features",
    "class": "services-area pt-120",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "pb-10 text-center section-title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "m-auto line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {
              source: title,
              escapeHtml: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "justify-center row",
        children: items.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "w-full sm:w-2/3 lg:w-1/3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "single-services wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.2s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "services-icon",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                  imageClass: 'shape',
                  image: item.Media
                }, item.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 36
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  "class": item.IconClass
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 36
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 32
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "mt-8 services-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  "class": "mb-8 text-xl font-bold text-gray-900",
                  children: item.Title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 36
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  "class": "mb-8",
                  children: item.Description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 36
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: item.NavigateLink,
                  "class": "duration-300 hover:text-theme-color",
                  children: [item.NavigateTextLabel, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    "class": "ml-2 lni lni-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 37
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 36
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 32
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 28
            }, _this)
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 28
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = Feature;
/* harmony default export */ __webpack_exports__["default"] = (Feature);

var _c;

$RefreshReg$(_c, "Feature");

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

/***/ "./components/home/pinned-blog.js":
/*!****************************************!*\
  !*** ./components/home/pinned-blog.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\pinned-blog.js",
    _this = undefined;






var PinnedBlog = function PinnedBlog(_ref) {
  var _args1$slice;

  var data = _ref.data,
      args1 = _ref.args1;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "blog",
    "class": "blog-area pt-120",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "w-full lg:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "pb-8 section-title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 25
            }, _this), data === null || data === void 0 ? void 0 : data.Title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {
              source: data === null || data === void 0 ? void 0 : data.Description,
              escapeHtml: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "justify-center row",
        children: args1 === null || args1 === void 0 ? void 0 : (_args1$slice = args1.slice(0, 3)) === null || _args1$slice === void 0 ? void 0 : _args1$slice.map(function (post, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "w-full md:w-2/3 lg:w-1/3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "mx-4 mt-10 single-blog wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.2s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "mb-5 overflow-hidden blog-image rounded-xl",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                  image: post.attributes.image,
                  imageClass: "w-full"
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 26
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 22
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "blog-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  "class": "mb-6 text-2xl leading-snug text-gray-900",
                  children: post.attributes.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 26
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "text-theme-color-2",
                  href: "/articles/" + post.attributes.slug,
                  children: ["Learn More", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    "class": "ml-2 lni lni-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 30
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 26
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 22
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 18
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 18
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_c = PinnedBlog;
/* harmony default export */ __webpack_exports__["default"] = (PinnedBlog);

var _c;

$RefreshReg$(_c, "PinnedBlog");

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

/***/ "./lib/component-resolver.js":
/*!***********************************!*\
  !*** ./lib/component-resolver.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolverComponent": function() { return /* binding */ resolverComponent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_pinned_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/pinned-blog */ "./components/home/pinned-blog.js");
/* harmony import */ var _components_home_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/activity */ "./components/home/activity.js");
/* harmony import */ var _components_home_brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/brand */ "./components/home/brand.js");
/* harmony import */ var _components_home_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/feature */ "./components/home/feature.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\lib\\component-resolver.js";




function resolverComponent(componentName) {
  switch (componentName) {
    case "PinnedBlog":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_pinned_blog__WEBPACK_IMPORTED_MODULE_1__.default, {
        data: arguments.length <= 1 ? undefined : arguments[1],
        args1: arguments.length <= 2 ? undefined : arguments[2]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this);

    case "Activity":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_activity__WEBPACK_IMPORTED_MODULE_2__.default, {
        activity: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this);

    case "Activity":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_brand__WEBPACK_IMPORTED_MODULE_3__.default, {
        brand: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this);

    case "Feature":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_feature__WEBPACK_IMPORTED_MODULE_4__.default, {
        feature: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this);
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2FjdGl2aXR5LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvYXJ0aWNsZS1jb250ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvYnJhbmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9idXNpbmVzcy10YWxrLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3Bpbm5lZC1ibG9nLmpzIiwid2VicGFjazovL19OX0UvLi9saWIvY29tcG9uZW50LXJlc29sdmVyLmpzIl0sIm5hbWVzIjpbIkFjdGl2aXR5IiwiYWN0aXZpdHkiLCJtYXAiLCJpdGVtIiwiaSIsImJ1aWxkQWN0aXZpdHlTdHlsZSIsImJ1aWxkQnVzaW5lc3NTdGVwVmlld1N0eWxlIiwiaW5kZXgiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiTmF2aWdhdGVMaW5rIiwiTmF2aWdhdGVMYWJsZSIsIk1lZGlhIiwiaWQiLCJCZ01lZGlhIiwiYnVpbGRCdXNpbmVzc0ludmVzdG1lbnRWaWV3U3R5bGUiLCJfX2NvbXBvbmVudCIsImluZGV4T2YiLCJTdGVwcyIsIlBhZ2VCb2R5IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXNvbHZlckR5bmFtaWNDb21wb25lbnQiLCJCcmFuZCIsImJyYW5kIiwiYnJhbmRJdGVtc3MiLCJCcmFuZExvZ28iLCJMb2dvIiwiQnVzaW5lc3NUYWxrIiwiYnVzaW5lc3MiLCJJdGVtcyIsIkZlYXR1cmUiLCJmZWF0dXJlIiwidGl0bGUiLCJDZW50cmFsVGV4dCIsIml0ZW1zIiwiSWNvbkNsYXNzIiwiTmF2aWdhdGVUZXh0TGFiZWwiLCJQaW5uZWRCbG9nIiwiYXJnczEiLCJzbGljZSIsInBvc3QiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJzbHVn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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNPLGlCQUFULENBQTJCQyxhQUEzQixFQUFxRDtBQUV4RCxVQUFRQSxhQUFSO0FBRUssU0FBSyxZQUFMO0FBQW1CLDBCQUNoQiw4REFBQyxpRUFBRDtBQUFZLFlBQUksa0RBQWhCO0FBQTJCLGFBQUs7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURnQjs7QUFHbkIsU0FBSyxVQUFMO0FBQWlCLDBCQUNkLDhEQUFDLDhEQUFEO0FBQVUsZ0JBQVE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURjOztBQUdqQixTQUFLLFVBQUw7QUFBaUIsMEJBQ2QsOERBQUMsMkRBQUQ7QUFBTyxhQUFLO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURjOztBQUdqQixTQUFLLFNBQUw7QUFBZ0IsMEJBQ2IsOERBQUMsNkRBQUQ7QUFBUyxlQUFPO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYTs7QUFHaEI7QUFDQSwwQkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREg7QUFmTDtBQW1CRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYWdlcy9bc2x1Z10uNzliMWRlNzZkNzQzY2Y4ODk0OWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiXHJcbmltcG9ydCBCdXNpbmVzc1RhbGsgZnJvbSAnLi4vaG9tZS9idXNpbmVzcy10YWxrJ1xyXG5cclxuY29uc3QgQWN0aXZpdHkgPSAoeyBhY3Rpdml0eSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7IGFjdGl2aXR5Py5tYXAoKGl0ZW0sIGkpID0+ICggIFxyXG4gICAgICAgICAgICBidWlsZEFjdGl2aXR5U3R5bGUoaSwgaXRlbSlcclxuICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkQnVzaW5lc3NTdGVwVmlld1N0eWxlID0gKGluZGV4LCBpdGVtKSA9PiB7XHJcbiAgICBpZiAoaW5kZXggJTIgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiAgY2xhc3M9XCJyZWxhdGl2ZSBwdC0yMCBhYm91dC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEyIGFib3V0LWNvbnRlbnQgd293IGZhZGVJbkxlZnRCaWdcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtpdGVtLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLk5hdmlnYXRlTGlua30gY2xhc3M9XCJtYWluLWJ0biBncmFkaWVudC1idG5cIj57aXRlbS5OYXZpZ2F0ZUxhYmxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEyIHRleHQtY2VudGVyIGFib3V0LWltYWdlIHdvdyBmYWRlSW5SaWdodEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZT17aXRlbS5NZWRpYX0gIGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtc2hhcGUtMVwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtpdGVtLkJnTWVkaWF9ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICA8c2VjdGlvbiAgY2xhc3M9XCJyZWxhdGl2ZSBwdC0yMCBhYm91dC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1zaGFwZS0yXCI+XHJcbiAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17aXRlbS5CZ01lZGlhfSAga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMiBsZzpvcmRlci1sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTIgYWJvdXQtY29udGVudCB3b3cgZmFkZUluTGVmdEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTQgc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtpdGVtLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0uTmF2aWdhdGVMaW5rfSBjbGFzcz1cIm1haW4tYnRuIGdyYWRpZW50LWJ0blwiPntpdGVtLk5hdmlnYXRlTGFibGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzIgbGc6b3JkZXItZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEyIHRleHQtY2VudGVyIGFib3V0LWltYWdlIHdvdyBmYWRlSW5SaWdodEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtpdGVtLk1lZGlhfSAga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvc2VjdGlvbj4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgYnVpbGRCdXNpbmVzc0ludmVzdG1lbnRWaWV3U3R5bGUgPSAoaW5kZXgsIGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1c2luZXNzVGFsayBidXNpbmVzcz17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG59XHJcblxyXG5jb25zdCBidWlsZEFjdGl2aXR5U3R5bGUgPSAoaW5kZXgsIGl0ZW0pID0+IHsgXHJcbiAgICBpZiAoKGl0ZW0uX19jb21wb25lbnQpLmluZGV4T2YoJ2J1c2luZXNzLXN0ZXBzJykgIT09IC0xKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbS5TdGVwcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoIFxyXG4gICAgICAgICAgICAgICAgYnVpbGRCdXNpbmVzc1N0ZXBWaWV3U3R5bGUoaW5kZXgsIGl0ZW0pXHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGl0ZW0uX19jb21wb25lbnQuaW5kZXhPZignaW52ZXN0bWVudCcpICE9PSAtMSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBidWlsZEJ1c2luZXNzSW52ZXN0bWVudFZpZXdTdHlsZShpbmRleCwgaXRlbSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHlcclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCB7IHJlc29sdmVyRHluYW1pY0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9saWIvY29tcG9uZW50LXJlc29sdmVyXCI7XHJcblxyXG5jb25zdCBQYWdlQm9keSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJQYWdlQm9keVwiKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cInNlcnZpY2VzLWFyZWEgcHQtMTIwIGFnZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJEeW5hbWljQ29tcG9uZW50KGRhdGEsIFwiY29udGVudFwiKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUJvZHlcclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5jb25zdCBCcmFuZCA9ICh7IGJyYW5kIH0pID0+IHtcclxuICBcclxuY29uc3QgYnJhbmRJdGVtc3MgPSBicmFuZC5CcmFuZExvZ287XHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMjQgYnJhbmQtYXJlYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm93IGxnOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgYnJhbmRJdGVtc3MubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwic2luZ2xlLWxvZ28gaG92ZXI6b3BhY2l0eS0xMDAgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e2l0ZW0uTG9nb30gIGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJhbmRcclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5jb25zdCBCdXNpbmVzc1RhbGsgPSAoeyBidXNpbmVzcyB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cImZhY3RzXCIgY2xhc3M9XCJwdC0yMCB2aWRlby1jb3VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHBiLTggbXQtMTIgdmlkZW8tY29udGVudCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZT17YnVzaW5lc3MuQmdNZWRpYX0gIGltYWdlQ2xhc3M9e1wiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIC1tbC04IGRvdHNcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIG1yLTYgcm91bmRlZC1sZyBzaGFkb3ctbWQgdmlkZW8td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtidXNpbmVzcy5NZWRpYX0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgYmctYmx1ZS05MDAgYmctb3BhY2l0eS0yNSByb3VuZGVkLWxnIHZpZGVvLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1yNDRSS1d5ZmNGd1wiIGNsYXNzPVwidmlkZW8tcG9wdXBcIj48aSBjbGFzcz1cImxuaSBsbmktcGxheVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbC0wIG10LTEyIGNvdW50ZXItd3JhcHBlciBsZzpwbC0xNiB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC44c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItOCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2J1c2luZXNzLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17YnVzaW5lc3MuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJ1c2luZXNzLkl0ZW1zPy5tYXAoKGl0ZW0sIGkpID0+ICggIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNpbmdsZS1jb3VudGVyIGNvdW50ZXItY29sb3ItXCIgKyAoaSArIDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGNvdW50ZXItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntpdGVtLlRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZVwiPntpdGVtLkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gXHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVzaW5lc3NUYWxrXHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuXHJcbmNvbnN0IEZlYXR1cmUgPSAoeyBmZWF0dXJlIH0pID0+IHtcclxuIFxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZmVhdHVyZS5DZW50cmFsVGV4dDtcclxuICAgIGNvbnN0IGl0ZW1zID0gZmVhdHVyZS5JdGVtcyA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZXNcIiBjbGFzcz1cInNlcnZpY2VzLWFyZWEgcHQtMTIwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItMTAgdGV4dC1jZW50ZXIgc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWF1dG8gbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBzbTp3LTIvMyBsZzp3LTEvM1wiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtc2VydmljZXMgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3M9XCJzaGFwZS0xXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy1zaGFwZS5zdmdcIiBhbHQ9XCJzaGFwZVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2VDbGFzcz17J3NoYXBlJ30gaW1hZ2U9e2l0ZW0uTWVkaWF9ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3M9XCJzaGFwZS0xXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy1zaGFwZS0xLnN2Z1wiIGFsdD1cInNoYXBlXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9e2l0ZW0uSWNvbkNsYXNzfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC04IHNlcnZpY2VzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi04IHRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj57aXRlbS5UaXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItOFwiPntpdGVtLkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLk5hdmlnYXRlTGlua30gY2xhc3M9XCJkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC10aGVtZS1jb2xvclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uTmF2aWdhdGVUZXh0TGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWwtMiBsbmkgbG5pLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICA8L2Rpdj4gIFxyXG48L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlIFxyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiXHJcblxyXG5jb25zdCBQaW5uZWRCbG9nID0gKHsgZGF0YSwgYXJnczEgfSkgPT4ge1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cImJsb2dcIiBjbGFzcz1cImJsb2ctYXJlYSBwdC0xMjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItOCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YT8uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZGF0YT8uRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG5cclxuICAgICAgICAgICAgeyBhcmdzMT8uc2xpY2UoMCwzKT8ubWFwKChwb3N0LCBpKSA9PiAoICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1kOnctMi8zIGxnOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTAgc2luZ2xlLWJsb2cgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTUgb3ZlcmZsb3ctaGlkZGVuIGJsb2ctaW1hZ2Ugcm91bmRlZC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZT17cG9zdC5hdHRyaWJ1dGVzLmltYWdlfSBpbWFnZUNsYXNzPXtcInctZnVsbFwifSAga2V5PXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx1bCBjbGFzcz1cImZsZXggbWItNSBtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBvc3RlZCBCeTogPGEgaHJlZj1cIiBcIj57cG9zdC5hdHRyaWJ1dGVzLmF1dGhvcj8ubmFtZX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtbC0xMlwiPntwb3N0LmF0dHJpYnV0ZXMucHVibGlzaGVkQXR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi02IHRleHQtMnhsIGxlYWRpbmctc251ZyB0ZXh0LWdyYXktOTAwXCIgID57cG9zdC5hdHRyaWJ1dGVzLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGV4dC10aGVtZS1jb2xvci0yXCIgaHJlZj17XCIvYXJ0aWNsZXMvXCIgKyBwb3N0LmF0dHJpYnV0ZXMuc2x1Z30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWwtMiBsbmkgbG5pLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpbm5lZEJsb2dcclxuXHJcbiIsImltcG9ydCBQaW5uZWRCbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvcGlubmVkLWJsb2dcIlxyXG5pbXBvcnQgQWN0aXZpdHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9hY3Rpdml0eVwiXHJcbmltcG9ydCBCcmFuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2JyYW5kXCJcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9mZWF0dXJlXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlckNvbXBvbmVudChjb21wb25lbnROYW1lLCAgIC4uLmFyZ3MpIHtcclxuICAgICBcclxuICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSlcclxuICAgICB7XHJcbiAgICAgICAgIGNhc2UgXCJQaW5uZWRCbG9nXCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQaW5uZWRCbG9nIGRhdGE9e2FyZ3NbMF19IGFyZ3MxPXthcmdzWzFdfSAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGNhc2UgXCJBY3Rpdml0eVwiOiByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QWN0aXZpdHkgYWN0aXZpdHk9e2FyZ3NbMF19ICAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGNhc2UgXCJBY3Rpdml0eVwiOiByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QnJhbmQgYnJhbmQ9e2FyZ3NbMF19ICAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGNhc2UgXCJGZWF0dXJlXCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGZWF0dXJlIGZlYXR1cmU9e2FyZ3NbMF19ICAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgIClcclxuICAgICB9XHJcbiAgfVxyXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==