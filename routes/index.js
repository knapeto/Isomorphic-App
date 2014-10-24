var express = require('express');
var router = express.Router();
var Home = require('../public/src/js/components/home.js');
var User = require('../public/src/js/components/user.js');
var React = require('react');

/* GET home page. */
router.get('/', function(req, res) {
  var HomeHtml = React.renderComponentToString(Home({}));
  res.render('index', { content: HomeHtml });
});

/* GET users listing. */
router.get('/users', function(req, res) {
  var UserHtml = React.renderComponentToString(User({}));
  res.render('user', { content: UserHtml});
});


module.exports = router;
