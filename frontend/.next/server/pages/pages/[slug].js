(function() {
var exports = {};
exports.id = "pages/pages/[slug]";
exports.ids = ["pages/pages/[slug]"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _subcribe_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subcribe-box */ "./components/subcribe-box.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\footer.js";





const Footer = ({
  footer,
  siteInfo
}) => {
  var _footer$BgImage;

  const quickLinks = footer === null || footer === void 0 ? void 0 : footer.HyperLink.filter(link => link.GroupValue == 'QuickLink');
  const resourceLinks = footer === null || footer === void 0 ? void 0 : footer.HyperLink.filter(link => link.GroupValue == 'Resources');
  const contactLinks = footer === null || footer === void 0 ? void 0 : footer.HyperLink.filter(link => link.GroupValue == 'ContactUs');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    id: "footer",
    class: "relative z-10 footer-area pt-120",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "footer-bg",
      style: {
        backgroundImage: `url(` + (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.getStrapiURL)() + (footer === null || footer === void 0 ? void 0 : (_footer$BgImage = footer.BgImage) === null || _footer$BgImage === void 0 ? void 0 : _footer$BgImage.data.attributes.url) + `)`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: [footer !== null && footer !== void 0 && footer.SubcribeBox ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_subcribe_box__WEBPACK_IMPORTED_MODULE_4__.default, {
        subcribeBox: footer === null || footer === void 0 ? void 0 : footer.SubcribeBox
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 39
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 93
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "footer-widget pb-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "w-4/5 md:w-3/5 lg:w-2/6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "mt-12 footer-about wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.2s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "inline-block mb-8 logo",
                href: "index.html",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                  image: siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.Logo
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 28
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                class: "pb-10 pr-10 leading-snug text-white content-center",
                children: siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.AlterName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                class: "flex footer-social",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      class: "lni lni-facebook-filled"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                      columnNumber: 45
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 33
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 29
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      class: "lni lni-twitter-filled"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 45
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 33
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 29
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      class: "lni lni-instagram-filled"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 33,
                      columnNumber: 45
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 33
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 29
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      class: "lni lni-linkedin-original"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 45
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 33
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 29
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 25
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "w-full sm:w-1/2 md:w-1/2 lg:w-1/2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "mt-12 link-wrapper wow fadeIn",
                  "data-wow-duration": "1s",
                  "data-wow-delay": "0.4s",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    class: "footer-title",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                      class: "mb-8 text-2xl font-bold text-white",
                      children: "Quick Link"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 37
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 33
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    class: "link",
                    children: quickLinks === null || quickLinks === void 0 ? void 0 : quickLinks.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: item.Link,
                        children: item.Title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 61
                      }, undefined)
                    }, i + "a", false, {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 43
                    }, undefined))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 33
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 29
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "w-full sm:w-1/2 md:w-1/2 lg:w-1/2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "mt-12 link-wrapper wow fadeIn",
                  "data-wow-duration": "1s",
                  "data-wow-delay": "0.6s",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    class: "footer-title",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                      class: "mb-8 text-2xl font-bold text-white",
                      children: "Resources"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 37
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 33
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    class: "link",
                    children: resourceLinks === null || resourceLinks === void 0 ? void 0 : resourceLinks.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: item.Link,
                        children: item.Title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 61
                      }, undefined)
                    }, i + "b", false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 43
                    }, undefined))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 33
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 29
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 25
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "w-4/5 sm:w-1/3 md:w-2/5 lg:w-2/6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "mt-12 footer-contact wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.8s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "footer-title",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  class: "mb-8 text-2xl font-bold text-white",
                  children: "Contact Us"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 29
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                class: "contact",
                children: contactLinks === null || contactLinks === void 0 ? void 0 : contactLinks.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: item.Link,
                    children: item.Title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 61
                  }, undefined)
                }, i + "c", false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 43
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 25
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "py-8 border-t border-gray-200 footer-copyright",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          class: "text-white",
          children: siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.CopyrightText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "particles-2",
      class: "particles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/home/activity.js":
/*!*************************************!*\
  !*** ./components/home/activity.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* harmony import */ var _home_business_talk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/business-talk */ "./components/home/business-talk.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\activity.js";





const Activity = ({
  activity
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: activity === null || activity === void 0 ? void 0 : activity.map((item, i) => buildActivityStyle(i, item))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, undefined);
};

const buildBusinessStepViewStyle = (index, item) => {
  if (index % 2 === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      class: "relative pt-20 about-area",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "w-full lg:w-1/2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "mx-4 mt-12 about-content wow fadeInLeftBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "mb-4 section-title",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "line"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 33
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "title",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                    source: item.Title,
                    escapeHtml: false
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 33
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 33
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                source: item.Description,
                escapeHtml: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: item.NavigateLink,
                class: "main-btn gradient-btn",
                children: item.NavigateLable
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "w-full lg:w-1/2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "mx-4 mt-12 text-center about-image wow fadeInRightBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
                image: item.Media
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "about-shape-1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: item.BgMedia
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      class: "relative pt-20 about-area",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "about-shape-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: item.BgMedia
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "w-full lg:w-1/2 lg:order-last",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "mx-4 mt-12 about-content wow fadeInLeftBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "mb-4 section-title",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "line"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 29
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "title",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                    source: item.Title,
                    escapeHtml: false
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 29
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 29
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                source: item.Description,
                escapeHtml: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: item.NavigateLink,
                class: "main-btn gradient-btn",
                children: item.NavigateLable
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 25
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "w-full lg:w-1/2 lg:order-first",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "mx-4 mt-12 text-center about-image wow fadeInRightBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
                image: item.Media
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 12
    }, undefined);
  }
};

const buildBusinessInvestmentViewStyle = (index, item) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_business_talk__WEBPACK_IMPORTED_MODULE_4__.default, {
      business: item
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 13
  }, undefined);
};

const buildActivityStyle = (index, item) => {
  if (item.__component.indexOf('business-steps') !== -1) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: item.Steps.map((item, index) => buildBusinessStepViewStyle(index, item))
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 9
  }, undefined);
  if (item.__component.indexOf('investment') !== -1) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: buildBusinessInvestmentViewStyle(index, item)
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Activity);

/***/ }),

/***/ "./components/home/article-content.js":
/*!********************************************!*\
  !*** ./components/home/article-content.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_component_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/component-resolver */ "./lib/component-resolver.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\article-content.js";



const PageBody = ({
  data
}) => {
  console.log("PageBody");
  console.log(data);
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "content",
    class: "services-area pt-120 page-content",
    children: "No content"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 22
  }, undefined); // return (<section id="content" class="services-area pt-120 age-content">
  //             {
  //                 resolverDynamicComponent(data, "content")
  //             }
  //         </section>)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "content",
    class: "services-area pt-120 page-content",
    children: data.map(dynamicContent => {
      return (0,_lib_component_resolver__WEBPACK_IMPORTED_MODULE_2__.resolverDynamicExtract)(dynamicContent);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PageBody);

/***/ }),

/***/ "./components/home/article-hero.js":
/*!*****************************************!*\
  !*** ./components/home/article-hero.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _empty_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty-box */ "./components/home/empty-box.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\article-hero.js";




const PageHero = ({
  data,
  color
}) => {
  var _data$Image, _data$Image$data, _data$BgImage, _data$BgImage$data;

  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_empty_box__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 22
  }, undefined);
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
    class: "header-hero",
    style: {
      backgroundImage: `url(` + centralBgImage + `)`
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "pt-32 mb-12 text-center lg:pt-48 header-hero-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "text-4xl font-light leading-tight header-sub-title wow fadeInUp " + textColor,
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.2s",
              children: data === null || data === void 0 ? void 0 : data.CentralText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "text-center header-hero-image wow fadeIn",
            "data-wow-duration": "1.3s",
            "data-wow-delay": "1.4s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "inline-block image-centered",
              src: centralImage,
              alt: "hero",
              style: {
                display: centralImage != null ? 'block' : 'none'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "pt-16 mb-12 text-center lg:pt-16 header-hero-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              class: "mb-3 text-4xl font-bold header-title wow fadeInUp " + textColor,
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.5s",
              children: data === null || data === void 0 ? void 0 : data.CentralTextDescription
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "particles-1",
      class: "particles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PageHero);

/***/ }),

/***/ "./components/home/brand.js":
/*!**********************************!*\
  !*** ./components/home/brand.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./components/image.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\brand.js";




const Brand = ({
  brand
}) => {
  const brandItemss = brand.BrandLogo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "pt-24 brand-area",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "items-center justify-center row lg:justify-between",
            children: brandItemss.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "single-logo hover:opacity-100 wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.2s",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
                image: item.Logo
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 29
              }, undefined)
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 25
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ }),

/***/ "./components/home/business-talk.js":
/*!******************************************!*\
  !*** ./components/home/business-talk.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image */ "./components/image.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\business-talk.js";





const BusinessTalk = ({
  business
}) => {
  var _business$Items;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "facts",
    class: "pt-20 video-counter",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full lg:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "relative pb-8 mt-12 video-content wow fadeIn",
            "data-wow-duration": "1s",
            "data-wow-delay": "0.5s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
              image: business.BgMedia,
              imageClass: "absolute bottom-0 left-0 -ml-8 dots"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "relative mr-6 rounded-lg shadow-md video-wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "video-image",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                  image: business.Media
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 29
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full lg:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn",
            "data-wow-duration": "1s",
            "data-wow-delay": "0.8s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "counter-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "mb-8 section-title",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "line"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 33
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "title",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                    source: business.Title,
                    escapeHtml: false
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 52
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 33
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                class: "text",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                  source: business.Description,
                  escapeHtml: false
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "row no-gutters",
              children: (_business$Items = business.Items) === null || _business$Items === void 0 ? void 0 : _business$Items.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "flex items-center justify-center single-counter counter-color-" + (i + 1),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "text-center counter-items",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    class: "text-xl font-bold text-white",
                    children: item.Title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 35
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    class: "text-white",
                    children: item.Description
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 35
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 31
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 31
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BusinessTalk);

/***/ }),

/***/ "./components/home/empty-box.js":
/*!**************************************!*\
  !*** ./components/home/empty-box.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\empty-box.js";


const EmptyBox = ({
  message
}) => {
  if (!message) message = "The content is empty";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    class: " pt-120",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "pb-10 text-center section-title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "m-auto line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 21
            }, undefined), message]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyBox);

/***/ }),

