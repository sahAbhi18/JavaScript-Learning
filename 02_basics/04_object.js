let tinderUser = new Object()      //singleton Object.
// let tinderUser = {}    // Non-singleton object.

tinderUser.id = "123abc"
tinderUser.email = "some@gmail.com"
tinderUser.name = "bca_abhi"
tinderUser.isLogged = false 
//console.log(tinderUser);
//console.log(tinderUser.name);
//nested Objects

let regularUser = {
    email: "unknown@gmail.com",
    Gender: "Male",
    fullName: {
        userName: "unkown_abhi",
        userFullName: {
            firstName: "Abhishek",
            lastName: "Sah",
        }
    }
}
//console.log(regularUser);
//console.log(regularUser.fullName.userFullName.lastName);
// How to combine two objects?

let obj1 = {
    firstName: "Rohan",
    lastName: "Kumar"
}
let obj2 = {
    email: "rohan@123@gmail.com",
    Gende: "Male"
}
//let obj3 = Object.assign({},obj1,obj2)
let obj3 = {...obj1,...obj2}
//console.log(obj3);



const user = [
{
    id: 1,
    email: "abhi@gmail.com",

},
  {
    id:2,
    email: "ritik@gmail.com",

},
 {
    id: 13,
    email: "ashu@gmail.com",

}];
//console.log(user[1].email);
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser));

let course = {
    courseName: "JavaScript",
    price: "999",
    courseInstractor: "Hitesh sir"
}
//console.log(course.courseInstractor);
const {courseInstractor: CI} = course 
console.log(CI);
