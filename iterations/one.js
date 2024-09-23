//for loop
/*
for (let i = 0; i <= 10; i++) {
    if(i==6){
        console.log("6 is a best number");
        
    }
    console.log(i);
}
*/
/*
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j =1 ; j <= 10; j++){
        console.log(i + "*" + j + "=" + i*j);
    }  
}
*/
/*
let myArray = ["Abhishek","Ashutosh","Ujjawal","Anuj","Aysuhman"]
for (let i= 0; i < myArray.length; i++) {
    let element = myArray[i]
    console.log(element);
}
   */
  
for (let i = 1; i < 22; i++) {
    if(i==7){
        console.log("7 is Detected");
        continue; 
    }
    console.log(`Value is: ${i}`); 
}


//Break Keyword=> Break keyword use to leave the loop and code is completed particular that time.
//Continue Keyword=> Continue Keyword use to code is completely going on if you find any number and string 
// then that detected the number/string then code is continue where is loop ending.

