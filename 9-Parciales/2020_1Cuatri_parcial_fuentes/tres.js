function mostrar()
{
let sexo;
let edad;
let temperatura;
let estadoCivil;
let nombre;
let seguir;

let flag=1;
let maxTemp;
let maxNombre;

let contMayorViudo=0;
let contHSV=0;
let contJovenConFiebre=0;
let acomEdadHS=0;
let contHS=0;
let promedio;

do{

	nombre = prompt("Ingrese nombre");
	
	edad = parseInt(prompt("Ingrese edad"))
	while( edad <=0 || isNaN(edad)){
	edad = parseInt(prompt("Ingrese edad"))
	}

	//me falta agregar el sexo

	temperatura = parseInt(prompt("Ingrese temperatura"))
	while( temperatura <=0 || isNaN(temperatura)){
	temperatura = parseInt(prompt("Error.Ingrese temperatura"))
	}


	//coasa para ir resolviendo el punto A
	if(flag || temperatura > maxTemp){
		maxTemp = temperatura;
		maxNombre = nombre;
		flag = 0;
	}

	if(edad >= 18 && estadoCivil == "Viudo"){
		contMayorViudo;
	}

	if(sexo == "m" && (estadoCivil == "Soltero" || estadoCivil == "Viudo") ){
		contHSV++;
	}

	if ( edad > 60 && temperatura >38){
		contJovenConFiebre++;
	}

	if( sexo == "m" && estadoCivil == "Soltero"){
		acumEdadHS+= edad ;
		contHS++; 
	}

//terminar los consoleLog
console.log("a- El nombre de la persona con más temperatura ")

	seguir = prompt("Quiere ingresar otro pasajero")
}while(seguir == "s");


}
