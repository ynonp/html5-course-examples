/**
 * Word Counter
 *
 * Present a textarea and below a list of words and how many
 * times each word appears in the text area.
 * When user changes text in the textarea, the list should
 * modify according to the new text
 */

var app = angular.module('myapp', []);
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.text = 'Hello Angular';
}

