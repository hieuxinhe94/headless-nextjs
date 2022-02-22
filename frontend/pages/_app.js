import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import "../assets/css/tailwind.css"
import "../assets/css/slick.css"
import "../assets/css/animate.css"
import "../assets/css/icon.css"
import "../assets/css/magnific-popup.css"
import "../assets/css/tiny-slider.css"
import "../assets/css/glightbox.min.css" 


import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
 
// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global?.attributes?.favicon)}
      />
      
    <script src="/js/vendor/jquery-3.5.1-min.js"></script>
    <script src="/js/vendor/modernizr-3.7.1.min.js"></script>
    <script src="/js/jquery.easing.min.js"></script>
    <script src="/js/scrolling-nav.js"></script>
    <script src="/js/slick.min.js"></script>
    <script src="/js/wow.min.js"></script>
    <script src="/js/particles.min.js"></script>
    <script src="/js/main.js"></script>

     </Head>
     <GlobalContext.Provider value={global?.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  })

  const layoutInfo = await fetchAPI("/homepage",  {
    populate: 
    {
      seo: { populate: "*" },
      Footer: 
      { 
          populate:  {        
            SubcribeBox:  { populate: "*" },
            HyperLink  :  { populate: "*" },
            BgImage:      { populate: "*" } }
      },
      SiteInfo:           { populate: "*" },
      HeaderBgImage:      { populate: "*" },
      HeroCentralImage:   { populate: "*" },
      LogoImage:          { populate: "*" },
    },
  });  
 
  const categories = await fetchAPI("/categories", { 
        filters: {
          IsTopMenu: {
            "[$eq]" : "true"
          }
        },
        populate: {
            PageHero:     { populate: "*" },
            PageBody :    { 
              populate: {
                Image : { populate: "*" },
                }
              },
          }});

  
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data, layoutInfo:  layoutInfo.data.attributes, categories: categories.data} }
}

export default MyApp
