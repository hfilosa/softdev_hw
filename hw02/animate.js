var c=document.getElementById("playground");
var ctx=c.getContext("2d");
ctx.strokeRect(0,0,500,500);
ctx.fillStyle="#ff0000";
document.getElementById("start").addEventListener("click",draw);

var requestID;
var growing=true;
var radius=0;

function draw(){
    if (growing)
	radius++;
    else
	radius--;
    if (radius==0)
	growing=true;
    else if (radius==200)
	growing=false;
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    ctx.strokeRect(0,0,500,500);
    ctx.beginPath();
    ctx.arc(250,250,radius,0,2*Math.PI);
    ctx.fill();
    window.requestAnimationFrame(draw);
}
