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
    showRandomProduct();
}

const vote = document.getElementById('vote');
vote.addEventListener('click', clickHandler);

function clickHandler(e) {
    const clickedProduct = e.target; // is the html element that was clicked

    // will exit the function if something else was clicked
    if (clickedProduct.id === 'vote') return;

    // looping over products array to find a product instance to update
    for (let i = 0; i < products.length; i++) {
        const productsClass = clickedProduct.classList.value;
        console.log(products[i].name, productsClass);

        if (products[i].name === productsClass) {
            products[i].wasClicked();
            console.log('number of clicks', products[i].clicks);
        }
    }
    // remove element
    const images = document.querySelectorAll('img');
    for (let i = 0; i < 3; i++) {
        images[i].remove();
    }
    // render a new product
    for (let i = 0; i < 3; i++) {
        showRandomProduct();
    }

    clicks++;
    if (clicks >= 10) {
        endVote();
    }
}

function showRandomProduct() {
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
    drawChart();
}

function drawChart () {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.fillStyle = 'purple';
    context.fillRect(0,0,200,200);

    context.font = '24px sans-serif';
    for (let i = 0; i < 10; i++) {
        context.fillText('THANK YOU FOR VOTING!', 210, 200);  // all of this context will be replaced by new Chart
    }
// chartData.data.datasets[0].data.push(this item will be votes for a particular item)
//this will be done in a for loop of all products, similar to the clickHandler for loop
// after the for loop is populated, call new Chart(context, chartData)
}

//const productNames = [];
//const voteData = [];
//
//for (let i = 0; i < products.length; i++ ) {
//    productNames.push(products[i].name);
//    voteData.push(products[i].clicks);
//
//    console.log( 'productNames:', productNames );
//    console.log( 'voteData:', voteData );
//}
//
//const chartCanvas = document.getElementById('chart');
//const chartCtx = chartCanvas.getContext('2d');
//
//let chartData = {
//    type: 'bar',
//    data: {
//        labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', //'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', //'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
//        datasets: [{
//            label: 'Number of votes per item',
//            data: [],
//            backgroundColor: ['rgba(0, 0, 0, 0.7)'],
//            borderColor: ['rgba(205, 225, 237, 1)'],
//            borderWidth: 2
//        }]
//    },
//    options: {
//        legend: {
//            display: true,
//            text: 'Bus Mall Voting Data',
//            labels: {
//                fontColor: 'rgb(255, 255, 255)'
//            }
//        },
//
//        scales: {
//            yAxes: [{
//                ticks: {
//                    beginAtZero: true
//                }
//            }]
//        }
//    }
//} );
////Chart.prototype.render = function();