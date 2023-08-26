// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days
var numOfDays: number = 17;
var remainingDays: number = 3;
var result: number = numOfDays / 7;
var result1: number = remainingDays % 7
console.log("week:" + result);
console.log("remaining days:" + result1);