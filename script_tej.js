let input = document.getElementById('inputbox');
let bottons = document.querySelectorAll('button');
let str='';
let exp ='';
let ans='';
let arr=Array.from(bottons)
const arr_op=['+','-','×','÷','AC','DEL','%','.'];
const arr_func=['Add()','Sub()','Mul()','Div()','AC()','Del()','Per()','Period()']

function Add(){
    exp+=ans+'+';
    str+=ans+'+';
}

function Sub(){
    exp+=ans+'-';
    str+=ans+'-';
}
function Mul(){
    exp+=ans+'*';
    str+=ans+'×';
}
function Div(){
    exp+=ans+'/';
    str+=ans+'÷';
}

function Num(n){
    n=n.toString()
    exp+=n;
    str+=n;
}

function Del(){
    exp=exp.substring(0, exp.length-1);
    str=str.substring(0, str.length-1);
}

function AC(){
    exp='';
    str='';
}

// function Per(){
//     exp=ans+exp+'/100';
//     str=eval(exp);
// }

function RemoveDuplicates(c){
    let newstr = '';
    let count = 0;
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] == c){
            count+=1;
            if(count<1){
                newstr+=c;
            }
        }
        else{
            newstr+=s[i];
        }
        
    }
    console.log(newstr)
    return newstr;
}

function Period(){
    exp+=ans+'.';
    str+=ans+'.';
    // exp=RemoveDuplicates('.');
    // str=RemoveDuplicates('.');
}

function EqualTo(){
    result=eval(exp);
    AC();
    return result
}

arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        for (let i = 0; i < arr_op.length; i++) {
            if(e.target.innerHTML == arr_op[i]){
                eval(arr_func[i]);
                input.value=str;
            }
        }
        for (let i = 0; i < 10 ; i++){
            if(e.target.innerHTML == i) {
                Num(i);
                input.value=str;
                ans=''
            }
        }
        if(e.target.innerHTML == '=') {
            ans = EqualTo();
            input.value=ans;
            str=''
            exp=''
        }
     })
})
