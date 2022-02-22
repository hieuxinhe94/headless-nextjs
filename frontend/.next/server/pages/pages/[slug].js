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
            }, void 0, false, {
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
  return `${"http://localhost:8080" || 0}${path}`;
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
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

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

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaG9tZS9hY3Rpdml0eS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2hvbWUvYXJ0aWNsZS1jb250ZW50LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaG9tZS9hcnRpY2xlLWhlcm8uanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9ob21lL2JyYW5kLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaG9tZS9idXNpbmVzcy10YWxrLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaG9tZS9lbXB0eS1ib3guanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9ob21lL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9ob21lL3Bpbm5lZC1ibG9nLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9wYWdlLXNlby5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL3N1YmNyaWJlLWJveC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvYXBpLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2xpYi9jb21wb25lbnQtcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbGliL21lZGlhLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9wYWdlcy9wYWdlcy9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicXNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2lnbm9yZWR8RDpcXFdvcmtcXFRyYW5zZm9tYXRpb25cXGxhbmRpbmdzaXRlXFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkZvb3RlciIsImZvb3RlciIsInNpdGVJbmZvIiwicXVpY2tMaW5rcyIsIkh5cGVyTGluayIsImZpbHRlciIsImxpbmsiLCJHcm91cFZhbHVlIiwicmVzb3VyY2VMaW5rcyIsImNvbnRhY3RMaW5rcyIsImJhY2tncm91bmRJbWFnZSIsImdldFN0cmFwaVVSTCIsIkJnSW1hZ2UiLCJkYXRhIiwiYXR0cmlidXRlcyIsInVybCIsIlN1YmNyaWJlQm94IiwiTG9nbyIsIkFsdGVyTmFtZSIsIm1hcCIsIml0ZW0iLCJpIiwiTGluayIsIlRpdGxlIiwiQ29weXJpZ2h0VGV4dCIsIkFjdGl2aXR5IiwiYWN0aXZpdHkiLCJidWlsZEFjdGl2aXR5U3R5bGUiLCJidWlsZEJ1c2luZXNzU3RlcFZpZXdTdHlsZSIsImluZGV4IiwiRGVzY3JpcHRpb24iLCJOYXZpZ2F0ZUxpbmsiLCJOYXZpZ2F0ZUxhYmxlIiwiTWVkaWEiLCJpZCIsIkJnTWVkaWEiLCJidWlsZEJ1c2luZXNzSW52ZXN0bWVudFZpZXdTdHlsZSIsIl9fY29tcG9uZW50IiwiaW5kZXhPZiIsIlN0ZXBzIiwiUGFnZUJvZHkiLCJjb25zb2xlIiwibG9nIiwiZHluYW1pY0NvbnRlbnQiLCJyZXNvbHZlckR5bmFtaWNFeHRyYWN0IiwiUGFnZUhlcm8iLCJjb2xvciIsImNlbnRyYWxJbWFnZSIsImNlbnRyYWxCZ0ltYWdlIiwiSW1hZ2UiLCJ0ZXh0Q29sb3IiLCJDZW50cmFsVGV4dCIsImRpc3BsYXkiLCJDZW50cmFsVGV4dERlc2NyaXB0aW9uIiwiQnJhbmQiLCJicmFuZCIsImJyYW5kSXRlbXNzIiwiQnJhbmRMb2dvIiwiQnVzaW5lc3NUYWxrIiwiYnVzaW5lc3MiLCJJdGVtcyIsIkVtcHR5Qm94IiwibWVzc2FnZSIsIkZlYXR1cmUiLCJmZWF0dXJlIiwidGl0bGUiLCJpdGVtcyIsIkljb25DbGFzcyIsIk5hdmlnYXRlVGV4dExhYmVsIiwiUGlubmVkQmxvZyIsImFyZ3MxIiwic2xpY2UiLCJwb3N0IiwiaW1hZ2UiLCJzbHVnIiwiQ3VzdG9tSW1hZ2UiLCJzdHlsZSIsImltYWdlQ2xhc3MiLCJhbHRlcm5hdGl2ZVRleHQiLCJ3aWR0aCIsImhlaWdodCIsInNyY1VybCIsIkxheW91dCIsImNoaWxkcmVuIiwiY2F0ZWdvcmllcyIsImxheW91dCIsIkxvZ29JbWFnZSIsIlNpdGVJbmZvIiwiTmF2IiwiY2F0ZWdvcnkiLCJuYW1lIiwiTmFtZSIsIlBhZ2VTZW8iLCJzZW8iLCJkZWZhdWx0U2VvIiwic2l0ZU5hbWUiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNlb1dpdGhEZWZhdWx0cyIsImZ1bGxTZW8iLCJtZXRhVGl0bGUiLCJzaGFyZUltYWdlIiwiZ2V0U3RyYXBpTWVkaWEiLCJtZXRhRGVzY3JpcHRpb24iLCJhcnRpY2xlIiwiU2VvIiwic3ViY3JpYmVCb3giLCJQT1NUX1VSTCIsIlN1Ym1pdExhYmVsIiwiZmV0Y2hlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwYXRoIiwicHJvY2VzcyIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwicXVlcnlTdHJpbmciLCJxcyIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsIm9rIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJnZXRQcm9kdWN0Q2F0YWxvZ3MiLCJnZXRQcm9kdWN0Q2F0YWxvZyIsImdldFByb2R1Y3RzIiwicHJvZHVjdHMiLCJnZXRQcm9kdWN0IiwiZ2V0UHJvZHVjdFRodW1iIiwidXNlU1dSIiwiZ2V0UHJvZHVjdERldGFpbCIsInJlc29sdmVyQ29tcG9uZW50IiwiY29tcG9uZW50TmFtZSIsImFyZ3MiLCJyZXNvbHZlckR5bmFtaWNDb21wb25lbnQiLCJzb3VyY2UiLCJjb250ZW50QnVpbGRlciIsImZvckVhY2giLCJ0cmFuc2Zvcm1JbWFnZVVyaVBlZm9ybSIsInVyaSIsImFsdCIsInN0YXJ0c1dpdGgiLCJDb250ZW50IiwiSWQiLCJtZWRpYSIsImltYWdlVXJsIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiZGVmYXVsdCIsInVzZVJlZiIsImN1cnJlbnQiLCJ3YXJuIiwicCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidmFsdWUiLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJqb2luIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxlbmd0aCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsIngiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJyZW5kZXIiLCJjcmVhdGVDb250ZXh0IiwiTXlBcHAiLCJnbG9iYWwiLCJmYXZpY29uIiwiYXBwUHJvcHMiLCJnbG9iYWxSZXMiLCJwb3B1bGF0ZSIsImxheW91dEluZm8iLCJIZWFkZXJCZ0ltYWdlIiwiSGVyb0NlbnRyYWxJbWFnZSIsImZpbHRlcnMiLCJJc1RvcE1lbnUiLCJQYWdlIiwiVGV4dENvbG9yIiwiZ2V0U3RhdGljUGF0aHMiLCJjb250ZXh0IiwiY2F0ZWdvcmllc1JlcyIsImZpZWxkcyIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7QUNoQkEsdUdBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0s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Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3BhZ2VzL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCJcclxuaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IFN1YmNyaWJlQm94IGZyb20gXCIuL3N1YmNyaWJlLWJveFwiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgZm9vdGVyLCBzaXRlSW5mbyB9KSA9PiB7XHJcbiAgXHJcbiAgICBjb25zdCBxdWlja0xpbmtzID0gZm9vdGVyPy5IeXBlckxpbmsuZmlsdGVyKGxpbmsgPT4gbGluay5Hcm91cFZhbHVlID09ICdRdWlja0xpbmsnKTtcclxuICAgIGNvbnN0IHJlc291cmNlTGlua3MgPSBmb290ZXI/Lkh5cGVyTGluay5maWx0ZXIobGluayA9PiBsaW5rLkdyb3VwVmFsdWUgPT0gJ1Jlc291cmNlcycpO1xyXG4gICAgY29uc3QgY29udGFjdExpbmtzID0gZm9vdGVyPy5IeXBlckxpbmsuZmlsdGVyKGxpbmsgPT4gbGluay5Hcm91cFZhbHVlID09ICdDb250YWN0VXMnKTtcclxuICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgaWQ9XCJmb290ZXJcIiBjbGFzcz1cInJlbGF0aXZlIHotMTAgZm9vdGVyLWFyZWEgcHQtMTIwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWJnXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAgYHVybChgK2dldFN0cmFwaVVSTCgpICsgZm9vdGVyPy5CZ0ltYWdlPy5kYXRhLmF0dHJpYnV0ZXMudXJsK2ApYCB9fSA+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAoZm9vdGVyPy5TdWJjcmliZUJveCkgPyAoIDxTdWJjcmliZUJveCBzdWJjcmliZUJveD17Zm9vdGVyPy5TdWJjcmliZUJveH0gLz4pIDogKDxkaXY+PC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXdpZGdldCBwYi0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy00LzUgbWQ6dy0zLzUgbGc6dy0yLzZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTIgZm9vdGVyLWFib3V0IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaW5saW5lLWJsb2NrIG1iLTggbG9nb1wiIGhyZWY9XCJpbmRleC5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2U9e3NpdGVJbmZvPy5Mb2dvfSAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dvLnN2Z1wiIGFsdD1cImxvZ29cIiBjbGFzcz1cInctNDBcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBiLTEwIHByLTEwIGxlYWRpbmctc251ZyB0ZXh0LXdoaXRlIGNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2l0ZUluZm8/LkFsdGVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZmxleCBmb290ZXItc29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImxuaSBsbmktZmFjZWJvb2stZmlsbGVkXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJsbmkgbG5pLXR3aXR0ZXItZmlsbGVkXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJsbmkgbG5pLWluc3RhZ3JhbS1maWxsZWRcIj48L2k+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImxuaSBsbmktbGlua2VkaW4tb3JpZ2luYWxcIj48L2k+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNC81IHNtOnctMi8zIG1kOnctMy81IGxnOnctMi82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIHNtOnctMS8yIG1kOnctMS8yIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTIgbGluay13cmFwcGVyIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi04IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+UXVpY2sgTGluazwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHF1aWNrTGlua3M/Lm1hcCgoaXRlbSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxsaSBrZXk9e2kgKyBcImFcIn0+PGEgaHJlZj17aXRlbS5MaW5rfT57aXRlbS5UaXRsZX08L2E+PC9saT4gKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBzbTp3LTEvMiBtZDp3LTEvMiBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyIGxpbmstd3JhcHBlciB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC42c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWItOCB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlJlc291cmNlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJlc291cmNlTGlua3M/Lm1hcCgoaXRlbSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxsaSBrZXk9e2kgKyBcImJcIn0+PGEgaHJlZj17aXRlbS5MaW5rfT57aXRlbS5UaXRsZX08L2E+PC9saT4gKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNC81IHNtOnctMS8zIG1kOnctMi81IGxnOnctMi82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyIGZvb3Rlci1jb250YWN0IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1iLTggdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5Db250YWN0IFVzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjb250YWN0TGlua3M/Lm1hcCgoaXRlbSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxsaSBrZXk9e2kgKyBcImNcIn0+PGEgaHJlZj17aXRlbS5MaW5rfT57aXRlbS5UaXRsZX08L2E+PC9saT4gKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInB5LTggYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIGZvb3Rlci1jb3B5cmlnaHRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIHtzaXRlSW5mbz8uQ29weXJpZ2h0VGV4dH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYXJ0aWNsZXMtMlwiIGNsYXNzPVwicGFydGljbGVzXCI+PC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuaW1wb3J0IEJ1c2luZXNzVGFsayBmcm9tICcuLi9ob21lL2J1c2luZXNzLXRhbGsnXHJcblxyXG5jb25zdCBBY3Rpdml0eSA9ICh7IGFjdGl2aXR5IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHsgYWN0aXZpdHk/Lm1hcCgoaXRlbSwgaSkgPT4gKCAgXHJcbiAgICAgICAgICAgIGJ1aWxkQWN0aXZpdHlTdHlsZShpLCBpdGVtKVxyXG4gICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgYnVpbGRCdXNpbmVzc1N0ZXBWaWV3U3R5bGUgPSAoaW5kZXgsIGl0ZW0pID0+IHtcclxuICAgIGlmIChpbmRleCAlMiA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uICBjbGFzcz1cInJlbGF0aXZlIHB0LTIwIGFib3V0LWFyZWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTIgYWJvdXQtY29udGVudCB3b3cgZmFkZUluTGVmdEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi00IHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17aXRlbS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0uTmF2aWdhdGVMaW5rfSBjbGFzcz1cIm1haW4tYnRuIGdyYWRpZW50LWJ0blwiPntpdGVtLk5hdmlnYXRlTGFibGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTIgdGV4dC1jZW50ZXIgYWJvdXQtaW1hZ2Ugd293IGZhZGVJblJpZ2h0QmlnXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtpdGVtLk1lZGlhfSAga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1zaGFwZS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e2l0ZW0uQmdNZWRpYX0gIGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgIDxzZWN0aW9uICBjbGFzcz1cInJlbGF0aXZlIHB0LTIwIGFib3V0LWFyZWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LXNoYXBlLTJcIj5cclxuICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtpdGVtLkJnTWVkaWF9ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yIGxnOm9yZGVyLWxhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXgtNCBtdC0xMiBhYm91dC1jb250ZW50IHdvdyBmYWRlSW5MZWZ0QmlnXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17aXRlbS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5OYXZpZ2F0ZUxpbmt9IGNsYXNzPVwibWFpbi1idG4gZ3JhZGllbnQtYnRuXCI+e2l0ZW0uTmF2aWdhdGVMYWJsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMiBsZzpvcmRlci1maXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTIgdGV4dC1jZW50ZXIgYWJvdXQtaW1hZ2Ugd293IGZhZGVJblJpZ2h0QmlnXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2U9e2l0ZW0uTWVkaWF9ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgPC9zZWN0aW9uPik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBidWlsZEJ1c2luZXNzSW52ZXN0bWVudFZpZXdTdHlsZSA9IChpbmRleCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnVzaW5lc3NUYWxrIGJ1c2luZXNzPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkQWN0aXZpdHlTdHlsZSA9IChpbmRleCwgaXRlbSkgPT4geyBcclxuICAgIGlmICgoaXRlbS5fX2NvbXBvbmVudCkuaW5kZXhPZignYnVzaW5lc3Mtc3RlcHMnKSAhPT0gLTEpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpdGVtLlN0ZXBzLm1hcCgoaXRlbSwgaW5kZXgpID0+ICggXHJcbiAgICAgICAgICAgICAgICBidWlsZEJ1c2luZXNzU3RlcFZpZXdTdHlsZShpbmRleCwgaXRlbSlcclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoaXRlbS5fX2NvbXBvbmVudC5pbmRleE9mKCdpbnZlc3RtZW50JykgIT09IC0xKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGJ1aWxkQnVzaW5lc3NJbnZlc3RtZW50Vmlld1N0eWxlKGluZGV4LCBpdGVtKVxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eVxyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyByZXNvbHZlckR5bmFtaWNDb21wb25lbnQsIHJlc29sdmVyRHluYW1pY0V4dHJhY3QgfSBmcm9tIFwiLi4vLi4vbGliL2NvbXBvbmVudC1yZXNvbHZlclwiO1xyXG5cclxuY29uc3QgUGFnZUJvZHkgPSAoeyBkYXRhIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiUGFnZUJvZHlcIilcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgaWYoIWRhdGEpIHJldHVybiA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cInNlcnZpY2VzLWFyZWEgcHQtMTIwIHBhZ2UtY29udGVudFwiPlxyXG4gICAgICAgIE5vIGNvbnRlbnRcclxuICAgIDwvc2VjdGlvbj5cclxuICAgXHJcbiAgICAvLyByZXR1cm4gKDxzZWN0aW9uIGlkPVwiY29udGVudFwiIGNsYXNzPVwic2VydmljZXMtYXJlYSBwdC0xMjAgYWdlLWNvbnRlbnRcIj5cclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlckR5bmFtaWNDb21wb25lbnQoZGF0YSwgXCJjb250ZW50XCIpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIDwvc2VjdGlvbj4pXHJcblxyXG4gICAgcmV0dXJuICg8c2VjdGlvbiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cInNlcnZpY2VzLWFyZWEgcHQtMTIwIHBhZ2UtY29udGVudFwiPlxyXG4gICAge1xyXG4gICAgICAgIGRhdGEubWFwKGR5bmFtaWNDb250ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgcmVzb2x2ZXJEeW5hbWljRXh0cmFjdChkeW5hbWljQ29udGVudCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIDwvc2VjdGlvbj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VCb2R5XHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBFbXB0eUJveCBmcm9tIFwiLi9lbXB0eS1ib3hcIjtcclxuXHJcbmNvbnN0IFBhZ2VIZXJvID0gKHsgZGF0YSwgY29sb3IgfSkgPT4ge1xyXG4gXHJcbiAgICBpZighZGF0YSkgcmV0dXJuIDxFbXB0eUJveCAgLz5cclxuXHJcbiAgICB2YXIgY2VudHJhbEltYWdlLGNlbnRyYWxCZ0ltYWdlO1xyXG4gICAgaWYoZGF0YS5JbWFnZT8uZGF0YT8uYXR0cmlidXRlcy51cmwpIHtcclxuICAgICAgICAgIGNlbnRyYWxJbWFnZSA9ICAgICBnZXRTdHJhcGlVUkwoKSArIGRhdGEuSW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXMudXJsO1xyXG4gICAgfVxyXG4gICAgaWYoZGF0YS5CZ0ltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzLnVybCkge1xyXG4gICAgICAgIGNlbnRyYWxCZ0ltYWdlID0gICAgIGdldFN0cmFwaVVSTCgpICsgZGF0YS5CZ0ltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzLnVybDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGV4dENvbG9yICA9ICd0ZXh0LXdoaXRlJztcclxuICAgIGlmKGNvbG9yKSB7XHJcbiAgICAgICAgdGV4dENvbG9yID0gY29sb3JcclxuICAgIH0gXHJcbiAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCIgXCIgY2xhc3M9XCJoZWFkZXItaGVyb1wiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogIGB1cmwoYCtjZW50cmFsQmdJbWFnZStgKWAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0zMiBtYi0xMiB0ZXh0LWNlbnRlciBsZzpwdC00OCBoZWFkZXItaGVyby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9e1widGV4dC00eGwgZm9udC1saWdodCBsZWFkaW5nLXRpZ2h0IGhlYWRlci1zdWItdGl0bGUgd293IGZhZGVJblVwIFwiICArIHRleHRDb2xvcn0gZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+eyBkYXRhPy5DZW50cmFsVGV4dH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBoZWFkZXItaGVyby1pbWFnZSB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIxLjRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBpbWFnZS1jZW50ZXJlZFwiIHNyYz17Y2VudHJhbEltYWdlfSBhbHQ9XCJoZXJvXCIgc3R5bGU9eyB7IGRpc3BsYXk6IGNlbnRyYWxJbWFnZSAhPSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyB9IH0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0xNiBtYi0xMiB0ZXh0LWNlbnRlciBsZzpwdC0xNiBoZWFkZXItaGVyby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPXtcIm1iLTMgdGV4dC00eGwgZm9udC1ib2xkIGhlYWRlci10aXRsZSB3b3cgZmFkZUluVXAgXCIgKyB0ZXh0Q29sb3J9ICBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE/LkNlbnRyYWxUZXh0RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYXJ0aWNsZXMtMVwiIGNsYXNzPVwicGFydGljbGVzXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZXJvXHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuY29uc3QgQnJhbmQgPSAoeyBicmFuZCB9KSA9PiB7XHJcbiAgXHJcbmNvbnN0IGJyYW5kSXRlbXNzID0gYnJhbmQuQnJhbmRMb2dvO1xyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInB0LTI0IGJyYW5kLWFyZWFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdyBsZzpqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7IGJyYW5kSXRlbXNzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzcz1cInNpbmdsZS1sb2dvIGhvdmVyOm9wYWNpdHktMTAwIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtpdGVtLkxvZ299ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJyYW5kXHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuY29uc3QgQnVzaW5lc3NUYWxrID0gKHsgYnVzaW5lc3MgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJmYWN0c1wiIGNsYXNzPVwicHQtMjAgdmlkZW8tY291bnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBwYi04IG10LTEyIHZpZGVvLWNvbnRlbnQgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2U9e2J1c2luZXNzLkJnTWVkaWF9ICBpbWFnZUNsYXNzPXtcImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCAtbWwtOCBkb3RzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBtci02IHJvdW5kZWQtbGcgc2hhZG93LW1kIHZpZGVvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZT17YnVzaW5lc3MuTWVkaWF9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzcz1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1mdWxsIGJnLWJsdWUtOTAwIGJnLW9wYWNpdHktMjUgcm91bmRlZC1sZyB2aWRlby1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9cjQ0UktXeWZjRndcIiBjbGFzcz1cInZpZGVvLXBvcHVwXCI+PGkgY2xhc3M9XCJsbmkgbG5pLXBsYXlcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMCBtdC0xMiBjb3VudGVyLXdyYXBwZXIgbGc6cGwtMTYgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuOHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTggc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+PFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtidXNpbmVzcy5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2J1c2luZXNzLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBidXNpbmVzcy5JdGVtcz8ubWFwKChpdGVtLCBpKSA9PiAoICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz17XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaW5nbGUtY291bnRlciBjb3VudGVyLWNvbG9yLVwiICsgKGkgKyAxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBjb3VudGVyLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj57aXRlbS5UaXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGVcIj57aXRlbS5EZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuIFxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2luZXNzVGFsa1xyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIiBcclxuXHJcbmNvbnN0IEVtcHR5Qm94ID0gKHsgbWVzc2FnZSB9KSA9PiB7XHJcbiBcclxuICAgIGlmKCFtZXNzYWdlKSBcclxuICAgIG1lc3NhZ2UgID0gXCJUaGUgY29udGVudCBpcyBlbXB0eVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gIGNsYXNzPVwiIHB0LTEyMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTEwIHRleHQtY2VudGVyIHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS1hdXRvIGxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZSB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICBcclxuICAgIDwvZGl2PiAgXHJcbjwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcHR5Qm94IFxyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiXHJcblxyXG5jb25zdCBGZWF0dXJlID0gKHsgZmVhdHVyZSB9KSA9PiB7XHJcbiBcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGZlYXR1cmUuQ2VudHJhbFRleHQ7XHJcbiAgICBjb25zdCBpdGVtcyA9IGZlYXR1cmUuSXRlbXMgO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCIgY2xhc3M9XCJzZXJ2aWNlcy1hcmVhIHB0LTEyMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTEwIHRleHQtY2VudGVyIHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS1hdXRvIGxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgc206dy0yLzMgbGc6dy0xLzNcIiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXNlcnZpY2VzIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VydmljZXMtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzPVwic2hhcGUtMVwiIHNyYz1cImFzc2V0cy9pbWFnZXMvc2VydmljZXMtc2hhcGUuc3ZnXCIgYWx0PVwic2hhcGVcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlQ2xhc3M9eydzaGFwZSd9IGltYWdlPXtpdGVtLk1lZGlhfSAga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzPVwic2hhcGUtMVwiIHNyYz1cImFzc2V0cy9pbWFnZXMvc2VydmljZXMtc2hhcGUtMS5zdmdcIiBhbHQ9XCJzaGFwZVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPXtpdGVtLkljb25DbGFzc30+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtOCBzZXJ2aWNlcy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWItOCB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+e2l0ZW0uVGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTggY2FyZC1jb250ZW50XCI+e2l0ZW0uRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0uTmF2aWdhdGVMaW5rfSBjbGFzcz1cImR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LXRoZW1lLWNvbG9yXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5OYXZpZ2F0ZVRleHRMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtbC0yIGxuaSBsbmktY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgIDwvZGl2PiAgXHJcbjwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmUgXHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuXHJcbmNvbnN0IFBpbm5lZEJsb2cgPSAoeyBkYXRhLCBhcmdzMSB9KSA9PiB7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYmxvZ1wiIGNsYXNzPVwiYmxvZy1hcmVhIHB0LTEyMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi04IHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhPy5UaXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkYXRhPy5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcblxyXG4gICAgICAgICAgICB7IGFyZ3MxPy5zbGljZSgwLDMpPy5tYXAoKHBvc3QsIGkpID0+ICggIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWQ6dy0yLzMgbGc6dy0xLzNcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXgtNCBtdC0xMCBzaW5nbGUtYmxvZyB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNSBvdmVyZmxvdy1oaWRkZW4gYmxvZy1pbWFnZSByb3VuZGVkLXhsIGJsb2ctaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2U9e3Bvc3QuYXR0cmlidXRlcy5pbWFnZX0gaW1hZ2VDbGFzcz17XCJ3LWZ1bGxcIn0gIGtleT17aX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9nLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dWwgY2xhc3M9XCJmbGV4IG1iLTUgbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Qb3N0ZWQgQnk6IDxhIGhyZWY9XCIgXCI+e3Bvc3QuYXR0cmlidXRlcy5hdXRob3I/Lm5hbWV9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWwtMTJcIj57cG9zdC5hdHRyaWJ1dGVzLnB1Ymxpc2hlZEF0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItNiB0ZXh0LTJ4bCBsZWFkaW5nLXNudWcgdGV4dC1ncmF5LTkwMCBibG9nLXRpdGxlXCIgID57cG9zdC5hdHRyaWJ1dGVzLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGV4dC10aGVtZS1jb2xvci0yXCIgaHJlZj17XCIvYXJ0aWNsZXMvXCIgKyBwb3N0LmF0dHJpYnV0ZXMuc2x1Z30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpIHRp4bq/dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWwtMiBsbmkgbG5pLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpbm5lZEJsb2dcclxuXHJcbiIsIiBcclxuaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcclxuXHJcbmNvbnN0IEN1c3RvbUltYWdlID0gKHsgaW1hZ2UsIHN0eWxlLCBpbWFnZUNsYXNzID0gbnVsbCB9KSA9PiB7XHJcblxyXG4gIC8vIGlmKCFpbWFnZSkge1xyXG4gIC8vICAgcmV0dXJuICAgKFxyXG4gIC8vICAgICAgPGltZyBjbGFzcz1cImJsYW5rXCIgc3JjPVwiYmxhbmtcIiBhbHQ9XCJibGFuayBpbWFnZVwiIC8+KVxyXG4gICBcclxuICAvLyB9XHJcblxyXG4gIGlmKGltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzID09IG51bGwgJiYgaW1hZ2U/LmF0dHJpYnV0ZXMgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuICAoIFxyXG4gICAgICA8aW1nIGNsYXNzPVwiYmxhbmtcIiBzcmM9XCJibGFua1wiIGFsdD1cImJsYW5rIGltYWdlXCIgLz4pXHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgaWYoaW1hZ2U/LmF0dHJpYnV0ZXM/LnVybCkge1xyXG4gICAgY29uc3QgeyB1cmwsIGFsdGVybmF0aXZlVGV4dCwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2UuYXR0cmlidXRlcztcclxuICAgIGNvbnN0IHNyY1VybCA9IGdldFN0cmFwaVVSTCgpICsgdXJsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxpbWcgY2xhc3M9e2ltYWdlQ2xhc3MgPz8gXCJcIn0gc3JjPXtzcmNVcmx9IGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgKSA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgdXJsLCBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLmRhdGEuYXR0cmlidXRlcztcclxuICAgIGNvbnN0IHNyY1VybCA9IGdldFN0cmFwaVVSTCgpICsgdXJsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxpbWcgY2xhc3M9e2ltYWdlQ2xhc3MgPz8gXCJcIn0gc3JjPXtzcmNVcmx9IGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgKTtcclxuICB9XHJcbiBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tSW1hZ2VcclxuIiwiaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIlxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2XCJcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGNhdGVnb3JpZXMsIGxheW91dCwgY29sb3IgfSkgPT4ge1xuICAgIHZhciB0ZXh0Q29sb3IgPSAndGV4dC13aGl0ZScgO1xuICAgIGlmKGNvbG9yKSB7XG4gICAgICAgIHRleHRDb2xvciA9IGNvbG9yXG4gICAgfSAgXG4gICAgcmV0dXJuKFxuICA8PlxuICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gcHJlbG9hZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1yb3RhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXItY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXItYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWFyZWEgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG5hdmJhciBuYXZiYXItZXhwYW5kLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsgXCJtci00IG5hdmJhci1icmFuZCBcIiArIHRleHRDb2xvcn0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtob21lcGFnZS5hdHRyaWJ1dGVzLkxvZ29JbWFnZS5hdHRyaWJ1dGVzLnVybCB9IGFsdD1cIkxvZ29cIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtsYXlvdXQuTG9nb0ltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2xheW91dC5TaXRlSW5mby5TaXRlTmFtZSB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmxvY2sgbmF2YmFyLXRvZ2dsZXIgZm9jdXM6b3V0bGluZS1ub25lIGxnOmhpZGRlblwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyT25lXCIgYXJpYS1jb250cm9scz1cIm5hdmJhck9uZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGxlZnQtMCB6LTIwIGhpZGRlbiB3LWZ1bGwgcHgtNSBweS0zIGR1cmF0aW9uLTMwMCBiZy13aGl0ZSBzaGFkb3cgbGc6dy1hdXRvIGNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBsZzpibG9jayB0b3AtMTAwIG10LWZ1bGwgbGc6c3RhdGljIGxnOmJnLXRyYW5zcGFyZW50IGxnOnNoYWRvdy1ub25lXCIgaWQ9XCJuYXZiYXJPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNvbG9yPXt0ZXh0Q29sb3J9IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgcmlnaHQtMCBoaWRkZW4gbXQtMiBtci0yNCBuYXZiYXItYnRuIHNtOmlubGluZS1ibG9jayBsZzptdC0wIGxnOnN0YXRpYyBsZzptci0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWFpbi1idG4gZ3JhZGllbnQtYnRuXCIgZGF0YS1zY3JvbGwtbmF2PVwiMFwiIGhyZWY9e2hvbWVwYWdlLmF0dHJpYnV0ZXMuSGVybz8uUXVpY2tMaW5rPy5IcmVmfSByZWw9XCJub2ZvbGxvd1wiPntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVwYWdlLmF0dHJpYnV0ZXMuSGVybz8uUXVpY2tMaW5rPy5UaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hdj4gIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICA8L2Rpdj4gIFxuICAgIDwvaGVhZGVyPlxuXG4gICAgXG4gICAge2NoaWxkcmVufVxuICAgICBcbiAgICA8Rm9vdGVyIGZvb3Rlcj17bGF5b3V0LkZvb3Rlcn0gc2l0ZUluZm89e2xheW91dC5TaXRlSW5mb30gLz5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYmFjay10by10b3BcIj48aSBjbGFzcz1cImxuaSBsbmktY2hldnJvbi11cFwiPjwvaT48L2E+XG4gIDwvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5jb25zdCBOYXYgPSAoeyBjYXRlZ29yaWVzLCBjb2xvciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG4gIHZhciB0ZXh0Q29sb3IgID0gJ3RleHQtd2hpdGUnO1xuICBpZihjb2xvcikge1xuICAgICAgdGV4dENvbG9yID0gY29sb3JcbiAgfSBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHVsIGlkPVwibmF2XCIgY2xhc3M9eyBcIml0ZW1zLWNlbnRlciBjb250ZW50LXN0YXJ0IG1yLWF1dG8gbGc6anVzdGlmeS1lbmQgbmF2YmFyLW5hdiBsZzpmbGV4IFwiICsgdGV4dENvbG9yIH0+XG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BhZ2VzLyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLXNjcm9sbFwiIGhyZWY9e2AvcGFnZXMvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICA8YiA+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWUgPz8gY2F0ZWdvcnkuYXR0cmlidXRlcy5OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uL3BhZ2VzL19hcHBcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcblxuY29uc3QgUGFnZVNlbyA9ICh7IHNlbyB9KSA9PiB7XG4gIGNvbnN0IHsgZGVmYXVsdFNlbywgc2l0ZU5hbWUgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dClcbiAgY29uc3Qgc2VvV2l0aERlZmF1bHRzID0ge1xuICAgIC4uLmRlZmF1bHRTZW8sXG4gICAgLi4uc2VvLFxuICB9XG4gIGNvbnN0IGZ1bGxTZW8gPSB7XG4gICAgLi4uc2VvV2l0aERlZmF1bHRzLFxuICAgIC8vIEFkZCB0aXRsZSBzdWZmaXhcbiAgICBtZXRhVGl0bGU6IGAke3Nlb1dpdGhEZWZhdWx0cy5tZXRhVGl0bGV9IHwgJHtzaXRlTmFtZX1gLFxuICAgIC8vIEdldCBmdWxsIGltYWdlIFVSTFxuICAgIHNoYXJlSW1hZ2U6IGdldFN0cmFwaU1lZGlhKHNlb1dpdGhEZWZhdWx0cy5zaGFyZUltYWdlKSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICB7ZnVsbFNlby5tZXRhVGl0bGUgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDx0aXRsZT57ZnVsbFNlby5tZXRhVGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17ZnVsbFNlby5tZXRhVGl0bGV9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtmdWxsU2VvLm1ldGFUaXRsZX0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAge2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9uICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAge2Z1bGxTZW8uc2hhcmVJbWFnZSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Z1bGxTZW8uc2hhcmVJbWFnZX0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2Z1bGxTZW8uc2hhcmVJbWFnZX0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiaW1hZ2VcIiBjb250ZW50PXtmdWxsU2VvLnNoYXJlSW1hZ2V9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmdWxsU2VvLmFydGljbGUgJiYgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cImFydGljbGVcIiAvPn1cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgPC9IZWFkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTZW9cbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uL3BhZ2VzL19hcHBcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcblxuY29uc3QgU2VvID0gKHsgc2VvIH0pID0+IHtcbiAgY29uc3QgeyBkZWZhdWx0U2VvLCBzaXRlTmFtZSB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KVxuICBjb25zdCBzZW9XaXRoRGVmYXVsdHMgPSB7XG4gICAgLi4uZGVmYXVsdFNlbyxcbiAgICAuLi5zZW8sXG4gIH1cbiAgY29uc3QgZnVsbFNlbyA9IHtcbiAgICAuLi5zZW9XaXRoRGVmYXVsdHMsXG4gICAgLy8gQWRkIHRpdGxlIHN1ZmZpeFxuICAgIG1ldGFUaXRsZTogYCR7c2VvV2l0aERlZmF1bHRzLm1ldGFUaXRsZX0gfCAke3NpdGVOYW1lfWAsXG4gICAgLy8gR2V0IGZ1bGwgaW1hZ2UgVVJMXG4gICAgc2hhcmVJbWFnZTogZ2V0U3RyYXBpTWVkaWEoc2VvV2l0aERlZmF1bHRzLnNoYXJlSW1hZ2UpLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIHtmdWxsU2VvLm1ldGFUaXRsZSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHRpdGxlPntmdWxsU2VvLm1ldGFUaXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtmdWxsU2VvLm1ldGFUaXRsZX0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YVRpdGxlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7ZnVsbFNlby5tZXRhRGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7ZnVsbFNlby5zaGFyZUltYWdlICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJpbWFnZVwiIGNvbnRlbnQ9e2Z1bGxTZW8uc2hhcmVJbWFnZX0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAge2Z1bGxTZW8uYXJ0aWNsZSAmJiA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+fVxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICA8L0hlYWQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VvXG4iLCJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG4gXHJcblxyXG5jb25zdCBTdWJjcmliZUJveCA9ICh7IHN1YmNyaWJlQm94IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cInB4LTYgcHQtMTAgcGItMjAgbWItMTIgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cteGwgbWQ6cHgtMTIgc3Vic2NyaWJlLWFyZWEgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzptdC0xMiBzdWJzY3JpYmUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBzbTp0ZXh0LTJ4bCBzdWJzY3JpYmUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJjcmliZUJveD8uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtzdWJjcmliZUJveD8uRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249IHsgc3ViY3JpYmVCb3g/LlBPU1RfVVJMIH0gY2xhc3M9XCJyZWxhdGl2ZSBmb2N1czpvdXRsaW5lLW5vbmUgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInR5cGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsL3Bob25lIG51bWJlclwiIGNsYXNzPVwidy1mdWxsIHB5LTQgcGwtNiBwci00MCBkdXJhdGlvbi0zMDAgYm9yZGVyLTIgcm91bmRlZCBmb2N1czpib3JkZXItdGhlbWUtY29sb3IgZm9jdXM6b3V0bGluZS1ub25lXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgc3ViY3JpYmVCb3g/LlBPU1RfVVJMIH0gY2xhc3M9XCJtYWluLWJ0biBncmFkaWVudC1idG5cIj4geyBzdWJjcmliZUJveD8uU3VibWl0TGFiZWwgfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ViY3JpYmVCb3hcclxuIiwiaW1wb3J0IHFzIGZyb20gXCJxc1wiXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgZnVsbCBTdHJhcGkgVVJMIGZyb20gcGF0aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBVUkxcclxuICogQHJldHVybnMge3N0cmluZ30gRnVsbCBTdHJhcGkgVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpVVJMKHBhdGggPSBcIlwiKSB7XHJcbiAgcmV0dXJuIGAke1xyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIlxyXG4gIH0ke3BhdGh9YFxyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zT2JqZWN0IFVSTCBwYXJhbXMgb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcclxuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH1cclxuXHJcbiAgLy8gdXJsUGFyYW1zT2JqZWN0LmxvY2FsZSA9IFwidmlcIjtcclxuICBcclxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7Z2V0U3RyYXBpVVJMKFxyXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXHJcbiAgKX1gXHJcblxyXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIG1lcmdlZE9wdGlvbnMpXHJcblxyXG4gIC8vIEhhbmRsZSByZXNwb25zZVxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuIFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdENhdGFsb2dzKCkge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9wcm9kdWN0LWNhdGVnb3JpZXNcIik7XHJcbiAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0YWxvZyhzbHVnLCB1cmxQYXJhbXNPYmplY3QgPSB7fSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoYC9wcm9kdWN0LWNhdGVnb3JpZXM/c2x1Zz0ke3NsdWd9JiR7cXVlcnlTdHJpbmcgPyBgJHtxdWVyeVN0cmluZ31gIDogXCJcIn1gKTtcclxuICByZXR1cm4gY2F0ZWdvcmllcz8uZGF0YVswXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmV0Y2hBUEkoXCIvcHJvZHVjdHNcIik7XHJcbiAgcmV0dXJuIHByb2R1Y3RzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdChzbHVnLCB1cmxQYXJhbXNPYmplY3QgPSB7fSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoQVBJKGAvcHJvZHVjdHM/c2x1Zz0ke3NsdWd9JiR7cXVlcnlTdHJpbmcgPyBgJHtxdWVyeVN0cmluZ31gIDogXCJcIn1gKTtcclxuICByZXR1cm4gcHJvZHVjdHM/LmRhdGFbMF07XHJcbn1cclxuXHJcbmV4cG9ydCAgIGZ1bmN0aW9uICBnZXRQcm9kdWN0VGh1bWIoaWQsIHVybFBhcmFtc09iamVjdCA9IHt9KSB7XHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkodXJsUGFyYW1zT2JqZWN0KVxyXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtnZXRTdHJhcGlVUkwoXHJcbiAgICBgL2FwaS9wcm9kdWN0cy8ke2lkfT8ke3F1ZXJ5U3RyaW5nID8gYCR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxyXG4gICl9YFxyXG4gXHJcbiAgcmV0dXJuIHVzZVNXUihcclxuICAgIHJlcXVlc3RVcmwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0ICAgZnVuY3Rpb24gIGdldFByb2R1Y3REZXRhaWwoc2x1ZywgdXJsUGFyYW1zT2JqZWN0ID0ge30pIHtcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcclxuICAgIGAvYXBpL3Byb2R1Y3RzLz9maWx0ZXJzW3NsdWddPSR7c2x1Z30mJHtxdWVyeVN0cmluZyA/IGAke3F1ZXJ5U3RyaW5nfWAgOiBcIlwifWBcclxuICApfWBcclxuICAgIFxyXG4gIGNvbnNvbGUubG9nKHJlcXVlc3RVcmwpO1xyXG5cclxuICByZXR1cm4gdXNlU1dSKFxyXG4gICAgcmVxdWVzdFVybCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG59XHJcbiBcclxuXHJcblxyXG5cclxuXHJcbiBcclxuIiwiaW1wb3J0IFBpbm5lZEJsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9waW5uZWQtYmxvZ1wiXHJcbmltcG9ydCBBY3Rpdml0eSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2FjdGl2aXR5XCJcclxuaW1wb3J0IEJyYW5kIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvYnJhbmRcIlxyXG5pbXBvcnQgRmVhdHVyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2ZlYXR1cmVcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIlxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsICAgLi4uYXJncykge1xyXG4gICAgIFxyXG4gICAgc3dpdGNoIChjb21wb25lbnROYW1lKVxyXG4gICAgIHtcclxuICAgICAgICAgY2FzZSBcIlBpbm5lZEJsb2dcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPFBpbm5lZEJsb2cgZGF0YT17YXJnc1swXX0gYXJnczE9e2FyZ3NbMV19IC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkFjdGl2aXR5XCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBY3Rpdml0eSBhY3Rpdml0eT17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkJyYW5kXCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCcmFuZCBicmFuZD17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkZlYXR1cmVcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPEZlYXR1cmUgZmVhdHVyZT17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgKVxyXG4gICAgIH1cclxuICB9XHJcbiBcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyRHluYW1pY0NvbXBvbmVudChzb3VyY2UsICAgLi4uYXJncykge1xyXG4gICBcclxuICAgdmFyIGNvbnRlbnRCdWlsZGVyID0gPD48Lz5cclxuXHJcbiAgIGNvbnNvbGUubG9nKGNvbnRlbnRCdWlsZGVyKTtcclxuICAgXHJcbiAgIHNvdXJjZS5mb3JFYWNoKGR5bmFtaWNDb250ZW50ID0+IHtcclxuICAgICAgY29udGVudEJ1aWxkZXIgKz0gcmVzb2x2ZXJEeW5hbWljRXh0cmFjdChkeW5hbWljQ29udGVudClcclxuICAgfSk7XHJcbiAgIGNvbnNvbGUubG9nKFwiY29udGVudEJ1aWxkZXJcIik7XHJcbiAgIGNvbnNvbGUubG9nKGNvbnRlbnRCdWlsZGVyKTtcclxuXHJcbiAgIHJldHVybiBjb250ZW50QnVpbGRlcjtcclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtSW1hZ2VVcmlQZWZvcm0odXJpLCBjaGlsZHJlbiwgdGl0bGUsIGFsdCkge1xyXG4gICAgcmV0dXJuIHVyaS5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmkpIDogdXJpO1xyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiByZXNvbHZlckR5bmFtaWNFeHRyYWN0KGR5bmFtaWNDb250ZW50KSB7IFxyXG4gXHJcbiAgIGlmICgoZHluYW1pY0NvbnRlbnQuX19jb21wb25lbnQpLmluZGV4T2YoJ2R5bmFtaWNzLnBhZ2UtY29udGVudCcpICE9PSAtMSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBrZXk9e2R5bmFtaWNDb250ZW50LklkfSBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTEwIHRleHQtY2VudGVyIHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgIHtkeW5hbWljQ29udGVudC5OYW1lfVxyXG4gICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWF1dG8gbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPGRpdiBjbGFzcz1cIiBwdC0xMiBwYi0xMCByb3dcIj4gXHJcbiAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtSW1hZ2VVcmk9e3RyYW5zZm9ybUltYWdlVXJpUGVmb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPC9kaXY+ICBcclxuICAgKTtcclxuXHJcbiAgIGlmICgoZHluYW1pY0NvbnRlbnQuX19jb21wb25lbnQpLmluZGV4T2YoJ2R5bmFtaWNzLnBhZ2UtaW1hZ2UtY29udGVudCcpICE9PSAtMSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwdC0xMiBwYi0xMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHBiLTggbXQtMTIgdmlkZW8tY29udGVudCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBqdXN0aWZ5LWNlbnRlciBtci02IHJvdW5kZWQtbGcgc2hhZG93LW1kIHZpZGVvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1pbWFnZSBiZy1saWdodC1ibHVlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlQ2xhc3M9e1wiaW1hZ2UtZml0XCJ9ICBpbWFnZT17ZHluYW1pY0NvbnRlbnQ/LkltYWdlfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBiZy1ibHVlLTkwMCBiZy1vcGFjaXR5LTI1IHJvdW5kZWQtbGcgdmlkZW8taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXI0NFJLV3lmY0Z3XCIgY2xhc3M9XCJ2aWRlby1wb3B1cFwiPjxpIGNsYXNzPVwibG5pIGxuaS1wbGF5XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTAgbXQtMTIgY291bnRlci13cmFwcGVyIGxnOnBsLTE2IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjhzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi04IHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZHluYW1pY0NvbnRlbnQuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gIDwvZGl2PiAgXHJcbiAgICk7XHJcblxyXG4gICByZXR1cm4gPD48Lz5cclxuIH0iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcbiAgY29uc3QgeyB1cmwgfSA9IG1lZGlhLmRhdGEuYXR0cmlidXRlc1xuICBjb25zdCBpbWFnZVVybCA9IHVybC5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmwpIDogdXJsXG4gIHJldHVybiBpbWFnZVVybFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7ZXhwb3J0cy5OZXh0V2ViVml0YWxzTWV0cmljPV91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe0NvbXBvbmVudCxjdHh9KXtjb25zdCBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHtyZW5kZXIoKXtjb25zdHtDb21wb25lbnQscGFnZVByb3BzfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxwYWdlUHJvcHMpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy90YWlsd2luZC5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zbGljay5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9hbmltYXRlLmNzc1wiXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL2ljb24uY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvbWFnbmlmaWMtcG9wdXAuY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvdGlueS1zbGlkZXIuY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvZ2xpZ2h0Ym94Lm1pbi5jc3NcIiBcblxuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcbiBcbi8vIFN0b3JlIFN0cmFwaSBHbG9iYWwgb2JqZWN0IGluIGNvbnRleHRcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgZ2xvYmFsIH0gPSBwYWdlUHJvcHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICBocmVmPXtnZXRTdHJhcGlNZWRpYShnbG9iYWw/LmF0dHJpYnV0ZXM/LmZhdmljb24pfVxuICAgICAgLz5cbiAgICAgIFxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL3ZlbmRvci9qcXVlcnktMy41LjEtbWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvanMvdmVuZG9yL21vZGVybml6ci0zLjcuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy9qcXVlcnkuZWFzaW5nLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL3Njcm9sbGluZy1uYXYuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy9zbGljay5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy93b3cubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvanMvcGFydGljbGVzLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL21haW4uanNcIj48L3NjcmlwdD5cblxuICAgICA8L0hlYWQ+XG4gICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtnbG9iYWw/LmF0dHJpYnV0ZXN9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG4gIC8vIEZldGNoIGdsb2JhbCBzaXRlIHNldHRpbmdzIGZyb20gU3RyYXBpXG4gIGNvbnN0IGdsb2JhbFJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2dsb2JhbFwiLCB7XG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIGZhdmljb246IFwiKlwiLFxuICAgICAgZGVmYXVsdFNlbzoge1xuICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgbGF5b3V0SW5mbyA9IGF3YWl0IGZldGNoQVBJKFwiL2hvbWVwYWdlXCIsICB7XG4gICAgcG9wdWxhdGU6IFxuICAgIHtcbiAgICAgIHNlbzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEZvb3RlcjogXG4gICAgICB7IFxuICAgICAgICAgIHBvcHVsYXRlOiAgeyAgICAgICAgXG4gICAgICAgICAgICBTdWJjcmliZUJveDogIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICBIeXBlckxpbmsgIDogIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICBCZ0ltYWdlOiAgICAgIHsgcG9wdWxhdGU6IFwiKlwiIH0gfVxuICAgICAgfSxcbiAgICAgIFNpdGVJbmZvOiAgICAgICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEhlYWRlckJnSW1hZ2U6ICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEhlcm9DZW50cmFsSW1hZ2U6ICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIExvZ29JbWFnZTogICAgICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICB9LFxuICB9KTsgIFxuIFxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IFxuICAgICAgICBmaWx0ZXJzOiB7XG4gICAgICAgICAgSXNUb3BNZW51OiB7XG4gICAgICAgICAgICBcIlskZXFdXCIgOiBcInRydWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgICAgIFBhZ2VIZXJvOiAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgICAgICAgIFBhZ2VCb2R5IDogICAgeyBcbiAgICAgICAgICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgICAgICAgICBJbWFnZSA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgIH19KTtcblxuICBcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhLCBsYXlvdXRJbmZvOiAgbGF5b3V0SW5mby5kYXRhLmF0dHJpYnV0ZXMsIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXMuZGF0YX0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiIFxuaW1wb3J0IFBhZ2VIZXJvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvYXJ0aWNsZS1oZXJvXCJcbmltcG9ydCBQYWdlQm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL2FydGljbGUtY29udGVudFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIjtcbmltcG9ydCBQYWdlU2VvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2Utc2VvXCI7XG5cbmNvbnN0IFBhZ2UgPSAoeyBzbHVnLCBjYXRlZ29yeSwgY2F0ZWdvcmllcywgbGF5b3V0SW5mbyB9KSA9PiB7XG4gIC8vIGNvbnN0IHNlbyA9IHtcbiAgLy8gICBtZXRhVGl0bGU6IGNhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZSxcbiAgLy8gICBtZXRhRGVzY3JpcHRpb246IGBBbGwgJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9IGFydGljbGVzYCxcbiAgLy8gfVxuICAgXG4gIGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maWx0ZXIocGFnZSA9PiBwYWdlLmF0dHJpYnV0ZXMuc2x1ZyA9PT0gc2x1ZylbMF07XG4gIC8vIGNvbnNvbGUubG9nKFwiY2F0ZWdvcnlcIik7XG4gIC8vIGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcblxuICBjb25zb2xlLmxvZyhjYXRlZ29yeT8uYXR0cmlidXRlcy5UZXh0Q29sb3IgKVxuXG4gIHZhciB0ZXh0Q29sb3IgIDtcbiAgaWYoY2F0ZWdvcnk/LmF0dHJpYnV0ZXM/LlRleHRDb2xvciA9PSAnQmxhY2snKSB7XG4gICAgICB0ZXh0Q29sb3IgPSAndGV4dC1ibGFjaydcbiAgfSBlbHNlIHtcbiAgICAgIHRleHRDb2xvciA9ICd0ZXh0LXdoaXRlJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IGxheW91dD17bGF5b3V0SW5mb30gY29sb3I9e3RleHRDb2xvcn0gID5cbiAgICAgIDxQYWdlU2VvIHNlbz17Y2F0ZWdvcnkuYXR0cmlidXRlcy5zZW99IC8+XG4gICAgICA8UGFnZUhlcm8gZGF0YT17Y2F0ZWdvcnkuYXR0cmlidXRlcy5QYWdlSGVyb30gY29sb3I9e3RleHRDb2xvcn0gLz5cbiAgICAgIDxQYWdlQm9keSBkYXRhPXtjYXRlZ29yeS5hdHRyaWJ1dGVzLlBhZ2VCb2R5fSAvPlxuICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMuTmFtZX1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoY29udGV4dCkge1xuICBjb25zb2xlLmxvZyhcImNvbnRleHQuc2x1Z1wiKVxuICBcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBmaWVsZHM6IFtcInNsdWdcIl0gfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBjYXRlZ29yaWVzUmVzLmRhdGEubWFwKChjYXRlZ29yeSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWcsXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgLy8gY29uc3QgYXJ0aWNsZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHtcbiAgLy8gICBmaWx0ZXJzOiB7XG4gIC8vICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgLy8gICB9LFxuICAvLyAgIHBvcHVsYXRlOiB7XG4gIC8vICAgICBQYWdlQ29udGVudDogeyBwb3B1bGF0ZTogXCIqXCIgfVxuICAvLyAgIH0sXG4gIC8vIH0pXG5cbiAgLy8gY29uc29sZS5sb2coXCJhcnRpY2xlc1Jlc1wiKTtcbiAgLy8gY29uc29sZS5sb2coYXJ0aWNsZXNSZXMuZGF0YS5hdHRyaWJ1dGVzKTtcbiAgXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG4gXG4gXG4gXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXJrZG93blwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=