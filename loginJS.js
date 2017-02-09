
var buttonLogin = document.getElementById("sign-up");
var email = document.getElementById("email").value;

buttonLogin.onclick = function() 
{
  if (email != "student@northwestern.edu") {
    window.alert("Redirecting...");
    window.location.href = "http://www.google.com";
  }
}
