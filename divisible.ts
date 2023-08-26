//Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var num: number = 15;
if (num %3==0)
{
console.log("Number is divisible by 3");
}
else if (num %5==0)
{
console.log("Number is divisible by 5");
}
else if (num %3==0 && num%5==0)
{
console.log("Number is divisible by 3 and 5");
}
else
{
console.log("Number is not divisible by 3 and 5");
}