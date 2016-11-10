function inc(event) { 
  var btn = event.target;
  if (btn.tagName !== 'BUTTON') {
    return;
  }

  var val = Number(btn.textContent);
  btn.textContent = val + 1;
}

var btns = document.querySelector('.counters');
btns.addEventListener('click', inc);

