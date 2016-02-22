var c=document.getElementById("playground");
var ctx=c.getContext("2d");
ctx.strokeRect(0,0,500,500);
ctx.strokeStyle="#0000ff";
ctx.fillStyle="#ff0000";
c.addEventListener("click",dot);
document.getElementById("clear").addEventListener("click",clear);

var lastDotX=null;
var lastDotY=null;
function dot(){
    //Get the position of the mouse when it clicked
    var mouseX=event.offsetX;
    var mouseY=event.offsetY;
    //If lastDotX is null, this is the first dot-> don't draw a line
    if (lastDotX != null){
	//Draw the line connecting the new and old dot
	ctx.beginPath();
	ctx.moveTo(mouseX,mouseY);
	ctx.lineTo(lastDotX,lastDotY);
	ctx.stroke();
	//Redraw the last circle so that the line appears underneath
	ctx.beginPath();
	ctx.arc(lastDotX,lastDotY,20,0,2*Math.PI);
	ctx.fill();
    }
    //Now we draw the new dot
    ctx.beginPath();
    ctx.arc(mouseX,mouseY,20,0,2*Math.PI);
    ctx.fill();
    //Save the position of this new dot to draw the next line
    lastDotX=mouseX;
    lastDotY=mouseY;
}

function clear(){
    //Clear the canvas
    ctx.clearRect(0,0,500,500);
    //Scrub the last dots
    lastDotX=null;
    lastDotY=null;
    //Redraw border
    ctx.strokeStyle="#000000";
    ctx.strokeRect(0,0,500,500);
    ctx.strokeStyle="#0000ff";
}
