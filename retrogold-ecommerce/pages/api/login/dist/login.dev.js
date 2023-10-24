"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../../../models/User"));

var _mongoose = _interopRequireDefault(require("../../../lib/mongoose"));

var _cookies = _interopRequireDefault(require("cookies"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

(0, _mongoose["default"])();

function handler(req, res) {
  var _req$body, email, password, userEmail, user, isValidPassword, token, cookies;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "POST")) {
            _context.next = 27;
            break;
          }

          _context.prev = 1;
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          userEmail = email.toLowerCase().trim(); //retrieve User from database if user is there

          _context.next = 6;
          return regeneratorRuntime.awrap(_User["default"].findOne({
            email: userEmail
          }));

        case 6:
          user = _context.sent;

          if (user) {
            _context.next = 10;
            break;
          }

          res.status(401).json({
            message: 'User does not exist'
          });
          return _context.abrupt("return");

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(password, user.password));

        case 12:
          isValidPassword = _context.sent;

          if (isValidPassword) {
            _context.next = 15;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            message: 'Incorrect email or password'
          }));

        case 15:
          token = _jsonwebtoken["default"].sign({
            email: user.email,
            id: user._id.toString()
          }, process.env.JWT_SECRET, {
            expiresIn: '1h'
          });
          cookies = new _cookies["default"](req, res);
          cookies.set('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 3600,
            // Token expiration time in seconds
            path: '/'
          });
          res.status(200).json({
            token: token,
            userId: user._id.toString(),
            message: 'Login successful'
          });
          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](1);
          console.log('Error saving token and storing in cookies', _context.t0);
          res.status(500).json({
            message: 'An internal server error occurred'
          });

        case 25:
          _context.next = 28;
          break;

        case 27:
          res.status(405).json({
            message: 'Method not allowed'
          });

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 21]]);
}

var _default = handler;
exports["default"] = _default;
//# sourceMappingURL=login.dev.js.map
