/**
 * Created by Saalik on 3/4/2016.
 */
var red = document.getElementById('redSlider');
red.addEventListener("mousemove", function () {
    red = this.value;
    document.getElementById("red").style.backgroundColor = "rgb("+red+", 0, 0)";
});

var green = document.getElementById('greenSlider');
green.addEventListener("mousemove", function () {
    green = this.value;
    document.getElementById("green").style.backgroundColor = "rgb(0,"+green+", 0)";
});

var blue = document.getElementById('blueSlider');
blue.addEventListener("mousemove", function () {
    blue = this.value;
    document.getElementById("blue").style.backgroundColor = "rgb(0, 0,"+blue+")";
});

function changeColor(){
    document.getElementById("colorPot").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("myLink").style.color = "rgb("+red+","+green+","+blue+")";
}

function initColor(){
    red = 0;
    green = 0;
    blue = 0;
    document.getElementById("myLink").style.color = "rgb("+red+","+green+","+blue+")";
}

//The variables for color percentage values and the RGB color associated with it.
var colorPercRed = 10;
var colorInR = (255*colorPercRed)/100;
var colorPercGreen = 10;
var colorInG = (255*colorPercGreen)/100;
var colorPercBlue = 10;
var colorInB = (255*colorPercBlue)/100;

var form = '<form action="#">' +
    '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
    '<input class="mdl-textfield__input" type="number" min="0" max="100" value="0" id="redVal">'+
    '<label class="mdl-textfield__label" for="redVal">Red Value (0-100)</label>' +
'</div>' +
'</form>'

function valuePopUp(){
        document.getElementById("redValueArea").innerHTML += form;
}
