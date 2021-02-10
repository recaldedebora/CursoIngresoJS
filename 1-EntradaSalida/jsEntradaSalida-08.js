/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//"txtIdNumeroDividendo" txtIdNumeroDivisor"

	let Dividendo;
	let Divisor;
	let resultado;

	Dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	Divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resultado = Dividendo % Divisor;

	alert ("El resto es " + resultado);
}
