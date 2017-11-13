'use strict';


function Product(name, src, clicks) { //eslint-disable-line
    this.name = name;
    this.src = '.js/assets/' + src;
    this.clicks = clicks || 0; // votes
    this.tempArray = 0;
}

Product.prototype.wasDisplayed = function() {
    this.tempArray += 1;
};

Product.prototype.wasClicked = function() {
    this.clicks += 1;
};

Product.prototype.render = function() {
    const ele = document.createElement('img');
    ele.src = this.src;
    ele.classList.add(this.name);

    return ele;
};

console.log(Product);