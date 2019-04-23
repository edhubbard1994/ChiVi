var express = require('express');
var router = express.Router();
const db = require('./node_modules/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"hello": "world"})
});

module.exports = router;
