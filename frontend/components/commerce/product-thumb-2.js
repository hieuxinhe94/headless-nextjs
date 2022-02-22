import { bindProductThumb, getProductThumb } from "../../lib/api";
import React from "react";
import CustomImage from "../image";
import Link from "next/link"
const ProductThumb2 =   ({ productThumb  })  => {
  console.log("load productThumb swr");
  const { data, error } =   getProductThumb(productThumb.id, {
    populate: {
      Image: { populate: "*" },
      Custom_field : { populate: "*" },
    }
  });

 if (error) return "An error has occurred.";
 if (!data) return "Loading...";

 const productThumbItem =  data.data;
 
  const onSelected = (a) => {
    console.log("Set selectingProductItem");
    selectingProductItem = a;
  }

 return (
        <div id={productThumbItem?.attributes?.slug} class="col-md-6 col-lg-4 col-xs-12 padding-none cursor">
        <Link class="cursor" key={productThumbItem?.id} replace
                                href={`/pages/catalog?product=${productThumbItem?.attributes?.slug}`}
                                as={`/pages/catalog?product=${productThumbItem?.attributes?.slug}`}
                                key={productThumbItem.id}  onClick={(e) =>onSelected(productThumb)}>
        <div class="services-item wow fadeIn" data-wow-delay="0.2s">
        <div class="tumb">
              {/* <img src="assets/images/features/feature-icon-1.png" alt=""/> */}
                <CustomImage image={productThumbItem?.attributes?.Image} imageClass={"product-image-horizontal"} style={"height: 250px"}/>
              </div>
          <div class="services-content">
          <h4 class="text-price"><b>{productThumbItem.attributes?.Price} VNĐ</b></h4>
            <h3><b>{productThumbItem.attributes?.Title}</b></h3>
            <p>{productThumbItem.attributes?.ShortDescription}</p>
          </div>
        </div>
        </Link>
        </div>
  );
}

export default ProductThumb2
