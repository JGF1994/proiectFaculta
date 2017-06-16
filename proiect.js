var video = document.getElementById('livestream');
var sunet=new Audio("sunet.mp3");
var optiuneAleasa=new int;

if (video)
	video.addEventListener("touchstart",capturaEcran);
 else
	alert("Eroare la captare");

function capturaSucces(stream) 
{
	video.srcObject = stream;
}
function capturaInsucces(err)
{
	alert("Nu s-a putut captura");
}

var parametri = {audio : true, video : true};

navigator.mediaDevices.getUserMedia(parametri).then(capturaSucces).catch(capturaInsucces);

function vibreaza()
{
	window.navigator.vibrate(200);
}
function redaSunet()
{
	sunet.play();
}
function efectAles()
{
	if (document.getElementById('').clicked == true)
		optiuneAleasa=0;
	if (document.getElementById('').clicked == true)
		optiuneAleasa=1;
	if (document.getElementById('').clicked == true)
		optiuneAleasa=2;
	if (document.getElementById('').clicked == true)
		optiuneAleasa=3;	
}
function capturaEcran()
{
	vibreaza();
	redaSunet();
	var c = document.getElementById("canvas");
	c.width = video.width;
	c.height = video.height;
	var ctx = c.getContext("2d");
	
	ctx.drawImage(video,0,0,640,480);
}
