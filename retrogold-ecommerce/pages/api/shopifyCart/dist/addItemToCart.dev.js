"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var _req$body, cartId, id, quantity, lineItems, query, response, data;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "POST")) {
            _context.next = 21;
            break;
          }

          _context.prev = 1;
          _req$body = req.body, cartId = _req$body.cartId, id = _req$body.id, quantity = _req$body.quantity;
          console.log(quantity, id);
          lineItems = [{
            merchandiseId: id,
            quantity: quantity
          }];
          query = "\n                mutation addCartLines($cartId: ID!, $lines: [CartLineInput!]!) {\n                    cartLinesAdd(cartId: $cartId, lines: $lines) {\n                        cart {\n                            id\n                            lines(first: 10) {\n                                edges {\n                                    node {\n                                        quantity\n                                        merchandise {\n                                            ... on ProductVariant {\n                                                id\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                            cost {\n                                totalAmount {\n                                    amount\n                                    currencyCode\n                                }\n                                subtotalAmount {\n                                    amount\n                                    currencyCode\n                                }\n                                totalTaxAmount {\n                                    amount\n                                    currencyCode\n                                }\n                                totalDutyAmount {\n                                    amount\n                                    currencyCode\n                                }\n                            }\n                        }\n                        userErrors {\n                            field\n                            message\n                        }\n                    }\n                }\n            ";
          _context.next = 8;
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

        case 8:
          response = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          data = _context.sent;
          res.status(200).json(data);
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          res.status(500).json({
            error: 'Error adding items to cart'
          });

        case 19:
          _context.next = 23;
          break;

        case 21:
          res.setHeader('Allow', ['POST']);
          res.status(405).end("Method ".concat(req.method, " Not Allowed"));

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 15]]);
}
//# sourceMappingURL=addItemToCart.dev.js.map
