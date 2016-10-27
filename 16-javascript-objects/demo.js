// define an object
var me = {
    name: 'ynon',
    web: 'tocode.co.il'
};

// add a new key/value pair
me.likes = 'stuff';

// change an existing value
me.likes = ['reading', 'sleeping'];

// delete a key/value pair
delete me.likes;

// get all the keys
var keys = Object.keys(me);

// iterate key/value pairs:
for (var i=0; i<keys.length; i++) {
    var k = keys[i];
    var v = me[k];
    
    console.log('me[' + k + '] = ' + v);
}

// Merging objects with Object.assign
var data = {
  color: 'blue',
  border: '10px solid black',  
};

var defaults = {
  display: 'block', 
  border: '20px solid yellow',
};

var res = Object.assign({}, defaults, data);

console.log(res);
