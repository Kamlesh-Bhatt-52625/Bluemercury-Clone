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
function slideMoveLeft() {
    if (slideLeft >= 2) {
        document.getElementById("sc" + slideRight).style.display = "none";
        slideLeft -= 1;
        slideRight -= 1;

        for (var i = slideLeft; i <= slideRight; i++) {
            document.getElementById("sc" + i).style.display = "inline-block";
        }
    } else {
        return;
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
