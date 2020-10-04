
var code = location.href;
code = code.split("=");
code = code[1];
code = code.split("&");
code = code[0];
document.getElementsByClassName('yt-playability-error-supported-renderers')[0].innerHTML = "<iframe src='https://www.youtube.com/embed/" + code + "' allowfullscreen width='100%' height='100%'>";
