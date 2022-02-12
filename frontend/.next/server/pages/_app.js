(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; }
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */

function getStrapiURL(path = "") {
  return `${"https://sixdong-cms-icb9x.ondigitalocean.app" || 0}${path}`;
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
  }, options);

  urlParamsObject.locale = "en"; // Build request URL

  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;
  console.error(requestUrl); // Trigger API call

  const response = await fetch(requestUrl, mergedOptions); // Handle response

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();
  return data;
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");


var _jsxFileName = "D:\\Work\\Transfomation\\landingsite\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // Store Strapi Global object in context

const GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_9__.createContext)({});

const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    global
  } = pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,_lib_media__WEBPACK_IMPORTED_MODULE_11__.getStrapiMedia)(global.attributes.favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/vendor/jquery-3.5.1-min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/vendor/modernizr-3.7.1.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/jquery.easing.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/scrolling-nav.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/slick.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/wow.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/particles.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "/js/main.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
      value: global.attributes,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }, undefined)]
  }, void 0, true);
};

MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx); // Fetch global site settings from Strapi

  const globalRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_10__.fetchAPI)("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*"
      }
    }
  });
  const layoutInfo = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_10__.fetchAPI)("/homepage", {
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
  const categories = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_10__.fetchAPI)("/categories", {
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
  });
  console.log("categories");
  console.log(categories.data[0]); // Pass the data to our page via props

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

/***/ "./assets/css/animate.css":
/*!********************************!*\
  !*** ./assets/css/animate.css ***!
  \********************************/
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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2xpYi9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbGliL21lZGlhLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZ2V0U3RyYXBpVVJMIiwicGF0aCIsInByb2Nlc3MiLCJmZXRjaEFQSSIsInVybFBhcmFtc09iamVjdCIsIm9wdGlvbnMiLCJtZXJnZWRPcHRpb25zIiwiaGVhZGVycyIsImxvY2FsZSIsInF1ZXJ5U3RyaW5nIiwicXMiLCJyZXF1ZXN0VXJsIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwic3RhdHVzVGV4dCIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJnZXRTdHJhcGlNZWRpYSIsIm1lZGlhIiwidXJsIiwiYXR0cmlidXRlcyIsImltYWdlVXJsIiwic3RhcnRzV2l0aCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiQXBwIiwiZGVmYXVsdCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJHbG9iYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk15QXBwIiwiZ2xvYmFsIiwiZmF2aWNvbiIsImFwcFByb3BzIiwiZ2xvYmFsUmVzIiwicG9wdWxhdGUiLCJkZWZhdWx0U2VvIiwibGF5b3V0SW5mbyIsInNlbyIsIkZvb3RlciIsIlN1YmNyaWJlQm94IiwiSHlwZXJMaW5rIiwiQmdJbWFnZSIsIlNpdGVJbmZvIiwiSGVhZGVyQmdJbWFnZSIsIkhlcm9DZW50cmFsSW1hZ2UiLCJMb2dvSW1hZ2UiLCJjYXRlZ29yaWVzIiwiUGFnZUhlcm8iLCJQYWdlQm9keSIsIkltYWdlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsdUdBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTQSxZQUFULENBQXNCQyxJQUFJLEdBQUcsRUFBN0IsRUFBaUM7QUFDdEMsU0FBUSxHQUNOQyw4Q0FBQSxJQUEwQyxDQUMzQyxHQUFFRCxJQUFLLEVBRlI7QUFHRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLGVBQWVFLFFBQWYsQ0FBd0JGLElBQXhCLEVBQThCRyxlQUFlLEdBQUcsRUFBaEQsRUFBb0RDLE9BQU8sR0FBRyxFQUE5RCxFQUFr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QTtBQURFO0FBRk47QUFEK0IsR0FBaEIsQ0FBakM7QUFVQXpDLFNBQU8sQ0FBQ3lELEdBQVIsQ0FBWSxZQUFaO0FBQ0F6RCxTQUFPLENBQUN5RCxHQUFSLENBQVlKLFVBQVUsQ0FBQzlDLElBQVgsQ0FBZ0IsQ0FBaEIsQ0FBWixFQTFDcUMsQ0EyQ3JDOztBQUNBLHlDQUFZZ0MsUUFBWjtBQUFzQmQsYUFBUyxFQUFFO0FBQUVZLFlBQU0sRUFBRUcsU0FBUyxDQUFDakMsSUFBcEI7QUFBMEJvQyxnQkFBVSxFQUFHQSxVQUFVLENBQUNwQyxJQUFYLENBQWdCSyxVQUF2RDtBQUFtRXlDLGdCQUFVLEVBQUVBLFVBQVUsQ0FBQzlDO0FBQTFGO0FBQWpDO0FBQ0QsQ0E3Q0Q7O0FBK0NBLCtEQUFlNkIsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBxcyBmcm9tIFwicXNcIlxyXG5cclxuLyoqXHJcbiAqIEdldCBmdWxsIFN0cmFwaSBVUkwgZnJvbSBwYXRoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIFVSTFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGdWxsIFN0cmFwaSBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9IFwiXCIpIHtcclxuICByZXR1cm4gYCR7XHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCBcImh0dHBzOi8vc2l4ZG9uZy1jbXMtaWNiOXgub25kaWdpdGFsb2NlYW4uYXBwXCJcclxuICB9JHtwYXRofWBcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciB0byBtYWtlIEdFVCByZXF1ZXN0cyB0byBTdHJhcGkgQVBJIGVuZHBvaW50c1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBBUEkgcm91dGVcclxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byBmZXRjaFxyXG4gKiBAcmV0dXJucyBQYXJzZWQgQVBJIGNhbGwgcmVzcG9uc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoLCB1cmxQYXJhbXNPYmplY3QgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgLy8gTWVyZ2UgZGVmYXVsdCBhbmQgdXNlciBvcHRpb25zXHJcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgLi4ub3B0aW9ucyxcclxuICB9XHJcblxyXG4gIHVybFBhcmFtc09iamVjdC5sb2NhbGUgPSBcImVuXCI7XHJcbiAgXHJcbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcclxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxyXG4gICl9YFxyXG5cclxuICBjb25zb2xlLmVycm9yKHJlcXVlc3RVcmwpXHJcblxyXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIG1lcmdlZE9wdGlvbnMpXHJcblxyXG4gIC8vIEhhbmRsZSByZXNwb25zZVxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuIFxyXG5cclxuXHJcblxyXG5cclxuIFxyXG4iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcbiAgY29uc3QgeyB1cmwgfSA9IG1lZGlhLmRhdGEuYXR0cmlidXRlc1xuICBjb25zdCBpbWFnZVVybCA9IHVybC5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmwpIDogdXJsXG4gIHJldHVybiBpbWFnZVVybFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7ZXhwb3J0cy5OZXh0V2ViVml0YWxzTWV0cmljPV91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe0NvbXBvbmVudCxjdHh9KXtjb25zdCBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHtyZW5kZXIoKXtjb25zdHtDb21wb25lbnQscGFnZVByb3BzfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxwYWdlUHJvcHMpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy90YWlsd2luZC5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zbGljay5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9hbmltYXRlLmNzc1wiXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL2ljb24uY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvbWFnbmlmaWMtcG9wdXAuY3NzXCJcblxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG4gXG4vLyBTdG9yZSBTdHJhcGkgR2xvYmFsIG9iamVjdCBpbiBjb250ZXh0XG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgaHJlZj17Z2V0U3RyYXBpTWVkaWEoZ2xvYmFsLmF0dHJpYnV0ZXMuZmF2aWNvbil9XG4gICAgICAvPlxuICAgICAgXG4gICAgPHNjcmlwdCBzcmM9XCIvanMvdmVuZG9yL2pxdWVyeS0zLjUuMS1taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy92ZW5kb3IvbW9kZXJuaXpyLTMuNy4xLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL2pxdWVyeS5lYXNpbmcubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvanMvc2Nyb2xsaW5nLW5hdi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL3NsaWNrLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL2pzL3dvdy5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9qcy9wYXJ0aWNsZXMubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvanMvbWFpbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgIDwvSGVhZD5cbiAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2dsb2JhbC5hdHRyaWJ1dGVzfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgLy8gQ2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAvLyBGZXRjaCBnbG9iYWwgc2l0ZSBzZXR0aW5ncyBmcm9tIFN0cmFwaVxuICBjb25zdCBnbG9iYWxSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9nbG9iYWxcIiwge1xuICAgIHBvcHVsYXRlOiB7XG4gICAgICBmYXZpY29uOiBcIipcIixcbiAgICAgIGRlZmF1bHRTZW86IHtcbiAgICAgICAgcG9wdWxhdGU6IFwiKlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IGxheW91dEluZm8gPSBhd2FpdCBmZXRjaEFQSShcIi9ob21lcGFnZVwiLCAge1xuICAgIHBvcHVsYXRlOiBcbiAgICB7XG4gICAgICBzZW86IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICBGb290ZXI6IFxuICAgICAgeyBcbiAgICAgICAgICBwb3B1bGF0ZTogIHsgICAgICAgIFxuICAgICAgICAgICAgU3ViY3JpYmVCb3g6ICB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICAgICAgSHlwZXJMaW5rICA6ICB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICAgICAgQmdJbWFnZTogICAgICB7IHBvcHVsYXRlOiBcIipcIiB9IH1cbiAgICAgIH0sXG4gICAgICBTaXRlSW5mbzogICAgICAgICAgIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICBIZWFkZXJCZ0ltYWdlOiAgICAgIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICBIZXJvQ2VudHJhbEltYWdlOiAgIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICBMb2dvSW1hZ2U6ICAgICAgICAgIHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgfSxcbiAgfSk7ICBcbiBcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBcbiAgICAgICAgICBwb3B1bGF0ZToge1xuICAgICAgICAgICAgUGFnZUhlcm86ICAgICB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICAgICAgUGFnZUJvZHkgOiAgICB7IFxuICAgICAgICAgICAgICBwb3B1bGF0ZToge1xuICAgICAgICAgICAgICAgIEltYWdlIDogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX0pO1xuXG4gIGNvbnNvbGUubG9nKFwiY2F0ZWdvcmllc1wiKVxuICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzLmRhdGFbMF0pXG4gIC8vIFBhc3MgdGhlIGRhdGEgdG8gb3VyIHBhZ2UgdmlhIHByb3BzXG4gIHJldHVybiB7IC4uLmFwcFByb3BzLCBwYWdlUHJvcHM6IHsgZ2xvYmFsOiBnbG9iYWxSZXMuZGF0YSwgbGF5b3V0SW5mbzogIGxheW91dEluZm8uZGF0YS5hdHRyaWJ1dGVzLCBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzLmRhdGF9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=