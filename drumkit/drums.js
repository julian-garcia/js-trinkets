let isPlayed = 0;

function playSound(event) {
  const audioElement = document.querySelector('audio[data-key="' + event.keyCode + '"]');
  if (!audioElement) { return; }

  if (isPlayed !== event.keyCode) {
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();
    isPlayed = event.keyCode;
    document.querySelector('.key[data-key="' + event.keyCode + '"]').classList.add('key--active');
  }
}

function inactiveKey(event) { this.classList.remove('key--active'); }

document.addEventListener('keydown', playSound);
document.addEventListener('keyup', function(event) { isPlayed = 0; });
document.querySelectorAll('.key').forEach(function(element) {
  element.addEventListener('transitionend', inactiveKey);
});

