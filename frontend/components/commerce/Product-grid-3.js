import Link from "next/link"
import ProductThumb from "./product-thumb"
import ProductCategory from "./ProductCategory"
import  {useEffect} from "react";
import { useState } from 'react'; 
import { useRouter } from 'next/router';
import ProductThumb2 from "./product-thumb-2";
import ProductThumb3 from "./product-thumb-3";
import { getStrapiURL } from "../../lib/api";

var defaultgroupIds = {};
var featureProductWrapTmp = {}
var productsFiltered = {};

defaultgroupIds["0"] = "";
featureProductWrapTmp["0"] = "";
productsFiltered["0"] = "";
const ProductGrid3Thumb = ({ featureProductWrap , categories = [], colClass="w-full lg:w-1/2", name = "ProductGrid2Thumb" }) => {
    console.log(name)
    if(!featureProductWrap || Array.from(featureProductWrap).length == 0) return <></>
    featureProductWrapTmp[name] = featureProductWrap;
    defaultgroupIds[name] = defaultgroupIds[name] ?? featureProductWrap[0].id;
    productsFiltered[name] = productsFiltered[name] ?? featureProductWrapTmp[name].filter(t=> t.id == defaultgroupIds[name])[0];
    const router = useRouter();

    const ChangeFilter = (a) => {
    defaultgroupIds[name] = a.id;
    productsFiltered[name] = a;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id)
  }
  
  return (
      <div class="w-full">
          <section class="counter-section section-padding" 
          style={{ backgroundImage:  `url(`+getStrapiURL() + productsFiltered[name]?.BgImage?.data.attributes.url+`)` }} >
      <div class="container">

      <div class="row justify-center">
            <div class="col-12">
            <ul class="nav nav-tabs flex" id="myTab" role="tablist">
                                    {featureProductWrap.map((item, index) => (
                                    <li key={index} id={"#" + item.id} class="nav-product-grid-horizontal-active" onClick={(e) =>ChangeFilter(item)}> 
                                        <a class="nav-link" id="thursday-tab" data-toggle="tab" href={"#" + item.id} role="tab" aria-controls="thursday" aria-selected="false">
                                            <div class="item-text uppercase">
                                            <h4 > {item.GroupName}</h4>
                                            <h5></h5>
                                            </div>
                                        </a>
                                    </li>))}
                                    </ul>
            </div>
        </div>
        
        <div class="row">
             { productsFiltered[name]?.Items?.map((_product) => (
                                        (_product?.detail) ?
                                      
                                        <div key={_product.id} class={colClass}>
                                            <ProductThumb3 key={_product.id} productThumb={_product.detail.data} />
                                        </div>
                                        : <div key={_product.id}/>
                                    ))}
                </div>
            </div>
            </section>
          </div>
  )
}

export default ProductGrid3Thumb
