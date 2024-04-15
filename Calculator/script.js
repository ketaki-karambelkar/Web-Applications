let string = "";
let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.value == '%'){
            string = string/100 ;
            input.value=string;
        }
        else if(e.target.value == '='){
            string = eval(string);
            input.value=string;
        }
        else if(e.target.value == 'CE'){
            string = "";
            input.value=string;
        }
        else if(e.target.value == 'C'){
            string = string.toString().slice(0,-1) ;
            input.value=string;
        }
        else{
            console.log(e.target);
            string = string + e.target.value;
            input.value=string;
        }
    })
})