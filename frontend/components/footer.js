import ReactMarkdown from "react-markdown"
import CustomImage from "../components/image"
import { getStrapiURL } from "../lib/api";
import SubcribeBox from "./subcribe-box";

const Footer = ({ footer, siteInfo }) => {
  
    const quickLinks = footer?.HyperLink.filter(link => link.GroupValue == 'QuickLink');
    const resourceLinks = footer?.HyperLink.filter(link => link.GroupValue == 'Resources');
    const contactLinks = footer?.HyperLink.filter(link => link.GroupValue == 'ContactUs');
   
  return (
    <footer id="footer" class="relative z-10 footer-area pt-120">
    <div class="footer-bg" style={{ backgroundImage:  `url(`+getStrapiURL() + footer?.BgImage?.data.attributes.url+`)` }} ></div>
    <div class="container">
        {
            (footer?.SubcribeBox) ? ( <SubcribeBox subcribeBox={footer?.SubcribeBox} />) : (<div></div>)
        }
        <div class="footer-widget pb-10">
            <div class="row">
                <div class="w-4/5 md:w-3/5 lg:w-2/6">
                    <div class="mt-12 footer-about wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <a class="inline-block mb-8 logo" href="index.html">
                           <CustomImage  image={siteInfo?.Logo}    />
                            {/* <img src="assets/images/logo.svg" alt="logo" class="w-40" /> */}
                        </a>
                        <p class="pb-10 pr-10 leading-snug text-white content-center">
                            {siteInfo?.AlterName}
                            </p>
                        <ul class="flex footer-social">
                            <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                            <li><a href="#"><i class="lni lni-twitter-filled"></i></a></li>
                            <li><a href="#"><i class="lni lni-instagram-filled"></i></a></li>
                            <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                        </ul>
                    </div>  
                </div>
                <div class="w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/6">
                    <div class="row">
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                            <div class="mt-12 link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                                <div class="footer-title">
                                    <h4 class="mb-8 text-2xl font-bold text-white">Quick Link</h4>
                                </div>
                                <ul class="link">
                                    { quickLinks?.map((item, i) => 
                                         (<li key={i + "a"}><a href={item.Link}>{item.Title}</a></li> ))
                                    }
                                </ul>
                            </div>  
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                            <div class="mt-12 link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div class="footer-title">
                                    <h4 class="mb-8 text-2xl font-bold text-white">Resources</h4>
                                </div>
                                <ul class="link">
                                    { resourceLinks?.map((item, i) => 
                                         (<li key={i + "b"}><a href={item.Link}>{item.Title}</a></li> ))
                                    }
                                </ul>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="w-4/5 sm:w-1/3 md:w-2/5 lg:w-2/6">
                    <div class="mt-12 footer-contact wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div class="footer-title">
                            <h4 class="mb-8 text-2xl font-bold text-white">Contact Us</h4>
                        </div>
                        <ul class="contact">
                                    { contactLinks?.map((item, i) => 
                                         (<li key={i + "c"}><a href={item.Link}>{item.Title}</a></li> ))
                                    }
                           
                        </ul>
                    </div> 
                </div>
            </div> 
        </div>  
        <div class="py-8 border-t border-gray-200 footer-copyright">
            <p class="text-white">
            {siteInfo?.CopyrightText}
            </p>
        </div>  
        </div> 
        <div id="particles-2" class="particles"></div>
    </footer>
   )
}

export default Footer
