//Create a module that returns a function that will return a random number.
//work on the secret_number.js file.
'use strict';

module.exports = function() {
  function randomNumberGen(){
      var randomNumber = Math.floor(Math.random() * 1000001);
      return randomNumber;
    }
    return randomNumberGen;
};
