'use strict';

let clicks = 0;
let products = [];

if (localStorage.products) {
    console.log('We have products');

    // if we have products in localStorage
    // get them, instantiate them, add them into our products array

    // productsArray is an array of object literals, NOT Product (the constructor)

    const productsArray = JSON.parse(localStorage.products);
    console.log('productsArray', productsArray);

    for (let i = 0; i < productsArray.length; i++) {
        const product = new Product(productsArray[i].name, productsArray[i].src, productsArray[i].clicks);
        console.log('current product: ' + products);
        console.log('products array', products);
        products.push(product);
    }

} else {

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


    products = [bag, banana, chair, cthulhu, dragon, tauntaun, dogDuck, petSweep, scissors, shark, sweep, wineGlass, usb, unicorn, waterCan, pen, bathroom, boots, breakfast, bubblegum];
}

console.log(products);


showRandomProducts();


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
    showRandomProducts();


    clicks++;
    if (clicks >= 10) {
        endVote();
    }
}

function showRandomProducts() {
    const vote = document.getElementById('vote');
    const tempArray = [];

    while (tempArray.length < 3) {
        const randomProduct = products[Math.floor(Math.random() * products.length)];

        if (!tempArray.includes(randomProduct)) {
            tempArray.push(randomProduct);
            const randomProductEle = randomProduct.render();  // returns img element
            vote.appendChild(randomProductEle);
        }
    }
}

function endVote() {
    // remove click listener
    const vote = document.getElementById('vote');
    vote.removeEventListener('click', clickHandler);

    console.table(products);
    endCard();
    drawChart();
    localStorage.setItem('products', JSON.stringify(products));

}

function endCard() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'purple';
    ctx.fillRect(0,0,200,200);

    ctx.font = '24px sans-serif';
    for (let i = 0; i < 10; i++) {
        ctx.fillText('THANK YOU FOR VOTING!', 210, 200);  // all //of this context will be replaced by new Chart
    }
}
// chartData.data.datasets[0].data.push(this item will be votes for a particular item)
//this will be done in a for loop of all products, similar to the clickHandler for loop
// after the for loop is populated, call new Chart(context, chartData)

//}

function drawChart() {
    //TODO get canvas element and its context
    const canvas = document.getElementById('chart');
    const context = canvas.getContext('2d');

    // TODO add class 'done' to endCard so we can animate it
    //    canvas.classList.add('done');

    context.fillStyle = 'rgba(200,100,200,1)';
    context.fillRect(0,0,200,200);

    context.font = '24px serif';
    //    for (let i = 0; 1 < 25; i++) {
    //        context.fillText('THANKS FOR PARTICIPATING!', 210, 210);
    //    }

    // TODO add a chart that shows # of votes per product
    const productNames = [];
    const voteData = [];

    for (let i = 0; i < products.length; i++) {
        chartData.data.labels.push(products[i].name);
        chartData.data.datasets[0].data.push(products[i].clicks);
    }
    console.log('productNames:', productNames);
    console.log('voteData:', voteData);

    const chartCanvas = document.getElementById('chart');
    const chartContext = chartCanvas.getContext('2d');

    Chart.defaults.global.defaultFontColor = '#888';

    new Chart(chartContext, chartData);

}


const chartData = { // first level children: type of chart, data, options
    type: 'bar',
    data: {
        labels: [], //'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', //'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
        datasets: [
            {
                label: 'Number of votes per item',
                data: [],
                backgroundColor: 'rgb(255, 120, 0',
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Bus Mall Voting Data',
            //            labels: {
            //                fontColor: 'rgb(255, 255, 255)'
        },

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};