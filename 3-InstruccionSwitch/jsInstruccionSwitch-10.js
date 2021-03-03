function mostrar()
{
let estacion;
let destino;

estacion = document.getElementById("txtIdEstacion").value;
destino = document.getElementById("txtIdDestino").value;

if (estacion == "Invierno" && destino == "Bariloche"){
	alert ("se viaja");
}
else if (estacion == "Invierno" && destino != "Bariloche"){
	alert ("No se viaja");
}
else if (estacion == "Verano" && (destino == "Mar del plata" || destino == "Cataratas")){
	alert ("Se viaja");
}
else if (estacion == "Primavera" && destino == "Bariloche"){
	alert ("Se viaja");
}
else if (estacion == "Otoño"){
	alert ("Se viaja");
}


}//FIN DE LA FUNCIÓN