import { findById } from '../utils.js';
import { dogs } from '../dogs.js';
console.log('hello from dog detail');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const dog = findById(params.get('id'), dogs);
console.log(dog);

const dogName = document.getElementById('dog-name');
dogName.textContent = dog.name;
