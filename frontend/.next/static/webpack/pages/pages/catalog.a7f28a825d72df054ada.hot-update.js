self["webpackHotUpdate_N_E"]("pages/pages/catalog",{

/***/ "./components/commerce/Carousel.js":
/*!*****************************************!*\
  !*** ./components/commerce/Carousel.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\Carousel.js",
    _this = undefined,
    _s = $RefreshSig$();





var Carousel = function Carousel(_ref) {
  _s();

  var ListItem = _ref.ListItem;

  if (!ListItem) {
    ListItem = [];
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    helper();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "main-slide",
    "class": " carousel slide ",
    "data-ride": "carousel",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      "class": "pt-32",
      id: "carousel",
      children: ListItem.data.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
            image: item,
            imageClass: "image-fit d-block w-100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "carousel-nav",
      "class": "row justify-center ",
      children: ListItem.data.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          defaultChecked: index == 0 ? true : false,
          "data-carousel": index + 1,
          "class": "carousel-item-radio",
          type: "radio",
          name: "position"
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 14
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(Carousel, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Carousel;

function helper() {
  Array.from(document.getElementsByClassName("carousel-item-radio")).forEach(function (ele) {
    ele.onclick = function (item) {
      console.log(ele.getAttribute("data-carousel"));
      var position = ele.getAttribute("data-carousel");
      document.getElementById("carousel").setAttribute("style", "--position:" + position);
    };
  });
  setInterval(function () {
    var maxCarouselCount = Array.from(document.getElementsByClassName("carousel-item-radio")).length;
    var ele = document.getElementById("carousel");
    var currentPosition = ele.style.getPropertyValue("--position");

    if (currentPosition >= maxCarouselCount) {
      currentPosition = 1;
    } else {
      currentPosition++;
    }

    document.getElementById("carousel").setAttribute("style", "--position:" + currentPosition);
  }, 3000);
}

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

var _c;

$RefreshReg$(_c, "Carousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIkxpc3RJdGVtIiwidXNlRWZmZWN0IiwiaGVscGVyIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJlbGUiLCJvbmNsaWNrIiwiY29uc29sZSIsImxvZyIsImdldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJbnRlcnZhbCIsIm1heENhcm91c2VsQ291bnQiLCJsZW5ndGgiLCJjdXJyZW50UG9zaXRpb24iLCJzdHlsZSIsImdldFByb3BlcnR5VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFFakMsTUFBRyxDQUFDQSxRQUFKLEVBQWM7QUFDWkEsWUFBUSxHQUFHLEVBQVg7QUFDRDs7QUFFREMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU07QUFDUCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBSyxNQUFFLEVBQUMsWUFBUjtBQUFxQixhQUFNLGtCQUEzQjtBQUE4QyxpQkFBVSxVQUF4RDtBQUFBLDRCQUNJO0FBQU0sZUFBTSxPQUFaO0FBQW9CLFFBQUUsRUFBQyxVQUF2QjtBQUFBLGdCQUNFRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDaEI7QUFBaUIsbUJBQU0sTUFBdkI7QUFBQSxpQ0FDRSw4REFBQywyQ0FBRDtBQUFhLGlCQUFLLEVBQUVELElBQXBCO0FBQTBCLHNCQUFVLEVBQUU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVVDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFsQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFBO0FBQUssUUFBRSxFQUFDLGNBQVI7QUFBdUIsZUFBTSxxQkFBN0I7QUFBQSxnQkFDS04sUUFBUSxDQUFDRyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ2Q7QUFBTyx3QkFBYyxFQUFFQSxLQUFLLElBQUksQ0FBVCxHQUFhLElBQWIsR0FBbUIsS0FBMUM7QUFBaUQsMkJBQWVBLEtBQUssR0FBRyxDQUF4RTtBQUF1RixtQkFBTSxxQkFBN0Y7QUFBbUgsY0FBSSxFQUFDLE9BQXhIO0FBQWdJLGNBQUksRUFBQztBQUFySSxXQUFnRkEsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBMUJEOztHQUFNUCxROztLQUFBQSxROztBQTRCTixTQUFTRyxNQUFULEdBQWtCO0FBQ2hCSyxPQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxxQkFBaEMsQ0FBWCxFQUFtRUMsT0FBbkUsQ0FBMkUsVUFBQUMsR0FBRyxFQUFJO0FBQ2hGQSxPQUFHLENBQUNDLE9BQUosR0FBYyxVQUFVUixJQUFWLEVBQWdCO0FBQzFCUyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDSSxZQUFKLENBQWlCLGVBQWpCLENBQVo7QUFDQSxVQUFJQyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ0ksWUFBSixDQUFpQixlQUFqQixDQUFmO0FBQ0FQLGNBQVEsQ0FBQ1MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsWUFBcEMsQ0FBaUQsT0FBakQsRUFBMEQsZ0JBQWdCRixRQUExRTtBQUNILEtBSkQ7QUFLRCxHQU5EO0FBVUFHLGFBQVcsQ0FBQyxZQUFNO0FBQ2hCLFFBQUlDLGdCQUFnQixHQUFHZCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxxQkFBaEMsQ0FBWCxFQUFtRVksTUFBMUY7QUFDQSxRQUFJVixHQUFHLEdBQUdILFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixVQUF4QixDQUFWO0FBQ0EsUUFBSUssZUFBZSxHQUFHWCxHQUFHLENBQUNZLEtBQUosQ0FBVUMsZ0JBQVYsQ0FBMkIsWUFBM0IsQ0FBdEI7O0FBQ0EsUUFBR0YsZUFBZSxJQUFJRixnQkFBdEIsRUFBd0M7QUFBQ0UscUJBQWUsR0FBRyxDQUFsQjtBQUFxQixLQUE5RCxNQUFvRTtBQUFDQSxxQkFBZTtBQUFJOztBQUN4RmQsWUFBUSxDQUFDUyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxZQUFwQyxDQUFpRCxPQUFqRCxFQUEwRCxnQkFBZ0JJLGVBQTFFO0FBQ0QsR0FOVSxFQU1SLElBTlEsQ0FBWDtBQU9EOztBQUVELCtEQUFleEIsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYWdlcy9jYXRhbG9nLmE3ZjI4YTgyNWQ3MmRmMDU0YWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiIFxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuaW1wb3J0ICB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgQ2Fyb3VzZWwgPSAoeyBMaXN0SXRlbSB9KSA9PiB7XHJcbiAgICAgXHJcbiAgaWYoIUxpc3RJdGVtKSB7XHJcbiAgICBMaXN0SXRlbSA9IFtdO1xyXG4gIH1cclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBoZWxwZXIoKTtcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJtYWluLXNsaWRlXCIgY2xhc3M9XCIgY2Fyb3VzZWwgc2xpZGUgXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuICAgICAgICA8bWFpbiBjbGFzcz1cInB0LTMyXCIgaWQ9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgIHsgTGlzdEl0ZW0uZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3M9XCJpdGVtXCI+IFxyXG4gICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17aXRlbX0gaW1hZ2VDbGFzcz17XCJpbWFnZS1maXQgZC1ibG9jayB3LTEwMFwifSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgIDwvIG1haW4+XHJcbiAgICA8ZGl2IGlkPVwiY2Fyb3VzZWwtbmF2XCIgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAge0xpc3RJdGVtLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRDaGVja2VkPXtpbmRleCA9PSAwID8gdHJ1ZTogZmFsc2V9IGRhdGEtY2Fyb3VzZWw9e2luZGV4ICsgMX0ga2V5PXtpbmRleH0gY2xhc3M9XCJjYXJvdXNlbC1pdGVtLXJhZGlvXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInBvc2l0aW9uXCIgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoZWxwZXIoKSB7XHJcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2Fyb3VzZWwtaXRlbS1yYWRpb1wiKSkuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgZWxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcm91c2VsXCIpKTtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBlbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXJvdXNlbFwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsXCIpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiLS1wb3NpdGlvbjpcIiArIHBvc2l0aW9uKSA7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gXHJcblxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHZhciBtYXhDYXJvdXNlbENvdW50ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2Fyb3VzZWwtaXRlbS1yYWRpb1wiKSkubGVuZ3RoO1xyXG4gICAgdmFyIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxcIik7XHJcbiAgICB2YXIgY3VycmVudFBvc2l0aW9uID0gZWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLXBvc2l0aW9uXCIpO1xyXG4gICAgaWYoY3VycmVudFBvc2l0aW9uID49IG1heENhcm91c2VsQ291bnQpIHtjdXJyZW50UG9zaXRpb24gPSAxO30gZWxzZSB7Y3VycmVudFBvc2l0aW9uKys7fVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbFwiKS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIi0tcG9zaXRpb246XCIgKyBjdXJyZW50UG9zaXRpb24pIDtcclxuICB9LCAzMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==