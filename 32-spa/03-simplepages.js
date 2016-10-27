function HomePage() {
  Page.call(this, 't-home');
}
HomePage.prototype = Object.create(Page.prototype);

HomePage.prototype.leave = function() {
  this._el.innerHTML = 'bye bye';
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000);
  });
};


function AboutPage() {
  Page.call(this, 't-about');
}
AboutPage.prototype = Object.create(Page.prototype);

