/**
 * Created by Saalik on 3/4/2016.
 */
var redVal = 0;
var greenVal = 0;
var blueVal = 0;

    var red = document.getElementById('redSlider');
    red.addEventListener("mousemove", function () {
        redVal = red.value;
        document.getElementById("red").style.backgroundColor = "rgb("+redVal+", 0, 0)";
        return redVal;
    });


    var green = document.getElementById('greenSlider');
    green.addEventListener("mousemove", function () {
        greenVal = green.value;
        document.getElementById("green").style.backgroundColor = "rgb(0,"+greenVal+", 0)";
        return greenVal;
    });

    var blue = document.getElementById('blueSlider');
    blue.addEventListener("mousemove", function () {
        blueVal = blue.value;
        document.getElementById("blue").style.backgroundColor = "rgb(0, 0,"+blueVal+")";
        return blueVal;
    });

function changeColor() {
    document.getElementById("colorPot").style.backgroundColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
    document.getElementById("myLink").style.color = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
}

function showFullColor(){
    window.prompt("Press Ctrl+C to Copy Your Color: " + "rgb("+redVal+","+greenVal+","+blueVal+")");
}

function convertToRGB(r, g, b){
    Red = (255*r)/100;
    Green = (255*g)/100;
    Blue = (255*b)/100;

    return Red = red, Green = green, Blue = blue;
}

function findBackgroundColor(){
   var potColor = document.getElementById("colorPot").style.backgroundColor;
    document.getElementById("colorPot").setAttribute("data-clipboard-text", potColor);
}

function copyColor(){
    findBackgroundColor();
    new Clipboard('#colorPot');

    var notification = document.querySelector('.mdl-js-snackbar');
    notification.MaterialSnackbar.showSnackbar(
        {
            message: 'Color Copied to Clipboard.'
        }
    );
}

function checkScreen(){
    if(screen.width <= 699){
        alert("Sorry, the mobile version of this website is still in development. Try it on a computer for now!")
    }
}
