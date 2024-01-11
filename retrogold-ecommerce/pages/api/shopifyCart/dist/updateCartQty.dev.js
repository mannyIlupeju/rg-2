"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var query;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (req.method === "POST") {
            try {
              query = "\n              mutation updateCartLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n                cartLinesUpdate(cartId: $cartId, lines: $lines) {\n                    cart {\n                    id\n                    lines(first: 10) {\n                        edges {\n                        node {\n                            id\n                            quantity\n                            merchandise {\n                            ... on ProductVariant {\n                                id\n                            }\n                            }\n                        }\n                        }\n                    }\n                    cost {\n                        totalAmount {\n                        amount\n                        currencyCode\n                        }\n                        subtotalAmount {\n                        amount\n                        currencyCode\n                        }\n                        totalTaxAmount {\n                        amount\n                        currencyCode\n                        }\n                        totalDutyAmount {\n                        amount\n                        currencyCode\n                        }\n                    }\n                    }\n                }\n            }\n            ";
            } catch (error) {
              console.error('Error updating item quantity', error);
            }
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}
//# sourceMappingURL=updateCartQty.dev.js.map
