function Application(el) {
  this.el = el;  
  
  window.addEventListener('hashchange', this.setPageFromHash.bind(this));
  this.setPageFromHash();  
}

Application.prototype.setPageFromHash = function() {
  var hash = window.location.hash.substr(1);
  
  if (hash === 'about') {
    this.showPage(AboutPage);
  } else if ( hash === 'clicker' ) {
    this.showPage(ClickerPage);
  } else {
    this.showPage(HomePage);
  }  
};

Application.prototype.showPage = function(Page) {
  
  if (this.activePage) {
    var res = this.activePage.leave();
    if (res && typeof res.then === 'function') {
      return res.then(this.replacePage.bind(this, Page));
    }
  } 
  
  this.replacePage(Page);  
};

Application.prototype.replacePage = function(Page) {
  var nextPage = new Page();
  var html = document.getElementById(nextPage.template).innerHTML;
  this.el.innerHTML = html;
  this.activePage = nextPage;

  this.activePage.enter(this.el);
}

