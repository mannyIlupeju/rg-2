"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("@sanity/types");

var _preludeLs = require("prelude-ls");

var _default = (0, _types.defineType)({
  //templates accept an array of initial value template objects
  name: 'author',
  type: 'document',
  title: 'Author',
  //types = accepts an array of schema definition objects
  fields: [(0, _types.defineField)({
    name: 'name',
    type: 'string',
    title: 'Name'
  }), (0, _types.defineField)({
    name: 'image',
    type: 'image',
    title: 'Image',
    options: {
      hotspot: true
    }
  }), (0, _types.defineField)({
    name: 'bio',
    title: 'Bio',
    type: 'array',
    of: [{
      title: 'Block',
      type: 'block',
      styles: [{
        title: 'Normal',
        value: 'normal'
      }],
      lists: [{
        title: 'Bullet',
        value: 'bullet'
      }]
    }]
  })]
});

exports["default"] = _default;
//# sourceMappingURL=author.dev.js.map
