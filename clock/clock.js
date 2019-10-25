const secondHand = document.querySelector('.clock__hand--second');
const minuteHand = document.querySelector('.clock__hand--minute');
const hourHand = document.querySelector('.clock__hand--hour');

function getDate() {
  var currentDate = new Date();
  var currentSeconds = currentDate.getSeconds();
  var currentMinutes = currentDate.getMinutes();
  var currentHours = currentDate.getHours();
  var rotateDegrees = {
        seconds: ((360 / 60) * currentSeconds) + 90,
        minutes: ((360 / 60) * currentMinutes) + 90,
        hours: ((360 / 12) * ((currentHours > 12) ? currentHours - 12 : currentHours)) + 90
      }
  return rotateDegrees;
}

function rotateHand(element, degrees) {
  var originalStyle = element.style;
  if (degrees === 90) { element.style.transition = 'none'; }
  if (degrees === 96) { element.style = originalStyle; }
  element.style.transform = 'rotate(' + degrees + 'deg)';
}

setInterval(function() {
  let rotation = getDate();
  rotateHand(secondHand, rotation.seconds);
  rotateHand(minuteHand, rotation.minutes);
  rotateHand(hourHand, rotation.hours);
}, 1000);