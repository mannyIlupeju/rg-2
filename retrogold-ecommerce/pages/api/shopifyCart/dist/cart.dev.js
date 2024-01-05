"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var productAdded, lineItems, query, response, data;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "POST")) {
            _context.next = 22;
            break;
          }

          _context.prev = 1;
          productAdded = req.body.productAdded; // `variants` is an array of variant IDs

          console.log(productAdded); // Construct line items using the same quantity for each variant

          lineItems = {
            merchandiseId: id,
            quantity: quantity // Using the same quantity for each variant

          };
          query = "\n                mutation createCart($cartInput: CartInput) {\n                cartCreate(input: $cartInput) {\n                    cart {\n                    id\n                    createdAt\n                    updatedAt\n                    checkoutUrl\n                    lines(first: 10) {\n                        edges {\n                        node {\n                            id\n                            merchandise {\n                            ... on ProductVariant {\n                                id\n                            }\n                            }\n                        }\n                        }\n                    }\n                    attributes {\n                        key\n                        value\n                    }\n                    cost {\n                        totalAmount {\n                        amount\n                        currencyCode\n                        }\n                        subtotalAmount {\n                        amount\n                        currencyCode\n                        }\n                        totalTaxAmount {\n                        amount\n                        currencyCode\n                        }\n                        totalDutyAmount {\n                        amount\n                        currencyCode\n                        }\n                    }\n                    }\n                }\n                }\n            ";
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
                cartInput: {
                  lines: lineItems
                }
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
          console.log(data);
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          res.status(500).json({
            error: 'Error creating cart'
          });

        case 20:
          _context.next = 24;
          break;

        case 22:
          res.setHeader('Allow', ['POST']);
          res.status(405).end("Method ".concat(req.method, " Not Allowed"));

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 16]]);
}
//# sourceMappingURL=cart.dev.js.map
