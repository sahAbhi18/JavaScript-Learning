let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleString());
//console.log(myDate.toTimeString());
//console.log(typeof myDate);
/* Interview Question=> Date is object */
//let myCreatedDate = new Date(2024,0,14)
//let myCreatedDate = new Date(2024,5,14)
//let myCreatedDate = new Date(2024,0,14,4,5,30)
let myCreatedDate = new Date("01-15-2024")
//console.log(myCreatedDate.toLocaleString());
let myDateStamp = new Date()
//console.log(Date.now());
let newDate = new Date()
//console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString("default",{
    weekday: "long"
})