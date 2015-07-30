var partials = [
  'mixins',

  'normalize',
  'print',

  'scaffolding',
  'type',
  'code',
  'grid',
  'tables',
  'forms',
  'buttons',

  'component-animations',
  'glyphicons',
  'dropdowns',
  'button-groups',
  'input-groups',
  'navs',
  'navbar',
  'breadcrumbs',
  'pagination',
  'pager',
  'labels',
  'badges',
  'jumbotron',
  'thumbnails',
  'alerts',
  'progress-bars',
  'media',
  'list-group',
  'panels',
  'wells',
  'close',

  'modals',
  'tooltip',
  'popovers',
  'carousel',

  'utilities',
  'responsive-utilities'
];

module.exports = function (content) {
  this.cacheable(true);

  var config = this.exec(content, this.resourcePath);
  var basePath = '~bootstrap-sass/assets/';
  var bootstrapPath = basePath + 'stylesheets/bootstrap/';
  var customizations = config['customizations'];

  var start =
    '@import          \'' + bootstrapPath + 'variables\';\n' +
    '$icon-font-path: \'' + basePath + 'fonts/bootstrap/\';\n';

  if (customizations) {
    start += '@import \'' + customizations + '\';\n';
  }

  return start + partials.filter(function (partial) {
      return config.styles[partial];
    }).map(function (style) {
      return '@import \'' + bootstrapPath + style + '\';';
    }).join('\n');
};
