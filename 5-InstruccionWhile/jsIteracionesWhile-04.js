/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
let numero;

numero = parseInt(prompt("Ingrese un número del 0 al 9"));


while(!(numero >=0 && numero <= 9)) {
// 'o while(numero <0 || numero >9 || inNaN(numero)) 

	numero = parseInt(prompt("Numero no es valido. Reingrese número"));

	}
 alert ("Numero valido")

}//FIN DE LA FUNCIÓN