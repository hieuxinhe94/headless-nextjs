(function() {
var exports = {};
exports.id = 905;
exports.ids = [905,888];
exports.modules = {

/***/ 7034:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(883);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1422);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5030);
/* harmony import */ var _components_layout_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5985);
/* harmony import */ var _components_page_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(164);
/* harmony import */ var _components_commerce_commerce_hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1001);











const ProductPage = ({
  product,
  layoutInfo,
  catalogpage
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  if (router.isFallback) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      children: "Loading product..."
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
        children: [product === null || product === void 0 ? void 0 : product.attributes.Title, " product"]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "rounded-t-lg pt-2 pb-2 m-auto h-40 w-40",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        image: product === null || product === void 0 ? void 0 : product.attributes.Image
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "w-full p-5 flex flex-col justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
          className: "mt-1 font-semibold text-lg leading-tight truncate text-gray-700",
          children: [product.title, " - $", product === null || product === void 0 ? void 0 : product.attributes.Price]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "mt-1 text-gray-600",
          children: product === null || product === void 0 ? void 0 : product.attributes.ShortDescription
        })]
      }), product.status === "published" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow",
        "data-item-id": product.id,
        "data-item-price": product.price,
        "data-item-url": router.asPath,
        "data-item-description": product.description,
        "data-item-image": (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__/* .getStrapiMedia */ .$)(product.image.formats.thumbnail.url),
        "data-item-name": product.title,
        "v-bind": "customFields",
        children: "Add to cart"
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center mr-10 mb-1",
        "v-else": true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex",
          role: "alert",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3",
            children: "Coming soon..."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "font-semibold mr-2 text-left flex-auto",
            children: "This article is not available yet."
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProductPage);
async function getStaticProps({
  params
}) {
  const product = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .getProduct */ .wv)(params.slug, {
    populate: {
      Image: {
        populate: "*"
      }
    }
  });
  return {
    props: {
      product
    }
  };
}
async function getStaticPaths() {
  const products = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .getProducts */ .Xp)();
  return {
    paths: products.data.map(_product => {
      return {
        params: {
          slug: _product.attributes.slug
        }
      };
    }),
    fallback: false
  };
}

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 6850:
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3703:
/***/ (function(module) {

"use strict";
module.exports = require("react-markdown");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [544,664,672,12,164,38], function() { return __webpack_exec__(7034); });
module.exports = __webpack_exports__;

})();