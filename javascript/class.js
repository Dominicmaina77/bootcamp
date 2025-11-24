// class is a template for creating objects
// we use the class keyword to define a class
// a class can have properties and methods
// a class can be used to create multiple objects
// class syntax
// class ClassName {
//     constructor() {
//       // code to be executed
//     }
//     method1() {
//       // code to be executed
//     }
//     method2() {
//       // code to be executed
//     }
//   }
// class Car{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     getMake(){
//         return this.make;
//     }
//     getModel(){
//         return this.model;
//     }
//     getYear(){
//         return this.year;
//     }
// }

class Car {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.age
    }
}

const car1 = new Car("Mazda", 2022);
document.getElementById("demo1").innerHTML=car1.name + car1.age;

// class inheritance

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, grade) {
//       super(name, age);
//       this.grade = grade;
//     }
//   }
  
//   const student1 = new Student("John", 20, "A");
//   document.getElementById("demo2").innerHTML=student1.name+student1.age+student1.grade;