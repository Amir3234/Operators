"use strict";
// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature = 45;
if (temperature >= 0 && temperature <= 15) {
    console.log("its very cold! You should wear a heavy winter coat, gloves, scarf, and a hat");
}
else if (temperature > 15 && temperature < 21) {
    console.log("It's cold outside. Consider wearing a warm jacket, a sweater, and a hat.");
}
else {
    console.log("It's a moderate temperature. A T-shirt and jeans would be comfortable");
}
