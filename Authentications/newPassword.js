document.querySelector("form").addEventListener("submit" ,goToHome) ;


let getPass=JSON.parse(localStorage.getItem("userCred"))||[] ;

function goToHome(){
    event.preventDefault();
    getPass.map(function(e,i){
        let newPass =document.querySelector("#pass1").value ;
        let confPass =document.querySelector("#pass2").value ;
        if(newPass===confPass){
            // getPass.push(e.newPass)
            // console.log(getPass)

          window.location.href="./home.html"
        }else{
            setTimeout(showAlert, 300);
           
            // window.location.href="./newPassword.html"
            // alert("Please Enter Same Password")
        }
    })
    
}

function showAlert(){
    document.querySelector("#alert").textContent="Please Enter Same Password!"
}