"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("@sanity/types");

var _default = (0, _types.defineType)({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [(0, _types.defineField)({
    name: 'title',
    title: 'Title',
    type: 'string'
  }), (0, _types.defineField)({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'title',
      maxLength: 90
    }
  }), (0, _types.defineField)({
    name: 'author',
    title: 'Author',
    type: 'reference',
    to: [{
      type: 'author'
    }]
  }), (0, _types.defineField)({
    name: 'blogpost',
    title: 'Blog Post',
    type: 'array',
    of: [{
      type: 'block'
    }, {
      type: 'image'
    }],
    options: {
      spellCheck: true
    }
  }), (0, _types.defineField)({
    name: 'main_image',
    title: 'Main Image',
    type: 'image',
    options: {
      hotspot: true
    },
    fields: [{
      name: 'caption',
      title: 'Caption',
      type: 'string'
    }]
  }), (0, _types.defineField)({
    name: 'published',
    title: 'Published At',
    type: 'date'
  })]
});

exports["default"] = _default;
//# sourceMappingURL=post.dev.js.map
