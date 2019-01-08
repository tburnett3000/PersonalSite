var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tom Burnett'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Info' });
});

module.exports = router;
