/*
Henry Filosa
SoftDev2 pd3
HW4 -- SVG's are neato
2016-03-03
*/

document.getElementById("circle").addEventListener("click",start_circle);
document.getElementById("stop_circle").addEventListener("click",stop_circle);
//document.getElementById("dvd").addEventListener("click",start_dvd);
document.getElementById("clear").addEventListener("click",clear);

var box = document.getElementById("vimage");
var growing=1;
var intervalID=null;
var dvdID=null;

function start_circle(){
    if (document.getElementsByTagName("circle")[0] == null){
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx",250);
	c.setAttribute("cy",250);
	c.setAttribute("r",10);
	c.setAttribute("fill","red");
	c.setAttribute("stroke","black");
	box.appendChild(c);
    }
    if (intervalID == null)
	intervalID=window.setInterval(circle,16);
}

/* I don't know how to get the dvd image into the svg :(
   Spent a lot of time searching and trying stuff before I gave up
function start_dvd(){
    console.log("1");
    if (document.getElementsByTagName("dvd")[0] == null){
	console.log("2");
	var c = document.createElementNS("http://www.w3.org/2000/svg", "dvd");
	console.log("3");
	c.setAttribute("src","logo.png");
	console.log("4");
	c.setAttribute("x",250);
	c.setAttribute("y",250);
//	c.setAttribute("height","250");
	console.log("5");
	//c.setAttribute("width","250");
	console.log("6");
	box.appendChild(c);
	console.log("7");
    }
    //if (dvdID == null)
//	dvdID=window.setInterval(dvd,16);
}
*/

function stop_circle(){
    window.clearInterval(intervalID);
    intervalID=null;
}

function clear(){
    if (document.getElementsByTagName("circle")[0] != null)
	box.removeChild(document.getElementsByTagName("circle")[0]);
}

//I don't know how to call functions when they are defined as variables :(
function circle(){
    var radius=parseInt(document.getElementsByTagName("circle")[0].getAttribute("r"));
    radius+=growing;
    if (radius==250)
	growing=-1;
    if (radius==0)
	growing=1;
    document.getElementsByTagName("circle")[0].setAttribute("r",radius.toString());
};

    
