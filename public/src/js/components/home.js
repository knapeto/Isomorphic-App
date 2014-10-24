/** @jsx React.DOM */
'use strict';
var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <div>
              <div>Welcome to Home!!</div>
              <a href='/users'>Go to user page</a>
            </div>;
  }
});
