/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost"],
  },
}

module.exports = nextConfig

const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
})