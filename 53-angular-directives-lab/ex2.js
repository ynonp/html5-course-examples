/**
 * Write a directive that shows a click counter with an indicator
 * If a user clicked over a given "goal" indicator should be painted
 * green, otherwise red.
 *
 * Bonus: Set indicator to green based on clicks per seconds
 */

var app = angular.module('myapp', []);
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.text = 'Hello Angular';
}

