self["webpackHotUpdate_N_E"]("pages/pages/[slug]",{

/***/ "./components/home/article-hero.js":
/*!*****************************************!*\
  !*** ./components/home/article-hero.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _empty_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty-box */ "./components/home/empty-box.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\article-hero.js",
    _this = undefined;





var PageHero = function PageHero(_ref) {
  var _data$Image, _data$Image$data, _data$BgImage, _data$BgImage$data;

  var data = _ref.data,
      color = _ref.color;
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_empty_box__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 22
  }, _this);
  var centralImage, centralBgImage;

  if ((_data$Image = data.Image) !== null && _data$Image !== void 0 && (_data$Image$data = _data$Image.data) !== null && _data$Image$data !== void 0 && _data$Image$data.attributes.url) {
    var _data$Image2, _data$Image2$data;

    centralImage = (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.getStrapiURL)() + ((_data$Image2 = data.Image) === null || _data$Image2 === void 0 ? void 0 : (_data$Image2$data = _data$Image2.data) === null || _data$Image2$data === void 0 ? void 0 : _data$Image2$data.attributes.url);
  }

  if ((_data$BgImage = data.BgImage) !== null && _data$BgImage !== void 0 && (_data$BgImage$data = _data$BgImage.data) !== null && _data$BgImage$data !== void 0 && _data$BgImage$data.attributes.url) {
    var _data$BgImage2, _data$BgImage2$data;

    centralBgImage = (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.getStrapiURL)() + ((_data$BgImage2 = data.BgImage) === null || _data$BgImage2 === void 0 ? void 0 : (_data$BgImage2$data = _data$BgImage2.data) === null || _data$BgImage2$data === void 0 ? void 0 : _data$BgImage2$data.attributes.url);
  }

  var textColor = 'text-white';

  if (color) {
    textColor = color;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: " ",
    "class": "header-hero",
    style: {
      backgroundImage: "url(" + centralBgImage + ")"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "pt-32 mb-12 text-center lg:pt-48 header-hero-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              "class": "text-4xl font-light leading-tight header-sub-title wow fadeInUp " + textColor,
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.2s",
              children: data === null || data === void 0 ? void 0 : data.CentralText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "text-center header-hero-image wow fadeIn",
            "data-wow-duration": "1.3s",
            "data-wow-delay": "1.4s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "inline-block",
              src: centralImage,
              alt: "hero",
              style: {
                display: centralImage != null ? 'block' : 'none'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "pt-16 mb-12 text-center lg:pt-16 header-hero-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              "class": "mb-3 text-4xl font-bold header-title wow fadeInUp " + textColor,
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.5s",
              children: data === null || data === void 0 ? void 0 : data.CentralTextDescription
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "particles-1",
      "class": "particles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_c = PageHero;
/* harmony default export */ __webpack_exports__["default"] = (PageHero);

var _c;

$RefreshReg$(_c, "PageHero");

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
/* harmony export */   "resolverComponent": function() { return /* binding */ resolverComponent; },
/* harmony export */   "resolverDynamicComponent": function() { return /* binding */ resolverDynamicComponent; },
/* harmony export */   "transformImageUriPeform": function() { return /* binding */ transformImageUriPeform; },
/* harmony export */   "resolverDynamicExtract": function() { return /* binding */ resolverDynamicExtract; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_pinned_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/pinned-blog */ "./components/home/pinned-blog.js");
/* harmony import */ var _components_home_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/activity */ "./components/home/activity.js");
/* harmony import */ var _components_home_brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/brand */ "./components/home/brand.js");
/* harmony import */ var _components_home_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/feature */ "./components/home/feature.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ "./lib/api.js");
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
        lineNumber: 14,
        columnNumber: 13
      }, this);

    case "Activity":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_activity__WEBPACK_IMPORTED_MODULE_2__.default, {
        activity: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this);

    case "Activity":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_brand__WEBPACK_IMPORTED_MODULE_3__.default, {
        brand: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this);

    case "Feature":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_feature__WEBPACK_IMPORTED_MODULE_4__.default, {
        feature: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this);
  }
}
function resolverDynamicComponent(source) {
  var contentBuilder = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);

  console.log(contentBuilder);
  source.forEach(function (dynamicContent) {
    contentBuilder += resolverDynamicExtract(dynamicContent);
  });
  console.log("contentBuilder");
  console.log(contentBuilder);
  return contentBuilder;
}
function transformImageUriPeform(uri, children, title, alt) {
  return uri.startsWith("/") ? (0,_api__WEBPACK_IMPORTED_MODULE_7__.getStrapiURL)(uri) : uri;
}
function resolverDynamicExtract(dynamicContent) {
  console.log("dynamicContent");
  console.log(dynamicContent);
  if (dynamicContent.__component.indexOf('dynamics.page-content') !== -1) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    "class": "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "justify-center row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "w-full lg:w-2/3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "pb-10 text-center section-title",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-2xl",
            children: dynamicContent.Name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 18
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "m-auto line"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": " pt-12 pb-10 row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_5___default()), {
        transformImageUri: transformImageUriPeform,
        source: dynamicContent.Content,
        escapeHtml: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, dynamicContent.Id, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 7
  }, this);
  if (dynamicContent.__component.indexOf('dynamics.page-image-content') !== -1) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    "class": "container pt-12 pb-10",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "w-full lg:w-1/2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "relative pb-8 mt-12 video-content wow fadeIn",
          "data-wow-duration": "1s",
          "data-wow-delay": "0.5s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "relative justify-center mr-6 rounded-lg shadow-md video-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "video-image bg-light-blue-300",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_6__.default, {
                imageClass: "image-fit",
                image: dynamicContent === null || dynamicContent === void 0 ? void 0 : dynamicContent.Image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "w-full lg:w-1/2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn",
          "data-wow-duration": "1s",
          "data-wow-delay": "0.8s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "counter-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "mb-8 section-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "line"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 27
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_5___default()), {
                source: dynamicContent.Title,
                escapeHtml: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 27
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 23
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              "class": "text",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_5___default()), {
                source: dynamicContent.Description,
                escapeHtml: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 23
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 7
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2FydGljbGUtaGVyby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbXBvbmVudC1yZXNvbHZlci5qcyJdLCJuYW1lcyI6WyJQYWdlSGVybyIsImRhdGEiLCJjb2xvciIsImNlbnRyYWxJbWFnZSIsImNlbnRyYWxCZ0ltYWdlIiwiSW1hZ2UiLCJhdHRyaWJ1dGVzIiwidXJsIiwiZ2V0U3RyYXBpVVJMIiwiQmdJbWFnZSIsInRleHRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIkNlbnRyYWxUZXh0IiwiZGlzcGxheSIsIkNlbnRyYWxUZXh0RGVzY3JpcHRpb24iLCJyZXNvbHZlckNvbXBvbmVudCIsImNvbXBvbmVudE5hbWUiLCJyZXNvbHZlckR5bmFtaWNDb21wb25lbnQiLCJzb3VyY2UiLCJjb250ZW50QnVpbGRlciIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiZHluYW1pY0NvbnRlbnQiLCJyZXNvbHZlckR5bmFtaWNFeHRyYWN0IiwidHJhbnNmb3JtSW1hZ2VVcmlQZWZvcm0iLCJ1cmkiLCJjaGlsZHJlbiIsInRpdGxlIiwiYWx0Iiwic3RhcnRzV2l0aCIsIl9fY29tcG9uZW50IiwiaW5kZXhPZiIsIk5hbWUiLCJDb250ZW50IiwiSWQiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUVsQyxNQUFHLENBQUNELElBQUosRUFBVSxvQkFBTyw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFFVixNQUFJRSxZQUFKLEVBQWlCQyxjQUFqQjs7QUFDQSxxQkFBR0gsSUFBSSxDQUFDSSxLQUFSLDREQUFH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SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUEwQ0Esc0JBQU8sNklBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYWdlcy9bc2x1Z10uZjg5N2VmZTM2ODdhNjU2ZTM0YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IEVtcHR5Qm94IGZyb20gXCIuL2VtcHR5LWJveFwiO1xyXG5cclxuY29uc3QgUGFnZUhlcm8gPSAoeyBkYXRhLCBjb2xvciB9KSA9PiB7XHJcbiBcclxuICAgIGlmKCFkYXRhKSByZXR1cm4gPEVtcHR5Qm94ICAvPlxyXG5cclxuICAgIHZhciBjZW50cmFsSW1hZ2UsY2VudHJhbEJnSW1hZ2U7XHJcbiAgICBpZihkYXRhLkltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzLnVybCkge1xyXG4gICAgICAgICAgY2VudHJhbEltYWdlID0gICAgIGdldFN0cmFwaVVSTCgpICsgZGF0YS5JbWFnZT8uZGF0YT8uYXR0cmlidXRlcy51cmw7XHJcbiAgICB9XHJcbiAgICBpZihkYXRhLkJnSW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXMudXJsKSB7XHJcbiAgICAgICAgY2VudHJhbEJnSW1hZ2UgPSAgICAgZ2V0U3RyYXBpVVJMKCkgKyBkYXRhLkJnSW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXMudXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0ZXh0Q29sb3IgID0gJ3RleHQtd2hpdGUnO1xyXG4gICAgaWYoY29sb3IpIHtcclxuICAgICAgICB0ZXh0Q29sb3IgPSBjb2xvclxyXG4gICAgfSBcclxuICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cIiBcIiBjbGFzcz1cImhlYWRlci1oZXJvXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAgYHVybChgK2NlbnRyYWxCZ0ltYWdlK2ApYCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0yLzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTMyIG1iLTEyIHRleHQtY2VudGVyIGxnOnB0LTQ4IGhlYWRlci1oZXJvLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz17XCJ0ZXh0LTR4bCBmb250LWxpZ2h0IGxlYWRpbmctdGlnaHQgaGVhZGVyLXN1Yi10aXRsZSB3b3cgZmFkZUluVXAgXCIgICsgdGV4dENvbG9yfSBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj57IGRhdGE/LkNlbnRyYWxUZXh0fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0yLzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGhlYWRlci1oZXJvLWltYWdlIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjEuNHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgc3JjPXtjZW50cmFsSW1hZ2V9IGFsdD1cImhlcm9cIiBzdHlsZT17IHsgZGlzcGxheTogY2VudHJhbEltYWdlICE9IG51bGwgPyAnYmxvY2snIDogJ25vbmUnIH0gfSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0yLzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTE2IG1iLTEyIHRleHQtY2VudGVyIGxnOnB0LTE2IGhlYWRlci1oZXJvLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9e1wibWItMyB0ZXh0LTR4bCBmb250LWJvbGQgaGVhZGVyLXRpdGxlIHdvdyBmYWRlSW5VcCBcIiArIHRleHRDb2xvcn0gIGRhdGEtd293LWR1cmF0aW9uPVwiMS4zc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkYXRhPy5DZW50cmFsVGV4dERlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFydGljbGVzLTFcIiBjbGFzcz1cInBhcnRpY2xlc1wiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVyb1xyXG5cclxuIiwiaW1wb3J0IFBpbm5lZEJsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9waW5uZWQtYmxvZ1wiXHJcbmltcG9ydCBBY3Rpdml0eSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2FjdGl2aXR5XCJcclxuaW1wb3J0IEJyYW5kIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvYnJhbmRcIlxyXG5pbXBvcnQgRmVhdHVyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2ZlYXR1cmVcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIlxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsICAgLi4uYXJncykge1xyXG4gICAgIFxyXG4gICAgc3dpdGNoIChjb21wb25lbnROYW1lKVxyXG4gICAgIHtcclxuICAgICAgICAgY2FzZSBcIlBpbm5lZEJsb2dcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPFBpbm5lZEJsb2cgZGF0YT17YXJnc1swXX0gYXJnczE9e2FyZ3NbMV19IC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkFjdGl2aXR5XCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBY3Rpdml0eSBhY3Rpdml0eT17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkFjdGl2aXR5XCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCcmFuZCBicmFuZD17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkZlYXR1cmVcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPEZlYXR1cmUgZmVhdHVyZT17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgKVxyXG4gICAgIH1cclxuICB9XHJcbiBcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyRHluYW1pY0NvbXBvbmVudChzb3VyY2UsICAgLi4uYXJncykge1xyXG4gICBcclxuICAgdmFyIGNvbnRlbnRCdWlsZGVyID0gPD48Lz5cclxuXHJcbiAgIGNvbnNvbGUubG9nKGNvbnRlbnRCdWlsZGVyKTtcclxuICAgXHJcbiAgIHNvdXJjZS5mb3JFYWNoKGR5bmFtaWNDb250ZW50ID0+IHtcclxuICAgICAgY29udGVudEJ1aWxkZXIgKz0gcmVzb2x2ZXJEeW5hbWljRXh0cmFjdChkeW5hbWljQ29udGVudClcclxuICAgfSk7XHJcbiAgIGNvbnNvbGUubG9nKFwiY29udGVudEJ1aWxkZXJcIik7XHJcbiAgIGNvbnNvbGUubG9nKGNvbnRlbnRCdWlsZGVyKTtcclxuXHJcbiAgIHJldHVybiBjb250ZW50QnVpbGRlcjtcclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtSW1hZ2VVcmlQZWZvcm0odXJpLCBjaGlsZHJlbiwgdGl0bGUsIGFsdCkge1xyXG4gICAgcmV0dXJuIHVyaS5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmkpIDogdXJpO1xyXG4gfVxyXG4gZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyRHluYW1pY0V4dHJhY3QoZHluYW1pY0NvbnRlbnQpIHsgXHJcbiAgIGNvbnNvbGUubG9nKFwiZHluYW1pY0NvbnRlbnRcIilcclxuICAgY29uc29sZS5sb2coZHluYW1pY0NvbnRlbnQpXHJcbiAgIGlmICgoZHluYW1pY0NvbnRlbnQuX19jb21wb25lbnQpLmluZGV4T2YoJ2R5bmFtaWNzLnBhZ2UtY29udGVudCcpICE9PSAtMSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBrZXk9e2R5bmFtaWNDb250ZW50LklkfSBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTEwIHRleHQtY2VudGVyIHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgIHtkeW5hbWljQ29udGVudC5OYW1lfVxyXG4gICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWF1dG8gbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPGRpdiBjbGFzcz1cIiBwdC0xMiBwYi0xMCByb3dcIj4gXHJcbiAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgdHJhbnNmb3JtSW1hZ2VVcmk9e3RyYW5zZm9ybUltYWdlVXJpUGVmb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPC9kaXY+ICBcclxuICAgKTtcclxuXHJcbiAgIGlmICgoZHluYW1pY0NvbnRlbnQuX19jb21wb25lbnQpLmluZGV4T2YoJ2R5bmFtaWNzLnBhZ2UtaW1hZ2UtY29udGVudCcpICE9PSAtMSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwdC0xMiBwYi0xMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHBiLTggbXQtMTIgdmlkZW8tY29udGVudCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBqdXN0aWZ5LWNlbnRlciBtci02IHJvdW5kZWQtbGcgc2hhZG93LW1kIHZpZGVvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1pbWFnZSBiZy1saWdodC1ibHVlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlQ2xhc3M9e1wiaW1hZ2UtZml0XCJ9ICBpbWFnZT17ZHluYW1pY0NvbnRlbnQ/LkltYWdlfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBiZy1ibHVlLTkwMCBiZy1vcGFjaXR5LTI1IHJvdW5kZWQtbGcgdmlkZW8taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXI0NFJLV3lmY0Z3XCIgY2xhc3M9XCJ2aWRlby1wb3B1cFwiPjxpIGNsYXNzPVwibG5pIGxuaS1wbGF5XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTAgbXQtMTIgY291bnRlci13cmFwcGVyIGxnOnBsLTE2IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjhzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi04IHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZHluYW1pY0NvbnRlbnQuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gIDwvZGl2PiAgXHJcbiAgICk7XHJcblxyXG4gICByZXR1cm4gPD48Lz5cclxuIH0iXSwic291cmNlUm9vdCI6IiJ9