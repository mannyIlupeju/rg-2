"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _shopifyApi = _interopRequireDefault(require("@shopify/shopify-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var shopifyClient, CREATE_CART_QUERY, response;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === 'POST')) {
            _context.next = 16;
            break;
          }

          _context.prev = 1;
          shopifyClient = new _shopifyApi["default"].Clients.Storefront(process.env.SHOPIFY_DOMAIN, process.env.SHOPIFY_PUB);
          CREATE_CART_QUERY = "\n            mutation {\n            cartCreate(input: {}) {\n                cart {\n                id\n                checkoutUrl\n                }\n            }\n            }\n        ";
          _context.next = 6;
          return regeneratorRuntime.awrap(shopifyClient.query({
            data: CREATE_CART_QUERY,
            type: _shopifyApi["default"].Clients.GraphQL.ContentType.JSON
          }));

        case 6:
          response = _context.sent;
          // Send back the response (cart ID and checkout URL)
          res.status(200).json(response.body.data.cartCreate.cart);
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          res.status(500).json({
            error: 'Error creating cart'
          });

        case 14:
          _context.next = 18;
          break;

        case 16:
          // Handle any non-POST requests
          res.setHeader('Allow', 'POST');
          res.status(405).end('Method Not Allowed');

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
}
//# sourceMappingURL=cart.dev.js.map
