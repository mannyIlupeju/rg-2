"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var _req$body, cartId, lineItems, query, response, data;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "POST")) {
            _context.next = 20;
            break;
          }

          _context.prev = 1;
          _req$body = req.body, cartId = _req$body.cartId, lineItems = _req$body.lineItems;
          query = "\n                mutation addCartLines($cartId: ID!, $lines: [CartLineInput!]!) {\n                    cartLinesAdd(cartId: $cartId, lines: $lines) {\n                        cart {\n                            id\n                            lines(first: 10) {\n                                edges {\n                                    node {\n                                        id\n                                        merchandise {\n                                            ... on ProductVariant {\n                                                id\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                            cost {\n                                totalAmount {\n                                    amount\n                                    currencyCode\n                                }\n                                subtotalAmount {\n                                    amount\n                                    currencyCode\n                                }\n                                totalTaxAmount {\n                                    amount\n                                    currencyCode\n                                }\n                                totalDutyAmount {\n                                    amount\n                                    currencyCode\n                                }\n                            }\n                        }\n                        userErrors {\n                            field\n                            message\n                        }\n                    }\n                }\n            ";
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
                lines: lineItems
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
          console.error(_context.t0);
          res.status(500).json({
            error: 'Error adding items to cart'
          });

        case 18:
          _context.next = 22;
          break;

        case 20:
          res.setHeader('Allow', ['POST']);
          res.status(405).end("Method ".concat(req.method, " Not Allowed"));

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 14]]);
}
//# sourceMappingURL=addItemToCart.dev.js.map
