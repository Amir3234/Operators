"use strict";
// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days
var numOfDays = 17;
var remainingDays = 3;
var result = numOfDays / 7;
var result1 = remainingDays % 7;
console.log("week:" + result);
console.log("remaining days:" + result1);
