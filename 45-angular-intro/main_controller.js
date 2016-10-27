(function() {

/**
 * When passing an empty array as second argument we create an angular app
 * but here we use module() function with just one argument: the application
 * name. This usage returns an already created angular app.
 * 
 * This code style leaves us with no global variables
 */
var app = angular.module('myapp');
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.text = 'Demo App';
  
  vm.clicks = 0;
  
  vm.clicked = function() {
    vm.clicks++;
  };
}
  
}());

