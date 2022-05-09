// console.log('hello from dynamic name javascript file');

// console.log(window.location.search);
const params = new URLSearchParams(window.location.search);

console.log(params.get('firstName'));

const firstNameElem = document.getElementById('first-name');

firstNameElem.textContent = params.get('firstName');
