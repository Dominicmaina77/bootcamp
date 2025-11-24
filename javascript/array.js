// array is an object type data type for storing data collections
// array is used to store multiple values in a single variable
// these values ae called elements

// array is created by using square brackets []
// syntax
// let arrayName = [value1, value2, value3];
// let arrayName = new Array(value1, value2, value3);

let arr = [1, 2, 3, 4, 5];
document.getElementById("demo1").innerHTML = arr;

let arr1 = new Array(1, 2, 3, 4, 5);
document.getElementById("demo2").innerHTML = arr1;

let arr2 = [];
arr2[0] = "Toyota";
arr2[1] = "Honda";
arr2[2] = "Nissan";
document.getElementById("demo3").innerHTML = arr2;

// array methods

// length
// returns the length(size) of an array
let arr3 = ["BMW", "Audi", "Mercedes", "Porsche"];
document.getElementById("demo4").innerHTML = arr3.length;

// pop
// removes the last element from an array
let arr4 = ["BMW", "Audi", "Mercedes", "Porsche"];
arr4.pop();
document.getElementById("demo5").innerHTML = arr4;

// push 
// adds an element to the end of an array
let fruits = ["Apple", "Banana", "Passion"]
fruits.push("Orange")
document.getElementById("demo6").innerHTML = fruits;

// shift
// removes the first element from an array
let arr5 = ["BMW", "Audi", "Mercedes", "Porsche"];
arr5.shift();
document.getElementById("demo7").innerHTML = arr5;

// unshift
// adds an element to the beginning of an array
let arr6 = ["BMW", "Audi", "Mercedes", "Porsche"];
arr6.unshift("Toyota");
document.getElementById("demo8").innerHTML = arr6;


