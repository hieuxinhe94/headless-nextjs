self["webpackHotUpdate_N_E"]("pages/pages/[slug]",{

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
        lineNumber: 13,
        columnNumber: 13
      }, this);

    case "Activity":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_activity__WEBPACK_IMPORTED_MODULE_2__.default, {
        activity: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this);

    case "Activity":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_brand__WEBPACK_IMPORTED_MODULE_3__.default, {
        brand: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this);

    case "Feature":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_feature__WEBPACK_IMPORTED_MODULE_4__.default, {
        feature: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
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
function resolverDynamicExtract(dynamicContent) {
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
            lineNumber: 55,
            columnNumber: 18
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "m-auto line"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": " pt-12 pb-10 row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_5___default()), {
        source: dynamicContent.Content,
        escapeHtml: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 7
  }, this);
  if (dynamicContent.__component.indexOf('dynamics.page-image-content') !== -1) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    "class": "container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "w-full lg:w-1/2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "relative pb-8 mt-12 video-content wow fadeIn",
          "data-wow-duration": "1s",
          "data-wow-delay": "0.5s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "relative mr-6 rounded-lg shadow-md video-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "video-image",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_6__.default, {
                image: dynamicContent.Image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
                lineNumber: 95,
                columnNumber: 27
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_5___default()), {
                source: dynamicContent.Title,
                escapeHtml: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 27
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 23
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              "class": "text",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_5___default()), {
                source: dynamicContent.Description,
                escapeHtml: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 23
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbXBvbmVudC1yZXNvbHZlci5qcyJdLCJuYW1lcyI6WyJyZXNvbHZlckNvbXBvbmVudCIsImNvbXBvbmVudE5hbWUiLCJyZXNvbHZlckR5bmFtaWNDb21wb25lbnQiLCJzb3VyY2UiLCJjb250ZW50QnVpbGRlciIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiZHluYW1pY0NvbnRlbnQiLCJyZXNvbHZlckR5bmFtaWNFeHRyYWN0IiwiX19jb21wb25lbnQiLCJpbmRleE9mIiwiTmFtZSIsIkNvbnRlbnQiLCJJbWFnZSIsIlRpdGxlIiwiRGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxpQkFBVCxDQUEyQkMsYUFBM0IsRUFBcUQ7QUFFeEQsVUFBUUEsYUFBUjtBQUVLLFNBQUssWUFBTDtBQUFtQiwwQkFDaEIsOERBQUMsaUVBQUQ7QUFBWSxZQUFJLGtEQUFoQjtBQUEyQixhQUFLO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEZ0I7O0FBR25CLFNBQUssVUFBTDtBQUFpQiwwQkFDZCw4REFBQyw4REFBRDtBQUFVLGdCQUFRO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYzs7QUFHakIsU0FBSyxVQUFMO0FBQWlCLDBCQUNkLDhEQUFDLDJEQUFEO0FBQU8sYUFBSztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYzs7QUFHakIsU0FBSyxTQUFMO0FBQWdCLDBCQUNiLDhEQUFDLDZEQUFEO0FBQVMsZUFBTztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGE7O0FBR2hCO0FBQ0EsMEJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURIO0FBZkw7QUFtQkQ7QUFHTSxTQUFTQyx3QkFBVCxDQUFrQ0MsTUFBbEMsRUFBcUQ7QUFFM0QsTUFBSUMsY0FBYyxnQkFBRyw2SUFBckI7O0FB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QTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUEwQ0Esc0JBQU8sNklBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYWdlcy9bc2x1Z10uOTUzZWU5ZTZhYzY4ZThhNjljMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaW5uZWRCbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvcGlubmVkLWJsb2dcIlxyXG5pbXBvcnQgQWN0aXZpdHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9hY3Rpdml0eVwiXHJcbmltcG9ydCBCcmFuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2JyYW5kXCJcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9mZWF0dXJlXCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlckNvbXBvbmVudChjb21wb25lbnROYW1lLCAgIC4uLmFyZ3MpIHtcclxuICAgICBcclxuICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSlcclxuICAgICB7XHJcbiAgICAgICAgIGNhc2UgXCJQaW5uZWRCbG9nXCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQaW5uZWRCbG9nIGRhdGE9e2FyZ3NbMF19IGFyZ3MxPXthcmdzWzFdfSAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGNhc2UgXCJBY3Rpdml0eVwiOiByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QWN0aXZpdHkgYWN0aXZpdHk9e2FyZ3NbMF19ICAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGNhc2UgXCJBY3Rpdml0eVwiOiByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QnJhbmQgYnJhbmQ9e2FyZ3NbMF19ICAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGNhc2UgXCJGZWF0dXJlXCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGZWF0dXJlIGZlYXR1cmU9e2FyZ3NbMF19ICAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgIClcclxuICAgICB9XHJcbiAgfVxyXG4gXHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZXNvbHZlckR5bmFtaWNDb21wb25lbnQoc291cmNlLCAgIC4uLmFyZ3MpIHtcclxuICAgXHJcbiAgIHZhciBjb250ZW50QnVpbGRlciA9IDw+PC8+XHJcblxyXG4gICBjb25zb2xlLmxvZyhjb250ZW50QnVpbGRlcik7XHJcbiAgIFxyXG4gICBzb3VyY2UuZm9yRWFjaChkeW5hbWljQ29udGVudCA9PiB7XHJcbiAgICAgIGNvbnRlbnRCdWlsZGVyICs9IHJlc29sdmVyRHluYW1pY0V4dHJhY3QoZHluYW1pY0NvbnRlbnQpXHJcbiAgIH0pO1xyXG4gICBjb25zb2xlLmxvZyhcImNvbnRlbnRCdWlsZGVyXCIpO1xyXG4gICBjb25zb2xlLmxvZyhjb250ZW50QnVpbGRlcik7XHJcblxyXG4gICByZXR1cm4gY29udGVudEJ1aWxkZXI7XHJcbiB9XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyRHluYW1pY0V4dHJhY3QoZHluYW1pY0NvbnRlbnQpIHsgXHJcblxyXG4gICBpZiAoKGR5bmFtaWNDb250ZW50Ll9fY29tcG9uZW50KS5pbmRleE9mKCdkeW5hbWljcy5wYWdlLWNvbnRlbnQnKSAhPT0gLTEpXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi0xMCB0ZXh0LWNlbnRlciBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cclxuICAgICAgICAgICAgICAgICB7ZHluYW1pY0NvbnRlbnQuTmFtZX1cclxuICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS1hdXRvIGxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCIgcHQtMTIgcGItMTAgcm93XCI+IFxyXG4gICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZHluYW1pY0NvbnRlbnQuQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICk7XHJcblxyXG4gICBpZiAoKGR5bmFtaWNDb250ZW50Ll9fY29tcG9uZW50KS5pbmRleE9mKCdkeW5hbWljcy5wYWdlLWltYWdlLWNvbnRlbnQnKSAhPT0gLTEpXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBwYi04IG10LTEyIHZpZGVvLWNvbnRlbnQgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgbXItNiByb3VuZGVkLWxnIHNoYWRvdy1tZCB2aWRlby13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8taW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2U9e2R5bmFtaWNDb250ZW50LkltYWdlfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBiZy1ibHVlLTkwMCBiZy1vcGFjaXR5LTI1IHJvdW5kZWQtbGcgdmlkZW8taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXI0NFJLV3lmY0Z3XCIgY2xhc3M9XCJ2aWRlby1wb3B1cFwiPjxpIGNsYXNzPVwibG5pIGxuaS1wbGF5XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTAgbXQtMTIgY291bnRlci13cmFwcGVyIGxnOnBsLTE2IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjhzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi04IHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZHluYW1pY0NvbnRlbnQuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gIDwvZGl2PiAgXHJcbiAgICk7XHJcblxyXG4gICByZXR1cm4gPD48Lz5cclxuIH0iXSwic291cmNlUm9vdCI6IiJ9