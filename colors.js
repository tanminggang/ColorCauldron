/**
 * Created by Saalik on 3/4/2016.
 */
var redVal = 0;
var greenVal = 0;
var blueVal = 0;


/*function initColor(){
    redVal = 0;
    greenVal = 0;
    blueVal = 0;
    document.getElementById("myLink").style.color = fullcolor;
}*/

function updatered(){
var red = document.getElementById('redSlider');
red.addEventListener("mousemove", function () {
    redVal = red.value;
    document.getElementById("red").style.backgroundColor = "rgb("+redVal+", 0, 0)";
    return redVal;
})}

function updategreen(){
var green = document.getElementById('greenSlider');
green.addEventListener("mousemove", function () {
    greenVal = green.value;
    document.getElementById("green").style.backgroundColor = "rgb(0,"+greenVal+", 0)";
    return greenVal;
})}

function updateblue(){
var blue = document.getElementById('blueSlider');
blue.addEventListener("mousemove", function () {
    blueVal = blue.value;
    document.getElementById("blue").style.backgroundColor = "rgb(0, 0,"+blueVal+")";
    return blueVal;
})}

var pot = document.getElementById("colorPot");

var fullcolor = "rgb("+String(updatered())+","+String(updategreen())+","+String(updateblue())+")";
/*fullcolor.addEventListener("mousemove", function(){
    document.getElementById("colorPot").style.backgroundColor = fullcolor;
});*/

function changeColor(){
    alert(fullcolor);
    document.getElementById("colorPot").style.backgroundColor = "rgb("+redVal+","+greenVal+","+blueVal+")";
    document.getElementById("myLink").style.color = String(fullcolor);
};



function showFullColor(){
    window.prompt("Press Ctrl+C to Copy Your Color: " + fullcolor);
};

function convertToRGB(r, g, b){
    Red = (255*r)/100;
    Green = (255*g)/100;
    Blue = (255*b)/100;

    return Red = red, Green = green, Blue = blue;
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
