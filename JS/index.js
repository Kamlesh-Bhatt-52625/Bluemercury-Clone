//For Slider
var count = 1;

setInterval(function () {
    document.getElementById('radio' + count).checked = true;
    count++;
    if (count > 4) {
        count = 1;
    }
}, 3000);

// For SlideShow 1
var slideLeft = 1;
var slideRight = 4;

// For SlideShow 2
var slideLeft1 = 1;
var slideRight1 = 4;

// For SlideShow 3
var slideLeft2 = 1;
var slideRight2 = 4;

var screenWidth = window.matchMedia("(max-width: 900px)");
var screenWidth2 = window.matchMedia("(max-width: 700px)");
var screenWidth3 = window.matchMedia("(max-width: 500px)");

function LetItSlide(screenWidth, screenWidth2) {
    if(screenWidth.matches){
        // For SlideShow 1
        slideLeft = 1;
        slideRight = 3;
        
        // For SlideShow 2
        slideLeft1 = 1;
        slideRight1 = 3;
        
        // For SlideShow 3
        slideLeft2 = 1;
        slideRight2 = 3;
    }
    
    if(screenWidth2.matches){
        // For SlideShow 1
        slideLeft = 1;
        slideRight = 2;
        
        // For SlideShow 2
        slideLeft1 = 1;
        slideRight1 = 2;
        
        // For SlideShow 3
        slideLeft2 = 1;
        slideRight2 = 2;
    }
    
    if(screenWidth3.matches){
        // For SlideShow 1
        slideLeft = 1;
        slideRight = 1;
        
        // For SlideShow 2
        slideLeft1 = 1;
        slideRight1 = 1;
        
        // For SlideShow 3
        slideLeft2 = 1;
        slideRight2 = 1;
    }

    for (var i = slideLeft; i <= slideRight; i++) {
        document.getElementById("sc" + i).style.display = "inline-block";
    }
    for (var i = slideLeft1; i <= slideRight1; i++) {
        document.getElementById("scc" + i).style.display = "inline-block";
    }
    for (var i = slideLeft2; i <= slideRight2; i++) {
        document.getElementById("sccc" + i).style.display = "inline-block";
    }
}

LetItSlide(screenWidth, screenWidth2);

screenWidth.addEventListener(LetItSlide);


// For SlideShow 1
function slideMoveRight() {
    if (slideRight <= 11) {
        document.getElementById("sc" + slideLeft).style.display = "none";
        slideLeft++;
        slideRight++;
        
        for (var i = slideLeft ; i <= slideRight; i++) {
            document.getElementById("sc" + i).style.display = "inline-block";
        }
    } 
    else {
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
    } 
    else {
        return;
    }
}

// For SlideShow 2
function slideMoveRight1() {
    if (slideRight1 <= 11) {
        document.getElementById("scc" + slideLeft1).style.display = "none";
        slideLeft1++;
        slideRight1++;

        for (var i = slideLeft1; i <= slideRight1; i++) {
            document.getElementById("scc" + i).style.display = "inline-block";
        }
    } 
    else {
        return;
    }
}

function slideMoveLeft1() {
    if (slideLeft1 >= 2) {
        document.getElementById("scc" + slideRight1).style.display = "none";
        slideLeft1--;
        slideRight1--;

        for (var i = slideLeft1; i <= slideRight1; i++) {
            document.getElementById("scc" + i).style.display = "inline-block";
        }
    } 
    else {
        return;
    }
}

// For SlideShow 3
function slideMoveRight2() {
    if (slideRight2 <= 11) {
        document.getElementById("sccc" + slideLeft2).style.display = "none";
        slideLeft2++;
        slideRight2++;

        for (var i = slideLeft2; i <= slideRight2; i++) {
            document.getElementById("sccc" + i).style.display = "inline-block";
        }
    } 
    else {
        return;
    }
}

function slideMoveLeft2() {
    if (slideLeft2 >= 2) {
        document.getElementById("sccc" + slideRight2).style.display = "none";
        slideLeft2--;
        slideRight2--;

        for (var i = slideLeft2; i <= slideRight2; i++) {
            document.getElementById("sccc" + i).style.display = "inline-block";
        }
    } 
    else {
        return;
    }
}