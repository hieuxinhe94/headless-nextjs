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
    Array.from(totalCheckboxes).forEach(function (element) {
      element.removeAttribute("checked");
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZXJjZS9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIkxpc3RJdGVtIiwidXNlRWZmZWN0IiwiaGVscGVyIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJlbGUiLCJvbmNsaWNrIiwiY29uc29sZSIsImxvZyIsImdldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJbnRlcnZhbCIsInRvdGFsQ2hlY2tib3hlcyIsImVsZW1lbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJtYXhDYXJvdXNlbENvdW50IiwibGVuZ3RoIiwiY3VycmVudFBvc2l0aW9uIiwic3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBRWpDLE1BQUcsQ0FBQ0EsUUFBSixFQUFjO0FBQ1pBLFlBQVEsR0FBRyxFQUFYO0FBQ0Q7O0FBRURDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNO0FBQ1AsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBcUIsYUFBTSxrQkFBM0I7QUFBOEMsaUJBQVUsVUFBeEQ7QUFBQSw0QkFDSTtBQUFNLGVBQU0sT0FBWjtBQUFvQixRQUFFLEVBQUMsVUFBdkI7QUFBQSxnQkFDRUYsUUFBUSxDQUFDRyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ2hCO0FBQWlCLG1CQUFNLE1BQXZCO0FBQUEsaUNBQ0UsOERBQUMsMkNBQUQ7QUFBYSxpQkFBSyxFQUFFRCxJQUFwQjtBQUEwQixzQkFBVSxFQUFFO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFVQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBbEI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFRQTtBQUFLLFFBQUUsRUFBQyxjQUFSO0FBQXVCLGVBQU0scUJBQTdCO0FBQUEsZ0JBQ0tOLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNkO0FBQU8sd0JBQWMsRUFBRUEsS0FBSyxJQUFJLENBQVQsR0FBYSxJQUFiLEdBQW1CLEtBQTFDO0FBQWlELDJCQUFlQSxLQUFLLEdBQUcsQ0FBeEU7QUFBdUYsbUJBQU0scUJBQTdGO0FBQW1ILGNBQUksRUFBQyxPQUF4SDtBQUFnSSxjQUFJLEVBQUM7QUFBckksV0FBZ0ZBLEtBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQTFCRDs7R0FBTVAsUTs7S0FBQUEsUTs7QUE0Qk4sU0FBU0csTUFBVCxHQUFrQjtBQUNoQkssT0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MscUJBQWhDLENBQVgsRUFBbUVDLE9BQW5FLENBQTJFLFVBQUFDLEdBQUcsRUFBSTtBQUNoRkEsT0FBRyxDQUFDQyxPQUFKLEdBQWMsVUFBVVIsSUFBVixFQUFnQjtBQUMxQlMsYUFBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0ksWUFBSixDQUFpQixlQUFqQixDQUFaO0FBQ0EsVUFBSUMsUUFBUSxHQUFHTCxHQUFHLENBQUNJLFlBQUosQ0FBaUIsZUFBakIsQ0FBZjtBQUNBUCxjQUFRLENBQUNTLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFlBQXBDLENBQWlELE9BQWpELEVBQTBELGdCQUFnQkYsUUFBMUU7QUFDSCxLQUpEO0FBS0QsR0FORDtBQVVBRyxhQUFXLENBQUMsWUFBTTtBQUNoQixRQUFJQyxlQUFlLEdBQUdaLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MscUJBQWhDLENBQXRCO0FBQ0FILFNBQUssQ0FBQ0MsSUFBTixDQUFXYSxlQUFYLEVBQTRCVixPQUE1QixDQUFvQyxVQUFBVyxPQUFPLEVBQUk7QUFDN0NBLGFBQU8sQ0FBQ0MsZUFBUixDQUF3QixTQUF4QjtBQUNELEtBRkQ7QUFJQSxRQUFJQyxnQkFBZ0IsR0FBR2pCLEtBQUssQ0FBQ0MsSUFBTixDQUFXYSxlQUFYLEVBQTRCSSxNQUFuRDtBQUNBLFFBQUliLEdBQUcsR0FBR0gsUUFBUSxDQUFDUyxjQUFULENBQXdCLFVBQXhCLENBQVY7QUFDQSxRQUFJUSxlQUFlLEdBQUdkLEdBQUcsQ0FBQ2UsS0FBSixDQUFVQyxnQkFBVixDQUEyQixZQUEzQixDQUF0Qjs7QUFDQSxRQUFHRixlQUFlLElBQUlGLGdCQUF0QixFQUF3QztBQUFDRSxxQkFBZSxHQUFHLENBQWxCO0FBQXFCLEtBQTlELE1BQW9FO0FBQUNBLHFCQUFlO0FBQUk7O0FBQ3hGakIsWUFBUSxDQUFDUyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxZQUFwQyxDQUFpRCxPQUFqRCxFQUEwRCxnQkFBZ0JPLGVBQTFFO0FBQ0FMLG1CQUFlLENBQUNLLGVBQWUsR0FBQyxDQUFqQixDQUFmLENBQW1DUCxZQUFuQyxDQUFnRCxTQUFoRCxFQUEyRCxJQUEzRDtBQUVELEdBYlUsRUFhUixJQWJRLENBQVg7QUFjRDs7QUFFRCwrREFBZXBCLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvY2F0YWxvZy5lNzM0MTk5NmU4OWNhYjZjNzdiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIiBcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiXHJcbmltcG9ydCAge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IENhcm91c2VsID0gKHsgTGlzdEl0ZW0gfSkgPT4ge1xyXG4gICAgIFxyXG4gIGlmKCFMaXN0SXRlbSkge1xyXG4gICAgTGlzdEl0ZW0gPSBbXTtcclxuICB9XHJcbiBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaGVscGVyKCk7XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwibWFpbi1zbGlkZVwiIGNsYXNzPVwiIGNhcm91c2VsIHNsaWRlIFwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XHJcbiAgICAgICAgPG1haW4gY2xhc3M9XCJwdC0zMlwiIGlkPVwiY2Fyb3VzZWxcIj5cclxuICAgICAgICB7IExpc3RJdGVtLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzPVwiaXRlbVwiPiBcclxuICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e2l0ZW19IGltYWdlQ2xhc3M9e1wiaW1hZ2UtZml0IGQtYmxvY2sgdy0xMDBcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8LyBtYWluPlxyXG4gICAgPGRpdiBpZD1cImNhcm91c2VsLW5hdlwiIGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgIHtMaXN0SXRlbS5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0Q2hlY2tlZD17aW5kZXggPT0gMCA/IHRydWU6IGZhbHNlfSBkYXRhLWNhcm91c2VsPXtpbmRleCArIDF9IGtleT17aW5kZXh9IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbS1yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwb3NpdGlvblwiIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gaGVscGVyKCkge1xyXG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWl0ZW0tcmFkaW9cIikpLmZvckVhY2goZWxlID0+IHtcclxuICAgIGVsZS5vbmNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXJvdXNlbFwiKSk7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gZWxlLmdldEF0dHJpYnV0ZShcImRhdGEtY2Fyb3VzZWxcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbFwiKS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIi0tcG9zaXRpb246XCIgKyBwb3NpdGlvbikgO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuIFxyXG5cclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICB2YXIgdG90YWxDaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWl0ZW0tcmFkaW9cIik7XHJcbiAgICBBcnJheS5mcm9tKHRvdGFsQ2hlY2tib3hlcykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpIDtcclxuICAgIH0pO1xyXG4gICBcclxuICAgIHZhciBtYXhDYXJvdXNlbENvdW50ID0gQXJyYXkuZnJvbSh0b3RhbENoZWNrYm94ZXMpLmxlbmd0aDtcclxuICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsXCIpO1xyXG4gICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IGVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1wb3NpdGlvblwiKTtcclxuICAgIGlmKGN1cnJlbnRQb3NpdGlvbiA+PSBtYXhDYXJvdXNlbENvdW50KSB7Y3VycmVudFBvc2l0aW9uID0gMTt9IGVsc2Uge2N1cnJlbnRQb3NpdGlvbisrO31cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxcIikuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCItLXBvc2l0aW9uOlwiICsgY3VycmVudFBvc2l0aW9uKSA7XHJcbiAgICB0b3RhbENoZWNrYm94ZXNbY3VycmVudFBvc2l0aW9uLTFdLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdHJ1ZSkgO1xyXG4gICBcclxuICB9LCAzMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==