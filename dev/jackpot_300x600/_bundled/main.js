(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var READ = {
	t1: 2.5,
	t2a: 2.8,
	t2b: 2.3
};

var w = size.w;
var h = size.h;

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

var data_ = {};
var ease = "power2.out";

function start(data) {

	var tl = init();

	tl.set(".end_record", { x: -900, y: 78 });

	tl.from(".start_txta", { duration: .3, x: "-=200", y: "+=20", opacity: 0 }, "+=.2");
	tl.from(".start_txtb", { duration: .3, x: "-=200", y: "+=20", opacity: 0 });
	tl.from(".start_txtc", { duration: .3, x: "-=200", y: "+=20", opacity: 0 });

	tl.from(".start_hand", { duration: .6, ease: "power3.out", y: 250 });

	tl.add("f2", "+=1.2");
	tl.set(".frame2", { opacity: 1 });
	tl.to(".frame1", { duration: .6, y: -250 }, "f2");
	tl.from(".frame2", { duration: .6, y: 250 }, "f2");
	tl.add(confetti, "f2");

	tl.from(".end_0", { duration: .6, y: -size.h }, "+=.3");
	tl.from(".end_1", { duration: .3, opacity: 0, x: "-=50" }, "+=.3");
	tl.from(".end_2", { duration: .3, opacity: 0, x: "-=50" });
	tl.from([".end_3", ".end_cta"], { duration: .3, opacity: 0 }, "+=.2");

	tl.from(".bg", { duration: .6, opacity: 0 });

	tl.add("ticker");

	tl.to(".end_record", { ease: "none", duration: .5, x: -600, y: 52 }, "ticker");
	tl.to(".end_record", { ease: "none", duration: 2, x: 0, y: 0 });
	tl.from(".end_logo", { duration: .3, opacity: 0 }, "ticker+=1");
	tl.from(".end_smart", { duration: .3, opacity: 0 }, "ticker+=1");
	tl.add(_proline.olg, "ticker+=1.5");
}

function confetti() {

	var svgNS = "http://www.w3.org/2000/svg";

	var total = 50;
	var w = 300;
	var h = 250;
	var colors = ["#bdddff", "#2d73bb", "#0d539b", "#8bc4ff", "#3f1fff"];
	var REPEAT = 6;
	for (var i = 0; i < total; i++) {
		var color = Math.floor(Math.random() * colors.length);
		console.log(color);
		var className = "dot_" + i;
		var myCircle = document.createElementNS(svgNS, "rect");
		myCircle.setAttributeNS(null, "class", className);
		myCircle.setAttributeNS(null, "width", 4);
		myCircle.setAttributeNS(null, "height", 6);
		document.getElementById("mySVG").appendChild(myCircle);
		TweenMax.set("." + className, { x: Random(w), y: 0, rotation: Random(180), scale: Random(0.5) + 0.5, fill: colors[color] });
		animm("." + className);
	}

	function animm(elm) {
		TweenMax.to(elm, Random(2) + .5, { y: h + 20, ease: Linear.easeNone, repeat: REPEAT, delay: -5 });
		TweenMax.to(elm, Random(3) + .5, { x: '+=70', repeat: REPEAT, yoyo: true, ease: Sine.easeInOut });
		TweenMax.to(elm, Random(3) + .5, { scaleX: 0.2, rotation: Random(360), repeat: REPEAT, yoyo: true, ease: Sine.easeInOut });
		TweenMax.to(elm, Random(1) + 0.5, { repeat: REPEAT, yoyo: true, ease: Sine.easeInOut });
	};

	function Random(max) {
		return Math.random() * max;
	}

	function random(min, max) {
		return min + Math.floor(Math.random() * (max - min));
	}
}

exports.size = size;
exports.init = init;
exports.start = start;

},{"./proline":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],3:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

gsap.set("#EF_cta", { x: -150, y: -360, transformOrigin: "300px 720px" });
(0, _commonJsCommonJs.start)();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
