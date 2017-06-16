var video = document.getElementById('livestream');
var sunet=new Audio("sunet.mp3");
var optiuneAleasa;
var imagine=new Image(640,480);
var ctx;

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
function capturaEcran()
{
	vibreaza();
	redaSunet();
	var c = document.getElementById("canvas");
	imagine.width = c.width = video.width;
	imagine.height = c.height = video.height;
	ctx = canvas.getContext("2d");
	ctx.drawImage(video,0,0,640,480);
	
}
function coloreazaBlur()
{
	document.getElementById("canvas").className = "efectblur";
	var c = document.getElementById("canvas");
	c.width = imagine.width;
	c.height = imagine.height;
	ctx = canvas.getContext("2d");
	ctx.drawImage(imagine,0,0,640,480);
}
function coloreazaAlbNegru()
{
	document.getElementById("canvas").className = "efectalbnegru";
	var c = document.getElementById("canvas");
	c.width = imagine.width;
	c.height = imagine.height;
	ctx = canvas.getContext("2d");
	ctx.drawImage(imagine,0,0,640,480);
}
function coloreazaSepia()
{
	document.getElementById("canvas").className = "efectsepia";
	var c = document.getElementById("canvas");
	c.width = imagine.width;
	c.height = imagine.height;
	ctx = canvas.getContext("2d");
	ctx.drawImage(imagine,0,0,640,480);
}
