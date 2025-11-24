// loops allow for code to be executed a number of times

// for loop syntax
// for (initialization; condition; increment) {
//     // code to be executed
// }

const cars = ["Volvo", "BMW", "Ford", "Mazda"];
let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}
document.getElementById("value").innerHTML = text;

// while loop syntax
// while (condition) {
//     // code to be executed
// }
// the while loop executes a block of code as long as the specified condition is true

let i = 0;
let text1 = "";
while (i < cars.length) {
    text1 += cars[i] + "<br>";
    i++;
}
document.getElementById("demo").innerHTML = text1;

// do while loop syntax
// do {
//     // code to be executed
// } while (condition);
// the do while loop executes a block of code once,
//  and then repeats the execution as long as the specified condition is true
let word ="";
let q = 0;
do {
    word+= "<br>The number is " + q;
    q++;
}
while(q <20);
document.getElementById("count").innerHTML = word;