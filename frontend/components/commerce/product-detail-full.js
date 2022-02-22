import { bindProductThumb, getProductDetail, getProductThumb } from "../../lib/api";
import React from "react";
import CustomImage from "../image";
import { useRouter } from "next/router"
import Link from "next/link"
import ProductBodyContent from "./product-body-content";

const ProductDetailFull =   ({ productThumb  })  => {

  const router = useRouter();
  const productSlug =  router.query.product;
  console.log(productSlug);

  if(!productSlug) {
    router.replace("/pages/catalog");
    return (<h3>Empty   </h3>)
  }

  console.log("load product detail swr");
  const { data, error } =   getProductDetail(productSlug, {
    populate: {
      populate: "*" ,
      Image: { populate: "*" },
      Custom_field : { populate: "*" },
    }
  });

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log("load ProductDetailFull");
  console.log(productDetailItem);

  if(!data?.data || Array.from(data.data).length == 0) {
      return (<h3>Empty</h3>)
  }

  const productDetailItem =  data.data[0];
 
  return (
    <section id="detail-section" class="">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
            <button class="section-title" onClick={(e) => {router.replace(`/pages/catalog#${productDetailItem?.attributes?.slug}`)}}
                                href={`/pages/catalog#${productDetailItem?.attributes?.slug}`}
                                as={`/pages/catalog#${productDetailItem?.attributes?.slug}`}>
             <i class="lni lni-close"> </i> 
            </button>
            </div>
          </div>
          </div>
          <div class="row product-detail">
        
          <div class="lg:w-1/2 wow fadeInRight product-detail-left" data-wow-delay="0.3s">
            <div class="video">
            <CustomImage image={productDetailItem?.attributes?.Image} imageClass={"product-image-horizontal-2x"} style={"height: 250px"} />
            </div>
          </div>
          <div class="lg:w-1/2 wow fadeInLeft ml-10 product-detail-right" data-wow-delay="0.3s">
         
          <h1 class="section-title wow fadeInUp" data-wow-delay="0.2s">
              <b> {productDetailItem?.attributes?.Title}</b>
            </h1>
            <p class="intro-desc"> 
              { productDetailItem?.attributes?.ShortDescription }
            </p>
            <h3 class="">    <i class="lni lni-coin"></i>  Giá :</h3>
            <ul class="list-specification">
              <li class="text-price">
              <span class="text-line-through pr-5"> { productDetailItem?.attributes?.OriginalPrice}  </span>
              <i class="money-protection"></i> <b> {productDetailItem?.attributes?.Price} VNĐ </b>
             </li>
              { productDetailItem?.attributes.Custom_field?.map((item, index) => (
                <li><i class="lni lni-checkmark-circle"></i> {item.Title} : {item.Options}</li>
              ))
              }
            </ul>
            <div class="row w-full">
              <div class=" lg:w-1/2 p-hori-15" >
                <a href="#" class="w-full btn btn-common  wow" data-wow-duration="1.3s" data-wow-delay="1.1s">
                  Mua ngay
                 </a>
              </div>
             
              <div class=" lg:w-1/2 p-hori-15" >
                <a href="#" class="w-full btn btn-common wow" data-wow-duration="1.3s" data-wow-delay="1.1s">
                  Thêm vào giỏ
               </a>
            </div>
            </div>
          </div> 
         </div>
       
        <div class="row product-description pt-10">
                <ProductBodyContent data={productDetailItem?.attributes?.Description } />
        </div>
      </div>
    </section>
  );
}

export default ProductDetailFull
