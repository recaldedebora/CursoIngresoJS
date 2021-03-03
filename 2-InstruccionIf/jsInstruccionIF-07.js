function mostrar()
{
	//tomo la edad y estado civil 
let edad
let estado

edad = parseInt(document.getElementById("txtIdEdad").value);
estado = document.getElementById("estadoCivil").value;

if (edad <18 && estado!= "Soltero"){
	alert ("Es muy chico para no ser soltero");
}


}//FIN DE LA FUNCIÓN