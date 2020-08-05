function tim(){
var tims=new Date()
document.getElementById("dates").innerText=tims
}
setInterval(tim,0);
//Connection

function isOnline(){
if (navigator.OnLine)

{

	document.getElementById('demo').innerHTML="Connected";
}
else
{
		document.getElementById('demo').innerHTML="Not connected !";

}

}

//fjsd
