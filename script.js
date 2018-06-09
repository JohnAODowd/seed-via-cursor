var x = null;
var y = null;


    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;

  document.getElementById("xval").innerHTML = x;
  document.getElementById("yval").innerHTML = y;
  
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}