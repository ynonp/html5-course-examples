function LimitedTextbox(el, maxLength) {
  this.maxLength = maxLength;
  this.el = {
    root: el,
    textarea: el.querySelector('textarea'),
    panel: el.querySelector('.panel')
  }; 
  this.display(maxLength);
  this.maxLength = maxLength;
  
  // set HTML maxLength attribute so text area will actually be limited
  this.el.textarea.maxLength = this.maxLength;
  
  // add the event handler
  this.el.textarea.addEventListener('input', this.updateRemainingText.bind(this));
}

LimitedTextbox.prototype.updateRemainingText = function() {
  var currentLength = this.el.textarea.value.length;
  this.display(this.maxLength - currentLength);
};

LimitedTextbox.prototype.display = function(text) {
  this.el.panel.textContent = text;
};

LimitedTextbox.prototype.reset = function() {
  this.el.textarea.value = '';
  this.display(this.maxLength);
};

var boxes = document.querySelectorAll('.textbox');
var resetButton = document.querySelector('#btn-reset');

for (var i=0; i < boxes.length; i++) {
  var box = new LimitedTextbox(boxes[i], boxes[i].dataset.maxlength);
  resetButton.addEventListener('click', box.reset.bind(box));
}
