/**
 * Build a controller and template to show
 * 5 text boxes that will always present the same text,
 * so changing text in one box will cause it to change
 * in all other boxes
 */

var app = angular.module('myapp', []);
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.text = 'Hello Angular';
}

