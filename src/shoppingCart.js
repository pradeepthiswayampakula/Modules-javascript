//exporting module
console.log("exporting module");

const shipping = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 15;

export {totalPrice, totalQuantity as tq};
