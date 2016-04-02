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
        document.getElementById("redInput").style.backgroundColor = "rgb("+redVal+", 0, 0)";
        return redVal;
    });

    var green = document.getElementById('greenSlider');
    green.addEventListener("mousemove", function () {
        greenVal = green.value;
        document.getElementById("green").style.backgroundColor = "rgb(0,"+greenVal+", 0)";
        document.getElementById("greenInput").style.backgroundColor = "rgb(0,"+greenVal+", 0)";
        return greenVal;
    });

    var blue = document.getElementById('blueSlider');
    blue.addEventListener("mousemove", function () {
        blueVal = blue.value;
        document.getElementById("blue").style.backgroundColor = "rgb(0, 0,"+blueVal+")";
        document.getElementById("blueInput").style.backgroundColor = "rgb(0, 0,"+blueVal+")";
        return blueVal;
    });
//colorpot.addEventListener("mousemove",
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
   //alert("Pot Color: " + potColor);
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


/*
var form = '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
    '<input class="mdl-textfield__input" type="number" min="0" max="100" value="0" id="redVal">'+
    '<label class="mdl-textfield__label" for="redVal">Red Value (0-100)</label>'+
'</div>';

var on = false;
function valuePopUp(){
    if(on == false){
    document.getElementById("redValueArea").innerHTML = form;
        on= true;
    }
    else{}
}*/
