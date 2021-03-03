function mostrar()
{
	//tomo la edad  
let edad;

edad = parseInt(document.getElementById("txtIdEdad").value);

if (edad < 13) {
	alert ("Es niño");
}
else if (edad >=13 && edad <18){
	alert ("Es asdolescente");
}
else {
	alert ("Es mayor de edad");
}
}//FIN DE LA FUNCIÓN