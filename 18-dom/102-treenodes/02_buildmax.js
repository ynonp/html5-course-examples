var numbers = [10, 20, 30, 70, 3, 5, 1];

var root = document.createDocumentFragment();

for (var i=0; i < numbers.length; i++) {
  var li = document.createElement('li');
  li.textContent = numbers[i];
  if (numbers[i] === 70) {
    li.classList.add('max');
  }
  root.appendChild(li);
}


var ul = document.querySelector('ul');
ul.appendChild(root);
