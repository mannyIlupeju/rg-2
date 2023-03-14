"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("@sanity/types");

var _default = (0, _types.defineType)({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  of: [{
    type: Array
  }],
  fields: [(0, _types.defineField)({
    name: 'headline',
    title: 'Headline',
    type: 'string'
  }), (0, _types.defineField)({
    name: 'headstatement',
    title: 'HeadStatement',
    type: 'string'
  })]
});

exports["default"] = _default;
//# sourceMappingURL=hero.dev.js.map
