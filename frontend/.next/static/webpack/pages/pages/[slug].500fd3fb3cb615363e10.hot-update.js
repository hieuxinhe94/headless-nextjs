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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\article-hero.js",
    _this = undefined;




var PageHero = function PageHero(_ref) {
  var _data$Image, _data$Image$data, _data$BgImage, _data$BgImage$data;

  var data = _ref.data,
      color = _ref.color;
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmptyBox, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
              lineNumber: 28,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
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
              lineNumber: 36,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
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
              lineNumber: 44,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "particles-1",
      "class": "particles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2FydGljbGUtaGVyby5qcyJdLCJuYW1lcyI6WyJQYWdlSGVybyIsImRhdGEiLCJjb2xvciIsImNlbnRyYWxJbWFnZSIsImNlbnRyYWxCZ0ltYWdlIiwiSW1hZ2UiLCJhdHRyaWJ1dGVzIiwidXJsIiwiZ2V0U3RyYXBpVVJMIiwiQmdJbWFnZSIsInRleHRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIkNlbnRyYWxUZXh0IiwiZGlzcGxheSIsIkNlbnRyYWxUZXh0RGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRWxDLE1BQUcsQ0FBQ0QsSUFBSixFQUFVLG9CQUFPLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBRVYsTUFBSUUsWUFBSixFQUFpQkMsY0FBakI7O0FBQ0EscUJBQUdILElBQUksQ0FBQ0ksS0FBUiw0REFBRyxZQUFZSixJQUFmLDZDQUFHLGlCQUFrQkssVUFBbEIsQ0FBNkJDLEdBQWhDLEVBQXFDO0FBQUE7O0FBQy9CSixnQkFBWSxHQUFPSyxzREFBWSxzQkFBS1AsSUFBSSxDQUFDSSxLQUFWLHNFQUFLLGFBQVlKLElBQWpCLHNEQUFLLGtCQUFrQkssVUFBbEIsQ0FBNkJDLEdBQWxDLENBQS9CO0FBQ0w7O0FBQ0QsdUJBQUdOLElBQUksQ0FBQ1EsT0FBUixnRUFBRyxjQUFjUixJQUFqQiwrQ0FBRyxtQkFBb0JLLFVBQXBCLENBQStCQyxHQUFsQyxFQUF1QztBQUFBOztBQUNuQ0gsa0JBQWMsR0FBT0ksc0RBQVksd0JBQUtQLElBQUksQ0FBQ1EsT0FBViwwRUFBSyxlQUFjUixJQUFuQix3REFBSyxvQkFBb0JLLFVBQXBCLENBQStCQyxHQUFwQyxDQUFqQztBQUNIOztBQUVELE1BQUlHLFNBQVMsR0FBSSxZQUFqQjs7QUFDQSxNQUFHUixLQUFILEVBQVU7QUFDTlEsYUFBUyxHQUFHUixLQUFaO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFZLGFBQU0sYUFBbEI7QUFBZ0MsU0FBSyxFQUFFO0FBQUVTLHFCQUFlLEVBQUcsU0FBT1AsY0FBUDtBQUFwQixLQUF2QztBQUFBLDRCQUNJO0FBQUssZUFBTSxXQUFYO0FBQUEsOEJBQ0k7QUFBSyxpQkFBTSxvQkFBWDtBQUFBLCtCQUNJO0FBQUssbUJBQU0saUJBQVg7QUFBQSxpQ0FDSTtBQUFLLHFCQUFNLHNEQUFYO0FBQUEsbUNBQ0k7QUFBSSx1QkFBTyxxRUFBc0VNLFNBQWpGO0FBQTRGLG1DQUFrQixNQUE5RztBQUFxSCxnQ0FBZSxNQUFwSTtBQUFBLHdCQUE2SVQsSUFBN0ksYUFBNklBLElBQTdJLHVCQUE2SUEsSUFBSSxDQUFFVztBQUFuSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFTSTtBQUFLLGlCQUFNLG9CQUFYO0FBQUEsK0JBQ0k7QUFBSyxtQkFBTSxpQkFBWDtBQUFBLGlDQUNJO0FBQUsscUJBQU0sMENBQVg7QUFBc0QsaUNBQWtCLE1BQXhFO0FBQStFLDhCQUFlLE1BQTlGO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLGNBQWY7QUFBOEIsaUJBQUcsRUFBRVQsWUFBbkM7QUFBaUQsaUJBQUcsRUFBQyxNQUFyRDtBQUE0RCxtQkFBSyxFQUFHO0FBQUVVLHVCQUFPLEVBQUVWLFlBQVksSUFBSSxJQUFoQixHQUF1QixPQUF2QixHQUFpQztBQUE1QztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosZUFnQkk7QUFBSyxpQkFBTSxvQkFBWDtBQUFBLCtCQUNJO0FBQUssbUJBQU0saUJBQVg7QUFBQSxpQ0FDSTtBQUFLLHFCQUFNLHNEQUFYO0FBQUEsbUNBRUk7QUFBSSx1QkFBTyx1REFBdURPLFNBQWxFO0FBQThFLG1DQUFrQixNQUFoRztBQUF1RyxnQ0FBZSxNQUF0SDtBQUFBLHdCQUNFVCxJQURGLGFBQ0VBLElBREYsdUJBQ0VBLElBQUksQ0FBRWE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBNkJJO0FBQUssUUFBRSxFQUFDLGFBQVI7QUFBc0IsZUFBTTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUNILENBbEREOztLQUFNZCxRO0FBb0ROLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL1tzbHVnXS41MDBmZDNmYjNjYjYxNTM2M2UxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5cclxuY29uc3QgUGFnZUhlcm8gPSAoeyBkYXRhLCBjb2xvciB9KSA9PiB7XHJcbiBcclxuICAgIGlmKCFkYXRhKSByZXR1cm4gPEVtcHR5Qm94IC8+XHJcblxyXG4gICAgdmFyIGNlbnRyYWxJbWFnZSxjZW50cmFsQmdJbWFnZTtcclxuICAgIGlmKGRhdGEuSW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXMudXJsKSB7XHJcbiAgICAgICAgICBjZW50cmFsSW1hZ2UgPSAgICAgZ2V0U3RyYXBpVVJMKCkgKyBkYXRhLkltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzLnVybDtcclxuICAgIH1cclxuICAgIGlmKGRhdGEuQmdJbWFnZT8uZGF0YT8uYXR0cmlidXRlcy51cmwpIHtcclxuICAgICAgICBjZW50cmFsQmdJbWFnZSA9ICAgICBnZXRTdHJhcGlVUkwoKSArIGRhdGEuQmdJbWFnZT8uZGF0YT8uYXR0cmlidXRlcy51cmw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRleHRDb2xvciAgPSAndGV4dC13aGl0ZSc7XHJcbiAgICBpZihjb2xvcikge1xyXG4gICAgICAgIHRleHRDb2xvciA9IGNvbG9yXHJcbiAgICB9IFxyXG4gICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiIFwiIGNsYXNzPVwiaGVhZGVyLWhlcm9cIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICBgdXJsKGArY2VudHJhbEJnSW1hZ2UrYClgIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMzIgbWItMTIgdGV4dC1jZW50ZXIgbGc6cHQtNDggaGVhZGVyLWhlcm8tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPXtcInRleHQtNHhsIGZvbnQtbGlnaHQgbGVhZGluZy10aWdodCBoZWFkZXItc3ViLXRpdGxlIHdvdyBmYWRlSW5VcCBcIiAgKyB0ZXh0Q29sb3J9IGRhdGEtd293LWR1cmF0aW9uPVwiMS4zc1wiIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiPnsgZGF0YT8uQ2VudHJhbFRleHR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgaGVhZGVyLWhlcm8taW1hZ2Ugd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMS4zc1wiIGRhdGEtd293LWRlbGF5PVwiMS40c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiBzcmM9e2NlbnRyYWxJbWFnZX0gYWx0PVwiaGVyb1wiIHN0eWxlPXsgeyBkaXNwbGF5OiBjZW50cmFsSW1hZ2UgIT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScgfSB9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMTYgbWItMTIgdGV4dC1jZW50ZXIgbGc6cHQtMTYgaGVhZGVyLWhlcm8tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz17XCJtYi0zIHRleHQtNHhsIGZvbnQtYm9sZCBoZWFkZXItdGl0bGUgd293IGZhZGVJblVwIFwiICsgdGV4dENvbG9yfSAgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE/LkNlbnRyYWxUZXh0RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYXJ0aWNsZXMtMVwiIGNsYXNzPVwicGFydGljbGVzXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZXJvXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9