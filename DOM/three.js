// create a elemnet 
let div = document.createElement('div')
console.log(div);

div.className="main";
div.id= Math.round(Math.random()*10+1)
div.setAttribute=("title","chai aur code")
div.style.backgroundColor="skyblue"
div.padding='12px'
let addtext = document.createTextNode('chai aur code')
div.appendChild(addtext);
document.body.appendChild(div)


