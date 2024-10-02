function myName(){
    //console.log("A");
    //console.log("b");
    //console.log("h");
    //console.log("i");
    //console.log("s");
    //console.log("h");
    //console.log("e");
    //console.log("k"); 
}

myName()
/* [IMPORTANT POINT] 
Parameter() => when you denfine in the () its called parameter.
Arguments() => when you excute in the () its called arguments.
*/

function addTwoNumber(x,y){
    //console.log(x+y);
    return x+y;
}
const result = addTwoNumber(7,5)
//console.log(result);
function loginUserMessage(username){
    if(!username ){
        console.log(`please enter the username`);
        
    }
    return `${username} just logged in`
}
const loggedIn = loginUserMessage("Abhishek")
//console.log(loggedIn);

function shoppingCart (...num1){
    return num1;
}
//console.log(shoppingCart(200,300,500,700));

let user = {
    username: "Abhi_123",
    Gender: "Male"
}
 function handleObject (anyobject){
    return `user is ${anyobject.username} and gender is  ${anyobject.Gender}`
 }
 //console.log(handleObject(user));
 
 let myArr = [100,200,300,400,500]
 function handlearray (getArray){
    return getArray
 }
 console.log(handlearray(myArr));
 