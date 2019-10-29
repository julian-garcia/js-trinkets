const apiUrl = 'https://dog.ceo/api';
const endPoint = apiUrl + '/breeds/list/all';
const endPointBreed = apiUrl + '/breed';
const searchInputElement = document.querySelector('.search');
const suggestionsElement = document.querySelector('.suggestions');
const imagesElement = document.querySelector('.images');

let dogBreeds;
let breedImages;

fetch(endPoint)
  .then(function(data) { return data.json(); })
  .then(function(data) { dogBreeds = Object.keys(data['message']); });

function findMatches(word, dogBreeds) {
  if (word === '') return [];
  return dogBreeds.filter(function(breed){
    if (breed.includes(word)) return breed;
  });
}

function displayMatches() {
  let matchedBreeds = findMatches(this.value, dogBreeds);
  imagesElement.innerHTML = `<div class="image" style="background-image: url(puppy.jpg);"></div>`;

  if (matchedBreeds) {
    while(suggestionsElement.firstChild) {
      suggestionsElement.removeChild(suggestionsElement.firstChild);
    }
    matchedBreeds.forEach(breed => {
      var item = document.createElement('li');
      item.setAttribute('class','item');
      item.setAttribute('data-breed',breed);
      item.textContent = breed;
      suggestionsElement.appendChild(item);
    });
  }
}

function displayBreedImages(e) {
  let dogBreed = e.target.getAttribute('data-breed');

  if (dogBreed) {
    fetch(endPointBreed + '/' + dogBreed + '/images/random/3')
      .then(function(data) { return data.json(); })
      .then(function(data) { 
        breedImages = data['message']; 
        const html = breedImages.map(imageUrl => {
          return `<div class="image" style="background-image:url(${imageUrl})"></div>`
        }).join('');
        imagesElement.innerHTML = html;
      });
  }
}

searchInputElement.addEventListener('change', displayMatches);
searchInputElement.addEventListener('keyup', displayMatches);
suggestionsElement.addEventListener('mouseup', displayBreedImages);
