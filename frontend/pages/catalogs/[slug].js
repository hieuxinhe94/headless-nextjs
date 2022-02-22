import Head from "next/head"
import { useRouter } from "next/router"
import ProductsList from "../../components/commerce/ProductsList"
import { getProductCatalogs, getProductCatalog } from "../../lib/api"

const CategoryPage = ({ category }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }
 

  return (
    <div>
      <Head>
        <title>{category?.Name} products</title>
      </Head>
      <ProductsList products={category?.attributes.products} />
    </div>
  )
}

export default CategoryPage

export async function getStaticProps({ params }) {

  const category = await getProductCatalog(params.slug, 
    { populate: "*",
    Image: { populate: "*" },
    Products: { 
      populate: "*", 
      Image: { populate: "*" } 
    },
  }
  //   {
  //   populate: {
  //     Products: { populate: "*" }
  //   }
  // }
  )
  return { props: { category } }
}

export async function getStaticPaths() {
  const categories = await getProductCatalogs();
  return {
    paths: categories.data.map((_category) => {
      return {
        params: { slug: _category.attributes.slug },
      }
    }),
    fallback: true,
  }
}
