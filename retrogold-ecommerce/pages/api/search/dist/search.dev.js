"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apiUtil = require("@/helpers/api-util");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function handler(req, res) {
  var userSearch, _userSearch, sanityResults, shopifyResults, combinedResults;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method !== "POST")) {
            _context.next = 3;
            break;
          }

          res.status(405).end(); // Method Not Allowed

          return _context.abrupt("return");

        case 3:
          userSearch = req.body.userSearch; // Assuming you're passing search as a query parameter

          console.log(userSearch);
          _context.prev = 5;
          _userSearch = req.body.userSearch; // Assuming you're passing search as a query parameter

          if (_userSearch) {
            _context.next = 10;
            break;
          }

          res.status(400).json({
            error: 'Search query is missing'
          });
          return _context.abrupt("return");

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap((0, _apiUtil.searchSanity)(_userSearch));

        case 12:
          sanityResults = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap((0, _apiUtil.searchShopify)(_userSearch));

        case 15:
          shopifyResults = _context.sent;
          console.log(shopifyResults);

          if (sanityResults || shopifyResults) {
            combinedResults = [].concat(_toConsumableArray(sanityResults), _toConsumableArray(shopifyResults));
            res.status(200).json(combinedResults);
          }

          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](5);
          console.log('Error fetching response:', _context.t0);

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 20]]);
}

var _default = handler;
exports["default"] = _default;
//# sourceMappingURL=search.dev.js.map
