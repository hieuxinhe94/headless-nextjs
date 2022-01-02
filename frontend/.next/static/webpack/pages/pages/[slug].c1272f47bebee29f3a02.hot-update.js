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
        lineNumber: 12,
        columnNumber: 13
      }, this);

    case "Activity":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_activity__WEBPACK_IMPORTED_MODULE_2__.default, {
        activity: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this);

    case "Activity":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_brand__WEBPACK_IMPORTED_MODULE_3__.default, {
        brand: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this);

    case "Feature":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_feature__WEBPACK_IMPORTED_MODULE_4__.default, {
        feature: arguments.length <= 1 ? undefined : arguments[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
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
            lineNumber: 54,
            columnNumber: 18
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "m-auto line"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "justify-center pt-12 row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_5___default()), {
        source: dynamicContent.Content,
        escapeHtml: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbXBvbmVudC1yZXNvbHZlci5qcyJdLCJuYW1lcyI6WyJyZXNvbHZlckNvbXBvbmVudCIsImNvbXBvbmVudE5hbWUiLCJyZXNvbHZlckR5bmFtaWNDb21wb25lbnQiLCJzb3VyY2UiLCJjb250ZW50QnVpbGRlciIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiZHluYW1pY0NvbnRlbnQiLCJyZXNvbHZlckR5bmFtaWNFeHRyYWN0IiwiX19jb21wb25lbnQiLCJpbmRleE9mIiwiTmFtZSIsIkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxpQkFBVCxDQUEyQkMsYUFBM0IsRUFBcUQ7QUFFeEQsVUFBUUEsYUFBUjtBQUVLLFNBQUssWUFBTDtBQUFtQiwwQkFDaEIsOERBQUMsaUVBQUQ7QUFBWSxZQUFJLGtEQUFoQjtBQUEyQixhQUFLO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEZ0I7O0FBR25CLFNBQUssVUFBTDtBQUFpQiwwQkFDZCw4REFBQyw4REFBRDtBQUFVLGdCQUFRO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYzs7QUFHakIsU0FBSyxVQUFMO0FBQWlCLDBCQUNkLDhEQUFDLDJEQUFEO0FBQU8sYUFBSztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYzs7QUFHakIsU0FBSyxTQUFMO0FBQWdCLDBCQUNiLDhEQUFDLDZEQUFEO0FBQVMsZUFBTztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGE7O0FBR2hCO0FBQ0EsMEJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURIO0FBZkw7QUFtQkQ7QUFHTSxTQUFTQyx3QkFBVCxDQUFrQ0MsTUFBbEMsRUFBcUQ7QUFFM0QsTUFBSUMsY0FBYyxnQkFBRyw2SUFBckI7O0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixjQUFaO0FBRUFELFFBQU0sQ0FBQ0ksT0FBUCxDQUFlLFVBQUFDLGNBQWMsRUFBSTtBQUM5Qkosa0JBQWMsSUFBSUssc0JBQXNCLENBQUNELGNBQUQsQ0FBeEM7QUFDRixHQUZEO0FBR0FILFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixjQUFaO0FBRUEsU0FBT0EsY0FBUDtBQUNEO0FBRU0sU0FBU0ssc0JBQVQsQ0FBZ0NELGNBQWhDLEVBQWdEO0FBRXJELE1BQUtBLGNBQWMsQ0FBQ0UsV0FBaEIsQ0FBNkJDLE9BQTdCLENBQXFDLHVCQUFyQyxNQUFrRSxDQUFDLENBQXZFLEVBQ0Esb0JBQ0c7QUFBSyxhQUFNLFdBQVg7QUFBQSw0QkFDQTtBQUFLLGVBQU0sb0JBQVg7QUFBQSw2QkFDSTtBQUFLLGlCQUFNLGlCQUFYO0FBQUEsK0JBQ0k7QUFBSyxtQkFBTSxpQ0FBWDtBQUFBLGtDQUNHO0FBQU0scUJBQVMsRUFBQyxVQUFoQjtBQUFBLHNCQUNDSCxjQUFjLENBQUNJO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREgsZUFLVTtBQUFLLHFCQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBWUE7QUFBSyxlQUFNLDBCQUFYO0FBQUEsNkJBQ0MsOERBQUMsdURBQUQ7QUFDZSxjQUFNLEVBQUVKLGNBQWMsQ0FBQ0ssT0FEdEM7QUFFZSxrQkFBVSxFQUFFO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFzQkEsc0JBQU8sNklBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYWdlcy9bc2x1Z10uYzEyNzJmNDdiZWJlZTI5ZjNhMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaW5uZWRCbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvcGlubmVkLWJsb2dcIlxyXG5pbXBvcnQgQWN0aXZpdHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9hY3Rpdml0eVwiXHJcbmltcG9ydCBCcmFuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2JyYW5kXCJcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9mZWF0dXJlXCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlckNvbXBvbmVudChjb21wb25lbnROYW1lLCAgIC4uLmFyZ3MpIHtcclxuICAgICBcclxuICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSlcclxuICAgICB7XHJcbiAgICAgICAgIGNhc2UgXCJQaW5uZWRCbG9nXCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQaW5uZWRCbG9nIGRhdGE9e2FyZ3NbMF19IGFyZ3MxPXthcmdzWzFdfSAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGNhc2UgXCJBY3Rpdml0eVwiOiByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QWN0aXZpdHkgYWN0aXZpdHk9e2FyZ3NbMF19ICAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGNhc2UgXCJBY3Rpdml0eVwiOiByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QnJhbmQgYnJhbmQ9e2FyZ3NbMF19ICAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGNhc2UgXCJGZWF0dXJlXCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGZWF0dXJlIGZlYXR1cmU9e2FyZ3NbMF19ICAvPlxyXG4gICAgICAgICApXHJcbiAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgIClcclxuICAgICB9XHJcbiAgfVxyXG4gXHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZXNvbHZlckR5bmFtaWNDb21wb25lbnQoc291cmNlLCAgIC4uLmFyZ3MpIHtcclxuICAgXHJcbiAgIHZhciBjb250ZW50QnVpbGRlciA9IDw+PC8+XHJcblxyXG4gICBjb25zb2xlLmxvZyhjb250ZW50QnVpbGRlcik7XHJcbiAgIFxyXG4gICBzb3VyY2UuZm9yRWFjaChkeW5hbWljQ29udGVudCA9PiB7XHJcbiAgICAgIGNvbnRlbnRCdWlsZGVyICs9IHJlc29sdmVyRHluYW1pY0V4dHJhY3QoZHluYW1pY0NvbnRlbnQpXHJcbiAgIH0pO1xyXG4gICBjb25zb2xlLmxvZyhcImNvbnRlbnRCdWlsZGVyXCIpO1xyXG4gICBjb25zb2xlLmxvZyhjb250ZW50QnVpbGRlcik7XHJcblxyXG4gICByZXR1cm4gY29udGVudEJ1aWxkZXI7XHJcbiB9XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyRHluYW1pY0V4dHJhY3QoZHluYW1pY0NvbnRlbnQpIHsgXHJcblxyXG4gICBpZiAoKGR5bmFtaWNDb250ZW50Ll9fY29tcG9uZW50KS5pbmRleE9mKCdkeW5hbWljcy5wYWdlLWNvbnRlbnQnKSAhPT0gLTEpXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi0xMCB0ZXh0LWNlbnRlciBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cclxuICAgICAgICAgICAgICAgICB7ZHluYW1pY0NvbnRlbnQuTmFtZX1cclxuICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS1hdXRvIGxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciBwdC0xMiByb3dcIj4gXHJcbiAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICk7XHJcblxyXG4gICByZXR1cm4gPD48Lz5cclxuIH0iXSwic291cmNlUm9vdCI6IiJ9