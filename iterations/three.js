//High Order Array
// -:For of Loop
let arr = [1,2,3,4,5]
for(let val of arr){
    //console.log(val);   
}
let greetings = "hello Wprld"
for (const greet of greetings) {
    console.log(`Each char is: ${greet}`);
       
}
// :- Maps:-

let map = new map();
map.set("IN","India")
map.set("AUS","Austrlia")
map.set("ENG","England")
map.set("NZ","New Zealand")
console.log(map);
for(let [key,value] of map){
    console.log(key,value)
}
let myObj = {
    name: "Ravi",
    age: 22
}
for(let val of myObj){
    console.log(val)
}
