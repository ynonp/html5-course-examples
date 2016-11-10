var ul = document.querySelector('.numbers');

var children = ul.childNodes;

var max = children[0];

for (var i=0; i < children.length; i++) {
  var val    = Number(children[i].textContent);
  var maxVal = Number(max.textContent);

  if (val > maxVal) {
    max = children[i];
  }
}

max.classList.add('max');

