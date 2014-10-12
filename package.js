Package.describe({
  summary: 'Famo.us plugin for CSSC',
  version: '0.1.0',
  name: 'pierreeric:cssc-famous',
  git: 'https://github.com/PEM--/cssc-famous.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use(['coffeescript', 'pierreeric:cssc']);
  api.addFiles('cssc-famous.coffee', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pierreeric:cssc-famous');
  api.addFiles('cssc-famous-tests.js');
});
