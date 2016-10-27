function Car(color) {
  // the instance is called this
  this.color = color;
  this.speed = 0;
}

Car.prototype.drive = function(speed) {
  this.speed = speed;
};

Car.prototype.isFasterThan = function(other) {
  return this.speed > other.speed;
};


var c1 = new Car('red');
var c2 = new Car('blue');

c1.drive(50);
c2.drive(30);

if ( c1.isFasterThan(c2) ) {
  console.log('the ' + c1.color + ' car is faster')
}

