"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllProducts = getAllProducts;
exports.getAllBlogs = getAllBlogs;
exports.getFilteredProducts = getFilteredProducts;
exports.getFilteredBlogs = getFilteredBlogs;
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
} //Extract the user input and check if it matches with the filterBlog slug


function getFilteredProducts(userSearch) {
  var slugifiedSearch, productSearch, filteredProduct;
  return regeneratorRuntime.async(function getFilteredProducts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          slugifiedSearch = userSearch.toLowerCase().replaceAll(' ', '-');
          _context3.next = 3;
          return regeneratorRuntime.awrap(getAllProducts());

        case 3:
          productSearch = _context3.sent;
          filteredProduct = productSearch.filter(function (product) {
            return slugifiedSearch === product.slugCurrent;
          });
          return _context3.abrupt("return", filteredProduct);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
} //api endpoint to fetch the filteredBlog Array 


function getFilteredBlogs(userSearch) {
  var slugifiedSearch, blogSearch, filteredBlog;
  return regeneratorRuntime.async(function getFilteredBlogs$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          slugifiedSearch = userSearch.toLowerCase().replaceAll(' ', '-');
          _context4.next = 3;
          return regeneratorRuntime.awrap(getAllBlogs());

        case 3:
          blogSearch = _context4.sent;
          filteredBlog = blogSearch.filter(function (blog) {
            return slugifiedSearch === blog.slugCurrent;
          });
          return _context4.abrupt("return", filteredBlog);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
} //Fetch Search Results from Sanity 


function searchSanity(query) {
  var sanityQuery, results;
  return regeneratorRuntime.async(function searchSanity$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          sanityQuery = "*[_type == \"blog\" && title match \"".concat(query, "*\"]{\n   title,\n   slug,\n   tag\n  }");
          _context5.next = 3;
          return regeneratorRuntime.awrap(_sanity.sanityClient.fetch(sanityQuery));

        case 3:
          results = _context5.sent;
          return _context5.abrupt("return", results.map(function (post) {
            return _objectSpread({
              type: 'blogPost'
            }, post);
          }));

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}
//# sourceMappingURL=api-util.dev.js.map
