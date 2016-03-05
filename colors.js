/**
 * Created by Saalik on 3/4/2016.
 */
var red = document.getElementById('redSlider');
red.addEventListener("mousemove", function () {
    red = this.value;
    document.getElementById("red").style.backgroundColor = "rgb("+red+", 0, 0)";
});
var green =  document.getElementById('greenSlider');
green.addEventListener("mousemove", function () {
    green = this.value;
    document.getElementById("green").style.backgroundColor = "rgb(0,"+green+", 0)";
});
var blue =  document.getElementById('blueSlider');
blue.addEventListener("mousemove", function () {
    blue = this.value;
    document.getElementById("blue").style.backgroundColor = "rgb(0, 0,"+blue+")";
});

function changeColor(){
    document.getElementById("colorPot").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}