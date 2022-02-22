import { bindProductThumb, getProductThumb } from "../../lib/api";
import React from "react";
import CustomImage from "../image";
import Link from "next/link"
 
const ProductThumb3 =   ({ productThumb  })  => {
  console.log("load productThumb swr");
  const { data, error } =   getProductThumb(productThumb.id, {
    populate: {
      Image: { populate: "*" },
      Custom_field : { populate: "*" },
    }
  });

  const onSelected = (a) => {
    console.log("Set selectingProductItem");
    selectingProductItem = a;
  }

 if (error) return "An error has occurred.";
 if (!data) return "Loading...";

 const productThumbItem =  data.data;
 
  return (
    <div  key={productThumbItem?.attributes?.slug} class="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center text-white cursor">
      <Link class="cursor" key={productThumbItem?.id} replace
                                href={`/pages/catalog?product=${productThumbItem?.attributes?.slug}`}
                                as={`/pages/catalog?product=${productThumbItem?.attributes?.slug}`}
                                key={productThumbItem.id}  onClick={(e) =>onSelected(productThumb)}>
      <div class="counter wow fadeInRight" data-wow-delay="0.3s">
        <div class="icon">
        <CustomImage image={productThumbItem?.attributes?.Image} imageClass={"product-image-horizontal"} style={"height: 250px"} />
          </div>
          <h4 class="text-price"><b>{productThumbItem.attributes?.Price} VNĐ</b></h4>
          <h3><b>{productThumbItem.attributes?.Title}</b></h3>
          <i>{productThumbItem.attributes?.ShortDescription}</i>
      </div>
      </Link>
    </div>
  );
}

export default ProductThumb3
