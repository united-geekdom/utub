
if(document.getElementsByClassName('yt-playability-error-supported-renderers').length != 0) {
var code = location.href;
code = code.split("=");
code = code[1];
code = code.split("&");
code = code[0];
document.getElementsByClassName('yt-playability-error-supported-renderers')[0].innerHTML = "<iframe src='https://www.youtube.com/embed/" + code + "?autoplay=1&mute=0&controls=1&start=3&origin=https%3A%2F%2Fdebatecentral.wixsite.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1' allowfullscreen width='100%' height='100%'>";
} else {
 alert("Please use this on an age-restricted video"); 
}
