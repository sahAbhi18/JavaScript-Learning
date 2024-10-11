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