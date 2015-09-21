define(['angular','controllers/listing'], function (angular, listingCtrl) {

    //TODO move each directive in own file

    app.directive('companyPanel', function () {
      return {
        restrict: 'E',
        templateUrl: '/templates/listing.html',
        controller: listingCtrl,
        controllerAs: 'listing'
      }
    });

    app.directive('company', function () {
      return {
        restrict: 'E',
        templateUrl: '/templates/company.html'
      }
    });

    app.directive('companyControls', function(){
      return {
        restrict: 'E',
        templateUrl: '/templates/controls.html',
        controller: listingCtrl,
        controllerAs: 'controls'
      }
    });

  });