/***/ "./components/home/feature.js":
/*!************************************!*\
  !*** ./components/home/feature.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image */ "./components/image.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\feature.js";





const Feature = ({
  feature
}) => {
  const title = feature.CentralText;
  const items = feature.Items;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "features",
    class: "services-area pt-120",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "justify-center row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "pb-10 text-center section-title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "m-auto line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {
              source: title,
              escapeHtml: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "justify-center row",
        children: items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full sm:w-2/3 lg:w-1/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "single-services wow fadeIn",
            "data-wow-duration": "1s",
            "data-wow-delay": "0.2s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "services-icon",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                imageClass: 'shape',
                image: item.Media
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 36
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                class: item.IconClass
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 36
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 32
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "mt-8 services-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                class: "mb-8 text-xl font-bold text-gray-900",
                children: item.Title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 36
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                class: "mb-8 card-content",
                children: item.Description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 36
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: item.NavigateLink,
                class: "duration-300 hover:text-theme-color",
                children: [item.NavigateTextLabel, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "ml-2 lni lni-chevron-right"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 36
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 32
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 28
          }, undefined)
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 28
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ "./components/home/pinned-blog.js":
/*!****************************************!*\
  !*** ./components/home/pinned-blog.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image */ "./components/image.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\home\\pinned-blog.js";





const PinnedBlog = ({
  data,
  args1
}) => {
  var _args1$slice;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "blog",
    class: "blog-area pt-120",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full lg:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "pb-8 section-title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "title",
              children: data === null || data === void 0 ? void 0 : data.Title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {
              source: data === null || data === void 0 ? void 0 : data.Description,
              escapeHtml: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "justify-center row",
        children: args1 === null || args1 === void 0 ? void 0 : (_args1$slice = args1.slice(0, 3)) === null || _args1$slice === void 0 ? void 0 : _args1$slice.map((post, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full md:w-2/3 lg:w-1/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "mx-4 mt-10 single-blog wow fadeIn",
            "data-wow-duration": "1s",
            "data-wow-delay": "0.2s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "mb-5 overflow-hidden blog-image rounded-xl blog-image",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                image: post.attributes.image,
                imageClass: "w-full"
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 26
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "blog-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                class: "mb-6 text-2xl leading-snug text-gray-900 blog-title",
                children: post.attributes.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 26
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "text-theme-color-2",
                href: "/articles/" + post.attributes.slug,
                children: ["Chi ti\u1EBFt", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "ml-2 lni lni-chevron-right"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 30
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 26
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 22
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 18
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 18
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PinnedBlog);

/***/ }),

/***/ "./components/image.js":
/*!*****************************!*\
  !*** ./components/image.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\image.js";


const CustomImage = ({
  image,
  style,
  imageClass = null
}) => {
  var _image$data, _image$attributes;

  // if(!image) {
  //   return   (
  //      <img class="blank" src="blank" alt="blank image" />)
  // }
  if ((image === null || image === void 0 ? void 0 : (_image$data = image.data) === null || _image$data === void 0 ? void 0 : _image$data.attributes) == null && (image === null || image === void 0 ? void 0 : image.attributes) == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      class: "blank",
      src: "blank",
      alt: "blank image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined);
  }

  if (image !== null && image !== void 0 && (_image$attributes = image.attributes) !== null && _image$attributes !== void 0 && _image$attributes.url) {
    const {
      url,
      alternativeText,
      width,
      height
    } = image.attributes;
    const srcUrl = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getStrapiURL)() + url;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      class: imageClass !== null && imageClass !== void 0 ? imageClass : "",
      src: srcUrl,
      alt: "Logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined);
  } else {
    const {
      url,
      alternativeText,
      width,
      height
    } = image.data.attributes;
    const srcUrl = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getStrapiURL)() + url;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      class: imageClass !== null && imageClass !== void 0 ? imageClass : "",
      src: srcUrl,
      alt: "Logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (CustomImage);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\layout.js";




const Layout = ({
  children,
  categories,
  layout,
  color
}) => {
  var textColor = 'text-white';

  if (color) {
    textColor = color;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "hidden preloader",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "loader",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "ytp-spinner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "ytp-spinner-container",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "ytp-spinner-rotator",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "ytp-spinner-left",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "ytp-spinner-circle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "ytp-spinner-right",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "ytp-spinner-circle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      class: "header-area",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "navbar-area ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "container relative",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "w-full",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
                class: "flex items-center justify-between navbar navbar-expand-lg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "mr-4 navbar-brand " + textColor,
                  href: "/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                    image: layout.LogoImage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 33
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 29
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  class: "block navbar-toggler focus:outline-none lg:hidden",
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navbarOne",
                  "aria-controls": "navbarOne",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    class: "toggler-icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 33
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    class: "toggler-icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 33
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    class: "toggler-icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 33
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 29
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none",
                  id: "navbarOne",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__.default, {
                    color: textColor,
                    categories: categories
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 29
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 29
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_1__.default, {
      footer: layout.Footer,
      siteInfo: layout.SiteInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      class: "back-to-top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        class: "lni lni-chevron-up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 37
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\nav.js";



const Nav = ({
  categories,
  color
}) => {
  console.log(categories);
  var textColor = 'text-white';

  if (color) {
    textColor = color;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      id: "nav",
      class: "items-center content-start mr-auto lg:justify-end navbar-nav lg:flex " + textColor,
      children: categories.map(category => {
        var _category$attributes$;

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          class: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/pages/${category.attributes.slug}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              class: "page-scroll",
              href: `/pages/${category.attributes.slug}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: (_category$attributes$ = category.attributes.name) !== null && _category$attributes$ !== void 0 ? _category$attributes$ : category.attributes.Name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 22
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 22
          }, undefined)
        }, category.id, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/page-seo.js":
/*!********************************!*\
  !*** ./components/page-seo.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\page-seo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PageSeo = ({
  seo
}) => {
  const {
    defaultSeo,
    siteName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);

  const seoWithDefaults = _objectSpread(_objectSpread({}, defaultSeo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [fullSeo.metaTitle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.metaDescription && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.shareImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.article && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:type",
      content: "article"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 27
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PageSeo);

/***/ }),

/***/ "./components/seo.js":
/*!***************************!*\
  !*** ./components/seo.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\seo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Seo = ({
  seo
}) => {
  const {
    defaultSeo,
    siteName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);

  const seoWithDefaults = _objectSpread(_objectSpread({}, defaultSeo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [fullSeo.metaTitle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.metaDescription && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.shareImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.article && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:type",
      content: "article"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 27
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Seo);

/***/ }),

/***/ "./components/subcribe-box.js":
/*!************************************!*\
  !*** ./components/subcribe-box.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\subcribe-box.js";


const SubcribeBox = ({
  subcribeBox
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "px-6 pt-10 pb-20 mb-12 bg-white rounded-lg shadow-xl md:px-12 subscribe-area wow fadeIn",
    "data-wow-duration": "1s",
    "data-wow-delay": "0.5s",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "w-full lg:w-1/2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "lg:mt-12 subscribe-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            class: "text-xl font-bold sm:text-2xl subscribe-title",
            children: subcribeBox === null || subcribeBox === void 0 ? void 0 : subcribeBox.Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {
            source: subcribeBox === null || subcribeBox === void 0 ? void 0 : subcribeBox.Description,
            escapeHtml: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "w-full lg:w-1/2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "mt-12 ",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            action: subcribeBox === null || subcribeBox === void 0 ? void 0 : subcribeBox.POST_URL,
            class: "relative focus:outline-none float-right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: subcribeBox === null || subcribeBox === void 0 ? void 0 : subcribeBox.POST_URL,
              class: "main-btn gradient-btn",
              children: [" ", subcribeBox === null || subcribeBox === void 0 ? void 0 : subcribeBox.SubmitLabel]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SubcribeBox);

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; },
/* harmony export */   "getProductCatalogs": function() { return /* binding */ getProductCatalogs; },
/* harmony export */   "getProductCatalog": function() { return /* binding */ getProductCatalog; },
/* harmony export */   "getProducts": function() { return /* binding */ getProducts; },
/* harmony export */   "getProduct": function() { return /* binding */ getProduct; },
/* harmony export */   "getProductThumb": function() { return /* binding */ getProductThumb; },
/* harmony export */   "getProductDetail": function() { return /* binding */ getProductDetail; }
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const fetcher = url => fetch(url).then(res => res.json());
/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */


