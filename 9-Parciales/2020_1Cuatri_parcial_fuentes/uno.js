//Enunciado:

//Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
//de cada una debo obtener los siguientes datos:
//el tipo (validar "barbijo" , "jabón" o "alcohol") ,
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//la Marca y el fabricante.
//Se debe Informar al usuario lo siguiente:
//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
//b) Del tipo con mas unidades, el promedio por compra
//c) Cuántas unidades de jabones hay en total
//

function mostrar()
{
//declaración de variables
let cantidad;
let fabricante; 
let marca; 
let mayorTipo;
let precio;
let tipo;
let cantidadAlcoholBarato;
let fabricanteAlcoholBarato;
let precioAlcoholBarato;
let promedioCompra;
let acumuladorBarbijos=0;
let acumuladorAlcohol=0;
let acumuladorJabon=0;
let contadorBarbijo=0;
let contadorAlcohol=0;
let contadorJabon=0;
let flagAlcohol=0;
let mensajeAlcohol = "No se compraron alcoholes.";
let mensajeB;
let mensajeJabon;

//tengoq ue generar un bucle que se repita 5 veces
//(tipo, precio, cantidad, marca, fabricante) valido según corresponde
//(Utilizo un For porque conozco de antemano la cantidad de repeticiones)


for (let i=0; i<5; i++){

	tipo = prompt('Ingrese tipo "barbijo" , "jabon" ó "alcohol": ');
	while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol" ){
		tipo = prompt('Error. Ingrese tipo "barbijo" , "jabon" ó "alcohol": ');
	}

	precio = parseFloat(prompt("Ingrese precio min 100 máx 300"));
	while(precio <100 || precio > 300 || isNaN(precio)){ 
		precio = parseFloat(prompt("Error. Ingrese precio min 100 máx 300"));
		
	} 

	cantidad = parseInt(prompt("Ingrese cantidad máx 1000"));
	while(!(cantidad >0 || cantidad <= 1000)){ 
		cantidad = parseInt(prompt("Error. Ingrese cantidad máx 1000"));
		
	}

	marca = prompt("Ingrese marca");
	fabricante	 = prompt("Ingrese fabricante");


	switch(tipo){
		case "alcohol":
			//A- Tengoq ue reconoce si el producto es alcohol y recordar el precio,
			//la cantidad y el fabricante del menor precio.
			acumuladorAlcohol += cantidad;
			contadorAlcohol++;

			if( flagAlcohol==0 || precioAlcoholBarato>precio){
			precioAlcoholBarato = precio;
			cantidadAlcoholBarato = cantidad;
			fabricanteAlcoholBarato = fabricante;
			flagAlcohol = 1;
			}
			
			break;


		case "barbijo":
			acumuladorBarbijos += cantidad;
			contadorBarbijo++;
			break;


		case "jabon":
			//C- tengo que acumular la cantidad de jabones.
			acumuladorJabon += cantidad;
			contadorJabon++;
			break;

	}
	
	//B- Tengo que acumular las cantidades de unidades de cada tipo y la cantidad
	//tipo de producto para sacar el promedio de la compra de acumulador mayor.

	if(acumuladorAlcohol > acumuladorBarbijos && acumuladorAlcohol > acumuladorJabon){
		mayorTipo = "Alcohol";
		promedioCompra = acumuladorAlcohol/ contadorAlcohol;
		
	}
	else if(acumuladorBarbijos>acumuladorJabon && acumuladorBarbijos >= acumuladorAlcohol){
		mayorTipo = "Barbijo";
		promedioCompra = acumuladorBarbijos / contadorBarbijo;
	}
	else {
		mayorTipo = "Jabon";
		promedioCompra = acumuladorJabon / contadorJabon;
	}

	if (flagAlcohol == 1){
		mensajeAlcohol = "fabricalte alcohol barato: " + fabricanteAlcoholBarato +
		"\nCantidad: " + cantidadAlcoholBarato + "\nPrecio: " + precioAlcoholBarato;
	}

	mensajeB = "B- Tipo con más unidades: " + mayorTipo + "Promedio: " + promedioCompra;

	mensajeJabon= ("C- Unidades de jabon: " + acumuladorJabon);

	alert(mensajeAlcohol + "\n" + mensajeB + "\n" + mensajeJabon);


} 

}

