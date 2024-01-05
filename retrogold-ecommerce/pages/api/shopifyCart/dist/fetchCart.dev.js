"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _cookie = _interopRequireDefault(require("cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var parsedCookies, cartId, query, response, data;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method !== "POST")) {
            _context.next = 3;
            break;
          }

          res.setHeader('Allow', ['POST']);
          return _context.abrupt("return", res.status(405).end("Method ".concat(req.method, " Not Allowed")));

        case 3:
          parsedCookies = _cookie["default"].parse(req.headers.cookie || '');
          cartId = parsedCookies.cartId;

          if (!cartId) {
            res.status(505).json({
              message: 'No cart Id sent'
            });
          }

          _context.prev = 6;
          query = "\n            query cartQuery($cartId: ID!) {\n            cart(id: $cartId) {\n                id\n                createdAt\n                updatedAt\n                checkoutUrl\n                lines(first: 10) {\n                edges {\n                    node {\n                    id\n                    quantity\n                    merchandise {\n                        ... on ProductVariant {\n                        id\n                         image {\n                         src\n                         altText\n                         }\n                        }\n                    }\n                    attributes {\n                        key\n                        value\n                    }\n                    }\n                }\n                }\n                attributes {\n                key\n                value\n                }\n                cost {\n                totalAmount {\n                    amount\n                    currencyCode\n                }\n                subtotalAmount {\n                    amount\n                    currencyCode\n                }\n                totalTaxAmount {\n                    amount\n                    currencyCode\n                }\n                totalDutyAmount {\n                    amount\n                    currencyCode\n                }\n                }\n                buyerIdentity {\n                email\n                phone\n                customer {\n                    id\n                }\n                countryCode\n                }\n            }\n        }\n        ";
          _context.next = 10;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])("".concat(process.env.SHOPIFY_DOMAIN, "/api/2023-10/graphql.json"), {
            method: "POST",
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

        case 10:
          response = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(response.json());

        case 13:
          data = _context.sent;
          res.status(200).json(data);
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](6);
          console.error(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            message: 'Error fetching Cart'
          }));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 17]]);
}
//# sourceMappingURL=fetchCart.dev.js.map
