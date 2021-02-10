function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if ( edad >= 18) {
		alert ("Es mayor de edad");
	}

	else{
		alert ("Es menor de edad");
	}
	alert ("Fin de la función");

}//FIN DE LA FUNCIÓN