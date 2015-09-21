define (["angular"], function (angular) {

  app = angular.module('companyListing', [])
  require([
    'services/store',
    'services/helper',
    'directives/listing'],
    function(){
      angular.bootstrap(document, ['companyListing']);
    });
});