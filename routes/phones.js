var express = require('express');
var router = express.Router();
var PhoneModel = require('../models/phone');
var phoneModel = new PhoneModel();

/* GET phones listing. */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(phoneModel.getPhones());
});

module.exports = router;