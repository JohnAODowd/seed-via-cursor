var x = null;
var y = null;
    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
  console.log(x, y);
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}