import { dogs } from './dogs.js';
import { renderDogLI } from './utils.js';

const dogLinks = document.getElementById('dog-links');

for (let dog of dogs) {
    const li = renderDogLI(dog);
    dogLinks.append(li);
}
