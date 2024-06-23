"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true
};
module.exports = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.sanity.io',
      port: '',
      pathname: '/images/foypmm2m/production/**'
    }, {
      protocol: 'https',
      hostname: 'cdn.shopify.com',
      port: '',
      pathname: '/s/files/**'
    }]
  },
  transpilePackages: ['gsap']
}, nextConfig;
//# sourceMappingURL=next.config.dev.js.map
