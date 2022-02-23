(function() {
var exports = {};
exports.id = 908;
exports.ids = [908,888];
exports.modules = {

/***/ 6818:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ catalog; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/commerce/Carousel.js
var Carousel = __webpack_require__(5721);
// EXTERNAL MODULE: ./components/commerce/commerce-hero.js
var commerce_hero = __webpack_require__(1001);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
;// CONCATENATED MODULE: ./components/commerce/product-thumb.js







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
  } = (0,api/* getProductThumb */.Y4)(productThumb.id, {
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
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: productThumb === null || productThumb === void 0 ? void 0 : (_productThumb$attribu = productThumb.attributes) === null || _productThumb$attribu === void 0 ? void 0 : _productThumb$attribu.slug,
    class: "cursor",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      replace: true,
      href: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att = productThumbItem.attributes) === null || _productThumbItem$att === void 0 ? void 0 : _productThumbItem$att.slug}`,
      as: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att2 = productThumbItem.attributes) === null || _productThumbItem$att2 === void 0 ? void 0 : _productThumbItem$att2.slug}`,
      onClick: e => onSelected(productThumb),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "w-full wow fadeInUp",
        "data-wow-delay": ".2s",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "feature-box single-product",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "tumb",
            children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
              image: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att3 = productThumbItem.attributes) === null || _productThumbItem$att3 === void 0 ? void 0 : _productThumbItem$att3.Image,
              imageClass: "product-image-horizontal"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            class: "text-price",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
              children: [(_productThumbItem$att4 = productThumbItem.attributes) === null || _productThumbItem$att4 === void 0 ? void 0 : _productThumbItem$att4.Price, " VN\u0110"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            class: "text-title",
            children: (_productThumbItem$att5 = productThumbItem.attributes) === null || _productThumbItem$att5 === void 0 ? void 0 : _productThumbItem$att5.Title
          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
            children: (_productThumbItem$att6 = productThumbItem.attributes) === null || _productThumbItem$att6 === void 0 ? void 0 : _productThumbItem$att6.ShortDescription
          })]
        })
      })
    }, productThumbItem.id)
  });
};

/* harmony default export */ var product_thumb = (ProductThumb);
;// CONCATENATED MODULE: ./components/commerce/ProductCategory.js





const ProductCategory = ({
  categories = [],
  onSelected
}) => {
  return /*#__PURE__*/_jsx("section", {
    id: "schedules",
    class: "schedule section-padding",
    children: /*#__PURE__*/_jsx("div", {
      class: "container",
      children: /*#__PURE__*/_jsx("div", {
        class: "schedule-area  wow fadeInDown",
        "data-wow-delay": "0.3s",
        children: /*#__PURE__*/_jsx("div", {
          class: "schedule-tab-title col-md-3 col-lg-3 col-xs-12",
          children: /*#__PURE__*/_jsx("div", {
            class: "table-responsive",
            children: /*#__PURE__*/_jsx("ul", {
              class: "nav nav-tabs",
              id: "myTab",
              role: "tablist",
              children: categories.map((category, index) => {
                var _category$attributes$;

                return /*#__PURE__*/_jsx("li", {
                  class: "nav-item row",
                  children: /*#__PURE__*/_jsx("a", {
                    class: "nav-link",
                    id: "thursday-tab",
                    "data-toggle": "tab",
                    href: "#thursday",
                    role: "tab",
                    "aria-controls": "thursday",
                    "aria-selected": "false",
                    children: /*#__PURE__*/_jsxs("div", {
                      class: "item-text",
                      children: [/*#__PURE__*/_jsxs("h4", {
                        children: [" ", (_category$attributes$ = category.attributes.name) !== null && _category$attributes$ !== void 0 ? _category$attributes$ : category.attributes.Name]
                      }), /*#__PURE__*/_jsx("h5", {})]
                    })
                  })
                }, index);
              })
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ var commerce_ProductCategory = ((/* unused pure expression or super */ null && (ProductCategory)));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/commerce/product-grid.js









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

  if (!featureProductWrap || featureProductWrap.length == 0) return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
  featureProductWrapTmp = featureProductWrap;
  defaultgroupId = (_defaultgroupId = defaultgroupId) !== null && _defaultgroupId !== void 0 ? _defaultgroupId : featureProductWrap[0].id;
  productsFiltered = (_productsFiltered = productsFiltered) !== null && _productsFiltered !== void 0 ? _productsFiltered : featureProductWrap.filter(t => t.id == defaultgroupId)[0].Items;
  const router = (0,router_.useRouter)();

  const ChangeFilter = a => {
    defaultgroupId = a.id;
    productsFiltered = a.Items;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "product-section",
    className: "container flex flex-wrap mx-auto gap-2 mt-8",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "w-full",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-full lg:w-1/3",
            children: /*#__PURE__*/jsx_runtime_.jsx("section", {
              id: "schedules",
              class: "schedule section-padding",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "container",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  class: "schedule-area  wow fadeInDown",
                  "data-wow-delay": "0.3s",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    class: "schedule-tab-title col-md-3 col-lg-3 col-xs-12",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      class: "table-responsive",
                      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                        class: "nav nav-tabs",
                        id: "myTab",
                        role: "tablist",
                        children: featureProductWrap.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                          id: "#" + item.id,
                          class: "nav-item row",
                          onClick: e => ChangeFilter(item),
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            class: "nav-link",
                            id: "thursday-tab",
                            "data-toggle": "tab",
                            href: "#" + item.id,
                            role: "tab",
                            "aria-controls": "thursday",
                            "aria-selected": "false",
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                              class: "item-text",
                              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                                children: [" ", item.GroupName]
                              }), /*#__PURE__*/jsx_runtime_.jsx("h5", {})]
                            })
                          })
                        }, index))
                      })
                    })
                  })
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "w-full lg:w-2/3",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "row",
              children: productsFiltered.map(_product => _product !== null && _product !== void 0 && _product.detail ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "w-full lg:w-1/2",
                children: /*#__PURE__*/jsx_runtime_.jsx(product_thumb, {
                  productThumb: _product.detail.data
                }, _product.id)
              }, _product.id) : /*#__PURE__*/jsx_runtime_.jsx("div", {}, _product.id))
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ var product_grid = (ProductGridThumb);
;// CONCATENATED MODULE: ./components/commerce/product-thumb-2.js







