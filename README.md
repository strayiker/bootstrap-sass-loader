bootstrap-sass-loader
=================

Based on [boostrap-sass-loader](https://github.com/justin808/bootstrap-sass-loader).

1. Fixed bug with rebuild all dependencies in webpack watch mode.
2. Used '~' for inclusion.

Usage
-----

### 1.a Complete Bootstrap

``` javascript
require("bootstrap-sass-loader");
```

### 1.b Customized Bootstrap

Copy the files bootstrap-sass.config.js and bootstrap-sass.config.scss to your project folder.

```
module.exports = {
  entry: [
    "bootstrap-sass!./path/to/bootstrap-sass.config.js"
  ]
```

Or:

```javascript
require("bootstrap-sass!./path/to/bootstrap-sass.config.js");
```

### Loaders Configuration:

``` javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.scss$/,    				   loader: 'style!css!sass?includePaths[]=node_modules' }
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  plugins: [
  	new ProvidePlugin({
      $:      'jquery',
      jQuery: 'jquery'
  	})
  ]
};
```

[More info.](https://github.com/justin808/bootstrap-sass-loader)