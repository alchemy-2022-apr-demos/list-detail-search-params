export function renderDogLI(dog) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `./dog-detail/?id=${dog.id}`;
    a.textContent = dog.name;
    li.append(a);
    return li;
}
