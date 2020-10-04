
var code = location.href;
code = code.split("=");
code = code[1];
code = code.split("&");
code = code[0];
if(document.getElementsByClassName('yt-playability-error-supported-renderers').length != 0) {
document.getElementsByClassName('yt-playability-error-supported-renderers')[0].innerHTML = "<iframe src='https://www.youtube.com/embed/" + code + "' allowfullscreen width='100%' height='100%'>";
} else {
 alert("Please use this on an age-restricted video"); 
}
