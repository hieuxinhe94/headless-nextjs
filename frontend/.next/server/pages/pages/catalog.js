(function() {
var exports = {};
exports.id = "pages/pages/catalog";
exports.ids = ["pages/pages/catalog"];
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

/***/ "./components/commerce/Carousel.js":
/*!*****************************************!*\
  !*** ./components/commerce/Carousel.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\Carousel.js";




const Carousel = ({
  ListItem
}) => {
  if (!ListItem) {
    ListItem = [];
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    helper();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "main-slide",
    class: " carousel slide ",
    "data-ride": "carousel",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      class: "pt-32",
      id: "carousel",
      children: ListItem.data.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
          image: item,
          imageClass: "image-fit d-block w-100"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }, undefined)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "carousel-nav",
      class: "row justify-center ",
      children: ListItem.data.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        defaultChecked: index == 0 ? true : false,
        "data-carousel": index + 1,
        class: "carousel-item-radio",
        type: "radio",
        name: "position"
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 14
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

function helper() {
  Array.from(document.getElementsByClassName("carousel-item-radio")).forEach(ele => {
    ele.onclick = function (item) {
      console.log(ele.getAttribute("data-carousel"));
      var position = ele.getAttribute("data-carousel");
      document.getElementById("carousel").setAttribute("style", "--position:" + position);
    };
  });
  setInterval(() => {
    var totalCheckboxes = document.getElementsByClassName("carousel-item-radio");
    Array.from(totalCheckboxes).forEach(element => {
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

/***/ }),

/***/ "./components/commerce/Product-grid-2.js":
/*!***********************************************!*\
  !*** ./components/commerce/Product-grid-2.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_thumb_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-thumb-2 */ "./components/commerce/product-thumb-2.js");


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\Product-grid-2.js";


var defaultgroupIds = {};
var featureProductWrapTmp = {};
var productsFiltered = {};
defaultgroupIds["0"] = "";
featureProductWrapTmp["0"] = "";
productsFiltered["0"] = "";

const ProductGrid2Thumb = ({
  featureProductWrap,
  categories = [],
  colClass = "w-full lg:w-1/2",
  name = "ProductGrid2Thumb"
}) => {
  var _defaultgroupIds$name, _productsFiltered$nam, _productsFiltered$nam2;

  console.log(name);
  if (!featureProductWrap || Array.from(featureProductWrap).length == 0) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
  featureProductWrapTmp[name] = featureProductWrap;
  defaultgroupIds[name] = (_defaultgroupIds$name = defaultgroupIds[name]) !== null && _defaultgroupIds$name !== void 0 ? _defaultgroupIds$name : featureProductWrap[0].id;
  productsFiltered[name] = (_productsFiltered$nam = productsFiltered[name]) !== null && _productsFiltered$nam !== void 0 ? _productsFiltered$nam : featureProductWrapTmp[name].filter(t => t.id == defaultgroupIds[name])[0].Items;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const ChangeFilter = a => {
    defaultgroupIds[name] = a.id;
    productsFiltered[name] = a.Items;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      id: "services",
      class: "services section-padding ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "row justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "col-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              class: "nav nav-tabs flex",
              id: "myTab",
              role: "tablist",
              children: featureProductWrap.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                id: "#" + item.id,
                class: "nav-product-grid-horizontal",
                onClick: e => ChangeFilter(item),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  class: "nav-link",
                  id: "thursday-tab",
                  "data-toggle": "tab",
                  href: "#" + item.id,
                  role: "tab",
                  "aria-controls": "thursday",
                  "aria-selected": "false",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    class: "item-text",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                      children: [" ", item.GroupName]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 41
                }, undefined)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 37
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "row services-wrapper",
          children: (_productsFiltered$nam2 = productsFiltered[name]) === null || _productsFiltered$nam2 === void 0 ? void 0 : _productsFiltered$nam2.map(_product => _product !== null && _product !== void 0 && _product.detail ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: colClass,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_thumb_2__WEBPACK_IMPORTED_MODULE_2__.default, {
              productThumb: _product.detail.data
            }, _product.id, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 39
            }, undefined)
          }, _product.id, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 35
          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, _product.id, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 37
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductGrid2Thumb);

/***/ }),

/***/ "./components/commerce/Product-grid-3.js":
/*!***********************************************!*\
  !*** ./components/commerce/Product-grid-3.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-thumb */ "./components/commerce/product-thumb.js");
/* harmony import */ var _ProductCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCategory */ "./components/commerce/ProductCategory.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_thumb_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-thumb-2 */ "./components/commerce/product-thumb-2.js");
/* harmony import */ var _product_thumb_3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-thumb-3 */ "./components/commerce/product-thumb-3.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\Product-grid-3.js";









var defaultgroupIds = {};
var featureProductWrapTmp = {};
var productsFiltered = {};
defaultgroupIds["0"] = "";
featureProductWrapTmp["0"] = "";
productsFiltered["0"] = "";

const ProductGrid3Thumb = ({
  featureProductWrap,
  categories = [],
  colClass = "w-full lg:w-1/2",
  name = "ProductGrid2Thumb"
}) => {
  var _defaultgroupIds$name, _productsFiltered$nam, _productsFiltered$nam2, _productsFiltered$nam3, _productsFiltered$nam4, _productsFiltered$nam5, _productsFiltered$nam6, _productsFiltered$nam7;

  console.log(name);
  if (!featureProductWrap || Array.from(featureProductWrap).length == 0) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
  featureProductWrapTmp[name] = featureProductWrap;
  defaultgroupIds[name] = (_defaultgroupIds$name = defaultgroupIds[name]) !== null && _defaultgroupIds$name !== void 0 ? _defaultgroupIds$name : featureProductWrap[0].id;
  productsFiltered[name] = (_productsFiltered$nam = productsFiltered[name]) !== null && _productsFiltered$nam !== void 0 ? _productsFiltered$nam : featureProductWrapTmp[name].filter(t => t.id == defaultgroupIds[name])[0];
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const ChangeFilter = a => {
    defaultgroupIds[name] = a.id;
    productsFiltered[name] = a;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "w-full",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      class: "counter-section section-padding",
      style: {
        backgroundImage: `url(` + (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__.getStrapiURL)() + ((_productsFiltered$nam2 = productsFiltered[name]) === null || _productsFiltered$nam2 === void 0 ? void 0 : (_productsFiltered$nam3 = _productsFiltered$nam2.BgImage) === null || _productsFiltered$nam3 === void 0 ? void 0 : (_productsFiltered$nam4 = _productsFiltered$nam3.data) === null || _productsFiltered$nam4 === void 0 ? void 0 : (_productsFiltered$nam5 = _productsFiltered$nam4.attributes) === null || _productsFiltered$nam5 === void 0 ? void 0 : _productsFiltered$nam5.url) + `)`
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "row justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "col-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              class: "nav nav-tabs flex",
              id: "myTab",
              role: "tablist",
              children: featureProductWrap.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                id: "#" + item.id,
                class: "nav-product-grid-horizontal-active",
                onClick: e => ChangeFilter(item),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  class: "nav-link",
                  id: "thursday-tab",
                  "data-toggle": "tab",
                  href: "#" + item.id,
                  role: "tab",
                  "aria-controls": "thursday",
                  "aria-selected": "false",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    class: "item-text uppercase",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                      children: [" ", item.GroupName]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 41
                }, undefined)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 37
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "row",
          children: (_productsFiltered$nam6 = productsFiltered[name]) === null || _productsFiltered$nam6 === void 0 ? void 0 : (_productsFiltered$nam7 = _productsFiltered$nam6.Items) === null || _productsFiltered$nam7 === void 0 ? void 0 : _productsFiltered$nam7.map(_product => _product !== null && _product !== void 0 && _product.detail ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: colClass,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_thumb_3__WEBPACK_IMPORTED_MODULE_7__.default, {
              productThumb: _product.detail.data
            }, _product.id, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 45
            }, undefined)
          }, _product.id, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 41
          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, _product.id, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 43
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductGrid3Thumb);

/***/ }),

/***/ "./components/commerce/ProductCategory.js":
/*!************************************************!*\
  !*** ./components/commerce/ProductCategory.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-thumb */ "./components/commerce/product-thumb.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\ProductCategory.js";



const ProductCategory = ({
  categories = [],
  onSelected
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "schedules",
    class: "schedule section-padding",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "schedule-area  wow fadeInDown",
        "data-wow-delay": "0.3s",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "schedule-tab-title col-md-3 col-lg-3 col-xs-12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "table-responsive",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              class: "nav nav-tabs",
              id: "myTab",
              role: "tablist",
              children: categories.map((category, index) => {
                var _category$attributes$;

                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  class: "nav-item row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "nav-link",
                    id: "thursday-tab",
                    "data-toggle": "tab",
                    href: "#thursday",
                    role: "tab",
                    "aria-controls": "thursday",
                    "aria-selected": "false",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      class: "item-text",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                        children: [" ", (_category$attributes$ = category.attributes.name) !== null && _category$attributes$ !== void 0 ? _category$attributes$ : category.attributes.Name]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 18,
                        columnNumber: 21
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 19,
                        columnNumber: 21
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 17,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 17
                  }, undefined)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 16
                }, undefined);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCategory);

/***/ }),

/***/ "./components/commerce/commerce-hero.js":
/*!**********************************************!*\
  !*** ./components/commerce/commerce-hero.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel */ "./components/commerce/Carousel.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\commerce-hero.js";




const CommerceHero = ({
  hero,
  page
}) => {
  var _hero$BgImage;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "hero-area",
    style: {
      backgroundImage: `url(` + (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.getStrapiURL)() + ((_hero$BgImage = hero.BgImage) === null || _hero$BgImage === void 0 ? void 0 : _hero$BgImage.data.attributes.url) + `)`
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "justify-center row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "pt-32 mb-12 text-center lg:pt-48 header-hero-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp",
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.2s",
              children: hero === null || hero === void 0 ? void 0 : hero.CentralText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              class: "mb-3 text-4xl font-bold text-white header-title wow fadeInUp",
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.5s",
              children: hero === null || hero === void 0 ? void 0 : hero.CentralTextDescription
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "mb-8 text-white text wow fadeInUp",
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.8s",
              children: hero === null || hero === void 0 ? void 0 : hero.CentralTextSecondary
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              class: "main-btn pt-32 gradient-btn gradient-btn-2 wow fadeInUp",
              "data-wow-duration": "1.3s",
              "data-wow-delay": "1.1s",
              children: hero === null || hero === void 0 ? void 0 : hero.CentralButtonText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 30
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "w-full lg:w-1/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carousel__WEBPACK_IMPORTED_MODULE_3__.default, {
            ListItem: page === null || page === void 0 ? void 0 : page.attributes.CarouselGallery
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CommerceHero);

/***/ }),

/***/ "./components/commerce/product-body-content.js":
/*!*****************************************************!*\
  !*** ./components/commerce/product-body-content.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_component_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/component-resolver */ "./lib/component-resolver.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-body-content.js";




const ProductBodyContent = ({
  data
}) => {
  console.log("ProductBodyContent");
  console.log(data);
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "content",
    class: " pt-120 page-content",
    children: "No content"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 22
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "content",
    class: "pt-10 product-content",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "w-full",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "accordion",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "card-header lg:w-1/2",
              id: "headingOne",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "section-title",
                "data-toggle": "collapse",
                "data-target": "#questionOne",
                "aria-expanded": "true",
                "aria-controls": "collapseOne",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "lni lni-pencil"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 21
                }, undefined), " M\xF4 t\u1EA3 chi ti\u1EBFt"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {
                transformImageUri: _lib_component_resolver__WEBPACK_IMPORTED_MODULE_3__.transformImageUriPeform,
                source: data,
                escapeHtml: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductBodyContent);

/***/ }),

/***/ "./components/commerce/product-detail-full.js":
/*!****************************************************!*\
  !*** ./components/commerce/product-detail-full.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_body_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-body-content */ "./components/commerce/product-body-content.js");

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-detail-full.js";







