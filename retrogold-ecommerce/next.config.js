/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'cdn.sanity.io',
        port: '',
        pathname: '/images/foypmm2m/production/**',
        
      }
    ],
    domains: ["cdn.shopify.com"]
  }
}, nextConfig