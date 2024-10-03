// IIFE => Immediatly invoked function expression.
(function one(){
    //named iife 
    console.log(`DB Connected`);
    
})();
((name)=>{
    console.log(`DB coonected by ${name}`);
    
})('Abhishek')
