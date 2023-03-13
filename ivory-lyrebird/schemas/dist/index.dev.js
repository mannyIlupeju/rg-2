"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaTypes = void 0;

var _author = _interopRequireDefault(require("./author"));

var _blog = _interopRequireDefault(require("./blog"));

var _products = _interopRequireDefault(require("./products"));

var _hero = _interopRequireDefault(require("./hero"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schemaTypes = [_author["default"], _blog["default"], _products["default"], _hero["default"]];
exports.schemaTypes = schemaTypes;
//# sourceMappingURL=index.dev.js.map
