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
  var userSearch, sanityResults, combinedResults;
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
          _context.prev = 3;
          userSearch = req.body.userSearch; // Assuming you're passing search as a query parameter

          if (userSearch) {
            _context.next = 8;
            break;
          }

          res.status(400).json({
            error: 'Search query is missing'
          });
          return _context.abrupt("return");

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap((0, _apiUtil.searchSanity)(userSearch));

        case 10:
          sanityResults = _context.sent;

          if (sanityResults) {
            combinedResults = _toConsumableArray(sanityResults);
            res.status(200).json(combinedResults);
          }

          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          console.log('Error fetching response:', _context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 14]]);
}

var _default = handler;
exports["default"] = _default;
//# sourceMappingURL=search.dev.js.map
