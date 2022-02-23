exports.id = 721;
exports.ids = [721];
exports.modules = {

/***/ 6721:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O6": function() { return /* binding */ resolverComponent; },
  "QA": function() { return /* binding */ resolverDynamicExtract; },
  "so": function() { return /* binding */ transformImageUriPeform; }
});

// UNUSED EXPORTS: resolverDynamicComponent

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
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "title",
              children: data === null || data === void 0 ? void 0 : data.Title
            }), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
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
              class: "mb-5 overflow-hidden blog-image rounded-xl blog-image",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                image: post.attributes.image,
                imageClass: "w-full"
              }, i)
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "blog-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                class: "mb-6 text-2xl leading-snug text-gray-900 blog-title",
                children: post.attributes.title
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                class: "text-theme-color-2",
                href: "/articles/" + post.attributes.slug,
                children: ["Chi ti\u1EBFt", /*#__PURE__*/jsx_runtime_.jsx("i", {
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
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  class: "title",
                  children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                    source: business.Title,
                    escapeHtml: false
                  })
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
            }, item.id))
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
                class: "mb-8 card-content",
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

    case "Brand":
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
  return uri.startsWith("/") ? (0,api/* getStrapiURL */.pK)(uri) : uri;
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

/***/ })

};
;