import React from "react"
 
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

import Hero from "../components/home/hero" 

import { resolverComponent } from "../lib/component-resolver"
 
const Home = ({ articles, categories, homepage, layoutInfo }) => {
     
  return (
    <Layout categories={categories} layout={layoutInfo}>
      <Seo seo={homepage.attributes.seo} />
      <Hero hero={homepage.attributes.Hero}  homepage={homepage} /> 

    { resolverComponent("Brand",  homepage.attributes.Brand) }
    { resolverComponent("Feature",  homepage.attributes.HighlightingFeatures) }
    { resolverComponent("Activity",  homepage.attributes.Activity) }
    { resolverComponent("PinnedBlog",  homepage.attributes.RecentBlog, articles) }   
    </Layout>
  )
}


export async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes, articlesRes ] = await Promise.all([
    fetchAPI("/homepage",  {
      populate: {
        seo: { populate: "*" },
        Hero: { populate: "*" },
        SiteInfo: { populate: {
          Logo: { populate: "*" },
          QuickLink: { populate: "*" },
        } },
        Brand: { 
          populate: {  
            BrandLogo: { populate: "*" }}
        },
        HighlightingFeatures: {
           populate:  {  
             Items: { populate: "*" }}
            },
        Activity:  { 
          populate: {  
            Steps : { populate: "*" },
            Info:  { populate: "*"},
            Media : { populate: "*" },
            BgMedia : { populate: "*" },
            Items: { populate: "*" },
            
       }},
       RecentBlog: { 
         populate: {
            Articles : { populate: "*" },
          }},
     
          HeroCentralImage:  { populate: "*" },
         LogoImage: { populate: "*" },
     
      },
    }),
    fetchAPI("/articles", { populate: "*" }),
 
    //fetchAPI("/brands", { populate: "*" }),
  ])
  
 

  
 
  return {
    props: {
      articles: articlesRes.data,
     
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
