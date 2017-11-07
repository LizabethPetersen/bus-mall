'use strict';


function Product (name, src) {
    this.name = name;
    this.src = './assets/' + src;
    this.clicked = 0;
}

Product.prototype.clicked = function() {
    this.clicked += 1;
};

Product.prototype.render = function() {
    const ele = document.createElement('img');
    ele.src = this.src;
    ele.classList.add(this.name);

    return ele;
};

console.log(Product);