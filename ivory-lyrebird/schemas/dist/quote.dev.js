"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("@sanity/types");

var _default = (0, _types.defineType)({
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [(0, _types.defineField)({
    name: 'quote',
    title: 'Quote',
    type: 'string'
  }), (0, _types.defineField)({
    name: 'author',
    title: 'Author',
    type: 'string'
  })]
});

exports["default"] = _default;
//# sourceMappingURL=quote.dev.js.map
