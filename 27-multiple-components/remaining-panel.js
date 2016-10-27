function RemainingPanel(el, parent) {
  this.el = {
    root: el,
    title: el.querySelector('.title'),
    val: el.querySelector('.val')
  };
  this.maxLength = parent.maxLength;
  this.parent = parent;
}

RemainingPanel.prototype.start = function() {
  this.el.title.textContent = 'Characters Remaining: ';
  this.display(this.parent.currentTextLength());
};

RemainingPanel.prototype.display = function(textLength) {
  this.el.val.textContent = this.maxLength - textLength;
};
