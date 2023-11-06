"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongodb = require("mongodb");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _User = _interopRequireDefault(require("../../../models/User"));

var _mongoose = _interopRequireDefault(require("../../../lib/mongoose"));

var _uuid = require("uuid");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var verificationCode = (0, _uuid.v4)();

var transporter = _nodemailer["default"].createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

(0, _mongoose["default"])();

function handler(req, res) {
  var _req$body, email, name, password, retype, userEmail, usersname, hashedPassword, existingUser, user;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "POST")) {
            _context.next = 34;
            break;
          }

          console.log(req.body);
          _req$body = req.body, email = _req$body.email, name = _req$body.name, password = _req$body.password, retype = _req$body.retype;

          if (!(!name || typeof name !== 'string')) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(422).json({
            message: 'Please provide a valid name'
          }));

        case 5:
          userEmail = email.toLowerCase().trim();
          usersname = name.toLowerCase().trim();

          if (!(!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail))) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(422).json({
            message: 'Please enter a correct email address'
          }));

        case 9:
          if (!(password !== retype)) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", res.status(422).json({
            message: 'Passwords do not match'
          }));

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(password, 10));

        case 13:
          hashedPassword = _context.sent;
          _context.prev = 14;
          _context.next = 17;
          return regeneratorRuntime.awrap(_User["default"].findOne({
            email: userEmail
          }));

        case 17:
          existingUser = _context.sent;

          if (!existingUser) {
            _context.next = 20;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            success: false,
            message: 'User already exists'
          }));

        case 20:
          _context.next = 22;
          return regeneratorRuntime.awrap(_User["default"].create({
            name: usersname,
            email: email,
            password: hashedPassword,
            role: 'user'
          }));

        case 22:
          user = _context.sent;
          console.log(user);
          _context.next = 26;
          return regeneratorRuntime.awrap(sendVerificationEmail(userEmail, verificationCode));

        case 26:
          res.status(201).json({
            success: true,
            data: user,
            message: 'Signed up! A verification email has been sent to your email address'
          });
          _context.next = 32;
          break;

        case 29:
          _context.prev = 29;
          _context.t0 = _context["catch"](14);
          res.status(500).json({
            message: 'User not created',
            error: _context.t0.message
          });

        case 32:
          _context.next = 35;
          break;

        case 34:
          res.status(405).json({
            success: false,
            message: 'Method not allowed'
          });

        case 35:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[14, 29]]);
}

function sendVerificationEmail(email, verificationCode) {
  return regeneratorRuntime.async(function sendVerificationEmail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: '"Retrogold" <pelumiilupeju@gmail.com>',
            to: email,
            subject: 'Verify Your Email',
            text: "Please click the link below to verify your email:\nhttp://your-app.com/verify-email?code=".concat(verificationCode),
            html: "<b>Please click the link below to verify your email:</b><br><a href=\"http://your-app.com/verify-email?code=".concat(verificationCode, "\">Verify Email</a>")
          }));

        case 3:
          console.log('Verification email sent successfully');
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.error('Error sending verification email:', _context2.t0);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

var _default = handler;
exports["default"] = _default;
//# sourceMappingURL=register.dev.js.map