const ProductThumb2 = ({
  productThumb
}) => {
  var _productThumbItem$att, _productThumbItem$att2, _productThumbItem$att3, _productThumbItem$att4, _productThumbItem$att5, _productThumbItem$att6, _productThumbItem$att7;

  console.log("load productThumb swr");
  const {
    data,
    error
  } = (0,api/* getProductThumb */.Y4)(productThumb.id, {
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

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att = productThumbItem.attributes) === null || _productThumbItem$att === void 0 ? void 0 : _productThumbItem$att.slug,
    class: "col-md-6 col-lg-4 col-xs-12 padding-none cursor",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      class: "cursor",
      replace: true,
      href: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att2 = productThumbItem.attributes) === null || _productThumbItem$att2 === void 0 ? void 0 : _productThumbItem$att2.slug}`,
      as: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att3 = productThumbItem.attributes) === null || _productThumbItem$att3 === void 0 ? void 0 : _productThumbItem$att3.slug}`,
      onClick: e => onSelected(productThumb),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "services-item wow fadeIn",
        "data-wow-delay": "0.2s",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "tumb",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
            image: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att4 = productThumbItem.attributes) === null || _productThumbItem$att4 === void 0 ? void 0 : _productThumbItem$att4.Image,
            imageClass: "product-image-horizontal",
            style: "height: 250px"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "services-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            class: "text-price",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
              children: [(_productThumbItem$att5 = productThumbItem.attributes) === null || _productThumbItem$att5 === void 0 ? void 0 : _productThumbItem$att5.Price, " VN\u0110"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: (_productThumbItem$att6 = productThumbItem.attributes) === null || _productThumbItem$att6 === void 0 ? void 0 : _productThumbItem$att6.Title
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: (_productThumbItem$att7 = productThumbItem.attributes) === null || _productThumbItem$att7 === void 0 ? void 0 : _productThumbItem$att7.ShortDescription
          })]
        })]
      })
    }, productThumbItem.id)
  });
};

/* harmony default export */ var product_thumb_2 = (ProductThumb2);
;// CONCATENATED MODULE: ./components/commerce/Product-grid-2.js





var defaultgroupIds = {};
var Product_grid_2_featureProductWrapTmp = {};
var Product_grid_2_productsFiltered = {};
defaultgroupIds["0"] = "";
Product_grid_2_featureProductWrapTmp["0"] = "";
Product_grid_2_productsFiltered["0"] = "";

