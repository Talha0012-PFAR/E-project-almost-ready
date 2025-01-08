// Get the buttons that open the popup
var loginBtn1 = document.getElementById("loginBtn1");
var loginBtn2 = document.getElementById("loginBtn2");

// Get the popup modal
var popup = document.getElementById("loginFormPopup");

// Get the <span> element that closes the popup
var closeBtn = document.getElementById("closeBtn");

// When the user clicks on either of the login buttons, open the modal
loginBtn1.onclick = function() {
    popup.style.display = "block";
}

loginBtn2.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}