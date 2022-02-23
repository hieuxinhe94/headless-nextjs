(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,888];
exports.modules = {

/***/ 8270:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(3445);
// EXTERNAL MODULE: ./components/seo.js
var seo = __webpack_require__(8303);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
;// CONCATENATED MODULE: ./components/home/hero.js





const Hero = ({
  hero,
  homepage
}) => {
  var _homepage$attributes$, _homepage$attributes$2;

  // const centralImage =     getStrapiURL() + homepage.attributes.HeroCentralImage?.data.attributes.url;
  // const centralBgImage =   getStrapiURL() + homepage.attributes.HeaderBgImage?.data.attributes.url;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: " ",
    class: "header-hero",
    style: {
      backgroundImage: `url(` + (0,api/* getStrapiURL */.pK)() + ((_homepage$attributes$ = homepage.attributes.HeaderBgImage) === null || _homepage$attributes$ === void 0 ? void 0 : _homepage$attributes$.data.attributes.url) + `)`
    },
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "justify-center row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "pt-32 mb-12 text-center lg:pt-48 header-hero-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              class: "text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp",
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.2s",
              children: hero === null || hero === void 0 ? void 0 : hero.CentralText
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              class: "main-btn pt-32 gradient-btn gradient-btn-2 wow fadeInUp",
              "data-wow-duration": "1.3s",
              "data-wow-delay": "1.1s",
              children: hero === null || hero === void 0 ? void 0 : hero.CentralButtonText
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              class: "mb-3 text-4xl font-bold text-white header-title wow fadeInUp",
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.5s",
              children: hero === null || hero === void 0 ? void 0 : hero.CentralTextDescription
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              class: "mb-8 text-white text wow fadeInUp",
              "data-wow-duration": "1.3s",
              "data-wow-delay": "0.8s",
              children: hero === null || hero === void 0 ? void 0 : hero.CentralTextSecondary
            })]
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
              src: (0,api/* getStrapiURL */.pK)() + ((_homepage$attributes$2 = homepage.attributes.HeroCentralImage) === null || _homepage$attributes$2 === void 0 ? void 0 : _homepage$attributes$2.data.attributes.url),
              alt: "hero"
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

/* harmony default export */ var hero = (Hero);
// EXTERNAL MODULE: ./lib/component-resolver.js + 5 modules
var component_resolver = __webpack_require__(6721);
;// CONCATENATED MODULE: ./pages/index.js









const Home = ({
  articles,
  categories,
  homepage,
  layoutInfo
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    categories: categories,
    layout: layoutInfo,
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* default */.Z, {
      seo: homepage.attributes.seo
    }), /*#__PURE__*/jsx_runtime_.jsx(hero, {
      hero: homepage.attributes.Hero,
      homepage: homepage
    }), (0,component_resolver/* resolverComponent */.O6)("Brand", homepage.attributes.Brand), (0,component_resolver/* resolverComponent */.O6)("Feature", homepage.attributes.HighlightingFeatures), (0,component_resolver/* resolverComponent */.O6)("Activity", homepage.attributes.Activity), (0,component_resolver/* resolverComponent */.O6)("PinnedBlog", homepage.attributes.RecentBlog, articles)]
  });
};

async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes, articlesRes] = await Promise.all([(0,api/* fetchAPI */.Io)("/homepage", {
    populate: {
      seo: {
        populate: "*"
      },
      Hero: {
        populate: "*"
      },
      SiteInfo: {
        populate: {
          Logo: {
            populate: "*"
          },
          QuickLink: {
            populate: "*"
          }
        }
      },
      Brand: {
        populate: {
          BrandLogo: {
            populate: "*"
          }
        }
      },
      HighlightingFeatures: {
        populate: {
          Items: {
            populate: "*"
          }
        }
      },
      Activity: {
        populate: {
          Steps: {
            populate: "*"
          },
          Info: {
            populate: "*"
          },
          Media: {
            populate: "*"
          },
          BgMedia: {
            populate: "*"
          },
          Items: {
            populate: "*"
          }
        }
      },
      RecentBlog: {
        populate: {
          Articles: {
            populate: "*"
          }
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
      },
      FooterBgImage: {
        populate: "*"
      }
    }
  }), (0,api/* fetchAPI */.Io)("/articles", {
    populate: "*"
  }) //fetchAPI("/brands", { populate: "*" }),
  ]);
  return {
    props: {
      articles: articlesRes.data,
      homepage: homepageRes.data
    },
    revalidate: 1
  };
}
/* harmony default export */ var pages = (Home);

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

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [544,664,672,12,721,936], function() { return __webpack_exec__(8270); });
module.exports = __webpack_exports__;

})();