const ProductDetailFull = ({
  productThumb
}) => {
  var _productDetailItem$at2, _productDetailItem$at3, _productDetailItem$at4, _productDetailItem$at5, _productDetailItem$at6, _productDetailItem$at7, _productDetailItem$at8, _productDetailItem$at9, _productDetailItem$at10;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const productSlug = router.query.product;
  console.log(productSlug);

  if (!productSlug) {
    router.replace("/pages/catalog");
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Empty   "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined);
  }

  console.log("load product detail swr");
  const {
    data,
    error
  } = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getProductDetail)(productSlug, {
    populate: {
      populate: "*",
      Image: {
        populate: "*"
      },
      Custom_field: {
        populate: "*"
      }
    }
  });
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log("load ProductDetailFull");
  console.log(productDetailItem);

  if (!(data !== null && data !== void 0 && data.data) || Array.from(data.data).length == 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Empty"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }, undefined);
  }

  const productDetailItem = data.data[0];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "detail-section",
    class: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "col-12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "section-title-header text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              class: "section-title",
              onClick: e => {
                var _productDetailItem$at;

                router.replace(`/pages/catalog#${productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at = productDetailItem.attributes) === null || _productDetailItem$at === void 0 ? void 0 : _productDetailItem$at.slug}`);
              },
              href: `/pages/catalog#${productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at2 = productDetailItem.attributes) === null || _productDetailItem$at2 === void 0 ? void 0 : _productDetailItem$at2.slug}`,
              as: `/pages/catalog#${productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at3 = productDetailItem.attributes) === null || _productDetailItem$at3 === void 0 ? void 0 : _productDetailItem$at3.slug}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                class: "lni lni-close",
                children: " "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 14
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "row product-detail",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "lg:w-1/2 wow fadeInRight product-detail-left",
          "data-wow-delay": "0.3s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "video",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
              image: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at4 = productDetailItem.attributes) === null || _productDetailItem$at4 === void 0 ? void 0 : _productDetailItem$at4.Image,
              imageClass: "product-image-horizontal-2x",
              style: "height: 250px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "lg:w-1/2 wow fadeInLeft ml-10 product-detail-right",
          "data-wow-delay": "0.3s",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            class: "section-title wow fadeInUp",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at5 = productDetailItem.attributes) === null || _productDetailItem$at5 === void 0 ? void 0 : _productDetailItem$at5.Title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            class: "intro-desc",
            children: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at6 = productDetailItem.attributes) === null || _productDetailItem$at6 === void 0 ? void 0 : _productDetailItem$at6.ShortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            class: "",
            children: ["    ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              class: "lni lni-coin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 30
            }, undefined), "  Gi\xE1 :"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            class: "list-specification",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "text-price",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                class: "text-line-through pr-5",
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at7 = productDetailItem.attributes) === null || _productDetailItem$at7 === void 0 ? void 0 : _productDetailItem$at7.OriginalPrice, "  "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 15
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                class: "money-protection"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 15
              }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at8 = productDetailItem.attributes) === null || _productDetailItem$at8 === void 0 ? void 0 : _productDetailItem$at8.Price, " VN\u0110 "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 48
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, undefined), productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at9 = productDetailItem.attributes.Custom_field) === null || _productDetailItem$at9 === void 0 ? void 0 : _productDetailItem$at9.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                class: "lni lni-checkmark-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 21
              }, undefined), " ", item.Title, " : ", item.Options]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "row w-full",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: " lg:w-1/2 p-hori-15",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                class: "w-full btn btn-common  wow",
                "data-wow-duration": "1.3s",
                "data-wow-delay": "1.1s",
                children: "Mua ngay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: " lg:w-1/2 p-hori-15",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                class: "w-full btn btn-common wow",
                "data-wow-duration": "1.3s",
                "data-wow-delay": "1.1s",
                children: "Th\xEAm v\xE0o gi\u1ECF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "row product-description pt-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_body_content__WEBPACK_IMPORTED_MODULE_6__.default, {
          data: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at10 = productDetailItem.attributes) === null || _productDetailItem$at10 === void 0 ? void 0 : _productDetailItem$at10.Description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductDetailFull);

/***/ }),

/***/ "./components/commerce/product-grid.js":
/*!*********************************************!*\
  !*** ./components/commerce/product-grid.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-thumb */ "./components/commerce/product-thumb.js");
/* harmony import */ var _ProductCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCategory */ "./components/commerce/ProductCategory.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-grid.js";






var defaultgroupId;
var featureProductWrapTmp;
var productsFiltered;

const ProductGridThumb = ({
  featureProductWrap = [],
  categories = [],
  col = 3,
  row = 5
}) => {
  var _defaultgroupId, _productsFiltered;

  if (!featureProductWrap || featureProductWrap.length == 0) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
  featureProductWrapTmp = featureProductWrap;
  defaultgroupId = (_defaultgroupId = defaultgroupId) !== null && _defaultgroupId !== void 0 ? _defaultgroupId : featureProductWrap[0].id;
  productsFiltered = (_productsFiltered = productsFiltered) !== null && _productsFiltered !== void 0 ? _productsFiltered : featureProductWrap.filter(t => t.id == defaultgroupId)[0].Items;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const ChangeFilter = a => {
    defaultgroupId = a.id;
    productsFiltered = a.Items;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "product-section",
    className: "container flex flex-wrap mx-auto gap-2 mt-8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "w-full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "w-full lg:w-1/3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
              id: "schedules",
              class: "schedule section-padding",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "container",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  class: "schedule-area  wow fadeInDown",
                  "data-wow-delay": "0.3s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    class: "schedule-tab-title col-md-3 col-lg-3 col-xs-12",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      class: "table-responsive",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                        class: "nav nav-tabs",
                        id: "myTab",
                        role: "tablist",
                        children: featureProductWrap.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                          id: "#" + item.id,
                          class: "nav-item row",
                          onClick: e => ChangeFilter(item),
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            class: "nav-link",
                            id: "thursday-tab",
                            "data-toggle": "tab",
                            href: "#" + item.id,
                            role: "tab",
                            "aria-controls": "thursday",
                            "aria-selected": "false",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                              class: "item-text",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                children: [" ", item.GroupName]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 44,
                                columnNumber: 45
                              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 45,
                                columnNumber: 45
                              }, undefined)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 43,
                              columnNumber: 45
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 42,
                            columnNumber: 41
                          }, undefined)
                        }, index, false, {
                          fileName: _jsxFileName,
                          lineNumber: 41,
                          columnNumber: 37
                        }, undefined))
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 39,
                        columnNumber: 37
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 37
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 33
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "w-full lg:w-2/3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "row",
              children: productsFiltered.map(_product => _product !== null && _product !== void 0 && _product.detail ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                class: "w-full lg:w-1/2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_thumb__WEBPACK_IMPORTED_MODULE_2__.default, {
                  productThumb: _product.detail.data
                }, _product.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 37
                }, undefined)
              }, _product.id, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, _product.id, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 35
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductGridThumb);

/***/ }),

/***/ "./components/commerce/product-thumb-2.js":
/*!************************************************!*\
  !*** ./components/commerce/product-thumb-2.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-thumb-2.js";





const ProductThumb2 = ({
  productThumb
}) => {
  var _productThumbItem$att, _productThumbItem$att2, _productThumbItem$att3, _productThumbItem$att4, _productThumbItem$att5, _productThumbItem$att6, _productThumbItem$att7;

  console.log("load productThumb swr");
  const {
    data,
    error
  } = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getProductThumb)(productThumb.id, {
    populate: {
      Image: {
        populate: "*"
      },
      Custom_field: {
        populate: "*"
      }
    }
  });
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  const productThumbItem = data.data;

  const onSelected = a => {
    console.log("Set selectingProductItem");
    selectingProductItem = a;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att = productThumbItem.attributes) === null || _productThumbItem$att === void 0 ? void 0 : _productThumbItem$att.slug,
    class: "col-md-6 col-lg-4 col-xs-12 padding-none cursor",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      class: "cursor",
      replace: true,
      href: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att2 = productThumbItem.attributes) === null || _productThumbItem$att2 === void 0 ? void 0 : _productThumbItem$att2.slug}`,
      as: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att3 = productThumbItem.attributes) === null || _productThumbItem$att3 === void 0 ? void 0 : _productThumbItem$att3.slug}`,
      onClick: e => onSelected(productThumb),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "services-item wow fadeIn",
        "data-wow-delay": "0.2s",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "tumb",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att4 = productThumbItem.attributes) === null || _productThumbItem$att4 === void 0 ? void 0 : _productThumbItem$att4.Image,
            imageClass: "product-image-horizontal",
            style: "height: 250px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "services-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            class: "text-price",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: [(_productThumbItem$att5 = productThumbItem.attributes) === null || _productThumbItem$att5 === void 0 ? void 0 : _productThumbItem$att5.Price, " VN\u0110"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 34
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: (_productThumbItem$att6 = productThumbItem.attributes) === null || _productThumbItem$att6 === void 0 ? void 0 : _productThumbItem$att6.Title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: (_productThumbItem$att7 = productThumbItem.attributes) === null || _productThumbItem$att7 === void 0 ? void 0 : _productThumbItem$att7.ShortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, productThumbItem.id, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductThumb2);

/***/ }),

/***/ "./components/commerce/product-thumb-3.js":
/*!************************************************!*\
  !*** ./components/commerce/product-thumb-3.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-thumb-3.js";





const ProductThumb3 = ({
  productThumb
}) => {
  var _productThumbItem$att, _productThumbItem$att2, _productThumbItem$att3, _productThumbItem$att4, _productThumbItem$att5, _productThumbItem$att6, _productThumbItem$att7;

  console.log("load productThumb swr");
  const {
    data,
    error
  } = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getProductThumb)(productThumb.id, {
    populate: {
      Image: {
        populate: "*"
      },
      Custom_field: {
        populate: "*"
      }
    }
  });

  const onSelected = a => {
    console.log("Set selectingProductItem");
    selectingProductItem = a;
  };

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  const productThumbItem = data.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center text-white cursor",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      class: "cursor",
      replace: true,
      href: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att2 = productThumbItem.attributes) === null || _productThumbItem$att2 === void 0 ? void 0 : _productThumbItem$att2.slug}`,
      as: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att3 = productThumbItem.attributes) === null || _productThumbItem$att3 === void 0 ? void 0 : _productThumbItem$att3.slug}`,
      onClick: e => onSelected(productThumb),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "counter wow fadeInRight",
        "data-wow-delay": "0.3s",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "icon",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att4 = productThumbItem.attributes) === null || _productThumbItem$att4 === void 0 ? void 0 : _productThumbItem$att4.Image,
            imageClass: "product-image-horizontal",
            style: "height: 250px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          class: "text-price",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: [(_productThumbItem$att5 = productThumbItem.attributes) === null || _productThumbItem$att5 === void 0 ? void 0 : _productThumbItem$att5.Price, " VN\u0110"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 34
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: (_productThumbItem$att6 = productThumbItem.attributes) === null || _productThumbItem$att6 === void 0 ? void 0 : _productThumbItem$att6.Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: (_productThumbItem$att7 = productThumbItem.attributes) === null || _productThumbItem$att7 === void 0 ? void 0 : _productThumbItem$att7.ShortDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, undefined)
    }, productThumbItem.id, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  }, productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att = productThumbItem.attributes) === null || _productThumbItem$att === void 0 ? void 0 : _productThumbItem$att.slug, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductThumb3);

/***/ }),

/***/ "./components/commerce/product-thumb.js":
/*!**********************************************!*\
  !*** ./components/commerce/product-thumb.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./components/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\commerce\\product-thumb.js";





const ProductThumb = ({
  productThumb
}) => {
  var _productThumb$attribu, _productThumbItem$att, _productThumbItem$att2, _productThumbItem$att3, _productThumbItem$att4, _productThumbItem$att5, _productThumbItem$att6;

  console.log("load productThumb swr");

  const onSelected = a => {
    console.log("Set selectingProductItem");
    selectingProductItem = a;
  };

  const {
    data,
    error
  } = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getProductThumb)(productThumb.id, {
    populate: {
      Image: {
        populate: "*"
      },
      Custom_field: {
        populate: "*"
      }
    }
  });
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  const productThumbItem = data.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: productThumb === null || productThumb === void 0 ? void 0 : (_productThumb$attribu = productThumb.attributes) === null || _productThumb$attribu === void 0 ? void 0 : _productThumb$attribu.slug,
    class: "cursor",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      replace: true,
      href: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att = productThumbItem.attributes) === null || _productThumbItem$att === void 0 ? void 0 : _productThumbItem$att.slug}`,
      as: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att2 = productThumbItem.attributes) === null || _productThumbItem$att2 === void 0 ? void 0 : _productThumbItem$att2.slug}`,
      onClick: e => onSelected(productThumb),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "w-full wow fadeInUp",
        "data-wow-delay": ".2s",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "feature-box single-product",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "tumb",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
              image: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att3 = productThumbItem.attributes) === null || _productThumbItem$att3 === void 0 ? void 0 : _productThumbItem$att3.Image,
              imageClass: "product-image-horizontal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            class: "text-price",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: [(_productThumbItem$att4 = productThumbItem.attributes) === null || _productThumbItem$att4 === void 0 ? void 0 : _productThumbItem$att4.Price, " VN\u0110"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 38
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            class: "text-title",
            children: (_productThumbItem$att5 = productThumbItem.attributes) === null || _productThumbItem$att5 === void 0 ? void 0 : _productThumbItem$att5.Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            children: (_productThumbItem$att6 = productThumbItem.attributes) === null || _productThumbItem$att6 === void 0 ? void 0 : _productThumbItem$att6.ShortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined)
    }, productThumbItem.id, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductThumb);

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

/***/ "./components/layout-commerce.js":
/*!***************************************!*\
  !*** ./components/layout-commerce.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ "./components/nav.js");


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\components\\layout-commerce.js";




const LayoutCommerce = ({
  children,
  categories,
  layout,
  color,
  page
}) => {
  var _page$attributes;

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
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                    imageClass: "",
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
                  id: "navbarOne"
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
      footer: page === null || page === void 0 ? void 0 : (_page$attributes = page.attributes) === null || _page$attributes === void 0 ? void 0 : _page$attributes.Footer,
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

/* harmony default export */ __webpack_exports__["default"] = (LayoutCommerce);

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

/***/ "./pages/pages/catalog.js":
/*!********************************!*\
  !*** ./pages/pages/catalog.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_commerce_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/commerce/Carousel */ "./components/commerce/Carousel.js");
/* harmony import */ var _components_commerce_commerce_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/commerce/commerce-hero */ "./components/commerce/commerce-hero.js");
/* harmony import */ var _components_commerce_product_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/commerce/product-grid */ "./components/commerce/product-grid.js");
/* harmony import */ var _components_commerce_Product_grid_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/commerce/Product-grid-2 */ "./components/commerce/Product-grid-2.js");
/* harmony import */ var _components_commerce_Product_grid_3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/commerce/Product-grid-3 */ "./components/commerce/Product-grid-3.js");
/* harmony import */ var _components_layout_commerce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout-commerce */ "./components/layout-commerce.js");
/* harmony import */ var _components_page_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/page-seo */ "./components/page-seo.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_commerce_product_detail_full__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/commerce/product-detail-full */ "./components/commerce/product-detail-full.js");


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\pages\\pages\\catalog.js";












react_modal__WEBPACK_IMPORTED_MODULE_10___default().setAppElement("#__next");
var selectingProductItem = {};

const Home = ({
  catalog,
  catalogpage,
  layoutInfo
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_commerce__WEBPACK_IMPORTED_MODULE_7__.default, {
    categories: catalog,
    layout: layoutInfo,
    page: catalogpage,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_page_seo__WEBPACK_IMPORTED_MODULE_8__.default, {
      seo: catalogpage.attributes.seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_commerce_hero__WEBPACK_IMPORTED_MODULE_3__.default, {
      hero: catalogpage.attributes.Hero,
      page: catalogpage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "margin-box-1x"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_product_grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      categories: catalog,
      featureProductWrap: catalogpage.attributes.FeatureProductWrap
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "margin-box-1x"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "margin-box-1x"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined), catalogpage.attributes.SaleOffProductWrap && Array.from(catalogpage.attributes.SaleOffProductWrap).length != 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_Product_grid_3__WEBPACK_IMPORTED_MODULE_6__.default, {
        name: "SaleOffProductWrap",
        categories: catalog,
        featureProductWrap: catalogpage.attributes.SaleOffProductWrap,
        colClass: "w-full lg:w-1/3"
      }, "SaleOffProductWrap", false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 205
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 235
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 240
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), catalogpage.attributes.MainProductWrap && Array.from(catalogpage.attributes.MainProductWrap).length != 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_Product_grid_2__WEBPACK_IMPORTED_MODULE_5__.default, {
        name: "MainProductWrap",
        categories: catalog,
        featureProductWrap: catalogpage.attributes.MainProductWrap,
        colClass: "w-full lg:w-1/3"
      }, "MainProductWrap", false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 197
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 226
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 231
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), catalogpage.attributes.RecommendProductWrap && Array.from(catalogpage.attributes.RecommendProductWrap).length != 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_Product_grid_2__WEBPACK_IMPORTED_MODULE_5__.default, {
        name: "RecommendProductWrap",
        categories: catalog,
        featureProductWrap: catalogpage.attributes.RecommendProductWrap,
        colClass: "w-full lg:w-1/3"
      }, "RecommendProductWrap", false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 212
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 241
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "margin-box-1x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 246
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 12
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "margin-box-1x"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_10___default()), {
      isOpen: !!router.query.product,
      onRequestClose: () => router.replace("/pages/catalog"),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commerce_product_detail_full__WEBPACK_IMPORTED_MODULE_12__.default, {
        productThumb: selectingProductItem
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

async function getStaticProps() {
  // Run API calls in parallel
  const [catalogRes, catalogpageRes] = await Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_9__.fetchAPI)("/product-categories", {
    populate: {
      FeatureProducts: {
        populate: "*"
      }
    }
  }), //http://localhost:8080/api/catalog-page?populate[FeatureProductWrap][populate][Items][populate]=*
  (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__.fetchAPI)("/catalog-page", {
    populate: {
      populate: "*",
      Hero: {
        populate: "*",
        Image: {
          populate: "*"
        },
        BgImage: {
          populate: "*"
        }
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
      CarouselGallery: {
        populate: "*"
      },
      FeatureProductWrap: {
        populate: {
          Items: {
            populate: "*"
          }
        }
      },
      MainProductWrap: {
        populate: {
          Items: {
            populate: "*"
          }
        }
      },
      RecommendProductWrap: {
        populate: {
          Items: {
            populate: "*"
          }
        }
      },
      SaleOffProductWrap: {
        populate: {
          Items: {
            populate: "*"
          },
          BgImage: {
            populate: "*"
          }
        }
      }
    }
  })]);
  return {
    props: {
      catalog: catalogRes.data,
      catalogpage: catalogpageRes.data
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/pages/catalog.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvY29tbWVyY2UvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9jb21tZXJjZS9Qcm9kdWN0LWdyaWQtMi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL1Byb2R1Y3QtZ3JpZC0zLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvY29tbWVyY2UvUHJvZHVjdENhdGVnb3J5LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvY29tbWVyY2UvY29tbWVyY2UtaGVyby5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtYm9keS1jb250ZW50LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvY29tbWVyY2UvcHJvZHVjdC1kZXRhaWwtZnVsbC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtZ3JpZC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtdGh1bWItMi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtdGh1bWItMy5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtdGh1bWIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9ob21lL2FjdGl2aXR5LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaG9tZS9icmFuZC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2hvbWUvYnVzaW5lc3MtdGFsay5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2hvbWUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2hvbWUvcGlubmVkLWJsb2cuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2xheW91dC1jb21tZXJjZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL3BhZ2Utc2VvLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvc3ViY3JpYmUtYm94LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2xpYi9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbGliL2NvbXBvbmVudC1yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93blwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0LW1vZGFsXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2lnbm9yZWR8RDpcXFdvcmtcXFRyYW5zZm9tYXRpb25cXGxhbmRpbmdzaXRlXFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiTGlzdEl0ZW0iLCJ1c2VFZmZlY3QiLCJoZWxwZXIiLCJkYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsZSIsIm9uY2xpY2siLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwicG9zaXRpb24iLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsInNldEludGVydmFsIiwidG90YWxDaGVja2JveGVzIiwiZWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsIm1heENhcm91c2VsQ291bnQiLCJsZW5ndGgiLCJjdXJyZW50UG9zaXRpb24iLCJzdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJkZWZhdWx0Z3JvdXBJZHMiLCJmZWF0dXJlUHJvZHVjdFdyYXBUbXAiLCJwcm9kdWN0c0ZpbHRlcmVkIiwiUHJvZHVjdEdyaWQyVGh1bWIiLCJmZWF0dXJlUHJvZHVjdFdyYXAiLCJjYXRlZ29yaWVzIiwiY29sQ2xhc3MiLCJuYW1lIiwiaWQiLCJmaWx0ZXIiLCJ0IiwiSXRlbXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJDaGFuZ2VGaWx0ZXIiLCJhIiwicmVwbGFjZSIsImFzUGF0aCIsImUiLCJHcm91cE5hbWUiLCJfcHJvZHVjdCIsImRldGFpbCIsIlByb2R1Y3RHcmlkM1RodW1iIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0U3RyYXBpVVJMIiwiQmdJbWFnZSIsImF0dHJpYnV0ZXMiLCJ1cmwiLCJQcm9kdWN0Q2F0ZWdvcnkiLCJvblNlbGVjdGVkIiwiY2F0ZWdvcnkiLCJOYW1lIiwiQ29tbWVyY2VIZXJvIiwiaGVybyIsInBhZ2UiLCJDZW50cmFsVGV4dCIsIkNlbnRyYWxUZXh0RGVzY3JpcHRpb24iLCJDZW50cmFsVGV4dFNlY29uZGFyeSIsIkNlbnRyYWxCdXR0b25UZXh0IiwiQ2Fyb3VzZWxHYWxsZXJ5IiwiUHJvZHVjdEJvZHlDb250ZW50IiwidHJhbnNmb3JtSW1hZ2VVcmlQZWZvcm0iLCJQcm9kdWN0RGV0YWlsRnVsbCIsInByb2R1Y3RUaHVtYiIsInByb2R1Y3RTbHVnIiwicXVlcnkiLCJwcm9kdWN0IiwiZXJyb3IiLCJnZXRQcm9kdWN0RGV0YWlsIiwicG9wdWxhdGUiLCJJbWFnZSIsIkN1c3RvbV9maWVsZCIsInByb2R1Y3REZXRhaWxJdGVtIiwic2x1ZyIsIlRpdGxlIiwiU2hvcnREZXNjcmlwdGlvbiIsIk9yaWdpbmFsUHJpY2UiLCJQcmljZSIsIk9wdGlvbnMiLCJEZXNjcmlwdGlvbiIsImRlZmF1bHRncm91cElkIiwiUHJvZHVjdEdyaWRUaHVtYiIsImNvbCIsInJvdyIsIlByb2R1Y3RUaHVtYjIiLCJnZXRQcm9kdWN0VGh1bWIiLCJwcm9kdWN0VGh1bWJJdGVtIiwic2VsZWN0aW5nUHJvZHVjdEl0ZW0iLCJQcm9kdWN0VGh1bWIzIiwiUHJvZHVjdFRodW1iIiwiRm9vdGVyIiwiZm9vdGVyIiwic2l0ZUluZm8iLCJxdWlja0xpbmtzIiwiSHlwZXJMaW5rIiwibGluayIsIkdyb3VwVmFsdWUiLCJyZXNvdXJjZUxpbmtzIiwiY29udGFjdExpbmtzIiwiU3ViY3JpYmVCb3giLCJMb2dvIiwiQWx0ZXJOYW1lIiwiaSIsIkxpbmsiLCJDb3B5cmlnaHRUZXh0IiwiQWN0aXZpdHkiLCJhY3Rpdml0eSIsImJ1aWxkQWN0aXZpdHlTdHlsZSIsImJ1aWxkQnVzaW5lc3NTdGVwVmlld1N0eWxlIiwiTmF2aWdhdGVMaW5rIiwiTmF2aWdhdGVMYWJsZSIsIk1lZGlhIiwiQmdNZWRpYSIsImJ1aWxkQnVzaW5lc3NJbnZlc3RtZW50Vmlld1N0eWxlIiwiX19jb21wb25lbnQiLCJpbmRleE9mIiwiU3RlcHMiLCJCcmFuZCIsImJyYW5kIiwiYnJhbmRJdGVtc3MiLCJCcmFuZExvZ28iLCJCdXNpbmVzc1RhbGsiLCJidXNpbmVzcyIsIkZlYXR1cmUiLCJmZWF0dXJlIiwidGl0bGUiLCJpdGVtcyIsIkljb25DbGFzcyIsIk5hdmlnYXRlVGV4dExhYmVsIiwiUGlubmVkQmxvZyIsImFyZ3MxIiwic2xpY2UiLCJwb3N0IiwiaW1hZ2UiLCJDdXN0b21JbWFnZSIsImltYWdlQ2xhc3MiLCJhbHRlcm5hdGl2ZVRleHQiLCJ3aWR0aCIsImhlaWdodCIsInNyY1VybCIsIkxheW91dENvbW1lcmNlIiwiY2hpbGRyZW4iLCJsYXlvdXQiLCJjb2xvciIsInRleHRDb2xvciIsIkxvZ29JbWFnZSIsIlNpdGVJbmZvIiwiTmF2IiwiUGFnZVNlbyIsInNlbyIsImRlZmF1bHRTZW8iLCJzaXRlTmFtZSIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0Iiwic2VvV2l0aERlZmF1bHRzIiwiZnVsbFNlbyIsIm1ldGFUaXRsZSIsInNoYXJlSW1hZ2UiLCJnZXRTdHJhcGlNZWRpYSIsIm1ldGFEZXNjcmlwdGlvbiIsImFydGljbGUiLCJzdWJjcmliZUJveCIsIlBPU1RfVVJMIiwiU3VibWl0TGFiZWwiLCJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInBhdGgiLCJwcm9jZXNzIiwiZmV0Y2hBUEkiLCJ1cmxQYXJhbXNPYmplY3QiLCJvcHRpb25zIiwibWVyZ2VkT3B0aW9ucyIsImhlYWRlcnMiLCJxdWVyeVN0cmluZyIsInFzIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwib2siLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJnZXRQcm9kdWN0Q2F0YWxvZ3MiLCJnZXRQcm9kdWN0Q2F0YWxvZyIsImdldFByb2R1Y3RzIiwicHJvZHVjdHMiLCJnZXRQcm9kdWN0IiwidXNlU1dSIiwicmVzb2x2ZXJDb21wb25lbnQiLCJjb21wb25lbnROYW1lIiwiYXJncyIsInJlc29sdmVyRHluYW1pY0NvbXBvbmVudCIsInNvdXJjZSIsImNvbnRlbnRCdWlsZGVyIiwiZHluYW1pY0NvbnRlbnQiLCJyZXNvbHZlckR5bmFtaWNFeHRyYWN0IiwidXJpIiwiYWx0Iiwic3RhcnRzV2l0aCIsIkNvbnRlbnQiLCJJZCIsIm1lZGlhIiwiaW1hZ2VVcmwiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImhyZWYiLCJhcyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiZGVmYXVsdCIsInVzZVJlZiIsImN1cnJlbnQiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidmFsdWUiLCJoYXNQcmVmZXRjaCIsIndpbmRvdyIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImFwcEdldEluaXRpYWxQcm9wcyIsInJlbmRlciIsImNyZWF0ZUNvbnRleHQiLCJNeUFwcCIsImdsb2JhbCIsImZhdmljb24iLCJhcHBQcm9wcyIsImdsb2JhbFJlcyIsImxheW91dEluZm8iLCJIZWFkZXJCZ0ltYWdlIiwiSGVyb0NlbnRyYWxJbWFnZSIsImZpbHRlcnMiLCJJc1RvcE1lbnUiLCJQYWdlSGVybyIsIlBhZ2VCb2R5IiwiTW9kYWwiLCJIb21lIiwiY2F0YWxvZyIsImNhdGFsb2dwYWdlIiwiSGVybyIsIkZlYXR1cmVQcm9kdWN0V3JhcCIsIlNhbGVPZmZQcm9kdWN0V3JhcCIsIk1haW5Qcm9kdWN0V3JhcCIsIlJlY29tbWVuZFByb2R1Y3RXcmFwIiwiZ2V0U3RhdGljUHJvcHMiLCJjYXRhbG9nUmVzIiwiY2F0YWxvZ3BhZ2VSZXMiLCJGZWF0dXJlUHJvZHVjdHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtB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QUFFUSxVQUFVLENBQUN6d0IsSUFEZjtBQUVMa3dCLGlCQUFXLEVBQUVRLGNBQWMsQ0FBQzF3QjtBQUZ2QixLQURGO0FBS0w0d0IsY0FBVSxFQUFFO0FBTFAsR0FBUDtBQU9EO0FBRUQsK0RBQWVaLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGYSxrQkFBa0IsTUFBTSx3QkFBd0Isa0JBQWtCLDJCQUEyQixxQkFBcUIsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7QUNEQSx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5Qyx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvcGFnZXMvY2F0YWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIiBcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiXHJcbmltcG9ydCAge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IENhcm91c2VsID0gKHsgTGlzdEl0ZW0gfSkgPT4ge1xyXG4gICAgIFxyXG4gIGlmKCFMaXN0SXRlbSkge1xyXG4gICAgTGlzdEl0ZW0gPSBbXTtcclxuICB9XHJcbiBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaGVscGVyKCk7XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwibWFpbi1zbGlkZVwiIGNsYXNzPVwiIGNhcm91c2VsIHNsaWRlIFwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XHJcbiAgICAgICAgPG1haW4gY2xhc3M9XCJwdC0zMlwiIGlkPVwiY2Fyb3VzZWxcIj5cclxuICAgICAgICB7IExpc3RJdGVtLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzPVwiaXRlbVwiPiBcclxuICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e2l0ZW19IGltYWdlQ2xhc3M9e1wiaW1hZ2UtZml0IGQtYmxvY2sgdy0xMDBcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8LyBtYWluPlxyXG4gICAgPGRpdiBpZD1cImNhcm91c2VsLW5hdlwiIGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgIHtMaXN0SXRlbS5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0Q2hlY2tlZD17aW5kZXggPT0gMCA/IHRydWU6IGZhbHNlfSBkYXRhLWNhcm91c2VsPXtpbmRleCArIDF9IGtleT17aW5kZXh9IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbS1yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwb3NpdGlvblwiIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gaGVscGVyKCkge1xyXG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWl0ZW0tcmFkaW9cIikpLmZvckVhY2goZWxlID0+IHtcclxuICAgIGVsZS5vbmNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXJvdXNlbFwiKSk7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gZWxlLmdldEF0dHJpYnV0ZShcImRhdGEtY2Fyb3VzZWxcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbFwiKS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIi0tcG9zaXRpb246XCIgKyBwb3NpdGlvbikgO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuIFxyXG5cclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICB2YXIgdG90YWxDaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWl0ZW0tcmFkaW9cIik7XHJcbiAgICBBcnJheS5mcm9tKHRvdGFsQ2hlY2tib3hlcykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpIDtcclxuICAgIH0pO1xyXG4gICBcclxuICAgIHZhciBtYXhDYXJvdXNlbENvdW50ID0gQXJyYXkuZnJvbSh0b3RhbENoZWNrYm94ZXMpLmxlbmd0aDtcclxuICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsXCIpO1xyXG4gICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IGVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1wb3NpdGlvblwiKTtcclxuICAgIGlmKGN1cnJlbnRQb3NpdGlvbiA+PSBtYXhDYXJvdXNlbENvdW50KSB7Y3VycmVudFBvc2l0aW9uID0gMTt9IGVsc2Uge2N1cnJlbnRQb3NpdGlvbisrO31cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxcIikuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCItLXBvc2l0aW9uOlwiICsgY3VycmVudFBvc2l0aW9uKSA7XHJcbiAgICB0b3RhbENoZWNrYm94ZXNbY3VycmVudFBvc2l0aW9uLTFdLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdHJ1ZSkgO1xyXG4gICBcclxuICB9LCAzMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUHJvZHVjdFRodW1iMiBmcm9tIFwiLi9wcm9kdWN0LXRodW1iLTJcIjtcclxuXHJcbnZhciBkZWZhdWx0Z3JvdXBJZHMgPSB7fTtcclxudmFyIGZlYXR1cmVQcm9kdWN0V3JhcFRtcCA9IHt9XHJcbnZhciBwcm9kdWN0c0ZpbHRlcmVkID0ge307XHJcblxyXG5kZWZhdWx0Z3JvdXBJZHNbXCIwXCJdID0gXCJcIjtcclxuZmVhdHVyZVByb2R1Y3RXcmFwVG1wW1wiMFwiXSA9IFwiXCI7XHJcbnByb2R1Y3RzRmlsdGVyZWRbXCIwXCJdID0gXCJcIjtcclxuY29uc3QgUHJvZHVjdEdyaWQyVGh1bWIgPSAoeyBmZWF0dXJlUHJvZHVjdFdyYXAgLCBjYXRlZ29yaWVzID0gW10sIGNvbENsYXNzPVwidy1mdWxsIGxnOnctMS8yXCIsIG5hbWUgPSBcIlByb2R1Y3RHcmlkMlRodW1iXCIgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIGlmKCFmZWF0dXJlUHJvZHVjdFdyYXAgfHwgQXJyYXkuZnJvbShmZWF0dXJlUHJvZHVjdFdyYXApLmxlbmd0aCA9PSAwKSByZXR1cm4gPD48Lz5cclxuICAgIGZlYXR1cmVQcm9kdWN0V3JhcFRtcFtuYW1lXSA9IGZlYXR1cmVQcm9kdWN0V3JhcDtcclxuICAgIGRlZmF1bHRncm91cElkc1tuYW1lXSA9IGRlZmF1bHRncm91cElkc1tuYW1lXSA/PyBmZWF0dXJlUHJvZHVjdFdyYXBbMF0uaWQ7XHJcbiAgICBwcm9kdWN0c0ZpbHRlcmVkW25hbWVdID0gcHJvZHVjdHNGaWx0ZXJlZFtuYW1lXSA/PyBmZWF0dXJlUHJvZHVjdFdyYXBUbXBbbmFtZV0uZmlsdGVyKHQ9PiB0LmlkID09IGRlZmF1bHRncm91cElkc1tuYW1lXSlbMF0uSXRlbXM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBDaGFuZ2VGaWx0ZXIgPSAoYSkgPT4ge1xyXG4gICAgZGVmYXVsdGdyb3VwSWRzW25hbWVdID0gYS5pZDtcclxuICAgIHByb2R1Y3RzRmlsdGVyZWRbbmFtZV0gPSBhLkl0ZW1zO1xyXG4gICAgcm91dGVyLnJlcGxhY2Uocm91dGVyLmFzUGF0aC5yZXBsYWNlKC9cXCMuKy8sICcnKSArIFwiI1wiICsgYS5pZClcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPHNlY3Rpb24gaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzPVwic2VydmljZXMgc2VjdGlvbi1wYWRkaW5nIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzIGZsZXhcIiBpZD1cIm15VGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmVQcm9kdWN0V3JhcC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBpZD17XCIjXCIgKyBpdGVtLmlkfSBjbGFzcz1cIm5hdi1wcm9kdWN0LWdyaWQtaG9yaXpvbnRhbFwiIG9uQ2xpY2s9eyhlKSA9PkNoYW5nZUZpbHRlcihpdGVtKX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwidGh1cnNkYXktdGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPXtcIiNcIiArIGl0ZW0uaWR9IHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwidGh1cnNkYXlcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiB7aXRlbS5Hcm91cE5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPikpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc2VydmljZXMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9kdWN0c0ZpbHRlcmVkW25hbWVdPy5tYXAoKF9wcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3Byb2R1Y3Q/LmRldGFpbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e19wcm9kdWN0LmlkfSBjbGFzcz17Y29sQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VGh1bWIyIGtleT17X3Byb2R1Y3QuaWR9IHByb2R1Y3RUaHVtYj17X3Byb2R1Y3QuZGV0YWlsLmRhdGF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBrZXk9e19wcm9kdWN0LmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEdyaWQyVGh1bWJcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBQcm9kdWN0VGh1bWIgZnJvbSBcIi4vcHJvZHVjdC10aHVtYlwiXHJcbmltcG9ydCBQcm9kdWN0Q2F0ZWdvcnkgZnJvbSBcIi4vUHJvZHVjdENhdGVnb3J5XCJcclxuaW1wb3J0ICB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBQcm9kdWN0VGh1bWIyIGZyb20gXCIuL3Byb2R1Y3QtdGh1bWItMlwiO1xyXG5pbXBvcnQgUHJvZHVjdFRodW1iMyBmcm9tIFwiLi9wcm9kdWN0LXRodW1iLTNcIjtcclxuaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuXHJcbnZhciBkZWZhdWx0Z3JvdXBJZHMgPSB7fTtcclxudmFyIGZlYXR1cmVQcm9kdWN0V3JhcFRtcCA9IHt9XHJcbnZhciBwcm9kdWN0c0ZpbHRlcmVkID0ge307XHJcblxyXG5kZWZhdWx0Z3JvdXBJZHNbXCIwXCJdID0gXCJcIjtcclxuZmVhdHVyZVByb2R1Y3RXcmFwVG1wW1wiMFwiXSA9IFwiXCI7XHJcbnByb2R1Y3RzRmlsdGVyZWRbXCIwXCJdID0gXCJcIjtcclxuY29uc3QgUHJvZHVjdEdyaWQzVGh1bWIgPSAoeyBmZWF0dXJlUHJvZHVjdFdyYXAgLCBjYXRlZ29yaWVzID0gW10sIGNvbENsYXNzPVwidy1mdWxsIGxnOnctMS8yXCIsIG5hbWUgPSBcIlByb2R1Y3RHcmlkMlRodW1iXCIgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIGlmKCFmZWF0dXJlUHJvZHVjdFdyYXAgfHwgQXJyYXkuZnJvbShmZWF0dXJlUHJvZHVjdFdyYXApLmxlbmd0aCA9PSAwKSByZXR1cm4gPD48Lz5cclxuICAgIGZlYXR1cmVQcm9kdWN0V3JhcFRtcFtuYW1lXSA9IGZlYXR1cmVQcm9kdWN0V3JhcDtcclxuICAgIGRlZmF1bHRncm91cElkc1tuYW1lXSA9IGRlZmF1bHRncm91cElkc1tuYW1lXSA/PyBmZWF0dXJlUHJvZHVjdFdyYXBbMF0uaWQ7XHJcbiAgICBwcm9kdWN0c0ZpbHRlcmVkW25hbWVdID0gcHJvZHVjdHNGaWx0ZXJlZFtuYW1lXSA/PyBmZWF0dXJlUHJvZHVjdFdyYXBUbXBbbmFtZV0uZmlsdGVyKHQ9PiB0LmlkID09IGRlZmF1bHRncm91cElkc1tuYW1lXSlbMF07XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBDaGFuZ2VGaWx0ZXIgPSAoYSkgPT4ge1xyXG4gICAgZGVmYXVsdGdyb3VwSWRzW25hbWVdID0gYS5pZDtcclxuICAgIHByb2R1Y3RzRmlsdGVyZWRbbmFtZV0gPSBhO1xyXG4gICAgcm91dGVyLnJlcGxhY2Uocm91dGVyLmFzUGF0aC5yZXBsYWNlKC9cXCMuKy8sICcnKSArIFwiI1wiICsgYS5pZClcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb3VudGVyLXNlY3Rpb24gc2VjdGlvbi1wYWRkaW5nXCIgXHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICBgdXJsKGArZ2V0U3RyYXBpVVJMKCkgKyBwcm9kdWN0c0ZpbHRlcmVkW25hbWVdPy5CZ0ltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzPy51cmwrYClgIH19ID5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFicyBmbGV4XCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlUHJvZHVjdFdyYXAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gaWQ9e1wiI1wiICsgaXRlbS5pZH0gY2xhc3M9XCJuYXYtcHJvZHVjdC1ncmlkLWhvcml6b250YWwtYWN0aXZlXCIgb25DbGljaz17KGUpID0+Q2hhbmdlRmlsdGVyKGl0ZW0pfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJ0aHVyc2RheS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9e1wiI1wiICsgaXRlbS5pZH0gcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJ0aHVyc2RheVwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXRleHQgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ID4ge2l0ZW0uR3JvdXBOYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgIHsgcHJvZHVjdHNGaWx0ZXJlZFtuYW1lXT8uSXRlbXM/Lm1hcCgoX3Byb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfcHJvZHVjdD8uZGV0YWlsKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17X3Byb2R1Y3QuaWR9IGNsYXNzPXtjb2xDbGFzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUaHVtYjMga2V5PXtfcHJvZHVjdC5pZH0gcHJvZHVjdFRodW1iPXtfcHJvZHVjdC5kZXRhaWwuZGF0YX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGtleT17X3Byb2R1Y3QuaWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEdyaWQzVGh1bWJcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBQcm9kdWN0VGh1bWIgZnJvbSBcIi4vcHJvZHVjdC10aHVtYlwiXHJcblxyXG5jb25zdCBQcm9kdWN0Q2F0ZWdvcnkgPSAoeyBjYXRlZ29yaWVzID0gW10sIG9uU2VsZWN0ZWQgfSkgPT4ge1xyXG4gICBcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJzY2hlZHVsZXNcIiBjbGFzcz1cInNjaGVkdWxlIHNlY3Rpb24tcGFkZGluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2NoZWR1bGUtYXJlYSAgd293IGZhZGVJbkRvd25cIiBkYXRhLXdvdy1kZWxheT1cIjAuM3NcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY2hlZHVsZS10YWItdGl0bGUgY29sLW1kLTMgY29sLWxnLTMgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIGlkPVwibXlUYWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICB7IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzPVwibmF2LWl0ZW0gcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJ0aHVyc2RheS10YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjdGh1cnNkYXlcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInRodXJzZGF5XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+IHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWUgPz8gY2F0ZWdvcnkuYXR0cmlidXRlcy5OYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2F0ZWdvcnlcclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4vQ2Fyb3VzZWxcIjtcclxuXHJcbmNvbnN0IENvbW1lcmNlSGVybyA9ICh7IGhlcm8sIHBhZ2UgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby1hcmVhXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAgYHVybChgK2dldFN0cmFwaVVSTCgpICsgaGVyby5CZ0ltYWdlPy5kYXRhLmF0dHJpYnV0ZXMudXJsK2ApYCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0yLzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTMyIG1iLTEyIHRleHQtY2VudGVyIGxnOnB0LTQ4IGhlYWRlci1oZXJvLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtNHhsIGZvbnQtbGlnaHQgbGVhZGluZy10aWdodCB0ZXh0LXdoaXRlIGhlYWRlci1zdWItdGl0bGUgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+eyBoZXJvPy5DZW50cmFsVGV4dH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1iLTMgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgaGVhZGVyLXRpdGxlIHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMS4zc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZXJvPy5DZW50cmFsVGV4dERlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItOCB0ZXh0LXdoaXRlIHRleHQgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjhzXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVybz8uQ2VudHJhbFRleHRTZWNvbmRhcnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYWluLWJ0biBwdC0zMiBncmFkaWVudC1idG4gZ3JhZGllbnQtYnRuLTIgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIxLjFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlcm8/LkNlbnRyYWxCdXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgTGlzdEl0ZW09e3BhZ2U/LmF0dHJpYnV0ZXMuQ2Fyb3VzZWxHYWxsZXJ5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZXJjZUhlcm9cclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCB7IHJlc29sdmVyRHluYW1pY0NvbXBvbmVudCwgcmVzb2x2ZXJEeW5hbWljRXh0cmFjdCwgdHJhbnNmb3JtSW1hZ2VVcmlQZWZvcm0gfSBmcm9tIFwiLi4vLi4vbGliL2NvbXBvbmVudC1yZXNvbHZlclwiO1xyXG5cclxuY29uc3QgUHJvZHVjdEJvZHlDb250ZW50ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3RCb2R5Q29udGVudFwiKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICBpZighZGF0YSkgcmV0dXJuIDxzZWN0aW9uIGlkPVwiY29udGVudFwiIGNsYXNzPVwiIHB0LTEyMCBwYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICBObyBjb250ZW50XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgcmV0dXJuICg8c2VjdGlvbiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cInB0LTEwIHByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgbGc6dy0xLzJcIiBpZD1cImhlYWRpbmdPbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjcXVlc3Rpb25PbmVcIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZU9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibG5pIGxuaS1wZW5jaWxcIj48L2k+IE3DtCB04bqjIGNoaSB0aeG6v3RcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1JbWFnZVVyaT17dHJhbnNmb3JtSW1hZ2VVcmlQZWZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Qm9keUNvbnRlbnRcclxuXHJcbiIsImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3REZXRhaWwsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFByb2R1Y3RCb2R5Q29udGVudCBmcm9tIFwiLi9wcm9kdWN0LWJvZHktY29udGVudFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdERldGFpbEZ1bGwgPSAgICh7IHByb2R1Y3RUaHVtYiAgfSkgID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcHJvZHVjdFNsdWcgPSAgcm91dGVyLnF1ZXJ5LnByb2R1Y3Q7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdFNsdWcpO1xyXG5cclxuICBpZighcHJvZHVjdFNsdWcpIHtcclxuICAgIHJvdXRlci5yZXBsYWNlKFwiL3BhZ2VzL2NhdGFsb2dcIik7XHJcbiAgICByZXR1cm4gKDxoMz5FbXB0eSAgIDwvaDM+KVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coXCJsb2FkIHByb2R1Y3QgZGV0YWlsIHN3clwiKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSAgIGdldFByb2R1Y3REZXRhaWwocHJvZHVjdFNsdWcsIHtcclxuICAgIHBvcHVsYXRlOiB7XHJcbiAgICAgIHBvcHVsYXRlOiBcIipcIiAsXHJcbiAgICAgIEltYWdlOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxyXG4gICAgICBDdXN0b21fZmllbGQgOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuICBpZiAoIWRhdGEpIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcclxuXHJcbiAgY29uc29sZS5sb2coXCJsb2FkIFByb2R1Y3REZXRhaWxGdWxsXCIpO1xyXG4gIGNvbnNvbGUubG9nKHByb2R1Y3REZXRhaWxJdGVtKTtcclxuXHJcbiAgaWYoIWRhdGE/LmRhdGEgfHwgQXJyYXkuZnJvbShkYXRhLmRhdGEpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiAoPGgzPkVtcHR5PC9oMz4pXHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9kdWN0RGV0YWlsSXRlbSA9ICBkYXRhLmRhdGFbMF07XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJkZXRhaWwtc2VjdGlvblwiIGNsYXNzPVwiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXRpdGxlLWhlYWRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiIG9uQ2xpY2s9eyhlKSA9PiB7cm91dGVyLnJlcGxhY2UoYC9wYWdlcy9jYXRhbG9nIyR7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcGFnZXMvY2F0YWxvZyMke3Byb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcGFnZXMvY2F0YWxvZyMke3Byb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgPGkgY2xhc3M9XCJsbmkgbG5pLWNsb3NlXCI+IDwvaT4gXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGc6dy0xLzIgd293IGZhZGVJblJpZ2h0IHByb2R1Y3QtZGV0YWlsLWxlZnRcIiBkYXRhLXdvdy1kZWxheT1cIjAuM3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvXCI+XHJcbiAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LkltYWdlfSBpbWFnZUNsYXNzPXtcInByb2R1Y3QtaW1hZ2UtaG9yaXpvbnRhbC0yeFwifSBzdHlsZT17XCJoZWlnaHQ6IDI1MHB4XCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGc6dy0xLzIgd293IGZhZGVJbkxlZnQgbWwtMTAgcHJvZHVjdC1kZXRhaWwtcmlnaHRcIiBkYXRhLXdvdy1kZWxheT1cIjAuM3NcIj5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8aDEgY2xhc3M9XCJzZWN0aW9uLXRpdGxlIHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiPlxyXG4gICAgICAgICAgICAgIDxiPiB7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LlRpdGxlfTwvYj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpbnRyby1kZXNjXCI+IFxyXG4gICAgICAgICAgICAgIHsgcHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LlNob3J0RGVzY3JpcHRpb24gfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cIlwiPiAgICA8aSBjbGFzcz1cImxuaSBsbmktY29pblwiPjwvaT4gIEdpw6EgOjwvaDM+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3Qtc3BlY2lmaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRleHQtcHJpY2VcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbGluZS10aHJvdWdoIHByLTVcIj4geyBwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uT3JpZ2luYWxQcmljZX0gIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1vbmV5LXByb3RlY3Rpb25cIj48L2k+IDxiPiB7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LlByaWNlfSBWTsSQIDwvYj5cclxuICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgeyBwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcy5DdXN0b21fZmllbGQ/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzcz1cImxuaSBsbmktY2hlY2ttYXJrLWNpcmNsZVwiPjwvaT4ge2l0ZW0uVGl0bGV9IDoge2l0ZW0uT3B0aW9uc308L2xpPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgbGc6dy0xLzIgcC1ob3JpLTE1XCIgPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInctZnVsbCBidG4gYnRuLWNvbW1vbiAgd293XCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIxLjFzXCI+XHJcbiAgICAgICAgICAgICAgICAgIE11YSBuZ2F5XHJcbiAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBsZzp3LTEvMiBwLWhvcmktMTVcIiA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidy1mdWxsIGJ0biBidG4tY29tbW9uIHdvd1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMS4zc1wiIGRhdGEtd293LWRlbGF5PVwiMS4xc1wiPlxyXG4gICAgICAgICAgICAgICAgICBUaMOqbSB2w6BvIGdp4buPXHJcbiAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHJvZHVjdC1kZXNjcmlwdGlvbiBwdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RCb2R5Q29udGVudCBkYXRhPXtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uRGVzY3JpcHRpb24gfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsRnVsbFxyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFByb2R1Y3RUaHVtYiBmcm9tIFwiLi9wcm9kdWN0LXRodW1iXCJcclxuaW1wb3J0IFByb2R1Y3RDYXRlZ29yeSBmcm9tIFwiLi9Qcm9kdWN0Q2F0ZWdvcnlcIlxyXG5pbXBvcnQgIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbnZhciBkZWZhdWx0Z3JvdXBJZDtcclxudmFyIGZlYXR1cmVQcm9kdWN0V3JhcFRtcDtcclxudmFyIHByb2R1Y3RzRmlsdGVyZWQ7XHJcblxyXG5jb25zdCBQcm9kdWN0R3JpZFRodW1iID0gKHsgZmVhdHVyZVByb2R1Y3RXcmFwID0gW10sIGNhdGVnb3JpZXMgPSBbXSwgY29sID0gMywgcm93ID0gNSB9KSA9PiB7XHJcblxyXG4gICAgaWYoIWZlYXR1cmVQcm9kdWN0V3JhcCB8fCBmZWF0dXJlUHJvZHVjdFdyYXAubGVuZ3RoID09MCkgcmV0dXJuIDw+PC8+XHJcbiAgICBcclxuICAgIGZlYXR1cmVQcm9kdWN0V3JhcFRtcCA9IGZlYXR1cmVQcm9kdWN0V3JhcDtcclxuICAgIGRlZmF1bHRncm91cElkID0gZGVmYXVsdGdyb3VwSWQgPz8gZmVhdHVyZVByb2R1Y3RXcmFwWzBdLmlkO1xyXG4gICAgcHJvZHVjdHNGaWx0ZXJlZCA9IHByb2R1Y3RzRmlsdGVyZWQgPz8gZmVhdHVyZVByb2R1Y3RXcmFwLmZpbHRlcih0PT4gdC5pZCA9PSBkZWZhdWx0Z3JvdXBJZClbMF0uSXRlbXM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBDaGFuZ2VGaWx0ZXIgPSAoYSkgPT4ge1xyXG4gICAgZGVmYXVsdGdyb3VwSWQgPSBhLmlkO1xyXG4gICAgcHJvZHVjdHNGaWx0ZXJlZCA9IGEuSXRlbXM7XHJcbiAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoLnJlcGxhY2UoL1xcIy4rLywgJycpICsgXCIjXCIgKyBhLmlkKVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInByb2R1Y3Qtc2VjdGlvblwiIGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtd3JhcCBteC1hdXRvIGdhcC0yIG10LThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJvZHVjdENhdGVnb3J5IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IG9uU2VsZWN0ZWQ9e29uQ2hhbmdlRmlsdGVyfS8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInNjaGVkdWxlc1wiIGNsYXNzPVwic2NoZWR1bGUgc2VjdGlvbi1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjaGVkdWxlLWFyZWEgIHdvdyBmYWRlSW5Eb3duXCIgZGF0YS13b3ctZGVsYXk9XCIwLjNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjaGVkdWxlLXRhYi10aXRsZSBjb2wtbWQtMyBjb2wtbGctMyBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlUHJvZHVjdFdyYXAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gaWQ9e1wiI1wiICsgaXRlbS5pZH0gY2xhc3M9XCJuYXYtaXRlbSByb3dcIiBvbkNsaWNrPXsoZSkgPT5DaGFuZ2VGaWx0ZXIoaXRlbSl9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInRodXJzZGF5LXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj17XCIjXCIgKyBpdGVtLmlkfSByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInRodXJzZGF5XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4ge2l0ZW0uR3JvdXBOYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0yLzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9kdWN0c0ZpbHRlcmVkLm1hcCgoX3Byb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3Byb2R1Y3Q/LmRldGFpbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtfcHJvZHVjdC5pZH0gY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUaHVtYiBrZXk9e19wcm9kdWN0LmlkfSBwcm9kdWN0VGh1bWI9e19wcm9kdWN0LmRldGFpbC5kYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBrZXk9e19wcm9kdWN0LmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0R3JpZFRodW1iXHJcbiIsImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuY29uc3QgUHJvZHVjdFRodW1iMiA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwibG9hZCBwcm9kdWN0VGh1bWIgc3dyXCIpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9ICAgZ2V0UHJvZHVjdFRodW1iKHByb2R1Y3RUaHVtYi5pZCwge1xyXG4gICAgcG9wdWxhdGU6IHtcclxuICAgICAgSW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICAgIEN1c3RvbV9maWVsZCA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gaWYgKGVycm9yKSByZXR1cm4gXCJBbiBlcnJvciBoYXMgb2NjdXJyZWQuXCI7XHJcbiBpZiAoIWRhdGEpIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcclxuXHJcbiBjb25zdCBwcm9kdWN0VGh1bWJJdGVtID0gIGRhdGEuZGF0YTtcclxuIFxyXG4gIGNvbnN0IG9uU2VsZWN0ZWQgPSAoYSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJTZXQgc2VsZWN0aW5nUHJvZHVjdEl0ZW1cIik7XHJcbiAgICBzZWxlY3RpbmdQcm9kdWN0SXRlbSA9IGE7XHJcbiAgfVxyXG5cclxuIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z30gY2xhc3M9XCJjb2wtbWQtNiBjb2wtbGctNCBjb2wteHMtMTIgcGFkZGluZy1ub25lIGN1cnNvclwiPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzPVwiY3Vyc29yXCIga2V5PXtwcm9kdWN0VGh1bWJJdGVtPy5pZH0gcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcGFnZXMvY2F0YWxvZz9wcm9kdWN0PSR7cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3RUaHVtYkl0ZW0uaWR9ICBvbkNsaWNrPXsoZSkgPT5vblNlbGVjdGVkKHByb2R1Y3RUaHVtYil9PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlcy1pdGVtIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHVtYlwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZmVhdHVyZXMvZmVhdHVyZS1pY29uLTEucG5nXCIgYWx0PVwiXCIvPiAqL31cclxuICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uSW1hZ2V9IGltYWdlQ2xhc3M9e1wicHJvZHVjdC1pbWFnZS1ob3Jpem9udGFsXCJ9IHN0eWxlPXtcImhlaWdodDogMjUwcHhcIn0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlcnZpY2VzLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtcHJpY2VcIj48Yj57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5QcmljZX0gVk7EkDwvYj48L2g0PlxyXG4gICAgICAgICAgICA8aDM+PGI+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uVGl0bGV9PC9iPjwvaDM+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0VGh1bWJJdGVtLmF0dHJpYnV0ZXM/LlNob3J0RGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RUaHVtYjJcclxuIiwiaW1wb3J0IHsgYmluZFByb2R1Y3RUaHVtYiwgZ2V0UHJvZHVjdFRodW1iIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG4gXHJcbmNvbnN0IFByb2R1Y3RUaHVtYjMgPSAgICh7IHByb2R1Y3RUaHVtYiAgfSkgID0+IHtcclxuICBjb25zb2xlLmxvZyhcImxvYWQgcHJvZHVjdFRodW1iIHN3clwiKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSAgIGdldFByb2R1Y3RUaHVtYihwcm9kdWN0VGh1bWIuaWQsIHtcclxuICAgIHBvcHVsYXRlOiB7XHJcbiAgICAgIEltYWdlOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxyXG4gICAgICBDdXN0b21fZmllbGQgOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvblNlbGVjdGVkID0gKGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2V0IHNlbGVjdGluZ1Byb2R1Y3RJdGVtXCIpO1xyXG4gICAgc2VsZWN0aW5nUHJvZHVjdEl0ZW0gPSBhO1xyXG4gIH1cclxuXHJcbiBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuIGNvbnN0IHByb2R1Y3RUaHVtYkl0ZW0gPSAgZGF0YS5kYXRhO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgIGtleT17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z30gY2xhc3M9XCJjb2wtbWQtNiBjb2wtbGctMyBjb2wteHMtMTIgd29yay1jb3VudGVyLXdpZGdldCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGN1cnNvclwiPlxyXG4gICAgICA8TGluayBjbGFzcz1cImN1cnNvclwiIGtleT17cHJvZHVjdFRodW1iSXRlbT8uaWR9IHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nP3Byb2R1Y3Q9JHtwcm9kdWN0VGh1bWJJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0VGh1bWJJdGVtLmlkfSAgb25DbGljaz17KGUpID0+b25TZWxlY3RlZChwcm9kdWN0VGh1bWIpfT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZXIgd293IGZhZGVJblJpZ2h0XCIgZGF0YS13b3ctZGVsYXk9XCIwLjNzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LkltYWdlfSBpbWFnZUNsYXNzPXtcInByb2R1Y3QtaW1hZ2UtaG9yaXpvbnRhbFwifSBzdHlsZT17XCJoZWlnaHQ6IDI1MHB4XCJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtcHJpY2VcIj48Yj57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5QcmljZX0gVk7EkDwvYj48L2g0PlxyXG4gICAgICAgICAgPGgzPjxiPntwcm9kdWN0VGh1bWJJdGVtLmF0dHJpYnV0ZXM/LlRpdGxlfTwvYj48L2gzPlxyXG4gICAgICAgICAgPGk+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uU2hvcnREZXNjcmlwdGlvbn08L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGh1bWIzXHJcbiIsImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmNvbnN0IFByb2R1Y3RUaHVtYiA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwibG9hZCBwcm9kdWN0VGh1bWIgc3dyXCIpO1xyXG5cclxuICBjb25zdCBvblNlbGVjdGVkID0gKGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2V0IHNlbGVjdGluZ1Byb2R1Y3RJdGVtXCIpO1xyXG4gICAgc2VsZWN0aW5nUHJvZHVjdEl0ZW0gPSBhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gICBnZXRQcm9kdWN0VGh1bWIocHJvZHVjdFRodW1iLmlkLCB7XHJcbiAgICBwb3B1bGF0ZToge1xyXG4gICAgICBJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgICAgQ3VzdG9tX2ZpZWxkIDogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuIGNvbnN0IHByb2R1Y3RUaHVtYkl0ZW0gPSAgZGF0YS5kYXRhO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e3Byb2R1Y3RUaHVtYj8uYXR0cmlidXRlcz8uc2x1Z30gY2xhc3M9XCJjdXJzb3JcIj5cclxuICAgICAgPExpbmsgIGtleT17cHJvZHVjdFRodW1iSXRlbT8uaWR9IHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nP3Byb2R1Y3Q9JHtwcm9kdWN0VGh1bWJJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0VGh1bWJJdGVtLmlkfSAgb25DbGljaz17KGUpID0+b25TZWxlY3RlZChwcm9kdWN0VGh1bWIpfT5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIuMnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtYm94IHNpbmdsZS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZmVhdHVyZXMvZmVhdHVyZS1pY29uLTEucG5nXCIgYWx0PVwiXCIvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LkltYWdlfSBpbWFnZUNsYXNzPXtcInByb2R1Y3QtaW1hZ2UtaG9yaXpvbnRhbFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXByaWNlXCI+PGI+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uUHJpY2V9IFZOxJA8L2I+PC9oND5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXRpdGxlXCI+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uVGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPGk+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uU2hvcnREZXNjcmlwdGlvbn08L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFRodW1iXHJcbiIsImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiXHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi9saWIvYXBpXCI7XHJcbmltcG9ydCBTdWJjcmliZUJveCBmcm9tIFwiLi9zdWJjcmliZS1ib3hcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7IGZvb3Rlciwgc2l0ZUluZm8gfSkgPT4ge1xyXG4gIFxyXG4gICAgY29uc3QgcXVpY2tMaW5rcyA9IGZvb3Rlcj8uSHlwZXJMaW5rLmZpbHRlcihsaW5rID0+IGxpbmsuR3JvdXBWYWx1ZSA9PSAnUXVpY2tMaW5rJyk7XHJcbiAgICBjb25zdCByZXNvdXJjZUxpbmtzID0gZm9vdGVyPy5IeXBlckxpbmsuZmlsdGVyKGxpbmsgPT4gbGluay5Hcm91cFZhbHVlID09ICdSZXNvdXJjZXMnKTtcclxuICAgIGNvbnN0IGNvbnRhY3RMaW5rcyA9IGZvb3Rlcj8uSHlwZXJMaW5rLmZpbHRlcihsaW5rID0+IGxpbmsuR3JvdXBWYWx1ZSA9PSAnQ29udGFjdFVzJyk7XHJcbiAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCIgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIGZvb3Rlci1hcmVhIHB0LTEyMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci1iZ1wiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogIGB1cmwoYCtnZXRTdHJhcGlVUkwoKSArIGZvb3Rlcj8uQmdJbWFnZT8uZGF0YS5hdHRyaWJ1dGVzLnVybCtgKWAgfX0gPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgKGZvb3Rlcj8uU3ViY3JpYmVCb3gpID8gKCA8U3ViY3JpYmVCb3ggc3ViY3JpYmVCb3g9e2Zvb3Rlcj8uU3ViY3JpYmVCb3h9IC8+KSA6ICg8ZGl2PjwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci13aWRnZXQgcGItMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNC81IG1kOnctMy81IGxnOnctMi82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyIGZvb3Rlci1hYm91dCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImlubGluZS1ibG9jayBtYi04IGxvZ29cIiBocmVmPVwiaW5kZXguaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtzaXRlSW5mbz8uTG9nb30gICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJsb2dvXCIgY2xhc3M9XCJ3LTQwXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYi0xMCBwci0xMCBsZWFkaW5nLXNudWcgdGV4dC13aGl0ZSBjb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpdGVJbmZvPy5BbHRlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImZsZXggZm9vdGVyLXNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJsbmkgbG5pLWZhY2Vib29rLWZpbGxlZFwiPjwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwibG5pIGxuaS10d2l0dGVyLWZpbGxlZFwiPjwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwibG5pIGxuaS1pbnN0YWdyYW0tZmlsbGVkXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJsbmkgbG5pLWxpbmtlZGluLW9yaWdpbmFsXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTQvNSBzbTp3LTIvMyBtZDp3LTMvNSBsZzp3LTIvNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBzbTp3LTEvMiBtZDp3LTEvMiBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyIGxpbmstd3JhcHBlciB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC40c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWItOCB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlF1aWNrIExpbms8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBxdWlja0xpbmtzPy5tYXAoKGl0ZW0sIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8bGkga2V5PXtpICsgXCJhXCJ9PjxhIGhyZWY9e2l0ZW0uTGlua30+e2l0ZW0uVGl0bGV9PC9hPjwvbGk+ICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgc206dy0xLzIgbWQ6dy0xLzIgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xMiBsaW5rLXdyYXBwZXIgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1iLTggdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5SZXNvdXJjZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXNvdXJjZUxpbmtzPy5tYXAoKGl0ZW0sIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8bGkga2V5PXtpICsgXCJiXCJ9PjxhIGhyZWY9e2l0ZW0uTGlua30+e2l0ZW0uVGl0bGV9PC9hPjwvbGk+ICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTQvNSBzbTp3LTEvMyBtZDp3LTIvNSBsZzp3LTIvNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xMiBmb290ZXItY29udGFjdCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC44c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi04IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+Q29udGFjdCBVczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY29udGFjdExpbmtzPy5tYXAoKGl0ZW0sIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8bGkga2V5PXtpICsgXCJjXCJ9PjxhIGhyZWY9e2l0ZW0uTGlua30+e2l0ZW0uVGl0bGV9PC9hPjwvbGk+ICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweS04IGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBmb290ZXItY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICB7c2l0ZUluZm8/LkNvcHlyaWdodFRleHR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8ZGl2IGlkPVwicGFydGljbGVzLTJcIiBjbGFzcz1cInBhcnRpY2xlc1wiPjwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiXHJcbmltcG9ydCBCdXNpbmVzc1RhbGsgZnJvbSAnLi4vaG9tZS9idXNpbmVzcy10YWxrJ1xyXG5cclxuY29uc3QgQWN0aXZpdHkgPSAoeyBhY3Rpdml0eSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7IGFjdGl2aXR5Py5tYXAoKGl0ZW0sIGkpID0+ICggIFxyXG4gICAgICAgICAgICBidWlsZEFjdGl2aXR5U3R5bGUoaSwgaXRlbSlcclxuICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkQnVzaW5lc3NTdGVwVmlld1N0eWxlID0gKGluZGV4LCBpdGVtKSA9PiB7XHJcbiAgICBpZiAoaW5kZXggJTIgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiAgY2xhc3M9XCJyZWxhdGl2ZSBwdC0yMCBhYm91dC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEyIGFib3V0LWNvbnRlbnQgd293IGZhZGVJbkxlZnRCaWdcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtpdGVtLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLk5hdmlnYXRlTGlua30gY2xhc3M9XCJtYWluLWJ0biBncmFkaWVudC1idG5cIj57aXRlbS5OYXZpZ2F0ZUxhYmxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEyIHRleHQtY2VudGVyIGFib3V0LWltYWdlIHdvdyBmYWRlSW5SaWdodEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZT17aXRlbS5NZWRpYX0gIGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtc2hhcGUtMVwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtpdGVtLkJnTWVkaWF9ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICA8c2VjdGlvbiAgY2xhc3M9XCJyZWxhdGl2ZSBwdC0yMCBhYm91dC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1zaGFwZS0yXCI+XHJcbiAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17aXRlbS5CZ01lZGlhfSAga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMiBsZzpvcmRlci1sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTIgYWJvdXQtY29udGVudCB3b3cgZmFkZUluTGVmdEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTQgc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtpdGVtLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0uTmF2aWdhdGVMaW5rfSBjbGFzcz1cIm1haW4tYnRuIGdyYWRpZW50LWJ0blwiPntpdGVtLk5hdmlnYXRlTGFibGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzIgbGc6b3JkZXItZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEyIHRleHQtY2VudGVyIGFib3V0LWltYWdlIHdvdyBmYWRlSW5SaWdodEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtpdGVtLk1lZGlhfSAga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvc2VjdGlvbj4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgYnVpbGRCdXNpbmVzc0ludmVzdG1lbnRWaWV3U3R5bGUgPSAoaW5kZXgsIGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1c2luZXNzVGFsayBidXNpbmVzcz17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG59XHJcblxyXG5jb25zdCBidWlsZEFjdGl2aXR5U3R5bGUgPSAoaW5kZXgsIGl0ZW0pID0+IHsgXHJcbiAgICBpZiAoKGl0ZW0uX19jb21wb25lbnQpLmluZGV4T2YoJ2J1c2luZXNzLXN0ZXBzJykgIT09IC0xKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbS5TdGVwcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoIFxyXG4gICAgICAgICAgICAgICAgYnVpbGRCdXNpbmVzc1N0ZXBWaWV3U3R5bGUoaW5kZXgsIGl0ZW0pXHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGl0ZW0uX19jb21wb25lbnQuaW5kZXhPZignaW52ZXN0bWVudCcpICE9PSAtMSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBidWlsZEJ1c2luZXNzSW52ZXN0bWVudFZpZXdTdHlsZShpbmRleCwgaXRlbSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHlcclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5jb25zdCBCcmFuZCA9ICh7IGJyYW5kIH0pID0+IHtcclxuICBcclxuY29uc3QgYnJhbmRJdGVtc3MgPSBicmFuZC5CcmFuZExvZ287XHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMjQgYnJhbmQtYXJlYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm93IGxnOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgYnJhbmRJdGVtc3MubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSAgY2xhc3M9XCJzaW5nbGUtbG9nbyBob3ZlcjpvcGFjaXR5LTEwMCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17aXRlbS5Mb2dvfSAga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmFuZFxyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiXHJcbmNvbnN0IEJ1c2luZXNzVGFsayA9ICh7IGJ1c2luZXNzIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZmFjdHNcIiBjbGFzcz1cInB0LTIwIHZpZGVvLWNvdW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgcGItOCBtdC0xMiB2aWRlby1jb250ZW50IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtidXNpbmVzcy5CZ01lZGlhfSAgaW1hZ2VDbGFzcz17XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgLW1sLTggZG90c1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgbXItNiByb3VuZGVkLWxnIHNoYWRvdy1tZCB2aWRlby13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8taW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2U9e2J1c2luZXNzLk1lZGlhfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBiZy1ibHVlLTkwMCBiZy1vcGFjaXR5LTI1IHJvdW5kZWQtbGcgdmlkZW8taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXI0NFJLV3lmY0Z3XCIgY2xhc3M9XCJ2aWRlby1wb3B1cFwiPjxpIGNsYXNzPVwibG5pIGxuaS1wbGF5XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTAgbXQtMTIgY291bnRlci13cmFwcGVyIGxnOnBsLTE2IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi04IHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPjxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17YnVzaW5lc3MuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtidXNpbmVzcy5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYnVzaW5lc3MuSXRlbXM/Lm1hcCgoaXRlbSwgaSkgPT4gKCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9e1wiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2luZ2xlLWNvdW50ZXIgY291bnRlci1jb2xvci1cIiArIChpICsgMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgY291bnRlci1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e2l0ZW0uVGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+e2l0ZW0uRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiBcclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXNpbmVzc1RhbGtcclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5cclxuY29uc3QgRmVhdHVyZSA9ICh7IGZlYXR1cmUgfSkgPT4ge1xyXG4gXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBmZWF0dXJlLkNlbnRyYWxUZXh0O1xyXG4gICAgY29uc3QgaXRlbXMgPSBmZWF0dXJlLkl0ZW1zIDtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlc1wiIGNsYXNzPVwic2VydmljZXMtYXJlYSBwdC0xMjBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0yLzNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi0xMCB0ZXh0LWNlbnRlciBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tYXV0byBsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPiBcclxuICAgICAgICAgICAgICAgICAgICB7IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIHNtOnctMi8zIGxnOnctMS8zXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1zZXJ2aWNlcyB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcnZpY2VzLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBjbGFzcz1cInNoYXBlLTFcIiBzcmM9XCJhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLXNoYXBlLnN2Z1wiIGFsdD1cInNoYXBlXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZUNsYXNzPXsnc2hhcGUnfSBpbWFnZT17aXRlbS5NZWRpYX0gIGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBjbGFzcz1cInNoYXBlLTFcIiBzcmM9XCJhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLXNoYXBlLTEuc3ZnXCIgYWx0PVwic2hhcGVcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz17aXRlbS5JY29uQ2xhc3N9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTggc2VydmljZXMtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1iLTggdGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPntpdGVtLlRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi04IGNhcmQtY29udGVudFwiPntpdGVtLkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLk5hdmlnYXRlTGlua30gY2xhc3M9XCJkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC10aGVtZS1jb2xvclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uTmF2aWdhdGVUZXh0TGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWwtMiBsbmkgbG5pLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICA8L2Rpdj4gIFxyXG48L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlIFxyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiXHJcblxyXG5jb25zdCBQaW5uZWRCbG9nID0gKHsgZGF0YSwgYXJnczEgfSkgPT4ge1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cImJsb2dcIiBjbGFzcz1cImJsb2ctYXJlYSBwdC0xMjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItOCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YT8uVGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZGF0YT8uRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG5cclxuICAgICAgICAgICAgeyBhcmdzMT8uc2xpY2UoMCwzKT8ubWFwKChwb3N0LCBpKSA9PiAoICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1kOnctMi8zIGxnOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTAgc2luZ2xlLWJsb2cgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTUgb3ZlcmZsb3ctaGlkZGVuIGJsb2ctaW1hZ2Ugcm91bmRlZC14bCBibG9nLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtwb3N0LmF0dHJpYnV0ZXMuaW1hZ2V9IGltYWdlQ2xhc3M9e1widy1mdWxsXCJ9ICBrZXk9e2l9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzPVwiZmxleCBtYi01IG1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UG9zdGVkIEJ5OiA8YSBocmVmPVwiIFwiPntwb3N0LmF0dHJpYnV0ZXMuYXV0aG9yPy5uYW1lfTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1sLTEyXCI+e3Bvc3QuYXR0cmlidXRlcy5wdWJsaXNoZWRBdH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTYgdGV4dC0yeGwgbGVhZGluZy1zbnVnIHRleHQtZ3JheS05MDAgYmxvZy10aXRsZVwiICA+e3Bvc3QuYXR0cmlidXRlcy50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInRleHQtdGhlbWUtY29sb3ItMlwiIGhyZWY9e1wiL2FydGljbGVzL1wiICsgcG9zdC5hdHRyaWJ1dGVzLnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoaSB0aeG6v3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1sLTIgbG5pIGxuaS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaW5uZWRCbG9nXHJcblxyXG4iLCIgXHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi9saWIvYXBpXCI7XHJcblxyXG5jb25zdCBDdXN0b21JbWFnZSA9ICh7IGltYWdlLCBzdHlsZSwgaW1hZ2VDbGFzcyA9IG51bGwgfSkgPT4ge1xyXG5cclxuICAvLyBpZighaW1hZ2UpIHtcclxuICAvLyAgIHJldHVybiAgIChcclxuICAvLyAgICAgIDxpbWcgY2xhc3M9XCJibGFua1wiIHNyYz1cImJsYW5rXCIgYWx0PVwiYmxhbmsgaW1hZ2VcIiAvPilcclxuICAgXHJcbiAgLy8gfVxyXG5cclxuICBpZihpbWFnZT8uZGF0YT8uYXR0cmlidXRlcyA9PSBudWxsICYmIGltYWdlPy5hdHRyaWJ1dGVzID09IG51bGwpIHtcclxuICAgIHJldHVybiAgKCBcclxuICAgICAgPGltZyBjbGFzcz1cImJsYW5rXCIgc3JjPVwiYmxhbmtcIiBhbHQ9XCJibGFuayBpbWFnZVwiIC8+KVxyXG4gICBcclxuICB9XHJcblxyXG4gIGlmKGltYWdlPy5hdHRyaWJ1dGVzPy51cmwpIHtcclxuICAgIGNvbnN0IHsgdXJsLCBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLmF0dHJpYnV0ZXM7XHJcbiAgICBjb25zdCBzcmNVcmwgPSBnZXRTdHJhcGlVUkwoKSArIHVybDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aW1nIGNsYXNzPXtpbWFnZUNsYXNzID8/IFwiXCJ9IHNyYz17c3JjVXJsfSBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICkgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IHVybCwgYWx0ZXJuYXRpdmVUZXh0LCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5kYXRhLmF0dHJpYnV0ZXM7XHJcbiAgICBjb25zdCBzcmNVcmwgPSBnZXRTdHJhcGlVUkwoKSArIHVybDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aW1nIGNsYXNzPXtpbWFnZUNsYXNzID8/IFwiXCJ9IHNyYz17c3JjVXJsfSBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICk7XHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUltYWdlXHJcbiIsImltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdlwiXG5cbmNvbnN0IExheW91dENvbW1lcmNlID0gKHsgY2hpbGRyZW4sIGNhdGVnb3JpZXMsIGxheW91dCwgY29sb3IsIHBhZ2UgfSkgPT4ge1xuICAgIHZhciB0ZXh0Q29sb3IgPSAndGV4dC13aGl0ZScgO1xuICAgIGlmKGNvbG9yKSB7XG4gICAgICAgIHRleHRDb2xvciA9IGNvbG9yXG4gICAgfSAgXG4gICAgcmV0dXJuKFxuICA8PlxuICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gcHJlbG9hZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1yb3RhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXItY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXItYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWFyZWEgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG5hdmJhciBuYXZiYXItZXhwYW5kLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsgXCJtci00IG5hdmJhci1icmFuZCBcIiArIHRleHRDb2xvcn0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtob21lcGFnZS5hdHRyaWJ1dGVzLkxvZ29JbWFnZS5hdHRyaWJ1dGVzLnVybCB9IGFsdD1cIkxvZ29cIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlQ2xhc3M9e1wiXCJ9IGltYWdlPXtsYXlvdXQuTG9nb0ltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2xheW91dC5TaXRlSW5mby5TaXRlTmFtZSB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmxvY2sgbmF2YmFyLXRvZ2dsZXIgZm9jdXM6b3V0bGluZS1ub25lIGxnOmhpZGRlblwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyT25lXCIgYXJpYS1jb250cm9scz1cIm5hdmJhck9uZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGxlZnQtMCB6LTIwIGhpZGRlbiB3LWZ1bGwgcHgtNSBweS0zIGR1cmF0aW9uLTMwMCBiZy13aGl0ZSBzaGFkb3cgbGc6dy1hdXRvIGNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBsZzpibG9jayB0b3AtMTAwIG10LWZ1bGwgbGc6c3RhdGljIGxnOmJnLXRyYW5zcGFyZW50IGxnOnNoYWRvdy1ub25lXCIgaWQ9XCJuYXZiYXJPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdiBjb2xvcj17dGV4dENvbG9yfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSByaWdodC0wIGhpZGRlbiBtdC0yIG1yLTI0IG5hdmJhci1idG4gc206aW5saW5lLWJsb2NrIGxnOm10LTAgbGc6c3RhdGljIGxnOm1yLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtYWluLWJ0biBncmFkaWVudC1idG5cIiBkYXRhLXNjcm9sbC1uYXY9XCIwXCIgaHJlZj17aG9tZXBhZ2UuYXR0cmlidXRlcy5IZXJvPy5RdWlja0xpbms/LkhyZWZ9IHJlbD1cIm5vZm9sbG93XCI+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZXBhZ2UuYXR0cmlidXRlcy5IZXJvPy5RdWlja0xpbms/LlRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PiAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvZGl2PiAgXG4gICAgPC9oZWFkZXI+XG5cbiAgICBcbiAgICB7Y2hpbGRyZW59XG4gICAgIFxuICAgIDxGb290ZXIgZm9vdGVyPXtwYWdlPy5hdHRyaWJ1dGVzPy5Gb290ZXJ9IHNpdGVJbmZvPXtsYXlvdXQuU2l0ZUluZm99IC8+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJhY2stdG8tdG9wXCI+PGkgY2xhc3M9XCJsbmkgbG5pLWNoZXZyb24tdXBcIj48L2k+PC9hPlxuICA8Lz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dENvbW1lcmNlXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5jb25zdCBOYXYgPSAoeyBjYXRlZ29yaWVzLCBjb2xvciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG4gIHZhciB0ZXh0Q29sb3IgID0gJ3RleHQtd2hpdGUnO1xuICBpZihjb2xvcikge1xuICAgICAgdGV4dENvbG9yID0gY29sb3JcbiAgfSBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHVsIGlkPVwibmF2XCIgY2xhc3M9eyBcIml0ZW1zLWNlbnRlciBjb250ZW50LXN0YXJ0IG1yLWF1dG8gbGc6anVzdGlmeS1lbmQgbmF2YmFyLW5hdiBsZzpmbGV4IFwiICsgdGV4dENvbG9yIH0+XG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BhZ2VzLyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLXNjcm9sbFwiIGhyZWY9e2AvcGFnZXMvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICA8YiA+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWUgPz8gY2F0ZWdvcnkuYXR0cmlidXRlcy5OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uL3BhZ2VzL19hcHBcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcblxuY29uc3QgUGFnZVNlbyA9ICh7IHNlbyB9KSA9PiB7XG4gIGNvbnN0IHsgZGVmYXVsdFNlbywgc2l0ZU5hbWUgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dClcbiAgY29uc3Qgc2VvV2l0aERlZmF1bHRzID0ge1xuICAgIC4uLmRlZmF1bHRTZW8sXG4gICAgLi4uc2VvLFxuICB9XG4gIGNvbnN0IGZ1bGxTZW8gPSB7XG4gICAgLi4uc2VvV2l0aERlZmF1bHRzLFxuICAgIC8vIEFkZCB0aXRsZSBzdWZmaXhcbiAgICBtZXRhVGl0bGU6IGAke3Nlb1dpdGhEZWZhdWx0cy5tZXRhVGl0bGV9IHwgJHtzaXRlTmFtZX1gLFxuICAgIC8vIEdldCBmdWxsIGltYWdlIFVSTFxuICAgIHNoYXJlSW1hZ2U6IGdldFN0cmFwaU1lZGlhKHNlb1dpdGhEZWZhdWx0cy5zaGFyZUltYWdlKSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICB7ZnVsbFNlby5tZXRhVGl0bGUgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDx0aXRsZT57ZnVsbFNlby5tZXRhVGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17ZnVsbFNlby5tZXRhVGl0bGV9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtmdWxsU2VvLm1ldGFUaXRsZX0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAge2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9uICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAge2Z1bGxTZW8uc2hhcmVJbWFnZSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Z1bGxTZW8uc2hhcmVJbWFnZX0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2Z1bGxTZW8uc2hhcmVJbWFnZX0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiaW1hZ2VcIiBjb250ZW50PXtmdWxsU2VvLnNoYXJlSW1hZ2V9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmdWxsU2VvLmFydGljbGUgJiYgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cImFydGljbGVcIiAvPn1cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgPC9IZWFkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTZW9cbiIsImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbiBcclxuXHJcbmNvbnN0IFN1YmNyaWJlQm94ID0gKHsgc3ViY3JpYmVCb3ggfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwicHgtNiBwdC0xMCBwYi0yMCBtYi0xMiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy14bCBtZDpweC0xMiBzdWJzY3JpYmUtYXJlYSB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxnOm10LTEyIHN1YnNjcmliZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHNtOnRleHQtMnhsIHN1YnNjcmliZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge3N1YmNyaWJlQm94Py5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3N1YmNyaWJlQm94Py5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj0geyBzdWJjcmliZUJveD8uUE9TVF9VUkwgfSBjbGFzcz1cInJlbGF0aXZlIGZvY3VzOm91dGxpbmUtbm9uZSBmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwidHlwZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWwvcGhvbmUgbnVtYmVyXCIgY2xhc3M9XCJ3LWZ1bGwgcHktNCBwbC02IHByLTQwIGR1cmF0aW9uLTMwMCBib3JkZXItMiByb3VuZGVkIGZvY3VzOmJvcmRlci10aGVtZS1jb2xvciBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBzdWJjcmliZUJveD8uUE9TVF9VUkwgfSBjbGFzcz1cIm1haW4tYnRuIGdyYWRpZW50LWJ0blwiPiB7IHN1YmNyaWJlQm94Py5TdWJtaXRMYWJlbCB9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJjcmliZUJveFxyXG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCJcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG5cclxuLyoqXHJcbiAqIEdldCBmdWxsIFN0cmFwaSBVUkwgZnJvbSBwYXRoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIFVSTFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGdWxsIFN0cmFwaSBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9IFwiXCIpIHtcclxuICByZXR1cm4gYCR7XHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCBcImh0dHBzOi8vd2VsZWFkLWNtcy1lamlkdi5vbmRpZ2l0YWxvY2Vhbi5hcHBcIlxyXG4gIH0ke3BhdGh9YFxyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zT2JqZWN0IFVSTCBwYXJhbXMgb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcclxuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH1cclxuXHJcbiAgLy8gdXJsUGFyYW1zT2JqZWN0LmxvY2FsZSA9IFwidmlcIjtcclxuICBcclxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7Z2V0U3RyYXBpVVJMKFxyXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXHJcbiAgKX1gXHJcblxyXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIG1lcmdlZE9wdGlvbnMpXHJcblxyXG4gIC8vIEhhbmRsZSByZXNwb25zZVxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuIFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdENhdGFsb2dzKCkge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9wcm9kdWN0LWNhdGVnb3JpZXNcIik7XHJcbiAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0YWxvZyhzbHVnLCB1cmxQYXJhbXNPYmplY3QgPSB7fSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoYC9wcm9kdWN0LWNhdGVnb3JpZXM/c2x1Zz0ke3NsdWd9JiR7cXVlcnlTdHJpbmcgPyBgJHtxdWVyeVN0cmluZ31gIDogXCJcIn1gKTtcclxuICByZXR1cm4gY2F0ZWdvcmllcz8uZGF0YVswXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmV0Y2hBUEkoXCIvcHJvZHVjdHNcIik7XHJcbiAgcmV0dXJuIHByb2R1Y3RzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdChzbHVnLCB1cmxQYXJhbXNPYmplY3QgPSB7fSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoQVBJKGAvcHJvZHVjdHM/c2x1Zz0ke3NsdWd9JiR7cXVlcnlTdHJpbmcgPyBgJHtxdWVyeVN0cmluZ31gIDogXCJcIn1gKTtcclxuICByZXR1cm4gcHJvZHVjdHM/LmRhdGFbMF07XHJcbn1cclxuXHJcbmV4cG9ydCAgIGZ1bmN0aW9uICBnZXRQcm9kdWN0VGh1bWIoaWQsIHVybFBhcmFtc09iamVjdCA9IHt9KSB7XHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkodXJsUGFyYW1zT2JqZWN0KVxyXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtnZXRTdHJhcGlVUkwoXHJcbiAgICBgL2FwaS9wcm9kdWN0cy8ke2lkfT8ke3F1ZXJ5U3RyaW5nID8gYCR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxyXG4gICl9YFxyXG4gXHJcbiAgcmV0dXJuIHVzZVNXUihcclxuICAgIHJlcXVlc3RVcmwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0ICAgZnVuY3Rpb24gIGdldFByb2R1Y3REZXRhaWwoc2x1ZywgdXJsUGFyYW1zT2JqZWN0ID0ge30pIHtcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcclxuICAgIGAvYXBpL3Byb2R1Y3RzLz9maWx0ZXJzW3NsdWddPSR7c2x1Z30mJHtxdWVyeVN0cmluZyA/IGAke3F1ZXJ5U3RyaW5nfWAgOiBcIlwifWBcclxuICApfWBcclxuICAgIFxyXG4gIGNvbnNvbGUubG9nKHJlcXVlc3RVcmwpO1xyXG5cclxuICByZXR1cm4gdXNlU1dSKFxyXG4gICAgcmVxdWVzdFVybCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG59XHJcbiBcclxuXHJcblxyXG5cclxuXHJcbiBcclxuIiwiaW1wb3J0IFBpbm5lZEJsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9waW5uZWQtYmxvZ1wiXHJcbmltcG9ydCBBY3Rpdml0eSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2FjdGl2aXR5XCJcclxuaW1wb3J0IEJyYW5kIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvYnJhbmRcIlxyXG5pbXBvcnQgRmVhdHVyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2ZlYXR1cmVcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIlxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsICAgLi4uYXJncykge1xyXG4gICAgIFxyXG4gICAgc3dpdGNoIChjb21wb25lbnROYW1lKVxyXG4gICAgIHtcclxuICAgICAgICAgY2FzZSBcIlBpbm5lZEJsb2dcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPFBpbm5lZEJsb2cgZGF0YT17YXJnc1swXX0gYXJnczE9e2FyZ3NbMV19IC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkFjdGl2aXR5XCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBY3Rpdml0eSBhY3Rpdml0eT17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkJyYW5kXCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCcmFuZCBicmFuZD17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkZlYXR1cmVcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPEZlYXR1cmUgZmVhdHVyZT17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgKVxyXG4gICAgIH1cclxuICB9XHJcbiBcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyRHluYW1pY0NvbXBvbmVudChzb3VyY2UsICAgLi4uYXJncykge1xyXG4gICBcclxuICAgdmFyIGNvbnRlbnRCdWlsZGVyID0gPD48Lz5cclxuXHJcbiAgIGNvbnNvbGUubG9nKGNvbnRlbnRCdWlsZGVyKTtcclxuICAgXHJcbiAgIHNvdXJjZS5mb3JFYWNoKGR5bmFtaWNDb250ZW50ID0+IHtcclxuICAgICAgY29udGVudEJ1aWxkZXIgKz0gcmVzb2x2ZXJEeW5hbWljRXh0cmFjdChkeW5hbWljQ29udGVudClcclxuICAgfSk7XHJcbiAgIGNvbnNvbGUubG9nKFwiY29udGVudEJ1aWxkZXJcIik7XHJcbiAgIGNvbnNvbGUubG9nKGNvbnRlbnRCdWlsZGVyKTtcclxuXHJcbiAgIHJldHVybiBjb250ZW50QnVpbGRlcjtcclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtSW1hZ2VVcmlQZWZvcm0odXJpLCBjaGlsZHJlbiwgdGl0bGUsIGFsdCkge1xyXG4gICAgcmV0dXJuIHVyaS5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmkpIDogdXJpO1xyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiByZXNvbHZlckR5bmFtaWNFeHRyYWN0KGR5bmFtaWNDb250ZW50KSB7IFxyXG4gXHJcbiAgIGlmICgoZHluYW1pY0NvbnRlbnQuX19jb21wb25lbnQpLmluZGV4T2YoJ2R5bmFtaWNzLnBhZ2UtY29udGVudCcpICE9PSAtMSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBrZXk9e2R5bmFtaWNDb250ZW50LklkfSBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTEwIHRleHQtY2VudGVyIHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgIHtkeW5hbWljQ29udGVudC5OYW1lfVxyXG4gICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWF1dG8gbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPGRpdiBjbGFzcz1cIiBwdC0xMiBwYi0xMCByb3dcIj4gXHJcbiAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtSW1hZ2VVcmk9e3RyYW5zZm9ybUltYWdlVXJpUGVmb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPC9kaXY+ICBcclxuICAgKTtcclxuXHJcbiAgIGlmICgoZHluYW1pY0NvbnRlbnQuX19jb21wb25lbnQpLmluZGV4T2YoJ2R5bmFtaWNzLnBhZ2UtaW1hZ2UtY29udGVudCcpICE9PSAtMSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwdC0xMiBwYi0xMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHBiLTggbXQtMTIgdmlkZW8tY29udGVudCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBqdXN0aWZ5LWNlbnRlciBtci02IHJvdW5kZWQtbGcgc2hhZG93LW1kIHZpZGVvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1pbWFnZSBiZy1saWdodC1ibHVlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlQ2xhc3M9e1wiaW1hZ2UtZml0XCJ9ICBpbWFnZT17ZHluYW1pY0NvbnRlbnQ/LkltYWdlfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBiZy1ibHVlLTkwMCBiZy1vcGFjaXR5LTI1IHJvdW5kZWQtbGcgdmlkZW8taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXI0NFJLV3lmY0Z3XCIgY2xhc3M9XCJ2aWRlby1wb3B1cFwiPjxpIGNsYXNzPVwibG5pIGxuaS1wbGF5XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTAgbXQtMTIgY291bnRlci13cmFwcGVyIGxnOnBsLTE2IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjhzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi04IHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZHluYW1pY0NvbnRlbnQuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gIDwvZGl2PiAgXHJcbiAgICk7XHJcblxyXG4gICByZXR1cm4gPD48Lz5cclxuIH0iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcbiAgY29uc3QgeyB1cmwgfSA9IG1lZGlhLmRhdGEuYXR0cmlidXRlc1xuICBjb25zdCBpbWFnZVVybCA9IHVybC5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmwpIDogdXJsXG4gIHJldHVybiBpbWFnZVVybFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7ZXhwb3J0cy5OZXh0V2ViVml0YWxzTWV0cmljPV91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe0NvbXBvbmVudCxjdHh9KXtjb25zdCBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHtyZW5kZXIoKXtjb25zdHtDb21wb25lbnQscGFnZVByb3BzfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxwYWdlUHJvcHMpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy90YWlsd2luZC5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zbGljay5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9hbmltYXRlLmNzc1wiXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL2ljb24uY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvbWFnbmlmaWMtcG9wdXAuY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvdGlueS1zbGlkZXIuY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvZ2xpZ2h0Ym94Lm1pbi5jc3NcIiBcblxuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcbiBcbi8vIFN0b3JlIFN0cmFwaSBHbG9iYWwgb2JqZWN0IGluIGNvbnRleHRcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgZ2xvYmFsIH0gPSBwYWdlUHJvcHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICBocmVmPXtnZXRTdHJhcGlNZWRpYShnbG9iYWw/LmF0dHJpYnV0ZXM/LmZhdmljb24pfVxuICAgICAgLz5cbiAgICAgIFxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL3ZlbmRvci9qcXVlcnktMy41LjEtbWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvanMvdmVuZG9yL21vZGVybml6ci0zLjcuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy9qcXVlcnkuZWFzaW5nLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL3Njcm9sbGluZy1uYXYuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy9zbGljay5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy93b3cubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvanMvcGFydGljbGVzLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL21haW4uanNcIj48L3NjcmlwdD5cblxuICAgICA8L0hlYWQ+XG4gICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtnbG9iYWw/LmF0dHJpYnV0ZXN9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG4gIC8vIEZldGNoIGdsb2JhbCBzaXRlIHNldHRpbmdzIGZyb20gU3RyYXBpXG4gIGNvbnN0IGdsb2JhbFJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2dsb2JhbFwiLCB7XG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIGZhdmljb246IFwiKlwiLFxuICAgICAgZGVmYXVsdFNlbzoge1xuICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgbGF5b3V0SW5mbyA9IGF3YWl0IGZldGNoQVBJKFwiL2hvbWVwYWdlXCIsICB7XG4gICAgcG9wdWxhdGU6IFxuICAgIHtcbiAgICAgIHNlbzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEZvb3RlcjogXG4gICAgICB7IFxuICAgICAgICAgIHBvcHVsYXRlOiAgeyAgICAgICAgXG4gICAgICAgICAgICBTdWJjcmliZUJveDogIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICBIeXBlckxpbmsgIDogIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICBCZ0ltYWdlOiAgICAgIHsgcG9wdWxhdGU6IFwiKlwiIH0gfVxuICAgICAgfSxcbiAgICAgIFNpdGVJbmZvOiAgICAgICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEhlYWRlckJnSW1hZ2U6ICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEhlcm9DZW50cmFsSW1hZ2U6ICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIExvZ29JbWFnZTogICAgICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICB9LFxuICB9KTsgIFxuIFxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IFxuICAgICAgICBmaWx0ZXJzOiB7XG4gICAgICAgICAgSXNUb3BNZW51OiB7XG4gICAgICAgICAgICBcIlskZXFdXCIgOiBcInRydWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgICAgIFBhZ2VIZXJvOiAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgICAgICAgIFBhZ2VCb2R5IDogICAgeyBcbiAgICAgICAgICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgICAgICAgICBJbWFnZSA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgIH19KTtcblxuICBcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhLCBsYXlvdXRJbmZvOiAgbGF5b3V0SW5mby5kYXRhLmF0dHJpYnV0ZXMsIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXMuZGF0YX0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9DYXJvdXNlbFwiXHJcbmltcG9ydCBDb21tZXJjZUhlcm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbWVyY2UvY29tbWVyY2UtaGVyb1wiXHJcbmltcG9ydCBQcm9kdWN0R3JpZFRodW1iIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtZ3JpZFwiXHJcbmltcG9ydCBQcm9kdWN0R3JpZDJUaHVtYiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9Qcm9kdWN0LWdyaWQtMlwiXHJcbmltcG9ydCBQcm9kdWN0R3JpZDNUaHVtYiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9Qcm9kdWN0LWdyaWQtM1wiXHJcbmltcG9ydCBMYXlvdXRDb21tZXJjZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQtY29tbWVyY2VcIlxyXG5pbXBvcnQgUGFnZVNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlLXNlb1wiXHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIlxyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsRnVsbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LWRldGFpbC1mdWxsXCJcclxuTW9kYWwuc2V0QXBwRWxlbWVudChcIiNfX25leHRcIik7XHJcbnZhciBzZWxlY3RpbmdQcm9kdWN0SXRlbSA9IHt9O1xyXG5cclxuY29uc3QgSG9tZSA9ICh7Y2F0YWxvZywgY2F0YWxvZ3BhZ2UsIGxheW91dEluZm8gfSkgPT4ge1xyXG4gICAgIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0Q29tbWVyY2UgY2F0ZWdvcmllcz17Y2F0YWxvZ30gbGF5b3V0PXtsYXlvdXRJbmZvfSBwYWdlPXtjYXRhbG9ncGFnZX0+XHJcbiAgICAgICAgPFBhZ2VTZW8gc2VvPXtjYXRhbG9ncGFnZS5hdHRyaWJ1dGVzLnNlb30gLz5cclxuICAgICAgICA8Q29tbWVyY2VIZXJvIGhlcm89e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuSGVyb30gcGFnZT17Y2F0YWxvZ3BhZ2V9Lz4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPlxyXG4gICAgICAgIDxQcm9kdWN0R3JpZFRodW1iIGNhdGVnb3JpZXM9e2NhdGFsb2d9IGZlYXR1cmVQcm9kdWN0V3JhcD17Y2F0YWxvZ3BhZ2UuYXR0cmlidXRlcy5GZWF0dXJlUHJvZHVjdFdyYXB9IC8+ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiAgY2xhc3M9XCJtYXJnaW4tYm94LTF4XCIgLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoY2F0YWxvZ3BhZ2UuYXR0cmlidXRlcy5TYWxlT2ZmUHJvZHVjdFdyYXAgJiYgQXJyYXkuZnJvbShjYXRhbG9ncGFnZS5hdHRyaWJ1dGVzLlNhbGVPZmZQcm9kdWN0V3JhcCkubGVuZ3RoICE9IDApID8gXHJcbiAgICAgICAgICAoPGRpdj48UHJvZHVjdEdyaWQzVGh1bWIga2V5PXtcIlNhbGVPZmZQcm9kdWN0V3JhcFwifSBuYW1lPXtcIlNhbGVPZmZQcm9kdWN0V3JhcFwifSBjYXRlZ29yaWVzPXtjYXRhbG9nfSBmZWF0dXJlUHJvZHVjdFdyYXA9e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuU2FsZU9mZlByb2R1Y3RXcmFwfSBjb2xDbGFzcz1cInctZnVsbCBsZzp3LTEvM1wiIC8+IDxkaXYgIGNsYXNzPVwibWFyZ2luLWJveC0xeFwiIC8+PGhyLz48ZGl2ICBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPjwvZGl2PiApIDogKDw+PC8+KVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIChjYXRhbG9ncGFnZS5hdHRyaWJ1dGVzLk1haW5Qcm9kdWN0V3JhcCAmJiBBcnJheS5mcm9tKGNhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuTWFpblByb2R1Y3RXcmFwKS5sZW5ndGggIT0gMCkgPyBcclxuICAgICAgICAgICg8ZGl2PjxQcm9kdWN0R3JpZDJUaHVtYiAga2V5PXtcIk1haW5Qcm9kdWN0V3JhcFwifSBuYW1lPXtcIk1haW5Qcm9kdWN0V3JhcFwifSBjYXRlZ29yaWVzPXtjYXRhbG9nfSBmZWF0dXJlUHJvZHVjdFdyYXA9e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuTWFpblByb2R1Y3RXcmFwfSBjb2xDbGFzcz1cInctZnVsbCBsZzp3LTEvM1wiIC8+IDxkaXYgY2xhc3M9XCJtYXJnaW4tYm94LTF4XCIgLz48aHIvPjxkaXYgIGNsYXNzPVwibWFyZ2luLWJveC0xeFwiIC8+PC9kaXY+ICkgOiAoPD48Lz4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoY2F0YWxvZ3BhZ2UuYXR0cmlidXRlcy5SZWNvbW1lbmRQcm9kdWN0V3JhcCAmJiBBcnJheS5mcm9tKGNhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuUmVjb21tZW5kUHJvZHVjdFdyYXApLmxlbmd0aCAhPSAwKSA/IFxyXG4gICAgICAgICAgKDxkaXY+PFByb2R1Y3RHcmlkMlRodW1iICBrZXk9e1wiUmVjb21tZW5kUHJvZHVjdFdyYXBcIn0gbmFtZT17XCJSZWNvbW1lbmRQcm9kdWN0V3JhcFwifSBjYXRlZ29yaWVzPXtjYXRhbG9nfSBmZWF0dXJlUHJvZHVjdFdyYXA9e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuUmVjb21tZW5kUHJvZHVjdFdyYXB9IGNvbENsYXNzPVwidy1mdWxsIGxnOnctMS8zXCIgLz4gPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPjxoci8+PGRpdiAgY2xhc3M9XCJtYXJnaW4tYm94LTF4XCIgLz48L2Rpdj4gKSA6ICg8PjwvPilcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPlxyXG4gICAgICAgIDxNb2RhbCBpc09wZW49eyEhcm91dGVyLnF1ZXJ5LnByb2R1Y3R9IG9uUmVxdWVzdENsb3NlPXsoKSA9PiByb3V0ZXIucmVwbGFjZShcIi9wYWdlcy9jYXRhbG9nXCIpfSA+XHJcbiAgICAgICAgICA8UHJvZHVjdERldGFpbEZ1bGwgcHJvZHVjdFRodW1iPXtzZWxlY3RpbmdQcm9kdWN0SXRlbX0gLz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvTGF5b3V0Q29tbWVyY2U+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcclxuICBjb25zdCBbY2F0YWxvZ1JlcywgY2F0YWxvZ3BhZ2VSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZmV0Y2hBUEkoXCIvcHJvZHVjdC1jYXRlZ29yaWVzXCIsICB7XHJcbiAgICAgICAgcG9wdWxhdGU6IHtcclxuICAgICAgICAgIEZlYXR1cmVQcm9kdWN0czogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgIH19KSwgXHJcbiAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvY2F0YWxvZy1wYWdlP3BvcHVsYXRlW0ZlYXR1cmVQcm9kdWN0V3JhcF1bcG9wdWxhdGVdW0l0ZW1zXVtwb3B1bGF0ZV09KlxyXG4gICAgZmV0Y2hBUEkoXCIvY2F0YWxvZy1wYWdlXCIsICB7XHJcbiAgICAgIHBvcHVsYXRlOiB7XHJcbiAgICAgICAgcG9wdWxhdGU6IFwiKlwiICxcclxuICAgICAgICBIZXJvOiB7IHBvcHVsYXRlOiBcIipcIiAsSW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sQmdJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSx9LFxyXG4gICAgICAgIEZvb3RlcjogICB7IHBvcHVsYXRlOiAgeyAgICAgICAgU3ViY3JpYmVCb3g6IHsgcG9wdWxhdGU6IFwiKlwiIH0sSHlwZXJMaW5rICA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sQmdJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSB9fSxcclxuICAgICAgICAgQ2Fyb3VzZWxHYWxsZXJ5IDogeyAgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICAgICAgIEZlYXR1cmVQcm9kdWN0V3JhcCAgOiAgICAgeyBwb3B1bGF0ZToge0l0ZW1zOiB7IHBvcHVsYXRlOiBcIipcIiB9fX0sIFxyXG4gICAgICAgICBNYWluUHJvZHVjdFdyYXAgICA6ICAgICB7IHBvcHVsYXRlOiB7SXRlbXM6IHsgcG9wdWxhdGU6IFwiKlwiIH19fSxcclxuICAgICAgICAgUmVjb21tZW5kUHJvZHVjdFdyYXAgIDogICAgIHsgcG9wdWxhdGU6IHtJdGVtczogeyBwb3B1bGF0ZTogXCIqXCIgfX19LFxyXG4gICAgICAgICBTYWxlT2ZmUHJvZHVjdFdyYXAgIDogICAgIHsgcG9wdWxhdGU6IHtJdGVtczogeyBwb3B1bGF0ZTogXCIqXCIgfSwgQmdJbWFnZTogIHsgcG9wdWxhdGU6IFwiKlwiIH19fSxcclxuICAgICAgfX0pLCBcclxuICBdKTtcclxuICAgIFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjYXRhbG9nOiBjYXRhbG9nUmVzLmRhdGEsXHJcbiAgICAgIGNhdGFsb2dwYWdlOiBjYXRhbG9ncGFnZVJlcy5kYXRhLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hcmtkb3duXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=