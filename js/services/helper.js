define(['angular'], function (angular) {
  app.service('helper', function () {
    Object.prototype.getKeyByValue = function( value ) {
      for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
          if( this[ prop ] === value )
            return prop;
        }
      }
    };

    this.shuffle = function(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    this.random = function(from){
      return from[Math.floor(Math.random() * from.length)];
    }

  });
});


