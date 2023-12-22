"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.toggleCartItemQuantity = exports.onRemove = exports.addToCart = void 0;

var _toolkit = require("@reduxjs/toolkit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 1
};
var cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: function addToCart(state, action) {
      var existingItem = state.cart.find(function (item) {
        return item._id === action.payload._id;
      });

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push(_objectSpread({}, action.payload, {
          quantity: action.payload.quantity || 1
        }));
      }

      state.totalQuantity = state.cart.reduce(function (total, item) {
        return total + item.quantity;
      }, 0);
      state.totalPrice = state.cart.reduce(function (total, item) {
        return total + item.price * item.quantity;
      }, 0);
    },
    onRemove: function onRemove(state, action) {
      var removingItem = state.cart.find(function (item) {
        return item._id === action.payload._id;
      });

      if (removingItem) {
        state.cart = state.cart.filter(function (item) {
          return item._id !== removingItem._id;
        });
        state.totalPrice = state.cart.reduce(function (total, item) {
          return total + item.price * item.quantity;
        }, 0);
      }
    },
    toggleCartItemQuantity: function toggleCartItemQuantity(state, action) {
      var existingItemIndex = state.cart.findIndex(function (item) {
        return item._id === action.payload._id;
      });

      if (existingItemIndex !== -1) {
        var existingItem = state.cart[existingItemIndex]; // Increase or decrease quantity

        if (action.payload.value === 'inc') {
          existingItem.quantity++;
        } else if (action.payload.value === 'dec') {
          if (existingItem.quantity > 1) {
            existingItem.quantity--;
          } else {
            // Remove item from cart if quantity is 1 and 'dec' is requested
            state.cart.splice(existingItemIndex, 1);
          }
        } // Update totalQuantity and totalPrice


        state.totalQuantity = state.cart.reduce(function (total, item) {
          return total + item.quantity;
        }, 0);
        state.totalPrice = state.cart.reduce(function (total, item) {
          return total + item.price * item.quantity;
        }, 0);
      }
    }
  }
});
var store = (0, _toolkit.configureStore)({
  reducer: cartSlice.reducer
});
var _cartSlice$actions = cartSlice.actions,
    addToCart = _cartSlice$actions.addToCart,
    onRemove = _cartSlice$actions.onRemove,
    toggleCartItemQuantity = _cartSlice$actions.toggleCartItemQuantity;
exports.toggleCartItemQuantity = toggleCartItemQuantity;
exports.onRemove = onRemove;
exports.addToCart = addToCart;
var _default = store;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
