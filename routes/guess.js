var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('./components/guess/index.pug');
});

module.exports = router;