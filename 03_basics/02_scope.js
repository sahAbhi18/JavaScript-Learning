//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    let username =  "Abhishek"
    function two() {
        let website = "Youtube "
        //console.log(username);  // its return the value.
        
    }
    //console.log(website); //its return the error because out of block scope.
    two()
}
one()

if(true){
    let username = "Abhishek"
    if(username==="Abhishek"){
        let website = " Youtube"
        //console.log(username + website); // No error it is excuted and give the output
        
    }
    //console.log(website); //its return the error because out of block scope.
    
}
//console.log(username); // its return the error because out of block scope.

// +++++++++++++++++++++++++++INTERSTING POINT +++++++++++++++++++++++++++++++++++
//console.log(addone(6))  // it is excuted because declaration
function addone(num){
    return num+1
}
addTwo(7)  // its is not excuted because its hold the function in a variable.
let addTwo = function(num){
    console.log(num+2);
    
}

