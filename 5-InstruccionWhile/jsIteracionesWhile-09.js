/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numero;
	let maximo;
	let minimo;
	let seguir;
	let flag = 0 ;
	do{
		numero = parseInt(prompt("Ingrese un número"));
		
		while(isNaN(numero)){
			numero = parseInt(prompt("Ese no es un número"));
		}
		if ( flag == 0){
			maximo = numero;
			minimo = numero;
			//hago lo que tengo que hacer si es el primero
			flag = 1;
		}
		else{
			//hago lo que tengo que hacer si no es el primer número
			if (numero > maximo){
				maximo = numero;
			}
			//uso else if porque no necesariamente va a ser menor/minimo
			//no hago dos if porque si la primera es verdadera 
			//no hace falta preguntar la segunda
			else if(numero < minimo){
				minimo = numero;
			}
		}

		seguir = prompt("Quiere seguir?");
	}while(seguir =='s');
document.getElementById("txtIdMaximo").value = maximo;
document.getElementById("txtIdMinimo").value = minimo;

}//FIN DE LA FUNCIÓN
//estategia resolución
//1- declarar variable
//2- generar un bucle del tipo mientras que el usuario quiera
//------aca empieza el bucle---
//3- pido un numero
//4- valido el numero
//5-identifica si estoy en la primera interacción o en las siguientes
//5.1- si estoy en la primera interacción ese número va a ser mi max y mi min
///5.2.1-me fijo si el número es el nuevo máximo (de ser así lo actualizo)
///5.2.2-me fijo si el número es el nuevo minimo (de ser así lo actualizo)
//6- pregunto si quiere ingresar otro número
//----------------termina el bucle----
//7- informa max y min