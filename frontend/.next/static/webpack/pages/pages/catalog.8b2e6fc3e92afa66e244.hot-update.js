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

    for (var index = 1; index <= maxCarouselCount; index++) {
      var element = totalCheckboxes[index - 1];
      element.removeAttribute("checked");
    }

    var maxCarouselCount = Array.from(totalCheckboxes).length;
    var ele = document.getElementById("carousel");
    var currentPosition = ele.style.getPropertyValue("--position");

    if (currentPosition >= maxCarouselCount) {
      currentPosition = 1;
    } else {
      currentPosition++;
    }

    document.getElementById("carousel").setAttribute("style", "--position:" + currentPosition);
    totalCheckboxes[currentPosition - 1].setAttribute("checked", true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIkxpc3RJdGVtIiwidXNlRWZmZWN0IiwiaGVscGVyIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJlbGUiLCJvbmNsaWNrIiwiY29uc29sZSIsImxvZyIsImdldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJbnRlcnZhbCIsInRvdGFsQ2hlY2tib3hlcyIsIm1heENhcm91c2VsQ291bnQiLCJlbGVtZW50IiwicmVtb3ZlQXR0cmlidXRlIiwibGVuZ3RoIiwiY3VycmVudFBvc2l0aW9uIiwic3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBRWpDLE1BQUcsQ0FBQ0EsUUFBSixFQUFjO0FBQ1pBLFlBQVEsR0FBRyxFQUFYO0FBQ0Q7O0FBRURDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNO0FBQ1AsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBcUIsYUFBTSxrQkFBM0I7QUFBOEMsaUJBQVUsVUFBeEQ7QUFBQSw0QkFDSTtBQUFNLGVBQU0sT0FBWjtBQUFvQixRQUFFLEVBQUMsVUFBdkI7QUFBQSxnQkFDRUYsUUFBUSxDQUFDRyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ2hCO0FBQWlCLG1CQUFNLE1BQXZCO0FBQUEsaUNBQ0UsOERBQUMsMkNBQUQ7QUFBYSxpQkFBSyxFQUFFRCxJQUFwQjtBQUEwQixzQkFBVSxFQUFFO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFVQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBbEI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFRQTtBQUFLLFFBQUUsRUFBQyxjQUFSO0FBQXVCLGVBQU0scUJBQTdCO0FBQUEsZ0JBQ0tOLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNkO0FBQU8sd0JBQWMsRUFBRUEsS0FBSyxJQUFJLENBQVQsR0FBYSxJQUFiLEdBQW1CLEtBQTFDO0FBQWlELDJCQUFlQSxLQUFLLEdBQUcsQ0FBeEU7QUFBdUYsbUJBQU0scUJBQTdGO0FBQW1ILGNBQUksRUFBQyxPQUF4SDtBQUFnSSxjQUFJLEVBQUM7QUFBckksV0FBZ0ZBLEtBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQTFCRDs7R0FBTVAsUTs7S0FBQUEsUTs7QUE0Qk4sU0FBU0csTUFBVCxHQUFrQjtBQUNoQkssT0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MscUJBQWhDLENBQVgsRUFBbUVDLE9BQW5FLENBQTJFLFVBQUFDLEdBQUcsRUFBSTtBQUNoRkEsT0FBRyxDQUFDQyxPQUFKLEdBQWMsVUFBVVIsSUFBVixFQUFnQjtBQUMxQlMsYUFBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0ksWUFBSixDQUFpQixlQUFqQixDQUFaO0FBQ0EsVUFBSUMsUUFBUSxHQUFHTCxHQUFHLENBQUNJLFlBQUosQ0FBaUIsZUFBakIsQ0FBZjtBQUNBUCxjQUFRLENBQUNTLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFlBQXBDLENBQWlELE9BQWpELEVBQTBELGdCQUFnQkYsUUFBMUU7QUFDSCxLQUpEO0FBS0QsR0FORDtBQVVBRyxhQUFXLENBQUMsWUFBTTtBQUNoQixRQUFJQyxlQUFlLEdBQUdaLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MscUJBQWhDLENBQXRCOztBQUNBLFNBQUssSUFBSUosS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLElBQUlnQixnQkFBN0IsRUFBK0NoQixLQUFLLEVBQXBELEVBQXdEO0FBQ3RELFVBQU1pQixPQUFPLEdBQUdGLGVBQWUsQ0FBQ2YsS0FBSyxHQUFFLENBQVIsQ0FBL0I7QUFDRWlCLGFBQU8sQ0FBQ0MsZUFBUixDQUF3QixTQUF4QjtBQUNIOztBQUNELFFBQUlGLGdCQUFnQixHQUFHZixLQUFLLENBQUNDLElBQU4sQ0FBV2EsZUFBWCxFQUE0QkksTUFBbkQ7QUFDQSxRQUFJYixHQUFHLEdBQUdILFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixVQUF4QixDQUFWO0FBQ0EsUUFBSVEsZUFBZSxHQUFHZCxHQUFHLENBQUNlLEtBQUosQ0FBVUMsZ0JBQVYsQ0FBMkIsWUFBM0IsQ0FBdEI7O0FBQ0EsUUFBR0YsZUFBZSxJQUFJSixnQkFBdEIsRUFBd0M7QUFBQ0kscUJBQWUsR0FBRyxDQUFsQjtBQUFxQixLQUE5RCxNQUFvRTtBQUFDQSxxQkFBZTtBQUFJOztBQUN4RmpCLFlBQVEsQ0FBQ1MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsWUFBcEMsQ0FBaUQsT0FBakQsRUFBMEQsZ0JBQWdCTyxlQUExRTtBQUNBTCxtQkFBZSxDQUFDSyxlQUFlLEdBQUMsQ0FBakIsQ0FBZixDQUFtQ1AsWUFBbkMsQ0FBZ0QsU0FBaEQsRUFBMkQsSUFBM0Q7QUFFRCxHQWJVLEVBYVIsSUFiUSxDQUFYO0FBY0Q7O0FBRUQsK0RBQWVwQixRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuOGIyZTZmYzNlOTJhZmE2NmUyNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCIgXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5pbXBvcnQgIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBDYXJvdXNlbCA9ICh7IExpc3RJdGVtIH0pID0+IHtcclxuICAgICBcclxuICBpZighTGlzdEl0ZW0pIHtcclxuICAgIExpc3RJdGVtID0gW107XHJcbiAgfVxyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhlbHBlcigpO1xyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW4tc2xpZGVcIiBjbGFzcz1cIiBjYXJvdXNlbCBzbGlkZSBcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgIDxtYWluIGNsYXNzPVwicHQtMzJcIiBpZD1cImNhcm91c2VsXCI+XHJcbiAgICAgICAgeyBMaXN0SXRlbS5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzcz1cIml0ZW1cIj4gXHJcbiAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtpdGVtfSBpbWFnZUNsYXNzPXtcImltYWdlLWZpdCBkLWJsb2NrIHctMTAwXCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgPC8gbWFpbj5cclxuICAgIDxkaXYgaWQ9XCJjYXJvdXNlbC1uYXZcIiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBcIj5cclxuICAgICAgICB7TGlzdEl0ZW0uZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdENoZWNrZWQ9e2luZGV4ID09IDAgPyB0cnVlOiBmYWxzZX0gZGF0YS1jYXJvdXNlbD17aW5kZXggKyAxfSBrZXk9e2luZGV4fSBjbGFzcz1cImNhcm91c2VsLWl0ZW0tcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwicG9zaXRpb25cIiAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlbHBlcigpIHtcclxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1pdGVtLXJhZGlvXCIpKS5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICBlbGUub25jbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlLmdldEF0dHJpYnV0ZShcImRhdGEtY2Fyb3VzZWxcIikpO1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IGVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcm91c2VsXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxcIikuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCItLXBvc2l0aW9uOlwiICsgcG9zaXRpb24pIDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiBcclxuXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdmFyIHRvdGFsQ2hlY2tib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1pdGVtLXJhZGlvXCIpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBtYXhDYXJvdXNlbENvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0b3RhbENoZWNrYm94ZXNbaW5kZXggLTFdO1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKSA7XHJcbiAgICB9XHJcbiAgICB2YXIgbWF4Q2Fyb3VzZWxDb3VudCA9IEFycmF5LmZyb20odG90YWxDaGVja2JveGVzKS5sZW5ndGg7XHJcbiAgICB2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbFwiKTtcclxuICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSBlbGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tcG9zaXRpb25cIik7XHJcbiAgICBpZihjdXJyZW50UG9zaXRpb24gPj0gbWF4Q2Fyb3VzZWxDb3VudCkge2N1cnJlbnRQb3NpdGlvbiA9IDE7fSBlbHNlIHtjdXJyZW50UG9zaXRpb24rKzt9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsXCIpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiLS1wb3NpdGlvbjpcIiArIGN1cnJlbnRQb3NpdGlvbikgO1xyXG4gICAgdG90YWxDaGVja2JveGVzW2N1cnJlbnRQb3NpdGlvbi0xXS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHRydWUpIDtcclxuICAgXHJcbiAgfSwgMzAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=