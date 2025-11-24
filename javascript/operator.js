// 1. arithmetic operator
// addition
let x = 100 + 50;
document.getElementById("demo1").innerHTML = x;

// subtraction
let y = 100 - 50;
document.getElementById("demo2").innerHTML = y;

// multiplication
let z = 100 * 50;
document.getElementById("demo3").innerHTML = z;

// division
let a = 100 / 50;
document.getElementById("demo4").innerHTML = a;

// modulus
let b = 100 % 50;
document.getElementById("demo5").innerHTML = b;

// increment
let i = 100;
i++;
document.getElementById("demo11").innerHTML = i;

// decrement
let j = 100;
j--;
document.getElementById("demo12").innerHTML = j;



// 2.assignment operators
// assign value to js variables
let c = 100;
document.getElementById("demo6").innerHTML = c;

// addition assignment
let d = 100;
d += 50;
document.getElementById("demo7").innerHTML = d;

// subtraction assignment
let e = 100;
e -= 50;
document.getElementById("demo8").innerHTML = e;

// multiplication assignment
let f = 100;
f *= 50;
document.getElementById("demo9").innerHTML = f;

// division assignment
let g = 100;
g /= 50;
document.getElementById("demo10").innerHTML = g;


// 3.comparison operators
// equal to
let H = 100;
let I = 100;
document.getElementById("demo13").innerHTML = H == I;

// not equal to
let J = 100;
let K = 200;
document.getElementById("demo14").innerHTML = J != K;

// greater than
let L = 100;
let M = 50;
document.getElementById("demo15").innerHTML = L > M;

// less than
let N = 100;
let O = 50;
document.getElementById("demo16").innerHTML = N < O;

// greater than or equal to
let P = 100;
let Q = 50;
document.getElementById("demo17").innerHTML = P >= Q;

// less than or equal to
let R = 100;
let S = 50;
document.getElementById("demo18").innerHTML = R <= S;

// equal value and equal type
let T = 100;  //number
let U = '100';  //string
document.getElementById("demo19").innerHTML = T === U;  //false

// not equal value or not equal type
let V = 100;
let W = "100";
document.getElementById("demo20").innerHTML = V !== W;

