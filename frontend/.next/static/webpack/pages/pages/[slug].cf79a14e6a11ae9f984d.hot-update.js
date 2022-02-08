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
    return;

    /*#__PURE__*/
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      "class": "blank",
      src: "blank",
      alt: "blank image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this);
  }

  if ((image === null || image === void 0 ? void 0 : (_image$data = image.data) === null || _image$data === void 0 ? void 0 : _image$data.attributes) == null) {
    return;

    /*#__PURE__*/
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      "class": "blank",
      src: "blank",
      alt: "blank image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this);
  }

  var _image$data$attribute = image.data.attributes,
      url = _image$data$attribute.url,
      alternativeText = _image$data$attribute.alternativeText,
      width = _image$data$attribute.width,
      height = _image$data$attribute.height;
  var srcUrl = (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.getStrapiURL)() + url;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    "class": imageClass,
    src: srcUrl,
    alt: "Logo"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2FydGljbGUtaGVyby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS5qcyJdLCJuYW1lcyI6WyJQYWdlSGVybyIsImRhdGEiLCJjb2xvciIsImNlbnRyYWxJbWFnZSIsImNlbnRyYWxCZ0ltYWdlIiwiSW1hZ2UiLCJhdHRyaWJ1dGVzIiwidXJsIiwiZ2V0U3RyYXBpVVJMIiwiQmdJbWFnZSIsInRleHRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIkNlbnRyYWxUZXh0IiwiZGlzcGxheSIsIkNlbnRyYWxUZXh0RGVzY3JpcHRpb24iLCJDdXN0b21JbWFnZSIsImltYWdlIiwic3R5bGUiLCJpbWFnZUNsYXNzIiwiYWx0ZXJuYXRpdmVUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmNVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRWxDLE1BQUcsQ0FBQ0QsSUFBSixFQUFVLG9CQUFPLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUVWLE1BQUlFLFlBQUosRUFBaUJDLGNBQWpCOztBQUNBLHFCQUFHSCxJQUFJLENBQUNJLEtBQVIsNERBQUcsWUFBWUosSUFBZiw2Q0FBRyxpQkFBa0JLLFVBQWxCLENBQTZCQyxHQUFoQyxFQUFxQztBQUFBOztBQUMvQkosZ0JBQVksR0FBT0ssc0RBQVksc0JBQUtQLElBQUksQ0FBQ0ksS0FBVixzRUFBSyxhQUFZSixJQUFqQixzREFBSyxrQkFBa0JLLFVBQWxCLENBQTZCQyxHQUFsQyxDQUEvQjtBQUNMOztBQUNELHVCQUFHTixJQUFJLENBQUNRLE9BQVIsZ0VBQUcsY0FBY1IsSUFBakIs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RUFBVztBQUNUOztBQUNFO0FBQUE7QUFBSyxlQUFNLE9BQVg7QUFBbUIsU0FBRyxFQUFDLE9BQXZCO0FBQStCLFNBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUg7O0FBRUQsTUFBRyxDQUFBQSxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLDJCQUFBQSxLQUFLLENBQUVmLElBQVAsNERBQWFLLFVBQWIsS0FBMkIsSUFBOUIsRUFBb0M7QUFDbEM7O0FBQ0U7QUFBQTtBQUFLLGVBQU0sT0FBWDtBQUFtQixTQUFHLEVBQUMsT0FBdkI7QUFBK0IsU0FBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSDs7QUFaMEQsOEJBYVhVLEtBQUssQ0FBQ2YsSUFBTixDQUFXSyxVQWJBO0FBQUEsTUFhbkRDLEdBYm1ELHlCQWFuREEsR0FibUQ7QUFBQSxNQWE5Q1ksZUFiOEMseUJBYTlDQSxlQWI4QztBQUFBLE1BYTdCQyxLQWI2Qix5QkFhN0JBLEtBYjZCO0FBQUEsTUFhdEJDLE1BYnNCLHlCQWF0QkEsTUFic0I7QUFlM0QsTUFBTUMsTUFBTSxHQUFHZCxzREFBWSxLQUFLRCxHQUFoQztBQUNBLHNCQUVNO0FBQUssYUFBT1csVUFBWjtBQUF3QixPQUFHLEVBQUVJLE1BQTdCO0FBQXFDLE9BQUcsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRk4sQ0FLRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiRjtBQWVELENBL0JEOztLQUFNUCxXO0FBaUNOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL1tzbHVnXS5jZjc5YTE0ZTZhMTFhZTlmOTg0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5pbXBvcnQgRW1wdHlCb3ggZnJvbSBcIi4vZW1wdHktYm94XCI7XHJcblxyXG5jb25zdCBQYWdlSGVybyA9ICh7IGRhdGEsIGNvbG9yIH0pID0+IHtcclxuIFxyXG4gICAgaWYoIWRhdGEpIHJldHVybiA8RW1wdHlCb3ggIC8+XHJcblxyXG4gICAgdmFyIGNlbnRyYWxJbWFnZSxjZW50cmFsQmdJbWFnZTtcclxuICAgIGlmKGRhdGEuSW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXMudXJsKSB7XHJcbiAgICAgICAgICBjZW50cmFsSW1hZ2UgPSAgICAgZ2V0U3RyYXBpVVJMKCkgKyBkYXRhLkltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzLnVybDtcclxuICAgIH1cclxuICAgIGlmKGRhdGEuQmdJbWFnZT8uZGF0YT8uYXR0cmlidXRlcy51cmwpIHtcclxuICAgICAgICBjZW50cmFsQmdJbWFnZSA9ICAgICBnZXRTdHJhcGlVUkwoKSArIGRhdGEuQmdJbWFnZT8uZGF0YT8uYXR0cmlidXRlcy51cmw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRleHRDb2xvciAgPSAndGV4dC13aGl0ZSc7XHJcbiAgICBpZihjb2xvcikge1xyXG4gICAgICAgIHRleHRDb2xvciA9IGNvbG9yXHJcbiAgICB9IFxyXG4gICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiIFwiIGNsYXNzPVwiaGVhZGVyLWhlcm9cIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICBgdXJsKGArY2VudHJhbEJnSW1hZ2UrYClgIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMzIgbWItMTIgdGV4dC1jZW50ZXIgbGc6cHQtNDggaGVhZGVyLWhlcm8tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPXtcInRleHQtNHhsIGZvbnQtbGlnaHQgbGVhZGluZy10aWdodCBoZWFkZXItc3ViLXRpdGxlIHdvdyBmYWRlSW5VcCBcIiAgKyB0ZXh0Q29sb3J9IGRhdGEtd293LWR1cmF0aW9uPVwiMS4zc1wiIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiPnsgZGF0YT8uQ2VudHJhbFRleHR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgaGVhZGVyLWhlcm8taW1hZ2Ugd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMS4zc1wiIGRhdGEtd293LWRlbGF5PVwiMS40c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiBzcmM9e2NlbnRyYWxJbWFnZX0gYWx0PVwiaGVyb1wiIHN0eWxlPXsgeyBkaXNwbGF5OiBjZW50cmFsSW1hZ2UgIT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScgfSB9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMTYgbWItMTIgdGV4dC1jZW50ZXIgbGc6cHQtMTYgaGVhZGVyLWhlcm8tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz17XCJtYi0zIHRleHQtNHhsIGZvbnQtYm9sZCBoZWFkZXItdGl0bGUgd293IGZhZGVJblVwIFwiICsgdGV4dENvbG9yfSAgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkYXRhPy5DZW50cmFsVGV4dERlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFydGljbGVzLTFcIiBjbGFzcz1cInBhcnRpY2xlc1wiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVyb1xyXG5cclxuIiwiaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcclxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi9saWIvYXBpXCI7XHJcblxyXG5jb25zdCBDdXN0b21JbWFnZSA9ICh7IGltYWdlLCBzdHlsZSwgaW1hZ2VDbGFzcyA9IG51bGwgfSkgPT4ge1xyXG5cclxuICBpZighaW1hZ2UpIHtcclxuICAgIHJldHVybiAgIFxyXG4gICAgICA8aW1nIGNsYXNzPVwiYmxhbmtcIiBzcmM9XCJibGFua1wiIGFsdD1cImJsYW5rIGltYWdlXCIgLz5cclxuICAgXHJcbiAgfVxyXG5cclxuICBpZihpbWFnZT8uZGF0YT8uYXR0cmlidXRlcyA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gICBcclxuICAgICAgPGltZyBjbGFzcz1cImJsYW5rXCIgc3JjPVwiYmxhbmtcIiBhbHQ9XCJibGFuayBpbWFnZVwiIC8+XHJcbiAgIFxyXG4gIH1cclxuICBjb25zdCB7IHVybCwgYWx0ZXJuYXRpdmVUZXh0LCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5kYXRhLmF0dHJpYnV0ZXM7XHJcbiBcclxuICBjb25zdCBzcmNVcmwgPSBnZXRTdHJhcGlVUkwoKSArIHVybDtcclxuICByZXR1cm4gKFxyXG4gICAgIFxyXG4gICAgICAgIDxpbWcgY2xhc3M9e2ltYWdlQ2xhc3N9IHNyYz17c3JjVXJsfSBhbHQ9XCJMb2dvXCIgLz5cclxuICAgIFxyXG4gICBcclxuICAgIC8vIDxOZXh0SW1hZ2VcclxuICAgIC8vICAgLy8gbG9hZGVyPXtsb2FkZXJ9XHJcbiAgICAvLyAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgLy8gICB3aWR0aD17MTAwfVxyXG4gICAgLy8gICBoZWlnaHQ9ezIwMH1cclxuICAgIC8vICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAvLyAgIHNyYz17IHNyY1VybH1cclxuICAgIC8vICAgLy8gYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgXCJcIn1cclxuICAgIC8vIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21JbWFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9