// main.js
var boxes = document.querySelectorAll('.textbox');
var resetButton = document.querySelector('#btn-reset');

for (var i=0; i < boxes.length; i++) {
  var box = new LimitedTextbox(boxes[i], boxes[i].dataset.maxlength);
  resetButton.addEventListener('click', box.reset.bind(box));
}
