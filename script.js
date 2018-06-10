var start = Date.now();

var x = null;
var y = null;

xval = document.getElementById("xval");
yval = document.getElementById("yval");
randval = document.getElementById("randval");

    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;

  xval.innerHTML = x;
  yval.innerHTML = y;
  randval.innerHTML = convertToRange(getRandomNumberWithMouseCoords(x , y));
  
}

function getRandomNumberWithMouseCoords(x, y) {
	
  //num = Math.floor((Math.random() * 100) + 1);
	Math.seedrandom((x+1) * (y+1) + getCurrentTime());
  num = Math.random();
  return num;
}

function getCurrentTime(){
  var millis = Date.now() - start;
  return millis;
}

function convertToRange(n){
  num = Math.floor(n * 100) + 1;
  return num;
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}