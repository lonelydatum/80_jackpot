import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
	ease: "power3.out"
});




const {w, h} = size


const READ = {
	jackpotnormal: 1.2,
	jackpotcombo: 2.6,

}


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
	
	tl.add("f2", `+=${READ[universalBanner.name]}`)
	tl.set(".frame2", {opacity:1})
	tl.to(".frame1", {duration:.6,  y:-250}, "f2")
	tl.from(".frame2", {duration:.6,  y:250}, "f2")
	tl.add(confetti, "f2+=.7")

	

	tl.from(".end_0", {duration:.6,  y:-size.h}, "-=.3")
	tl.from(".end_1", {duration:.3,  opacity:0, x:"-=50"})
	tl.from(".end_2", {duration:.3,  opacity:0, x:"-=50"})
	tl.from([".end_3", ".end_cta"], {duration:.3,  opacity:0}, "+=.2")


	tl.from(".bg", {duration:2,  y:-size.h, opacity:0})

	tl.add("ticker")

	tl.to(".end_record", {ease:"none", duration:.5, x:-600, y:52}, "ticker")
	tl.to(".end_record", {ease:"none", duration:3, x:0, y:0})
	tl.from(".end_logo", {duration:.3,  opacity:0}, "ticker+=1")
	tl.from(".end_smart", {duration:.3,  opacity:0}, "ticker+=1")
	tl.add(olg, "ticker+=1.5")

	
	// tl.play("f2")
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
		const item = rawData[i]
		const className = `dot_${i}`
		var myCircle = document.createElementNS(svgNS,"rect"); 
		myCircle.setAttributeNS(null,"class", className); 
		myCircle.setAttributeNS(null,"width",4);
		myCircle.setAttributeNS(null,"height",6);
		document.getElementById("mySVG").appendChild(myCircle);  

		TweenMax.set(item.elm, item.tween);
		TweenMax.to(item.elm,item.items[0].duration, {...item.items[0], ease:Linear.easeNone,});
		TweenMax.to(item.elm,item.items[1].duration, item.items[1]);
		TweenMax.to(item.elm,item.items[2].duration, item.items[2]);
		TweenMax.to(item.elm,item.items[3].duration, item.items[3]);

	}


	
}


