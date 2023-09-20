"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apiUtil = require("@/helpers/api-util");

function handler(req, res) {
  var blogResponse, productResponse;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "GET")) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap((0, _apiUtil.getFilteredBlogs)());

        case 3:
          blogResponse = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap((0, _apiUtil.getFilteredProducts)());

        case 6:
          productResponse = _context.sent;

          if (blogResponse) {
            try {
              res.status(201).json({
                blog: blogResponse
              });
            } catch (error) {
              res.status(500).json({
                message: 'failure fetching Blog details'
              });
            }
          } // if(productResponse){
          //    try {
          //      res.status(201).json({
          //        product: productResponse
          //      })
          //    } catch (error) {
          //      res.status(500).json({
          //        message: 'failure fetching Blog details'
          //      })
          //    }
          // }


        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

var _default = handler;
exports["default"] = _default;
//# sourceMappingURL=search.dev.js.map
