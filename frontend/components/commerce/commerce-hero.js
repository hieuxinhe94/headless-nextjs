
import React from "react"
import { getStrapiURL } from "../../lib/api";
import Carousel from "./Carousel";

const CommerceHero = ({ hero, page }) => {
    return (
        <div class="hero-area" style={{ backgroundImage:  `url(`+getStrapiURL() + hero.BgImage?.data.attributes.url+`)` }}>
            <div class="container">
                <div class="justify-center row">
                    <div class="w-full lg:w-2/3">
                        <div class="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
                            <h3 class="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">{ hero?.CentralText}</h3>
                           
                            <h2 class="mb-3 text-4xl font-bold text-white header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                            { hero?.CentralTextDescription}
                            </h2>
                            <p class="mb-8 text-white text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s"> 
                             { hero?.CentralTextSecondary}</p>
                             <a href="#" class="main-btn pt-32 gradient-btn gradient-btn-2 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">
                            { hero?.CentralButtonText}
                            </a>
                        </div>  
                    </div>
                    <div class="w-full lg:w-1/3">
                    <Carousel ListItem={page?.attributes.CarouselGallery} />
                    </div>

                </div>  
            </div>
    </div>
  )
}

export default CommerceHero

