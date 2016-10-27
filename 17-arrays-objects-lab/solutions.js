/**
 * Starter file for lesson:
 * arrays-objects-lab
 *
 * Fill in code in the functions body
 */

/**
 * Write a function that prints the sum total of its arguments
 */
function sum() {
}

/**
 * Write a function that takes a list of words and return the
 * list without duplicate values
 */
function uniq() {
}

/**
 * Example usage: Open the html file to see results in your browser
 *
 */

describe('#sum', function() {
  it('should sum positive numbers', function() {
    expect(sum(10, 20, 30)).toEqual(60);
  });

	it('should sum any number of arguments', function() {
		expect(sum(1,2,3,4,5,6,7,8,9,10)).toEqual(55);
	});

  it('should sum negative numbers', function() {
    expect(sum(-10, -20, -30)).toEqual(-60);
  });

  it('should return 0 if no arguments passed', function() {
    expect(sum()).toEqual(0);
  });
});


describe('#uniq', function() {
	it('should return uniq values', function() {
    expect(uniq('foo', 'foo', 'foo', 'bar', 'bar', 'buz', 'buz')).
      toEqual(['foo', 'bar', 'buz']);
	});

  it('should work for numbers too', function() {
    expect(uniq(10, 10, 10, 20, 20, 10, 20, 30)).
      toEqual([10, 20, 30]);
  });
});

