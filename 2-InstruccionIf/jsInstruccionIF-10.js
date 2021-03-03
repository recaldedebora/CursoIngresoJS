function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let calificacion;
	let maximo = 10;  
	let minimo = 1;
	
	calificacion = Math.round(Math.random()*(maximo - minimo)+minimo);

	if (calificacion >= 9){
		alert (calificacion + " Excelente");
	}
	else if (calificacion < 4){
		alert (calificacion + " Vamos, la proxima se puede");
	}
	else {
		alert (calificacion + " Aprobado");
	}
}//FIN DE LA FUNCIÓN