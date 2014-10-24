'use strict';
var path = require('path');
//var ROOT_FOLDER = __dirname + '/public/src/js/components/';
var ROOT_FOLDER = path.join(__dirname, 'public', 'src', 'js');

module.exports = {
    entry: {
        bundle: path.join(ROOT_FOLDER,'app.js')
    },
    output:{
      path: path.join(ROOT_FOLDER, 'public', 'dist', 'js'),
      publicPath: '/dist/js/',
      filename: 'bundle.js'
    },
    watch: true,
    module:{
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
        ]
    }
};
