// JavaScript
var lengthPointer = document.getElementById("length");
var widthPointer = document.getElementById("width");
var heightPointer = document.getElementById("height");
var anglePointer = document.getElementById("angle");
var efficencyPointer = document.getElementById("efficency");
var sunPointer = document.getElementById("sun");
var lenght
var width
var height
var tilt
var angle
var area
var efficency
var sun
var temp
var rem
var hyp
var tiltmod
var anglemod
var angletiltmod

document.getElementById("Button").addEventListener("click",function(){
height =heightPointer.value; 
width = widthPointer.value; 
length = lengthPointer.value;
angle =anglePointer.value; 
efficency = efficencyPointer.value;
sun = sunPointer.value;
//calculates tilt from 0 in degrees using the width of the house and the height of the roof
tilt = (Math.atan((height/(width/2)))*(180/Math.PI))
hyp = Math.sqrt(((width/2)**2)+(height**2))
area = hyp * length
efficency = efficency / 100;
//“Modifier that impacts efficiency based on tilt as .72 as 90*”
//Get degrees tilt off flat
if (tilt >=25 && tilt <=50)
{
tiltmod = 1;
}
if (tilt < 25)
{
temp = 25 - tilt;
tiltmod=(100 - (temp * .5))/100;
}
if (tilt > 50)
{
temp = +tilt - 50;
tiltmod =(100- (temp * .7))/100;
}



//“Gives the effect of angle on efficiency as .55 efficiency at north”
//Get angle off due south angle
if (angle <= 45)
{
anglemod = (100 - (angle * .111) )/100;
}
if (angle > 45 && angle <= 135)
{
temp = angle - 45;
anglemod = (100 - ((temp) * .333)-5)/100;
}
if (angle > 135 && angle <= 180)
{
temp = angle - 135;
anglemod = (100 - ((temp) * .222)-35)/100;
}
//“Modifier that affects angles impact based on tilt used in place of angle”
temp = 1 - anglemod
if (tilt <= 35)
{
rem = 35 - tilt
angletiltmod = ((rem/35) * temp) + anglemod;
}
if (tilt > 35)
{
angletiltmod = anglemod - ((((tilt-35)/55)*temp)*anglemod);
}



var total = tiltmod * angletiltmod
document.getElementById("output").innerHTML = sun * area * efficency * tiltmod * angletiltmod;
});
