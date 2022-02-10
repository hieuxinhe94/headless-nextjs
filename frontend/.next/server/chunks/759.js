exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 5030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(883);



const CustomImage = ({
  image,
  style,
  imageClass = null
}) => {
  var _image$data;

  // if(!image) {
  //   return   (
  //      <img class="blank" src="blank" alt="blank image" />)
  // }
  if ((image === null || image === void 0 ? void 0 : (_image$data = image.data) === null || _image$data === void 0 ? void 0 : _image$data.attributes) == null) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      class: "blank",
      src: "blank",
      alt: "blank image"
    });
  }

  const {
    url,
    alternativeText,
    width,
    height
  } = image.data.attributes;
  const srcUrl = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getStrapiURL */ .p)() + url;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
    class: imageClass,
    src: srcUrl,
    alt: "Logo"
  }) // <NextImage
  //   // loader={loader}
  //   layout="responsive"
  //   width={100}
  //   height={200}
  //   objectFit="contain"
  //   src={ srcUrl}
  //   // alt={alternativeText || ""}
  // />
  ;
};

/* harmony default export */ __webpack_exports__["Z"] = (CustomImage);

/***/ }),

/***/ 7915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__(3703);
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
;// CONCATENATED MODULE: ./components/footer.js






const Footer = ({
  footer,
  siteInfo
}) => {
  var _footer$BgImage;

  const quickLinks = footer === null || footer === void 0 ? void 0 : footer.HyperLink.filter(link => link.GroupValue == 'QuickLink');
  const resourceLinks = footer === null || footer === void 0 ? void 0 : footer.HyperLink.filter(link => link.GroupValue == 'Resources');
  const contactLinks = footer === null || footer === void 0 ? void 0 : footer.HyperLink.filter(link => link.GroupValue == 'ContactUs');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    id: "footer",
    class: "relative z-10 footer-area pt-120",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "footer-bg",
      style: {
        backgroundImage: `url(` + (0,api/* getStrapiURL */.p)() + (footer === null || footer === void 0 ? void 0 : (_footer$BgImage = footer.BgImage) === null || _footer$BgImage === void 0 ? void 0 : _footer$BgImage.data.attributes.url) + `)`
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "px-6 pt-10 pb-20 mb-12 bg-white rounded-lg shadow-xl md:px-12 subscribe-area wow fadeIn",
        "data-wow-duration": "1s",
        "data-wow-delay": "0.5s",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-full lg:w-1/2",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "lg:mt-12 subscribe-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                class: "text-xl font-bold sm:text-2xl subscribe-title",
                children: footer === null || footer === void 0 ? void 0 : footer.Title
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                source: footer === null || footer === void 0 ? void 0 : footer.Description,
                escapeHtml: false
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-full lg:w-1/2",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "mt-12 subscribe-form",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                action: "#",
                class: "relative focus:outline-none",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "type",
                  placeholder: "Enter email/phone number",
                  class: "w-full py-4 pl-6 pr-40 duration-300 border-2 rounded focus:border-theme-color focus:outline-none"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  class: "main-btn gradient-btn",
                  children: footer === null || footer === void 0 ? void 0 : footer.NavigateLabel
                })]
              })
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "footer-widget pb-10",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-4/5 md:w-3/5 lg:w-2/6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "mt-12 footer-about wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.2s",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                class: "inline-block mb-8 logo",
                href: "index.html",
                children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                  image: siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.Logo
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                class: "pb-10 pr-10 leading-snug text-white content-center",
                children: siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.AlterName
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                class: "flex footer-social",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      class: "lni lni-facebook-filled"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      class: "lni lni-twitter-filled"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      class: "lni lni-instagram-filled"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      class: "lni lni-linkedin-original"
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "w-full sm:w-1/2 md:w-1/2 lg:w-1/2",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  class: "mt-12 link-wrapper wow fadeIn",
                  "data-wow-duration": "1s",
                  "data-wow-delay": "0.4s",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    class: "footer-title",
                    children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                      class: "mb-8 text-2xl font-bold text-white",
                      children: "Quick Link"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                    class: "link",
                    children: quickLinks === null || quickLinks === void 0 ? void 0 : quickLinks.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: item.Link,
                        children: item.Title
                      })
                    }, i))
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "w-full sm:w-1/2 md:w-1/2 lg:w-1/2",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  class: "mt-12 link-wrapper wow fadeIn",
                  "data-wow-duration": "1s",
                  "data-wow-delay": "0.6s",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    class: "footer-title",
                    children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                      class: "mb-8 text-2xl font-bold text-white",
                      children: "Resources"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                    class: "link",
                    children: resourceLinks === null || resourceLinks === void 0 ? void 0 : resourceLinks.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: item.Link,
                        children: item.Title
                      })
                    }, i))
                  })]
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-4/5 sm:w-1/3 md:w-2/5 lg:w-2/6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "mt-12 footer-contact wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.8s",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "footer-title",
                children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                  class: "mb-8 text-2xl font-bold text-white",
                  children: "Contact Us"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                class: "contact",
                children: contactLinks === null || contactLinks === void 0 ? void 0 : contactLinks.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: item.Link,
                    children: item.Title
                  })
                }, i))
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "py-8 border-t border-gray-200 footer-copyright",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          class: "text-white",
          children: siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.CopyrightText
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "particles-2",
      class: "particles"
    })]
  });
};

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/nav.js




