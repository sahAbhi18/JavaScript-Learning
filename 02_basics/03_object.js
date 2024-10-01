let user = {
    firstName: "Abhishek",
    lastName: "Sah",
    fullName: "Abhishek Sah",
    email: "sahabhishekm@gmail.com",
    age: 22,
    location: "Kanpur"
}
//console.log(user.firstName);
console.log(user["fullName"]);
//console.log(user["email"]);
//console.log(user.fullName);
object.freeze(user.email)
user.email ="abhsihek@123"
log
