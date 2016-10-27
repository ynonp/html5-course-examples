/**
 * Write a directive that shows synchronised text boxes
 */

var app = angular.module('myapp', []);
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.text = 'Hello Angular';
}

