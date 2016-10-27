/**
 * Build a page that shows a list of items and a text box
 * The box should be used as a filter to the list,
 * so only items that contain the text typed in the box
 * are presented
 */

var app = angular.module('myapp', []);
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.text = 'Hello Angular';
}

