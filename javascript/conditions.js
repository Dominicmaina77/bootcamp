// conditional statements allow us to perform different actions based on different conditions

// if, else if, else, ternary(?:), switch

// syntax for if statement
// if (condition) {
//     // code to be executed if the condition is true
// }

if (5 > 2) {
  document.getElementById("if").innerHTML = "5 is greater than 2";
}

// synatx for if else statement
// if (condition) {
//     // code to be executed if the condition is true
// } else {
//     // code to be executed if the condition is false
// }

if (5 > 2) {
  document.getElementById("if").innerHTML = "5 is greater than 2";
} else {
  document.getElementById("else").innerHTML = "5 is not greater than 2";
}

const hour = new Date().getHours();
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("else2").innerHTML = greeting;

// if else if statement syntax
// if (condition) {
//     // code to be executed if the condition is true
// } else if (condition) {
//     // code to be executed if the first condition is false and the second condition is true
// } else {
//     // code to be executed if both conditions are false
// }

const time = new Date().getHours();
let message;

if (time < 10) {
  message = "Good morning";
} else if (time < 20) {
  message = "Good day";
} else {
  message = "Good evening";
}
document.getElementById("elseif").innerHTML = message;

// ternary operator syntax
// condition ? expression1 : expression2;
// it is a shorthand of if else statement
let result = 5 > 2 ? "5 is greater than 2" : "5 is not greater than 2";
document.getElementById("ternary").innerHTML = result;

// switch statement syntax
// switch (expression) {
//     case value1:
//         // code to be executed if the expression is equal to value1
//         break;
//     case value2:
//         // code to be executed if the expression is equal to value2
//         break;
//     default:
//         // code to be executed if the expression is not equal to any of the values above
// }
// 

let day;
let date = new Date().getDay()
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
document.getElementById("switch").innerHTML = "Today is " + day;
