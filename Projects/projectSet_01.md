# Project related to DOM
## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)
# Solution code
## Project 1
```javascript
 let buttons = document.querySelectorAll('.button')
 let body = document.querySelector('body')
 buttons.forEach((button)=>{
   console.log(button)
   button.addEventListener('click',function(e){
     console.log(e)
     console.log(e.target)
     switch(e.target.id){
       case 'grey':
       body.style.backgroundColor= 'grey'
       break;
       case 'white':
        body.style.backgroundColor= 'white'
        break;
        case 'blue':
          body.style.backgroundColor= 'blue'
          break;
          case 'yellow':
            body.style.backgroundColor= 'yellow'
            default:
              console.log('No matching colour')
     }
   })
 })

```

## Project 2 
# Soloution
```javascript 
let form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
  let height = parseInt(document.querySelector('#height').value)
  let weight = parseInt(document.querySelector('#weight').value)
  
  let results  = document.querySelector('#results')
  if (height==='' || height<=0 || isNaN(height)){
    results.innerHTML = `${height}`
  } else if (weight==='' || weight<=0 || isNaN(weight)){
    results.innerHTML = `${weight}`
  } else{
    let bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span`
    let message = `<h3>Your bmi is: ${bmi}</h3>`
    if (bmi<18.6){
      message += `<span>You are underweight</span`
    }else if (bmi >= 18.5 && bmi < 24.9) {
      message += `<p>You are normal weight.</p>`;
    } else if(bmi >= 25 && bmi < 29.9){
      message += `<p>You are overweight.<p>`
    } else{
      message += `<p>You are in the obese range.</p>`;
    }
    results.innerHTML= `${message}`

  }
})

```