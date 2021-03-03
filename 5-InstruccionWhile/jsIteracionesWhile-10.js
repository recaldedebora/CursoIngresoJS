/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
let numero;
let positivos =0;
let promePos =0;
let negativos =0;
let promeNeg =0;
let iPos = 0;
let iNeg = 0;
let iCer = 0;
let iPar = 0;
let respuesta;

do{
numero = parseInt(prompt("Ingrese un número"));

while(isNaN(numero)){
	numero = parseInt(prompt("Ese no es un número"));
}

if (numero > 0){
	positivos = positivos + numero;
	iPos++
}
else if (numero < 0){
	negativos = negativos + numero;
	iNeg++
}
else {
 iCer++
}

//para saber si es par
if (numero % 2 == 0){
	iPar++
}

respuesta = prompt("quiere ingresar otro número");
}while(respuesta == 's');

//teg que inicializar los prome porque los pogo e ua condicion
if (iPos != 0){
promePos = positivos / iPos
}

if (iPos != 0){
promeNeg = negativos / iNeg
}


alert ("suma positivos " + positivos + " cantidad " + iPos + " pormedio " + promePos);
alert ("suma negativos" + negativos + " cantidad " + iNeg + " pormedio " + promeNeg);
alert ("Cantidad de ceros " + iCer);
alert ("Diferencia entre positivos y negativos " + (iPos - iNeg));
alert ("Cantidad de números pares " + iPar);
}
//FIN DE LA FUNCIÓN
//estategia resolución
//1- declarar variable
//2- generar un bucle del tipo mientras que el usuario quiera
//------aca empieza el bucle---
//3- pido un numero
//4- valido el numero
//5- analizamos los signos
//uso if/ else if/ else para positivo, negativo y ceros
//5.1- hago lo que corresponde a los positivos
//5.2- hago lo que corresponde a los negativos 
//5.3- hago lo que corresponde a los ceros 
//6-analizar si el numero es par y contarlos
//7- pregunto si quiere continuar
//---------------
//8- cantidad de positivos - negativos, calcular promedios
//9- informo los resultados
