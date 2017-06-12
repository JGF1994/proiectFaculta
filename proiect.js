var video = document.getElementById("video");
video.addEventListener("touchstart",capteaza);
 

function capturaSucces(stream) 
{
	video.srcObject = stream;
}
