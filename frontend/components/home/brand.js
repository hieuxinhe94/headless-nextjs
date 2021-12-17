
import React from "react"
import Link from "next/link"
import CustomImage from "../image"
const Brand = ({ brand }) => {
  
const brandItemss = brand.BrandLogo;
  return (
        <div class="pt-24 brand-area">
        <div class="container">
            <div class="row">
                <div class="w-full">
                    <div class="items-center justify-center row lg:justify-between">
                    { brandItemss.map((item) => (
                        <div  class="single-logo hover:opacity-100 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" >
                            <CustomImage image={item.Logo}  key={item.id} />
                        </div>  ))
                    }
                    </div>  
                </div>
            </div>    
        </div>  
        </div>
  )
}

export default Brand

