let userEmail = {}
if(userEmail){
    //console.log("Got an email");
} else{
    //console.log("Don't have an email");
    
}

/* _________________________________Interview Question_______________________________________ */

/*
Q Tell the falsy values.
A  Falsy Values=>  false, 0, -0, BigInt 0n, "", null, undefined, NaN.
Q Tell the Truthy  values.
A. Truthy Values =>  "0", 'false', " ", [], {}, function(){}
*/
// -: How to check array?

if (userEmail.length===0){
    //console.log("array is empty");
    
}

// How to check object?

if (userEmail.Object === 0) {
    console.log();
    
    
}
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")