function getStrapiURL(path = "") {
  return `${"https://welead-cms-ejidv.ondigitalocean.app" || 0}${path}`;
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = _objectSpread({
    headers: {
      "Content-Type": "application/json"
    }
  }, options); // urlParamsObject.locale = "vi";
  // Build request URL


  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`; // Trigger API call

  const response = await fetch(requestUrl, mergedOptions); // Handle response

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();
  return data;
}
async function getProductCatalogs() {
  const categories = await fetchAPI("/product-categories");
  return categories;
}
async function getProductCatalog(slug, urlParamsObject = {}) {
  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const categories = await fetchAPI(`/product-categories?slug=${slug}&${queryString ? `${queryString}` : ""}`);
  return categories === null || categories === void 0 ? void 0 : categories.data[0];
}
async function getProducts() {
  const products = await fetchAPI("/products");
  return products;
}
async function getProduct(slug, urlParamsObject = {}) {
  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const products = await fetchAPI(`/products?slug=${slug}&${queryString ? `${queryString}` : ""}`);
  return products === null || products === void 0 ? void 0 : products.data[0];
}
function getProductThumb(id, urlParamsObject = {}) {
  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api/products/${id}?${queryString ? `${queryString}` : ""}`)}`;
  return swr__WEBPACK_IMPORTED_MODULE_1___default()(requestUrl, fetcher);
}
function getProductDetail(slug, urlParamsObject = {}) {
  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api/products/?filters[slug]=${slug}&${queryString ? `${queryString}` : ""}`)}`;
  console.log(requestUrl);
  return swr__WEBPACK_IMPORTED_MODULE_1___default()(requestUrl, fetcher);
}

/***/ }),

/***/ "./lib/component-resolver.js":
/*!***********************************!*\
  !*** ./lib/component-resolver.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolverComponent": function() { return /* binding */ resolverComponent; },
/* harmony export */   "resolverDynamicComponent": function() { return /* binding */ resolverDynamicComponent; },
/* harmony export */   "transformImageUriPeform": function() { return /* binding */ transformImageUriPeform; },
/* harmony export */   "resolverDynamicExtract": function() { return /* binding */ resolverDynamicExtract; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_pinned_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/pinned-blog */ "./components/home/pinned-blog.js");
/* harmony import */ var _components_home_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/activity */ "./components/home/activity.js");
/* harmony import */ var _components_home_brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/brand */ "./components/home/brand.js");
/* harmony import */ var _components_home_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/feature */ "./components/home/feature.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ "./lib/api.js");


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\lib\\component-resolver.js";







function resolverComponent(componentName, ...args) {
  switch (componentName) {
    case "PinnedBlog":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_pinned_blog__WEBPACK_IMPORTED_MODULE_1__.default, {
        data: args[0],
        args1: args[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this);

    case "Activity":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_activity__WEBPACK_IMPORTED_MODULE_2__.default, {
        activity: args[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this);

    case "Brand":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_brand__WEBPACK_IMPORTED_MODULE_3__.default, {
        brand: args[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this);

    case "Feature":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_feature__WEBPACK_IMPORTED_MODULE_4__.default, {
        feature: args[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this);
  }
}
function resolverDynamicComponent(source, ...args) {
  var contentBuilder = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);

  console.log(contentBuilder);
  source.forEach(dynamicContent => {
    contentBuilder += resolverDynamicExtract(dynamicContent);
  });
  console.log("contentBuilder");
  console.log(contentBuilder);
  return contentBuilder;
}
function transformImageUriPeform(uri, children, title, alt) {
  return uri.startsWith("/") ? (0,_api__WEBPACK_IMPORTED_MODULE_7__.getStrapiURL)(uri) : uri;
}
function resolverDynamicExtract(dynamicContent) {
  if (dynamicContent.__component.indexOf('dynamics.page-content') !== -1) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "justify-center row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "w-full lg:w-2/3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "pb-10 text-center section-title",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-2xl",
            children: dynamicContent.Name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 18
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "m-auto line"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: " pt-12 pb-10 row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_5___default()), {
        transformImageUri: transformImageUriPeform,
        source: dynamicContent.Content,
        escapeHtml: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, dynamicContent.Id, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 7
  }, this);
  if (dynamicContent.__component.indexOf('dynamics.page-image-content') !== -1) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "container pt-12 pb-10",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "w-full lg:w-1/2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "relative pb-8 mt-12 video-content wow fadeIn",
          "data-wow-duration": "1s",
          "data-wow-delay": "0.5s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "relative justify-center mr-6 rounded-lg shadow-md video-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "video-image bg-light-blue-300",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_6__.default, {
                imageClass: "image-fit",
                image: dynamicContent === null || dynamicContent === void 0 ? void 0 : dynamicContent.Image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "w-full lg:w-1/2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn",
          "data-wow-duration": "1s",
          "data-wow-delay": "0.8s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "counter-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "mb-8 section-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "line"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 27
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_5___default()), {
                source: dynamicContent.Title,
                escapeHtml: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 27
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 23
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "text",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_5___default()), {
                source: dynamicContent.Description,
                escapeHtml: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 23
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 7
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
}

/***/ }),

/***/ "./lib/media.js":
/*!**********************!*\
  !*** ./lib/media.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./lib/api.js");

function getStrapiMedia(media) {
  const {
    url
  } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(url) : url;
  return imageUrl;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, pageProps);
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/css/tailwind.css */ "./assets/css/tailwind.css");
/* harmony import */ var _assets_css_tailwind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_tailwind_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_css_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/css/slick.css */ "./assets/css/slick.css");
/* harmony import */ var _assets_css_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_css_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_animate_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/css/animate.css */ "./assets/css/animate.css");
/* harmony import */ var _assets_css_animate_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_animate_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_css_icon_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/css/icon.css */ "./assets/css/icon.css");
/* harmony import */ var _assets_css_icon_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_icon_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/css/magnific-popup.css */ "./assets/css/magnific-popup.css");
/* harmony import */ var _assets_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_css_tiny_slider_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/css/tiny-slider.css */ "./assets/css/tiny-slider.css");
/* harmony import */ var _assets_css_tiny_slider_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_tiny_slider_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/css/glightbox.min.css */ "./assets/css/glightbox.min.css");
/* harmony import */ var _assets_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













 // Store Strapi Global object in context

const GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_11__.createContext)({});

const MyApp = ({
  Component,
  pageProps
}) => {
  var _global$attributes;

  const {
    global
  } = pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,_lib_media__WEBPACK_IMPORTED_MODULE_13__.getStrapiMedia)(global === null || global === void 0 ? void 0 : (_global$attributes = global.attributes) === null || _global$attributes === void 0 ? void 0 : _global$attributes.favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/vendor/jquery-3.5.1-min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/vendor/modernizr-3.7.1.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/jquery.easing.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/scrolling-nav.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/slick.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/wow.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/particles.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/main.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
      value: global === null || global === void 0 ? void 0 : global.attributes,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }, undefined)]
  }, void 0, true);
};

MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx); // Fetch global site settings from Strapi

  const globalRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_12__.fetchAPI)("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*"
      }
    }
  });
  const layoutInfo = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_12__.fetchAPI)("/homepage", {
    populate: {
      seo: {
        populate: "*"
      },
      Footer: {
        populate: {
          SubcribeBox: {
            populate: "*"
          },
          HyperLink: {
            populate: "*"
          },
          BgImage: {
            populate: "*"
          }
        }
      },
      SiteInfo: {
        populate: "*"
      },
      HeaderBgImage: {
        populate: "*"
      },
      HeroCentralImage: {
        populate: "*"
      },
      LogoImage: {
        populate: "*"
      }
    }
  });
  const categories = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_12__.fetchAPI)("/categories", {
    filters: {
      IsTopMenu: {
        "[$eq]": "true"
      }
    },
    populate: {
      PageHero: {
        populate: "*"
      },
      PageBody: {
        populate: {
          Image: {
            populate: "*"
          }
        }
      }
    }
  }); // Pass the data to our page via props

  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global: globalRes.data,
      layoutInfo: layoutInfo.data.attributes,
      categories: categories.data
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./pages/pages/[slug].js":
/*!*******************************!*\
  !*** ./pages/pages/[slug].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_home_article_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/article-hero */ "./components/home/article-hero.js");
/* harmony import */ var _components_home_article_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/article-content */ "./components/home/article-content.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ "./components/seo.js");
/* harmony import */ var _components_page_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/page-seo */ "./components/page-seo.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\pages\\pages\\[slug].js";







const Page = ({
  slug,
  category,
  categories,
  layoutInfo
}) => {
  var _category, _category2, _category2$attributes;

  // const seo = {
  //   metaTitle: category.attributes.name,
  //   metaDescription: `All ${category.attributes.name} articles`,
  // }
  category = categories.filter(page => page.attributes.slug === slug)[0]; // console.log("category");
  // console.log(category);

  console.log((_category = category) === null || _category === void 0 ? void 0 : _category.attributes.TextColor);
  var textColor;

  if (((_category2 = category) === null || _category2 === void 0 ? void 0 : (_category2$attributes = _category2.attributes) === null || _category2$attributes === void 0 ? void 0 : _category2$attributes.TextColor) == 'Black') {
    textColor = 'text-black';
  } else {
    textColor = 'text-white';
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    categories: categories,
    layout: layoutInfo,
    color: textColor,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_page_seo__WEBPACK_IMPORTED_MODULE_6__.default, {
      seo: category.attributes.seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_article_hero__WEBPACK_IMPORTED_MODULE_3__.default, {
      data: category.attributes.PageHero,
      color: textColor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_article_content__WEBPACK_IMPORTED_MODULE_4__.default, {
      data: category.attributes.PageBody
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), category.attributes.Name]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

async function getStaticPaths(context) {
  console.log("context.slug");
  const categoriesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)("/categories", {
    fields: ["slug"]
  });
  return {
    paths: categoriesRes.data.map(category => ({
      params: {
        slug: category.attributes.slug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  // const articlesRes = await fetchAPI("/categories", {
  //   filters: {
  //     slug: params.slug,
  //   },
  //   populate: {
  //     PageContent: { populate: "*" }
  //   },
  // })
  // console.log("articlesRes");
  // console.log(articlesRes.data.attributes);
  return {
    props: {
      slug: params.slug
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./assets/css/animate.css":
/*!********************************!*\
  !*** ./assets/css/animate.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/glightbox.min.css":
/*!**************************************!*\
  !*** ./assets/css/glightbox.min.css ***!
  \**************************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/icon.css":
/*!*****************************!*\
  !*** ./assets/css/icon.css ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/magnific-popup.css":
/*!***************************************!*\
  !*** ./assets/css/magnific-popup.css ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/slick.css":
/*!******************************!*\
  !*** ./assets/css/slick.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/tailwind.css":
/*!*********************************!*\
  !*** ./assets/css/tailwind.css ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/tiny-slider.css":
/*!************************************!*\
  !*** ./assets/css/tiny-slider.css ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-markdown");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/pages/[slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaG9tZS9hY3Rpdml0eS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2hvbWUvYXJ0aWNsZS1jb250ZW50LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaG9tZS9hcnRpY2xlLWhlcm8uanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9ob21lL2JyYW5kLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaG9tZS9idXNpbmVzcy10YWxrLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaG9tZS9lbXB0eS1ib3guanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9ob21lL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9ob21lL3Bpbm5lZC1ibG9nLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9wYWdlLXNlby5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL3N1YmNyaWJlLWJveC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvYXBpLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2xpYi9jb21wb25lbnQtcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbGliL21lZGlhLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9wYWdlcy9wYWdlcy9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicXNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3QtbWFya2Rvd25cIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJzd3JcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvaWdub3JlZHxEOlxcV29ya1xcVHJhbnNmb21hdGlvblxcbGFuZGluZ3NpdGVcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiRm9vdGVyIiwiZm9vdGVyIiwic2l0ZUluZm8iLCJxdWlja0xpbmtzIiwiSHlwZXJMaW5rIiwiZmlsdGVyIiwibGluayIsIkdyb3VwVmFsdWUiLCJyZXNvdXJjZUxpbmtzIiwiY29udGFjdExpbmtzIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0U3RyYXBpVVJMIiwiQmdJbWFnZSIsImRhdGEiLCJhdHRyaWJ1dGVzIiwidXJsIiwiU3ViY3JpYmVCb3giLCJMb2dvIiwiQWx0ZXJOYW1lIiwibWFwIiwiaXRlbSIsImkiLCJMaW5rIiwiVGl0bGUiLCJDb3B5cmlnaHRUZXh0IiwiQWN0aXZpdHkiLCJhY3Rpdml0eSIsImJ1aWxkQWN0aXZpdHlTdHlsZSIsImJ1aWxkQnVzaW5lc3NTdGVwVmlld1N0eWxlIiwiaW5kZXgiLCJEZXNjcmlwdGlvbiIsIk5hdmlnYXRlTGluayIsIk5hdmlnYXRlTGFibGUiLCJNZWRpYSIsImlkIiwiQmdNZWRpYSIsImJ1aWxkQnVzaW5lc3NJbnZlc3RtZW50Vmlld1N0eWxlIiwiX19jb21wb25lbnQiLCJpbmRleE9mIiwiU3RlcHMiLCJQYWdlQm9keSIsImNvbnNvbGUiLCJsb2ciLCJkeW5hbWljQ29udGVudCIsInJlc29sdmVyRHluYW1pY0V4dHJhY3QiLCJQYWdlSGVybyIsImNvbG9yIiwiY2VudHJhbEltYWdlIiwiY2VudHJhbEJnSW1hZ2UiLCJJbWFnZSIsInRleHRDb2xvciIsIkNlbnRyYWxUZXh0IiwiZGlzcGxheSIsIkNlbnRyYWxUZXh0RGVzY3JpcHRpb24iLCJCcmFuZCIsImJyYW5kIiwiYnJhbmRJdGVtc3MiLCJCcmFuZExvZ28iLCJCdXNpbmVzc1RhbGsiLCJidXNpbmVzcyIsIkl0ZW1zIiwiRW1wdHlCb3giLCJtZXNzYWdlIiwiRmVhdHVyZSIsImZlYXR1cmUiLCJ0aXRsZSIsIml0ZW1zIiwiSWNvbkNsYXNzIiwiTmF2aWdhdGVUZXh0TGFiZWwiLCJQaW5uZWRCbG9nIiwiYXJnczEiLCJzbGljZSIsInBvc3QiLCJpbWFnZSIsInNsdWciLCJDdXN0b21JbWFnZSIsInN0eWxlIiwiaW1hZ2VDbGFzcyIsImFsdGVybmF0aXZlVGV4dCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjVXJsIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJjYXRlZ29yaWVzIiwibGF5b3V0IiwiTG9nb0ltYWdlIiwiU2l0ZUluZm8iLCJOYXYiLCJjYXRlZ29yeSIsIm5hbWUiLCJOYW1lIiwiUGFnZVNlbyIsInNlbyIsImRlZmF1bHRTZW8iLCJzaXRlTmFtZSIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0Iiwic2VvV2l0aERlZmF1bHRzIiwiZnVsbFNlbyIsIm1ldGFUaXRsZSIsInNoYXJlSW1hZ2UiLCJnZXRTdHJhcGlNZWRpYSIsIm1ldGFEZXNjcmlwdGlvbiIsImFydGljbGUiLCJTZW8iLCJzdWJjcmliZUJveCIsIlBPU1RfVVJMIiwiU3VibWl0TGFiZWwiLCJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInBhdGgiLCJwcm9jZXNzIiwiZmV0Y2hBUEkiLCJ1cmxQYXJhbXNPYmplY3QiLCJvcHRpb25zIiwibWVyZ2VkT3B0aW9ucyIsImhlYWRlcnMiLCJxdWVyeVN0cmluZyIsInFzIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwib2siLCJlcnJvciIsInN0YXR1c1RleHQiLCJFcnJvciIsImdldFByb2R1Y3RDYXRhbG9ncyIsImdldFByb2R1Y3RDYXRhbG9nIiwiZ2V0UHJvZHVjdHMiLCJwcm9kdWN0cyIsImdldFByb2R1Y3QiLCJnZXRQcm9kdWN0VGh1bWIiLCJ1c2VTV1IiLCJnZXRQcm9kdWN0RGV0YWlsIiwicmVzb2x2ZXJDb21wb25lbnQiLCJjb21wb25lbnROYW1lIiwiYXJncyIsInJlc29sdmVyRHluYW1pY0NvbXBvbmVudCIsInNvdXJjZSIsImNvbnRlbnRCdWlsZGVyIiwiZm9yRWFjaCIsInRyYW5zZm9ybUltYWdlVXJpUGVmb3JtIiwidXJpIiwiYWx0Iiwic3RhcnRzV2l0aCIsIkNvbnRlbnQiLCJJZCIsIm1lZGlhIiwiaW1hZ2VVcmwiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0IiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ2YWx1ZSIsImhhc1ByZWZldGNoIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibGVuZ3RoIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImFwcEdldEluaXRpYWxQcm9wcyIsInJlbmRlciIsImNyZWF0ZUNvbnRleHQiLCJNeUFwcCIsImdsb2JhbCIsImZhdmljb24iLCJhcHBQcm9wcyIsImdsb2JhbFJlcyIsInBvcHVsYXRlIiwibGF5b3V0SW5mbyIsIkhlYWRlckJnSW1hZ2UiLCJIZXJvQ2VudHJhbEltYWdlIiwiZmlsdGVycyIsIklzVG9wTWVudSIsIlBhZ2UiLCJUZXh0Q29sb3IiLCJnZXRTdGF0aWNQYXRocyIsImNvbnRleHQiLCJjYXRlZ29yaWVzUmVzIiwiZmllbGRzIiwicGF0aHMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7OztBQ2hCQSx1R0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQztBQUFWLENBQUQsS0FBMEI7QUFBQTs7QUFFckMsUUFBTUMsVUFBVSxHQUFHRixNQUFILGFBQUdBLE1BQUgsdUJBQUdBLE1BQU0sQ0FBRUcsU0FBUixDQUFrQkMsTUFBbEIs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RFIsS0FERjtBQUlMZ3BCLGNBQVUsRUFBRTtBQUpQLEdBQVA7QUFNRDtBQUtELCtEQUFlVCxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRWEsa0JBQWtCLE1BQU0sd0JBQXdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7O0FDREEseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUMseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3BhZ2VzL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCJcclxuaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IFN1YmNyaWJlQm94IGZyb20gXCIuL3N1YmNyaWJlLWJveFwiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgZm9vdGVyLCBzaXRlSW5mbyB9KSA9PiB7XHJcbiAgXHJcbiAgICBjb25zdCBxdWlja0xpbmtzID0gZm9vdGVyPy5IeXBlckxpbmsuZmlsdGVyKGxpbmsgPT4gbGluay5Hcm91cFZhbHVlID09ICdRdWlja0xpbmsnKTtcclxuICAgIGNvbnN0IHJlc291cmNlTGlua3MgPSBmb290ZXI/Lkh5cGVyTGluay5maWx0ZXIobGluayA9PiBsaW5rLkdyb3VwVmFsdWUgPT0gJ1Jlc291cmNlcycpO1xyXG4gICAgY29uc3QgY29udGFjdExpbmtzID0gZm9vdGVyPy5IeXBlckxpbmsuZmlsdGVyKGxpbmsgPT4gbGluay5Hcm91cFZhbHVlID09ICdDb250YWN0VXMnKTtcclxuICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgaWQ9XCJmb290ZXJcIiBjbGFzcz1cInJlbGF0aXZlIHotMTAgZm9vdGVyLWFyZWEgcHQtMTIwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWJnXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAgYHVybChgK2dldFN0cmFwaVVSTCgpICsgZm9vdGVyPy5CZ0ltYWdlPy5kYXRhLmF0dHJpYnV0ZXMudXJsK2ApYCB9fSA+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAoZm9vdGVyPy5TdWJjcmliZUJveCkgPyAoIDxTdWJjcmliZUJveCBzdWJjcmliZUJveD17Zm9vdGVyPy5TdWJjcmliZUJveH0gLz4pIDogKDxkaXY+PC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXdpZGdldCBwYi0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy00LzUgbWQ6dy0zLzUgbGc6dy0yLzZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTIgZm9vdGVyLWFib3V0IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaW5saW5lLWJsb2NrIG1iLTggbG9nb1wiIGhyZWY9XCJpbmRleC5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2U9e3NpdGVJbmZvPy5Mb2dvfSAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dvLnN2Z1wiIGFsdD1cImxvZ29cIiBjbGFzcz1cInctNDBcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBiLTEwIHByLTEwIGxlYWRpbmctc251ZyB0ZXh0LXdoaXRlIGNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2l0ZUluZm8/LkFsdGVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZmxleCBmb290ZXItc29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImxuaSBsbmktZmFjZWJvb2stZmlsbGVkXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJsbmkgbG5pLXR3aXR0ZXItZmlsbGVkXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJsbmkgbG5pLWluc3RhZ3JhbS1maWxsZWRcIj48L2k+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImxuaSBsbmktbGlua2VkaW4tb3JpZ2luYWxcIj48L2k+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNC81IHNtOnctMi8zIG1kOnctMy81IGxnOnctMi82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIHNtOnctMS8yIG1kOnctMS8yIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTIgbGluay13cmFwcGVyIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi04IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+UXVpY2sgTGluazwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHF1aWNrTGlua3M/Lm1hcCgoaXRlbSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxsaSBrZXk9e2kgKyBcImFcIn0+PGEgaHJlZj17aXRlbS5MaW5rfT57aXRlbS5UaXRsZX08L2E+PC9saT4gKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBzbTp3LTEvMiBtZDp3LTEvMiBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyIGxpbmstd3JhcHBlciB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC42c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWItOCB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlJlc291cmNlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJlc291cmNlTGlua3M/Lm1hcCgoaXRlbSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxsaSBrZXk9e2kgKyBcImJcIn0+PGEgaHJlZj17aXRlbS5MaW5rfT57aXRlbS5UaXRsZX08L2E+PC9saT4gKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNC81IHNtOnctMS8zIG1kOnctMi81IGxnOnctMi82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyIGZvb3Rlci1jb250YWN0IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1iLTggdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5Db250YWN0IFVzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjb250YWN0TGlua3M/Lm1hcCgoaXRlbSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxsaSBrZXk9e2kgKyBcImNcIn0+PGEgaHJlZj17aXRlbS5MaW5rfT57aXRlbS5UaXRsZX08L2E+PC9saT4gKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInB5LTggYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIGZvb3Rlci1jb3B5cmlnaHRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIHtzaXRlSW5mbz8uQ29weXJpZ2h0VGV4dH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYXJ0aWNsZXMtMlwiIGNsYXNzPVwicGFydGljbGVzXCI+PC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuaW1wb3J0IEJ1c2luZXNzVGFsayBmcm9tICcuLi9ob21lL2J1c2luZXNzLXRhbGsnXHJcblxyXG5jb25zdCBBY3Rpdml0eSA9ICh7IGFjdGl2aXR5IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHsgYWN0aXZpdHk/Lm1hcCgoaXRlbSwgaSkgPT4gKCAgXHJcbiAgICAgICAgICAgIGJ1aWxkQWN0aXZpdHlTdHlsZShpLCBpdGVtKVxyXG4gICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgYnVpbGRCdXNpbmVzc1N0ZXBWaWV3U3R5bGUgPSAoaW5kZXgsIGl0ZW0pID0+IHtcclxuICAgIGlmIChpbmRleCAlMiA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uICBjbGFzcz1cInJlbGF0aXZlIHB0LTIwIGFib3V0LWFyZWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTIgYWJvdXQtY29udGVudCB3b3cgZmFkZUluTGVmdEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi00IHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17aXRlbS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0uTmF2aWdhdGVMaW5rfSBjbGFzcz1cIm1haW4tYnRuIGdyYWRpZW50LWJ0blwiPntpdGVtLk5hdmlnYXRlTGFibGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTIgdGV4dC1jZW50ZXIgYWJvdXQtaW1hZ2Ugd293IGZhZGVJblJpZ2h0QmlnXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtpdGVtLk1lZGlhfSAga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1zaGFwZS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e2l0ZW0uQmdNZWRpYX0gIGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgIDxzZWN0aW9uICBjbGFzcz1cInJlbGF0aXZlIHB0LTIwIGFib3V0LWFyZWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LXNoYXBlLTJcIj5cclxuICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtpdGVtLkJnTWVkaWF9ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yIGxnOm9yZGVyLWxhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXgtNCBtdC0xMiBhYm91dC1jb250ZW50IHdvdyBmYWRlSW5MZWZ0QmlnXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17aXRlbS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5OYXZpZ2F0ZUxpbmt9IGNsYXNzPVwibWFpbi1idG4gZ3JhZGllbnQtYnRuXCI+e2l0ZW0uTmF2aWdhdGVMYWJsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMiBsZzpvcmRlci1maXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTIgdGV4dC1jZW50ZXIgYWJvdXQtaW1hZ2Ugd293IGZhZGVJblJpZ2h0QmlnXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2U9e2l0ZW0uTWVkaWF9ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgPC9zZWN0aW9uPik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBidWlsZEJ1c2luZXNzSW52ZXN0bWVudFZpZXdTdHlsZSA9IChpbmRleCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnVzaW5lc3NUYWxrIGJ1c2luZXNzPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkQWN0aXZpdHlTdHlsZSA9IChpbmRleCwgaXRlbSkgPT4geyBcclxuICAgIGlmICgoaXRlbS5fX2NvbXBvbmVudCkuaW5kZXhPZignYnVzaW5lc3Mtc3RlcHMnKSAhPT0gLTEpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtLlN0ZXBzLm1hcCgoaXRlbSwgaW5kZXgpID0+ICggXHJcbiAgICAgICAgICAgICAgICBidWlsZEJ1c2luZXNzU3RlcFZpZXdTdHlsZShpbmRleCwgaXRlbSlcclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoaXRlbS5fX2NvbXBvbmVudC5pbmRleE9mKCdpbnZlc3RtZW50JykgIT09IC0xKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGJ1aWxkQnVzaW5lc3NJbnZlc3RtZW50Vmlld1N0eWxlKGluZGV4LCBpdGVtKVxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eVxyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyByZXNvbHZlckR5bmFtaWNDb21wb25lbnQsIHJlc29sdmVyRHluYW1pY0V4dHJhY3QgfSBmcm9tIFwiLi4vLi4vbGliL2NvbXBvbmVudC1yZXNvbHZlclwiO1xyXG5cclxuY29uc3QgUGFnZUJvZHkgPSAoeyBkYXRhIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiUGFnZUJvZHlcIilcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgaWYoIWRhdGEpIHJldHVybiA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cInNlcnZpY2VzLWFyZWEgcHQtMTIwIHBhZ2UtY29udGVudFwiPlxyXG4gICAgICAgIE5vIGNvbnRlbnRcclxuICAgIDwvc2VjdGlvbj5cclxuICAgXHJcbiAgICAvLyByZXR1cm4gKDxzZWN0aW9uIGlkPVwiY29udGVudFwiIGNsYXNzPVwic2VydmljZXMtYXJlYSBwdC0xMjAgYWdlLWNvbnRlbnRcIj5cclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlckR5bmFtaWNDb21wb25lbnQoZGF0YSwgXCJjb250ZW50XCIpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIDwvc2VjdGlvbj4pXHJcblxyXG4gICAgcmV0dXJuICg8c2VjdGlvbiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cInNlcnZpY2VzLWFyZWEgcHQtMTIwIHBhZ2UtY29udGVudFwiPlxyXG4gICAge1xyXG4gICAgICAgIGRhdGEubWFwKGR5bmFtaWNDb250ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgcmVzb2x2ZXJEeW5hbWljRXh0cmFjdChkeW5hbWljQ29udGVudCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIDwvc2VjdGlvbj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VCb2R5XHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBFbXB0eUJveCBmcm9tIFwiLi9lbXB0eS1ib3hcIjtcclxuXHJcbmNvbnN0IFBhZ2VIZXJvID0gKHsgZGF0YSwgY29sb3IgfSkgPT4ge1xyXG4gXHJcbiAgICBpZighZGF0YSkgcmV0dXJuIDxFbXB0eUJveCAgLz5cclxuXHJcbiAgICB2YXIgY2VudHJhbEltYWdlLGNlbnRyYWxCZ0ltYWdlO1xyXG4gICAgaWYoZGF0YS5JbWFnZT8uZGF0YT8uYXR0cmlidXRlcy51cmwpIHtcclxuICAgICAgICAgIGNlbnRyYWxJbWFnZSA9ICAgICBnZXRTdHJhcGlVUkwoKSArIGRhdGEuSW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXMudXJsO1xyXG4gICAgfVxyXG4gICAgaWYoZGF0YS5CZ0ltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzLnVybCkge1xyXG4gICAgICAgIGNlbnRyYWxCZ0ltYWdlID0gICAgIGdldFN0cmFwaVVSTCgpICsgZGF0YS5CZ0ltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzLnVybDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGV4dENvbG9yICA9ICd0ZXh0LXdoaXRlJztcclxuICAgIGlmKGNvbG9yKSB7XHJcbiAgICAgICAgdGV4dENvbG9yID0gY29sb3JcclxuICAgIH0gXHJcbiAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCIgXCIgY2xhc3M9XCJoZWFkZXItaGVyb1wiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogIGB1cmwoYCtjZW50cmFsQmdJbWFnZStgKWAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0zMiBtYi0xMiB0ZXh0LWNlbnRlciBsZzpwdC00OCBoZWFkZXItaGVyby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9e1widGV4dC00eGwgZm9udC1saWdodCBsZWFkaW5nLXRpZ2h0IGhlYWRlci1zdWItdGl0bGUgd293IGZhZGVJblVwIFwiICArIHRleHRDb2xvcn0gZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+eyBkYXRhPy5DZW50cmFsVGV4dH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBoZWFkZXItaGVyby1pbWFnZSB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIxLjRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBpbWFnZS1jZW50ZXJlZFwiIHNyYz17Y2VudHJhbEltYWdlfSBhbHQ9XCJoZXJvXCIgc3R5bGU9eyB7IGRpc3BsYXk6IGNlbnRyYWxJbWFnZSAhPSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyB9IH0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0xNiBtYi0xMiB0ZXh0LWNlbnRlciBsZzpwdC0xNiBoZWFkZXItaGVyby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPXtcIm1iLTMgdGV4dC00eGwgZm9udC1ib2xkIGhlYWRlci10aXRsZSB3b3cgZmFkZUluVXAgXCIgKyB0ZXh0Q29sb3J9ICBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE/LkNlbnRyYWxUZXh0RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYXJ0aWNsZXMtMVwiIGNsYXNzPVwicGFydGljbGVzXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZXJvXHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuY29uc3QgQnJhbmQgPSAoeyBicmFuZCB9KSA9PiB7XHJcbiAgXHJcbmNvbnN0IGJyYW5kSXRlbXNzID0gYnJhbmQuQnJhbmRMb2dvO1xyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInB0LTI0IGJyYW5kLWFyZWFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdyBsZzpqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7IGJyYW5kSXRlbXNzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gIGNsYXNzPVwic2luZ2xlLWxvZ28gaG92ZXI6b3BhY2l0eS0xMDAgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e2l0ZW0uTG9nb30gIGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJhbmRcclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5jb25zdCBCdXNpbmVzc1RhbGsgPSAoeyBidXNpbmVzcyB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cImZhY3RzXCIgY2xhc3M9XCJwdC0yMCB2aWRlby1jb3VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHBiLTggbXQtMTIgdmlkZW8tY29udGVudCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZT17YnVzaW5lc3MuQmdNZWRpYX0gIGltYWdlQ2xhc3M9e1wiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIC1tbC04IGRvdHNcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIG1yLTYgcm91bmRlZC1sZyBzaGFkb3ctbWQgdmlkZW8td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtidXNpbmVzcy5NZWRpYX0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgYmctYmx1ZS05MDAgYmctb3BhY2l0eS0yNSByb3VuZGVkLWxnIHZpZGVvLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1yNDRSS1d5ZmNGd1wiIGNsYXNzPVwidmlkZW8tcG9wdXBcIj48aSBjbGFzcz1cImxuaSBsbmktcGxheVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbC0wIG10LTEyIGNvdW50ZXItd3JhcHBlciBsZzpwbC0xNiB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC44c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItOCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj48UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2J1c2luZXNzLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17YnVzaW5lc3MuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJ1c2luZXNzLkl0ZW1zPy5tYXAoKGl0ZW0sIGkpID0+ICggIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNpbmdsZS1jb3VudGVyIGNvdW50ZXItY29sb3ItXCIgKyAoaSArIDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGNvdW50ZXItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntpdGVtLlRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZVwiPntpdGVtLkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gXHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVzaW5lc3NUYWxrXHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiIFxyXG5cclxuY29uc3QgRW1wdHlCb3ggPSAoeyBtZXNzYWdlIH0pID0+IHtcclxuIFxyXG4gICAgaWYoIW1lc3NhZ2UpIFxyXG4gICAgbWVzc2FnZSAgPSBcIlRoZSBjb250ZW50IGlzIGVtcHR5XCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiAgY2xhc3M9XCIgcHQtMTIwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItMTAgdGV4dC1jZW50ZXIgc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWF1dG8gbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgIFxyXG4gICAgPC9kaXY+ICBcclxuPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wdHlCb3ggXHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuXHJcbmNvbnN0IEZlYXR1cmUgPSAoeyBmZWF0dXJlIH0pID0+IHtcclxuIFxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZmVhdHVyZS5DZW50cmFsVGV4dDtcclxuICAgIGNvbnN0IGl0ZW1zID0gZmVhdHVyZS5JdGVtcyA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZXNcIiBjbGFzcz1cInNlcnZpY2VzLWFyZWEgcHQtMTIwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItMTAgdGV4dC1jZW50ZXIgc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWF1dG8gbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBzbTp3LTIvMyBsZzp3LTEvM1wiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtc2VydmljZXMgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3M9XCJzaGFwZS0xXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy1zaGFwZS5zdmdcIiBhbHQ9XCJzaGFwZVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2VDbGFzcz17J3NoYXBlJ30gaW1hZ2U9e2l0ZW0uTWVkaWF9ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3M9XCJzaGFwZS0xXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy1zaGFwZS0xLnN2Z1wiIGFsdD1cInNoYXBlXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9e2l0ZW0uSWNvbkNsYXNzfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC04IHNlcnZpY2VzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi04IHRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj57aXRlbS5UaXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItOCBjYXJkLWNvbnRlbnRcIj57aXRlbS5EZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5OYXZpZ2F0ZUxpbmt9IGNsYXNzPVwiZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtdGhlbWUtY29sb3JcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLk5hdmlnYXRlVGV4dExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1sLTIgbG5pIGxuaS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgPC9kaXY+ICBcclxuPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZSBcclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5cclxuY29uc3QgUGlubmVkQmxvZyA9ICh7IGRhdGEsIGFyZ3MxIH0pID0+IHtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJibG9nXCIgY2xhc3M9XCJibG9nLWFyZWEgcHQtMTIwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTggc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/LlRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2RhdGE/LkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuXHJcbiAgICAgICAgICAgIHsgYXJnczE/LnNsaWNlKDAsMyk/Lm1hcCgocG9zdCwgaSkgPT4gKCAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtZDp3LTIvMyBsZzp3LTEvM1wiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEwIHNpbmdsZS1ibG9nIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi01IG92ZXJmbG93LWhpZGRlbiBibG9nLWltYWdlIHJvdW5kZWQteGwgYmxvZy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZT17cG9zdC5hdHRyaWJ1dGVzLmltYWdlfSBpbWFnZUNsYXNzPXtcInctZnVsbFwifSAga2V5PXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx1bCBjbGFzcz1cImZsZXggbWItNSBtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBvc3RlZCBCeTogPGEgaHJlZj1cIiBcIj57cG9zdC5hdHRyaWJ1dGVzLmF1dGhvcj8ubmFtZX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtbC0xMlwiPntwb3N0LmF0dHJpYnV0ZXMucHVibGlzaGVkQXR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi02IHRleHQtMnhsIGxlYWRpbmctc251ZyB0ZXh0LWdyYXktOTAwIGJsb2ctdGl0bGVcIiAgPntwb3N0LmF0dHJpYnV0ZXMudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0ZXh0LXRoZW1lLWNvbG9yLTJcIiBocmVmPXtcIi9hcnRpY2xlcy9cIiArIHBvc3QuYXR0cmlidXRlcy5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGkgdGnhur90XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtbC0yIGxuaSBsbmktY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvc2VjdGlvbj5cclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGlubmVkQmxvZ1xyXG5cclxuIiwiIFxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xyXG5cclxuY29uc3QgQ3VzdG9tSW1hZ2UgPSAoeyBpbWFnZSwgc3R5bGUsIGltYWdlQ2xhc3MgPSBudWxsIH0pID0+IHtcclxuXHJcbiAgLy8gaWYoIWltYWdlKSB7XHJcbiAgLy8gICByZXR1cm4gICAoXHJcbiAgLy8gICAgICA8aW1nIGNsYXNzPVwiYmxhbmtcIiBzcmM9XCJibGFua1wiIGFsdD1cImJsYW5rIGltYWdlXCIgLz4pXHJcbiAgIFxyXG4gIC8vIH1cclxuXHJcbiAgaWYoaW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXMgPT0gbnVsbCAmJiBpbWFnZT8uYXR0cmlidXRlcyA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gICggXHJcbiAgICAgIDxpbWcgY2xhc3M9XCJibGFua1wiIHNyYz1cImJsYW5rXCIgYWx0PVwiYmxhbmsgaW1hZ2VcIiAvPilcclxuICAgXHJcbiAgfVxyXG5cclxuICBpZihpbWFnZT8uYXR0cmlidXRlcz8udXJsKSB7XHJcbiAgICBjb25zdCB7IHVybCwgYWx0ZXJuYXRpdmVUZXh0LCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5hdHRyaWJ1dGVzO1xyXG4gICAgY29uc3Qgc3JjVXJsID0gZ2V0U3RyYXBpVVJMKCkgKyB1cmw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGltZyBjbGFzcz17aW1hZ2VDbGFzcyA/PyBcIlwifSBzcmM9e3NyY1VybH0gYWx0PVwiTG9nb1wiIC8+XHJcbiAgICApIDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyB1cmwsIGFsdGVybmF0aXZlVGV4dCwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzO1xyXG4gICAgY29uc3Qgc3JjVXJsID0gZ2V0U3RyYXBpVVJMKCkgKyB1cmw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGltZyBjbGFzcz17aW1hZ2VDbGFzcyA/PyBcIlwifSBzcmM9e3NyY1VybH0gYWx0PVwiTG9nb1wiIC8+XHJcbiAgICApO1xyXG4gIH1cclxuIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21JbWFnZVxyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIlxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZcIlxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgY2F0ZWdvcmllcywgbGF5b3V0LCBjb2xvciB9KSA9PiB7XG4gICAgdmFyIHRleHRDb2xvciA9ICd0ZXh0LXdoaXRlJyA7XG4gICAgaWYoY29sb3IpIHtcbiAgICAgICAgdGV4dENvbG9yID0gY29sb3JcbiAgICB9ICBcbiAgICByZXR1cm4oXG4gIDw+XG4gICAgPGRpdiBjbGFzcz1cImhpZGRlbiBwcmVsb2FkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyLXJvdGF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXItbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXItY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlci1hcmVhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItYXJlYSBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbmF2YmFyIG5hdmJhci1leHBhbmQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyBcIm1yLTQgbmF2YmFyLWJyYW5kIFwiICsgdGV4dENvbG9yfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2hvbWVwYWdlLmF0dHJpYnV0ZXMuTG9nb0ltYWdlLmF0dHJpYnV0ZXMudXJsIH0gYWx0PVwiTG9nb1wiIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e2xheW91dC5Mb2dvSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7bGF5b3V0LlNpdGVJbmZvLlNpdGVOYW1lIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJibG9jayBuYXZiYXItdG9nZ2xlciBmb2N1czpvdXRsaW5lLW5vbmUgbGc6aGlkZGVuXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJPbmVcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyT25lXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgbGVmdC0wIHotMjAgaGlkZGVuIHctZnVsbCBweC01IHB5LTMgZHVyYXRpb24tMzAwIGJnLXdoaXRlIHNoYWRvdyBsZzp3LWF1dG8gY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGxnOmJsb2NrIHRvcC0xMDAgbXQtZnVsbCBsZzpzdGF0aWMgbGc6YmctdHJhbnNwYXJlbnQgbGc6c2hhZG93LW5vbmVcIiBpZD1cIm5hdmJhck9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY29sb3I9e3RleHRDb2xvcn0gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSByaWdodC0wIGhpZGRlbiBtdC0yIG1yLTI0IG5hdmJhci1idG4gc206aW5saW5lLWJsb2NrIGxnOm10LTAgbGc6c3RhdGljIGxnOm1yLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtYWluLWJ0biBncmFkaWVudC1idG5cIiBkYXRhLXNjcm9sbC1uYXY9XCIwXCIgaHJlZj17aG9tZXBhZ2UuYXR0cmlidXRlcy5IZXJvPy5RdWlja0xpbms/LkhyZWZ9IHJlbD1cIm5vZm9sbG93XCI+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZXBhZ2UuYXR0cmlidXRlcy5IZXJvPy5RdWlja0xpbms/LlRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PiAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvZGl2PiAgXG4gICAgPC9oZWFkZXI+XG5cbiAgICBcbiAgICB7Y2hpbGRyZW59XG4gICAgIFxuICAgIDxGb290ZXIgZm9vdGVyPXtsYXlvdXQuRm9vdGVyfSBzaXRlSW5mbz17bGF5b3V0LlNpdGVJbmZvfSAvPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJiYWNrLXRvLXRvcFwiPjxpIGNsYXNzPVwibG5pIGxuaS1jaGV2cm9uLXVwXCI+PC9pPjwvYT5cbiAgPC8+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMsIGNvbG9yIH0pID0+IHtcbiAgY29uc29sZS5sb2coY2F0ZWdvcmllcylcbiAgdmFyIHRleHRDb2xvciAgPSAndGV4dC13aGl0ZSc7XG4gIGlmKGNvbG9yKSB7XG4gICAgICB0ZXh0Q29sb3IgPSBjb2xvclxuICB9IFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWwgaWQ9XCJuYXZcIiBjbGFzcz17IFwiaXRlbXMtY2VudGVyIGNvbnRlbnQtc3RhcnQgbXItYXV0byBsZzpqdXN0aWZ5LWVuZCBuYXZiYXItbmF2IGxnOmZsZXggXCIgKyB0ZXh0Q29sb3IgfT5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZXMvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2Utc2Nyb2xsXCIgaHJlZj17YC9wYWdlcy8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgIDxiID4gICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZSA/PyBjYXRlZ29yeS5hdHRyaWJ1dGVzLk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vcGFnZXMvX2FwcFwiXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuXG5jb25zdCBQYWdlU2VvID0gKHsgc2VvIH0pID0+IHtcbiAgY29uc3QgeyBkZWZhdWx0U2VvLCBzaXRlTmFtZSB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KVxuICBjb25zdCBzZW9XaXRoRGVmYXVsdHMgPSB7XG4gICAgLi4uZGVmYXVsdFNlbyxcbiAgICAuLi5zZW8sXG4gIH1cbiAgY29uc3QgZnVsbFNlbyA9IHtcbiAgICAuLi5zZW9XaXRoRGVmYXVsdHMsXG4gICAgLy8gQWRkIHRpdGxlIHN1ZmZpeFxuICAgIG1ldGFUaXRsZTogYCR7c2VvV2l0aERlZmF1bHRzLm1ldGFUaXRsZX0gfCAke3NpdGVOYW1lfWAsXG4gICAgLy8gR2V0IGZ1bGwgaW1hZ2UgVVJMXG4gICAgc2hhcmVJbWFnZTogZ2V0U3RyYXBpTWVkaWEoc2VvV2l0aERlZmF1bHRzLnNoYXJlSW1hZ2UpLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIHtmdWxsU2VvLm1ldGFUaXRsZSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHRpdGxlPntmdWxsU2VvLm1ldGFUaXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtmdWxsU2VvLm1ldGFUaXRsZX0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YVRpdGxlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7ZnVsbFNlby5tZXRhRGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7ZnVsbFNlby5zaGFyZUltYWdlICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJpbWFnZVwiIGNvbnRlbnQ9e2Z1bGxTZW8uc2hhcmVJbWFnZX0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAge2Z1bGxTZW8uYXJ0aWNsZSAmJiA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+fVxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICA8L0hlYWQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVNlb1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vcGFnZXMvX2FwcFwiXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuXG5jb25zdCBTZW8gPSAoeyBzZW8gfSkgPT4ge1xuICBjb25zdCB7IGRlZmF1bHRTZW8sIHNpdGVOYW1lIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXG4gIGNvbnN0IHNlb1dpdGhEZWZhdWx0cyA9IHtcbiAgICAuLi5kZWZhdWx0U2VvLFxuICAgIC4uLnNlbyxcbiAgfVxuICBjb25zdCBmdWxsU2VvID0ge1xuICAgIC4uLnNlb1dpdGhEZWZhdWx0cyxcbiAgICAvLyBBZGQgdGl0bGUgc3VmZml4XG4gICAgbWV0YVRpdGxlOiBgJHtzZW9XaXRoRGVmYXVsdHMubWV0YVRpdGxlfSB8ICR7c2l0ZU5hbWV9YCxcbiAgICAvLyBHZXQgZnVsbCBpbWFnZSBVUkxcbiAgICBzaGFyZUltYWdlOiBnZXRTdHJhcGlNZWRpYShzZW9XaXRoRGVmYXVsdHMuc2hhcmVJbWFnZSksXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAge2Z1bGxTZW8ubWV0YVRpdGxlICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8dGl0bGU+e2Z1bGxTZW8ubWV0YVRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YVRpdGxlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17ZnVsbFNlby5tZXRhVGl0bGV9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmdWxsU2VvLnNoYXJlSW1hZ2UgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtmdWxsU2VvLnNoYXJlSW1hZ2V9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtmdWxsU2VvLnNoYXJlSW1hZ2V9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7ZnVsbFNlby5hcnRpY2xlICYmIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz59XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgIDwvSGVhZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZW9cbiIsImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbiBcclxuXHJcbmNvbnN0IFN1YmNyaWJlQm94ID0gKHsgc3ViY3JpYmVCb3ggfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwicHgtNiBwdC0xMCBwYi0yMCBtYi0xMiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy14bCBtZDpweC0xMiBzdWJzY3JpYmUtYXJlYSB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxnOm10LTEyIHN1YnNjcmliZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHNtOnRleHQtMnhsIHN1YnNjcmliZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge3N1YmNyaWJlQm94Py5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3N1YmNyaWJlQm94Py5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj0geyBzdWJjcmliZUJveD8uUE9TVF9VUkwgfSBjbGFzcz1cInJlbGF0aXZlIGZvY3VzOm91dGxpbmUtbm9uZSBmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwidHlwZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWwvcGhvbmUgbnVtYmVyXCIgY2xhc3M9XCJ3LWZ1bGwgcHktNCBwbC02IHByLTQwIGR1cmF0aW9uLTMwMCBib3JkZXItMiByb3VuZGVkIGZvY3VzOmJvcmRlci10aGVtZS1jb2xvciBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBzdWJjcmliZUJveD8uUE9TVF9VUkwgfSBjbGFzcz1cIm1haW4tYnRuIGdyYWRpZW50LWJ0blwiPiB7IHN1YmNyaWJlQm94Py5TdWJtaXRMYWJlbCB9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJjcmliZUJveFxyXG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCJcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG5cclxuLyoqXHJcbiAqIEdldCBmdWxsIFN0cmFwaSBVUkwgZnJvbSBwYXRoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIFVSTFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGdWxsIFN0cmFwaSBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9IFwiXCIpIHtcclxuICByZXR1cm4gYCR7XHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCBcImh0dHBzOi8vd2VsZWFkLWNtcy1lamlkdi5vbmRpZ2l0YWxvY2Vhbi5hcHBcIlxyXG4gIH0ke3BhdGh9YFxyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zT2JqZWN0IFVSTCBwYXJhbXMgb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcclxuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH1cclxuXHJcbiAgLy8gdXJsUGFyYW1zT2JqZWN0LmxvY2FsZSA9IFwidmlcIjtcclxuICBcclxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7Z2V0U3RyYXBpVVJMKFxyXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXHJcbiAgKX1gXHJcblxyXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIG1lcmdlZE9wdGlvbnMpXHJcblxyXG4gIC8vIEhhbmRsZSByZXNwb25zZVxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuIFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdENhdGFsb2dzKCkge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9wcm9kdWN0LWNhdGVnb3JpZXNcIik7XHJcbiAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0YWxvZyhzbHVnLCB1cmxQYXJhbXNPYmplY3QgPSB7fSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoYC9wcm9kdWN0LWNhdGVnb3JpZXM/c2x1Zz0ke3NsdWd9JiR7cXVlcnlTdHJpbmcgPyBgJHtxdWVyeVN0cmluZ31gIDogXCJcIn1gKTtcclxuICByZXR1cm4gY2F0ZWdvcmllcz8uZGF0YVswXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmV0Y2hBUEkoXCIvcHJvZHVjdHNcIik7XHJcbiAgcmV0dXJuIHByb2R1Y3RzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdChzbHVnLCB1cmxQYXJhbXNPYmplY3QgPSB7fSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoQVBJKGAvcHJvZHVjdHM/c2x1Zz0ke3NsdWd9JiR7cXVlcnlTdHJpbmcgPyBgJHtxdWVyeVN0cmluZ31gIDogXCJcIn1gKTtcclxuICByZXR1cm4gcHJvZHVjdHM/LmRhdGFbMF07XHJcbn1cclxuXHJcbmV4cG9ydCAgIGZ1bmN0aW9uICBnZXRQcm9kdWN0VGh1bWIoaWQsIHVybFBhcmFtc09iamVjdCA9IHt9KSB7XHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkodXJsUGFyYW1zT2JqZWN0KVxyXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtnZXRTdHJhcGlVUkwoXHJcbiAgICBgL2FwaS9wcm9kdWN0cy8ke2lkfT8ke3F1ZXJ5U3RyaW5nID8gYCR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxyXG4gICl9YFxyXG4gXHJcbiAgcmV0dXJuIHVzZVNXUihcclxuICAgIHJlcXVlc3RVcmwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0ICAgZnVuY3Rpb24gIGdldFByb2R1Y3REZXRhaWwoc2x1ZywgdXJsUGFyYW1zT2JqZWN0ID0ge30pIHtcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcclxuICAgIGAvYXBpL3Byb2R1Y3RzLz9maWx0ZXJzW3NsdWddPSR7c2x1Z30mJHtxdWVyeVN0cmluZyA/IGAke3F1ZXJ5U3RyaW5nfWAgOiBcIlwifWBcclxuICApfWBcclxuICAgIFxyXG4gIGNvbnNvbGUubG9nKHJlcXVlc3RVcmwpO1xyXG5cclxuICByZXR1cm4gdXNlU1dSKFxyXG4gICAgcmVxdWVzdFVybCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG59XHJcbiBcclxuXHJcblxyXG5cclxuXHJcbiBcclxuIiwiaW1wb3J0IFBpbm5lZEJsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9waW5uZWQtYmxvZ1wiXHJcbmltcG9ydCBBY3Rpdml0eSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2FjdGl2aXR5XCJcclxuaW1wb3J0IEJyYW5kIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvYnJhbmRcIlxyXG5pbXBvcnQgRmVhdHVyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2ZlYXR1cmVcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIlxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsICAgLi4uYXJncykge1xyXG4gICAgIFxyXG4gICAgc3dpdGNoIChjb21wb25lbnROYW1lKVxyXG4gICAgIHtcclxuICAgICAgICAgY2FzZSBcIlBpbm5lZEJsb2dcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPFBpbm5lZEJsb2cgZGF0YT17YXJnc1swXX0gYXJnczE9e2FyZ3NbMV19IC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkFjdGl2aXR5XCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBY3Rpdml0eSBhY3Rpdml0eT17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkJyYW5kXCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCcmFuZCBicmFuZD17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkZlYXR1cmVcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPEZlYXR1cmUgZmVhdHVyZT17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgKVxyXG4gICAgIH1cclxuICB9XHJcbiBcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyRHluYW1pY0NvbXBvbmVudChzb3VyY2UsICAgLi4uYXJncykge1xyXG4gICBcclxuICAgdmFyIGNvbnRlbnRCdWlsZGVyID0gPD48Lz5cclxuXHJcbiAgIGNvbnNvbGUubG9nKGNvbnRlbnRCdWlsZGVyKTtcclxuICAgXHJcbiAgIHNvdXJjZS5mb3JFYWNoKGR5bmFtaWNDb250ZW50ID0+IHtcclxuICAgICAgY29udGVudEJ1aWxkZXIgKz0gcmVzb2x2ZXJEeW5hbWljRXh0cmFjdChkeW5hbWljQ29udGVudClcclxuICAgfSk7XHJcbiAgIGNvbnNvbGUubG9nKFwiY29udGVudEJ1aWxkZXJcIik7XHJcbiAgIGNvbnNvbGUubG9nKGNvbnRlbnRCdWlsZGVyKTtcclxuXHJcbiAgIHJldHVybiBjb250ZW50QnVpbGRlcjtcclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtSW1hZ2VVcmlQZWZvcm0odXJpLCBjaGlsZHJlbiwgdGl0bGUsIGFsdCkge1xyXG4gICAgcmV0dXJuIHVyaS5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmkpIDogdXJpO1xyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiByZXNvbHZlckR5bmFtaWNFeHRyYWN0KGR5bmFtaWNDb250ZW50KSB7IFxyXG4gXHJcbiAgIGlmICgoZHluYW1pY0NvbnRlbnQuX19jb21wb25lbnQpLmluZGV4T2YoJ2R5bmFtaWNzLnBhZ2UtY29udGVudCcpICE9PSAtMSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBrZXk9e2R5bmFtaWNDb250ZW50LklkfSBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTEwIHRleHQtY2VudGVyIHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgIHtkeW5hbWljQ29udGVudC5OYW1lfVxyXG4gICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWF1dG8gbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPGRpdiBjbGFzcz1cIiBwdC0xMiBwYi0xMCByb3dcIj4gXHJcbiAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtSW1hZ2VVcmk9e3RyYW5zZm9ybUltYWdlVXJpUGVmb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPC9kaXY+ICBcclxuICAgKTtcclxuXHJcbiAgIGlmICgoZHluYW1pY0NvbnRlbnQuX19jb21wb25lbnQpLmluZGV4T2YoJ2R5bmFtaWNzLnBhZ2UtaW1hZ2UtY29udGVudCcpICE9PSAtMSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwdC0xMiBwYi0xMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHBiLTggbXQtMTIgdmlkZW8tY29udGVudCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBqdXN0aWZ5LWNlbnRlciBtci02IHJvdW5kZWQtbGcgc2hhZG93LW1kIHZpZGVvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1pbWFnZSBiZy1saWdodC1ibHVlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlQ2xhc3M9e1wiaW1hZ2UtZml0XCJ9ICBpbWFnZT17ZHluYW1pY0NvbnRlbnQ/LkltYWdlfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBiZy1ibHVlLTkwMCBiZy1vcGFjaXR5LTI1IHJvdW5kZWQtbGcgdmlkZW8taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXI0NFJLV3lmY0Z3XCIgY2xhc3M9XCJ2aWRlby1wb3B1cFwiPjxpIGNsYXNzPVwibG5pIGxuaS1wbGF5XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTAgbXQtMTIgY291bnRlci13cmFwcGVyIGxnOnBsLTE2IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjhzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi04IHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZHluYW1pY0NvbnRlbnQuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gIDwvZGl2PiAgXHJcbiAgICk7XHJcblxyXG4gICByZXR1cm4gPD48Lz5cclxuIH0iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcbiAgY29uc3QgeyB1cmwgfSA9IG1lZGlhLmRhdGEuYXR0cmlidXRlc1xuICBjb25zdCBpbWFnZVVybCA9IHVybC5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmwpIDogdXJsXG4gIHJldHVybiBpbWFnZVVybFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7ZXhwb3J0cy5OZXh0V2ViVml0YWxzTWV0cmljPV91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe0NvbXBvbmVudCxjdHh9KXtjb25zdCBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHtyZW5kZXIoKXtjb25zdHtDb21wb25lbnQscGFnZVByb3BzfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxwYWdlUHJvcHMpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy90YWlsd2luZC5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zbGljay5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9hbmltYXRlLmNzc1wiXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL2ljb24uY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvbWFnbmlmaWMtcG9wdXAuY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvdGlueS1zbGlkZXIuY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvZ2xpZ2h0Ym94Lm1pbi5jc3NcIiBcblxuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcbiBcbi8vIFN0b3JlIFN0cmFwaSBHbG9iYWwgb2JqZWN0IGluIGNvbnRleHRcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgZ2xvYmFsIH0gPSBwYWdlUHJvcHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICBocmVmPXtnZXRTdHJhcGlNZWRpYShnbG9iYWw/LmF0dHJpYnV0ZXM/LmZhdmljb24pfVxuICAgICAgLz5cbiAgICAgIFxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL3ZlbmRvci9qcXVlcnktMy41LjEtbWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvanMvdmVuZG9yL21vZGVybml6ci0zLjcuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy9qcXVlcnkuZWFzaW5nLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL3Njcm9sbGluZy1uYXYuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy9zbGljay5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy93b3cubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvanMvcGFydGljbGVzLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL21haW4uanNcIj48L3NjcmlwdD5cblxuICAgICA8L0hlYWQ+XG4gICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtnbG9iYWw/LmF0dHJpYnV0ZXN9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG4gIC8vIEZldGNoIGdsb2JhbCBzaXRlIHNldHRpbmdzIGZyb20gU3RyYXBpXG4gIGNvbnN0IGdsb2JhbFJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2dsb2JhbFwiLCB7XG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIGZhdmljb246IFwiKlwiLFxuICAgICAgZGVmYXVsdFNlbzoge1xuICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgbGF5b3V0SW5mbyA9IGF3YWl0IGZldGNoQVBJKFwiL2hvbWVwYWdlXCIsICB7XG4gICAgcG9wdWxhdGU6IFxuICAgIHtcbiAgICAgIHNlbzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEZvb3RlcjogXG4gICAgICB7IFxuICAgICAgICAgIHBvcHVsYXRlOiAgeyAgICAgICAgXG4gICAgICAgICAgICBTdWJjcmliZUJveDogIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICBIeXBlckxpbmsgIDogIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICBCZ0ltYWdlOiAgICAgIHsgcG9wdWxhdGU6IFwiKlwiIH0gfVxuICAgICAgfSxcbiAgICAgIFNpdGVJbmZvOiAgICAgICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEhlYWRlckJnSW1hZ2U6ICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEhlcm9DZW50cmFsSW1hZ2U6ICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIExvZ29JbWFnZTogICAgICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICB9LFxuICB9KTsgIFxuIFxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IFxuICAgICAgICBmaWx0ZXJzOiB7XG4gICAgICAgICAgSXNUb3BNZW51OiB7XG4gICAgICAgICAgICBcIlskZXFdXCIgOiBcInRydWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgICAgIFBhZ2VIZXJvOiAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgICAgICAgIFBhZ2VCb2R5IDogICAgeyBcbiAgICAgICAgICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgICAgICAgICBJbWFnZSA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgIH19KTtcblxuICBcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhLCBsYXlvdXRJbmZvOiAgbGF5b3V0SW5mby5kYXRhLmF0dHJpYnV0ZXMsIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXMuZGF0YX0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiIFxuaW1wb3J0IFBhZ2VIZXJvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvYXJ0aWNsZS1oZXJvXCJcbmltcG9ydCBQYWdlQm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL2FydGljbGUtY29udGVudFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIjtcbmltcG9ydCBQYWdlU2VvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2Utc2VvXCI7XG5cbmNvbnN0IFBhZ2UgPSAoeyBzbHVnLCBjYXRlZ29yeSwgY2F0ZWdvcmllcywgbGF5b3V0SW5mbyB9KSA9PiB7XG4gIC8vIGNvbnN0IHNlbyA9IHtcbiAgLy8gICBtZXRhVGl0bGU6IGNhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZSxcbiAgLy8gICBtZXRhRGVzY3JpcHRpb246IGBBbGwgJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9IGFydGljbGVzYCxcbiAgLy8gfVxuICAgXG4gIGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maWx0ZXIocGFnZSA9PiBwYWdlLmF0dHJpYnV0ZXMuc2x1ZyA9PT0gc2x1ZylbMF07XG4gIC8vIGNvbnNvbGUubG9nKFwiY2F0ZWdvcnlcIik7XG4gIC8vIGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcblxuICBjb25zb2xlLmxvZyhjYXRlZ29yeT8uYXR0cmlidXRlcy5UZXh0Q29sb3IgKVxuXG4gIHZhciB0ZXh0Q29sb3IgIDtcbiAgaWYoY2F0ZWdvcnk/LmF0dHJpYnV0ZXM/LlRleHRDb2xvciA9PSAnQmxhY2snKSB7XG4gICAgICB0ZXh0Q29sb3IgPSAndGV4dC1ibGFjaydcbiAgfSBlbHNlIHtcbiAgICAgIHRleHRDb2xvciA9ICd0ZXh0LXdoaXRlJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IGxheW91dD17bGF5b3V0SW5mb30gY29sb3I9e3RleHRDb2xvcn0gID5cbiAgICAgIDxQYWdlU2VvIHNlbz17Y2F0ZWdvcnkuYXR0cmlidXRlcy5zZW99IC8+XG4gICAgICA8UGFnZUhlcm8gZGF0YT17Y2F0ZWdvcnkuYXR0cmlidXRlcy5QYWdlSGVyb30gY29sb3I9e3RleHRDb2xvcn0gLz5cbiAgICAgIDxQYWdlQm9keSBkYXRhPXtjYXRlZ29yeS5hdHRyaWJ1dGVzLlBhZ2VCb2R5fSAvPlxuICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMuTmFtZX1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoY29udGV4dCkge1xuICBjb25zb2xlLmxvZyhcImNvbnRleHQuc2x1Z1wiKVxuICBcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBmaWVsZHM6IFtcInNsdWdcIl0gfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBjYXRlZ29yaWVzUmVzLmRhdGEubWFwKChjYXRlZ29yeSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWcsXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgLy8gY29uc3QgYXJ0aWNsZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHtcbiAgLy8gICBmaWx0ZXJzOiB7XG4gIC8vICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgLy8gICB9LFxuICAvLyAgIHBvcHVsYXRlOiB7XG4gIC8vICAgICBQYWdlQ29udGVudDogeyBwb3B1bGF0ZTogXCIqXCIgfVxuICAvLyAgIH0sXG4gIC8vIH0pXG5cbiAgLy8gY29uc29sZS5sb2coXCJhcnRpY2xlc1Jlc1wiKTtcbiAgLy8gY29uc29sZS5sb2coYXJ0aWNsZXNSZXMuZGF0YS5hdHRyaWJ1dGVzKTtcbiAgXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG4gXG4gXG4gXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9