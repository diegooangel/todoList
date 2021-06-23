console.log('hola mundo');

const form = document.getElementById('form');





function addElement(e) {
    const ul = document.getElementById('ul')
    const input = document.getElementById('input');
    const item = document.createElement('li');
    const text = document.createTextNode(input.value);
    //const text = document.createTextNode(e.target);
    console.log(text);
    ul.appendChild(item);
    item.appendChild(text); //aca metimos text dentro de item.
}

function removeElement(e) {
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    addElement();
});