const ProductGrid2Thumb = ({
  featureProductWrap,
  categories = [],
  colClass = "w-full lg:w-1/2",
  name = "ProductGrid2Thumb"
}) => {
  var _defaultgroupIds$name, _productsFiltered$nam, _productsFiltered$nam2;

  console.log(name);
  if (!featureProductWrap || Array.from(featureProductWrap).length == 0) return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
  Product_grid_2_featureProductWrapTmp[name] = featureProductWrap;
  defaultgroupIds[name] = (_defaultgroupIds$name = defaultgroupIds[name]) !== null && _defaultgroupIds$name !== void 0 ? _defaultgroupIds$name : featureProductWrap[0].id;
  Product_grid_2_productsFiltered[name] = (_productsFiltered$nam = Product_grid_2_productsFiltered[name]) !== null && _productsFiltered$nam !== void 0 ? _productsFiltered$nam : Product_grid_2_featureProductWrapTmp[name].filter(t => t.id == defaultgroupIds[name])[0].Items;
  const router = (0,router_.useRouter)();

  const ChangeFilter = a => {
    defaultgroupIds[name] = a.id;
    Product_grid_2_productsFiltered[name] = a.Items;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    class: "container",
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      id: "services",
      class: "services section-padding ",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "row justify-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "col-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
              class: "nav nav-tabs flex",
              id: "myTab",
              role: "tablist",
              children: featureProductWrap.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                id: "#" + item.id,
                class: "nav-product-grid-horizontal",
                onClick: e => ChangeFilter(item),
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  class: "nav-link",
                  id: "thursday-tab",
                  "data-toggle": "tab",
                  href: "#" + item.id,
                  role: "tab",
                  "aria-controls": "thursday",
                  "aria-selected": "false",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    class: "item-text",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                      children: [" ", item.GroupName]
                    }), /*#__PURE__*/jsx_runtime_.jsx("h5", {})]
                  })
                })
              }, index))
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "row services-wrapper",
          children: (_productsFiltered$nam2 = Product_grid_2_productsFiltered[name]) === null || _productsFiltered$nam2 === void 0 ? void 0 : _productsFiltered$nam2.map(_product => _product !== null && _product !== void 0 && _product.detail ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: colClass,
            children: /*#__PURE__*/jsx_runtime_.jsx(product_thumb_2, {
              productThumb: _product.detail.data
            }, _product.id)
          }, _product.id) : /*#__PURE__*/jsx_runtime_.jsx("div", {}, _product.id))
        })]
      })
    })
  });
};

/* harmony default export */ var Product_grid_2 = (ProductGrid2Thumb);
;// CONCATENATED MODULE: ./components/commerce/product-thumb-3.js







