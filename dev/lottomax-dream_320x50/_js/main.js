


import {init, start} from '../../_common/js/common.js'

gsap.set("#EF_cta", {x:-160, y:-25, transformOrigin:"320px 50px"})
document.getElementById("money").className = "shadow f2-txtb retina"
console.log(document.getElementById("money"));
// gsap.set("#money", { className:"shadow f2-txtb retina"})
start({manScale:false, olgY:70})



module.exports = {};

