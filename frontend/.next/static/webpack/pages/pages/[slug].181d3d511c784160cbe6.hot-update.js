self["webpackHotUpdate_N_E"]("pages/pages/[slug]",{

/***/ "./components/image.js":
/*!*****************************!*\
  !*** ./components/image.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\image.js",
    _this = undefined;





var CustomImage = function CustomImage(_ref) {
  var _image$data;

  var image = _ref.image,
      style = _ref.style,
      _ref$imageClass = _ref.imageClass,
      imageClass = _ref$imageClass === void 0 ? null : _ref$imageClass;

  if (!image) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        "class": "blank",
        src: "blank",
        alt: "blank image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this);
  }

  if ((image === null || image === void 0 ? void 0 : (_image$data = image.data) === null || _image$data === void 0 ? void 0 : _image$data.attributes) == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        "class": "blank",
        src: "blank",
        alt: "blank image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this);
  }

  var _image$data$attribute = image.data.attributes,
      url = _image$data$attribute.url,
      alternativeText = _image$data$attribute.alternativeText,
      width = _image$data$attribute.width,
      height = _image$data$attribute.height;
  var srcUrl = (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.getStrapiURL)() + url;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: "#",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      "class": imageClass,
      src: srcUrl,
      alt: "Logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this) // <NextImage
  //   // loader={loader}
  //   layout="responsive"
  //   width={100}
  //   height={200}
  //   objectFit="contain"
  //   src={ srcUrl}
  //   // alt={alternativeText || ""}
  // />
  ;
};

_c = CustomImage;
/* harmony default export */ __webpack_exports__["default"] = (CustomImage);

var _c;

$RefreshReg$(_c, "CustomImage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS5qcyJdLCJuYW1lcyI6WyJDdXN0b21JbWFnZSIsImltYWdlIiwic3R5bGUiLCJpbWFnZUNsYXNzIiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJ3aWR0aCIsImhlaWdodCIsInNyY1VybCIsImdldFN0cmFwaVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF5QztBQUFBOztBQUFBLE1BQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSxNQUEvQkMsS0FBK0IsUUFBL0JBLEtBQStCO0FBQUEsNkJBQXhCQyxVQUF3QjtBQUFBLE1BQXhCQSxVQUF3QixnQ0FBWCxJQUFXOztBQUUzRCxNQUFHLENBQUNGLEtBQUosRUFBVztBQUNULHdCQUFRO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBQSw2QkFDTjtBQUFLLGlCQUFNLE9BQVg7QUFBbUIsV0FBRyxFQUFDLE9BQXZCO0FBQStCLFdBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBR0Q7O0FBRUQsTUFBRyxDQUFBQSxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLDJCQUFBQSxLQUFLLENBQUVHLElBQVAsNERBQWFDLFVBQWIsS0FBMkIsSUFBOUIsRUFBb0M7QUFDbEMsd0JBQVE7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFBLDZCQUNOO0FBQUssaUJBQU0sT0FBWDtBQUFtQixXQUFHLEVBQUMsT0FBdkI7QUFBK0IsV0FBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFHRDs7QUFaMEQsOEJBYVhKLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxVQWJBO0FBQUEsTUFhbkRDLEdBYm1ELHlCQWFuREEsR0FibUQ7QUFBQSxNQWE5Q0MsZUFiOEMseUJBYTlDQSxlQWI4QztBQUFBLE1BYTdCQyxLQWI2Qix5QkFhN0JBLEtBYjZCO0FBQUEsTUFhdEJDLE1BYnNCLHlCQWF0QkEsTUFic0I7QUFlM0QsTUFBTUMsTUFBTSxHQUFHQyxzREFBWSxLQUFLTCxHQUFoQztBQUNBLHNCQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQSwyQkFDSTtBQUFLLGVBQU9ILFVBQVo7QUFBd0IsU0FBRyxFQUFFTyxNQUE3QjtBQUFxQyxTQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixDQUtFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJGO0FBZUQsQ0EvQkQ7O0tBQU1WLFc7QUFpQ04sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvW3NsdWddLjE4MWQzZDUxMWM3ODQxNjBjYmU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxyXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcclxuXHJcbmNvbnN0IEN1c3RvbUltYWdlID0gKHsgaW1hZ2UsIHN0eWxlLCBpbWFnZUNsYXNzID0gbnVsbCB9KSA9PiB7XHJcblxyXG4gIGlmKCFpbWFnZSkge1xyXG4gICAgcmV0dXJuICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiYmxhbmtcIiBzcmM9XCJibGFua1wiIGFsdD1cImJsYW5rIGltYWdlXCIgLz5cclxuICAgIDwvYT5cclxuICB9XHJcblxyXG4gIGlmKGltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzID09IG51bGwpIHtcclxuICAgIHJldHVybiAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgPGltZyBjbGFzcz1cImJsYW5rXCIgc3JjPVwiYmxhbmtcIiBhbHQ9XCJibGFuayBpbWFnZVwiIC8+XHJcbiAgICA8L2E+XHJcbiAgfVxyXG4gIGNvbnN0IHsgdXJsLCBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLmRhdGEuYXR0cmlidXRlcztcclxuIFxyXG4gIGNvbnN0IHNyY1VybCA9IGdldFN0cmFwaVVSTCgpICsgdXJsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9e2ltYWdlQ2xhc3N9IHNyYz17c3JjVXJsfSBhbHQ9XCJMb2dvXCIgLz5cclxuICAgIDwvYT5cclxuICAgXHJcbiAgICAvLyA8TmV4dEltYWdlXHJcbiAgICAvLyAgIC8vIGxvYWRlcj17bG9hZGVyfVxyXG4gICAgLy8gICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgIC8vICAgd2lkdGg9ezEwMH1cclxuICAgIC8vICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAvLyAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgLy8gICBzcmM9eyBzcmNVcmx9XHJcbiAgICAvLyAgIC8vIGFsdD17YWx0ZXJuYXRpdmVUZXh0IHx8IFwiXCJ9XHJcbiAgICAvLyAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tSW1hZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==