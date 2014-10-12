Package.describe({
  summary: 'Famo.us plugin for CSSC',
  version: '0.1.0',
  git: 'https://github.com/PEM--/cssc-famous.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('pierreeric:cssc');
  api.addFiles('cssc-famous.coffee');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pierreeric:cssc-famous');
  api.addFiles('cssc-famous-tests.js');
});
