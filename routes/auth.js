const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const authController = require('../controller/control');

router.post('/login', urlencodedParser, authController.login);
router.get('/inputcs', urlencodedParser, authController.inputcs);
module.exports = router;