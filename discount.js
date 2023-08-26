"use strict";
// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var price = 100;
if (price >= 100) {
    var result = 10 / 100 * price;
    var disacount = price - result;
    console.log("You got 10% discount on product:" + result);
    console.log("You got 10% discount on product:" + disacount);
}
else {
    var result1 = 5 / 100 * price;
    var disacount1 = price - result1;
    console.log("You got 5% discount on product :" + result1);
    console.log("You got 5% discount on product :" + disacount1);
}
