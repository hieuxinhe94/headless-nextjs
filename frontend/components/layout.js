import Footer from "./footer"
import CustomImage from "../components/image"
import Nav from "../components/nav"

const Layout = ({ children, categories, layout, color }) => {
    var textColor = 'text-white' ;
    if(color) {
        textColor = color
    }  
    return(
  <>
    <div class="hidden preloader">
            <div class="loader">
                <div class="ytp-spinner">
                    <div class="ytp-spinner-container">
                        <div class="ytp-spinner-rotator">
                            <div class="ytp-spinner-left">
                                <div class="ytp-spinner-circle"></div>
                            </div>
                            <div class="ytp-spinner-right">
                                <div class="ytp-spinner-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    <header class="header-area">
        <div class="navbar-area">
            <div class="container relative">
                <div class="row">
                    <div class="w-full">
                        <nav class="flex items-center justify-between navbar navbar-expand-lg">
                            <a className={ "mr-4 navbar-brand " + textColor} href="./">
                                {/* <img src={homepage.attributes.LogoImage.attributes.url } alt="Logo" /> */}
                                <CustomImage image={layout.LogoImage} />
                                {layout.SiteInfo.SiteName }
                            </a>
                            <button class="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none" id="navbarOne">
                         
                            <Nav color={textColor} categories={categories} />

                            </div>  
                            
                            {/* <div class="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
                                <a class="main-btn gradient-btn" data-scroll-nav="0" href={homepage.attributes.Hero?.QuickLink?.Href} rel="nofollow">{
                                 homepage.attributes.Hero?.QuickLink?.Title
                                }
                                </a>
                            </div> */}
                        </nav>  
                    </div>
                </div>  
            </div> 
        </div>  
    </header>

    
    {children}
     
    <Footer footer={layout.Footer} siteInfo={layout.SiteInfo} />
    <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
  </>)
}

export default Layout
