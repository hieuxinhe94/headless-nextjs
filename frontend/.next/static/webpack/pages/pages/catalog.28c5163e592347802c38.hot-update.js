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
    var totalCheckboxes = document.getElementsByClassName("carousel-item-radio");
    var maxCarouselCount = Array.from(totalCheckboxes).length;
    var ele = document.getElementById("carousel");
    var currentPosition = ele.style.getPropertyValue("--position");

    if (currentPosition >= maxCarouselCount) {
      currentPosition = 1;
    } else {
      currentPosition++;
    }

    document.getElementById("carousel").setAttribute("style", "--position:" + currentPosition);

    for (var index = 1; index <= maxCarouselCount; index++) {
      var element = totalCheckboxes[index];

      if (index == currentPosition) {
        document.getElementsByClassName("carousel-item-radio")[index - 1].setAttribute("checked", true);
      } else {
        document.getElementsByClassName("carousel-item-radio")[index - 1].removeAttribute("checked");
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIkxpc3RJdGVtIiwidXNlRWZmZWN0IiwiaGVscGVyIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJlbGUiLCJvbmNsaWNrIiwiY29uc29sZSIsImxvZyIsImdldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJbnRlcnZhbCIsInRvdGFsQ2hlY2tib3hlcyIsIm1heENhcm91c2VsQ291bnQiLCJsZW5ndGgiLCJjdXJyZW50UG9zaXRpb24iLCJzdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJlbGVtZW50IiwicmVtb3ZlQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBRWpDLE1BQUcsQ0FBQ0EsUUFBSixFQUFjO0FBQ1pBLFlBQVEsR0FBRyxFQUFYO0FBQ0Q7O0FBRURDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNO0FBQ1AsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBcUIsYUFBTSxrQkFBM0I7QUFBOEMsaUJBQVUsVUFBeEQ7QUFBQSw0QkFDSTtBQUFNLGVBQU0sT0FBWjtBQUFvQixRQUFFLEVBQUMsVUFBdkI7QUFBQSxnQkFDRUYsUUFBUSxDQUFDRyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ2hCO0FBQWlCLG1CQUFNLE1BQXZCO0FBQUEsaUNBQ0Us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a0JEOztBQUVELCtEQUFlN0IsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYWdlcy9jYXRhbG9nLjI4YzUxNjNlNTkyMzQ3ODAyYzM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiIFxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuaW1wb3J0ICB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgQ2Fyb3VzZWwgPSAoeyBMaXN0SXRlbSB9KSA9PiB7XHJcbiAgICAgXHJcbiAgaWYoIUxpc3RJdGVtKSB7XHJcbiAgICBMaXN0SXRlbSA9IFtdO1xyXG4gIH1cclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBoZWxwZXIoKTtcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJtYWluLXNsaWRlXCIgY2xhc3M9XCIgY2Fyb3VzZWwgc2xpZGUgXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuICAgICAgICA8bWFpbiBjbGFzcz1cInB0LTMyXCIgaWQ9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgIHsgTGlzdEl0ZW0uZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3M9XCJpdGVtXCI+IFxyXG4gICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17aXRlbX0gaW1hZ2VDbGFzcz17XCJpbWFnZS1maXQgZC1ibG9jayB3LTEwMFwifSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgIDwvIG1haW4+XHJcbiAgICA8ZGl2IGlkPVwiY2Fyb3VzZWwtbmF2XCIgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAge0xpc3RJdGVtLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRDaGVja2VkPXtpbmRleCA9PSAwID8gdHJ1ZTogZmFsc2V9IGRhdGEtY2Fyb3VzZWw9e2luZGV4ICsgMX0ga2V5PXtpbmRleH0gY2xhc3M9XCJjYXJvdXNlbC1pdGVtLXJhZGlvXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInBvc2l0aW9uXCIgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoZWxwZXIoKSB7XHJcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2Fyb3VzZWwtaXRlbS1yYWRpb1wiKSkuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgZWxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcm91c2VsXCIpKTtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBlbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXJvdXNlbFwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsXCIpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiLS1wb3NpdGlvbjpcIiArIHBvc2l0aW9uKSA7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gXHJcblxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHZhciB0b3RhbENoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2Fyb3VzZWwtaXRlbS1yYWRpb1wiKTtcclxuICAgIHZhciBtYXhDYXJvdXNlbENvdW50ID0gQXJyYXkuZnJvbSh0b3RhbENoZWNrYm94ZXMpLmxlbmd0aDtcclxuICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsXCIpO1xyXG4gICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IGVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1wb3NpdGlvblwiKTtcclxuICAgIGlmKGN1cnJlbnRQb3NpdGlvbiA+PSBtYXhDYXJvdXNlbENvdW50KSB7Y3VycmVudFBvc2l0aW9uID0gMTt9IGVsc2Uge2N1cnJlbnRQb3NpdGlvbisrO31cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxcIikuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCItLXBvc2l0aW9uOlwiICsgY3VycmVudFBvc2l0aW9uKSA7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IG1heENhcm91c2VsQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRvdGFsQ2hlY2tib3hlc1tpbmRleF07XHJcblxyXG4gICAgICBpZihpbmRleCA9PSBjdXJyZW50UG9zaXRpb24pIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2Fyb3VzZWwtaXRlbS1yYWRpb1wiKVtpbmRleCAtMV0uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCB0cnVlKSA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWl0ZW0tcmFkaW9cIilbaW5kZXggLTFdLnJlbW92ZUF0dHJpYnV0ZShcImNoZWNrZWRcIikgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gIH0sIDMwMDApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9