
// Get the popup
var popup = document.getElementById('popup');

var popup_content = document.getElementById('popup-content');
var winNav = window.navigator;
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
var isFirefox = winNav.userAgent.indexOf('Firefox') > -1;
var isSafari = winNav.userAgent.indexOf('Safari') > -1;
var isChromium = window.chrome;


// Get the button that opens the popup
var btn = document.getElementById("continue-btn");

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the popup 
btn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}


if (isChromium) {
    popup.setAttribute('class',"popup popup-right");
    popup_content.setAttribute('class',"popup-content popup-right");
}

if(isIEedge) {
    popup_content.setAttribute('class',"popup-content ie-content");
}

if (isFirefox) {
    popup.setAttribute('class',"popup popup-left");
    popup_content.setAttribute('class',"popup-content popup-left");
}

if (isSafari) {
    popup.setAttribute('class',"popup popup-right");
    popup_content.setAttribute('class',"popup-content popup-right");
}


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
