const panelElements = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  this.classList.toggle('active');
}

panelElements.forEach(function(element) {
  element.addEventListener('click', toggleOpen);
  element.addEventListener('transitionend', toggleActive);
});
