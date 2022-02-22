import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout" 
import PageHero from "../../components/home/article-hero"
import PageBody from "../../components/home/article-content";
import Seo from "../../components/seo";
import PageSeo from "../../components/page-seo";

const Page = ({ slug, category, categories, layoutInfo }) => {
  // const seo = {
  //   metaTitle: category.attributes.name,
  //   metaDescription: `All ${category.attributes.name} articles`,
  // }
   
  category = categories.filter(page => page.attributes.slug === slug)[0];
  // console.log("category");
  // console.log(category);

  console.log(category?.attributes.TextColor )

  var textColor  ;
  if(category?.attributes?.TextColor == 'Black') {
      textColor = 'text-black'
  } else {
      textColor = 'text-white'
  }

  return (
    <Layout categories={categories} layout={layoutInfo} color={textColor}  >
      <PageSeo seo={category.attributes.seo} />
      <PageHero data={category.attributes.PageHero} color={textColor} />
      <PageBody data={category.attributes.PageBody} />
      {category.attributes.Name}
    </Layout>
  )
}

export async function getStaticPaths(context) {
  console.log("context.slug")
  
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] })

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // const articlesRes = await fetchAPI("/categories", {
  //   filters: {
  //     slug: params.slug,
  //   },
  //   populate: {
  //     PageContent: { populate: "*" }
  //   },
  // })

  // console.log("articlesRes");
  // console.log(articlesRes.data.attributes);
  
  return {
    props: {
      slug: params.slug
    },
    revalidate: 1,
  }
}
 
 
 

export default Page
