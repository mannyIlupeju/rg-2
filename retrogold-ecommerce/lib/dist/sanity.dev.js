"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanityClient = exports.urlFor = void 0;

var _nextSanity = require("next-sanity");

var _imageUrl = _interopRequireDefault(require("@sanity/image-url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: "production",
  projectId: 'foypmm2m',
  apiVersion: '2022-12-22',
  useCdn: false,
  token: process.env.NEXT_INVENTORY_TOKEN
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

var builder = (0, _imageUrl["default"])(config);

var urlFor = function urlFor(source) {
  return builder.image(source);
}; // Set up the client for fetching data in the getProps page functions


exports.urlFor = urlFor;
var sanityClient = (0, _nextSanity.createClient)(config);
exports.sanityClient = sanityClient;
//# sourceMappingURL=sanity.dev.js.map
