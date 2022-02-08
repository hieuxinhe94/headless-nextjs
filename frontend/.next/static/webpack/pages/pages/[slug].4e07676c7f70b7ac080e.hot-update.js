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

/***/ "./components/home/empty-box.js":
/*!**************************************!*\
  !*** ./components/home/empty-box.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\empty-box.js",
    _this = undefined;



var EmptyBox = function EmptyBox(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    "class": " pt-120",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "pb-10 text-center section-title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "m-auto line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 21
            }, _this), {
              message: message
            }]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = EmptyBox;
/* harmony default export */ __webpack_exports__["default"] = (EmptyBox);

var _c;

$RefreshReg$(_c, "EmptyBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2FydGljbGUtaGVyby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2VtcHR5LWJveC5qcyJdLCJuYW1lcyI6WyJQYWdlSGVybyIsImRhdGEiLCJjb2xvciIsImNlbnRyYWxJbWFnZSIsImNlbnRyYWxCZ0ltYWdlIiwiSW1hZ2UiLCJhdHRyaWJ1dGVzIiwidXJsIiwiZ2V0U3RyYXBpVVJMIiwiQmdJbWFnZSIsInRleHRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIkNlbnRyYWxUZXh0IiwiZGlzcGxheSIsIkNlbnRyYWxUZXh0RGVzY3JpcHRpb24iLCJFbXB0eUJveCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRWxDLE1BQUcsQ0FBQ0QsSUFBSixFQUFVLG9CQUFPLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUVWLE1BQUlFLFlBQUosRUFBaUJDLGNBQWpCOztBQUNBLHFCQUFHSCxJQUFJLENBQUNJLEtBQVIsNERBQUcsWUFBWUosSUFBZiw2Q0FBRyxpQkFBa0JLLFVBQWxCLENBQTZCQyxHQUFoQyxFQUFxQztBQUFBOztBQUMvQkosZ0JBQVksR0FBT0ssc0RBQVksc0JBQUtQLElBQUksQ0FBQ0ksS0FBVixzRUFBSyxhQUFZSixJQUFqQixzREFBSyxrQkFBa0JLLFVBQWxCLENBQTZCQyxHQUFsQyxDQUEvQjtBQUNMOztBQUNELHVCQUFHTixJQUFJLENBQUNRLE9BQVIsZ0VBQUcsY0FBY1IsSUFBakIsK0NBQUcsbUJBQW9CSyxVQUFwQixDQUErQkMsR0FBbEMsRUFBdUM7QUFBQTs7QUFDbkNILGtCQUFj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QUFBLHFCQURKLEVBRUs7QUFBQ0EscUJBQU8sRUFBUEE7QUFBRCxhQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBakJEOztLQUFNRCxRO0FBbUJOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL1tzbHVnXS40ZTA3Njc2YzdmNzBiN2FjMDgwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5pbXBvcnQgRW1wdHlCb3ggZnJvbSBcIi4vZW1wdHktYm94XCI7XHJcblxyXG5jb25zdCBQYWdlSGVybyA9ICh7IGRhdGEsIGNvbG9yIH0pID0+IHtcclxuIFxyXG4gICAgaWYoIWRhdGEpIHJldHVybiA8RW1wdHlCb3ggLz5cclxuXHJcbiAgICB2YXIgY2VudHJhbEltYWdlLGNlbnRyYWxCZ0ltYWdlO1xyXG4gICAgaWYoZGF0YS5JbWFnZT8uZGF0YT8uYXR0cmlidXRlcy51cmwpIHtcclxuICAgICAgICAgIGNlbnRyYWxJbWFnZSA9ICAgICBnZXRTdHJhcGlVUkwoKSArIGRhdGEuSW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXMudXJsO1xyXG4gICAgfVxyXG4gICAgaWYoZGF0YS5CZ0ltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzLnVybCkge1xyXG4gICAgICAgIGNlbnRyYWxCZ0ltYWdlID0gICAgIGdldFN0cmFwaVVSTCgpICsgZGF0YS5CZ0ltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzLnVybDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGV4dENvbG9yICA9ICd0ZXh0LXdoaXRlJztcclxuICAgIGlmKGNvbG9yKSB7XHJcbiAgICAgICAgdGV4dENvbG9yID0gY29sb3JcclxuICAgIH0gXHJcbiAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCIgXCIgY2xhc3M9XCJoZWFkZXItaGVyb1wiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogIGB1cmwoYCtjZW50cmFsQmdJbWFnZStgKWAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0zMiBtYi0xMiB0ZXh0LWNlbnRlciBsZzpwdC00OCBoZWFkZXItaGVyby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9e1widGV4dC00eGwgZm9udC1saWdodCBsZWFkaW5nLXRpZ2h0IGhlYWRlci1zdWItdGl0bGUgd293IGZhZGVJblVwIFwiICArIHRleHRDb2xvcn0gZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+eyBkYXRhPy5DZW50cmFsVGV4dH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBoZWFkZXItaGVyby1pbWFnZSB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIxLjRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIHNyYz17Y2VudHJhbEltYWdlfSBhbHQ9XCJoZXJvXCIgc3R5bGU9eyB7IGRpc3BsYXk6IGNlbnRyYWxJbWFnZSAhPSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyB9IH0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0xNiBtYi0xMiB0ZXh0LWNlbnRlciBsZzpwdC0xNiBoZWFkZXItaGVyby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPXtcIm1iLTMgdGV4dC00eGwgZm9udC1ib2xkIGhlYWRlci10aXRsZSB3b3cgZmFkZUluVXAgXCIgKyB0ZXh0Q29sb3J9ICBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YT8uQ2VudHJhbFRleHREZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPGRpdiBpZD1cInBhcnRpY2xlcy0xXCIgY2xhc3M9XCJwYXJ0aWNsZXNcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlcm9cclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCIgXHJcblxyXG5jb25zdCBFbXB0eUJveCA9ICh7IG1lc3NhZ2UgfSkgPT4ge1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uICBjbGFzcz1cIiBwdC0xMjBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0yLzNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi0xMCB0ZXh0LWNlbnRlciBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tYXV0byBsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3ttZXNzYWdlfX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgIFxyXG4gICAgPC9kaXY+ICBcclxuPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wdHlCb3ggXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9