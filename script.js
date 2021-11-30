const calc = document.getElementById("mainblock")
const display = document.getElementById("display")
const calcButtonResult = document.getElementById("calcresbtn")
var n1, n2, operation; 
var flag =true;
// console.log(calc, display, calcButtonResult)


function onNumberButtonClick(ev) {
   var element = ev.target
   //if (display.innerText<=9999999999999999) {
    
   if (element.classList.contains("nmbbtn")) {
    if( element.classList.contains("zap")) {
        display.innerText+=element.innerText;
        flag=false
    }

     else if( flag==false  ) {
         display.innerText+=element.innerText;
     }
     else if (display.innerText!=0) {
        display.innerText+=element.innerText;
     }
    
    else{


      display.innerText = element.innerText;
      
      
}
   }
   if (element.classList.contains("operation")) {
       operation=element.innerText;
       n1=display.innerText/1.0;
       display.innerText=null;
   }
       if (element.classList.contains("C")) {
        display.innerText=0; 
       }
    //    if (element.classList.contains("nmbbtn")) {
        // display.innerText += element.innerText;
    //    }
        if(element.classList.contains("plmin")) {
            display.innerText=-1*display.innerText;
        }
        if(element.classList.contains("kv")) {
            display.innerText=display.innerText * display.innerText;
        }
        if(element.classList.contains("obr")) {
            display.innerText=1/ display.innerText;
        }
        if(element.classList.contains("kor")) {
            display.innerText=Math.sqrt(display.innerText);
            
        }
        

     
     if (element==calcButtonResult) {
        n2=display.innerText / 1.0;
         if (operation== '-') {
            display.innerText= (n1/1.0) -(display.innerText / 1.0)
         }
         if (operation== '+') {
            display.innerText= n1+ n2
        }
        if (operation== '/') {
            display.innerText = n1/n2
            if(n2==0) {
                display.innerText= "ERROR"
    if (element.classList.contains("C")) {
        display.innerText=0; 
       }
            }
        }
        if (operation== '*') {
            display.innerText=n1*n2
        }
       
        
   }
//}
// else{
//     display.innerText= "ERROR"
//     if (element.classList.contains("C")) {
//         display.innerText=0; 
//        }
       
// }
}

calc.addEventListener("click", onNumberButtonClick)