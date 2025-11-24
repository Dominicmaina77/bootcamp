// strings are for storing texts
// strings are written within quotes double or single "" / ''

let value = "Moha";
document.getElementById("demo1").innerHTML = value;

let title = 'Moha';
document.getElementById("demo2").innerHTML = title;


let Name = "It's alright";
document.getElementById("demo3").innerHTML = Name;

let text ='He is called "John"';
document.getElementById("demo4").innerHTML = text;

// template strings/literals  
// interpolation ${...}
let uname = "John";
let age = 30;
let text1 = `His name is ${uname} and he is ${age} years old`;
document.getElementById("demo5").innerHTML = text1;

// use double and single quotes inside a string
let text2 = `He's called "Jerry"`;
document.getElementById("demo6").innerHTML = text2;
