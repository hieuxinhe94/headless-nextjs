
import Link from "next/link"
import CustomImage from "../image"

const ProductsList = ({ products }) => {

  if(!products) {
    products = [];
  }
  console.log("products");
  console.log(products.data[0]);

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
      {products.data.map((_product) => (
        <div
          key={_product.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/products/${_product.attributes.Slug}`}>
            <a>
              <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <CustomImage image={_product.attributes.Image} />
                </div>
              </div>
              <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  {_product.attributes.Title} sticker
                </h4>
                <div className="mt-1 text-sm text-gray-700">
                  {_product.attributes.ShortDescription}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
