function mostrar()
{
let numero;
let contador =0;
numero = parseInt(prompt("Ingrese un número"));

while(isNaN(numero)){
	numero = parseInt(prompt("Eso no es un número"));
}

for (let i =1; i < numero;i++ ){
	if( i &2 == 0){
		console.log(i);
		contador++;
	}
	console.log("catidad de pares encontrados " + contador);
}




}//FIN DE LA FUNCIÓ