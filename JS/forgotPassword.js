document.querySelector("form").addEventListener("submit" ,forgotPass) ;

function forgotPass(){
    event.preventDefault();
    document.querySelector(".recover").innerHTML=" AUTHENTICATING..."
    setTimeout(rediretToNewPass, 1000);
}
 function rediretToNewPass(){
    window.location.href="./newPassword.html"
   
 }