"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _storefrontApiClient = require("@shopify/storefront-api-client");

var client = (0, _storefrontApiClient.createStorefrontApiClient)({
  storeDomain: '301910-4.myshopify.com',
  apiVersion: '2023-10',
  publicAccessToken: process.env.SHOPIFY_PUB
});
var _default = client;
exports["default"] = _default;
//# sourceMappingURL=shopifyClient.dev.js.map
