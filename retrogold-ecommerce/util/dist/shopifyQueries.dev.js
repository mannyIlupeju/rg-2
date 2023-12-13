"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRODUCT_QUERY = void 0;

var _graphqlRequest = require("graphql-request");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n{\n  products(first: 5) {\n    edges {\n      node {\n        id\n        title\n        handle\n        description\n        priceRange {\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        images(first: 5) {  \n          edges {\n            node {\n              src\n              altText\n            }\n          }\n        }\n      }\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PRODUCT_QUERY = (0, _graphqlRequest.gql)(_templateObject());
exports.PRODUCT_QUERY = PRODUCT_QUERY;
//# sourceMappingURL=shopifyQueries.dev.js.map
