const imageElement = document.querySelector('.image');
const rootElement = document.documentElement;
const borderValElement = document.getElementById('border-value');
const borderWidthElement = document.getElementById('border-width');
const blurElement = document.getElementById('blur');

document.getElementById('accent-colour')
  .addEventListener('change', function(event) {
    rootElement.style.setProperty('--accent_colour', this.value);
  });

borderValElement.textContent = borderWidthElement.value;
  
borderWidthElement.addEventListener('input', function(event) {
    rootElement.style.setProperty('--border_width', this.value + 'px');
    borderValElement.textContent = this.value;
  });

blurElement.addEventListener('input', function(event) {
    rootElement.style.setProperty('--blur', this.value + 'px');
  });

