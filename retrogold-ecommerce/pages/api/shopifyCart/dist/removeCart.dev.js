"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var _req$body, cartId, lineId, query, response, data;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "POST")) {
            _context.next = 18;
            break;
          }

          _context.prev = 1;
          _req$body = req.body, cartId = _req$body.cartId, lineId = _req$body.lineId;
          query = "\n            mutation removeCartLines($cartId: ID!, $lineIds: [ID!]!) {\n                cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n                    cart {\n                    id\n                    lines(first: 10){\n                        edges\n                        {\n                        node{\n                            quantity\n                            merchandise{\n                            ... on ProductVariant {\n                                id\n                            }\n                            }\n                        }\n                        }\n                    }\n                    cost {\n                        totalAmount {\n                        amount\n                        currencyCode\n                        }\n                        subtotalAmount {\n                        amount\n                        currencyCode\n                        }\n                        totalTaxAmount {\n                        amount\n                        currencyCode\n                        }\n                        totalDutyAmount {\n                        amount\n                        currencyCode\n                        }\n                    }\n                    }\n                    \n                    userErrors {\n                    field\n                    message\n                    }\n            }\n        }";
          _context.next = 6;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])("https://".concat(process.env.SHOPIFY_DOMAIN, "/api/2023-10/graphql.json"), {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_PUB
            },
            body: JSON.stringify({
              query: query,
              variables: {
                cartId: cartId,
                lineIds: lineId
              }
            })
          }));

        case 6:
          response = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          data = _context.sent;
          res.status(200).json(data); // Check if cartLinesAdd is available and has userErrors

          if (data.data && data.data.cartLinesAdd && data.data.cartLinesAdd.userErrors) {
            if (data.data.cartLinesAdd.userErrors.length > 0) {
              console.error('User errors:', data.data.cartLinesAdd.userErrors);
            }
          } else {
            console.error('Unexpected response structure:', data);
          }

          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          res.setHeader('Allow', ['POST']);
          res.status(405).end("Method ".concat(req.method, " Not Allowed"));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 14]]);
}
//# sourceMappingURL=removeCart.dev.js.map
