let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button Text is', buttonText);
        if(buttonText=='X'){
            buttonText ='*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText =='AC'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText =='='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }  
         
       
})
}