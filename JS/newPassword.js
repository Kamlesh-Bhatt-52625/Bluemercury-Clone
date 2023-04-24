document.querySelector("form").addEventListener("submit" ,goToHome) ;


let getPass=JSON.parse(localStorage.getItem("userCred"))||[] ;

function goToHome(){
    event.preventDefault();
        let newPass =document.querySelector("#passone").value ;
        let confPass =document.querySelector("#passtwo").value ;
        console.log(newPass);
        if(newPass===confPass){
            // getPass.push(e.newPass)
            // console.log(getPass)

          window.location.href="index.html"
        }else{
            setTimeout(showAlert, 300);
            // window.location.href="./newPassword.html"
            // alert("Please Enter Same Password")
        }
        console.log(getPass);
}

function showAlert(){
    document.querySelector("#wrong").textContent="Please Enter Same Password!"
}