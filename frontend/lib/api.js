import qs from "qs"
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:8080"
  }${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }

  // urlParamsObject.locale = "vi";
  
  // Build request URL
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions)

  // Handle response
  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occured please try again`)
  }
  const data = await response.json()
  return data
}
 
export async function getProductCatalogs() {
  const categories = await fetchAPI("/product-categories");
  return categories;
}

export async function getProductCatalog(slug, urlParamsObject = {}) {
  const queryString = qs.stringify(urlParamsObject)
  const categories = await fetchAPI(`/product-categories?slug=${slug}&${queryString ? `${queryString}` : ""}`);
  return categories?.data[0];
}

export async function getProducts() {
  const products = await fetchAPI("/products");
  return products;
}

export async function getProduct(slug, urlParamsObject = {}) {
  const queryString = qs.stringify(urlParamsObject)
  const products = await fetchAPI(`/products?slug=${slug}&${queryString ? `${queryString}` : ""}`);
  return products?.data[0];
}

export   function  getProductThumb(id, urlParamsObject = {}) {
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(
    `/api/products/${id}?${queryString ? `${queryString}` : ""}`
  )}`
 
  return useSWR(
    requestUrl,
    fetcher
  );
}

export   function  getProductDetail(slug, urlParamsObject = {}) {
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(
    `/api/products/?filters[slug]=${slug}&${queryString ? `${queryString}` : ""}`
  )}`
    
  console.log(requestUrl);

  return useSWR(
    requestUrl,
    fetcher
  );
}
 




 
