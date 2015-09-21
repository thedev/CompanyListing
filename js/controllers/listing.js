define(['angular'], function (angular) {

  return ['store', 'helper' ,function (store, helper) {

    this.companies = store.companies;
    this.products = store.products;

    this.create = function(){
      //TODO client side validation required ideally using form and default form validation
      this.businessName && store.createCompany(this.businessName);
      this.businessName = "";
    };

    this.addProduct = function(){
      store.addProduct();
    };

    this.merge = function(){
      store.merge();
      this.companies = store.companies;
    };

    //TODO mapping between db state and UI (css class)
    var map  = {0 : "", 1 : "bankrupt", 2 : "public"};

    this.update = function(state){
      var stateId = map.getKeyByValue(state);
      store.updateStatus(stateId);
    };

    this.cls = function(state){
      return map[state];
    };

  }];

});