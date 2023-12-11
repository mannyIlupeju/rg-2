"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  categories: [{
    type: String
  }],
  attributes: {
    color: String,
    size: String // Add other attributes as needed

  },
  inStock: {
    type: Boolean,
    "default": true
  },
  images: [{
    type: String // URLs of product images

  }],
  createdAt: {
    type: Date,
    "default": Date.now
  } // Add other fields as necessary

});
//# sourceMappingURL=Products.dev.js.map
