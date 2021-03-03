function mostrar()
{
	let numero;
	let suma;
	let promedio;
	let acumulador=0;
	let i=0;

	
	while(i<5){
	numero = parseInt(prompt("ingrese un número"));
	acumulador = acumulador + numero;
	i = i+1;
	}

	promedio = acumulador / i;
}//FIN DE LA FUNCIÓN