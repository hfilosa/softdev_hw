/*
Henry Filosa
SoftDev2 pd3
HW3 -- Are We Ever Going to Start the Movie?
2016-02-23
*/

var c=document.getElementById("playground");
var ctx=c.getContext("2d");
ctx.strokeRect(0,0,500,500);
ctx.fillStyle="#ff0000";
document.getElementById("start").addEventListener("click",draw);
document.getElementById("stop").addEventListener("click",stop);
document.getElementById("dvd").addEventListener("click",draw_dvd);
document.getElementById("clear").addEventListener("click",clear);

var requestID;
var growing=true;
var radius=0;

function random_neg(){
    if (Math.random()<0.5)
	return -1;
    else
	return 1;
}

var dvd_requestID;
var x_vel=(4*Math.random()+1)*random_neg();
var y_vel=(4*Math.random()+1)*random_neg();
var x=250;
var y=250;
var logo= new Image();
logo.src="logo.png";
logo.height=10;
logo.width=10;

function draw_dvd(){
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    ctx.strokeRect(0,0,500,500);
    ctx.drawImage(logo,x,y,100,80);
    //hit left
    if (x<0)
	x_vel=4*Math.random()+1;
    //hit bottom
    if (y<0)
	y_vel=4*Math.random()+1;
    if (x>400)
	x_vel=-4*Math.random()-1;
    if (y>420)
	y_vel=-4*Math.random()-1;
    console.log("X: "+x+" Y: "+y+" X_vel: "+x_vel+" Y_vel: "+y_vel);
    x+=x_vel;
    y+=y_vel;
    dvd_requestID=window.requestAnimationFrame(draw_dvd);
}

function draw(){
    if (growing)
	radius++;
    else
	radius--;
    if (radius==0)
	growing=true;
    if (radius==200)
	growing=false;
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    ctx.strokeRect(0,0,500,500);
    ctx.beginPath();
    ctx.arc(250,250,radius,0,2*Math.PI);
    ctx.fill();
    requestID=window.requestAnimationFrame(draw);
}

//Stops circle and DVD
function stop(){
    window.cancelAnimationFrame(dvd_requestID);
    window.cancelAnimationFrame(requestID);
}

function clear(){
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    ctx.strokeRect(0,0,500,500);
}
