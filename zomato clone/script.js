function changetype()
{
    console.log(document.querySelector(".s").style.backgroundColor="red");
}
function changecolor()
{
    console.log(document.querySelector(".s").style.backgroundColor="rgb(248, 62, 62)");
}
function changeplaceholder()
{
    console.log(document.getElementById("share").placeholder="Email");
    console.log(document.getElementById("share").name="email");

}
function myFunction() {
    document.getElementById("share").placeholder = "Phone no";
    console.log(document.getElementById("share").name="number");
  }
