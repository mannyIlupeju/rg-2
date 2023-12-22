"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeCart = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initializeCart = (0, _toolkit.createAsyncThunk)('cart/initializeCart', function _callee(_, _ref) {
  var rejectWithValue, cartData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          rejectWithValue = _ref.rejectWithValue;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(createCart());

        case 4:
          cartData = _context.sent;
          return _context.abrupt("return", cartData);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", rejectWithValue(_context.t0.message));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
exports.initializeCart = initializeCart;
//# sourceMappingURL=createCart.dev.js.map
