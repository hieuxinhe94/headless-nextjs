import React from "react"
 
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Nav from "../components/nav"
import Hero from "../components/home/hero"
import Brand from "../components/home/brand"
import Feature from "../components/home/feature"
import Activity from "../components/home/activity"
import BusinessTalk from "../components/home/business-talk"
import OurTeam from "../components/home/our-team"
import PinnedBlog from "../components/home/pinned-blog"
import CustomImage from "../components/image"
 
const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />

      <header class="header-area">
        <div class="navbar-area">
            <div class="container relative">
                <div class="row">
                    <div class="w-full">
                        <nav class="flex items-center justify-between navbar navbar-expand-lg">
                            <a class="mr-4 navbar-brand text-white" href="./">
                                {/* <img src={homepage.attributes.LogoImage.attributes.url } alt="Logo" /> */}
                                <CustomImage image={homepage.attributes.LogoImage} />
                                {homepage.attributes.SiteInfo.SiteName }
                            </a>
                            <button class="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none" id="navbarOne">
                         
                            <Nav categories={categories} />

                            </div>  
                            
                            <div class="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
                                <a class="main-btn gradient-btn" data-scroll-nav="0" href="#" rel="nofollow">Architecture Preview</a>
                            </div>
                        </nav>  
                    </div>
                </div>  
            </div> 
        </div>  
        
        <Hero hero={homepage.attributes.Hero}  homepage={homepage} /> 
    </header>

    <Brand brand={homepage.attributes.Brand} />

    <Feature feature={homepage.attributes.HighlightingFeatures} />

    <Activity activity={homepage.attributes.Activity} />

    <BusinessTalk business={homepage.attributes.Business} />

    <OurTeam team={homepage.attributes.OurTeam} />

    <PinnedBlog blog={articles} />
     
    </Layout>
  )
}


export async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes, articlesRes, categoriesRes ] = await Promise.all([
    fetchAPI("/homepage",  {
      populate: {
        seo: { populate: "*" },
        Hero: { populate: "*" },
        SiteInfo: { populate: "*" },
        Brand: { 
          populate: {  BrandLogo: { populate: "*" }}
      },
        HighlightingFeatures:  { populate:  {  Items: { populate: "*" }} },
        Activity:  { populate: {  Steps : { populate: "*" } }},
        SiteInfo:  { populate: "*" },
        HeaderBgImage:  { populate: "*" },
        HeroCentralImage:  { populate: "*" },
        LogoImage: { populate: "*" },
        FooterBgImage: { populate: "*" },
      },
    }),
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    //fetchAPI("/brands", { populate: "*" }),
  ])
  
  console.log("homepageRes  ");
  // console.log(homepageRes.data);
   
  // console.log("SiteInfo");
 

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
