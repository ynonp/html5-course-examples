var Utils = {};

Utils.injectHtmlTemplate = function(el, templateId) {
  var html = document.getElementById(templateId).innerHTML;
  el.innerHTML = html;  
};