const ProductThumb3 = ({
  productThumb
}) => {
  var _productThumbItem$att, _productThumbItem$att2, _productThumbItem$att3, _productThumbItem$att4, _productThumbItem$att5, _productThumbItem$att6, _productThumbItem$att7;

  console.log("load productThumb swr");
  const {
    data,
    error
  } = (0,api/* getProductThumb */.Y4)(productThumb.id, {
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
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    class: "col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center text-white cursor",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      class: "cursor",
      replace: true,
      href: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att2 = productThumbItem.attributes) === null || _productThumbItem$att2 === void 0 ? void 0 : _productThumbItem$att2.slug}`,
      as: `/pages/catalog?product=${productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att3 = productThumbItem.attributes) === null || _productThumbItem$att3 === void 0 ? void 0 : _productThumbItem$att3.slug}`,
      onClick: e => onSelected(productThumb),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "counter wow fadeInRight",
        "data-wow-delay": "0.3s",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "icon",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
            image: productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att4 = productThumbItem.attributes) === null || _productThumbItem$att4 === void 0 ? void 0 : _productThumbItem$att4.Image,
            imageClass: "product-image-horizontal",
            style: "height: 250px"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          class: "text-price",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
            children: [(_productThumbItem$att5 = productThumbItem.attributes) === null || _productThumbItem$att5 === void 0 ? void 0 : _productThumbItem$att5.Price, " VN\u0110"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: /*#__PURE__*/jsx_runtime_.jsx("b", {
            children: (_productThumbItem$att6 = productThumbItem.attributes) === null || _productThumbItem$att6 === void 0 ? void 0 : _productThumbItem$att6.Title
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("i", {
          children: (_productThumbItem$att7 = productThumbItem.attributes) === null || _productThumbItem$att7 === void 0 ? void 0 : _productThumbItem$att7.ShortDescription
        })]
      })
    }, productThumbItem.id)
  }, productThumbItem === null || productThumbItem === void 0 ? void 0 : (_productThumbItem$att = productThumbItem.attributes) === null || _productThumbItem$att === void 0 ? void 0 : _productThumbItem$att.slug);
};

/* harmony default export */ var product_thumb_3 = (ProductThumb3);
;// CONCATENATED MODULE: ./components/commerce/Product-grid-3.js












var Product_grid_3_defaultgroupIds = {};
var Product_grid_3_featureProductWrapTmp = {};
var Product_grid_3_productsFiltered = {};
Product_grid_3_defaultgroupIds["0"] = "";
Product_grid_3_featureProductWrapTmp["0"] = "";
Product_grid_3_productsFiltered["0"] = "";

const ProductGrid3Thumb = ({
  featureProductWrap,
  categories = [],
  colClass = "w-full lg:w-1/2",
  name = "ProductGrid2Thumb"
}) => {
  var _defaultgroupIds$name, _productsFiltered$nam, _productsFiltered$nam2, _productsFiltered$nam3, _productsFiltered$nam4, _productsFiltered$nam5;

  console.log(name);
  if (!featureProductWrap || Array.from(featureProductWrap).length == 0) return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
  Product_grid_3_featureProductWrapTmp[name] = featureProductWrap;
  Product_grid_3_defaultgroupIds[name] = (_defaultgroupIds$name = Product_grid_3_defaultgroupIds[name]) !== null && _defaultgroupIds$name !== void 0 ? _defaultgroupIds$name : featureProductWrap[0].id;
  Product_grid_3_productsFiltered[name] = (_productsFiltered$nam = Product_grid_3_productsFiltered[name]) !== null && _productsFiltered$nam !== void 0 ? _productsFiltered$nam : Product_grid_3_featureProductWrapTmp[name].filter(t => t.id == Product_grid_3_defaultgroupIds[name])[0];
  const router = (0,router_.useRouter)();

  const ChangeFilter = a => {
    Product_grid_3_defaultgroupIds[name] = a.id;
    Product_grid_3_productsFiltered[name] = a;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    class: "w-full",
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      class: "counter-section section-padding",
      style: {
        backgroundImage: `url(` + (0,api/* getStrapiURL */.pK)() + ((_productsFiltered$nam2 = Product_grid_3_productsFiltered[name]) === null || _productsFiltered$nam2 === void 0 ? void 0 : (_productsFiltered$nam3 = _productsFiltered$nam2.BgImage) === null || _productsFiltered$nam3 === void 0 ? void 0 : _productsFiltered$nam3.data.attributes.url) + `)`
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "row justify-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "col-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
              class: "nav nav-tabs flex",
              id: "myTab",
              role: "tablist",
              children: featureProductWrap.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                id: "#" + item.id,
                class: "nav-product-grid-horizontal-active",
                onClick: e => ChangeFilter(item),
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  class: "nav-link",
                  id: "thursday-tab",
                  "data-toggle": "tab",
                  href: "#" + item.id,
                  role: "tab",
                  "aria-controls": "thursday",
                  "aria-selected": "false",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    class: "item-text uppercase",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                      children: [" ", item.GroupName]
                    }), /*#__PURE__*/jsx_runtime_.jsx("h5", {})]
                  })
                })
              }, index))
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "row",
          children: (_productsFiltered$nam4 = Product_grid_3_productsFiltered[name]) === null || _productsFiltered$nam4 === void 0 ? void 0 : (_productsFiltered$nam5 = _productsFiltered$nam4.Items) === null || _productsFiltered$nam5 === void 0 ? void 0 : _productsFiltered$nam5.map(_product => _product !== null && _product !== void 0 && _product.detail ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: colClass,
            children: /*#__PURE__*/jsx_runtime_.jsx(product_thumb_3, {
              productThumb: _product.detail.data
            }, _product.id)
          }, _product.id) : /*#__PURE__*/jsx_runtime_.jsx("div", {}, _product.id))
        })]
      })
    })
  });
};

/* harmony default export */ var Product_grid_3 = (ProductGrid3Thumb);
// EXTERNAL MODULE: ./components/layout-commerce.js
var layout_commerce = __webpack_require__(5985);
// EXTERNAL MODULE: ./components/page-seo.js
var page_seo = __webpack_require__(164);
;// CONCATENATED MODULE: external "react-modal"
var external_react_modal_namespaceObject = require("react-modal");;
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_namespaceObject);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__(3703);
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);
// EXTERNAL MODULE: ./lib/component-resolver.js + 5 modules
var component_resolver = __webpack_require__(6721);
;// CONCATENATED MODULE: ./components/commerce/product-body-content.js






const ProductBodyContent = ({
  data
}) => {
  console.log("ProductBodyContent");
  console.log(data);
  if (!data) return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "content",
    class: " pt-120 page-content",
    children: "No content"
  });
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "content",
    class: "pt-10 product-content",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "row",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "w-full",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "accordion",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "card",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "card-header lg:w-1/2",
              id: "headingOne",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                class: "section-title",
                "data-toggle": "collapse",
                "data-target": "#questionOne",
                "aria-expanded": "true",
                "aria-controls": "collapseOne",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  class: "lni lni-pencil"
                }), " M\xF4 t\u1EA3 chi ti\u1EBFt"]
              }), /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "card-body",
              children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
                transformImageUri: component_resolver/* transformImageUriPeform */.so,
                source: data,
                escapeHtml: true
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ var product_body_content = (ProductBodyContent);
;// CONCATENATED MODULE: ./components/commerce/product-detail-full.js









const ProductDetailFull = ({
  productThumb
}) => {
  var _productDetailItem$at2, _productDetailItem$at3, _productDetailItem$at4, _productDetailItem$at5, _productDetailItem$at6, _productDetailItem$at7, _productDetailItem$at8, _productDetailItem$at9, _productDetailItem$at10;

  const router = (0,router_.useRouter)();
  const productSlug = router.query.product;
  console.log(productSlug);

  if (!productSlug) {
    router.replace("/pages/catalog");
    return /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Empty   "
    });
  }

  console.log("load product detail swr");
  const {
    data,
    error
  } = (0,api/* getProductDetail */.jn)(productSlug, {
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
    return /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Empty"
    });
  }

  const productDetailItem = data.data[0];
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "detail-section",
    class: "",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "col-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "section-title-header text-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              class: "section-title",
              onClick: e => {
                var _productDetailItem$at;

                router.replace(`/pages/catalog#${productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at = productDetailItem.attributes) === null || _productDetailItem$at === void 0 ? void 0 : _productDetailItem$at.slug}`);
              },
              href: `/pages/catalog#${productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at2 = productDetailItem.attributes) === null || _productDetailItem$at2 === void 0 ? void 0 : _productDetailItem$at2.slug}`,
              as: `/pages/catalog#${productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at3 = productDetailItem.attributes) === null || _productDetailItem$at3 === void 0 ? void 0 : _productDetailItem$at3.slug}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                class: "lni lni-close",
                children: " "
              })
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "row product-detail",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "lg:w-1/2 wow fadeInRight product-detail-left",
          "data-wow-delay": "0.3s",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "video",
            children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
              image: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at4 = productDetailItem.attributes) === null || _productDetailItem$at4 === void 0 ? void 0 : _productDetailItem$at4.Image,
              imageClass: "product-image-horizontal-2x",
              style: "height: 250px"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "lg:w-1/2 wow fadeInLeft ml-10 product-detail-right",
          "data-wow-delay": "0.3s",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            class: "section-title wow fadeInUp",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
              children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at5 = productDetailItem.attributes) === null || _productDetailItem$at5 === void 0 ? void 0 : _productDetailItem$at5.Title]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            class: "intro-desc",
            children: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at6 = productDetailItem.attributes) === null || _productDetailItem$at6 === void 0 ? void 0 : _productDetailItem$at6.ShortDescription
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            class: "",
            children: ["    ", /*#__PURE__*/jsx_runtime_.jsx("i", {
              class: "lni lni-coin"
            }), "  Gi\xE1 :"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            class: "list-specification",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              class: "text-price",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                class: "text-line-through pr-5",
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at7 = productDetailItem.attributes) === null || _productDetailItem$at7 === void 0 ? void 0 : _productDetailItem$at7.OriginalPrice, "  "]
              }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                class: "money-protection"
              }), " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
                children: [" ", productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at8 = productDetailItem.attributes) === null || _productDetailItem$at8 === void 0 ? void 0 : _productDetailItem$at8.Price, " VN\u0110 "]
              })]
            }), productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at9 = productDetailItem.attributes.Custom_field) === null || _productDetailItem$at9 === void 0 ? void 0 : _productDetailItem$at9.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                class: "lni lni-checkmark-circle"
              }), " ", item.Title, " : ", item.Options]
            }))]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "row w-full",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              class: " lg:w-1/2 p-hori-15",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                class: "w-full btn btn-common  wow",
                "data-wow-duration": "1.3s",
                "data-wow-delay": "1.1s",
                children: "Mua ngay"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: " lg:w-1/2 p-hori-15",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                class: "w-full btn btn-common wow",
                "data-wow-duration": "1.3s",
                "data-wow-delay": "1.1s",
                children: "Th\xEAm v\xE0o gi\u1ECF"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "row product-description pt-10",
        children: /*#__PURE__*/jsx_runtime_.jsx(product_body_content, {
          data: productDetailItem === null || productDetailItem === void 0 ? void 0 : (_productDetailItem$at10 = productDetailItem.attributes) === null || _productDetailItem$at10 === void 0 ? void 0 : _productDetailItem$at10.Description
        })
      })]
    })
  });
};

/* harmony default export */ var product_detail_full = (ProductDetailFull);
;// CONCATENATED MODULE: ./pages/pages/catalog.js















external_react_modal_default().setAppElement("#__next");
var catalog_selectingProductItem = {};

const Home = ({
  catalog,
  catalogpage,
  layoutInfo
}) => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_commerce/* default */.Z, {
    categories: catalog,
    layout: layoutInfo,
    page: catalogpage,
    children: [/*#__PURE__*/jsx_runtime_.jsx(page_seo/* default */.Z, {
      seo: catalogpage.attributes.seo
    }), /*#__PURE__*/jsx_runtime_.jsx(commerce_hero/* default */.Z, {
      hero: catalogpage.attributes.Hero,
      page: catalogpage
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "margin-box-1x"
    }), /*#__PURE__*/jsx_runtime_.jsx(product_grid, {
      categories: catalog,
      featureProductWrap: catalogpage.attributes.FeatureProductWrap
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "margin-box-1x"
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "margin-box-1x"
    }), catalogpage.attributes.SaleOffProductWrap && Array.from(catalogpage.attributes.SaleOffProductWrap).length != 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Product_grid_3, {
        name: "SaleOffProductWrap",
        categories: catalog,
        featureProductWrap: catalogpage.attributes.SaleOffProductWrap,
        colClass: "w-full lg:w-1/3"
      }, "SaleOffProductWrap"), " ", /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "margin-box-1x"
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "margin-box-1x"
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}), catalogpage.attributes.MainProductWrap && Array.from(catalogpage.attributes.MainProductWrap).length != 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Product_grid_2, {
        name: "MainProductWrap",
        categories: catalog,
        featureProductWrap: catalogpage.attributes.MainProductWrap,
        colClass: "w-full lg:w-1/3"
      }, "MainProductWrap"), " ", /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "margin-box-1x"
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "margin-box-1x"
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}), catalogpage.attributes.RecommendProductWrap && Array.from(catalogpage.attributes.RecommendProductWrap).length != 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Product_grid_2, {
        name: "RecommendProductWrap",
        categories: catalog,
        featureProductWrap: catalogpage.attributes.RecommendProductWrap,
        colClass: "w-full lg:w-1/3"
      }, "RecommendProductWrap"), " ", /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "margin-box-1x"
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "margin-box-1x"
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "margin-box-1x"
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_modal_default()), {
      isOpen: !!router.query.product,
      onRequestClose: () => router.replace("/pages/catalog"),
      children: /*#__PURE__*/jsx_runtime_.jsx(product_detail_full, {
        productThumb: catalog_selectingProductItem
      })
    })]
  });
};

async function getStaticProps() {
  // Run API calls in parallel
  const [catalogRes, catalogpageRes] = await Promise.all([(0,api/* fetchAPI */.Io)("/product-categories", {
    populate: {
      FeatureProducts: {
        populate: "*"
      }
    }
  }), //http://localhost:8080/api/catalog-page?populate[FeatureProductWrap][populate][Items][populate]=*
  (0,api/* fetchAPI */.Io)("/catalog-page", {
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
/* harmony default export */ var catalog = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [544,664,672,12,721,164,38], function() { return __webpack_exec__(6818); });
module.exports = __webpack_exports__;

})();