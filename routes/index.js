var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tom Burnett'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/findme', function(req, res, next) {
  res.render('findme', { title: 'Where to Find Me' });
});
  
module.exports = router;
