// an object is a variable that can hold many variables
// an object is a collection of key-value pairs key(property) and has a value

// creating an object
// let objectName = {key1: value1, key2: value2, key3: value3};
let person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
  };
  document.getElementById("demo1").innerHTML=person.name + person.age+person.city+person.country;

//   create an empty object
const car={};

// add properties
car.make="Toyota";
car.model="Camry";
car.year=2022;
document.getElementById("demo2").innerHTML=car.make+car.model+car.year;

// using the new keyword
const car1 = new Object({
    make:"Mazda",
    model:"CX-5",
    year:2022
});
document.getElementById("demo3").innerHTML=car1.model+car1.make+car1.year;

// object constructor function
// used when you want to have many objects of the same type
// syntax
// function objectName(key1, key2, key3) {
//     this.key1 = value1;
//     this.key2 = value2;
//     this.key3 = value3;
//   }
function Person(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
    this.race="American"
}

const person1 = new Person("John", 30, "New York", "USA");
document.getElementById("demo4").innerHTML=person1.name+person1.age+person1.city+person1.country+person1.race;


// object destructure
// destructure is used to extract values from an object(unpacking)
// create an object
const person2 = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
  };
// destructure the object
const {name, country, city} = person2;
document.getElementById("demo5").innerHTML=name+city+country;


