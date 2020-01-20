const login_boton = window.document.querySelector('#button');
login_boton.addEventListener('click', print_data);
function print_data() 
{
    const op_1 = window.document.querySelector('#option');
    const op_2 = window.document.querySelector('#hidden');
    const textValue1 = op_1.value;
    const textValue2 = op_2.value;
    console.log(textValue1);
    console.log(textValue2);
    op_1.value = '';
    op_2.value = "";
    option.focus();
    /* revisando si se puede validar según las variables y no dejando el bug en la consola*/
    /* preguntar lo de git al profe */
    if (textValue1=='' || textValue2=='') {
        document.getElementById("error").innerHTML = "campos incompletos";
    } else {
        if (textValue1 =='ejemplo@gmail.com' && textValue2 =='123456') {
            document.getElementById("error").innerHTML = " ";
            document.location.assign("../layout/Layout.html");
        } else {
            document.getElementById("error").innerHTML = "Nombre de usuario y/o contraseña incorrectos";
        }
    }
}


   
