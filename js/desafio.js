var spanHora = document.querySelector ("#resposta");

var inputHoras = document.querySelector ("#valor-hora");

var inputHorasProjeto = document.querySelector ("#horas-projeto");


function calcular() {

    var qtdHoras = inputHoras.valueAsNumber * inputHorasProjeto.valueAsNumber;

    spanHora.textContent = "R$ " + qtdHoras.toFixed(2);


}










