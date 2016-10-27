/**
 * Write a directive called LightBulb that
 * shows a div element without background color,
 * and when clicked on the background color changes to yellow
 */

var app = angular.module('myapp', []);
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.text = 'Hello Angular';
}

