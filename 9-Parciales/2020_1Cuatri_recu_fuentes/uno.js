
//Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
//de cada una debo obtener los siguientes datos:
//el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//la Marca y el fabricante.
//Se debe Informar al usuario lo siguiente:
//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
//c) Cuántas unidades de Barbijos se compraron en total



function mostrar()
{


let cantidad;
let fabricante; 
let marca; 
let mayorTipo;
let precio;
let tipo;
let cantidadJabonCaro;
let fabricanteJabonCaro;
let precioJabonCaro;
let promedioCompra;
let acumuladorBarbijos=0;
let acumuladorAlcohol=0;
let acumuladorJabon=0;
let contadorBarbijo=0;
let contadorAlcohol=0;
let contadorJabon=0;
let flagJabon =0;
let mensajeBarbijo;
let mensajeB;
let mensajeJabon = "No se compraron jabones.";

//tengoq ue generar un bucle que se repita 5 veces
//(tipo, precio, cantidad, marca, fabricante) valido según corresponde
//(Utilizo un For porque conozco de antemano la cantidad de repeticiones)
	for (let i=0; i<5; i++){

		tipo = prompt('Ingrese tipo "barbijo" , "jabon" ó "alcohol": ');
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol" ){
			tipo = prompt('Error. Ingrese tipo "barbijo" , "jabon" ó "alcohol": ');
		}
	
		precio = parseFloat(prompt("Ingrese precio min 100 máx 300").value);
		while(precio <100 || precio > 300 || isNaN(precio)){ 
			precio = parseFloat(prompt("Error. Ingrese precio min 100 máx 300").value);
			
		} 
	
		cantidad = parseInt(prompt("Ingrese cantidad máx 1000").value);
		while(!(cantidad >0 || cantidad <= 1000)){ 
			cantidad = parseInt(prompt("Error. Ingrese cantidad máx 1000").value);
			
		}
	
		marca = prompt("Ingrese marca");
		fabricante	 = prompt("Ingrese fabricante");
	
	
		switch(tipo){
			case "alcohol":
				acumuladorAlcohol += cantidad;
				contadorAlcohol++;
				
				break;
				
				
				case "barbijo":
					//C- tengo que acumular la cantidad de Barbijo.
					acumuladorBarbijos += cantidad;
					contadorBarbijo++;
					break;
					
					
					case "jabon":
						//A- Tengoq ue reconoce si el producto es jabon y recordar el precio,
						//la cantidad y el fabricante del mayor precio.
				acumuladorJabon += cantidad;
				contadorJabon++;
				
				if( flagAlcohol==0 || precioJabonCaro <precio){
					precioJabonCaro = precio;
					cantidadJabonCaro = cantidad;
					fabricanteJabonCaro = fabricante;
					flagJabon = 1;
				}
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
	
		if (flagJabon == 1){
			mensajeJabon = "fabricalte jabón Caro: " + fabricanteJabonCaro +
			"\nCantidad: " + cantidadJabonCaro + "\nPrecio: " + precioJabonCaro;
		}
	
		mensajeB = "B- Tipo con más unidades: " + mayorTipo + "Promedio: " + promedioCompra;
	
		mensajeBarbijo = ("C- Unidades de Barbijo: " + acumuladorBarbijos);
	
		alert(mensajeJabon + "\n" + mensajeB + "\n" + mensajeBarbijo);
	
	
	} 
}
