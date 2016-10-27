function Car(color, speed) {
	// the instance is called this
	this.color = color;
	this.speed = (speed || 0);
}

Car.prototype.drive = function(speed) {
	this.speed = speed;
};

Car.prototype.isFasterThan = function(other) {
	return this.speed > other.speed;
};

