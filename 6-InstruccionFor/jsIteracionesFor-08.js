function mostrar()
{
	{
		let numero;
		let contador = 0;

	numero = parseInt(prompt("Ingrese un número"));

	while(isNaN(numero)){
	numero = parseInt(prompt("Eso no es un número"));
}
		
		for (let i =1; i < numero;i++ ){
			if( numero % i == 0){
				console.log(i);
				contador++;
			}
			console.log("catidad de divisores encontrados " + contador);
		}
		
	}

	if (contador == 2){
		alert ("Es primo");
	}else {
		alert ("No es")
	}
}//FIN DE LA FUNCIÓN