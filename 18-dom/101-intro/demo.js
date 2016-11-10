/**
 * DOM  Document Object Model
 *
 * JS -> Web Page
 *
 * Events -> Trigger JS Code
 * 
 * Event Bubbling
 */

function double_word(event_details) {
  var current_element = event_details.target;
  var value = current_element.innerHTML;
  current_element.innerHTML = value + value;
}

function change_header() {
  var h1 = document.querySelector('h1');
  h1.innerHTML = 'Ouch!'  ; 
}

function count() {
  var counter = document.querySelector('#count');
  var value = counter.innerHTML;
  var next = Number(value) + 1;
  counter.innerHTML = next;
}

function main() {
  // h1 is called DOM element
  var h1 = document.querySelector('h1');
  var body = document.querySelector('body');
  var btn = document.querySelector('button');
  
  btn.addEventListener('click', count);

  // return an array
  var ul = document.querySelector('ul');
  ul.addEventListener('click', double_word);

  


  h1.innerHTML = 'Hello From JS';
  var n = Math.random();
  if (n > 0.5) {
    h1.classList.add('red');
  } else {
    h1.classList.add('blue');
  }
  
  body.classList.remove('loading');
}

main();


