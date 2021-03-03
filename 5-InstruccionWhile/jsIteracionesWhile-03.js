/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese clave");

	while ( clave != "utn760"){
		clave = prompt("Esa clave es invalida. Vuelva a ingresar la clave");
	}

	alert ("Clave valida.");
	
}//FIN DE LA FUNCIÓN
