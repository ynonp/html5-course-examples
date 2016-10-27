function Panel(el, parent) {
  this.el = {
    root: el,
    title: el.querySelector('.title'),
    val: el.querySelector('.val')
  };
  this.parent = parent;  
}

Panel.prototype.start = function() {
  this.el.title.textContent = this.titleText;
  this.display(this.parent.currentTextLength());
};

Panel.prototype.display = function(textLength) {
  this.el.val.textContent = this.getDisplayValue(textLength);
};

