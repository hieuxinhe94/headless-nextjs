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
    var maxCarouselCount = Array.from(document.getElementsByClassName("carousel-item-radio"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIkxpc3RJdGVtIiwidXNlRWZmZWN0IiwiaGVscGVyIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJlbGUiLCJvbmNsaWNrIiwiY29uc29sZSIsImxvZyIsImdldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJbnRlcnZhbCIsIm1heENhcm91c2VsQ291bnQiLCJjdXJyZW50UG9zaXRpb24iLCJzdHlsZSIsImdldFByb3BlcnR5VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFFakMsTUFBRyxDQUFDQSxRQUFKLEVBQWM7QUFDWkEsWUFBUSxHQUFHLEVBQVg7QUFDRDs7QUFFREMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU07QUFDUCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBSyxNQUFFLEVBQUMsWUFBUjtBQUFxQixhQUFNLGtCQUEzQjtBQUE4QyxpQkFBVSxVQUF4RDtBQUFBLDRCQUNJO0FBQU0sZUFBTSxPQUFaO0FBQW9CLFFBQUUsRUFBQyxVQUF2QjtBQUFBLGdCQUNFRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDaEI7QUFBaUIsbUJBQU0sTUFBdkI7QUFBQSxpQ0FDRSw4REFBQywyQ0FBRDtBQUFhLGlCQUFLLEVBQUVELElBQXBCO0FBQTBCLHNCQUFVLEVBQUU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVVDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFsQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFBO0FBQUssUUFBRSxFQUFDLGNBQVI7QUFBdUIsZUFBTSxxQkFBN0I7QUFBQSxnQkFDS04sUUFBUSxDQUFDRyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ2Q7QUFBTyx3QkFBYyxFQUFFQSxLQUFLLElBQUksQ0FBVCxHQUFhLElBQWIsR0FBbUIsS0FBMUM7QUFBaUQsMkJBQWVBLEtBQUssR0FBRyxDQUF4RTtBQUF1RixtQkFBTSxxQkFBN0Y7QUFBbUgsY0FBSSxFQUFDLE9BQXhIO0FBQWdJLGNBQUksRUFBQztBQUFySSxXQUFnRkEsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBMUJEOztHQUFNUCxROztLQUFBQSxROztBQTRCTixTQUFTRyxNQUFULEdBQWtCO0FBQ2hCSyxPQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxxQkFBaEMsQ0FBWCxFQUFtRUMsT0FBbkUsQ0FBMkUsVUFBQUMsR0FBRyxFQUFJO0FBQ2hGQSxPQUFHLENBQUNDLE9BQUosR0FBYyxVQUFVUixJQUFWLEVBQWdCO0FBQzFCUyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDSSxZQUFKLENBQWlCLGVBQWpCLENBQVo7QUFDQSxVQUFJQyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ0ksWUFBSixDQUFpQixlQUFqQixDQUFmO0FBQ0FQLGNBQVEsQ0FBQ1MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsWUFBcEMsQ0FBaUQsT0FBakQsRUFBMEQsZ0JBQWdCRixRQUExRTtBQUNILEtBSkQ7QUFLRCxHQU5EO0FBVUFHLGFBQVcsQ0FBQyxZQUFNO0FBQ2hCLFFBQUlDLGdCQUFnQixHQUFHZCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxxQkFBaEMsQ0FBWCxDQUF2QjtBQUNBLFFBQUlFLEdBQUcsR0FBR0gsUUFBUSxDQUFDUyxjQUFULENBQXdCLFVBQXhCLENBQVY7QUFDQSxRQUFJSSxlQUFlLEdBQUdWLEdBQUcsQ0FBQ1csS0FBSixDQUFVQyxnQkFBVixDQUEyQixZQUEzQixDQUF0Qjs7QUFDQSxRQUFHRixlQUFlLElBQUlELGdCQUF0QixFQUF3QztBQUFDQyxxQkFBZSxHQUFHLENBQWxCO0FBQXFCLEtBQTlELE1BQW9FO0FBQUNBLHFCQUFlO0FBQUk7O0FBQ3hGYixZQUFRLENBQUNTLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFlBQXBDLENBQWlELE9BQWpELEVBQTBELGdCQUFnQkcsZUFBMUU7QUFDRCxHQU5VLEVBTVIsSUFOUSxDQUFYO0FBT0Q7O0FBRUQsK0RBQWV2QixRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuM2YwZTcxNzAwNDk5NWU4YWM0MGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCIgXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5pbXBvcnQgIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBDYXJvdXNlbCA9ICh7IExpc3RJdGVtIH0pID0+IHtcclxuICAgICBcclxuICBpZighTGlzdEl0ZW0pIHtcclxuICAgIExpc3RJdGVtID0gW107XHJcbiAgfVxyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhlbHBlcigpO1xyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW4tc2xpZGVcIiBjbGFzcz1cIiBjYXJvdXNlbCBzbGlkZSBcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgIDxtYWluIGNsYXNzPVwicHQtMzJcIiBpZD1cImNhcm91c2VsXCI+XHJcbiAgICAgICAgeyBMaXN0SXRlbS5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzcz1cIml0ZW1cIj4gXHJcbiAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtpdGVtfSBpbWFnZUNsYXNzPXtcImltYWdlLWZpdCBkLWJsb2NrIHctMTAwXCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgPC8gbWFpbj5cclxuICAgIDxkaXYgaWQ9XCJjYXJvdXNlbC1uYXZcIiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBcIj5cclxuICAgICAgICB7TGlzdEl0ZW0uZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdENoZWNrZWQ9e2luZGV4ID09IDAgPyB0cnVlOiBmYWxzZX0gZGF0YS1jYXJvdXNlbD17aW5kZXggKyAxfSBrZXk9e2luZGV4fSBjbGFzcz1cImNhcm91c2VsLWl0ZW0tcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwicG9zaXRpb25cIiAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlbHBlcigpIHtcclxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1pdGVtLXJhZGlvXCIpKS5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICBlbGUub25jbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlLmdldEF0dHJpYnV0ZShcImRhdGEtY2Fyb3VzZWxcIikpO1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IGVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcm91c2VsXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxcIikuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCItLXBvc2l0aW9uOlwiICsgcG9zaXRpb24pIDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiBcclxuXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdmFyIG1heENhcm91c2VsQ291bnQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1pdGVtLXJhZGlvXCIpKTtcclxuICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsXCIpO1xyXG4gICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IGVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1wb3NpdGlvblwiKTtcclxuICAgIGlmKGN1cnJlbnRQb3NpdGlvbiA+PSBtYXhDYXJvdXNlbENvdW50KSB7Y3VycmVudFBvc2l0aW9uID0gMTt9IGVsc2Uge2N1cnJlbnRQb3NpdGlvbisrO31cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxcIikuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCItLXBvc2l0aW9uOlwiICsgY3VycmVudFBvc2l0aW9uKSA7XHJcbiAgfSwgMzAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=