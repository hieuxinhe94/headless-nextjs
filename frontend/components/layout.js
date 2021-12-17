import Footer from "./footer"


const Layout = ({ children, categories, seo }) => (
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

    
    {children}
     
   

    <Footer footer={{}} />
    <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
  </>
)

export default Layout
