/**
 * Show a time converter on page:
 * Present 3 text boxes for seconds, minutes and hours.
 * Changing text in one box causes correlated values to be written
 * to the other boxes.
 *
 * i.e. writing 7200 in the "seconds" box will automatically write
 * 2 in the "hours" box and "120" in the minutes box
 */

var app = angular.module('myapp', []);
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.text = 'Hello Angular';
}

