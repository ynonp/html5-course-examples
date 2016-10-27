function Counter(btn) {
  this.val = 0;
  btn.addEventListener('click', this.inc.bind(this));
}

Counter.prototype.inc = function() {
  this.val++;
  log.innerHTML += this.val + '<br />';
};

var c1 = new Counter(b1);
var c2 = new Counter(b2);
var c3 = new Counter(b3);


