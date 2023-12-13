"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServerSideProps = getServerSideProps;
exports["default"] = void 0;

var _fetchShopifyData = require("@/util/fetchShopifyData");

var shop = function shop(_ref) {
  var products = _ref.products;
  console.log(products);
};

var _default = shop;
exports["default"] = _default;

function getServerSideProps(context) {
  var products;
  return regeneratorRuntime.async(function getServerSideProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _fetchShopifyData.getAllProducts)());

        case 2:
          products = _context.sent;
          return _context.abrupt("return", {
            props: {
              products: products
            }
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}
//# sourceMappingURL=index.dev.js.map
