
import React from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import CustomImage from "../image"
const Activity = ({ activity }) => {

    console.log("activity");
    console.log(activity);

    const businessSections = activity.Steps;


  return (
      <div>
        { activity?.map((item, i) => (  
            
            <div key={i}>
                { item.Steps.map((item, index) => ( 
                   buildViewStyle(index, item)
                ))
                }
            </div>
        ))
        }
     </div>
  )
}

const buildViewStyle = (index, item) => {
    if (index %2 === 0) {
        return (
            <section  class="relative pt-20 about-area">
            <div class="container">
                <div class="row">
                    <div class="w-full lg:w-1/2">
                        <div class="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                            <div class="mb-4 section-title">
                                <div class="line"></div>
                                <div class="title">
                                <ReactMarkdown
                                    source={item.Title}
                                    escapeHtml={false}
                                />
                                </div>
                            </div>  
                            <ReactMarkdown
                                    source={item.Description}
                                    escapeHtml={false}
                                />
                            <a href={item.NavigateLink} class="main-btn gradient-btn">{item.NavigateLable}</a>
                        </div>  
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <CustomImage  image={item.Media}  key={item.id} />
                        </div>  
                    </div>
                </div> 
            </div> 
            <div class="about-shape-1">
                <CustomImage  image={item.BgMedia}  key={item.id} />
            </div>
        </section>
    );
    } else {
      return ( 
           <section  class="relative pt-20 about-area">
            <div class="about-shape-2">
            <CustomImage  image={item.BgMedia}  key={item.id} />
        </div>
        <div class="container">
            <div class="row">
                <div class="w-full lg:w-1/2 lg:order-last">
                    <div class="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div class="mb-4 section-title">
                            <div class="line"></div>
                            <div class="title">
                            <ReactMarkdown
                                source={item.Title}
                                escapeHtml={false}
                            />
                            </div>
                        </div>  
                        <ReactMarkdown
                                source={item.Description}
                                escapeHtml={false}
                            />
                        <a href={item.NavigateLink} class="main-btn gradient-btn">{item.NavigateLable}</a>
                    </div>  
                </div>
                <div class="w-full lg:w-1/2 lg:order-first">
                <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                    <CustomImage  image={item.Media}  key={item.id} />
                    </div>  
                </div>
            </div> 
        </div> 
    </section>);
    }

}

export default Activity

