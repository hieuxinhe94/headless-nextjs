
import React from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import CustomImage from "../image"
const BusinessTalk = ({ business }) => {

    return (
        <section id="facts" class="pt-20 video-counter">
        <div class="container">
            <div class="row">
                <div class="w-full lg:w-1/2">
                    <div class="relative pb-8 mt-12 video-content wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        
                        <CustomImage  image={business.BgMedia}  imageClass={"absolute bottom-0 left-0 -ml-8 dots"} />
                        <div class="relative mr-6 rounded-lg shadow-md video-wrapper">
                            <div class="video-image">
                            <CustomImage  image={business.Media}  />
                             
                            </div>
                            {/* <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-blue-900 bg-opacity-25 rounded-lg video-icon">
                                <a href="https://www.youtube.com/watch?v=r44RKWyfcFw" class="video-popup"><i class="lni lni-play"></i></a>
                            </div> */}
                        </div>  
                    </div>  
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div class="counter-content">
                            <div class="mb-8 section-title">
                                <div class="line"></div>
                                <div class="title"><ReactMarkdown
                                    source={business.Title}
                                    escapeHtml={false}
                                /></div>
                            </div>  
                            <p class="text">
                                <ReactMarkdown
                                    source={business.Description}
                                    escapeHtml={false}
                                />
                            </p>
                        </div>  
                        <div class="row no-gutters">
                        { business.Items?.map((item, i) => (  
                              <div class={"flex items-center justify-center single-counter counter-color-" + (i + 1)}>
                              <div class="text-center counter-items">
                                  <span class="text-xl font-bold text-white">{item.Title}</span>
                                  <p class="text-white">{item.Description}</p>
                              </div>
                          </div>  
                        ))
                        }
                        </div>  
                    </div> 
                </div>
            </div>  
        </div>  
    </section>

 

  )
}

export default BusinessTalk

