"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var _req$body, cartId, merchandiseId, quantity;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (req.method === 'POST') {
            try {
              _req$body = req.body, cartId = _req$body.cartId, merchandiseId = _req$body.merchandiseId, quantity = _req$body.quantity;
              console.log(cartId, merchandiseId, quantity);
            } catch (error) {
              console.error(error);
              res.status(500).json({
                error: 'Error adding to cart'
              });
            }
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}
//# sourceMappingURL=addToCart.dev.js.map
