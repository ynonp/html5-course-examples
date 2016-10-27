class Car {
  constructor(color) {
    this.color = color;
    this.speed = 0;    
  }

  drive(speed) {
    this.speed = speed;
  }

  isFasterThan(other) {
    return this.speed > other.speed;
  }
}
