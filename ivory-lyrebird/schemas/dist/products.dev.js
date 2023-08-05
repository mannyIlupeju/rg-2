"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("@sanity/types");

var _default = (0, _types.defineType)({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [(0, _types.defineField)({
    name: 'productName',
    title: 'Product Name',
    type: 'string'
  }), (0, _types.defineField)({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'title'
    }
  }), (0, _types.defineField)({
    name: 'brandName',
    title: 'Brand Name',
    type: 'string'
  }), (0, _types.defineField)({
    name: 'price',
    title: "Price",
    type: 'number'
  }), (0, _types.defineField)({
    name: 'stockQuantity',
    title: 'StockQuantity',
    type: 'number'
  }), (0, _types.defineField)({
    name: 'size',
    title: 'Size',
    type: 'string',
    of: [{
      type: Array
    }],
    options: {
      list: [{
        value: 'small',
        title: 'Small'
      }, {
        value: 'medium',
        title: 'Medium'
      }]
    }
  }), (0, _types.defineField)({
    name: 'shortDescription',
    title: 'Short Description',
    type: 'array',
    of: [{
      type: 'block'
    }]
  }), (0, _types.defineField)({
    name: 'productDescription',
    title: 'Product Description',
    type: 'array',
    of: [{
      type: 'block'
    }]
  }), (0, _types.defineField)({
    name: 'shippingReturns',
    title: 'Shipping & Returns',
    type: 'array',
    of: [{
      type: 'block'
    }]
  }), (0, _types.defineField)({
    name: 'mainImage',
    title: 'Main Image',
    type: 'image',
    options: {
      hotspot: true
    }
  }), (0, _types.defineField)({
    name: 'mainImage2',
    title: 'Main Image2',
    type: 'image',
    options: {
      hotspot: true
    }
  }), (0, _types.defineField)({
    name: 'images',
    title: 'Images',
    type: 'array',
    options: {
      hotspot: true
    },
    of: [{
      name: 'image',
      title: 'Image',
      type: 'image'
    }]
  })]
});

exports["default"] = _default;
//# sourceMappingURL=products.dev.js.map
