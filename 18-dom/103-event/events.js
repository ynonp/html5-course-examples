var messages = [
  'mind the gap',
  'enjoy the show',
  'let it flow',
  'home sweet home'
];
var p = document.querySelector('.panel');

function writeMousePositionToPanel(event) {
  p.textContent = event.clientX + ',' + event.clientY;
}

function writeRandomMessage(event) {
  var index = Math.floor(Math.random() * messages.length);
  p.textContent = messages[index];
}

var btn = document.querySelector('#btn-say');
btn.addEventListener('click', writeRandomMessage);

document.body.addEventListener('mousemove', writeMousePositionToPanel);
