/* Write a program that takes the number of units consumed by a user
 if it is greater than 100 then add 10% tax 
 if greater than 200 then add 15% of tax so on up to 
 if greater than 500 then add 25% of tax
Where the tax amount will be calculated by the amount of bill. */
var unitConsumed: number = 300;
if (unitConsumed > 100)
{
    var tax: number= 10/100 * unitConsumed;
    console.log("User used greater than 100 units: " + tax);
}
else if (unitConsumed >200  && unitConsumed <500)
{
    var tax1: number = 15/100 * unitConsumed;
    console.log("User used greater than 200 units: " + tax1);
}
else
{
    var tax2: number = 25/100 * unitConsumed;
    console.log("User used greater than 500 units: " + tax2);
}