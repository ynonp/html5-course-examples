sum();
sum(2, 3, 5);

/**
- * Write a function that get parameters
- * and prints their amount
- */
function sum(){   
 var arr= [].slice.call(arguments);  
  if (arr.length===0 )
     console.log(0);
  else{
     console.log(arr.reduce((a,b)=>a+b));   
  }  
}

uniq('foo', 'foo', 'foo', 'bar', 'bar', 'buz', 'buz');
uniq(10, 10, 10, 20, 20, 10, 20, 30);

/**
- * Write a function that get parameters
- * and prints all parameters without duplicate 
- */
function uniq(){  
  var duplicatesArray= [].slice.call(arguments);  
  var uniqueArray = duplicatesArray.filter(function(elem, pos) {
  return duplicatesArray.indexOf(elem) == pos;
});
 console.log(uniqueArray);
}