"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongodb = require("mongodb");

require('dotenv').config();

var client; //TODO: 
//Create a functionality that sends USER a discount code for their orders. 
//checks if user already exists and if so does not send a discount code. 

function createClient() {
  return regeneratorRuntime.async(function createClient$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (client) {
            _context.next = 4;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(_mongodb.MongoClient.connect(process.env.NEXT_MONGODB_URI));

        case 3:
          client = _context.sent;

        case 4:
          return _context.abrupt("return", client);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function handler(req, res) {
  var email, userEmail, _client, db, existingEmail;

  return regeneratorRuntime.async(function handler$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(req.method === 'POST')) {
            _context2.next = 24;
            break;
          }

          email = req.body.email;
          userEmail = email.toLowerCase();

          if (!(!userEmail || !userEmail.includes('@') || userEmail === '')) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", res.status(422).json({
            message: 'Please enter a correct email address'
          }));

        case 5:
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(createClient());

        case 8:
          _client = _context2.sent;
          db = _client.db(); //check if email already exists before inserting it in 

          _context2.next = 12;
          return regeneratorRuntime.awrap(db.collection('newsletter').findOne({
            email: userEmail
          }));

        case 12:
          existingEmail = _context2.sent;

          if (!existingEmail) {
            _context2.next = 15;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'This Email already exists'
          }));

        case 15:
          _context2.next = 17;
          return regeneratorRuntime.awrap(db.collection('newsletter').insertOne({
            email: userEmail
          }));

        case 17:
          _client.close();

          res.status(201).json({
            message: 'Signed up!'
          });
          _context2.next = 24;
          break;

        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](5);
          res.status(500).json({
            message: 'Internal server error'
          });

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 21]]);
}

var _default = handler;
exports["default"] = _default;
//# sourceMappingURL=newsletter.dev.js.map