const Nav = ({
  categories,
  color
}) => {
  var textColor = 'text-white';

  if (color) {
    textColor = color;
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      id: "nav",
      class: "items-center content-start mr-auto lg:justify-end navbar-nav lg:flex " + textColor,
      children: categories.map(category => {
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          class: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/pages/${category.attributes.slug}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              class: "page-scroll",
              href: `/pages/${category.attributes.slug}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("b", {
                children: category.attributes.name
              })
            })
          })
        }, category.id);
      })
    })
  });
};

/* harmony default export */ var nav = (Nav);
;// CONCATENATED MODULE: ./components/layout.js







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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "hidden preloader",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "loader",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "ytp-spinner",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "ytp-spinner-container",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "ytp-spinner-rotator",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "ytp-spinner-left",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  class: "ytp-spinner-circle"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "ytp-spinner-right",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  class: "ytp-spinner-circle"
                })
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("header", {
      class: "header-area",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "navbar-area ",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "container relative",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "w-full",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
                class: "flex items-center justify-between navbar navbar-expand-lg",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "mr-4 navbar-brand " + textColor,
                  href: "/",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                    image: layout.LogoImage
                  }), layout.SiteInfo.SiteName]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                  class: "block navbar-toggler focus:outline-none lg:hidden",
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navbarOne",
                  "aria-controls": "navbarOne",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    class: "toggler-icon"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    class: "toggler-icon"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    class: "toggler-icon"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  class: "absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none",
                  id: "navbarOne",
                  children: /*#__PURE__*/jsx_runtime_.jsx(nav, {
                    color: textColor,
                    categories: categories
                  })
                })]
              })
            })
          })
        })
      })
    }), children, /*#__PURE__*/jsx_runtime_.jsx(footer, {
      footer: layout.Footer,
      siteInfo: layout.SiteInfo
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: "#",
      class: "back-to-top",
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        class: "lni lni-chevron-up"
      })
    })]
  });
};

/* harmony default export */ var layout = (Layout);

/***/ }),

/***/ 8303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7672);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1422);




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
    shareImage: (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__/* .getStrapiMedia */ .$)(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [fullSeo.metaTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: fullSeo.metaTitle
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      })]
    }), fullSeo.metaDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      })]
    }), fullSeo.shareImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "image",
        content: fullSeo.shareImage
      })]
    }), fullSeo.article && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:type",
      content: "article"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Seo);

/***/ }),

/***/ 6721:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O6": function() { return /* binding */ resolverComponent; },
  "QA": function() { return /* binding */ resolverDynamicExtract; }
});

// UNUSED EXPORTS: resolverDynamicComponent, transformImageUriPeform

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__(3703);
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
;// CONCATENATED MODULE: ./components/home/pinned-blog.js







const PinnedBlog = ({
  data,
  args1
}) => {
  var _args1$slice;

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "blog",
    class: "blog-area pt-120",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full lg:w-1/2",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "pb-8 section-title",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "line"
            }), data === null || data === void 0 ? void 0 : data.Title, /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
              source: data === null || data === void 0 ? void 0 : data.Description,
              escapeHtml: false
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "justify-center row",
        children: args1 === null || args1 === void 0 ? void 0 : (_args1$slice = args1.slice(0, 3)) === null || _args1$slice === void 0 ? void 0 : _args1$slice.map((post, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full md:w-2/3 lg:w-1/3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "mx-4 mt-10 single-blog wow fadeIn",
            "data-wow-duration": "1s",
            "data-wow-delay": "0.2s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "mb-5 overflow-hidden blog-image rounded-xl",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                image: post.attributes.image,
                imageClass: "w-full"
              }, i)
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "blog-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                class: "mb-6 text-2xl leading-snug text-gray-900",
                children: post.attributes.title
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                class: "text-theme-color-2",
                href: "/articles/" + post.attributes.slug,
                children: ["Learn More", /*#__PURE__*/jsx_runtime_.jsx("i", {
                  class: "ml-2 lni lni-chevron-right"
                })]
              })]
            })]
          })
        }))
      })]
    })
  });
};

/* harmony default export */ var pinned_blog = (PinnedBlog);
;// CONCATENATED MODULE: ./components/home/business-talk.js







const BusinessTalk = ({
  business
}) => {
  var _business$Items;

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "facts",
    class: "pt-20 video-counter",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full lg:w-1/2",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "relative pb-8 mt-12 video-content wow fadeIn",
            "data-wow-duration": "1s",
            "data-wow-delay": "0.5s",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
              image: business.BgMedia,
              imageClass: "absolute bottom-0 left-0 -ml-8 dots"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "relative mr-6 rounded-lg shadow-md video-wrapper",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "video-image",
                children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                  image: business.Media
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full lg:w-1/2",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn",
            "data-wow-duration": "1s",
            "data-wow-delay": "0.8s",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "counter-content",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                class: "mb-8 section-title",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  class: "line"
                }), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                  source: business.Title,
                  escapeHtml: false
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                class: "text",
                children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                  source: business.Description,
                  escapeHtml: false
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "row no-gutters",
              children: (_business$Items = business.Items) === null || _business$Items === void 0 ? void 0 : _business$Items.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "flex items-center justify-center single-counter counter-color-" + (i + 1),
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  class: "text-center counter-items",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    class: "text-xl font-bold text-white",
                    children: item.Title
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    class: "text-white",
                    children: item.Description
                  })]
                })
              }))
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var business_talk = (BusinessTalk);
;// CONCATENATED MODULE: ./components/home/activity.js







const Activity = ({
  activity
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: activity === null || activity === void 0 ? void 0 : activity.map((item, i) => buildActivityStyle(i, item))
  });
};

const buildBusinessStepViewStyle = (index, item) => {
  if (index % 2 === 0) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      class: "relative pt-20 about-area",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-full lg:w-1/2",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "mx-4 mt-12 about-content wow fadeInLeftBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                class: "mb-4 section-title",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  class: "line"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  class: "title",
                  children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                    source: item.Title,
                    escapeHtml: false
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                source: item.Description,
                escapeHtml: false
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: item.NavigateLink,
                class: "main-btn gradient-btn",
                children: item.NavigateLable
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-full lg:w-1/2",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "mx-4 mt-12 text-center about-image wow fadeInRightBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                image: item.Media
              }, item.id)
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "about-shape-1",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
          image: item.BgMedia
        }, item.id)
      })]
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      class: "relative pt-20 about-area",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "about-shape-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
          image: item.BgMedia
        }, item.id)
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-full lg:w-1/2 lg:order-last",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "mx-4 mt-12 about-content wow fadeInLeftBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                class: "mb-4 section-title",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  class: "line"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  class: "title",
                  children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                    source: item.Title,
                    escapeHtml: false
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                source: item.Description,
                escapeHtml: false
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: item.NavigateLink,
                class: "main-btn gradient-btn",
                children: item.NavigateLable
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-full lg:w-1/2 lg:order-first",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "mx-4 mt-12 text-center about-image wow fadeInRightBig",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.5s",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                image: item.Media
              }, item.id)
            })
          })]
        })
      })]
    });
  }
};

const buildBusinessInvestmentViewStyle = (index, item) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(business_talk, {
      business: item
    })
  });
};

const buildActivityStyle = (index, item) => {
  if (item.__component.indexOf('business-steps') !== -1) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: item.Steps.map((item, index) => buildBusinessStepViewStyle(index, item))
  }, index);
  if (item.__component.indexOf('investment') !== -1) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: buildBusinessInvestmentViewStyle(index, item)
  }, index);
};

/* harmony default export */ var activity = (Activity);
;// CONCATENATED MODULE: ./components/home/brand.js





const Brand = ({
  brand
}) => {
  const brandItemss = brand.BrandLogo;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    class: "pt-24 brand-area",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "items-center justify-center row lg:justify-between",
            children: brandItemss.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "single-logo hover:opacity-100 wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.2s",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                image: item.Logo
              }, item.id)
            }))
          })
        })
      })
    })
  });
};

/* harmony default export */ var brand = (Brand);
;// CONCATENATED MODULE: ./components/home/feature.js







const Feature = ({
  feature
}) => {
  const title = feature.CentralText;
  const items = feature.Items;
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "features",
    class: "services-area pt-120",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "justify-center row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full lg:w-2/3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "pb-10 text-center section-title",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "m-auto line"
            }), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
              source: title,
              escapeHtml: false
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "justify-center row",
        children: items.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "w-full sm:w-2/3 lg:w-1/3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "single-services wow fadeIn",
            "data-wow-duration": "1s",
            "data-wow-delay": "0.2s",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "services-icon",
              children: [/*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                imageClass: 'shape',
                image: item.Media
              }, item.id), /*#__PURE__*/jsx_runtime_.jsx("i", {
                class: item.IconClass
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "mt-8 services-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                class: "mb-8 text-xl font-bold text-gray-900",
                children: item.Title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                class: "mb-8",
                children: item.Description
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: item.NavigateLink,
                class: "duration-300 hover:text-theme-color",
                children: [item.NavigateTextLabel, /*#__PURE__*/jsx_runtime_.jsx("i", {
                  class: "ml-2 lni lni-chevron-right"
                })]
              })]
            })]
          })
        }, item.id))
      })]
    })
  });
};

/* harmony default export */ var feature = (Feature);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
;// CONCATENATED MODULE: ./lib/component-resolver.js










function resolverComponent(componentName, ...args) {
  switch (componentName) {
    case "PinnedBlog":
      return /*#__PURE__*/jsx_runtime_.jsx(pinned_blog, {
        data: args[0],
        args1: args[1]
      });

    case "Activity":
      return /*#__PURE__*/jsx_runtime_.jsx(activity, {
        activity: args[0]
      });

    case "Activity":
      return /*#__PURE__*/jsx_runtime_.jsx(brand, {
        brand: args[0]
      });

    case "Feature":
      return /*#__PURE__*/jsx_runtime_.jsx(feature, {
        feature: args[0]
      });

    default:
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
  }
}
function resolverDynamicComponent(source, ...args) {
  var contentBuilder = /*#__PURE__*/_jsx(_Fragment, {});

  console.log(contentBuilder);
  source.forEach(dynamicContent => {
    contentBuilder += resolverDynamicExtract(dynamicContent);
  });
  console.log("contentBuilder");
  console.log(contentBuilder);
  return contentBuilder;
}
function transformImageUriPeform(uri, children, title, alt) {
  return uri.startsWith("/") ? (0,api/* getStrapiURL */.p)(uri) : uri;
}
function resolverDynamicExtract(dynamicContent) {
  if (dynamicContent.__component.indexOf('dynamics.page-content') !== -1) return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    class: "container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "justify-center row",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "w-full lg:w-2/3",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "pb-10 text-center section-title",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-2xl",
            children: dynamicContent.Name
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "m-auto line"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: " pt-12 pb-10 row",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
        transformImageUri: transformImageUriPeform,
        source: dynamicContent.Content,
        escapeHtml: true
      })
    })]
  }, dynamicContent.Id);
  if (dynamicContent.__component.indexOf('dynamics.page-image-content') !== -1) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    class: "container pt-12 pb-10",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "w-full lg:w-1/2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "relative pb-8 mt-12 video-content wow fadeIn",
          "data-wow-duration": "1s",
          "data-wow-delay": "0.5s",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "relative justify-center mr-6 rounded-lg shadow-md video-wrapper",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "video-image bg-light-blue-300",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                imageClass: "image-fit",
                image: dynamicContent === null || dynamicContent === void 0 ? void 0 : dynamicContent.Image
              })
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "w-full lg:w-1/2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn",
          "data-wow-duration": "1s",
          "data-wow-delay": "0.8s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "counter-content",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "mb-8 section-title",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "line"
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                source: dynamicContent.Title,
                escapeHtml: false
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              class: "text",
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                source: dynamicContent.Description,
                escapeHtml: false
              })
            })]
          })
        })
      })]
    })
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;