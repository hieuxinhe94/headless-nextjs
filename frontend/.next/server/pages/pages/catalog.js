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
  var _defaultgroupIds$name, _productsFiltered$nam, _productsFiltered$nam2, _productsFiltered$nam3, _productsFiltered$nam4, _productsFiltered$nam5;

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
        backgroundImage: `url(` + (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__.getStrapiURL)() + ((_productsFiltered$nam2 = productsFiltered[name]) === null || _productsFiltered$nam2 === void 0 ? void 0 : (_productsFiltered$nam3 = _productsFiltered$nam2.BgImage) === null || _productsFiltered$nam3 === void 0 ? void 0 : _productsFiltered$nam3.data.attributes.url) + `)`
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
          children: (_productsFiltered$nam4 = productsFiltered[name]) === null || _productsFiltered$nam4 === void 0 ? void 0 : (_productsFiltered$nam5 = _productsFiltered$nam4.Items) === null || _productsFiltered$nam5 === void 0 ? void 0 : _productsFiltered$nam5.map(_product => _product !== null && _product !== void 0 && _product.detail ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                                lineNumber: 41,
                                columnNumber: 45
                              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 42,
                                columnNumber: 45
                              }, undefined)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 40,
                              columnNumber: 45
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 39,
                            columnNumber: 41
                          }, undefined)
                        }, index, false, {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 37
                        }, undefined))
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 36,
                        columnNumber: 37
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 37
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 33
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
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
                  lineNumber: 58,
                  columnNumber: 37
                }, undefined)
              }, _product.id, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, _product.id, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 35
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvY29tbWVyY2UvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9jb21tZXJjZS9Qcm9kdWN0LWdyaWQtMi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL1Byb2R1Y3QtZ3JpZC0zLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvY29tbWVyY2UvUHJvZHVjdENhdGVnb3J5LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvY29tbWVyY2UvY29tbWVyY2UtaGVyby5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtYm9keS1jb250ZW50LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvY29tbWVyY2UvcHJvZHVjdC1kZXRhaWwtZnVsbC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtZ3JpZC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtdGh1bWItMi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtdGh1bWItMy5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtdGh1bWIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9ob21lL2FjdGl2aXR5LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvaG9tZS9icmFuZC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2hvbWUvYnVzaW5lc3MtdGFsay5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2hvbWUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2hvbWUvcGlubmVkLWJsb2cuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2xheW91dC1jb21tZXJjZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL3BhZ2Utc2VvLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvc3ViY3JpYmUtYm94LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2xpYi9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbGliL2NvbXBvbmVudC1yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL3BhZ2VzL3BhZ2VzL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3QtbWFya2Rvd25cIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbFwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInN3clwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9pZ25vcmVkfEQ6XFxXb3JrXFxUcmFuc2ZvbWF0aW9uXFxsYW5kaW5nc2l0ZVxcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIkxpc3RJdGVtIiwidXNlRWZmZWN0IiwiaGVscGVyIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJlbGUiLCJvbmNsaWNrIiwiY29uc29sZSIsImxvZyIsImdldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJbnRlcnZhbCIsInRvdGFsQ2hlY2tib3hlcyIsImVsZW1lbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJtYXhDYXJvdXNlbENvdW50IiwibGVuZ3RoIiwiY3VycmVudFBvc2l0aW9uIiwic3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGVmYXVsdGdyb3VwSWRzIiwiZmVhdHVyZVByb2R1Y3RXcmFwVG1wIiwicHJvZHVjdHNGaWx0ZXJlZCIsIlByb2R1Y3RHcmlkMlRodW1iIiwiZmVhdHVyZVByb2R1Y3RXcmFwIiwiY2F0ZWdvcmllcyIsImNvbENsYXNzIiwibmFtZSIsImlkIiwiZmlsdGVyIiwidCIsIkl0ZW1zIiwicm91dGVyIiwidXNlUm91dGVyIiwiQ2hhbmdlRmlsdGVyIiwiYSIsInJlcGxhY2UiLCJhc1BhdGgiLCJlIiwiR3JvdXBOYW1lIiwiX3Byb2R1Y3QiLCJkZXRhaWwiLCJQcm9kdWN0R3JpZDNUaHVtYiIsImJhY2tncm91bmRJbWFnZSIsImdldFN0cmFwaVVSTCIsIkJnSW1hZ2UiLCJhdHRyaWJ1dGVzIiwidXJsIiwiUHJvZHVjdENhdGVnb3J5Iiwib25TZWxlY3RlZCIsImNhdGVnb3J5IiwiTmFtZSIsIkNvbW1lcmNlSGVybyIsImhlcm8iLCJwYWdlIiwiQ2VudHJhbFRleHQiLCJDZW50cmFsVGV4dERlc2NyaXB0aW9uIiwiQ2VudHJhbFRleHRTZWNvbmRhcnkiLCJDZW50cmFsQnV0dG9uVGV4dCIsIkNhcm91c2VsR2FsbGVyeSIsIlByb2R1Y3RCb2R5Q29udGVudCIsInRyYW5zZm9ybUltYWdlVXJpUGVmb3JtIiwiUHJvZHVjdERldGFpbEZ1bGwiLCJwcm9kdWN0VGh1bWIiLCJwcm9kdWN0U2x1ZyIsInF1ZXJ5IiwicHJvZHVjdCIsImVycm9yIiwiZ2V0UHJvZHVjdERldGFpbCIsInBvcHVsYXRlIiwiSW1hZ2UiLCJDdXN0b21fZmllbGQiLCJwcm9kdWN0RGV0YWlsSXRlbSIsInNsdWciLCJUaXRsZSIsIlNob3J0RGVzY3JpcHRpb24iLCJPcmlnaW5hbFByaWNlIiwiUHJpY2UiLCJPcHRpb25zIiwiRGVzY3JpcHRpb24iLCJkZWZhdWx0Z3JvdXBJZCIsIlByb2R1Y3RHcmlkVGh1bWIiLCJjb2wiLCJyb3ciLCJQcm9kdWN0VGh1bWIyIiwiZ2V0UHJvZHVjdFRodW1iIiwicHJvZHVjdFRodW1iSXRlbSIsInNlbGVjdGluZ1Byb2R1Y3RJdGVtIiwiUHJvZHVjdFRodW1iMyIsIlByb2R1Y3RUaHVtYiIsIkZvb3RlciIsImZvb3RlciIsInNpdGVJbmZvIiwicXVpY2tMaW5rcyIsIkh5cGVyTGluayIsImxpbmsiLCJHcm91cFZhbHVlIiwicmVzb3VyY2VMaW5rcyIsImNvbnRhY3RMaW5rcyIsIlN1YmNyaWJlQm94IiwiTG9nbyIsIkFsdGVyTmFtZSIsImkiLCJMaW5rIiwiQ29weXJpZ2h0VGV4dCIsIkFjdGl2aXR5IiwiYWN0aXZpdHkiLCJidWlsZEFjdGl2aXR5U3R5bGUiLCJidWlsZEJ1c2luZXNzU3RlcFZpZXdTdHlsZSIsIk5hdmlnYXRlTGluayIsIk5hdmlnYXRlTGFibGUiLCJNZWRpYSIsIkJnTWVkaWEiLCJidWlsZEJ1c2luZXNzSW52ZXN0bWVudFZpZXdTdHlsZSIsIl9fY29tcG9uZW50IiwiaW5kZXhPZiIsIlN0ZXBzIiwiQnJhbmQiLCJicmFuZCIsImJyYW5kSXRlbXNzIiwiQnJhbmRMb2dvIiwiQnVzaW5lc3NUYWxrIiwiYnVzaW5lc3MiLCJGZWF0dXJlIiwiZmVhdHVyZSIsInRpdGxlIiwiaXRlbXMiLCJJY29uQ2xhc3MiLCJOYXZpZ2F0ZVRleHRMYWJlbCIsIlBpbm5lZEJsb2ciLCJhcmdzMSIsInNsaWNlIiwicG9zdCIsImltYWdlIiwiQ3VzdG9tSW1hZ2UiLCJpbWFnZUNsYXNzIiwiYWx0ZXJuYXRpdmVUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmNVcmwiLCJMYXlvdXRDb21tZXJjZSIsImNoaWxkcmVuIiwibGF5b3V0IiwiY29sb3IiLCJ0ZXh0Q29sb3IiLCJMb2dvSW1hZ2UiLCJTaXRlSW5mbyIsIk5hdiIsIlBhZ2VTZW8iLCJzZW8iLCJkZWZhdWx0U2VvIiwic2l0ZU5hbWUiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNlb1dpdGhEZWZhdWx0cyIsImZ1bGxTZW8iLCJtZXRhVGl0bGUiLCJzaGFyZUltYWdlIiwiZ2V0U3RyYXBpTWVkaWEiLCJtZXRhRGVzY3JpcHRpb24iLCJhcnRpY2xlIiwic3ViY3JpYmVCb3giLCJQT1NUX1VSTCIsIlN1Ym1pdExhYmVsIiwiZmV0Y2hlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwYXRoIiwicHJvY2VzcyIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwicXVlcnlTdHJpbmciLCJxcyIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsIm9rIiwic3RhdHVzVGV4dCIsIkVycm9yIiwiZ2V0UHJvZHVjdENhdGFsb2dzIiwiZ2V0UHJvZHVjdENhdGFsb2ciLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwiZ2V0UHJvZHVjdCIsInVzZVNXUiIsInJlc29sdmVyQ29tcG9uZW50IiwiY29tcG9uZW50TmFtZSIsImFyZ3MiLCJyZXNvbHZlckR5bmFtaWNDb21wb25lbnQiLCJzb3VyY2UiLCJjb250ZW50QnVpbGRlciIsImR5bmFtaWNDb250ZW50IiwicmVzb2x2ZXJEeW5hbWljRXh0cmFjdCIsInVyaSIsImFsdCIsInN0YXJ0c1dpdGgiLCJDb250ZW50IiwiSWQiLCJtZWRpYSIsImltYWdlVXJsIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJocmVmIiwiYXMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInZhbHVlIiwiaGFzUHJlZmV0Y2giLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJqb2luIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsIngiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJyZW5kZXIiLCJjcmVhdGVDb250ZXh0IiwiTXlBcHAiLCJnbG9iYWwiLCJmYXZpY29uIiwiYXBwUHJvcHMiLCJnbG9iYWxSZXMiLCJsYXlvdXRJbmZvIiwiSGVhZGVyQmdJbWFnZSIsIkhlcm9DZW50cmFsSW1hZ2UiLCJmaWx0ZXJzIiwiSXNUb3BNZW51IiwiUGFnZUhlcm8iLCJQYWdlQm9keSIsIk1vZGFsIiwiSG9tZSIsImNhdGFsb2ciLCJjYXRhbG9ncGFnZSIsIkhlcm8iLCJGZWF0dXJlUHJvZHVjdFdyYXAiLCJTYWxlT2ZmUHJvZHVjdFdyYXAiLCJNYWluUHJvZHVjdFdyYXAiLCJSZWNvbW1lbmRQcm9kdWN0V3JhcCIsImdldFN0YXRpY1Byb3BzIiwiY2F0YWxvZ1JlcyIsImNhdGFsb2dwYWdlUmVzIiwiRmVhdHVyZVByb2R1Y3RzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7OztBQ2hCQSx1R0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDN0M7QUFDQTtBQUNBOztBQUNBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUVqQyxNQUFHLENBQUNBLFFBQUosRUFBYztBQUNaQSxZQUFRLEdBQUcsRUFBWDtBQUNEOztBQUVEQyxrREFBUyxDQUFDLE1BQU07QUFDZEMsVUFBTTtBQUNQLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxZQUFSO0FBQXFCLFNBQUssRUFBQyxrQkFBM0I7QUFBOEMsaUJBQVUsVUFBeEQ7QUFBQSw0QkFDSTtBQUFNLFdBQUssRUFBQyxPQUFaO0FBQW9CLFFBQUUsRUFBQyxVQUF2QjtBQUFBLGdCQUNFRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixDQUFDQyxJQUFELEVBQU9DLEtBQVAs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Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3BhZ2VzL2NhdGFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCIgXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5pbXBvcnQgIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBDYXJvdXNlbCA9ICh7IExpc3RJdGVtIH0pID0+IHtcclxuICAgICBcclxuICBpZighTGlzdEl0ZW0pIHtcclxuICAgIExpc3RJdGVtID0gW107XHJcbiAgfVxyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhlbHBlcigpO1xyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW4tc2xpZGVcIiBjbGFzcz1cIiBjYXJvdXNlbCBzbGlkZSBcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgIDxtYWluIGNsYXNzPVwicHQtMzJcIiBpZD1cImNhcm91c2VsXCI+XHJcbiAgICAgICAgeyBMaXN0SXRlbS5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzcz1cIml0ZW1cIj4gXHJcbiAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtpdGVtfSBpbWFnZUNsYXNzPXtcImltYWdlLWZpdCBkLWJsb2NrIHctMTAwXCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgPC8gbWFpbj5cclxuICAgIDxkaXYgaWQ9XCJjYXJvdXNlbC1uYXZcIiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBcIj5cclxuICAgICAgICB7TGlzdEl0ZW0uZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdENoZWNrZWQ9e2luZGV4ID09IDAgPyB0cnVlOiBmYWxzZX0gZGF0YS1jYXJvdXNlbD17aW5kZXggKyAxfSBrZXk9e2luZGV4fSBjbGFzcz1cImNhcm91c2VsLWl0ZW0tcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwicG9zaXRpb25cIiAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlbHBlcigpIHtcclxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1pdGVtLXJhZGlvXCIpKS5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICBlbGUub25jbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlLmdldEF0dHJpYnV0ZShcImRhdGEtY2Fyb3VzZWxcIikpO1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IGVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcm91c2VsXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxcIikuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCItLXBvc2l0aW9uOlwiICsgcG9zaXRpb24pIDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiBcclxuXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdmFyIHRvdGFsQ2hlY2tib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1pdGVtLXJhZGlvXCIpO1xyXG4gICAgQXJyYXkuZnJvbSh0b3RhbENoZWNrYm94ZXMpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKSA7XHJcbiAgICB9KTtcclxuICAgXHJcbiAgICB2YXIgbWF4Q2Fyb3VzZWxDb3VudCA9IEFycmF5LmZyb20odG90YWxDaGVja2JveGVzKS5sZW5ndGg7XHJcbiAgICB2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbFwiKTtcclxuICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSBlbGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tcG9zaXRpb25cIik7XHJcbiAgICBpZihjdXJyZW50UG9zaXRpb24gPj0gbWF4Q2Fyb3VzZWxDb3VudCkge2N1cnJlbnRQb3NpdGlvbiA9IDE7fSBlbHNlIHtjdXJyZW50UG9zaXRpb24rKzt9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsXCIpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiLS1wb3NpdGlvbjpcIiArIGN1cnJlbnRQb3NpdGlvbikgO1xyXG4gICAgdG90YWxDaGVja2JveGVzW2N1cnJlbnRQb3NpdGlvbi0xXS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHRydWUpIDtcclxuICAgXHJcbiAgfSwgMzAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFByb2R1Y3RUaHVtYjIgZnJvbSBcIi4vcHJvZHVjdC10aHVtYi0yXCI7XHJcblxyXG52YXIgZGVmYXVsdGdyb3VwSWRzID0ge307XHJcbnZhciBmZWF0dXJlUHJvZHVjdFdyYXBUbXAgPSB7fVxyXG52YXIgcHJvZHVjdHNGaWx0ZXJlZCA9IHt9O1xyXG5cclxuZGVmYXVsdGdyb3VwSWRzW1wiMFwiXSA9IFwiXCI7XHJcbmZlYXR1cmVQcm9kdWN0V3JhcFRtcFtcIjBcIl0gPSBcIlwiO1xyXG5wcm9kdWN0c0ZpbHRlcmVkW1wiMFwiXSA9IFwiXCI7XHJcbmNvbnN0IFByb2R1Y3RHcmlkMlRodW1iID0gKHsgZmVhdHVyZVByb2R1Y3RXcmFwICwgY2F0ZWdvcmllcyA9IFtdLCBjb2xDbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiLCBuYW1lID0gXCJQcm9kdWN0R3JpZDJUaHVtYlwiIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICBpZighZmVhdHVyZVByb2R1Y3RXcmFwIHx8IEFycmF5LmZyb20oZmVhdHVyZVByb2R1Y3RXcmFwKS5sZW5ndGggPT0gMCkgcmV0dXJuIDw+PC8+XHJcbiAgICBmZWF0dXJlUHJvZHVjdFdyYXBUbXBbbmFtZV0gPSBmZWF0dXJlUHJvZHVjdFdyYXA7XHJcbiAgICBkZWZhdWx0Z3JvdXBJZHNbbmFtZV0gPSBkZWZhdWx0Z3JvdXBJZHNbbmFtZV0gPz8gZmVhdHVyZVByb2R1Y3RXcmFwWzBdLmlkO1xyXG4gICAgcHJvZHVjdHNGaWx0ZXJlZFtuYW1lXSA9IHByb2R1Y3RzRmlsdGVyZWRbbmFtZV0gPz8gZmVhdHVyZVByb2R1Y3RXcmFwVG1wW25hbWVdLmZpbHRlcih0PT4gdC5pZCA9PSBkZWZhdWx0Z3JvdXBJZHNbbmFtZV0pWzBdLkl0ZW1zO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgQ2hhbmdlRmlsdGVyID0gKGEpID0+IHtcclxuICAgIGRlZmF1bHRncm91cElkc1tuYW1lXSA9IGEuaWQ7XHJcbiAgICBwcm9kdWN0c0ZpbHRlcmVkW25hbWVdID0gYS5JdGVtcztcclxuICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlci5hc1BhdGgucmVwbGFjZSgvXFwjLisvLCAnJykgKyBcIiNcIiArIGEuaWQpXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxzZWN0aW9uIGlkPVwic2VydmljZXNcIiBjbGFzcz1cInNlcnZpY2VzIHNlY3Rpb24tcGFkZGluZyBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFicyBmbGV4XCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlUHJvZHVjdFdyYXAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gaWQ9e1wiI1wiICsgaXRlbS5pZH0gY2xhc3M9XCJuYXYtcHJvZHVjdC1ncmlkLWhvcml6b250YWxcIiBvbkNsaWNrPXsoZSkgPT5DaGFuZ2VGaWx0ZXIoaXRlbSl9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInRodXJzZGF5LXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj17XCIjXCIgKyBpdGVtLmlkfSByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInRodXJzZGF5XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4ge2l0ZW0uR3JvdXBOYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4pKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHNlcnZpY2VzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvZHVjdHNGaWx0ZXJlZFtuYW1lXT8ubWFwKChfcHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9wcm9kdWN0Py5kZXRhaWwpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtfcHJvZHVjdC5pZH0gY2xhc3M9e2NvbENsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFRodW1iMiBrZXk9e19wcm9kdWN0LmlkfSBwcm9kdWN0VGh1bWI9e19wcm9kdWN0LmRldGFpbC5kYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYga2V5PXtfcHJvZHVjdC5pZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RHcmlkMlRodW1iXHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUHJvZHVjdFRodW1iIGZyb20gXCIuL3Byb2R1Y3QtdGh1bWJcIlxyXG5pbXBvcnQgUHJvZHVjdENhdGVnb3J5IGZyb20gXCIuL1Byb2R1Y3RDYXRlZ29yeVwiXHJcbmltcG9ydCAge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUHJvZHVjdFRodW1iMiBmcm9tIFwiLi9wcm9kdWN0LXRodW1iLTJcIjtcclxuaW1wb3J0IFByb2R1Y3RUaHVtYjMgZnJvbSBcIi4vcHJvZHVjdC10aHVtYi0zXCI7XHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcblxyXG52YXIgZGVmYXVsdGdyb3VwSWRzID0ge307XHJcbnZhciBmZWF0dXJlUHJvZHVjdFdyYXBUbXAgPSB7fVxyXG52YXIgcHJvZHVjdHNGaWx0ZXJlZCA9IHt9O1xyXG5cclxuZGVmYXVsdGdyb3VwSWRzW1wiMFwiXSA9IFwiXCI7XHJcbmZlYXR1cmVQcm9kdWN0V3JhcFRtcFtcIjBcIl0gPSBcIlwiO1xyXG5wcm9kdWN0c0ZpbHRlcmVkW1wiMFwiXSA9IFwiXCI7XHJcbmNvbnN0IFByb2R1Y3RHcmlkM1RodW1iID0gKHsgZmVhdHVyZVByb2R1Y3RXcmFwICwgY2F0ZWdvcmllcyA9IFtdLCBjb2xDbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiLCBuYW1lID0gXCJQcm9kdWN0R3JpZDJUaHVtYlwiIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICBpZighZmVhdHVyZVByb2R1Y3RXcmFwIHx8IEFycmF5LmZyb20oZmVhdHVyZVByb2R1Y3RXcmFwKS5sZW5ndGggPT0gMCkgcmV0dXJuIDw+PC8+XHJcbiAgICBmZWF0dXJlUHJvZHVjdFdyYXBUbXBbbmFtZV0gPSBmZWF0dXJlUHJvZHVjdFdyYXA7XHJcbiAgICBkZWZhdWx0Z3JvdXBJZHNbbmFtZV0gPSBkZWZhdWx0Z3JvdXBJZHNbbmFtZV0gPz8gZmVhdHVyZVByb2R1Y3RXcmFwWzBdLmlkO1xyXG4gICAgcHJvZHVjdHNGaWx0ZXJlZFtuYW1lXSA9IHByb2R1Y3RzRmlsdGVyZWRbbmFtZV0gPz8gZmVhdHVyZVByb2R1Y3RXcmFwVG1wW25hbWVdLmZpbHRlcih0PT4gdC5pZCA9PSBkZWZhdWx0Z3JvdXBJZHNbbmFtZV0pWzBdO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgQ2hhbmdlRmlsdGVyID0gKGEpID0+IHtcclxuICAgIGRlZmF1bHRncm91cElkc1tuYW1lXSA9IGEuaWQ7XHJcbiAgICBwcm9kdWN0c0ZpbHRlcmVkW25hbWVdID0gYTtcclxuICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlci5hc1BhdGgucmVwbGFjZSgvXFwjLisvLCAnJykgKyBcIiNcIiArIGEuaWQpXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY291bnRlci1zZWN0aW9uIHNlY3Rpb24tcGFkZGluZ1wiIFxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAgYHVybChgK2dldFN0cmFwaVVSTCgpICsgcHJvZHVjdHNGaWx0ZXJlZFtuYW1lXT8uQmdJbWFnZT8uZGF0YS5hdHRyaWJ1dGVzLnVybCtgKWAgfX0gPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzIGZsZXhcIiBpZD1cIm15VGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmVQcm9kdWN0V3JhcC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBpZD17XCIjXCIgKyBpdGVtLmlkfSBjbGFzcz1cIm5hdi1wcm9kdWN0LWdyaWQtaG9yaXpvbnRhbC1hY3RpdmVcIiBvbkNsaWNrPXsoZSkgPT5DaGFuZ2VGaWx0ZXIoaXRlbSl9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInRodXJzZGF5LXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj17XCIjXCIgKyBpdGVtLmlkfSByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInRodXJzZGF5XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tdGV4dCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgPiB7aXRlbS5Hcm91cE5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgeyBwcm9kdWN0c0ZpbHRlcmVkW25hbWVdPy5JdGVtcz8ubWFwKChfcHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9wcm9kdWN0Py5kZXRhaWwpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtfcHJvZHVjdC5pZH0gY2xhc3M9e2NvbENsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFRodW1iMyBrZXk9e19wcm9kdWN0LmlkfSBwcm9kdWN0VGh1bWI9e19wcm9kdWN0LmRldGFpbC5kYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYga2V5PXtfcHJvZHVjdC5pZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0R3JpZDNUaHVtYlxyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFByb2R1Y3RUaHVtYiBmcm9tIFwiLi9wcm9kdWN0LXRodW1iXCJcclxuXHJcbmNvbnN0IFByb2R1Y3RDYXRlZ29yeSA9ICh7IGNhdGVnb3JpZXMgPSBbXSwgb25TZWxlY3RlZCB9KSA9PiB7XHJcbiAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInNjaGVkdWxlc1wiIGNsYXNzPVwic2NoZWR1bGUgc2VjdGlvbi1wYWRkaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY2hlZHVsZS1hcmVhICB3b3cgZmFkZUluRG93blwiIGRhdGEtd293LWRlbGF5PVwiMC4zc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNjaGVkdWxlLXRhYi10aXRsZSBjb2wtbWQtMyBjb2wtbGctMyBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgIHsgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3M9XCJuYXYtaXRlbSByb3dcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInRodXJzZGF5LXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiN0aHVyc2RheVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwidGh1cnNkYXlcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND4ge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZSA/PyBjYXRlZ29yeS5hdHRyaWJ1dGVzLk5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXRlZ29yeVxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5cclxuY29uc3QgQ29tbWVyY2VIZXJvID0gKHsgaGVybywgcGFnZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLWFyZWFcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICBgdXJsKGArZ2V0U3RyYXBpVVJMKCkgKyBoZXJvLkJnSW1hZ2U/LmRhdGEuYXR0cmlidXRlcy51cmwrYClgIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMzIgbWItMTIgdGV4dC1jZW50ZXIgbGc6cHQtNDggaGVhZGVyLWhlcm8tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC00eGwgZm9udC1saWdodCBsZWFkaW5nLXRpZ2h0IHRleHQtd2hpdGUgaGVhZGVyLXN1Yi10aXRsZSB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj57IGhlcm8/LkNlbnRyYWxUZXh0fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWItMyB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBoZWFkZXItdGl0bGUgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlcm8/LkNlbnRyYWxUZXh0RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi04IHRleHQtd2hpdGUgdGV4dCB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjAuOHNcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZXJvPy5DZW50cmFsVGV4dFNlY29uZGFyeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1haW4tYnRuIHB0LTMyIGdyYWRpZW50LWJ0biBncmFkaWVudC1idG4tMiB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjEuMXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVybz8uQ2VudHJhbEJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBMaXN0SXRlbT17cGFnZT8uYXR0cmlidXRlcy5DYXJvdXNlbEdhbGxlcnl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lcmNlSGVyb1xyXG5cclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IHsgcmVzb2x2ZXJEeW5hbWljQ29tcG9uZW50LCByZXNvbHZlckR5bmFtaWNFeHRyYWN0LCB0cmFuc2Zvcm1JbWFnZVVyaVBlZm9ybSB9IGZyb20gXCIuLi8uLi9saWIvY29tcG9uZW50LXJlc29sdmVyXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0Qm9keUNvbnRlbnQgPSAoeyBkYXRhIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdEJvZHlDb250ZW50XCIpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgIGlmKCFkYXRhKSByZXR1cm4gPHNlY3Rpb24gaWQ9XCJjb250ZW50XCIgY2xhc3M9XCIgcHQtMTIwIHBhZ2UtY29udGVudFwiPlxyXG4gICAgICAgIE5vIGNvbnRlbnRcclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICByZXR1cm4gKDxzZWN0aW9uIGlkPVwiY29udGVudFwiIGNsYXNzPVwicHQtMTAgcHJvZHVjdC1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBsZzp3LTEvMlwiIGlkPVwiaGVhZGluZ09uZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNxdWVzdGlvbk9uZVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlT25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJsbmkgbG5pLXBlbmNpbFwiPjwvaT4gTcO0IHThuqMgY2hpIHRp4bq/dFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybUltYWdlVXJpPXt0cmFuc2Zvcm1JbWFnZVVyaVBlZm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RCb2R5Q29udGVudFxyXG5cclxuIiwiaW1wb3J0IHsgYmluZFByb2R1Y3RUaHVtYiwgZ2V0UHJvZHVjdERldGFpbCwgZ2V0UHJvZHVjdFRodW1iIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUHJvZHVjdEJvZHlDb250ZW50IGZyb20gXCIuL3Byb2R1Y3QtYm9keS1jb250ZW50XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlsRnVsbCA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwcm9kdWN0U2x1ZyA9ICByb3V0ZXIucXVlcnkucHJvZHVjdDtcclxuICBjb25zb2xlLmxvZyhwcm9kdWN0U2x1Zyk7XHJcblxyXG4gIGlmKCFwcm9kdWN0U2x1Zykge1xyXG4gICAgcm91dGVyLnJlcGxhY2UoXCIvcGFnZXMvY2F0YWxvZ1wiKTtcclxuICAgIHJldHVybiAoPGgzPkVtcHR5ICAgPC9oMz4pXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhcImxvYWQgcHJvZHVjdCBkZXRhaWwgc3dyXCIpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9ICAgZ2V0UHJvZHVjdERldGFpbChwcm9kdWN0U2x1Zywge1xyXG4gICAgcG9wdWxhdGU6IHtcclxuICAgICAgcG9wdWxhdGU6IFwiKlwiICxcclxuICAgICAgSW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICAgIEN1c3RvbV9maWVsZCA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkLlwiO1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImxvYWQgUHJvZHVjdERldGFpbEZ1bGxcIik7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdERldGFpbEl0ZW0pO1xyXG5cclxuICBpZighZGF0YT8uZGF0YSB8fCBBcnJheS5mcm9tKGRhdGEuZGF0YSkubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuICg8aDM+RW1wdHk8L2gzPilcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2R1Y3REZXRhaWxJdGVtID0gIGRhdGEuZGF0YVswXTtcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImRldGFpbC1zZWN0aW9uXCIgY2xhc3M9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGUtaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCIgb25DbGljaz17KGUpID0+IHtyb3V0ZXIucmVwbGFjZShgL3BhZ2VzL2NhdGFsb2cjJHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wYWdlcy9jYXRhbG9nIyR7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nIyR7cHJvZHVjdERldGFpbEl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICA8aSBjbGFzcz1cImxuaSBsbmktY2xvc2VcIj4gPC9pPiBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzp3LTEvMiB3b3cgZmFkZUluUmlnaHQgcHJvZHVjdC1kZXRhaWwtbGVmdFwiIGRhdGEtd293LWRlbGF5PVwiMC4zc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW9cIj5cclxuICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uSW1hZ2V9IGltYWdlQ2xhc3M9e1wicHJvZHVjdC1pbWFnZS1ob3Jpem9udGFsLTJ4XCJ9IHN0eWxlPXtcImhlaWdodDogMjUwcHhcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzp3LTEvMiB3b3cgZmFkZUluTGVmdCBtbC0xMCBwcm9kdWN0LWRldGFpbC1yaWdodFwiIGRhdGEtd293LWRlbGF5PVwiMC4zc1wiPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxoMSBjbGFzcz1cInNlY3Rpb24tdGl0bGUgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcbiAgICAgICAgICAgICAgPGI+IHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uVGl0bGV9PC9iPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWRlc2NcIj4gXHJcbiAgICAgICAgICAgICAgeyBwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uU2hvcnREZXNjcmlwdGlvbiB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiXCI+ICAgIDxpIGNsYXNzPVwibG5pIGxuaS1jb2luXCI+PC9pPiAgR2nDoSA6PC9oMz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1zcGVjaWZpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGV4dC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1saW5lLXRocm91Z2ggcHItNVwiPiB7IHByb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5PcmlnaW5hbFByaWNlfSAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibW9uZXktcHJvdGVjdGlvblwiPjwvaT4gPGI+IHtwcm9kdWN0RGV0YWlsSXRlbT8uYXR0cmlidXRlcz8uUHJpY2V9IFZOxJAgPC9iPlxyXG4gICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7IHByb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzLkN1c3RvbV9maWVsZD8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwibG5pIGxuaS1jaGVja21hcmstY2lyY2xlXCI+PC9pPiB7aXRlbS5UaXRsZX0gOiB7aXRlbS5PcHRpb25zfTwvbGk+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBsZzp3LTEvMiBwLWhvcmktMTVcIiA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidy1mdWxsIGJ0biBidG4tY29tbW9uICB3b3dcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuM3NcIiBkYXRhLXdvdy1kZWxheT1cIjEuMXNcIj5cclxuICAgICAgICAgICAgICAgICAgTXVhIG5nYXlcclxuICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGxnOnctMS8yIHAtaG9yaS0xNVwiID5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ3LWZ1bGwgYnRuIGJ0bi1jb21tb24gd293XCIgZGF0YS13b3ctZHVyYXRpb249XCIxLjNzXCIgZGF0YS13b3ctZGVsYXk9XCIxLjFzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRow6ptIHbDoG8gZ2nhu49cclxuICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwcm9kdWN0LWRlc2NyaXB0aW9uIHB0LTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEJvZHlDb250ZW50IGRhdGE9e3Byb2R1Y3REZXRhaWxJdGVtPy5hdHRyaWJ1dGVzPy5EZXNjcmlwdGlvbiB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxGdWxsXHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUHJvZHVjdFRodW1iIGZyb20gXCIuL3Byb2R1Y3QtdGh1bWJcIlxyXG5pbXBvcnQgUHJvZHVjdENhdGVnb3J5IGZyb20gXCIuL1Byb2R1Y3RDYXRlZ29yeVwiXHJcbmltcG9ydCAge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxudmFyIGRlZmF1bHRncm91cElkO1xyXG52YXIgZmVhdHVyZVByb2R1Y3RXcmFwVG1wO1xyXG52YXIgcHJvZHVjdHNGaWx0ZXJlZDtcclxuXHJcbmNvbnN0IFByb2R1Y3RHcmlkVGh1bWIgPSAoeyBmZWF0dXJlUHJvZHVjdFdyYXAgPSBbXSwgY2F0ZWdvcmllcyA9IFtdLCBjb2wgPSAzLCByb3cgPSA1IH0pID0+IHtcclxuICAgIGZlYXR1cmVQcm9kdWN0V3JhcFRtcCA9IGZlYXR1cmVQcm9kdWN0V3JhcDtcclxuICAgIGRlZmF1bHRncm91cElkID0gZGVmYXVsdGdyb3VwSWQgPz8gZmVhdHVyZVByb2R1Y3RXcmFwWzBdLmlkO1xyXG4gICAgcHJvZHVjdHNGaWx0ZXJlZCA9IHByb2R1Y3RzRmlsdGVyZWQgPz8gZmVhdHVyZVByb2R1Y3RXcmFwLmZpbHRlcih0PT4gdC5pZCA9PSBkZWZhdWx0Z3JvdXBJZClbMF0uSXRlbXM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBDaGFuZ2VGaWx0ZXIgPSAoYSkgPT4ge1xyXG4gICAgZGVmYXVsdGdyb3VwSWQgPSBhLmlkO1xyXG4gICAgcHJvZHVjdHNGaWx0ZXJlZCA9IGEuSXRlbXM7XHJcbiAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoLnJlcGxhY2UoL1xcIy4rLywgJycpICsgXCIjXCIgKyBhLmlkKVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInByb2R1Y3Qtc2VjdGlvblwiIGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtd3JhcCBteC1hdXRvIGdhcC0yIG10LThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJvZHVjdENhdGVnb3J5IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IG9uU2VsZWN0ZWQ9e29uQ2hhbmdlRmlsdGVyfS8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInNjaGVkdWxlc1wiIGNsYXNzPVwic2NoZWR1bGUgc2VjdGlvbi1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjaGVkdWxlLWFyZWEgIHdvdyBmYWRlSW5Eb3duXCIgZGF0YS13b3ctZGVsYXk9XCIwLjNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjaGVkdWxlLXRhYi10aXRsZSBjb2wtbWQtMyBjb2wtbGctMyBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlUHJvZHVjdFdyYXAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gaWQ9e1wiI1wiICsgaXRlbS5pZH0gY2xhc3M9XCJuYXYtaXRlbSByb3dcIiBvbkNsaWNrPXsoZSkgPT5DaGFuZ2VGaWx0ZXIoaXRlbSl9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInRodXJzZGF5LXRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj17XCIjXCIgKyBpdGVtLmlkfSByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInRodXJzZGF5XCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4ge2l0ZW0uR3JvdXBOYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0yLzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9kdWN0c0ZpbHRlcmVkLm1hcCgoX3Byb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3Byb2R1Y3Q/LmRldGFpbCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtfcHJvZHVjdC5pZH0gY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUaHVtYiBrZXk9e19wcm9kdWN0LmlkfSBwcm9kdWN0VGh1bWI9e19wcm9kdWN0LmRldGFpbC5kYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBrZXk9e19wcm9kdWN0LmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0R3JpZFRodW1iXHJcbiIsImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuY29uc3QgUHJvZHVjdFRodW1iMiA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwibG9hZCBwcm9kdWN0VGh1bWIgc3dyXCIpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9ICAgZ2V0UHJvZHVjdFRodW1iKHByb2R1Y3RUaHVtYi5pZCwge1xyXG4gICAgcG9wdWxhdGU6IHtcclxuICAgICAgSW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICAgIEN1c3RvbV9maWVsZCA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gaWYgKGVycm9yKSByZXR1cm4gXCJBbiBlcnJvciBoYXMgb2NjdXJyZWQuXCI7XHJcbiBpZiAoIWRhdGEpIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcclxuXHJcbiBjb25zdCBwcm9kdWN0VGh1bWJJdGVtID0gIGRhdGEuZGF0YTtcclxuIFxyXG4gIGNvbnN0IG9uU2VsZWN0ZWQgPSAoYSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJTZXQgc2VsZWN0aW5nUHJvZHVjdEl0ZW1cIik7XHJcbiAgICBzZWxlY3RpbmdQcm9kdWN0SXRlbSA9IGE7XHJcbiAgfVxyXG5cclxuIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z30gY2xhc3M9XCJjb2wtbWQtNiBjb2wtbGctNCBjb2wteHMtMTIgcGFkZGluZy1ub25lIGN1cnNvclwiPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzPVwiY3Vyc29yXCIga2V5PXtwcm9kdWN0VGh1bWJJdGVtPy5pZH0gcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcGFnZXMvY2F0YWxvZz9wcm9kdWN0PSR7cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3RUaHVtYkl0ZW0uaWR9ICBvbkNsaWNrPXsoZSkgPT5vblNlbGVjdGVkKHByb2R1Y3RUaHVtYil9PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlcy1pdGVtIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHVtYlwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZmVhdHVyZXMvZmVhdHVyZS1pY29uLTEucG5nXCIgYWx0PVwiXCIvPiAqL31cclxuICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uSW1hZ2V9IGltYWdlQ2xhc3M9e1wicHJvZHVjdC1pbWFnZS1ob3Jpem9udGFsXCJ9IHN0eWxlPXtcImhlaWdodDogMjUwcHhcIn0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlcnZpY2VzLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtcHJpY2VcIj48Yj57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5QcmljZX0gVk7EkDwvYj48L2g0PlxyXG4gICAgICAgICAgICA8aDM+PGI+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uVGl0bGV9PC9iPjwvaDM+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0VGh1bWJJdGVtLmF0dHJpYnV0ZXM/LlNob3J0RGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RUaHVtYjJcclxuIiwiaW1wb3J0IHsgYmluZFByb2R1Y3RUaHVtYiwgZ2V0UHJvZHVjdFRodW1iIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG4gXHJcbmNvbnN0IFByb2R1Y3RUaHVtYjMgPSAgICh7IHByb2R1Y3RUaHVtYiAgfSkgID0+IHtcclxuICBjb25zb2xlLmxvZyhcImxvYWQgcHJvZHVjdFRodW1iIHN3clwiKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSAgIGdldFByb2R1Y3RUaHVtYihwcm9kdWN0VGh1bWIuaWQsIHtcclxuICAgIHBvcHVsYXRlOiB7XHJcbiAgICAgIEltYWdlOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxyXG4gICAgICBDdXN0b21fZmllbGQgOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvblNlbGVjdGVkID0gKGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2V0IHNlbGVjdGluZ1Byb2R1Y3RJdGVtXCIpO1xyXG4gICAgc2VsZWN0aW5nUHJvZHVjdEl0ZW0gPSBhO1xyXG4gIH1cclxuXHJcbiBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuIGNvbnN0IHByb2R1Y3RUaHVtYkl0ZW0gPSAgZGF0YS5kYXRhO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgIGtleT17cHJvZHVjdFRodW1iSXRlbT8uYXR0cmlidXRlcz8uc2x1Z30gY2xhc3M9XCJjb2wtbWQtNiBjb2wtbGctMyBjb2wteHMtMTIgd29yay1jb3VudGVyLXdpZGdldCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGN1cnNvclwiPlxyXG4gICAgICA8TGluayBjbGFzcz1cImN1cnNvclwiIGtleT17cHJvZHVjdFRodW1iSXRlbT8uaWR9IHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nP3Byb2R1Y3Q9JHtwcm9kdWN0VGh1bWJJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0VGh1bWJJdGVtLmlkfSAgb25DbGljaz17KGUpID0+b25TZWxlY3RlZChwcm9kdWN0VGh1bWIpfT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZXIgd293IGZhZGVJblJpZ2h0XCIgZGF0YS13b3ctZGVsYXk9XCIwLjNzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LkltYWdlfSBpbWFnZUNsYXNzPXtcInByb2R1Y3QtaW1hZ2UtaG9yaXpvbnRhbFwifSBzdHlsZT17XCJoZWlnaHQ6IDI1MHB4XCJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtcHJpY2VcIj48Yj57cHJvZHVjdFRodW1iSXRlbS5hdHRyaWJ1dGVzPy5QcmljZX0gVk7EkDwvYj48L2g0PlxyXG4gICAgICAgICAgPGgzPjxiPntwcm9kdWN0VGh1bWJJdGVtLmF0dHJpYnV0ZXM/LlRpdGxlfTwvYj48L2gzPlxyXG4gICAgICAgICAgPGk+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uU2hvcnREZXNjcmlwdGlvbn08L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGh1bWIzXHJcbiIsImltcG9ydCB7IGJpbmRQcm9kdWN0VGh1bWIsIGdldFByb2R1Y3RUaHVtYiB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmNvbnN0IFByb2R1Y3RUaHVtYiA9ICAgKHsgcHJvZHVjdFRodW1iICB9KSAgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwibG9hZCBwcm9kdWN0VGh1bWIgc3dyXCIpO1xyXG5cclxuICBjb25zdCBvblNlbGVjdGVkID0gKGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2V0IHNlbGVjdGluZ1Byb2R1Y3RJdGVtXCIpO1xyXG4gICAgc2VsZWN0aW5nUHJvZHVjdEl0ZW0gPSBhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gICBnZXRQcm9kdWN0VGh1bWIocHJvZHVjdFRodW1iLmlkLCB7XHJcbiAgICBwb3B1bGF0ZToge1xyXG4gICAgICBJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgICAgQ3VzdG9tX2ZpZWxkIDogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcclxuIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuIGNvbnN0IHByb2R1Y3RUaHVtYkl0ZW0gPSAgZGF0YS5kYXRhO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e3Byb2R1Y3RUaHVtYj8uYXR0cmlidXRlcz8uc2x1Z30gY2xhc3M9XCJjdXJzb3JcIj5cclxuICAgICAgPExpbmsgIGtleT17cHJvZHVjdFRodW1iSXRlbT8uaWR9IHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3BhZ2VzL2NhdGFsb2c/cHJvZHVjdD0ke3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wYWdlcy9jYXRhbG9nP3Byb2R1Y3Q9JHtwcm9kdWN0VGh1bWJJdGVtPy5hdHRyaWJ1dGVzPy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0VGh1bWJJdGVtLmlkfSAgb25DbGljaz17KGUpID0+b25TZWxlY3RlZChwcm9kdWN0VGh1bWIpfT5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIuMnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtYm94IHNpbmdsZS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZmVhdHVyZXMvZmVhdHVyZS1pY29uLTEucG5nXCIgYWx0PVwiXCIvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e3Byb2R1Y3RUaHVtYkl0ZW0/LmF0dHJpYnV0ZXM/LkltYWdlfSBpbWFnZUNsYXNzPXtcInByb2R1Y3QtaW1hZ2UtaG9yaXpvbnRhbFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXByaWNlXCI+PGI+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uUHJpY2V9IFZOxJA8L2I+PC9oND5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXRpdGxlXCI+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uVGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPGk+e3Byb2R1Y3RUaHVtYkl0ZW0uYXR0cmlidXRlcz8uU2hvcnREZXNjcmlwdGlvbn08L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFRodW1iXHJcbiIsImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiXHJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi9saWIvYXBpXCI7XHJcbmltcG9ydCBTdWJjcmliZUJveCBmcm9tIFwiLi9zdWJjcmliZS1ib3hcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7IGZvb3Rlciwgc2l0ZUluZm8gfSkgPT4ge1xyXG4gIFxyXG4gICAgY29uc3QgcXVpY2tMaW5rcyA9IGZvb3Rlcj8uSHlwZXJMaW5rLmZpbHRlcihsaW5rID0+IGxpbmsuR3JvdXBWYWx1ZSA9PSAnUXVpY2tMaW5rJyk7XHJcbiAgICBjb25zdCByZXNvdXJjZUxpbmtzID0gZm9vdGVyPy5IeXBlckxpbmsuZmlsdGVyKGxpbmsgPT4gbGluay5Hcm91cFZhbHVlID09ICdSZXNvdXJjZXMnKTtcclxuICAgIGNvbnN0IGNvbnRhY3RMaW5rcyA9IGZvb3Rlcj8uSHlwZXJMaW5rLmZpbHRlcihsaW5rID0+IGxpbmsuR3JvdXBWYWx1ZSA9PSAnQ29udGFjdFVzJyk7XHJcbiAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCIgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIGZvb3Rlci1hcmVhIHB0LTEyMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci1iZ1wiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogIGB1cmwoYCtnZXRTdHJhcGlVUkwoKSArIGZvb3Rlcj8uQmdJbWFnZT8uZGF0YS5hdHRyaWJ1dGVzLnVybCtgKWAgfX0gPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgKGZvb3Rlcj8uU3ViY3JpYmVCb3gpID8gKCA8U3ViY3JpYmVCb3ggc3ViY3JpYmVCb3g9e2Zvb3Rlcj8uU3ViY3JpYmVCb3h9IC8+KSA6ICg8ZGl2PjwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci13aWRnZXQgcGItMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNC81IG1kOnctMy81IGxnOnctMi82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyIGZvb3Rlci1hYm91dCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImlubGluZS1ibG9jayBtYi04IGxvZ29cIiBocmVmPVwiaW5kZXguaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtzaXRlSW5mbz8uTG9nb30gICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJsb2dvXCIgY2xhc3M9XCJ3LTQwXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYi0xMCBwci0xMCBsZWFkaW5nLXNudWcgdGV4dC13aGl0ZSBjb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpdGVJbmZvPy5BbHRlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImZsZXggZm9vdGVyLXNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJsbmkgbG5pLWZhY2Vib29rLWZpbGxlZFwiPjwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwibG5pIGxuaS10d2l0dGVyLWZpbGxlZFwiPjwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwibG5pIGxuaS1pbnN0YWdyYW0tZmlsbGVkXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJsbmkgbG5pLWxpbmtlZGluLW9yaWdpbmFsXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTQvNSBzbTp3LTIvMyBtZDp3LTMvNSBsZzp3LTIvNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBzbTp3LTEvMiBtZDp3LTEvMiBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyIGxpbmstd3JhcHBlciB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC40c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWItOCB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlF1aWNrIExpbms8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBxdWlja0xpbmtzPy5tYXAoKGl0ZW0sIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8bGkga2V5PXtpICsgXCJhXCJ9PjxhIGhyZWY9e2l0ZW0uTGlua30+e2l0ZW0uVGl0bGV9PC9hPjwvbGk+ICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgc206dy0xLzIgbWQ6dy0xLzIgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xMiBsaW5rLXdyYXBwZXIgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1iLTggdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5SZXNvdXJjZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXNvdXJjZUxpbmtzPy5tYXAoKGl0ZW0sIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8bGkga2V5PXtpICsgXCJiXCJ9PjxhIGhyZWY9e2l0ZW0uTGlua30+e2l0ZW0uVGl0bGV9PC9hPjwvbGk+ICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTQvNSBzbTp3LTEvMyBtZDp3LTIvNSBsZzp3LTIvNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xMiBmb290ZXItY29udGFjdCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC44c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi04IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+Q29udGFjdCBVczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY29udGFjdExpbmtzPy5tYXAoKGl0ZW0sIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8bGkga2V5PXtpICsgXCJjXCJ9PjxhIGhyZWY9e2l0ZW0uTGlua30+e2l0ZW0uVGl0bGV9PC9hPjwvbGk+ICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweS04IGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBmb290ZXItY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICB7c2l0ZUluZm8/LkNvcHlyaWdodFRleHR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8ZGl2IGlkPVwicGFydGljbGVzLTJcIiBjbGFzcz1cInBhcnRpY2xlc1wiPjwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCIuLi9pbWFnZVwiXHJcbmltcG9ydCBCdXNpbmVzc1RhbGsgZnJvbSAnLi4vaG9tZS9idXNpbmVzcy10YWxrJ1xyXG5cclxuY29uc3QgQWN0aXZpdHkgPSAoeyBhY3Rpdml0eSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7IGFjdGl2aXR5Py5tYXAoKGl0ZW0sIGkpID0+ICggIFxyXG4gICAgICAgICAgICBidWlsZEFjdGl2aXR5U3R5bGUoaSwgaXRlbSlcclxuICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkQnVzaW5lc3NTdGVwVmlld1N0eWxlID0gKGluZGV4LCBpdGVtKSA9PiB7XHJcbiAgICBpZiAoaW5kZXggJTIgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiAgY2xhc3M9XCJyZWxhdGl2ZSBwdC0yMCBhYm91dC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEyIGFib3V0LWNvbnRlbnQgd293IGZhZGVJbkxlZnRCaWdcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtpdGVtLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLk5hdmlnYXRlTGlua30gY2xhc3M9XCJtYWluLWJ0biBncmFkaWVudC1idG5cIj57aXRlbS5OYXZpZ2F0ZUxhYmxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEyIHRleHQtY2VudGVyIGFib3V0LWltYWdlIHdvdyBmYWRlSW5SaWdodEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZT17aXRlbS5NZWRpYX0gIGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtc2hhcGUtMVwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlPXtpdGVtLkJnTWVkaWF9ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICA8c2VjdGlvbiAgY2xhc3M9XCJyZWxhdGl2ZSBwdC0yMCBhYm91dC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1zaGFwZS0yXCI+XHJcbiAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZT17aXRlbS5CZ01lZGlhfSAga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMiBsZzpvcmRlci1sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTQgbXQtMTIgYWJvdXQtY29udGVudCB3b3cgZmFkZUluTGVmdEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTQgc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtpdGVtLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0uTmF2aWdhdGVMaW5rfSBjbGFzcz1cIm1haW4tYnRuIGdyYWRpZW50LWJ0blwiPntpdGVtLk5hdmlnYXRlTGFibGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzIgbGc6b3JkZXItZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEyIHRleHQtY2VudGVyIGFib3V0LWltYWdlIHdvdyBmYWRlSW5SaWdodEJpZ1wiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtpdGVtLk1lZGlhfSAga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvc2VjdGlvbj4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgYnVpbGRCdXNpbmVzc0ludmVzdG1lbnRWaWV3U3R5bGUgPSAoaW5kZXgsIGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1c2luZXNzVGFsayBidXNpbmVzcz17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG59XHJcblxyXG5jb25zdCBidWlsZEFjdGl2aXR5U3R5bGUgPSAoaW5kZXgsIGl0ZW0pID0+IHsgXHJcbiAgICBpZiAoKGl0ZW0uX19jb21wb25lbnQpLmluZGV4T2YoJ2J1c2luZXNzLXN0ZXBzJykgIT09IC0xKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgaXRlbS5TdGVwcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoIFxyXG4gICAgICAgICAgICAgICAgYnVpbGRCdXNpbmVzc1N0ZXBWaWV3U3R5bGUoaW5kZXgsIGl0ZW0pXHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGl0ZW0uX19jb21wb25lbnQuaW5kZXhPZignaW52ZXN0bWVudCcpICE9PSAtMSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBidWlsZEJ1c2luZXNzSW52ZXN0bWVudFZpZXdTdHlsZShpbmRleCwgaXRlbSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHlcclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5jb25zdCBCcmFuZCA9ICh7IGJyYW5kIH0pID0+IHtcclxuICBcclxuY29uc3QgYnJhbmRJdGVtc3MgPSBicmFuZC5CcmFuZExvZ287XHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMjQgYnJhbmQtYXJlYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm93IGxnOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgYnJhbmRJdGVtc3MubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwic2luZ2xlLWxvZ28gaG92ZXI6b3BhY2l0eS0xMDAgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgaW1hZ2U9e2l0ZW0uTG9nb30gIGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJhbmRcclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5jb25zdCBCdXNpbmVzc1RhbGsgPSAoeyBidXNpbmVzcyB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cImZhY3RzXCIgY2xhc3M9XCJwdC0yMCB2aWRlby1jb3VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHBiLTggbXQtMTIgdmlkZW8tY29udGVudCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZT17YnVzaW5lc3MuQmdNZWRpYX0gIGltYWdlQ2xhc3M9e1wiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIC1tbC04IGRvdHNcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIG1yLTYgcm91bmRlZC1sZyBzaGFkb3ctbWQgdmlkZW8td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgIGltYWdlPXtidXNpbmVzcy5NZWRpYX0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgYmctYmx1ZS05MDAgYmctb3BhY2l0eS0yNSByb3VuZGVkLWxnIHZpZGVvLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1yNDRSS1d5ZmNGd1wiIGNsYXNzPVwidmlkZW8tcG9wdXBcIj48aSBjbGFzcz1cImxuaSBsbmktcGxheVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbC0wIG10LTEyIGNvdW50ZXItd3JhcHBlciBsZzpwbC0xNiB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC44c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItOCBzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj48UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2J1c2luZXNzLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17YnVzaW5lc3MuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJ1c2luZXNzLkl0ZW1zPy5tYXAoKGl0ZW0sIGkpID0+ICggIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNpbmdsZS1jb3VudGVyIGNvdW50ZXItY29sb3ItXCIgKyAoaSArIDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGNvdW50ZXItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntpdGVtLlRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZVwiPntpdGVtLkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gXHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVzaW5lc3NUYWxrXHJcblxyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcclxuXHJcbmNvbnN0IEZlYXR1cmUgPSAoeyBmZWF0dXJlIH0pID0+IHtcclxuIFxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZmVhdHVyZS5DZW50cmFsVGV4dDtcclxuICAgIGNvbnN0IGl0ZW1zID0gZmVhdHVyZS5JdGVtcyA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZXNcIiBjbGFzcz1cInNlcnZpY2VzLWFyZWEgcHQtMTIwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItMTAgdGV4dC1jZW50ZXIgc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWF1dG8gbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBzbTp3LTIvMyBsZzp3LTEvM1wiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtc2VydmljZXMgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3M9XCJzaGFwZS0xXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy1zaGFwZS5zdmdcIiBhbHQ9XCJzaGFwZVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSAgaW1hZ2VDbGFzcz17J3NoYXBlJ30gaW1hZ2U9e2l0ZW0uTWVkaWF9ICBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3M9XCJzaGFwZS0xXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy1zaGFwZS0xLnN2Z1wiIGFsdD1cInNoYXBlXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9e2l0ZW0uSWNvbkNsYXNzfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC04IHNlcnZpY2VzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi04IHRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj57aXRlbS5UaXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItOCBjYXJkLWNvbnRlbnRcIj57aXRlbS5EZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5OYXZpZ2F0ZUxpbmt9IGNsYXNzPVwiZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtdGhlbWUtY29sb3JcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLk5hdmlnYXRlVGV4dExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1sLTIgbG5pIGxuaS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgPC9kaXY+ICBcclxuPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZSBcclxuXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIlxyXG5cclxuY29uc3QgUGlubmVkQmxvZyA9ICh7IGRhdGEsIGFyZ3MxIH0pID0+IHtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJibG9nXCIgY2xhc3M9XCJibG9nLWFyZWEgcHQtMTIwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTggc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/LlRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2RhdGE/LkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIj5cclxuXHJcbiAgICAgICAgICAgIHsgYXJnczE/LnNsaWNlKDAsMyk/Lm1hcCgocG9zdCwgaSkgPT4gKCAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtZDp3LTIvMyBsZzp3LTEvM1wiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC00IG10LTEwIHNpbmdsZS1ibG9nIHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi01IG92ZXJmbG93LWhpZGRlbiBibG9nLWltYWdlIHJvdW5kZWQteGwgYmxvZy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlICBpbWFnZT17cG9zdC5hdHRyaWJ1dGVzLmltYWdlfSBpbWFnZUNsYXNzPXtcInctZnVsbFwifSAga2V5PXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx1bCBjbGFzcz1cImZsZXggbWItNSBtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBvc3RlZCBCeTogPGEgaHJlZj1cIiBcIj57cG9zdC5hdHRyaWJ1dGVzLmF1dGhvcj8ubmFtZX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtbC0xMlwiPntwb3N0LmF0dHJpYnV0ZXMucHVibGlzaGVkQXR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi02IHRleHQtMnhsIGxlYWRpbmctc251ZyB0ZXh0LWdyYXktOTAwIGJsb2ctdGl0bGVcIiAgPntwb3N0LmF0dHJpYnV0ZXMudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0ZXh0LXRoZW1lLWNvbG9yLTJcIiBocmVmPXtcIi9hcnRpY2xlcy9cIiArIHBvc3QuYXR0cmlidXRlcy5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGkgdGnhur90XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtbC0yIGxuaSBsbmktY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvc2VjdGlvbj5cclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGlubmVkQmxvZ1xyXG5cclxuIiwiIFxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xyXG5cclxuY29uc3QgQ3VzdG9tSW1hZ2UgPSAoeyBpbWFnZSwgc3R5bGUsIGltYWdlQ2xhc3MgPSBudWxsIH0pID0+IHtcclxuXHJcbiAgLy8gaWYoIWltYWdlKSB7XHJcbiAgLy8gICByZXR1cm4gICAoXHJcbiAgLy8gICAgICA8aW1nIGNsYXNzPVwiYmxhbmtcIiBzcmM9XCJibGFua1wiIGFsdD1cImJsYW5rIGltYWdlXCIgLz4pXHJcbiAgIFxyXG4gIC8vIH1cclxuXHJcbiAgaWYoaW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXMgPT0gbnVsbCAmJiBpbWFnZT8uYXR0cmlidXRlcyA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gICggXHJcbiAgICAgIDxpbWcgY2xhc3M9XCJibGFua1wiIHNyYz1cImJsYW5rXCIgYWx0PVwiYmxhbmsgaW1hZ2VcIiAvPilcclxuICAgXHJcbiAgfVxyXG5cclxuICBpZihpbWFnZT8uYXR0cmlidXRlcz8udXJsKSB7XHJcbiAgICBjb25zdCB7IHVybCwgYWx0ZXJuYXRpdmVUZXh0LCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5hdHRyaWJ1dGVzO1xyXG4gICAgY29uc3Qgc3JjVXJsID0gZ2V0U3RyYXBpVVJMKCkgKyB1cmw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGltZyBjbGFzcz17aW1hZ2VDbGFzcyA/PyBcIlwifSBzcmM9e3NyY1VybH0gYWx0PVwiTG9nb1wiIC8+XHJcbiAgICApIDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyB1cmwsIGFsdGVybmF0aXZlVGV4dCwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzO1xyXG4gICAgY29uc3Qgc3JjVXJsID0gZ2V0U3RyYXBpVVJMKCkgKyB1cmw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGltZyBjbGFzcz17aW1hZ2VDbGFzcyA/PyBcIlwifSBzcmM9e3NyY1VybH0gYWx0PVwiTG9nb1wiIC8+XHJcbiAgICApO1xyXG4gIH1cclxuIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21JbWFnZVxyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXZcIlxuXG5jb25zdCBMYXlvdXRDb21tZXJjZSA9ICh7IGNoaWxkcmVuLCBjYXRlZ29yaWVzLCBsYXlvdXQsIGNvbG9yLCBwYWdlIH0pID0+IHtcbiAgICB2YXIgdGV4dENvbG9yID0gJ3RleHQtd2hpdGUnIDtcbiAgICBpZihjb2xvcikge1xuICAgICAgICB0ZXh0Q29sb3IgPSBjb2xvclxuICAgIH0gIFxuICAgIHJldHVybihcbiAgPD5cbiAgICA8ZGl2IGNsYXNzPVwiaGlkZGVuIHByZWxvYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXItcm90YXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5dHAtc3Bpbm5lci1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieXRwLXNwaW5uZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInl0cC1zcGlubmVyLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1hcmVhIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IFwibXItNCBuYXZiYXItYnJhbmQgXCIgKyB0ZXh0Q29sb3J9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17aG9tZXBhZ2UuYXR0cmlidXRlcy5Mb2dvSW1hZ2UuYXR0cmlidXRlcy51cmwgfSBhbHQ9XCJMb2dvXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBpbWFnZUNsYXNzPXtcIlwifSBpbWFnZT17bGF5b3V0LkxvZ29JbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtsYXlvdXQuU2l0ZUluZm8uU2l0ZU5hbWUgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJsb2NrIG5hdmJhci10b2dnbGVyIGZvY3VzOm91dGxpbmUtbm9uZSBsZzpoaWRkZW5cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck9uZVwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJPbmVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBsZWZ0LTAgei0yMCBoaWRkZW4gdy1mdWxsIHB4LTUgcHktMyBkdXJhdGlvbi0zMDAgYmctd2hpdGUgc2hhZG93IGxnOnctYXV0byBjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UgbGc6YmxvY2sgdG9wLTEwMCBtdC1mdWxsIGxnOnN0YXRpYyBsZzpiZy10cmFuc3BhcmVudCBsZzpzaGFkb3ctbm9uZVwiIGlkPVwibmF2YmFyT25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOYXYgY29sb3I9e3RleHRDb2xvcn0gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgcmlnaHQtMCBoaWRkZW4gbXQtMiBtci0yNCBuYXZiYXItYnRuIHNtOmlubGluZS1ibG9jayBsZzptdC0wIGxnOnN0YXRpYyBsZzptci0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWFpbi1idG4gZ3JhZGllbnQtYnRuXCIgZGF0YS1zY3JvbGwtbmF2PVwiMFwiIGhyZWY9e2hvbWVwYWdlLmF0dHJpYnV0ZXMuSGVybz8uUXVpY2tMaW5rPy5IcmVmfSByZWw9XCJub2ZvbGxvd1wiPntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVwYWdlLmF0dHJpYnV0ZXMuSGVybz8uUXVpY2tMaW5rPy5UaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hdj4gIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICA8L2Rpdj4gIFxuICAgIDwvaGVhZGVyPlxuXG4gICAgXG4gICAge2NoaWxkcmVufVxuICAgICBcbiAgICA8Rm9vdGVyIGZvb3Rlcj17cGFnZT8uYXR0cmlidXRlcz8uRm9vdGVyfSBzaXRlSW5mbz17bGF5b3V0LlNpdGVJbmZvfSAvPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJiYWNrLXRvLXRvcFwiPjxpIGNsYXNzPVwibG5pIGxuaS1jaGV2cm9uLXVwXCI+PC9pPjwvYT5cbiAgPC8+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRDb21tZXJjZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgTmF2ID0gKHsgY2F0ZWdvcmllcywgY29sb3IgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuICB2YXIgdGV4dENvbG9yICA9ICd0ZXh0LXdoaXRlJztcbiAgaWYoY29sb3IpIHtcbiAgICAgIHRleHRDb2xvciA9IGNvbG9yXG4gIH0gXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bCBpZD1cIm5hdlwiIGNsYXNzPXsgXCJpdGVtcy1jZW50ZXIgY29udGVudC1zdGFydCBtci1hdXRvIGxnOmp1c3RpZnktZW5kIG5hdmJhci1uYXYgbGc6ZmxleCBcIiArIHRleHRDb2xvciB9PlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wYWdlcy8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1zY3JvbGxcIiBocmVmPXtgL3BhZ2VzLyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgPGIgPiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lID8/IGNhdGVnb3J5LmF0dHJpYnV0ZXMuTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuLi9wYWdlcy9fYXBwXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG5cbmNvbnN0IFBhZ2VTZW8gPSAoeyBzZW8gfSkgPT4ge1xuICBjb25zdCB7IGRlZmF1bHRTZW8sIHNpdGVOYW1lIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXG4gIGNvbnN0IHNlb1dpdGhEZWZhdWx0cyA9IHtcbiAgICAuLi5kZWZhdWx0U2VvLFxuICAgIC4uLnNlbyxcbiAgfVxuICBjb25zdCBmdWxsU2VvID0ge1xuICAgIC4uLnNlb1dpdGhEZWZhdWx0cyxcbiAgICAvLyBBZGQgdGl0bGUgc3VmZml4XG4gICAgbWV0YVRpdGxlOiBgJHtzZW9XaXRoRGVmYXVsdHMubWV0YVRpdGxlfSB8ICR7c2l0ZU5hbWV9YCxcbiAgICAvLyBHZXQgZnVsbCBpbWFnZSBVUkxcbiAgICBzaGFyZUltYWdlOiBnZXRTdHJhcGlNZWRpYShzZW9XaXRoRGVmYXVsdHMuc2hhcmVJbWFnZSksXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAge2Z1bGxTZW8ubWV0YVRpdGxlICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8dGl0bGU+e2Z1bGxTZW8ubWV0YVRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YVRpdGxlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17ZnVsbFNlby5tZXRhVGl0bGV9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmdWxsU2VvLnNoYXJlSW1hZ2UgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtmdWxsU2VvLnNoYXJlSW1hZ2V9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtmdWxsU2VvLnNoYXJlSW1hZ2V9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7ZnVsbFNlby5hcnRpY2xlICYmIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz59XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgIDwvSGVhZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlU2VvXG4iLCJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG4gXHJcblxyXG5jb25zdCBTdWJjcmliZUJveCA9ICh7IHN1YmNyaWJlQm94IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cInB4LTYgcHQtMTAgcGItMjAgbWItMTIgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cteGwgbWQ6cHgtMTIgc3Vic2NyaWJlLWFyZWEgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzptdC0xMiBzdWJzY3JpYmUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBzbTp0ZXh0LTJ4bCBzdWJzY3JpYmUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJjcmliZUJveD8uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtzdWJjcmliZUJveD8uRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249IHsgc3ViY3JpYmVCb3g/LlBPU1RfVVJMIH0gY2xhc3M9XCJyZWxhdGl2ZSBmb2N1czpvdXRsaW5lLW5vbmUgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInR5cGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsL3Bob25lIG51bWJlclwiIGNsYXNzPVwidy1mdWxsIHB5LTQgcGwtNiBwci00MCBkdXJhdGlvbi0zMDAgYm9yZGVyLTIgcm91bmRlZCBmb2N1czpib3JkZXItdGhlbWUtY29sb3IgZm9jdXM6b3V0bGluZS1ub25lXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgc3ViY3JpYmVCb3g/LlBPU1RfVVJMIH0gY2xhc3M9XCJtYWluLWJ0biBncmFkaWVudC1idG5cIj4geyBzdWJjcmliZUJveD8uU3VibWl0TGFiZWwgfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ViY3JpYmVCb3hcclxuIiwiaW1wb3J0IHFzIGZyb20gXCJxc1wiXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgZnVsbCBTdHJhcGkgVVJMIGZyb20gcGF0aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBVUkxcclxuICogQHJldHVybnMge3N0cmluZ30gRnVsbCBTdHJhcGkgVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpVVJMKHBhdGggPSBcIlwiKSB7XHJcbiAgcmV0dXJuIGAke1xyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIlxyXG4gIH0ke3BhdGh9YFxyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zT2JqZWN0IFVSTCBwYXJhbXMgb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcclxuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH1cclxuXHJcbiAgLy8gdXJsUGFyYW1zT2JqZWN0LmxvY2FsZSA9IFwidmlcIjtcclxuICBcclxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7Z2V0U3RyYXBpVVJMKFxyXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXHJcbiAgKX1gXHJcblxyXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIG1lcmdlZE9wdGlvbnMpXHJcblxyXG4gIC8vIEhhbmRsZSByZXNwb25zZVxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuIFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdENhdGFsb2dzKCkge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9wcm9kdWN0LWNhdGVnb3JpZXNcIik7XHJcbiAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0YWxvZyhzbHVnLCB1cmxQYXJhbXNPYmplY3QgPSB7fSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoYC9wcm9kdWN0LWNhdGVnb3JpZXM/c2x1Zz0ke3NsdWd9JiR7cXVlcnlTdHJpbmcgPyBgJHtxdWVyeVN0cmluZ31gIDogXCJcIn1gKTtcclxuICByZXR1cm4gY2F0ZWdvcmllcz8uZGF0YVswXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmV0Y2hBUEkoXCIvcHJvZHVjdHNcIik7XHJcbiAgcmV0dXJuIHByb2R1Y3RzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdChzbHVnLCB1cmxQYXJhbXNPYmplY3QgPSB7fSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoQVBJKGAvcHJvZHVjdHM/c2x1Zz0ke3NsdWd9JiR7cXVlcnlTdHJpbmcgPyBgJHtxdWVyeVN0cmluZ31gIDogXCJcIn1gKTtcclxuICByZXR1cm4gcHJvZHVjdHM/LmRhdGFbMF07XHJcbn1cclxuXHJcbmV4cG9ydCAgIGZ1bmN0aW9uICBnZXRQcm9kdWN0VGh1bWIoaWQsIHVybFBhcmFtc09iamVjdCA9IHt9KSB7XHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkodXJsUGFyYW1zT2JqZWN0KVxyXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtnZXRTdHJhcGlVUkwoXHJcbiAgICBgL2FwaS9wcm9kdWN0cy8ke2lkfT8ke3F1ZXJ5U3RyaW5nID8gYCR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxyXG4gICl9YFxyXG4gXHJcbiAgcmV0dXJuIHVzZVNXUihcclxuICAgIHJlcXVlc3RVcmwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0ICAgZnVuY3Rpb24gIGdldFByb2R1Y3REZXRhaWwoc2x1ZywgdXJsUGFyYW1zT2JqZWN0ID0ge30pIHtcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcclxuICAgIGAvYXBpL3Byb2R1Y3RzLz9maWx0ZXJzW3NsdWddPSR7c2x1Z30mJHtxdWVyeVN0cmluZyA/IGAke3F1ZXJ5U3RyaW5nfWAgOiBcIlwifWBcclxuICApfWBcclxuICAgIFxyXG4gIGNvbnNvbGUubG9nKHJlcXVlc3RVcmwpO1xyXG5cclxuICByZXR1cm4gdXNlU1dSKFxyXG4gICAgcmVxdWVzdFVybCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG59XHJcbiBcclxuXHJcblxyXG5cclxuXHJcbiBcclxuIiwiaW1wb3J0IFBpbm5lZEJsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9waW5uZWQtYmxvZ1wiXHJcbmltcG9ydCBBY3Rpdml0eSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2FjdGl2aXR5XCJcclxuaW1wb3J0IEJyYW5kIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvYnJhbmRcIlxyXG5pbXBvcnQgRmVhdHVyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2ZlYXR1cmVcIlxyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIlxyXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsICAgLi4uYXJncykge1xyXG4gICAgIFxyXG4gICAgc3dpdGNoIChjb21wb25lbnROYW1lKVxyXG4gICAgIHtcclxuICAgICAgICAgY2FzZSBcIlBpbm5lZEJsb2dcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPFBpbm5lZEJsb2cgZGF0YT17YXJnc1swXX0gYXJnczE9e2FyZ3NbMV19IC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkFjdGl2aXR5XCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBY3Rpdml0eSBhY3Rpdml0eT17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkJyYW5kXCI6IHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCcmFuZCBicmFuZD17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgY2FzZSBcIkZlYXR1cmVcIjogcmV0dXJuIChcclxuICAgICAgICAgICAgPEZlYXR1cmUgZmVhdHVyZT17YXJnc1swXX0gIC8+XHJcbiAgICAgICAgIClcclxuICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgKVxyXG4gICAgIH1cclxuICB9XHJcbiBcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVyRHluYW1pY0NvbXBvbmVudChzb3VyY2UsICAgLi4uYXJncykge1xyXG4gICBcclxuICAgdmFyIGNvbnRlbnRCdWlsZGVyID0gPD48Lz5cclxuXHJcbiAgIGNvbnNvbGUubG9nKGNvbnRlbnRCdWlsZGVyKTtcclxuICAgXHJcbiAgIHNvdXJjZS5mb3JFYWNoKGR5bmFtaWNDb250ZW50ID0+IHtcclxuICAgICAgY29udGVudEJ1aWxkZXIgKz0gcmVzb2x2ZXJEeW5hbWljRXh0cmFjdChkeW5hbWljQ29udGVudClcclxuICAgfSk7XHJcbiAgIGNvbnNvbGUubG9nKFwiY29udGVudEJ1aWxkZXJcIik7XHJcbiAgIGNvbnNvbGUubG9nKGNvbnRlbnRCdWlsZGVyKTtcclxuXHJcbiAgIHJldHVybiBjb250ZW50QnVpbGRlcjtcclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtSW1hZ2VVcmlQZWZvcm0odXJpLCBjaGlsZHJlbiwgdGl0bGUsIGFsdCkge1xyXG4gICAgcmV0dXJuIHVyaS5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmkpIDogdXJpO1xyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiByZXNvbHZlckR5bmFtaWNFeHRyYWN0KGR5bmFtaWNDb250ZW50KSB7IFxyXG4gXHJcbiAgIGlmICgoZHluYW1pY0NvbnRlbnQuX19jb21wb25lbnQpLmluZGV4T2YoJ2R5bmFtaWNzLnBhZ2UtY29udGVudCcpICE9PSAtMSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBrZXk9e2R5bmFtaWNDb250ZW50LklkfSBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMi8zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTEwIHRleHQtY2VudGVyIHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgIHtkeW5hbWljQ29udGVudC5OYW1lfVxyXG4gICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWF1dG8gbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPGRpdiBjbGFzcz1cIiBwdC0xMiBwYi0xMCByb3dcIj4gXHJcbiAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtSW1hZ2VVcmk9e3RyYW5zZm9ybUltYWdlVXJpUGVmb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPC9kaXY+ICBcclxuICAgKTtcclxuXHJcbiAgIGlmICgoZHluYW1pY0NvbnRlbnQuX19jb21wb25lbnQpLmluZGV4T2YoJ2R5bmFtaWNzLnBhZ2UtaW1hZ2UtY29udGVudCcpICE9PSAtMSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwdC0xMiBwYi0xMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHBiLTggbXQtMTIgdmlkZW8tY29udGVudCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBqdXN0aWZ5LWNlbnRlciBtci02IHJvdW5kZWQtbGcgc2hhZG93LW1kIHZpZGVvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1pbWFnZSBiZy1saWdodC1ibHVlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIGltYWdlQ2xhc3M9e1wiaW1hZ2UtZml0XCJ9ICBpbWFnZT17ZHluYW1pY0NvbnRlbnQ/LkltYWdlfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBiZy1ibHVlLTkwMCBiZy1vcGFjaXR5LTI1IHJvdW5kZWQtbGcgdmlkZW8taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXI0NFJLV3lmY0Z3XCIgY2xhc3M9XCJ2aWRlby1wb3B1cFwiPjxpIGNsYXNzPVwibG5pIGxuaS1wbGF5XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTAgbXQtMTIgY291bnRlci13cmFwcGVyIGxnOnBsLTE2IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjhzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi04IHNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZHluYW1pY0NvbnRlbnQuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkeW5hbWljQ29udGVudC5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gIDwvZGl2PiAgXHJcbiAgICk7XHJcblxyXG4gICByZXR1cm4gPD48Lz5cclxuIH0iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcbiAgY29uc3QgeyB1cmwgfSA9IG1lZGlhLmRhdGEuYXR0cmlidXRlc1xuICBjb25zdCBpbWFnZVVybCA9IHVybC5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmwpIDogdXJsXG4gIHJldHVybiBpbWFnZVVybFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7ZXhwb3J0cy5OZXh0V2ViVml0YWxzTWV0cmljPV91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe0NvbXBvbmVudCxjdHh9KXtjb25zdCBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHtyZW5kZXIoKXtjb25zdHtDb21wb25lbnQscGFnZVByb3BzfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxwYWdlUHJvcHMpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy90YWlsd2luZC5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zbGljay5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9hbmltYXRlLmNzc1wiXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL2ljb24uY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvbWFnbmlmaWMtcG9wdXAuY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvdGlueS1zbGlkZXIuY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvZ2xpZ2h0Ym94Lm1pbi5jc3NcIiBcblxuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcbiBcbi8vIFN0b3JlIFN0cmFwaSBHbG9iYWwgb2JqZWN0IGluIGNvbnRleHRcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgZ2xvYmFsIH0gPSBwYWdlUHJvcHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICBocmVmPXtnZXRTdHJhcGlNZWRpYShnbG9iYWw/LmF0dHJpYnV0ZXM/LmZhdmljb24pfVxuICAgICAgLz5cbiAgICAgIFxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL3ZlbmRvci9qcXVlcnktMy41LjEtbWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvanMvdmVuZG9yL21vZGVybml6ci0zLjcuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy9qcXVlcnkuZWFzaW5nLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL3Njcm9sbGluZy1uYXYuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy9zbGljay5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy93b3cubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvanMvcGFydGljbGVzLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL21haW4uanNcIj48L3NjcmlwdD5cblxuICAgICA8L0hlYWQ+XG4gICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtnbG9iYWw/LmF0dHJpYnV0ZXN9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG4gIC8vIEZldGNoIGdsb2JhbCBzaXRlIHNldHRpbmdzIGZyb20gU3RyYXBpXG4gIGNvbnN0IGdsb2JhbFJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2dsb2JhbFwiLCB7XG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIGZhdmljb246IFwiKlwiLFxuICAgICAgZGVmYXVsdFNlbzoge1xuICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgbGF5b3V0SW5mbyA9IGF3YWl0IGZldGNoQVBJKFwiL2hvbWVwYWdlXCIsICB7XG4gICAgcG9wdWxhdGU6IFxuICAgIHtcbiAgICAgIHNlbzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEZvb3RlcjogXG4gICAgICB7IFxuICAgICAgICAgIHBvcHVsYXRlOiAgeyAgICAgICAgXG4gICAgICAgICAgICBTdWJjcmliZUJveDogIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICBIeXBlckxpbmsgIDogIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICBCZ0ltYWdlOiAgICAgIHsgcG9wdWxhdGU6IFwiKlwiIH0gfVxuICAgICAgfSxcbiAgICAgIFNpdGVJbmZvOiAgICAgICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEhlYWRlckJnSW1hZ2U6ICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIEhlcm9DZW50cmFsSW1hZ2U6ICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIExvZ29JbWFnZTogICAgICAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICB9LFxuICB9KTsgIFxuIFxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IFxuICAgICAgICBmaWx0ZXJzOiB7XG4gICAgICAgICAgSXNUb3BNZW51OiB7XG4gICAgICAgICAgICBcIlskZXFdXCIgOiBcInRydWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgICAgIFBhZ2VIZXJvOiAgICAgeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgICAgICAgIFBhZ2VCb2R5IDogICAgeyBcbiAgICAgICAgICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgICAgICAgICBJbWFnZSA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgIH19KTtcblxuICBcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhLCBsYXlvdXRJbmZvOiAgbGF5b3V0SW5mby5kYXRhLmF0dHJpYnV0ZXMsIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXMuZGF0YX0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9DYXJvdXNlbFwiXHJcbmltcG9ydCBDb21tZXJjZUhlcm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbWVyY2UvY29tbWVyY2UtaGVyb1wiXHJcbmltcG9ydCBQcm9kdWN0R3JpZFRodW1iIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1lcmNlL3Byb2R1Y3QtZ3JpZFwiXHJcbmltcG9ydCBQcm9kdWN0R3JpZDJUaHVtYiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9Qcm9kdWN0LWdyaWQtMlwiXHJcbmltcG9ydCBQcm9kdWN0R3JpZDNUaHVtYiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9Qcm9kdWN0LWdyaWQtM1wiXHJcbmltcG9ydCBMYXlvdXRDb21tZXJjZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQtY29tbWVyY2VcIlxyXG5pbXBvcnQgUGFnZVNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlLXNlb1wiXHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIlxyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsRnVsbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tZXJjZS9wcm9kdWN0LWRldGFpbC1mdWxsXCJcclxuTW9kYWwuc2V0QXBwRWxlbWVudChcIiNfX25leHRcIik7XHJcbnZhciBzZWxlY3RpbmdQcm9kdWN0SXRlbSA9IHt9O1xyXG5cclxuY29uc3QgSG9tZSA9ICh7Y2F0YWxvZywgY2F0YWxvZ3BhZ2UsIGxheW91dEluZm8gfSkgPT4ge1xyXG4gICAgIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0Q29tbWVyY2UgY2F0ZWdvcmllcz17Y2F0YWxvZ30gbGF5b3V0PXtsYXlvdXRJbmZvfSBwYWdlPXtjYXRhbG9ncGFnZX0+XHJcbiAgICAgICAgPFBhZ2VTZW8gc2VvPXtjYXRhbG9ncGFnZS5hdHRyaWJ1dGVzLnNlb30gLz5cclxuICAgICAgICA8Q29tbWVyY2VIZXJvIGhlcm89e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuSGVyb30gcGFnZT17Y2F0YWxvZ3BhZ2V9Lz4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPlxyXG4gICAgICAgIDxQcm9kdWN0R3JpZFRodW1iIGNhdGVnb3JpZXM9e2NhdGFsb2d9IGZlYXR1cmVQcm9kdWN0V3JhcD17Y2F0YWxvZ3BhZ2UuYXR0cmlidXRlcy5GZWF0dXJlUHJvZHVjdFdyYXB9IC8+ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiAgY2xhc3M9XCJtYXJnaW4tYm94LTF4XCIgLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoY2F0YWxvZ3BhZ2UuYXR0cmlidXRlcy5TYWxlT2ZmUHJvZHVjdFdyYXAgJiYgQXJyYXkuZnJvbShjYXRhbG9ncGFnZS5hdHRyaWJ1dGVzLlNhbGVPZmZQcm9kdWN0V3JhcCkubGVuZ3RoICE9IDApID8gXHJcbiAgICAgICAgICAoPGRpdj48UHJvZHVjdEdyaWQzVGh1bWIga2V5PXtcIlNhbGVPZmZQcm9kdWN0V3JhcFwifSBuYW1lPXtcIlNhbGVPZmZQcm9kdWN0V3JhcFwifSBjYXRlZ29yaWVzPXtjYXRhbG9nfSBmZWF0dXJlUHJvZHVjdFdyYXA9e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuU2FsZU9mZlByb2R1Y3RXcmFwfSBjb2xDbGFzcz1cInctZnVsbCBsZzp3LTEvM1wiIC8+IDxkaXYgIGNsYXNzPVwibWFyZ2luLWJveC0xeFwiIC8+PGhyLz48ZGl2ICBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPjwvZGl2PiApIDogKDw+PC8+KVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIChjYXRhbG9ncGFnZS5hdHRyaWJ1dGVzLk1haW5Qcm9kdWN0V3JhcCAmJiBBcnJheS5mcm9tKGNhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuTWFpblByb2R1Y3RXcmFwKS5sZW5ndGggIT0gMCkgPyBcclxuICAgICAgICAgICg8ZGl2PjxQcm9kdWN0R3JpZDJUaHVtYiAga2V5PXtcIk1haW5Qcm9kdWN0V3JhcFwifSBuYW1lPXtcIk1haW5Qcm9kdWN0V3JhcFwifSBjYXRlZ29yaWVzPXtjYXRhbG9nfSBmZWF0dXJlUHJvZHVjdFdyYXA9e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuTWFpblByb2R1Y3RXcmFwfSBjb2xDbGFzcz1cInctZnVsbCBsZzp3LTEvM1wiIC8+IDxkaXYgY2xhc3M9XCJtYXJnaW4tYm94LTF4XCIgLz48aHIvPjxkaXYgIGNsYXNzPVwibWFyZ2luLWJveC0xeFwiIC8+PC9kaXY+ICkgOiAoPD48Lz4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoY2F0YWxvZ3BhZ2UuYXR0cmlidXRlcy5SZWNvbW1lbmRQcm9kdWN0V3JhcCAmJiBBcnJheS5mcm9tKGNhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuUmVjb21tZW5kUHJvZHVjdFdyYXApLmxlbmd0aCAhPSAwKSA/IFxyXG4gICAgICAgICAgKDxkaXY+PFByb2R1Y3RHcmlkMlRodW1iICBrZXk9e1wiUmVjb21tZW5kUHJvZHVjdFdyYXBcIn0gbmFtZT17XCJSZWNvbW1lbmRQcm9kdWN0V3JhcFwifSBjYXRlZ29yaWVzPXtjYXRhbG9nfSBmZWF0dXJlUHJvZHVjdFdyYXA9e2NhdGFsb2dwYWdlLmF0dHJpYnV0ZXMuUmVjb21tZW5kUHJvZHVjdFdyYXB9IGNvbENsYXNzPVwidy1mdWxsIGxnOnctMS8zXCIgLz4gPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPjxoci8+PGRpdiAgY2xhc3M9XCJtYXJnaW4tYm94LTF4XCIgLz48L2Rpdj4gKSA6ICg8PjwvPilcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdpbi1ib3gtMXhcIiAvPlxyXG4gICAgICAgIDxNb2RhbCBpc09wZW49eyEhcm91dGVyLnF1ZXJ5LnByb2R1Y3R9IG9uUmVxdWVzdENsb3NlPXsoKSA9PiByb3V0ZXIucmVwbGFjZShcIi9wYWdlcy9jYXRhbG9nXCIpfSA+XHJcbiAgICAgICAgICA8UHJvZHVjdERldGFpbEZ1bGwgcHJvZHVjdFRodW1iPXtzZWxlY3RpbmdQcm9kdWN0SXRlbX0gLz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvTGF5b3V0Q29tbWVyY2U+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcclxuICBjb25zdCBbY2F0YWxvZ1JlcywgY2F0YWxvZ3BhZ2VSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZmV0Y2hBUEkoXCIvcHJvZHVjdC1jYXRlZ29yaWVzXCIsICB7XHJcbiAgICAgICAgcG9wdWxhdGU6IHtcclxuICAgICAgICAgIEZlYXR1cmVQcm9kdWN0czogeyBwb3B1bGF0ZTogXCIqXCIgfSxcclxuICAgIH19KSwgXHJcbiAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvY2F0YWxvZy1wYWdlP3BvcHVsYXRlW0ZlYXR1cmVQcm9kdWN0V3JhcF1bcG9wdWxhdGVdW0l0ZW1zXVtwb3B1bGF0ZV09KlxyXG4gICAgZmV0Y2hBUEkoXCIvY2F0YWxvZy1wYWdlXCIsICB7XHJcbiAgICAgIHBvcHVsYXRlOiB7XHJcbiAgICAgICAgcG9wdWxhdGU6IFwiKlwiICxcclxuICAgICAgICBIZXJvOiB7IHBvcHVsYXRlOiBcIipcIiAsSW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sQmdJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSx9LFxyXG4gICAgICAgIEZvb3RlcjogICB7IHBvcHVsYXRlOiAgeyAgICAgICAgU3ViY3JpYmVCb3g6IHsgcG9wdWxhdGU6IFwiKlwiIH0sSHlwZXJMaW5rICA6IHsgcG9wdWxhdGU6IFwiKlwiIH0sQmdJbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSB9fSxcclxuICAgICAgICAgQ2Fyb3VzZWxHYWxsZXJ5IDogeyAgcG9wdWxhdGU6IFwiKlwiIH0sXHJcbiAgICAgICAgIEZlYXR1cmVQcm9kdWN0V3JhcCAgOiAgICAgeyBwb3B1bGF0ZToge0l0ZW1zOiB7IHBvcHVsYXRlOiBcIipcIiB9fX0sIFxyXG4gICAgICAgICBNYWluUHJvZHVjdFdyYXAgICA6ICAgICB7IHBvcHVsYXRlOiB7SXRlbXM6IHsgcG9wdWxhdGU6IFwiKlwiIH19fSxcclxuICAgICAgICAgUmVjb21tZW5kUHJvZHVjdFdyYXAgIDogICAgIHsgcG9wdWxhdGU6IHtJdGVtczogeyBwb3B1bGF0ZTogXCIqXCIgfX19LFxyXG4gICAgICAgICBTYWxlT2ZmUHJvZHVjdFdyYXAgIDogICAgIHsgcG9wdWxhdGU6IHtJdGVtczogeyBwb3B1bGF0ZTogXCIqXCIgfSwgQmdJbWFnZTogIHsgcG9wdWxhdGU6IFwiKlwiIH19fSxcclxuICAgICAgfX0pLCBcclxuICBdKTtcclxuICAgIFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjYXRhbG9nOiBjYXRhbG9nUmVzLmRhdGEsXHJcbiAgICAgIGNhdGFsb2dwYWdlOiBjYXRhbG9ncGFnZVJlcy5kYXRhLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==