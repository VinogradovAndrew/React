'use strict';
let path = require('path');



module.exports = {
    context:path.join(__dirname,'/src'),

    entry:'./js/',

    output:{
      path:path.join(__dirname,'/build'),
      filename:'bundle.js'
    },
  module: {
    loaders: [
      /*{
        test: /\.jsx?$/,
        exclude: /.spec.js/, // excluding .spec files
        loader: "uglify"
      },*/
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015','react']
        }
      }

    ]
  },
  devtool: "#inline-source-map"
}
;
