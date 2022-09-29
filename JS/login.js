document.getElementById("sign-in-btn").addEventListener("click", sign_in);
document.getElementById("sign-up-btn").addEventListener("click", sign_up);

var x = document.getElementById("sign-in");
var y = document.getElementById("sign-up");
var z = document.getElementById("btn");

function sign_up(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function sign_in(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}
