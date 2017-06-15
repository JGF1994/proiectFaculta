var video = document.getElementById('livestream');
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

function capturaEcran()
{
	vibreaza();
	var c = document.getElementById("canvas");
	c.width = video.width;
	c.height = video.height;
	var ctx = c.getContext("2d");
	ctx.drawImage(video,0,0,640,480);
}
