function mostrar()
{
	let mes

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Febrero":
		alert ("Este mes tiene 28 días");
		break;

		case "Enero":	
		case "Abril":	
		case "Junio":	
		case "Julio":	
		case "Agosto":	
		case "Octubre":	
		case "Diciembre":	
		alert ("Este mes tiene 31 días");
		break;

		case "Marzo":
		case "Mayo":
		case "Septiembre":
		case "Noviembre":
		alert ("Este mes tiene 30 días");
		break;
	}

}//FIN DE LA FUNCIÓN