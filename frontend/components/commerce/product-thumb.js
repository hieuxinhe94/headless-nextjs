import { bindProductThumb, getProductThumb } from "../../lib/api";
import React from "react";
import CustomImage from "../image";
import Link from "next/link"

const ProductThumb =   ({ productThumb  })  => {
  console.log("load productThumb swr");

  const onSelected = (a) => {
    console.log("Set selectingProductItem");
    selectingProductItem = a;
  }

  const { data, error } =   getProductThumb(productThumb.id, {
    populate: {
      Image: { populate: "*" },
      Custom_field : { populate: "*" },
    }
  });

 if (error) return "An error has occurred.";
 if (!data) return "Loading...";

 const productThumbItem =  data.data;
 
  return (
    <div id={productThumb?.attributes?.slug} class="cursor">
      <Link  key={productThumbItem?.id} replace
                                href={`/pages/catalog?product=${productThumbItem?.attributes?.slug}`}
                                as={`/pages/catalog?product=${productThumbItem?.attributes?.slug}`}
                                key={productThumbItem.id}  onClick={(e) =>onSelected(productThumb)}>
    <div class="w-full wow fadeInUp" data-wow-delay=".2s">
                        <div class="feature-box single-product">
                            <div class="tumb">
                                {/* <img src="assets/images/features/feature-icon-1.png" alt=""/> */}
                                <CustomImage image={productThumbItem?.attributes?.Image} imageClass={"product-image-horizontal"} />
                        </div>
              <h4 class="text-price"><b>{productThumbItem.attributes?.Price} VNĐ</b></h4>
              <h4 class="text-title">{productThumbItem.attributes?.Title}</h4>
            <i>{productThumbItem.attributes?.ShortDescription}</i>
          </div>
       </div>
      </Link>
     </div>
  );
}

export default ProductThumb
