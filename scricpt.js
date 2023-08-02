let input = document.getElementById('inputbox');
let bottons = document.querySelectorAll('button')
let str='';
let string ='';
let arr=Array.from(bottons)
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value=string
        }
        else if(e.target.innerHTML == '%'){
            string=eval(string)*100
            input.value=string;
        }
        else if(e.target.innerHTML == '×'){
            str+='×';
            string +='*';
            input.value +='×';
        }
        else if(e.target.innerHTML == '÷'){
            str+= '÷';
            string +='/';
            input.value +='÷';
        }
        else if(e.target.innerHTML == 'AC'){
            string="" 
            str=''
            input.value=str;
        }
        else if(e.target.innerHTML =='DEL'){
            string=string.substring(0, string.length-1);
            str=str.substring(0, str.length-1);
            input.value=str;
        }
        else{
            string+=e.target.innerHTML;
            str+=e.target.innerHTML;
            input.value=str;
        }
     })
})