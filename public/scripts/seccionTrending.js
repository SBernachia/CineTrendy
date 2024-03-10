export function sliderTrending () {
    const btnPopulares = document.querySelector("#js-btn-populares");
    const btnEstrenos = document.querySelector("#js-btn-estrenos");
    const slider = document.querySelector(".slider");
    const sliderCards = document.querySelectorAll(".slider-card");

    const cantCards = sliderCards.length;

    let widthCard = 100 / cantCards;
    let operacion = 0;

    btnPopulares.addEventListener("click",moveSliderToRigth);
    btnEstrenos.addEventListener("click", moveSliderToLeft);

    function moveSliderToLeft () {
        if (operacion < 50) {
            operacion = operacion + widthCard;
            slider.style.transform = `translateX(-${operacion}%)`;

            btnEstrenos.classList.toggle("btn-trending__active");
            btnPopulares.classList.toggle("btn-trending__active");
        }
    }

    function moveSliderToRigth () {
        if (operacion > 0) {
            operacion = operacion - widthCard;
            slider.style.transform = `translateX(-${operacion}%)`; 

            btnEstrenos.classList.toggle("btn-trending__active");
            btnPopulares.classList.toggle("btn-trending__active");
        }
    } 
}



