//function 1
printBiggestNumber();

//function 2
printAmountOfNumber();

//function 3
printGCD(9,6);

//function 4
 printLCM(9,6);


function printBiggestNumber(){	
	var max=100;
	var min=0;	
	var first_num=Math.floor((Math.random() * max) + min);
	var secound_num=Math.floor((Math.random() * max) + min);
	var third_num=Math.floor((Math.random() * max) + min);
	  
	console.log("first_num ="+ first_num);	
	console.log("secound_num ="+ secound_num);
	console.log("third_num ="+ third_num);
	
	var max_number=Math.max(first_num, secound_num,third_num);	
	console.log("max_number ="+ max_number);	
	
};

function printAmountOfNumber (){	
	var max=1000;
	var min=9999;	
	var num=Math.floor((Math.random() * max) + min);
	num=""+num;
	var len=num.length;
    console.log("number ="+ num);  
    var amount=0;   
    for(var i=0;i<len;i++) {
    	amount+=Number(num.charAt(i));
    }
	console.log("amount ="+ amount);
}


//Least Common Multiple 
function printLCM(x,y) {
var lcm= (x*y) / calcGCD(x,y);
console.log('LCM number='+ lcm); 
}  

//Greatest Common Divisor
function printGCD(x, y) {   
  console.log('GCD number='+ calcGCD(x,y));  
}  

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

