// Working with Arrays

function iteration() {
	// map, reduce, forEach
	var colors = ['red', 'blue', 'green'];
	var numbers = [3, 5, 9, 11, 15];

	var mixed = [10, 20, 'foo', 'bar', [1,2,3], 'hello'];
	
	function print_item(text) {
		console.log("Item is: " + text);
	}
	
	function square(x) {
		return x * x;
	}
	
	function add(x, y) {
		return x + y;
	}
	
	function max(x, y) {
		return x > y ? x : y;
	}
	
	colors.forEach(print_item);
	
	var num_sqr = numbers.map(square);	
	
	
	
}



function main() {
	// define arrays	
	var colors = ['red', 'blue', 'green'];
	var mixed = [10, 20, 'foo', 'bar', [1,2,3], 'hello'];
	
	// size and items
	colors.length; // 3
	mixed.length; // 6
	colors[1]; // blue
	mixed[2]; // foo
	
	// add and remove items
	// add item to the end of the array
	colors.push('yellow');
	
	// remove last item
	colors.pop();
	
	// insert to start
	colors.unshift('white');
	
	// remove first item
	colors.shift();
}

iteration();









