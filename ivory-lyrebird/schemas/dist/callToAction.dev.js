"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("@sanity/types");

var _default = (0, _types.defineType)({
  name: 'callToAction',
  title: 'CallToAction',
  type: 'document',
  fields: [(0, _types.defineField)({
    name: 'headline',
    title: 'Headline',
    type: 'string'
  }), (0, _types.defineField)({
    name: 'sub_headline',
    title: 'Sub_headline',
    type: 'string'
  }), (0, _types.defineField)({
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true
    }
  })]
});

exports["default"] = _default;
//# sourceMappingURL=callToAction.dev.js.map
