var x = null;
var y = null;

xval = document.getElementById("xval");
yval = document.getElementById("yval");
    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;

  xval.innerHTML = x;
  yval.innerHTML = y;
  
}

function getRandomNumber() {
	num = Math.floor((Math.random() * 100) + 1);
	return num;
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}