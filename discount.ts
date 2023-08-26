// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var price: number = 100;
if(price >= 100)
{
var result: number = 10/100 * price;
var disacount: number = price - result;
console.log("You got 10% discount on product:" + result);
console.log("You got 10% discount on product:" + disacount);
 }
  else
{
var result1: number = 5/100 * price;
var disacount1: number = price - result1;
console.log ("You got 5% discount on product :" + result1);
console.log ("You got 5% discount on product :" + disacount1);
}