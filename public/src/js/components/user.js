/** @jsx React.DOM */
'use strict';
var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <div>
            <div>Welcome to the user's page!!</div>
            <a href='/'>Go to home page</a>
          </div>;
  }
});
