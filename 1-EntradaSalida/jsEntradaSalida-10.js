/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un importeFinal del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento ()
{
	let importe;
	let descuento;
	let importeFinal;

	importe = parseFloat(document.getElementById("txtIdImporte").value);

	descuento = importe * 25 / 100;

	importeFinal = importe - descuento;

	document.getElementById("txtIdResultado").value = importeFinal;


	
}
