const generatePin = ()=>{
const pin = Math.round(Math.random()*10000).toString();
if(pin.length == 4){
    return pin;
}
else{
    return generatePin();
} 
};
document.getElementById('pin-generator').addEventListener('click',()=>{
    const pin = generatePin();
    document.getElementById('pin-display').value = pin;
});
document.getElementById('keypad').addEventListener('click',(event)=>{
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number=="C"){
            calcInput.value='';
        }
    }
   else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number
    calcInput.value = newNumber;
   }
});
document.getElementById('submit-button').addEventListener('click',()=>{
    const calcInput = document.getElementById('typed-numbers');
    const pinDisplay = document.getElementById('pin-display');
    const matched = document.getElementById('matched');
    const dontMatched= document.getElementById('dont-matched');
    if(calcInput.value == pinDisplay.value){
        matched.style.display='block';
        dontMatched.style.display='none';
    }
    else{
        matched.style.display='none';
        dontMatched.style.display='block';
    }
    calcInput.value='';
});