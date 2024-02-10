const btnLeft = document.querySelector(".js-btn-left");
const btnRigth = document.querySelector(".js-btn-rigth");
const slider = document.querySelector(".js-div-carrusel");
const sliderCards = document.querySelectorAll(".js-slider-card");


const cantCards = sliderCards.length

let posicion = 0;
let widthCard = 100 / cantCards;
let operacion = 0;

btnLeft.addEventListener("click",moveSliderToLeft);
btnRigth.addEventListener("click", moveSliderToRigth);

function moveSliderToLeft () {
    if (operacion < 50) {
        operacion = operacion + widthCard;
        slider.style.transform = `translateX(-${operacion}%)`;
    }
    
}

function moveSliderToRigth () {
    if (operacion > 0) {
        operacion = operacion - widthCard;
        slider.style.transform = `translateX(-${operacion}%)`; 
    }
}