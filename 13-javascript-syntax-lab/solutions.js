gcd(5,10);
lcm(5,10);

ex1();
ex2();

/**
* Write a function that takes two numbers as arguments
* and prints their gcd
 */
 function gcd(a, b) {
	
	console.log(`GCD= ${calcGCD(a,b)}`); 
}

/**
 * Write a function that takes two numbers as arguments
 * and prints their lcm
 */
 function lcm(a, b) {
	var lcm= (a*b) / calcGCD(a,b);
   console.log(`lcm = ${lcm}`); 
    
}

/**
  * Write a function that randomizes 3 numbers in range [0,100],
  * prints all 3 and the largest one
 */
 function ex1() {
	var max=100,min=0;	
	var firstNum=randomInRange(min,max);
	var secoundNum=randomInRange(min,max);
	var thirdNum=randomInRange(min,max);
	
	console.log(`first num = ${firstNum}`);  
	console.log(`secound num= ${secoundNum}`); 
	console.log(`third num = ${thirdNum}`); 
	console.log(`max number = ${Math.max(firstNum, secoundNum,thirdNum)}`); 
}

/**
* Write a function that randomizes a number in range [1000, 9999]
* and prints the sum total of its digits
*/
 function ex2(){	
	var max=1000,min=9999,amount=0;	
	var num=randomInRange(min,max);
	
	var len=String(num).length;
	console.log(`number = ${num}`); 
    
    for(var i=0;i<len;i++) {
    	amount+=Number(String(num).charAt(i));
    }
	console.log(`amount = ${amount}`); 
}

/*
 * get ranndom number
 */
function randomInRange(min, max){	
	return Math.floor((Math.random() * max) + min);
}

/*
 * get gcd number
 */
function calcGCD(x,y){
  x = Math.abs(x);  
  y = Math.abs(y);  
  while(y) {  
    var t = y;  
    y = x % y;  
    x = t;
    } 
    return x;  	
}

