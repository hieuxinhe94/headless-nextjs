
import React from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import CustomImage from "../image"

const PinnedBlog = ({ data, args1 }) => {
  
    return (
        <section id="blog" class="blog-area pt-120">
        <div class="container">
            <div class="row">
                <div class="w-full lg:w-1/2">
                    <div class="pb-8 section-title">
                        <div class="line"></div>
                        
                        {data?.Title}
                        <ReactMarkdown
                                    source={data?.Description}
                                    escapeHtml={false}
                        />
                    </div>  
                </div>
            </div>  
            <div class="justify-center row">

            { args1?.slice(0,3)?.map((post, i) => (  
                 
                 <div class="w-full md:w-2/3 lg:w-1/3">
                 <div class="mx-4 mt-10 single-blog wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                     <div class="mb-5 overflow-hidden blog-image rounded-xl">
                          
                         <CustomImage  image={post.attributes.image} imageClass={"w-full"}  key={i} />
                     </div>
                     <div class="blog-content">
                         {/* <ul class="flex mb-5 meta">
                             <li>Posted By: <a href=" ">{post.attributes.author?.name}</a></li>
                             <li class="ml-12">{post.attributes.publishedAt}</li>
                         </ul> */}
                         <p class="mb-6 text-2xl leading-snug text-gray-900"  >{post.attributes.title}</p>
                         <a class="text-theme-color-2" href={"/articles/" + post.attributes.slug}>
                             Learn More
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

export default PinnedBlog

