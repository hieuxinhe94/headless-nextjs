self["webpackHotUpdate_N_E"]("pages/pages/[slug]",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\layout.js",
    _this = undefined;





var Layout = function Layout(_ref) {
  var children = _ref.children,
      categories = _ref.categories,
      layout = _ref.layout,
      color = _ref.color;
  var textColor = 'text-white';

  if (color) {
    textColor = color;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "hidden preloader",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "loader",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "ytp-spinner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "ytp-spinner-container",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "ytp-spinner-rotator",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "ytp-spinner-left",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "ytp-spinner-circle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "ytp-spinner-right",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "ytp-spinner-circle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      "class": "header-area",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "navbar-area",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "container relative",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "w-full",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
                "class": "flex items-center justify-between navbar navbar-expand-lg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "mr-4 navbar-brand " + textColor,
                  href: "~",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                    image: layout.LogoImage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 33
                  }, _this), layout.SiteInfo.SiteName]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 29
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  "class": "block navbar-toggler focus:outline-none lg:hidden",
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navbarOne",
                  "aria-controls": "navbarOne",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    "class": "toggler-icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    "class": "toggler-icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    "class": "toggler-icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 33
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 29
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none",
                  id: "navbarOne",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__.default, {
                    color: textColor,
                    categories: categories
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 29
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 29
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }, _this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_1__.default, {
      footer: layout.Footer,
      siteInfo: layout.SiteInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      "class": "back-to-top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        "class": "lni lni-chevron-up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 37
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJjYXRlZ29yaWVzIiwibGF5b3V0IiwiY29sb3IiLCJ0ZXh0Q29sb3IiLCJMb2dvSW1hZ2UiLCJTaXRlSW5mbyIsIlNpdGVOYW1lIiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTZDO0FBQUEsTUFBMUNDLFFBQTBDLFFBQTFDQSxRQUEwQztBQUFBLE1BQWhDQyxVQUFnQyxRQUFoQ0EsVUFBZ0M7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3hELE1BQUlDLFNBQVMsR0FBRyxZQUFoQjs7QUFDQSxNQUFHRCxLQUFILEVBQVU7QUFDTkMsYUFBUyxHQUFHRCxLQUFaO0FBQ0g7O0FBQ0Qsc0JBQ0Y7QUFBQSw0QkFDRTtBQUFLLGVBQU0sa0JBQVg7QUFBQSw2QkFDUTtBQUFLLGlCQUFNLFFBQVg7QUFBQSwrQkFDSTtBQUFLLG1CQUFNLGFBQVg7QUFBQSxpQ0FDSTtBQUFLLHFCQUFNLHVCQUFYO0FBQUEsbUNBQ0k7QUFBSyx1QkFBTSxxQkFBWDtBQUFBLHNDQUNJO0FBQUsseUJBQU0sa0JBQVg7QUFBQSx1Q0FDSTtBQUFLLDJCQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFJSTtBQUFLLHlCQUFNLG1CQUFYO0FBQUEsdUNBQ0k7QUFBSywyQkFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWtCRTtBQUFRLGVBQU0sYUFBZDtBQUFBLDZCQUNJO0FBQUssaUJBQU0sYUFBWDtBQUFBLCtCQUNJO0FBQUssbUJBQU0sb0JBQVg7QUFBQSxpQ0FDSTtBQUFLLHFCQUFNLEtBQVg7QUFBQSxtQ0FDSTtBQUFLLHVCQUFNLFFBQVg7QUFBQSxxQ0FDSTtBQUFLLHlCQUFNLDJEQUFYO0FBQUEsd0NBQ0k7QUFBRywyQkFBUyxFQUFHLHVCQUF1QkMsU0FBdEM7QUFBaUQsc0JBQUksRUFBQyxHQUF0RDtBQUFBLDBDQUVJLDhEQUFDLHNEQUFEO0FBQWEseUJBQUssRUFBRUYsTUFBTSxDQUFDRztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKLEVBR0tILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkMsUUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBTUk7QUFBUSwyQkFBTSxtREFBZDtBQUFrRSxzQkFBSSxFQUFDLFFBQXZFO0FBQWdGLGlDQUFZLFVBQTVGO0FBQXVHLGlDQUFZLFlBQW5IO0FBQWdJLG1DQUFjLFdBQTlJO0FBQTBKLG1DQUFjLE9BQXhLO0FBQWdMLGdDQUFXLG1CQUEzTDtBQUFBLDBDQUNJO0FBQU0sNkJBQU07QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBTSw2QkFBTTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkosZUFHSTtBQUFNLDZCQUFNO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkosZUFZSTtBQUFLLDJCQUFNLGtMQUFYO0FBQThMLG9CQUFFLEVBQUMsV0FBak07QUFBQSx5Q0FFQSw4REFBQyxvREFBRDtBQUFLLHlCQUFLLEVBQUVILFNBQVo7QUFBdUIsOEJBQVUsRUFBRUg7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkYsRUF1REdELFFBdkRILGVBeURFLDhEQUFDLDRDQUFEO0FBQVEsWUFBTSxFQUFFRSxNQUFNLENBQUNNLE1BQXZCO0FBQStCLGNBQVEsRUFBRU4sTUFBTSxDQUFDSTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekRGLGVBMERFO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBWSxlQUFNLGFBQWxCO0FBQUEsNkJBQWdDO0FBQUcsaUJBQU07QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExREY7QUFBQSxrQkFERTtBQTZESCxDQWxFRDs7S0FBTVAsTTtBQW9FTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYWdlcy9bc2x1Z10uZTI5ZTZmMmE0ZmZhNGZmMTE5YzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL25hdlwiXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBjYXRlZ29yaWVzLCBsYXlvdXQsIGNvbG9yIH0pID0+IHtcbiAgICB2YXIgdGV4dENvbG9yID0gJ3RleHQtd2hpdGUnIDtcbiAgICBpZihjb2xvcikge1xuICAgICAgICB0ZXh0Q29sb3IgPSBjb2xvclxuICAgIH0gIFxuICAgIHJldHVybihcbiAgPD5cbiAgICA8ZGl2IGNsYXNzPVwiaGlkZGVuIHByZWxvYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXItcm90YXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1hcmVhXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG5hdmJhciBuYXZiYXItZXhwYW5kLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsgXCJtci00IG5hdmJhci1icmFuZCBcIiArIHRleHRDb2xvcn0gaHJlZj1cIn5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtob21lcGFnZS5hdHRyaWJ1dGVzLkxvZ29JbWFnZS5hdHRyaWJ1dGVzLnVybCB9IGFsdD1cIkxvZ29cIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtsYXlvdXQuTG9nb0ltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGF5b3V0LlNpdGVJbmZvLlNpdGVOYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJsb2NrIG5hdmJhci10b2dnbGVyIGZvY3VzOm91dGxpbmUtbm9uZSBsZzpoaWRkZW5cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck9uZVwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJPbmVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBsZWZ0LTAgei0yMCBoaWRkZW4gdy1mdWxsIHB4LTUgcHktMyBkdXJhdGlvbi0zMDAgYmctd2hpdGUgc2hhZG93IGxnOnctYXV0byBjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UgbGc6YmxvY2sgdG9wLTEwMCBtdC1mdWxsIGxnOnN0YXRpYyBsZzpiZy10cmFuc3BhcmVudCBsZzpzaGFkb3ctbm9uZVwiIGlkPVwibmF2YmFyT25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjb2xvcj17dGV4dENvbG9yfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzcz1cImFic29sdXRlIHJpZ2h0LTAgaGlkZGVuIG10LTIgbXItMjQgbmF2YmFyLWJ0biBzbTppbmxpbmUtYmxvY2sgbGc6bXQtMCBsZzpzdGF0aWMgbGc6bXItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1haW4tYnRuIGdyYWRpZW50LWJ0blwiIGRhdGEtc2Nyb2xsLW5hdj1cIjBcIiBocmVmPXtob21lcGFnZS5hdHRyaWJ1dGVzLkhlcm8/LlF1aWNrTGluaz8uSHJlZn0gcmVsPVwibm9mb2xsb3dcIj57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lcGFnZS5hdHRyaWJ1dGVzLkhlcm8/LlF1aWNrTGluaz8uVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+ICBcbiAgICA8L2hlYWRlcj5cblxuICAgIFxuICAgIHtjaGlsZHJlbn1cbiAgICAgXG4gICAgPEZvb3RlciBmb290ZXI9e2xheW91dC5Gb290ZXJ9IHNpdGVJbmZvPXtsYXlvdXQuU2l0ZUluZm99IC8+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJhY2stdG8tdG9wXCI+PGkgY2xhc3M9XCJsbmkgbG5pLWNoZXZyb24tdXBcIj48L2k+PC9hPlxuICA8Lz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==