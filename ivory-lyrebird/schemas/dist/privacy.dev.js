"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("@sanity/types");

var _default = (0, _types.defineType)({
  name: 'privacy',
  title: 'Privacy Policy',
  type: 'document',
  fields: [(0, _types.defineField)({
    name: 'post',
    title: 'Post',
    type: 'array',
    of: [{
      type: 'block'
    }]
  })]
});

exports["default"] = _default;
//# sourceMappingURL=privacy.dev.js.map
