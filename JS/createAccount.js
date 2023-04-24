document.querySelector("form").addEventListener("submit", createAccount);


let credentialArr =JSON.parse(localStorage.getItem("userCred")) || [];

function createAccount() {
    event.preventDefault();

    let email = document.querySelector("#email").value;
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let pass = document.querySelector("#pass").value;


    let dataObj = {
        email: email,
        fname: fname,
        lname: lname,
        pass: pass,

    }

    credentialArr.push(dataObj);
    console.log(credentialArr);

    localStorage.setItem("userCred", JSON.stringify(credentialArr))

    document.querySelector(".registerbutton").innerHTML="LOADING..."
    setTimeout(function(){})
    window.location.href="index.html"

}