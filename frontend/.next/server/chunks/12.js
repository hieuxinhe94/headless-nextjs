exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 4923:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ footer; }
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
;// CONCATENATED MODULE: ./components/subcribe-box.js




const SubcribeBox = ({
  subcribeBox
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
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
            children: subcribeBox === null || subcribeBox === void 0 ? void 0 : subcribeBox.Title
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
            source: subcribeBox === null || subcribeBox === void 0 ? void 0 : subcribeBox.Description,
            escapeHtml: false
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "w-full lg:w-1/2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "mt-12 ",
          children: /*#__PURE__*/jsx_runtime_.jsx("form", {
            action: subcribeBox === null || subcribeBox === void 0 ? void 0 : subcribeBox.POST_URL,
            class: "relative focus:outline-none float-right",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: subcribeBox === null || subcribeBox === void 0 ? void 0 : subcribeBox.POST_URL,
              class: "main-btn gradient-btn",
              children: [" ", subcribeBox === null || subcribeBox === void 0 ? void 0 : subcribeBox.SubmitLabel]
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ var subcribe_box = (SubcribeBox);
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
        backgroundImage: `url(` + (0,api/* getStrapiURL */.pK)() + (footer === null || footer === void 0 ? void 0 : (_footer$BgImage = footer.BgImage) === null || _footer$BgImage === void 0 ? void 0 : _footer$BgImage.data.attributes.url) + `)`
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [footer !== null && footer !== void 0 && footer.SubcribeBox ? /*#__PURE__*/jsx_runtime_.jsx(subcribe_box, {
        subcribeBox: footer === null || footer === void 0 ? void 0 : footer.SubcribeBox
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
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
                    }, i + "a"))
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
                    }, i + "b"))
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
                }, i + "c"))
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

/***/ }),

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
  var _image$data, _image$attributes;

  // if(!image) {
  //   return   (
  //      <img class="blank" src="blank" alt="blank image" />)
  // }
  if ((image === null || image === void 0 ? void 0 : (_image$data = image.data) === null || _image$data === void 0 ? void 0 : _image$data.attributes) == null && (image === null || image === void 0 ? void 0 : image.attributes) == null) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      class: "blank",
      src: "blank",
      alt: "blank image"
    });
  }

  if (image !== null && image !== void 0 && (_image$attributes = image.attributes) !== null && _image$attributes !== void 0 && _image$attributes.url) {
    const {
      url,
      alternativeText,
      width,
      height
    } = image.attributes;
    const srcUrl = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getStrapiURL */ .pK)() + url;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      class: imageClass !== null && imageClass !== void 0 ? imageClass : "",
      src: srcUrl,
      alt: "Logo"
    });
  } else {
    const {
      url,
      alternativeText,
      width,
      height
    } = image.data.attributes;
    const srcUrl = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getStrapiURL */ .pK)() + url;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      class: imageClass !== null && imageClass !== void 0 ? imageClass : "",
      src: srcUrl,
      alt: "Logo"
    });
  }
};

/* harmony default export */ __webpack_exports__["Z"] = (CustomImage);

/***/ }),

/***/ 1844:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);




const Nav = ({
  categories,
  color
}) => {
  console.log(categories);
  var textColor = 'text-white';

  if (color) {
    textColor = color;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
      id: "nav",
      class: "items-center content-start mr-auto lg:justify-end navbar-nav lg:flex " + textColor,
      children: categories.map(category => {
        var _category$attributes$;

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          class: "nav-item",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: `/pages/${category.attributes.slug}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              class: "page-scroll",
              href: `/pages/${category.attributes.slug}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                children: (_category$attributes$ = category.attributes.name) !== null && _category$attributes$ !== void 0 ? _category$attributes$ : category.attributes.Name
              })
            })
          })
        }, category.id);
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Nav);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;