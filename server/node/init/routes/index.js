var express = require('express');
var router = express.Router();
const db = require('./database');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"hello": "world"})
});

module.exports = router;
