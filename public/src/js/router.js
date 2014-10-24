/** @jsx React.DOM */
'use strict';
var Backbone = require('./backbone-jquery.js');
var React = require('react');
var $ = require('jquery');
var hijackUrls = require('./hijackUrls.js');

var Router = Backbone.Router.extend({
    routes: {
      'users': 'users',
      '*path': 'default'
    },
    default: function(){
      require.ensure([], function(){
        var Home = require('./components/home.js');
        React.renderComponent(<Home/>, $('#content')[0]);
      });
    },
    users: function(){
      require.ensure([], function(){
        var User = require('./components/user.js');
        React.renderComponent(<User/>, $('#content')[0]);
      });
    }
});

module.exports = {
  initialize: function(){
    var router = new Router();
    Backbone.history.start({pushState: true}, {root: '/'});
    hijackUrls();
  }
};
