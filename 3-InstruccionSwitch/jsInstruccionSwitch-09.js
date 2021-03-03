function mostrar()
{
let destino;
let estacion;
let aumento = 0;
let descuento = 0;
let precioFinal;
const PRECIO = 15000;

destino = document.getElementById("txtIdDestino").value;
estacion = document.getElementById("txtIdEstacion").value;

switch (estacion){
	case "Invierno":
		if (destino == "Bariloche"){
			aumento = 20;
		}
		else if (destino == "Mar del plata"){
			descuento = 20;
		}
		else {
			descuento = 10;
		}
		break;

	case "Verano":
		if (destino== "Bariloche"){
			descuento = 20;
		}
		else if (destino == "Mar del plata"){
			aumento = 20
		}
		else {
			descuento = 10;
		}

		break;

	case "Primavera":
	case "Otoño":
		if (destino == "Cordoba"){
			precioFinal = PRECIO
		}
		else {
			aumeto = 10		}

		break;
}
if (aumento != 0){
	precioFinal = PRECIO + PRECIO * aumento / 100;

}
else if (descuento != 0){
	precioFinal = PRECIO - PRECIO * descuento / 100;
}

alert ("Precio final " + precioFinal);

}//FIN DE LA FUNCIÓN