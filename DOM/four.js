function addLanguage(langName){
        let list=document.createElement('li')
        list.innerHTML=`${langName}`
        document.querySelector('.language').
        appendChild(list)
}
addLanguage('python')
addLanguage('typescript')
function addOptiLanguage(langName){
    let list = document.createElement('li')
    let addText = document.createTextNode(langName)
    list.appendChild(addText)
    document.querySelector('.language').
    appendChild(list)
}
addOptiLanguage('golang')

//Edit Element
let firstlang = document.querySelector('li:first-child')
firstlang.outerHTML='<li>Ruby</li>';
 let secondlang = document.querySelector('li:nth-child(2')
 let newli = document.createElement('li')
 newli.textContent= 'Dotnet'
 secondlang.replaceWith(newli)

 //remove element
let lastlang = document.querySelector('li:last-child')
console.log(lastlang);
 lastlang.remove()
