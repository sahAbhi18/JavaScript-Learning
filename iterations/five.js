let coding = ["js","ruby","java","python","nodejs"]
coding.forEach((value,index,arr)=>{
    //console.log(value,index,arr);   
})
function printMe(item){
    //console.log(item);   
}
//coding.forEach(printMe)

let myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"

    },
    {        languageName: "java",
        languageFileName: "java"},
    {        languageName: "python",
        languageFileName: "py"}
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})