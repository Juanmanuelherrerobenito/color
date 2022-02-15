function cambiarEstado()
{
	let nombre_clase=document.getElementById("rojo").style.color;
	let nombre_clase2=document.getElementById("verde").style.color;
	let nombre_clase3=document.getElementById("roj").style.color;
	let nombre_clase4=document.getElementById("ro").style.color;
	let nombre_clase5=document.getElementById("verd").style.color;
	if (nombre_clase=="black")
		{document.getElementById("rojo").style.color="red";}
	if(nombre_clase2=="black")
		{document.getElementById("verde").style.color="green";}
	if (nombre_clase3=="black")
		{document.getElementById("roj").style.color="red";}
	if(nombre_clase4=="black")
		{document.getElementById("ro").style.color="red";}
	if(nombre_clase5=="black")
		{document.getElementById("verd").style.color="green";}
}