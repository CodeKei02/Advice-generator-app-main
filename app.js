let adviceBtn = document.querySelector('.advice-button');
let adviceNum = document.querySelector('#advice-number');
let adviceText = document.querySelector('#advice-paragraph');
let adviceURL = "https://api.adviceslip.com/advice";
let advice = '';
let id = 0;
async function obtenerConsejo() {
    try{
        const response = await fetch(adviceURL);
        const { slip }  = await response.json();
        id = slip.id;
        advice = slip.advice;

        adviceNum.textContent = id;
        adviceText.textContent = advice;
    
    }catch(error){
        console.error(error);
    }
}
obtenerConsejo()

adviceBtn.addEventListener('click', function(){
    obtenerConsejo();
});
