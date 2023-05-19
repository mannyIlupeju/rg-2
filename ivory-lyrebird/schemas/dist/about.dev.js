"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("@sanity/types");

var _preludeLs = require("prelude-ls");

var _default = (0, _types.defineType)({
  //templates accept an array of initial value template objects
  name: 'about',
  type: 'document',
  title: 'About Us',
  //types = accepts an array of schema definition objects
  fields: [(0, _types.defineField)({
    name: 'aboutus',
    title: 'About Us',
    type: 'string'
  }), (0, _types.defineField)({
    name: 'image',
    type: 'image',
    title: 'Image',
    options: {
      hotspot: true
    }
  }), (0, _types.defineField)({
    name: 'post',
    title: 'Post',
    type: 'array',
    of: [{
      type: 'block'
    }, {
      type: 'image'
    }],
    options: {
      spellCheck: true
    }
  })]
});

exports["default"] = _default;
//# sourceMappingURL=about.dev.js.map
