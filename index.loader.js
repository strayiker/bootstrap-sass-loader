module.exports = function () {};
module.exports.pitch = function (remainingRequest) {
  var result;
  var jsLoaderCommand;
  var styleLoaderCommand;
  var styleLoader;
  var config;
  var msg;

  this.cacheable(true);

  var configFilePath = this.resourcePath || remainingRequest;

  if (!configFilePath || configFilePath.trim() === '') {
    msg = 'You specified the bootstrap-sass-loader with no configuration file. Please specify' +
      ' the configuration file, like: \'bootstrap-sass!./bootstrap-sass.config.js\' or use' +
      ' require(\'bootstrap-sass-loader\').';
    console.error('ERROR: ' + msg);
    throw new Error(msg);
  }

  config = require(configFilePath);
  styleLoader = config.styleLoader || 'style!css!sass';

  styleLoaderCommand = 'require(' + JSON.stringify('-!' + styleLoader + '!' +
      require.resolve('./bootstrap-sass-styles.loader.js') + '!' + configFilePath) + ');';
  jsLoaderCommand = 'require(' + JSON.stringify('-!' +
      require.resolve('./bootstrap-sass-scripts.loader.js') + '!' + configFilePath) + ');';
  result = [styleLoaderCommand, jsLoaderCommand].join('\n');
  return result;
};
