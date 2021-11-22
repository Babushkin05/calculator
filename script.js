const calc = document.getElementById("mainblock")
const display = document.getElementById("display")
const calcButtonResult = document.getElementById("calcresbtn")
var n1, n2, operation
// console.log(calc, display, calcButtonResult)


function onNumberButtonClick(ev) {
   var element = ev.target
   if (element.classList.contains("nmbbtn")) {
      display.innerText += element.innerText;
   }
   if (element.classList.contains("operation")) {
       operation=element.innerText;
       n1=display.innerText/1;
       display.innerText=null;
   }
       
    //    if (element.classList.contains("nmbbtn")) {
        // display.innerText += element.innerText;
    //    }
        

     
     if (element==calcButtonResult) {
        n2=display.innerText / 1;
         if (operation== '-') {
            display.innerText= n1 -(display.innerText / 1)
         }
         if (operation== '+') {
            display.innerText= n1+ n2
        }
        if (operation== '/') {
            display.innerText = n1/n2
        }
        if (operation== '*') {
            display.innerText=n1*n2
        
     
    }
   }
}

calc.addEventListener("click", onNumberButtonClick)