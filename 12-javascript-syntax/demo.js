// JavaScript Syntax
/*
 * 1. Comments
 * 2. Variables
 * 3. Data Types + Operators
 * 4. Loops and Conditionals
 * 5. functions and scope
 */

function test() {
	console.log('Hello World');
}

function main() {
	var foo = 10;
	var name = 'ynon';
	var f = test;
	
	var myfunction = function() {
		console.log("code is not yet executed");	
	};
	
	f();
	
	var z = 10 + 20;
	var x = 10 * 7;

	// email = ynon@gmail.com
	var email = name + '@gmail.com';
	
	for(var i=0;i<10; i++) {
		console.log('i = '  +i);
	}
	
	while(name.indexOf('n') > -1) {
		name = name.substr(1);	
	}
	
	x = 10;
	z = '10';
	
	if (x==z) {
		// statement is true
	}
	
	if (x===z) {
		// not executed - false
	}
	
	if(Number(x) === Number(z)) {
		// true	
	}
	
	

}

main();







