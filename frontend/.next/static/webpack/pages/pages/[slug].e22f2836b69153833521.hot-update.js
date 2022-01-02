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
  var _business$Items,
      _this = this;

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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                    lineNumber: 112,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    "class": "text-white",
                    children: item.Description
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 29
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 25
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbXBvbmVudC1yZXNvbHZlci5qcyJdLCJuYW1lcyI6WyJyZXNvbHZlckNvbXBvbmVudCIsImNvbXBvbmVudE5hbWUiLCJyZXNvbHZlckR5bmFtaWNDb21wb25lbnQiLCJzb3VyY2UiLCJjb250ZW50QnVpbGRlciIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiZHluYW1pY0NvbnRlbnQiLCJyZXNvbHZlckR5bmFtaWNFeHRyYWN0IiwiX19jb21wb25lbnQiLCJpbmRleE9mIiwiTmFtZSIsIkNvbnRlbnQiLCJJbWFnZSIsIlRpdGxlIiwiRGVzY3JpcHRpb24iLCJidXNpbmVzcyIsIkl0ZW1zIiwibWFwIiwiaXRlbSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxpQkFBVCxDQUEyQkMsYUFBM0IsRUFBcUQ7QUFFeEQsVUFBUUEsYUFBUjtBQUVLLFNBQUssWUFBTDtBQUFtQiwwQkFDaEIsOERBQUMsaUVBQUQ7QUFBWSxZQUFJLGtEQUFoQjtBQUEyQixhQUFLO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEZ0I7O0FBR25CLFNBQUssVUFBTDtBQUFpQiwwQkFDZCw4REFBQyw4REFBRDtBQUFVLGdCQUFRO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYzs7QUFHakIsU0FBSyxVQUFMO0FBQWlCLDBCQUNkLDhEQUFDLDJEQUFEO0FBQU8sYUFBSztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYzs7QUFHakIsU0FBSyxTQUFMO0FBQWdCLDBCQUNiLDhEQUFDLDZEQUFEO0FBQVMsZUFBTztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGE7O0FBR2hCO0FBQ0EsMEJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURIO0FBZkw7QUFtQkQ7QUFHTSxTQUFTQyx3QkFBVCxDQUFrQ0MsTUFBbEMsRUFB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QVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQWdCSTtBQUFLLHFCQUFNLGdCQUFYO0FBQUEseUNBQ0VDLFFBQVEsQ0FBQ0MsS0FEWCxvREFDRSxnQkFBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGtDQUNoQjtBQUFLLHlCQUFPLG9FQUFvRUEsQ0FBQyxHQUFHLENBQXhFLENBQVo7QUFBQSx1Q0FDQTtBQUFLLDJCQUFNLDJCQUFYO0FBQUEsMENBQ0k7QUFBTSw2QkFBTSw4QkFBWjtBQUFBLDhCQUE0Q0QsSUFBSSxDQUFDTDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBRyw2QkFBTSxZQUFUO0FBQUEsOEJBQXVCSyxJQUFJLENBQUNKO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEZ0I7QUFBQSxhQUFwQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBb0RBLHNCQUFPLDZJQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvW3NsdWddLmUyMmYyODM2YjY5MTUzODMzNTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGlubmVkQmxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL3Bpbm5lZC1ibG9nXCJcclxuaW1wb3J0IEFjdGl2aXR5IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvYWN0aXZpdHlcIlxyXG5pbXBvcnQgQnJhbmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9icmFuZFwiXHJcbmltcG9ydCBGZWF0dXJlIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvZmVhdHVyZVwiXHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZXJDb21wb25lbnQoY29tcG9uZW50TmFtZSwgICAuLi5hcmdzKSB7XHJcbiAgICAgXHJcbiAgICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpXHJcbiAgICAge1xyXG4gICAgICAgICBjYXNlIFwiUGlubmVkQmxvZ1wiOiByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGlubmVkQmxvZyBkYXRhPXthcmdzWzBdfSBhcmdzMT17YXJnc1sxXX0gLz5cclxuICAgICAgICAgKVxyXG4gICAgICAgICBjYXNlIFwiQWN0aXZpdHlcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPEFjdGl2aXR5IGFjdGl2aXR5PXthcmdzWzBdfSAgLz5cclxuICAgICAgICAgKVxyXG4gICAgICAgICBjYXNlIFwiQWN0aXZpdHlcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPEJyYW5kIGJyYW5kPXthcmdzWzBdfSAgLz5cclxuICAgICAgICAgKVxyXG4gICAgICAgICBjYXNlIFwiRmVhdHVyZVwiOiByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RmVhdHVyZSBmZWF0dXJlPXthcmdzWzBdfSAgLz5cclxuICAgICAgICAgKVxyXG4gICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICApXHJcbiAgICAgfVxyXG4gIH1cclxuIFxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gcmVzb2x2ZXJEeW5hbWljQ29tcG9uZW50KHNvdXJjZSwgICAuLi5hcmdzKSB7XHJcbiAgIFxyXG4gICB2YXIgY29udGVudEJ1aWxkZXIgPSA8PjwvPlxyXG5cclxuICAgY29uc29sZS5sb2coY29udGVudEJ1aWxkZXIpO1xyXG4gICBcclxuICAgc291cmNlLmZvckVhY2goZHluYW1pY0NvbnRlbnQgPT4ge1xyXG4gICAgICBjb250ZW50QnVpbGRlciArPSByZXNvbHZlckR5bmFtaWNFeHRyYWN0KGR5bmFtaWNDb250ZW50KVxyXG4gICB9KTtcclxuICAgY29uc29sZS5sb2coXCJjb250ZW50QnVpbGRlclwiKTtcclxuICAgY29uc29sZS5sb2coY29udGVudEJ1aWxkZXIpO1xyXG5cclxuICAgcmV0dXJuIGNvbnRlbnRCdWlsZGVyO1xyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiByZXNvbHZlckR5bmFtaWNFeHRyYWN0KGR5bmFtaWNDb250ZW50KSB7IFxyXG5cclxuICAgaWYgKChkeW5hbWljQ29udGVudC5fX2NvbXBvbmVudCkuaW5kZXhPZignZHluYW1pY3MucGFnZS1jb250ZW50JykgIT09IC0xKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0yLzNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItMTAgdGV4dC1jZW50ZXIgc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAge2R5bmFtaWNDb250ZW50Lk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tYXV0byBsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiIHB0LTEyIHBiLTEwIHJvd1wiPiBcclxuICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2R5bmFtaWNDb250ZW50LkNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICApO1xyXG5cclxuICAgaWYgKChkeW5hbWljQ29udGVudC5fX2NvbXBvbmVudCkuaW5kZXhPZignZHluYW1pY3MucGFnZS1pbWFnZS1jb250ZW50JykgIT09IC0xKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgcGItOCBtdC0xMiB2aWRlby1jb250ZW50IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIG1yLTYgcm91bmRlZC1sZyBzaGFkb3ctbWQgdmlkZW8td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtkeW5hbWljQ29udGVudC5JbWFnZX0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgYmctYmx1ZS05MDAgYmctb3BhY2l0eS0yNSByb3VuZGVkLWxnIHZpZGVvLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1yNDRSS1d5ZmNGd1wiIGNsYXNzPVwidmlkZW8tcG9wdXBcIj48aSBjbGFzcz1cImxuaSBsbmktcGxheVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbC0wIG10LTEyIGNvdW50ZXItd3JhcHBlciBsZzpwbC0xNiB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC44c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItOCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2R5bmFtaWNDb250ZW50LlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZHluYW1pY0NvbnRlbnQuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICB7IGJ1c2luZXNzLkl0ZW1zPy5tYXAoKGl0ZW0sIGkpID0+ICggIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNpbmdsZS1jb3VudGVyIGNvdW50ZXItY29sb3ItXCIgKyAoaSArIDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGNvdW50ZXItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntpdGVtLlRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZVwiPntpdGVtLkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gIDwvZGl2PiAgXHJcbiAgICk7XHJcblxyXG4gICByZXR1cm4gPD48Lz5cclxuIH0iXSwic291cmNlUm9vdCI6IiJ9