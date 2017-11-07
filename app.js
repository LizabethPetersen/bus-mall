'use strict';

let clicks = 0;

const banana = new Product('banana', 'banana.jpg');
const dragon = new Product('dragon', 'dragon.jpg');
const tauntaun = new Product('tauntaun', 'tauntaun.jpg');
const dogDuck = new Product('dog-duck', 'dog-duck.jpg');
const waterCan = new Product('water-can', 'water-can.jpg');
const pen = new Product('pen', 'pen.jpg');
const bag = new Product('bag', 'bag.jpg');
const bathroom = new Product('bathroom', 'bathroom.jpg');
const boots = new Product('boots', 'boots.jpg');
const breakfast = new Product('breakfast', 'breakfast.jpg');
const bubblegum = new Product('bubblegum', 'bubblegum.jpg');

const products = [banana, dragon, tauntaun, dogDuck, waterCan, pen, bag, bathroom, boots, breakfast, bubblegum];

for (let i = 0; i < 3; i++); {
    appendRandomProduct();
}

const vote = document.getElementById('vote');
vote.addEventListener('click', clickHandler);

function clickHandler(e) {
    const clickedProduct = e.target; // is the html element that was clicked

    // will exit the function if something else was clicked
    if (clickedProduct.id === vote) return;

    // looping over products array to find a product instance to update
    for (let i = 0; i < products.length; i++) {
        const productsClass = clickedProduct.classList.value;
        if (products[i].type === productsClass) {
            products[i].wasClicked();
            console.log('number of clicks', products[i].clicked);
        }
    }
    // render a new product
    appendRandomProduct();

    clicks++;
    if (clicks >= 5) {
        endVote();
    }
}

function appendRandomProduct() {
    const vote = document.getElementById('vote');
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomProductEle = randomProduct.render();  // returns img element
    vote.appendChild(randomProductEle);
}

function endVote () {
    // remove click listener
    const vote = document.getElementById('vote');
    vote.removeEventListener('click', clickHandler);

    console.table(products);
}

