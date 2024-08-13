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

function pan(tl, a, b, delay){
	
	const TIME_XXX = w/300
	let TIME = Math.min(TIME_XXX*.7, 1.1)
	// TIME = Math.max(TIME, 1.3)

	
	tl.set(b, {opacity:1})
	tl.add(a, delay)
	tl.to(a, {duration:TIME, x:-w, ease:"power4.out"}, a)
	tl.from(b, {duration:TIME, x:w, ease:"power4.out"}, a)
}


function start(data){
	
	// const read
	
	const tl = init()
	const TIME_XXX = h/250
	let TIME = Math.min(TIME_XXX*2, 2.8)
	TIME = Math.max(TIME, 1.3)
	
	const F1_Y = -250
	
	tl.add("lax-1")
	tl.to(".f1-bg_1", {duration:TIME*1.2, y:0}, "lax-1")
	tl.from(".f1-balloon-1", {y:F1_Y, duration:TIME*.8, ease:ease}, "lax-1")
	tl.from(".f1-balloon-2", {y:F1_Y, duration:TIME*.9,  ease:ease}, "lax-1")
	tl.from(".f1-balloon-3", {y:F1_Y, duration:TIME*1,  ease:ease}, "lax-1")
	tl.from(".f1-txt", {y:F1_Y, duration:TIME*1.1,  ease:"back.out"}, "lax-1")
	tl.from(".f1-max", {y:F1_Y, duration:TIME*1.2,  ease:ease}, "lax-1")

	pan(tl, ".frame1", '.frame2', "+=.5")
	

	tl.from(".f2-txta", {duration:.3, x:-100, y:"+=20", opacity:0, ease:"back.out"})
	tl.from(".f2-txtb", {duration:.3, x:-100, y:"+=20", opacity:0, ease:"back.out"})
	

	pan(tl, ".frame2", '.frame3', "+=2")

	tl.from(".f3-txta", {duration:.5, y:"+=20", x:-100, opacity:0, ease:"back.out"}, "-=.3")
	tl.from(".f3-txtb", {duration:.5, opacity:0, ease:"back.out"})
	

	pan(tl, ".frame3", '.frame4', "+=2.3")

	tl.from(".f4-o", {duration:.5, scale:0,  rotate:70, ease:"back.out"})
	
	tl.add("end", "+=.3")	
	tl.from(".f4-cta", {duration:.3, opacity:0, ease:"back.out"}, "end")
	tl.add(olg(), "end")

	// tl.play(".frame3")

}







export {size, init, start}



