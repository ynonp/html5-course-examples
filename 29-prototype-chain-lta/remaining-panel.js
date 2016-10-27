function RemainingPanel(el, parent) {
  Panel.call(this, el, parent);
  this.maxLength = parent.maxLength;
}

RemainingPanel.prototype = Object.create(Panel.prototype);

RemainingPanel.prototype.titleText = 'Characters Remaining: ';
  
RemainingPanel.prototype.getDisplayValue = function(textLength) {
  return this.maxLength - textLength;
};


