"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllProducts = getAllProducts;
exports.getAllBlogs = getAllBlogs;
exports.searchSanity = searchSanity;

var _sanity = require("@/lib/dist/sanity.dev");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Fetch Blog data from Sanity
function getAllProducts() {
  var productQuery, products;
  return regeneratorRuntime.async(function getAllProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          productQuery = "*[_type == \"product\"]{  \n    \"slugCurrent\":slug.current,\n  }";
          _context.next = 3;
          return regeneratorRuntime.awrap(_sanity.sanityClient.fetch(productQuery));

        case 3:
          products = _context.sent;
          return _context.abrupt("return", products);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
} //Fetch Blog data from Sanity


function getAllBlogs() {
  var blogQuery, blogs;
  return regeneratorRuntime.async(function getAllBlogs$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          blogQuery = "*[_type == \"blog\"]{  \n    \"slugCurrent\":slug.current,\n  }";
          _context2.next = 3;
          return regeneratorRuntime.awrap(_sanity.sanityClient.fetch(blogQuery));

        case 3:
          blogs = _context2.sent;
          return _context2.abrupt("return", blogs);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
} //Fetch Search Results from Sanity 


function searchSanity(query) {
  var sanityQuery, results;
  return regeneratorRuntime.async(function searchSanity$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (query.toLowerCase() === "blog") {
            sanityQuery = "*[_type == \"blog\"]{\n      title,\n      slug,\n      tag\n    }";
          } else {
            sanityQuery = "*[_type == \"blog\" && title match \"".concat(query, "*\"]{\n      title,\n      slug,\n      tag\n    }");
          }

          _context3.next = 3;
          return regeneratorRuntime.awrap(_sanity.sanityClient.fetch(sanityQuery));

        case 3:
          results = _context3.sent;
          return _context3.abrupt("return", results.map(function (post) {
            return _objectSpread({
              type: 'blogPost'
            }, post);
          }));

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}
//# sourceMappingURL=api-util.dev.js.map
