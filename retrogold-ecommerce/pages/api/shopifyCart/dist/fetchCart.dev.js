"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var query, response, cartData;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "POST")) {
            _context.next = 19;
            break;
          }

          _context.prev = 1;
          query = "\n            query cartQuery($cartId: ID!) {\n              cart(id: $cartId) {\n                id\n                createdAt\n                updatedAt\n                checkoutUrl\n                lines(first: 10) {\n                  edges {\n                    node {\n                      id\n                      quantity\n                      merchandise {\n                        ... on ProductVariant {\n                          id\n                          image {\n                            src\n                            altText\n                          }\n                          priceV2 {\n                            amount\n                            currencyCode\n                          }\n                          product {\n                            vendor\n                            title\n                            handle\n                          }\n                        }\n                      }\n                      attributes {\n                        key\n                        value\n                      }\n                    }\n                  }\n                }\n                attributes {\n                  key\n                  value\n                }\n                cost {\n                  totalAmount {\n                    amount\n                    currencyCode\n                  }\n                  subtotalAmount {\n                    amount\n                    currencyCode\n                  }\n                  totalTaxAmount {\n                    amount\n                    currencyCode\n                  }\n                  totalDutyAmount {\n                    amount\n                    currencyCode\n                  }\n                }\n                buyerIdentity {\n                  email\n                  phone\n                  customer {\n                    id\n                  }\n                  countryCode\n                }\n              }\n            }\n        "; // Replace 'your GraphQL query here' with your actual query.

          _context.next = 5;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])("https://".concat(process.env.SHOPIFY_DOMAIN, "/api/2023-10/graphql.json"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_PUB
            },
            body: JSON.stringify({
              query: query,
              variables: {
                cartId: cartId
              }
            })
          }));

        case 5:
          response = _context.sent;

          if (response.ok) {
            _context.next = 8;
            break;
          }

          throw new Error("HTTP error! Status: ".concat(response.status));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(response.json());

        case 10:
          cartData = _context.sent;
          console.log(cartData);
          return _context.abrupt("return", {
            props: {
              cartData: cartData
            }
          });

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          console.error('Error fetching cart data:', _context.t0);
          return _context.abrupt("return", {
            props: {
              cartData: null
            }
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 15]]);
}
//# sourceMappingURL=fetchCart.dev.js.map
