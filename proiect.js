var video = document.getElementById("video");
video.addEventListener("touchstart",capteaza);
 

function capturaSucces(stream) 
{
	video.srcObject = stream;
}
functia capturaInsucces(err)
{
	alert("Nu s-a putut captura");
}

var parametri = {audio: true, video: true};

navigator.mediaDevices.getUserMedia(parametri).then(capturaSucces).catch(capturaInsucces);


function capteaza(){
	vibreaza();
	var c = document.getElementById("canvas");
	c.width = video.width;
	c.height = video.height;
	var ctx = c.getContext("2d");
	ctx.drawImage(video,0,0,640,480);
}
function vibreaza()
{
	window.navigator.vibrate(200);
}
