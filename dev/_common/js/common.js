import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});



const READ = {
	t1: 2.5,
	t2a: 2.8,
	t2b: 2.3,
}



const {w, h} = size




	
function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}


let data_ = {}
const ease = "power2.out"



function start(data){
	
	
	const tl = init()

	tl.set(".end_record", {x:-900, y:78})

	tl.from(".start_txta", {duration:.3,  x:"-=200", y:"+=20", opacity:0}, "+=.2")
	tl.from(".start_txtb", {duration:.3,  x:"-=200", y:"+=20", opacity:0})
	tl.from(".start_txtc", {duration:.3,  x:"-=200", y:"+=20", opacity:0})

	tl.from(".start_hand", {duration:.6, ease:"power3.out",  y:250})
	
	tl.add("f2", "+=1.2")
	tl.set(".frame2", {opacity:1})
	tl.to(".frame1", {duration:.6,  y:-250}, "f2")
	tl.from(".frame2", {duration:.6,  y:250}, "f2")
	tl.add(confetti, "f2")

	

	tl.from(".end_0", {duration:.6,  y:-size.h}, "+=.3")
	tl.from(".end_1", {duration:.3,  opacity:0, x:"-=50"}, "+=.3")
	tl.from(".end_2", {duration:.3,  opacity:0, x:"-=50"})
	tl.from([".end_3", ".end_cta"], {duration:.3,  opacity:0}, "+=.2")


	tl.from(".bg", {duration:2,  y:-size.h, opacity:0})

	tl.add("ticker")

	tl.to(".end_record", {ease:"none", duration:.5, x:-600, y:52}, "ticker")
	tl.to(".end_record", {ease:"none", duration:3, x:0, y:0})
	tl.from(".end_logo", {duration:.3,  opacity:0}, "ticker+=1")
	tl.from(".end_smart", {duration:.3,  opacity:0}, "ticker+=1")
	tl.add(olg, "ticker+=1.5")

	

}


function confetti(){


var svgNS = "http://www.w3.org/2000/svg";  

var total = 50;
var w = 300;
var h = 250;
const colors = ["#bdddff", "#2d73bb", "#0d539b", "#8bc4ff", "#3f1fff"]
const REPEAT = 6
for (let i=0; i<total; i++){ 
	const color = Math.floor(Math.random() * colors.length)
	console.log(color);
	const className = `dot_${i}`
	var myCircle = document.createElementNS(svgNS,"rect"); 
	myCircle.setAttributeNS(null,"class", className); 
	myCircle.setAttributeNS(null,"width",4);
	myCircle.setAttributeNS(null,"height",6);
	document.getElementById("mySVG").appendChild(myCircle);  
	TweenMax.set(`.${className}`,{x:Random(w),y:0,rotation:Random(180),scale:Random(0.5)+0.5,fill:colors[color]});
	animm(`.${className}`);
}

function animm(elm){   
	TweenMax.to(elm,Random(2)+.5,{y:h+20,ease:Linear.easeNone,repeat:REPEAT, delay:-5});
	TweenMax.to(elm,Random(3)+.5,{x:'+=70', repeat:REPEAT,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(elm,Random(3)+.5,{scaleX:0.2,rotation:Random(360), repeat:REPEAT,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(elm,Random(1)+0.5,{repeat:REPEAT,yoyo:true,ease:Sine.easeInOut})
};

function Random (max) {	
	return Math.random()*max;
}

function random(min, max) {
	return min + Math.floor( Math.random() * (max - min));
}
	
}






export {size, init, start}



