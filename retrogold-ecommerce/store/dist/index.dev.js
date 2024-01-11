"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initializeCart = exports.toggleCartItemQuantity = exports.onRemove = exports.addToCart = exports.persistor = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Set the state
var initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 1
}; //Create Slice and align it with the cart so it's specific to working on the Cart

var cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: initialState,
  reducers: {
    initializeCart: function initializeCart(state, action) {
      state.cart = action.payload.map(function (item) {
        return _objectSpread({}, item, {
          price: item.priceV2,
          quantity: item.quantity || 0
        });
      });
      state.totalQuantity = state.cart.reduce(function (total, item) {
        return total + item.node.quantity;
      }, 0);
      state.totalPrice = state.cart.reduce(function (total, item) {
        return total + item.price * item.quantity;
      }, 0);
    },
    addToCart: function addToCart(state, action) {
      var existingItemIndex = state.cart.findIndex(function (item) {
        return item.id === action.payload.id;
      });

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += action.payload.quantity || 1;
      } else {
        state.cart.push(_objectSpread({}, action.payload, {
          quantity: action.payload.quantity || 1
        }));
      }

      state.totalQuantity = state.cart.reduce(function (total, item) {
        return total + item.node.quantity;
      }, 0);
      state.totalPrice = state.cart.reduce(function (total, item) {
        return total + item.price * item.quantity;
      }, 0);
    },
    onRemove: function onRemove(state, action) {
      var removingItem = state.cart.find(function (item) {
        return item.node.id === action.payload.id;
      });

      if (removingItem) {
        state.cart = state.cart.filter(function (item) {
          return item.node.id !== removingItem.node.id;
        });
        state.totalPrice = state.cart.reduce(function (total, item) {
          return total + item.node.price * item.node.quantity;
        }, 0);
      }
    },
    toggleCartItemQuantity: function toggleCartItemQuantity(state, action) {
      var existingItemIndex = state.cart.findIndex(function (item) {
        return item.id === action.payload.id;
      });

      if (existingItemIndex !== -1) {
        var updatedCart = _toConsumableArray(state.cart);

        var existingItem = updatedCart[existingItemIndex]; // Increase or decrease quantity

        if (action.payload.value === 'inc') {
          existingItem.quantity++;
        } else if (action.payload.value === 'dec') {
          if (existingItem.quantity > 1) {
            existingItem.quantity--;
          } else {
            // Remove item from cart if quantity is 1 and 'dec' is requested
            updatedCart.splice(existingItemIndex, 1);
          }
        }

        state.cart = updatedCart; // Update totalQuantity and totalPrice

        state.totalQuantity = updatedCart.reduce(function (total, item) {
          return total + item.quantity;
        }, 0);
        state.totalPrice = updatedCart.reduce(function (total, item) {
          return total + item.price * item.quantity;
        }, 0);
      }
    }
  }
});
var persistConfig = {
  key: 'root',
  storage: _storage["default"] // Add more configurations like whitelist or blacklist if needed

};
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, cartSlice.reducer); //Create the store
// const store = configureStore({ reducer: cartSlice.reducer });

var store = (0, _toolkit.configureStore)({
  reducer: persistedReducer
});
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;
var _cartSlice$actions = cartSlice.actions,
    addToCart = _cartSlice$actions.addToCart,
    onRemove = _cartSlice$actions.onRemove,
    toggleCartItemQuantity = _cartSlice$actions.toggleCartItemQuantity,
    initializeCart = _cartSlice$actions.initializeCart;
exports.initializeCart = initializeCart;
exports.toggleCartItemQuantity = toggleCartItemQuantity;
exports.onRemove = onRemove;
exports.addToCart = addToCart;
var _default = store;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
