var express = require('express');
var router = express.Router();
var vd = require('../videodata');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
      videoData: vd
  });
});

module.exports = router;
