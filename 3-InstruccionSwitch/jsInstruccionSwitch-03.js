function mostrar()
{
	//tomo el mes
	let mes

	mes = document.getElementById("txtIdMes").value;
	
	if (mes == "Febrero"){
		alert ("Este mes no tiene más de 29 días")
	}
	else 
	alert ( "Este mes tiene 30 o más días");

}//FIN DE LA FUNCIÓN