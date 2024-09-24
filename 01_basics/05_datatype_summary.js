/*
-> How to keep datatype in memory and how to access?
Ans=> In memory two types of Data Types.
1 Primitive DataType 
    1. String
    2. Number
    3. Boolean 
    4. BigInt
    5. null
    6. undefined
    7. Symbol
 2. Non-Primitive DataType(Refrenece Type )
    1. Array
    2. Objects
    3. Function 

Q.-> JavaScript is a static and  Dynamic language?
A. -> JavaScript is a dynamically typed language.
This means that the type of a variable is checked at runtime, not at compile time. 
You don't need to explicitly declare the type of a variable when you create it, 
and the type can change during the execution of the program.
*/


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    //console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

console.log(typeof myFunction  );
