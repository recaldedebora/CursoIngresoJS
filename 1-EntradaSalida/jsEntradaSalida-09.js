/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el nuevo sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let sueldo;
let aumento;
let nuevosueldo 

//para calcular un nuevo sueldo le debería sumar al sueldo el aumento
//el calculo de porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y lo divido por 100 

sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
aumento = sueldo * 10 / 100; 

nuevosueldo = sueldo + aumento;

document.getElementById("txtIdResultado").value = nuevosueldo;

}
