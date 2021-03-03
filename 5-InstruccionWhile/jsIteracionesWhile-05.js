/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
let sexo;

sexo = prompt("Ingrese sexo con 'f' o 'm'");


while(!(sexo == "f" || sexo == "m")) {
 sexo = prompt("Sexo invalido. Vuelva a ingresarlo.");
}

alert ("Sexo valido");

} //FIN DE LA FUNCIÓN