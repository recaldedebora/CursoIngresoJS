function mostrar()
{
let destino;

destino = document.getElementById("txtIdDestino").value;

switch (destino) { 
	case "Bariloche":
	case "Ushuaia":
		alert ("En este destino hace frío");
		break;

	case "Cataratas":
	case "Mar del plata":
		alert ("En este destino hace calor");
		break;
}
}//FIN DE LA FUNCIÓN