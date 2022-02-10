(function() {
var exports = {};
exports.id = 244;
exports.ids = [244,888];
exports.modules = {

/***/ 6227:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(7915);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/home/empty-box.js




const EmptyBox = ({
  message
}) => {
  if (!message) message = "The content is empty";
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    class: " pt-120",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "justify-center row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "pb-10 text-center section-title",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "m-auto line"
            }), message]
          })
        })
      })
    })
  });
};

/* harmony default export */ var empty_box = (EmptyBox);
;// CONCATENATED MODULE: ./components/home/article-hero.js






const PageHero = ({
  data,
  color
}) => {
  var _data$Image, _data$Image$data, _data$BgImage, _data$BgImage$data;

  if (!data) return /*#__PURE__*/jsx_runtime_.jsx(empty_box, {});
  var centralImage, centralBgImage;

  if ((_data$Image = data.Image) !== null && _data$Image !== void 0 && (_data$Image$data = _data$Image.data) !== null && _data$Image$data !== void 0 && _data$Image$data.attributes.url) {
    var _data$Image2, _data$Image2$data;

    centralImage = (0,api/* getStrapiURL */.p)() + ((_data$Image2 = data.Image) === null || _data$Image2 === void 0 ? void 0 : (_data$Image2$data = _data$Image2.data) === null || _data$Image2$data === void 0 ? void 0 : _data$Image2$data.attributes.url);
  }

  if ((_data$BgImage = data.BgImage) !== null && _data$BgImage !== void 0 && (_data$BgImage$data = _data$BgImage.data) !== null && _data$BgImage$data !== void 0 && _data$BgImage$data.attributes.url) {
    var _data$BgImage2, _data$BgImage2$data;

    centralBgImage = (0,api/* getStrapiURL */.p)() + ((_data$BgImage2 = data.BgImage) === null || _data$BgImage2 === void 0 ? void 0 : (_data$BgImage2$data = _data$BgImage2.data) === null || _data$BgImage2$data === void 0 ? void 0 : _data$BgImage2$data.attributes.url);
  }

  var textColor = 'text-white';

  if (color) {
    textColor = color;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: " ",
    class: "header-hero",
    style: {
      backgroundImage: `url(` + centralBgImage + `)`
    },
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "justify-center row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "pt-32 mb-12 text-center lg:pt-48 header-hero-content",
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              class: "text-4xl font-light leading-tight header-sub-title wow fadeInUp " + textColor,
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.2s",
              children: data === null || data === void 0 ? void 0 : data.CentralText
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "justify-center row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "text-center header-hero-image wow fadeIn",
            "data-wow-duration": "1.3s",
            "data-wow-delay": "1.4s",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "inline-block",
              src: centralImage,
              alt: "hero",
              style: {
                display: centralImage != null ? 'block' : 'none'
              }
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "justify-center row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "pt-16 mb-12 text-center lg:pt-16 header-hero-content",
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              class: "mb-3 text-4xl font-bold header-title wow fadeInUp " + textColor,
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.5s",
              children: data === null || data === void 0 ? void 0 : data.CentralTextDescription
            })
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "particles-1",
      class: "particles"
    })]
  });
};

/* harmony default export */ var article_hero = (PageHero);
// EXTERNAL MODULE: ./lib/component-resolver.js + 5 modules
var component_resolver = __webpack_require__(6721);
;// CONCATENATED MODULE: ./components/home/article-content.js




const PageBody = ({
  data
}) => {
  console.log("PageBody");
  console.log(data);
  if (!data) return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "content",
    class: "services-area pt-120 page-content",
    children: "No content"
  }); // return (<section id="content" class="services-area pt-120 age-content">
  //             {
  //                 resolverDynamicComponent(data, "content")
  //             }
  //         </section>)

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "content",
    class: "services-area pt-120 page-content",
    children: data.map(dynamicContent => {
      return (0,component_resolver/* resolverDynamicExtract */.QA)(dynamicContent);
    })
  });
};

/* harmony default export */ var article_content = (PageBody);
// EXTERNAL MODULE: ./components/seo.js
var seo = __webpack_require__(8303);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(7672);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(1422);
;// CONCATENATED MODULE: ./components/page-seo.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PageSeo = ({
  seo
}) => {
  const {
    defaultSeo,
    siteName
  } = (0,external_react_.useContext)(_app.GlobalContext);

  const seoWithDefaults = _objectSpread(_objectSpread({}, defaultSeo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: (0,media/* getStrapiMedia */.$)(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [fullSeo.metaTitle && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: fullSeo.metaTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      })]
    }), fullSeo.metaDescription && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      })]
    }), fullSeo.shareImage && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "image",
        content: fullSeo.shareImage
      })]
    }), fullSeo.article && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:type",
      content: "article"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    })]
  });
};

/* harmony default export */ var page_seo = (PageSeo);
;// CONCATENATED MODULE: ./pages/pages/[slug].js









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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    categories: categories,
    layout: layoutInfo,
    color: textColor,
    children: [/*#__PURE__*/jsx_runtime_.jsx(page_seo, {
      seo: category.attributes.seo
    }), /*#__PURE__*/jsx_runtime_.jsx(article_hero, {
      data: category.attributes.PageHero,
      color: textColor
    }), /*#__PURE__*/jsx_runtime_.jsx(article_content, {
      data: category.attributes.PageBody
    }), category.attributes.Name]
  });
};

async function getStaticPaths(context) {
  console.log("context.slug");
  console.log(context);
  const categoriesRes = await (0,api/* fetchAPI */.I)("/categories", {
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
/* harmony default export */ var _slug_ = (Page);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [544,664,672,759], function() { return __webpack_exec__(6227); });
module.exports = __webpack_exports__;

})();