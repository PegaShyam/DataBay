const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const authController = require('../controller/control');

router.get('/', urlencodedParser, authController.login);

module.exports = router;