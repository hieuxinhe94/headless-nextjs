import PinnedBlog from "../components/home/pinned-blog"
import Activity from "../components/home/activity"
import Brand from "../components/home/brand"
import Feature from "../components/home/feature"
import ReactMarkdown from "react-markdown"
import CustomImage from "../components/image"
import { getStrapiURL } from "./api"

export function resolverComponent(componentName,   ...args) {
     
    switch (componentName)
     {
         case "PinnedBlog": return (
            <PinnedBlog data={args[0]} args1={args[1]} />
         )
         case "Activity": return (
            <Activity activity={args[0]}  />
         )
         case "Activity": return (
            <Brand brand={args[0]}  />
         )
         case "Feature": return (
            <Feature feature={args[0]}  />
         )
         default: 
         return (
            <div />
         )
     }
  }
 

  export function resolverDynamicComponent(source,   ...args) {
   
   var contentBuilder = <></>

   console.log(contentBuilder);
   
   source.forEach(dynamicContent => {
      contentBuilder += resolverDynamicExtract(dynamicContent)
   });
   console.log("contentBuilder");
   console.log(contentBuilder);

   return contentBuilder;
 }

 export function transformImageUriPeform(uri, children, title, alt) {
    return uri.startsWith("/") ? getStrapiURL(uri) : uri;
 }
 export function resolverDynamicExtract(dynamicContent) { 
   console.log("dynamicContent")
   console.log(dynamicContent)
   if ((dynamicContent.__component).indexOf('dynamics.page-content') !== -1)
   return (
      <div class="container">
      <div class="justify-center row">
          <div class="w-full lg:w-2/3">
              <div class="pb-10 text-center section-title">
                 <span className="text-2xl">
                 {dynamicContent.Name}
                 </span>
            
                        <div class="m-auto line"></div>
              </div>  
          </div>
      </div>  
      <div class=" pt-12 pb-10 row"> 
       <ReactMarkdown
       transformImageUri={transformImageUriPeform}
                      source={dynamicContent.Content}
                      escapeHtml={true}
                  />
      </div>  
      </div>  
   );

   if ((dynamicContent.__component).indexOf('dynamics.page-image-content') !== -1)
   return (
      <div class="container pt-12 pb-10">
      <div class="row">
          <div class="w-full lg:w-1/2">
              <div class="relative pb-8 mt-12 video-content wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                  
                  
                  <div class="relative justify-center mr-6 rounded-lg shadow-md video-wrapper">
                      <div class="video-image justify-center">
                      <CustomImage  image={dynamicContent?.Image}  />
                       
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
                          <ReactMarkdown
                              source={dynamicContent.Title}
                              escapeHtml={false}
                          />
                      </div>  
                      <p class="text">
                          <ReactMarkdown
                              source={dynamicContent.Description}
                              escapeHtml={false}
                          />
                      </p>
                  </div>  
                
              </div> 
          </div>
      </div>  
  </div>  
   );

   return <></>
 }