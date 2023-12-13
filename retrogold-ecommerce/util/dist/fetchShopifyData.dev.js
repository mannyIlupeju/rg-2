"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchShopifyData = fetchShopifyData;
exports.getAllProducts = getAllProducts;
var SHOPIFY_STOREFRONT_ENDPOINT = 'quickstart-b83ae816.myshopify.com';
var STORFRONTACCESSTOKEN = '5431836f1c03b80506dabe8482a807f0';

function fetchShopifyData(_ref) {
  var query, variables, res, _ref2, data;

  return regeneratorRuntime.async(function fetchShopifyData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref.query, variables = _ref.variables;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(SHOPIFY_STOREFRONT_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': STORFRONTACCESSTOKEN
            },
            body: {
              query: query,
              variables: variables
            } && JSON.stringify({
              query: query,
              variables: variables
            })
          }));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          _ref2 = _context.sent;
          data = _ref2.data;
          return _context.abrupt("return", {
            data: data
          });

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          console.log('Error:', _context.t0);
          return _context.abrupt("return", {
            status: 500,
            error: 'Error receiving data'
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
}

function getAllProducts() {
  return regeneratorRuntime.async(function getAllProducts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", fetchShopifyData({
            query: "{\n        products(first: 5) {\n            edges {\n                node {\n                    id\n                    title\n                    handle\n                    description\n                    priceRange {\n                        minVariantPrice {\n                            amount\n                            currencyCode\n                        }\n                    }\n                    images(first: 5) {  \n                        edges {\n                            node {\n                                src\n                                altText\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }"
          }));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}
//# sourceMappingURL=fetchShopifyData.dev.js.map
