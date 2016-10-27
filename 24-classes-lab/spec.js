describe('Person', function() {
  describe('#hello', function() {
    it('should state name and age', function() {
      var p1 = new Person('Mike');
      expect(p1.hello()).toEqual('My name is Mike and I am 1 years old');
    });
  });

  describe('#growUp', function() {
    it('should increase age', function() {
      var p1 = new Person('Mike');
      var p2 = new Person('Jim');

      p1.growUp();

      expect(p1.hello()).toEqual('My name is Mike and I am 2 years old');
      expect(p2.hello()).toEqual('My name is Jim and I am 1 years old');
    });
  });
});

describe('Summer', function() {
  it('should calculate sum', function() {
    var s1 = new Summer();
    var s2 = new Summer();
    s1.add(10);
    s1.add(20);

    s2.add(30);
    s2.add(5);

    expect(s1.getCurrentSum()).toEqual(30);
    expect(s2.getCurrentSum()).toEqual(35);
  });
});

describe('Race', function() {
	it('should find the fastest car', function() {
		var c1 = new Car('red');
		var c2 = new Car('blue', 50);
		var c3 = new Car('black');

		var race = new Race();
		race.addCars(c1, c2, c3);

		c1.drive(20);
		c3.drive(10);

    expect(race.winner()).toEqual(c2);
  });
});
