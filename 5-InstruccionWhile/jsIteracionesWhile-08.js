/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
let numero;
let acumPos = 0;
let acumNeg = 1; //empiezo en 1 porque si multiplico un n°por cero da cero
let seguir;

do{

numero = parseInt(prompt("Ingrese un número"));
while(isNaN(numero)){
	numero = parseInt(prompt("Eso no es un número"));
}
if (numero >=0){
	acumPos = acumPos + numero;
}
else {
	acumNeg = acumNeg * numero;
}
	seguir = prompt("Quiere continuar?");
}while(seguir =='s');
document.getElementById("txtIdSuma").value = acumPos;
document.getElementById("txtIdProducto").value = acumNeg;
}//FIN DE LA FUNCIÓN
//estrategia de resolucion
//1- declarar variables (numero, acumulador de positivos y acumulador de negativos, variable de control)
//2- generar un bucle
//-----aca empioza el bucle---
//3 -le pido un numero
/// 4 - valido eque sea un numero
// acumular positivos y negativos+
//