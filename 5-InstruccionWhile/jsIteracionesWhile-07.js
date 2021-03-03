/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let seguir;
	let suma =0;
	let contador=0;
	let promedio;

	
	do{

		numero = parseInt(prompt("Ingrese un número"));

		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es un número"));
		}

		suma = suma + numero;
		
		contador ++;

		seguir = prompt("Desea seguir?");
	}while (seguir == "s");

	promedio = suma / contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;


} 

//FIN DE LA FUNCIÓN