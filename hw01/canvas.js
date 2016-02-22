var c=document.getElementById("ftb2maga");
var ctx=c.getContext("2d");
ctx.fillStyle = "#ff0000";
ctx.strokeStyle="#0000ff";
ctx.fillRect(0,0,538,538);

var i;
for(i=0;i<260;i+=10){
    ctx.strokeRect(i,i,538-(2*i),538-(2*i));
}

ctx.strokeStyle="#00ff00";

for(i=0;i<535;i+=10){
    ctx.beginPath();
    ctx.moveTo(i,0);
    ctx.lineTo(i+3,538);
    ctx.stroke();
}

ctx.strokeStyle="#00ffff";
ctx.beginPath();
ctx.moveTo(0,538);
ctx.arc(0,538,538,538,0);
ctx.stroke();
