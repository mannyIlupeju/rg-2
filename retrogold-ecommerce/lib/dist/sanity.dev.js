"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanityClient = exports.urlFor = void 0;

var _nextSanity = require("next-sanity");

var config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-12-22',
  useCdn: false
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/

};
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/

var urlFor = function urlFor(source) {
  return (0, _nextSanity.createImageUrlBuilder)(config).image(source);
}; // Set up the client for fetching data in the getProps page functions


exports.urlFor = urlFor;
var sanityClient = (0, _nextSanity.createClient)(config);
exports.sanityClient = sanityClient;
//# sourceMappingURL=sanity.dev.js.map
