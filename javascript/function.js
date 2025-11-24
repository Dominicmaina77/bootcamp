// functions are reusable blocks of code to perform a specific task
// functions are defined using the function keyword followed by a name and a set of parentheses
// functions can have parameters and return values
// function syntax
// function functionName(parameter1, parameter2, parameter3) {
//     // code to be executed
//     return returnValue;
// }
// function calling


// function invocation()
function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
  let value = toCelsius(100);
  document.getElementById("demo1").innerHTML = value; 
  
  
//   function declaration
let x = myFunction(4,3);
document.getElementById("demo2").innerHTML = x;

function myFunction(a,b){
    return a *b;
}


// funtion expression
let y = function(a,b){
    return a *b;
}
document.getElementById("demo3").innerHTML = y(10,30);


// arrow function

// syntax
// let functionName = (parameter1, parameter2, parameter3) => {
//     // code to be executed
//     return returnValue;
// }
let z = (a,b) => a * b;
document.getElementById("demo4").innerHTML = z(10,30);