window.rawData = [
{
	"elm": ".dot_0",
	"tween": {
		"x": 66.95412100635411,
		"y": 0,
		"rotation": 20.645639418588956,
		"scale": 0.8276396104474343,
		"fill": "#8bc4ff"
	},
	"items": [
	{
		"duration": 0.7611065494402189,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.208520449125899,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.816735669599116,
		"scaleX": 0.2,
		"rotation": 335.44069563174264,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.8496231374887404,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_1",
	"tween": {
		"x": 29.62239243265512,
		"y": 0,
		"rotation": 90.17593341030032,
		"scale": 0.7405722071808648,
		"fill": "#0d539b"
	},
	"items": [
	{
		"duration": 0.6007323284321915,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 3.3876868234739232,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.6213770892935526,
		"scaleX": 0.2,
		"rotation": 172.179602241419,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.0617257356182896,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_2",
	"tween": {
		"x": 7.781161278110149,
		"y": 0,
		"rotation": 126.08919762978451,
		"scale": 0.9022159856098326,
		"fill": "#2d73bb"
	},
	"items": [
	{
		"duration": 1.587412067043752,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 0.8989672119164152,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.9984100513200433,
		"scaleX": 0.2,
		"rotation": 311.0945249233522,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.362043639209269,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_3",
	"tween": {
		"x": 231.9096537379873,
		"y": 0,
		"rotation": 170.47996159916428,
		"scale": 0.9982392658799868,
		"fill": "#2d73bb"
	},
	"items": [
	{
		"duration": 0.8516518438091296,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.180499394451811,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.1582078705218477,
		"scaleX": 0.2,
		"rotation": 253.2240491799718,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.5094206995889727,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_4",
	"tween": {
		"x": 192.86688539555018,
		"y": 0,
		"rotation": 26.794571422487323,
		"scale": 0.9511134262355846,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 1.7798902438194206,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.715307070224723,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.697009437210139,
		"scaleX": 0.2,
		"rotation": 266.05010310688954,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.6556173719511622,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_5",
	"tween": {
		"x": 10.366631397386872,
		"y": 0,
		"rotation": 158.61557717416488,
		"scale": 0.5691338652209066,
		"fill": "#2d73bb"
	},
	"items": [
	{
		"duration": 2.3864812730493195,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.4074987192394044,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.8666229704142485,
		"scaleX": 0.2,
		"rotation": 136.48078952028916,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.252322603203265,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_6",
	"tween": {
		"x": 212.2464497666054,
		"y": 0,
		"rotation": 111.08821363754495,
		"scale": 0.9740065248487534,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 0.8221654630125217,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 3.4282809560197265,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.591976840909421,
		"scaleX": 0.2,
		"rotation": 21.865868668179385,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.0123965523932037,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_7",
	"tween": {
		"x": 227.73033864643313,
		"y": 0,
		"rotation": 60.12693539746954,
		"scale": 0.5279307127014894,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 1.7096543576704928,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.9895368516816794,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.0891463204309113,
		"scaleX": 0.2,
		"rotation": 86.38607757971096,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.311426371600917,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_8",
	"tween": {
		"x": 213.58506352173956,
		"y": 0,
		"rotation": 90.19784276529064,
		"scale": 0.5185229926006137,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 2.2384611445614286,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.8334596967002033,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.9550196816789738,
		"scaleX": 0.2,
		"rotation": 338.93625064288324,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.1006880170164313,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_9",
	"tween": {
		"x": 54.93318291631499,
		"y": 0,
		"rotation": 24.6123516226552,
		"scale": 0.9978159039755928,
		"fill": "#8bc4ff"
	},
	"items": [
	{
		"duration": 1.643700174044683,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 3.2132155435672396,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.8384251702680134,
		"scaleX": 0.2,
		"rotation": 219.08067513237503,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.2189468016386928,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_10",
	"tween": {
		"x": 3.7261883057979173,
		"y": 0,
		"rotation": 42.887925299878184,
		"scale": 0.7904960912210419,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 2.0445607360646925,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 3.413909821136201,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.8913041218195403,
		"scaleX": 0.2,
		"rotation": 278.10238679404273,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.260465078912499,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_11",
	"tween": {
		"x": 251.5365675815389,
		"y": 0,
		"rotation": 105.71981754072215,
		"scale": 0.5996499927669983,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 2.3072131773650764,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 3.2091667073690937,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.6024915102311181,
		"scaleX": 0.2,
		"rotation": 291.6024310737464,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.7511915600263748,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_12",
	"tween": {
		"x": 152.58118808963727,
		"y": 0,
		"rotation": 170.89687223991106,
		"scale": 0.6887390058510866,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 1.5222579281130497,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 3.09458664095461,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.438512198861315,
		"scaleX": 0.2,
		"rotation": 36.92030170448922,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.076170465133863,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_13",
	"tween": {
		"x": 265.4990551476613,
		"y": 0,
		"rotation": 5.095901733273895,
		"scale": 0.6395922086163947,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 1.354900527210563,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.9120301464925173,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.333433265871798,
		"scaleX": 0.2,
		"rotation": 14.279059758724628,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.1398818413556564,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_14",
	"tween": {
		"x": 213.08040573915346,
		"y": 0,
		"rotation": 176.4284345121825,
		"scale": 0.5464840738453457,
		"fill": "#8bc4ff"
	},
	"items": [
	{
		"duration": 2.045826225843342,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.8095596127540015,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.6074211715490443,
		"scaleX": 0.2,
		"rotation": 167.36357718498135,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.9782236510553901,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_15",
	"tween": {
		"x": 286.33787156544,
		"y": 0,
		"rotation": 138.12603551924332,
		"scale": 0.6551379261759006,
		"fill": "#0d539b"
	},
	"items": [
	{
		"duration": 1.3166916109205746,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.7808975428749405,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.0903833549685764,
		"scaleX": 0.2,
		"rotation": 206.89812913218617,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.8061811155480083,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_16",
	"tween": {
		"x": 274.72540911577426,
		"y": 0,
		"rotation": 113.58977748420295,
		"scale": 0.6758509320019891,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 2.2655725458832663,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 3.3657779318002845,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.45575174498454,
		"scaleX": 0.2,
		"rotation": 186.03392103215083,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.9862736482450802,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_17",
	"tween": {
		"x": 266.3455520224105,
		"y": 0,
		"rotation": 18.123317961697914,
		"scale": 0.877953185478888,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 2.2065246863064707,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.9488920542973511,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.2689660678386767,
		"scaleX": 0.2,
		"rotation": 196.94735994729933,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.010959611528729,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_18",
	"tween": {
		"x": 32.2122930892107,
		"y": 0,
		"rotation": 159.71641485409648,
		"scale": 0.6580062305404951,
		"fill": "#0d539b"
	},
	"items": [
	{
		"duration": 1.6110388494508618,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.5256727726867254,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.573252489981669,
		"scaleX": 0.2,
		"rotation": 271.36810759923856,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.9751059873020071,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_19",
	"tween": {
		"x": 22.68447586505189,
		"y": 0,
		"rotation": 80.41283886475864,
		"scale": 0.7768726304094402,
		"fill": "#0d539b"
	},
	"items": [
	{
		"duration": 1.2725463790059872,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.1519584054961203,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.782576997108914,
		"scaleX": 0.2,
		"rotation": 353.570879393723,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.5744228982710313,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_20",
	"tween": {
		"x": 6.289434586634912,
		"y": 0,
		"rotation": 97.95984864573866,
		"scale": 0.8743372079102381,
		"fill": "#2d73bb"
	},
	"items": [
	{
		"duration": 1.2900620813874384,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 0.5580460889394712,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.057209692720238,
		"scaleX": 0.2,
		"rotation": 180.84418782828197,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.5592413001324967,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_21",
	"tween": {
		"x": 102.4888061804267,
		"y": 0,
		"rotation": 92.94356294430666,
		"scale": 0.5170649802079436,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 2.287389518016472,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.982070792035908,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.170458345062228,
		"scaleX": 0.2,
		"rotation": 36.758362079403064,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.209010497277432,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_22",
	"tween": {
		"x": 60.05410393685546,
		"y": 0,
		"rotation": 45.91369439434581,
		"scale": 0.61852808642664,
		"fill": "#2d73bb"
	},
	"items": [
	{
		"duration": 1.0209709685662371,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 0.9605228980874467,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.129024573190857,
		"scaleX": 0.2,
		"rotation": 285.5415393358889,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.5782919523323584,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_23",
	"tween": {
		"x": 44.77707241869122,
		"y": 0,
		"rotation": 45.8300866624917,
		"scale": 0.8386866921682055,
		"fill": "#8bc4ff"
	},
	"items": [
	{
		"duration": 0.6886456366493596,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.2243679157815748,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.196060076323615,
		"scaleX": 0.2,
		"rotation": 63.40697058231967,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.131173981457071,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_24",
	"tween": {
		"x": 166.8316200427034,
		"y": 0,
		"rotation": 98.13406457368836,
		"scale": 0.9170834907041466,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 0.8574568179636044,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.2416503271522359,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.422865884304315,
		"scaleX": 0.2,
		"rotation": 72.7826067348856,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.3308685139773597,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_25",
	"tween": {
		"x": 113.5996183810854,
		"y": 0,
		"rotation": 167.1438443216696,
		"scale": 0.968097530986811,
		"fill": "#2d73bb"
	},
	"items": [
	{
		"duration": 2.4887047991462286,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.6951232900736806,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.7448525223386904,
		"scaleX": 0.2,
		"rotation": 118.07446118329074,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.6529189492163536,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_26",
	"tween": {
		"x": 219.28511284502233,
		"y": 0,
		"rotation": 169.9268332899437,
		"scale": 0.7039736590495013,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 0.770423897449553,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 0.6522850554653394,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.5918435441002434,
		"scaleX": 0.2,
		"rotation": 119.37535461323377,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.920506146073699,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_27",
	"tween": {
		"x": 130.97117739894836,
		"y": 0,
		"rotation": 160.25408317484258,
		"scale": 0.7753706576372966,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 0.5313882949321513,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 0.9384493337128685,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.2161106262257695,
		"scaleX": 0.2,
		"rotation": 307.96875430367726,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.796795542927633,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_28",
	"tween": {
		"x": 285.6364814135307,
		"y": 0,
		"rotation": 120.23518911432603,
		"scale": 0.6915896671474122,
		"fill": "#8bc4ff"
	},
	"items": [
	{
		"duration": 1.9979577547228722,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 0.7202687516115889,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.418557126653693,
		"scaleX": 0.2,
		"rotation": 70.85874507436222,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.6631521385956469,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_29",
	"tween": {
		"x": 63.57421326411652,
		"y": 0,
		"rotation": 142.58342035731332,
		"scale": 0.8108707898909387,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 0.7351086468275425,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 3.3210680766455374,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.3020958924893975,
		"scaleX": 0.2,
		"rotation": 266.2632166304213,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.4094204579103804,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_30",
	"tween": {
		"x": 187.94343108359107,
		"y": 0,
		"rotation": 131.14183352171997,
		"scale": 0.7945013406103272,
		"fill": "#0d539b"
	},
	"items": [
	{
		"duration": 1.7188431500967112,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 0.7286421042211004,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.291995185086844,
		"scaleX": 0.2,
		"rotation": 284.4072912609915,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.5429729444413238,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_31",
	"tween": {
		"x": 86.40658346977841,
		"y": 0,
		"rotation": 96.29549241189437,
		"scale": 0.6103841647963771,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 1.4761256091946415,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.5916396173808804,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.3897419759571905,
		"scaleX": 0.2,
		"rotation": 102.67483467572387,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.6495412112490762,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_32",
	"tween": {
		"x": 87.47529803638237,
		"y": 0,
		"rotation": 1.9720699038050737,
		"scale": 0.5633568410077525,
		"fill": "#2d73bb"
	},
	"items": [
	{
		"duration": 2.0963810336234734,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 3.2387369055556627,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.8461480928836573,
		"scaleX": 0.2,
		"rotation": 242.58620796006824,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.2429052661892857,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_33",
	"tween": {
		"x": 241.86863922611556,
		"y": 0,
		"rotation": 127.75674375969054,
		"scale": 0.6306558384554909,
		"fill": "#8bc4ff"
	},
	"items": [
	{
		"duration": 1.482663247386247,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 3.3302263700629053,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.323471351535252,
		"scaleX": 0.2,
		"rotation": 182.43545491998333,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.7519486581469093,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_34",
	"tween": {
		"x": 147.91820531852,
		"y": 0,
		"rotation": 114.40250521795335,
		"scale": 0.6401242379103158,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 1.0997138252201188,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.2081762510192977,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.9427701134019328,
		"scaleX": 0.2,
		"rotation": 129.95319447428366,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.914844522053107,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_35",
	"tween": {
		"x": 240.1281931759257,
		"y": 0,
		"rotation": 40.16447666593638,
		"scale": 0.9135742276482965,
		"fill": "#8bc4ff"
	},
	"items": [
	{
		"duration": 1.8634913278776697,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.203530921490259,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.4914779969682437,
		"scaleX": 0.2,
		"rotation": 94.0411738102857,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.6600793103585982,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_36",
	"tween": {
		"x": 270.03111214880704,
		"y": 0,
		"rotation": 15.173665491981044,
		"scale": 0.7087214349633751,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 1.9801896981595295,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.6972262223101586,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.552592440236769,
		"scaleX": 0.2,
		"rotation": 49.174415092608854,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.249600314633353,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_37",
	"tween": {
		"x": 237.377881265823,
		"y": 0,
		"rotation": 154.88417883804195,
		"scale": 0.6914708290133661,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 1.5772013303741046,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.4036155042696086,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.680622443933459,
		"scaleX": 0.2,
		"rotation": 257.03070928357573,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.7016939740080619,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_38",
	"tween": {
		"x": 27.79360691312931,
		"y": 0,
		"rotation": 103.46998781015846,
		"scale": 0.7169386100841253,
		"fill": "#0d539b"
	},
	"items": [
	{
		"duration": 2.035100121865741,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 0.9357029238537604,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.68357289631603,
		"scaleX": 0.2,
		"rotation": 239.51101717567627,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.2255625323072765,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_39",
	"tween": {
		"x": 298.37211224546866,
		"y": 0,
		"rotation": 13.522947842610415,
		"scale": 0.6976666768487412,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 0.5538344681414786,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.1885301851382284,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.1407776026202112,
		"scaleX": 0.2,
		"rotation": 41.89070043834509,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.5682734521646178,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_40",
	"tween": {
		"x": 141.93121554951247,
		"y": 0,
		"rotation": 159.26841183983987,
		"scale": 0.8460307220705039,
		"fill": "#0d539b"
	},
	"items": [
	{
		"duration": 2.099955086658085,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.647230344633189,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.6590301260197153,
		"scaleX": 0.2,
		"rotation": 50.76518811716316,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.00830121881795,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_41",
	"tween": {
		"x": 297.76721537868167,
		"y": 0,
		"rotation": 152.48841118216865,
		"scale": 0.8975971893729707,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 1.8817423779964297,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.3043358153904228,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.1421456751240098,
		"scaleX": 0.2,
		"rotation": 26.74546137190987,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.3344797081415307,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_42",
	"tween": {
		"x": 229.37844048196388,
		"y": 0,
		"rotation": 6.399246656114528,
		"scale": 0.6553569150119553,
		"fill": "#2d73bb"
	},
	"items": [
	{
		"duration": 1.6135537662505048,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.147876965896637,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.0720604120615693,
		"scaleX": 0.2,
		"rotation": 88.03517261888415,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.5561923640175077,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_43",
	"tween": {
		"x": 180.72836122372786,
		"y": 0,
		"rotation": 72.23655345508114,
		"scale": 0.7725763598095303,
		"fill": "#8bc4ff"
	},
	"items": [
	{
		"duration": 1.4026747107850803,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.8063437111824383,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.7712321446806034,
		"scaleX": 0.2,
		"rotation": 129.82484468208546,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.042299718422885,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_44",
	"tween": {
		"x": 156.2196796686261,
		"y": 0,
		"rotation": 27.697318747980365,
		"scale": 0.6802204247646428,
		"fill": "#2d73bb"
	},
	"items": [
	{
		"duration": 2.394021207083787,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.83379432463452,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.1066553741536644,
		"scaleX": 0.2,
		"rotation": 39.05304423510107,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.5771381265432589,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_45",
	"tween": {
		"x": 191.95949130864955,
		"y": 0,
		"rotation": 44.6300983402016,
		"scale": 0.6198602151548764,
		"fill": "#8bc4ff"
	},
	"items": [
	{
		"duration": 1.516038725764267,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.0500614718985954,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.0804846102264365,
		"scaleX": 0.2,
		"rotation": 204.89242563290875,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.6603937787961558,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_46",
	"tween": {
		"x": 117.7392134434877,
		"y": 0,
		"rotation": 51.803759665445874,
		"scale": 0.7843678436011807,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 1.7576319612566804,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.6451645997764697,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 2.6941509276598254,
		"scaleX": 0.2,
		"rotation": 222.12267934946894,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.9881166639877643,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_47",
	"tween": {
		"x": 56.003496263653616,
		"y": 0,
		"rotation": 109.52722662129703,
		"scale": 0.7618454811447666,
		"fill": "#bdddff"
	},
	"items": [
	{
		"duration": 1.1748802870867348,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 1.5833556462250458,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.9836526353039592,
		"scaleX": 0.2,
		"rotation": 117.56269926159078,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 1.2747923039635174,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_48",
	"tween": {
		"x": 144.22520593198448,
		"y": 0,
		"rotation": 25.646891968945212,
		"scale": 0.7628449709086151,
		"fill": "#0d539b"
	},
	"items": [
	{
		"duration": 1.0970051648769013,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 2.741843418570391,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.2927818709918633,
		"scaleX": 0.2,
		"rotation": 62.16843319070403,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.9870992595511048,
		"repeat": 6,
		"yoyo": true
	}
	]
},
{
	"elm": ".dot_49",
	"tween": {
		"x": 79.8571410232013,
		"y": 0,
		"rotation": 53.123377536578815,
		"scale": 0.9564504563126897,
		"fill": "#3f1fff"
	},
	"items": [
	{
		"duration": 1.7027923230979543,
		"y": 270,
		"repeat": 6,
		"delay": -5
	},
	{
		"duration": 0.5162098645136168,
		"x": "+=70",
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 3.1765103893524405,
		"scaleX": 0.2,
		"rotation": 180.47062665038706,
		"repeat": 6,
		"yoyo": true
	},
	{
		"duration": 0.9424877266687597,
		"repeat": 6,
		"yoyo": true
	}
	]
}
]



export {size, init, start}



