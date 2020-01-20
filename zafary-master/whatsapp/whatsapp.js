const f_1 = document.querySelector('#f_1');
const f_2 = document.querySelector('#f_2');
const f_3 = document.querySelector('#f_3');
const f_4  = document.querySelector('#f_4');
const f_5  = document.querySelector('#f_5');

f_1.addEventListener('click', primero);
f_2.addEventListener('click', segundo);
f_3.addEventListener('click', tercero);
f_4.addEventListener('click', cuarto);
f_5.addEventListener('click', quinto);

function primero() {
    document.getElementById("nombre").innerHTML = "Juan perez perez";
}
function segundo() {
    document.getElementById("nombre").innerHTML = "Perico casanova";
}

function tercero() {
    document.getElementById("nombre").innerHTML = "Miranda undurraga ";
}
function cuarto() {
    document.getElementById("nombre").innerHTML = "Paola asenjo";
}
function quinto() {
    document.getElementById("nombre").innerHTML = "miriam hernandez";
}
