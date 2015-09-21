define(['angular'], function (angular) {
  app.service('store', [ '$http', 'helper', function ($http, helper) {
    //using module pattern to emulate privacy

    //private
    var _companies = [
    { 
      name: 'Sample Company',
      assets: [{name: 'sample asset'}],
      state: 1 //could have stored css string direclty and mapping would have not been required but don't want to couple UI state with DB state
    }];

    var _products = [];
    $http.get('data/products.json').success(function(data){
      _products = data.map(function(p) {
        return { name: p};
      });
    });

    var add = function(company){
      _companies.push(company);
    };


    //public
    return {
      companies: _companies,
      createCompany : function(businessName){
        var company = {  name: businessName, assets: [], state: 0};
        add(company);
      },
      addProduct: function(){
        var company = helper.random(this.companies);
        var product = helper.random(_products);
        //QUESTION prevent duplicates ?
        company.assets.push(product);
      },
      updateStatus: function(newState){
        helper.random(this.companies).state = newState;
      },
      merge: function(){
        // shuffle shallow copy of company list
        var copy = this.companies.slice(0);
        var candidates = helper.shuffle(copy).slice(0,2);
        var main = candidates[0],
        second = candidates[1];

        //check main candidate
        if(candidates[1].assets.length > candidates[0].assets.length){
          main = candidates[1];
          second = candidates[0];
        }

        add({name: main.name + ', ' + second.name,
          state: main.state,
          assets: main.assets.concat(second.assets)
        });
      }
    }

  }]);
});