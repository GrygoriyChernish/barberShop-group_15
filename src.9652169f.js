parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/about/abouttab1.jpg":[["abouttab1.f897d9ae.jpg","znw0"],"znw0"],"./../images/about/abouttab1@2x.jpg":[["abouttab1@2x.41d947aa.jpg","rXX2"],"rXX2"],"./../images/about/about1.jpg":[["about1.b6eeb5e1.jpg","Qs7e"],"Qs7e"],"./../images/about/about1@2x.jpg":[["about1@2x.8273d85a.jpg","vNqe"],"vNqe"],"./../images/about/abouttab2.jpg":[["abouttab2.2f5d3abc.jpg","Sema"],"Sema"],"./../images/about/abouttab2@2x.jpg":[["abouttab2@2x.077e04dd.jpg","Hx9s"],"Hx9s"],"./../images/about/about2.jpg":[["about2.62667dea.jpg","jPoo"],"jPoo"],"./../images/about/about2@2x.jpg":[["about2@2x.490d396d.jpg","qSAZ"],"qSAZ"],"./../images/price/pricemob.jpg":[["pricemob.7785d48c.jpg","Kcum"],"Kcum"],"./../images/price/pricemob@2x.jpg":[["pricemob@2x.cbeb48ce.jpg","Sv0T"],"Sv0T"],"./../images/price/pricemob@3x.jpg":[["pricemob@3x.49e46028.jpg","lqUF"],"lqUF"],"./../images/price/pricetab.jpg":[["pricetab.ea0eeeb9.jpg","eZBU"],"eZBU"],"./../images/price/pricetab@2x.jpg":[["pricetab@2x.281a9614.jpg","MEwf"],"MEwf"],"./../images/price/pricetab@3x.jpg":[["pricetab@3x.5c84e0b0.jpg","SMAu"],"SMAu"],"./../images/price/pricedesk.jpg":[["pricedesk.ec6375c5.jpg","Jj2u"],"Jj2u"],"./../images/price/pricedesk@2x.jpg":[["pricedesk@2x.35627916.jpg","GcaC"],"GcaC"],"./../images/price/pricedesk@3x.jpg":[["pricedesk@3x.198d2b79.jpg","wJ7Z"],"wJ7Z"],"./../images/contacts/mobile.png":[["mobile.69069c63.png","zXeZ"],"zXeZ"],"./../images/contacts/mobile@2x.png":[["mobile@2x.2b8ee1b1.png","T7fg"],"T7fg"],"./../images/contacts/tablet.png":[["tablet.a77459dd.png","Emmx"],"Emmx"],"./../images/contacts/tablet@2x.png":[["tablet@2x.12534e7d.png","JRtq"],"JRtq"],"./../images/contacts/desktop.png":[["desktop.008ac020.png","teD5"],"teD5"],"./../images/contacts/desktop@2x.png":[["desktop@2x.ba26e05b.png","Br6M"],"Br6M"]}],"gVZh":[function(require,module,exports) {
var define;
var e;!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof e&&e.amd?e("Siema",[],i):"object"==typeof exports?exports.Siema=i():t.Siema=i()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),s=function(){function e(t){var i=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return n(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var i=document.createDocumentFragment();if(this.config.loop)for(var r=this.innerElements.length-this.perPage;r<this.innerElements.length;r++){var n=this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));i.appendChild(n)}for(var s=0;s<this.innerElements.length;s++){var l=this.buildSliderFrameItem(this.innerElements[s]);i.appendChild(l)}if(this.config.loop)for(var o=0;o<this.perPage;o++){var a=this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));i.appendChild(a)}this.sliderFrame.appendChild(i),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===r(this.config.perPage))for(var e in this.perPage=1,this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop)if(this.currentSlide-e<0){this.disableTransition();var r=this.currentSlide+this.innerElements.length,n=r+this.perPage,s=(this.config.rtl?1:-1)*n*(this.selectorWidth/this.perPage),l=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(s+l)+"px, 0, 0)",this.currentSlide=r-e}else this.currentSlide=this.currentSlide-e;else this.currentSlide=Math.max(this.currentSlide-e,0);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop)if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var r=this.currentSlide-this.innerElements.length,n=r+this.perPage,s=(this.config.rtl?1:-1)*n*(this.selectorWidth/this.perPage),l=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(s+l)+"px, 0, 0)",this.currentSlide=r+e}else this.currentSlide=this.currentSlide+e;else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(e){var t=this,i=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,r=(this.config.rtl?1:-1)*i*(this.selectorWidth/this.perPage);e?requestAnimationFrame(function(){requestAnimationFrame(function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+r+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+r+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),i=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,r=e>0&&this.currentSlide-i<0,n=e<0&&this.currentSlide+i>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent(r||n)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),i=this.drag.endX-this.drag.startX,r=this.config.rtl?t+i:t-i;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*r+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),i=this.drag.endX-this.drag.startX,r=this.config.rtl?t+i:t-i;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*r+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var i=e<this.currentSlide,r=this.currentSlide+this.perPage-1===e;(i||r)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var r=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=r?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",e){for(var i=document.createDocumentFragment(),r=0;r<this.innerElements.length;r++)i.appendChild(this.innerElements[r]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},i=e;for(var r in i)t[r]=i[r];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=s,e.exports=t.default}])});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=t(require("siema"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw s}}}}function o(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var i=new e.default({});document.querySelector(".prev").addEventListener("click",function(){return i.prev()}),document.querySelector(".next").addEventListener("click",function(){return i.next()}),function(){var e={menuBtn:document.querySelector("[data-menu-button]"),closeBtn1:document.querySelector("[data-menu-close-1]"),closeBtn2:document.querySelector("[data-menu-close-2]"),closeBtn3:document.querySelector("[data-menu-close-3]"),closeBtn4:document.querySelector("[data-menu-close-4]"),closeBtn5:document.querySelector("[data-menu-close-5]"),mobileMenu:document.querySelector("[data-menu]"),sideBar:document.querySelector("[data-sideBar]")};e.menuBtn.addEventListener("click",function(){var t="true"===e.menuBtn.getAttribute("aria-expanded")||!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!t),e.mobileMenu.classList.toggle("is-visible"),e.sideBar.classList.toggle("is-open"),document.body.classList.toggle("modal-open")}),e.closeBtn1.addEventListener("click",function(){var t="true"===e.menuBtn.getAttribute("aria-expanded")||!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!t),e.mobileMenu.classList.toggle("is-visible"),e.sideBar.classList.toggle("is-open"),document.body.classList.toggle("modal-open")}),e.closeBtn2.addEventListener("click",function(){var t="true"===e.menuBtn.getAttribute("aria-expanded")||!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!t),e.mobileMenu.classList.toggle("is-visible"),e.sideBar.classList.toggle("is-open"),document.body.classList.toggle("modal-open")}),e.closeBtn3.addEventListener("click",function(){var t="true"===e.menuBtn.getAttribute("aria-expanded")||!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!t),e.mobileMenu.classList.toggle("is-visible"),e.sideBar.classList.toggle("is-open"),document.body.classList.toggle("modal-open")}),e.closeBtn4.addEventListener("click",function(){var t="true"===e.menuBtn.getAttribute("aria-expanded")||!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!t),e.mobileMenu.classList.toggle("is-visible"),e.sideBar.classList.toggle("is-open"),document.body.classList.toggle("modal-open")}),e.closeBtn5.addEventListener("click",function(){var t="true"===e.menuBtn.getAttribute("aria-expanded")||!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!t),e.mobileMenu.classList.toggle("is-visible"),e.sideBar.classList.toggle("is-open"),document.body.classList.toggle("modal-open")})}();var s,a=document.querySelectorAll('a[href*="#"]'),l=n(a);try{var u=function(){var e=s.value;e.addEventListener("click",function(t){t.preventDefault();var n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})})};for(l.s();!(s=l.n()).done;)u()}catch(c){l.e(c)}finally{l.f()}
},{"./sass/main.scss":"clu1","siema":"gVZh"}]},{},["Focm"], null)
//# sourceMappingURL=/barberShop-group_15/src.9652169f.js.map