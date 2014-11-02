Package.describe({
  summary: 'Famo.us plugin for CSSC',
  version: '1.0.0',
  name: 'pierreeric:cssc-famous',
  git: 'https://github.com/PEM--/cssc-famous.git'
});

Package.onUse(function(api) {
  api.use('pierreeric:cssc@1.0.0');
  api.addFiles('cssc-famous.coffee', 'client');
  api.imply('pierreeric:cssc');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pierreeric:cssc-famous');
  api.addFiles('cssc-famous-tests.js');
});
