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
    }]
  }
}, nextConfig;
//# sourceMappingURL=next.config.dev.js.map
