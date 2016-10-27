// panels/current-length.js
function CurrentLengthPanel(el, parent) {
  Panel.call(this, el, parent);
}

CurrentLengthPanel.prototype = Object.create(Panel.prototype);

CurrentLengthPanel.prototype.titleText = 'Current Length: ';

CurrentLengthPanel.prototype.getDisplayValue = function(textLength) {
  return textLength;
};

