
// Get the modal
var modal = document.getElementById('popup');

var modal_content = document.getElementById('popup-content');
var winNav = window.navigator;
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
var isFirefox = winNav.userAgent.indexOf('Firefox') > -1;
var isSafari = winNav.userAgent.indexOf('Safari') > -1;
var isChromium = window.chrome;
// Get the button that opens the modal
var btn = document.getElementById("cont-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


if (isChromium) {
    modal.setAttribute('class',"popup popup-right");
    modal_content.setAttribute('class',"popup-content popup-content-right-chrome");
}

if(isIEedge) {
    modal_content.setAttribute('class',"popup-content ie-content");
}

if (isFirefox) {
    modal.setAttribute('class',"modal modal-left");
    modal_content.setAttribute('class',"popup-content popup-content-left");
}

if (isSafari) {
    modal.setAttribute('class',"modal modal-right");
    modal_content.setAttribute('class',"popup-content popup-content-right");
}


// When the user scrolls down show the button
// window.onscroll = function() {scrollFunction()};

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
