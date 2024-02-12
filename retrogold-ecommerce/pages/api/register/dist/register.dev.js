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
  var _req$body, email, name, password, retype, userEmail, hashedPassword, existingUser, user;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "POST")) {
            _context.next = 29;
            break;
          }

          _req$body = req.body, email = _req$body.email, name = _req$body.name, password = _req$body.password, retype = _req$body.retype;

          if (!(!name || typeof name !== 'string')) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(422).json({
            message: 'Please provide a valid name'
          }));

        case 4:
          userEmail = email.toLowerCase().trim();

          if (!(!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail))) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(422).json({
            message: 'Please enter a correct email address'
          }));

        case 7:
          if (!(password !== retype)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(422).json({
            message: 'Passwords do not match'
          }));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(password, 10));

        case 11:
          hashedPassword = _context.sent;
          _context.prev = 12;
          _context.next = 15;
          return regeneratorRuntime.awrap(_User["default"].findOne({
            email: userEmail
          }));

        case 15:
          existingUser = _context.sent;

          if (!existingUser) {
            _context.next = 18;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            success: false,
            message: 'User already exists'
          }));

        case 18:
          _context.next = 20;
          return regeneratorRuntime.awrap(_User["default"].create({
            name: name,
            email: userEmail,
            password: hashedPassword,
            role: 'user'
          }));

        case 20:
          user = _context.sent;
          // await sendVerificationEmail(userEmail, verificationCode);
          res.status(201).json({
            success: true,
            data: user,
            message: 'Signed up! A verification email has been sent to your email address'
          });
          _context.next = 27;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](12);
          res.status(500).json({
            message: 'User not created',
            error: _context.t0.message
          });

        case 27:
          _context.next = 30;
          break;

        case 29:
          res.status(405).json({
            success: false,
            message: 'Method not allowed'
          });

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[12, 24]]);
} // async function sendVerificationEmail(email, verificationCode) {
//   try {
//     await transporter.sendMail({
//       from: '"Retrogold" <pelumiilupeju@gmail.com>',
//       to: email,
//       subject: 'Verify Your Email',
//       text: `Please click the link below to verify your email:\nhttp://your-app.com/verify-email?code=${verificationCode}`,
//       html: `<b>Please click the link below to verify your email:</b><br><a href="http://your-app.com/verify-email?code=${verificationCode}">Verify Email</a>`,
//     });
//     console.log('Verification email sent successfully');
//   } catch (error) {
//     console.error('Error sending verification email:', error);
//   }
// }


var _default = handler;
exports["default"] = _default;
//# sourceMappingURL=register.dev.js.map
