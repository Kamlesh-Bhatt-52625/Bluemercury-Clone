document.querySelector("form").addEventListener("submit" ,login) ;

let getCredDetails =JSON.parse(localStorage.getItem("userCred"))||[] ;

function login(){
    event.preventDefault() ;
    let email =document.querySelector("#email").value ;
    let pass =document.querySelector("#pass").value ;
    getCredDetails.map(function(e,i){

        if(email==e.email && pass == e.pass){
            alert("hello user")
           
            window.location.href="./home.html"
        }else{
            alert("wrong cred")
            window.location.href="./login.html"

        }
    })



}