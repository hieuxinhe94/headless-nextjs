import React from "react"
import Carousel from "../../components/commerce/Carousel"
import CommerceHero from "../../components/commerce/commerce-hero"
import ProductGridThumb from "../../components/commerce/product-grid"
import ProductGrid2Thumb from "../../components/commerce/Product-grid-2"
import ProductGrid3Thumb from "../../components/commerce/Product-grid-3"
import LayoutCommerce from "../../components/layout-commerce"
import PageSeo from "../../components/page-seo"
import { fetchAPI } from "../../lib/api"
import Modal from "react-modal";
import { useRouter } from "next/router"
import ProductDetailFull from "../../components/commerce/product-detail-full"
Modal.setAppElement("#__next");
var selectingProductItem = {};

const Home = ({catalog, catalogpage, layoutInfo }) => {
     
  const router = useRouter();
  return (
    <LayoutCommerce categories={catalog} layout={layoutInfo} page={catalogpage}>
        <PageSeo seo={catalogpage.attributes.seo} />
        <CommerceHero hero={catalogpage.attributes.Hero} page={catalogpage}/> 
        <div class="margin-box-1x" />
        <ProductGridThumb categories={catalog} featureProductWrap={catalogpage.attributes.FeatureProductWrap} />   
        
        <div class="margin-box-1x" />
        <hr/>
        <div  class="margin-box-1x" />
        {
          (catalogpage.attributes.SaleOffProductWrap && Array.from(catalogpage.attributes.SaleOffProductWrap).length != 0) ? 
          (<div><ProductGrid3Thumb key={"SaleOffProductWrap"} name={"SaleOffProductWrap"} categories={catalog} featureProductWrap={catalogpage.attributes.SaleOffProductWrap} colClass="w-full lg:w-1/3" /> <div  class="margin-box-1x" /><hr/><div  class="margin-box-1x" /></div> ) : (<></>)
        }
       
        {
          (catalogpage.attributes.MainProductWrap && Array.from(catalogpage.attributes.MainProductWrap).length != 0) ? 
          (<div><ProductGrid2Thumb  key={"MainProductWrap"} name={"MainProductWrap"} categories={catalog} featureProductWrap={catalogpage.attributes.MainProductWrap} colClass="w-full lg:w-1/3" /> <div class="margin-box-1x" /><hr/><div  class="margin-box-1x" /></div> ) : (<></>)
        }

        {
          (catalogpage.attributes.RecommendProductWrap && Array.from(catalogpage.attributes.RecommendProductWrap).length != 0) ? 
          (<div><ProductGrid2Thumb  key={"RecommendProductWrap"} name={"RecommendProductWrap"} categories={catalog} featureProductWrap={catalogpage.attributes.RecommendProductWrap} colClass="w-full lg:w-1/3" /> <div class="margin-box-1x" /><hr/><div  class="margin-box-1x" /></div> ) : (<></>)
        }
     
        <div class="margin-box-1x" />
        <Modal isOpen={!!router.query.product} onRequestClose={() => router.replace("/pages/catalog")} >
          <ProductDetailFull productThumb={selectingProductItem} />
      </Modal>
    </LayoutCommerce>
  )
}


export async function getStaticProps() {
  // Run API calls in parallel
  const [catalogRes, catalogpageRes] = await Promise.all([
    fetchAPI("/product-categories",  {
        populate: {
          FeatureProducts: { populate: "*" },
    }}), 
    //http://localhost:8080/api/catalog-page?populate[FeatureProductWrap][populate][Items][populate]=*
    fetchAPI("/catalog-page",  {
      populate: {
        populate: "*" ,
        Hero: { populate: "*" ,Image: { populate: "*" },BgImage: { populate: "*" },},
        Footer:   { populate:  {        SubcribeBox: { populate: "*" },HyperLink  : { populate: "*" },BgImage: { populate: "*" } }},
         CarouselGallery : {  populate: "*" },
         FeatureProductWrap  :     { populate: {Items: { populate: "*" }}}, 
         MainProductWrap   :     { populate: {Items: { populate: "*" }}},
         RecommendProductWrap  :     { populate: {Items: { populate: "*" }}},
         SaleOffProductWrap  :     { populate: {Items: { populate: "*" }, BgImage:  { populate: "*" }}},
      }}), 
  ]);
    
  return {
    props: {
      catalog: catalogRes.data,
      catalogpage: catalogpageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
