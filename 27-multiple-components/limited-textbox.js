// limited-textbox.js
function LimitedTextbox(el, maxLength) {
  this.maxLength = maxLength;
  this.el = {
    root: el,
    textarea: el.querySelector('textarea'),
    panel: el.querySelector('.panel')
  }; 
  this.maxLength = maxLength;

  this.panels = [
    new RemainingPanel(this.el.panel, this),
    new CurrentLengthPanel(this.el.panel, this)
  ];
  this.activePanelIndex = 0;
  this.panels[this.activePanelIndex].start();

  // set HTML maxLength attribute so text area will actually be limited
  this.el.textarea.maxLength = this.maxLength;

  // add the event handler
  this.el.textarea.addEventListener('input', this.updateRemainingText.bind(this));  
  this.el.panel.addEventListener('click', this.togglePanel.bind(this));
}

LimitedTextbox.prototype.togglePanel = function() {
  this.activePanelIndex = (this.activePanelIndex + 1) % this.panels.length;
  this.panels[this.activePanelIndex].start();
};

LimitedTextbox.prototype.currentTextLength = function() {
  return this.el.textarea.value.length;
};

LimitedTextbox.prototype.updateRemainingText = function() {
  var currentLength = this.el.textarea.value.length;
  this.display(currentLength);
};

LimitedTextbox.prototype.display = function(textLength) {
  this.panels[this.activePanelIndex].display(textLength);
};

LimitedTextbox.prototype.reset = function() {
  this.el.textarea.value = '';
  this.display(0);
};
