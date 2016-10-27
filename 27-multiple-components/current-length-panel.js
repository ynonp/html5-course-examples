// panels/current-length.js
function CurrentLengthPanel(el, parent) {
  this.el = {
    root: el,
    title: el.querySelector('.title'),
    val: el.querySelector('.val')
  };  
  this.parent = parent;
}

CurrentLengthPanel.prototype.start = function() {
  this.el.title.textContent = 'Current Length: ';
  this.display(this.parent.currentTextLength());
};

CurrentLengthPanel.prototype.display = function(textLength) {
  this.el.val.textContent = textLength;
};
