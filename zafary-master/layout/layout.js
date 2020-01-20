const home = document.querySelector('#Home');
const whatsapp = document.querySelector('#whatsapp');
const zpotify = document.querySelector('#Zpotify');

home.addEventListener('click', cargar_home);
whatsapp.addEventListener('click', cargar_Whatsapp);
zpotify.addEventListener('click', cargar_Zpotify);

function cargar_home() {
    const dinamico = document.querySelector('#contenido');
    dinamico.setAttribute('src', '../home/Home.html');
    document.getElementById("nombre").innerHTML = "Home ";
}
function cargar_Whatsapp() {
    const dinamico = document.querySelector('#contenido');
    dinamico.setAttribute('src', '../whatzapp/Whatsapp.html');
    document.getElementById("nombre").innerHTML = "Whatzapp ";
}
function cargar_Zpotify() {
    const dinamico = document.querySelector('#contenido');
    dinamico.setAttribute('src', '../zpotify/zpotify.html');
    document.getElementById("nombre").innerHTML = "Zpotify";
}