function mostrar()
{
	//tomo la hora
let hora;

hora = parseInt(document.getElementById("txtIdHora").value);

if (hora >=7 && hora <= 11){
	alert ("es de mañana");
}
else if (hora >11 && hora <=19){
	alert ("Es de tarde");
}
else if ((hora >19 && hora <=24) || (hora >= 0 && hora <7)){
	alert ("Es de noche");
}
else {
	alert ("Esta hora no existe");
}
}

/*/switch (hora){
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
		alert ("Es de mañana");
		break;

	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
		alert ("Es de tarde");
		break;

	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
	case 00:
	case 01:
	case 02:
	case 03:
	case 04:
	case 05:
	case 06:
		alert ("Es de noche");
		break;

	default:
		alert ("Esa hora no existe");
		
	}
}
/*/
//FIN DE LA 