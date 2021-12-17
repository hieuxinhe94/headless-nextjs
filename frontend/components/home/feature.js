
import React from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import CustomImage from "../image"

const Feature = ({ feature }) => {
    console.log("feature");
    console.log(feature);

    const title = feature.CentralText;
    const items = feature.Items ;
  return (
    <section id="features" class="services-area pt-120">
    <div class="container">
        <div class="justify-center row">
            <div class="w-full lg:w-2/3">
                <div class="pb-10 text-center section-title">
                    <div class="m-auto line"></div>
                    <ReactMarkdown
                        source={title}
                        escapeHtml={false}
                    />
                </div>  
            </div>
        </div>  
        <div class="justify-center row"> 
                    { items.map((item) => (
                           <div class="w-full sm:w-2/3 lg:w-1/3" key={item.id}>
                           <div class="single-services wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                               <div class="services-icon">
                                   {/* <img class="shape-1" src="assets/images/services-shape.svg" alt="shape" /> */}
                                   <CustomImage  imageClass={'shape'} image={item.Media}  key={item.id} />
                                   {/* <img class="shape-1" src="assets/images/services-shape-1.svg" alt="shape" /> */}
                                   <i class={item.IconClass}></i>
                               </div>
                               <div class="mt-8 services-content">
                                   <h4 class="mb-8 text-xl font-bold text-gray-900">{item.Title}</h4>
                                   <p class="mb-8">{item.Description}</p>
                                   <a href={item.NavigateLink} class="duration-300 hover:text-theme-color" >
                                       {item.NavigateTextLabel}
                                    <i class="ml-2 lni lni-chevron-right"></i>
                                   </a>
                               </div>
                           </div>  
                       </div>
                     ))
                    }
        </div>  
    </div>  
</section>
  )
}

export default Feature 

