const webpack = require('webpack');

module.exports = {
  "name": "index",
  "entry": {
    "index": ["./index"],
  },
  "output": {
    "filename": "[name].js",
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    })
  ],
  "optimization": {
    "minimize": true,
    "splitChunks": false
  }
}
