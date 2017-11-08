'use strict';


function Product (name, src) {
    this.name = name;
    this.src = './assets/' + src;
    this.clicks = 0;
}

Product.prototype.render = function() {
    const ele = document.createElement('img');
    ele.src = this.src;
    ele.classList.add(this.name);

    return ele;
};

Product.prototype.wasClicked = function() {
    this.clicks += 1;
};

console.log(Product);