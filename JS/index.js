//For Slider
var count = 1;

setInterval(function () {
    document.getElementById('radio' + count).checked = true;
    count++;
    if (count > 4) {
        count = 1;
    }
}, 3000);
var slideLeft = 1;
var slideRight = 4;

var slideLeft1 = 1;
var slideRight1 = 4;

function slideShow() {
    for (let i = slideLeft; i <= slideRight; i++) {
        document.getElementById("sc" + i).style.display = "inline-block";
    }
    for (let i = slideLeft; i <= slideRight; i++) {
        document.getElementById("scc" + i).style.display = "inline-block";
    }
}


function slideMoveRight() {
    if (slideRight <= 11) {
        document.getElementById("sc" + slideLeft).style.display = "none";
        slideLeft++;
        slideRight++;
        
        for (var i = slideLeft; i <= slideRight; i++) {
            document.getElementById("sc" + i).style.display = "inline-block";
        }
    } else {
        return;
    }
}

function slideMoveLeft() {
    if (slideLeft >= 2) {
        document.getElementById("sc" + slideRight).style.display = "none";
        slideLeft--;
        slideRight--;

        for (var i = slideLeft; i <= slideRight; i++) {
            document.getElementById("sc" + i).style.display = "inline-block";
        }
    } else {
        return;
    }
}

function slideMoveRight1() {
    if (slideRight1 <= 11) {
        document.getElementById("scc" + slideLeft1).style.display = "none";
        slideLeft1++;
        slideRight1++;

        for (let i = slideLeft1; i <= slideRight1; i++) {
            document.getElementById("scc" + i).style.display = "inline-block";
        }
    } else {
        return;
    }
}

function slideMoveLeft1() {
    if (slideLeft1 >= 2) {
        document.getElementById("scc" + slideRight1).style.display = "none";
        slideLeft1--;
        slideRight1--;

        for (let i = slideLeft1; i <= slideRight1; i++) {
            document.getElementById("scc" + i).style.display = "inline-block";
        }
    } else {
        return;
    }
}