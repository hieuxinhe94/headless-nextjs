import Link from "next/link"
import ProductThumb from "./product-thumb"
import ProductCategory from "./ProductCategory"
import  {useEffect} from "react";
import { useState } from 'react'; 
import { useRouter } from 'next/router';

var defaultgroupId;
var featureProductWrapTmp;
var productsFiltered;

const ProductGridThumb = ({ featureProductWrap = [], categories = [], col = 3, row = 5 }) => {

    if(!featureProductWrap || featureProductWrap.length ==0) return <></>
    
    featureProductWrapTmp = featureProductWrap;
    defaultgroupId = defaultgroupId ?? featureProductWrap[0].id;
    productsFiltered = productsFiltered ?? featureProductWrap.filter(t=> t.id == defaultgroupId)[0].Items;
    const router = useRouter();

    const ChangeFilter = (a) => {
    defaultgroupId = a.id;
    productsFiltered = a.Items;
    router.replace(router.asPath.replace(/\#.+/, '') + "#" + a.id)
  }
  
  return (
    <div id="product-section" className="container flex flex-wrap mx-auto gap-2 mt-8">
        <div class="w-full">
            <div class="container">
                <div class="row">
                    <div class="w-full lg:w-1/3">
                        {/* <ProductCategory categories={categories} onSelected={onChangeFilter}/> */}
                        <section id="schedules" class="schedule section-padding">
                            <div class="container">
                                <div class="schedule-area  wow fadeInDown" data-wow-delay="0.3s">
                                <div class="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
                                    <div class="table-responsive">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    {featureProductWrap.map((item, index) => (
                                    <li key={index} id={"#" + item.id} class="nav-item row" onClick={(e) =>ChangeFilter(item)}> 
                                        <a class="nav-link" id="thursday-tab" data-toggle="tab" href={"#" + item.id} role="tab" aria-controls="thursday" aria-selected="false">
                                            <div class="item-text">
                                            <h4> {item.GroupName}</h4>
                                            <h5></h5>
                                            </div>
                                        </a>
                                    </li>))}
                                    </ul>
                                    </div> 
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="w-full lg:w-2/3">
                        <div class="row">
                            { productsFiltered.map((_product) => (
                                (_product?.detail) ?
                                <div key={_product.id} class="w-full lg:w-1/2">
                                    <ProductThumb key={_product.id} productThumb={_product.detail.data} />
                                </div>
                                : <div key={_product.id}/>
                            ))}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductGridThumb
