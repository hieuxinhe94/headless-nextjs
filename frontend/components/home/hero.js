
import React from "react"
import { getStrapiURL } from "../../lib/api";

const Hero = ({ hero, homepage }) => {
    
   
   
   // const centralImage =     getStrapiURL() + homepage.attributes.HeroCentralImage?.data.attributes.url;
   // const centralBgImage =   getStrapiURL() + homepage.attributes.HeaderBgImage?.data.attributes.url;
     
    return (
        <div id=" " class="header-hero" style={{ backgroundImage:  `url(`+getStrapiURL() + homepage.attributes.HeaderBgImage?.data.attributes.url+`)` }}>
            <div class="container">
                <div class="justify-center row">
                    <div class="w-full lg:w-2/3">
                        <div class="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
                            <h3 class="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">{ hero?.CentralText}</h3>
                            <a href="#" class="main-btn pt-32 gradient-btn gradient-btn-2 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">
                            { hero?.CentralButtonText}
                            </a>
                            <h2 class="mb-3 text-4xl font-bold text-white header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                            { hero?.CentralTextDescription}
                            </h2>
                            <p class="mb-8 text-white text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s"> 
                             { hero?.CentralTextSecondary}</p>
                           
                        </div>  
                    </div>
                </div>  
                <div class="justify-center row">
                    <div class="w-full lg:w-2/3">
                        <div class="text-center header-hero-image wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                            <img src={getStrapiURL() + homepage.attributes.HeroCentralImage?.data.attributes.url} alt="hero" /> 
                        </div> 
                    </div>
                </div> 
            </div> 
            <div id="particles-1" class="particles"></div>
        </div>  
  )
}

export default Hero

