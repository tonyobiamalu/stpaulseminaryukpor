alert("Welcome to St. Paul's Seminary, Ukpor");

console.log("Hello welcome to St. Paul's Seminary, Ukpor")

// variable 
// Variable is what holds our datas in our website or applications
// var, let and const

var name = "Anthony";
alert(name);


let password = 123456;
console.log(password);

const username = "Mandela"
console.log(username);

// Task
// using var, let and const
// display on ur console, your real name,
// email, phone number, state  
// and country.

let myName = "Anthony"
console.log(myName);

let myEmail = "tonyobiamalu@gmail.com";
console.log(myEmail);

let myPhoneNumber = "08167957361"
console.log(myPhoneNumber);

let myState = "Lagos"
console.log(myState);

let myCountry = "Nigeria"
console.log(myCountry);



// Data types
// two types of data types in javascript
// 1. Primitive data types
// 2. Non-primitive data types


// Primitives data types are the basic data types in javascript. 
// They are immutable and are passed by value. They always have one value
//  They include: 

let name1 = "Tochi"; // string
let age = 20; // number
let height = 5.9; //float
let width = 65; // integer
let isMarried = false; // boolean
let address = null; // null
let phoneNumber; // undefined

// Non-primitive data types are the complex data types in javascript.
// They are mutable and are passed by reference. 
// They can have multiple values.
// They are:

const userNames = ["Tochi", "Martins", "John", "Doe"];  // array

const userDetails = {
    name: "Tochi",
    age: 20,
    height: 5.9,
    width: 65,
    isMarried: false
}; // object

const students = [
    { name: "Tochi", age: 20, class: "JS101", gender: "Male", hobbies: ["reading", "writing", "coding"] },
    { name: "Martins", age: 21, class: "JS102", gender: "Male", hobbies: ["reading", "writing", "coding"] },
    { name: "John", age: 22, class: "JS103", gender: "Male", hobbies: ["reading", "writing", "coding"] },
    { name: "Doe", age: 23, class: "JS104", gender: "Male", hobbies: ["reading", "writing", "coding"] }
]

const Teachers = [
    { name: "Abigail", age: 30, gender: "Female", hobbies: ["reading", "writing", "coding"] },
    { name: "Celestine", age: 25, gender: "Male", hobbies: ["reading", "writing", "swimming"] },
    { name: "Beatrice", age: 35, gender: "Female", hobbies: ["reading", "writing", "drawing"] },
    { name: "Chioma", age: 28, gender: "Female", hobbies: ["reading", "writing", "StoryTelling"] }
]
//functions
// A function is a block of code that perfoirms a specific task.
// it can be called multiple times in a progrom.
// Functions can take parameters and return values.

function addNumber (num1, num2, num3) {
    return num1 + num2 + num3;
}

let addresult = addNumber(5, 10, 15);
console.log(addresult);

function multiplyNumber (num1, num2) {
    return num1 * num2;
}

let math = multiplyNumber(5, 10);
console.log(math);

function greetUser (name) {
    return `Hello, ${name}, welcome to SPSU website`;
}

let greeting = greetUser("Anthony");
console.log(greeting);

function greetStudent (name, clas) {
    return `Hello, ${name}, welcome. You are in ${clas} class`;
}

let Welcome = greetStudent("Anthony", "JS 2A");
console.log(Welcome);