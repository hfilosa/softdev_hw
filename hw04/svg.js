document.getElementById("circle").addEventListener("click",draw);
document.getElementById("stop").addEventListener("click",stop);
document.getElementById("dvd").addEventListener("click",draw_dvd);
document.getElementById("clear").addEventListener("click",clear);

var pic = document.getElementById("vimage");
var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c.setAttribute("cx",250);
c.setAttribute("cy",y);
var circle=function(){
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r","100");
    c.setAttribute("fill","red");
    c.setAttribute("stroke","black");
    c.addEventListener("click",change);
    pic.appendChild(c);
};
