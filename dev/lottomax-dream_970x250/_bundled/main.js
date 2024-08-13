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

function pan(tl, a, b, delay) {

	var TIME_XXX = w / 300;
	var TIME = Math.min(TIME_XXX * .7, 1.1);
	// TIME = Math.max(TIME, 1.3)

	tl.set(b, { opacity: 1 });
	tl.add(a, delay);
	tl.to(a, { duration: TIME, x: -w, ease: "power4.out" }, a);
	tl.from(b, { duration: TIME, x: w, ease: "power4.out" }, a);
}

function start(data) {

	// const read

	var tl = init();
	var TIME_XXX = h / 250;
	var TIME = Math.min(TIME_XXX * 2, 2.8);
	TIME = Math.max(TIME, 1.3);

	var F1_Y = -250;

	tl.add("lax-1");
	tl.to(".f1-bg_1", { duration: TIME * 1.2, y: 0 }, "lax-1");
	tl.from(".f1-balloon-1", { y: F1_Y, duration: TIME * .8, ease: ease }, "lax-1");
	tl.from(".f1-balloon-2", { y: F1_Y, duration: TIME * .9, ease: ease }, "lax-1");
	tl.from(".f1-balloon-3", { y: F1_Y, duration: TIME * 1, ease: ease }, "lax-1");
	tl.from(".f1-txt", { y: F1_Y, duration: TIME * 1.1, ease: "back.out" }, "lax-1");
	tl.from(".f1-max", { y: F1_Y, duration: TIME * 1.2, ease: ease }, "lax-1");

	pan(tl, ".frame1", '.frame2', "+=.5");

	tl.from(".f2-txta", { duration: .3, x: -100, y: "+=20", opacity: 0, ease: "back.out" });
	tl.from(".f2-txtb", { duration: .3, x: -100, y: "+=20", opacity: 0, ease: "back.out" });

	pan(tl, ".frame2", '.frame3', "+=2");

	tl.from(".f3-txta", { duration: .5, y: "+=20", x: -100, opacity: 0, ease: "back.out" }, "-=.3");
	tl.from(".f3-txtb", { duration: .5, opacity: 0, ease: "back.out" });

	pan(tl, ".frame3", '.frame4', "+=2.3");

	tl.from(".f4-o", { duration: .5, scale: 0, rotate: 70, ease: "back.out" });

	tl.add("end", "+=.3");
	tl.from(".f4-cta", { duration: .3, opacity: 0, ease: "back.out" }, "end");
	tl.add((0, _proline.olg)(), "end");

	// tl.play(".frame3")
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

// document.getElementById("man").className = "retina man"
gsap.set("#EF_cta", { x: -475, y: -200, transformOrigin: "950px 400px" });
(0, _commonJsCommonJs.start)({ manScale: false, olgY: 135, ball_time: .5, ball_ease: 3.1 });

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
