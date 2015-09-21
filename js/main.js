 requirejs.config({
   paths: {
     "jquery": "vendor/jquery",
     "angular": "vendor/angular/angular.min"
   },
   shim: {
     angular: {exports: 'angular'}
   },
   deps: ['app']
 });
