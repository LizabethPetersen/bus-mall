'use strict';

let clicks = 0;

const bag = new Product('bag', 'bag.jpg');
const banana = new Product('banana', 'banana.jpg');
const bathroom = new Product('bathroom', 'bathroom.jpg');
const boots = new Product('boots', 'boots.jpg');
const breakfast = new Product('breakfast', 'breakfast.jpg');
const bubblegum = new Product('bubblegum', 'bubblegum.jpg');
const chair = new Product('chair', 'chair.jpg');
const cthulhu = new Product('cthulhu', 'cthulhu.jpg');
const dogDuck = new Product('dog-duck', 'dog-duck.jpg');
const dragon = new Product('dragon', 'dragon.jpg');
const pen = new Product('pen', 'pen.jpg');
const petSweep = new Product('pet-sweep', 'pet-sweep.jpg');
const scissors = new Product('scissors', 'scissors.jpg');
const shark = new Product('shark', 'shark.jpg');
const sweep = new Product('sweep', 'sweep.png');
const tauntaun = new Product('tauntaun', 'tauntaun.jpg');
const unicorn = new Product('unicorn', 'unicorn.jpg');
const usb = new Product('usb', 'usb.gif');
const waterCan = new Product('water-can', 'water-can.jpg');
const wineGlass = new Product('wine-glass', 'wine-glass.jpg');


const products = [bag, banana, chair, cthulhu, dragon, tauntaun, dogDuck, petSweep, scissors, shark, sweep, wineGlass, usb, unicorn, waterCan, pen, bathroom, boots, breakfast, bubblegum];
console.log(products);

for (let i = 0; i < 3; i++) {
    appendRandomProduct();
}

const vote = document.getElementById('vote');
vote.addEventListener('click', clickHandler);

function appendRandomProduct() {
    const vote = document.getElementById('vote');
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const ele = randomProduct.render();  // returns img element
    vote.appendChild(ele);
}

function clickHandler(e) {
    const clickedProduct = e.target; // is the html element that was clicked

    // will exit the function if something else was clicked
    if (clickedProduct.id === vote) return;

    // looping over products array to find a product instance to update
    for (let i = 0; i < products.length; i++) {
        const productsClass = clickedProduct.classList.value;
        if (products[i].type === productsClass) {
            products[i].wasClicked();
            newFunction_1()('number of clicks', products[i].wasClicked);
        }
    }
    // render a new product
    appendRandomProduct();

    clicks++;
    if (clicks >= 5) {
        endVote();
    }

    function newFunction_1() {
        return console.log;
    }
}

function endVote () {
    // remove click listener
    const vote = document.getElementById('vote');
    vote.removeEventListener('click', clickHandler);

    console.table(products);
//    drawChart();
}
//function drawChart () {
//    const canvas = document.getElementById('endVote');
//    const context = canvas.getContext('2d');
//    context.fillStyle = 'rbga()';
//    context.
//}