"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("@sanity/types");

var _default = (0, _types.defineType)({
  type: 'document',
  name: 'product',
  fields: [(0, _types.defineField)({
    type: 'shopify.asset',
    name: 'shopifyAsset',
    options: {
      shopifyDomain: 'quickstart-b83ae816.myshopify.com'
    }
  }), (0, _types.defineField)({
    name: 'title',
    type: 'string',
    title: 'Title'
  }), (0, _types.defineField)({
    name: 'descriptionHtml',
    type: 'array',
    title: 'Description HTML',
    of: [{
      type: 'block'
    }]
  }), (0, _types.defineField)({
    name: 'priceRange',
    type: 'object',
    title: 'Price Range',
    fields: [(0, _types.defineField)({
      name: 'minVariantPrice',
      type: 'number',
      title: 'Min Variant Price'
    }), (0, _types.defineField)({
      name: 'maxVariantPrice',
      type: 'number',
      title: 'Max Variant Price'
    })]
  }), (0, _types.defineField)({
    name: 'vendor',
    type: 'string',
    title: 'Vendor'
  }), (0, _types.defineField)({
    name: 'tags',
    type: 'string',
    title: 'Tags'
  }), (0, _types.defineField)({
    name: 'status',
    type: 'string',
    title: 'Status'
  }), (0, _types.defineField)({
    name: 'slug',
    type: 'slug',
    title: 'Slug'
  }), (0, _types.defineField)({
    name: 'previewImageUrl',
    type: 'url',
    title: 'Preview Image URL'
  }), (0, _types.defineField)({
    name: 'productType',
    type: 'string',
    title: 'Product Type'
  }), (0, _types.defineField)({
    name: 'createdAt',
    type: 'datetime',
    title: 'Created At'
  }), (0, _types.defineField)({
    name: 'gid',
    type: 'string',
    title: 'GID'
  }), (0, _types.defineField)({
    name: 'id',
    type: 'number',
    title: 'ID'
  }), (0, _types.defineField)({
    name: 'isDeleted',
    type: 'boolean',
    title: 'Is Deleted'
  }), (0, _types.defineField)({
    name: 'options',
    type: 'array',
    title: 'Options',
    of: [{
      type: 'object',
      fields: [(0, _types.defineField)({
        name: 'optionKey',
        type: 'string',
        title: 'Option Key'
      }), (0, _types.defineField)({
        name: 'optionType',
        type: 'string',
        title: 'Option Type'
      }), (0, _types.defineField)({
        name: 'name',
        type: 'string',
        title: 'Name'
      }), (0, _types.defineField)({
        name: 'values',
        type: 'array',
        title: 'Values',
        of: [{
          type: 'string'
        }]
      })]
    }]
  }), (0, _types.defineField)({
    name: 'variants',
    type: 'array',
    title: 'Variants',
    of: [{
      type: 'object',
      fields: [(0, _types.defineField)({
        name: 'variantTitle',
        type: 'string',
        title: 'Variant Title'
      }) // Add other variant-specific fields here, like price, size, color, etc.
      ]
    }]
  }) // Other fields as needed
  ]
});

exports["default"] = _default;
//# sourceMappingURL=products.dev.js.map
