
import React from "react"
import { getStrapiURL } from "../../lib/api";

const PageHero = ({ data, color }) => {
 
    var centralImage,centralBgImage;
    if(data.Image?.data?.attributes.url) {
          centralImage =     getStrapiURL() + data.Image?.data?.attributes.url;
    }
    if(data.BgImage?.data?.attributes.url) {
        centralBgImage =     getStrapiURL() + data.BgImage?.data?.attributes.url;
    }

    var textColor  = 'text-white';
    if(color) {
        textColor = color
    } 
     
    return (
        <div id=" " class="header-hero" style={{ backgroundImage:  `url(`+centralBgImage+`)` }}>
            <div class="container">
                <div class="justify-center row">
                    <div class="w-full lg:w-2/3">
                        <div class="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
                            <h3 class={"text-4xl font-light leading-tight header-sub-title wow fadeInUp "  + textColor} data-wow-duration="1.3s" data-wow-delay="0.2s">{ data?.CentralText}</h3>
                             
                        </div>  
                    </div>
                </div>  
                <div class="justify-center row">
                    <div class="w-full lg:w-2/3">
                        <div class="text-center header-hero-image wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                            <img className="inline-block" src={centralImage} alt="hero" style={ { display: centralImage != null ? 'block' : 'none' } } /> 
                        </div> 
                    </div>
                </div> 
                <div class="justify-center row">
                    <div class="w-full lg:w-2/3">
                        <div class="pt-16 mb-12 text-center lg:pt-16 header-hero-content">
                           
                            <h2 class={"mb-3 text-4xl font-bold header-title wow fadeInUp " + textColor}  data-wow-duration="1.3s" data-wow-delay="0.5s">
                            { data?.CentralTextDescription}
                            </h2>
                            
                        </div>  
                    </div>
                </div>  
            </div> 
            <div id="particles-1" class="particles"></div>
        </div>  
  )
}

export default PageHero

