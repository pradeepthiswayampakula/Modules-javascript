//exporting module
console.log("exporting module");

const shipping = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};

const totalQuantity = 12;
const totalPrice = 20;

export { totalQuantity as tq, totalPrice};

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};
