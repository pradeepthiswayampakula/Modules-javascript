
//importing module
//import { addToCart, 
// tq, 
// totalPrice as price 
// } from "./shoppingCart.js";
//addToCart("Bread", 5);
//console.log(price, tq);

console.log("importing module");

//import * as ShoppingCart from "./shoppingCart.js";
//ShoppingCart.addToCart("bread", 5);
//console.log(ShoppingCart.totalPrice);

import add, {cart} from "./shoppingCart.js";
add("pizza", 2);
add("cereal", 3);
add("mango", 4);

console.log(cart);
