// -: THIS KEYWORD:-
 
let user = {
    username: "Abhishek",
    price :  199,
    welcomeMessage:  function(){
        console.log(`${this.username}, welcome to website`);   
    }
 }
 user.welcomeMessage()
 user.username="Akash"
 user.welcomeMessage()
 // chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()