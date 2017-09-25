!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueElevator=factory():root.VueElevator=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){__webpack_require__(5);var Component=__webpack_require__(6)(__webpack_require__(4),__webpack_require__(7),null,null);module.exports=Component.exports},function(module,exports){var Elevator=function(options){"use strict";function easeInOutQuad(t,b,c,d){return(t/=d/2)<1?c/2*t*t+b:(t--,-c/2*(t*(t-2)-1)+b)}function extendParameters(options,defaults){for(var option in defaults){void 0===options[option]&&"function"!=typeof option&&(options[option]=defaults[option])}return options}function getVerticalOffset(element){for(var verticalOffset=0;element;)verticalOffset+=element.offsetTop||0,element=element.offsetParent;return verticalPadding&&(verticalOffset-=verticalPadding),verticalOffset}function animateLoop(time){startTime||(startTime=time);var timeSoFar=time-startTime,easedPosition=easeInOutQuad(timeSoFar,startPosition,endPosition-startPosition,duration);window.scrollTo(0,easedPosition),timeSoFar<duration?animation=requestAnimationFrame(animateLoop):animationFinished()}function browserMeetsRequirements(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function resetPositions(){startTime=null,startPosition=null,elevating=!1}function updateEndPosition(){targetElement&&(endPosition=getVerticalOffset(targetElement))}function animationFinished(){resetPositions(),mainAudio&&(mainAudio.pause(),mainAudio.currentTime=0),endAudio&&endAudio.play(),endCallback&&endCallback()}function onWindowBlur(){elevating&&(cancelAnimationFrame(animation),resetPositions(),mainAudio&&(mainAudio.pause(),mainAudio.currentTime=0),updateEndPosition(),window.scrollTo(0,endPosition))}function bindElevateToElement(element){element.addEventListener?element.addEventListener("click",that.elevate,!1):element.attachEvent("onclick",function(){updateEndPosition(),document.documentElement.scrollTop=endPosition,document.body.scrollTop=endPosition,window.scroll(0,endPosition)})}var startCallback,mainAudio,endAudio,endCallback,body=null,animation=null,duration=null,customDuration=!1,startTime=null,startPosition=null,endPosition=0,targetElement=null,verticalPadding=null,elevating=!1,that=this;this.elevate=function(){elevating||(elevating=!0,startPosition=document.documentElement.scrollTop||body.scrollTop,updateEndPosition(),customDuration||(duration=1.5*Math.abs(endPosition-startPosition)),requestAnimationFrame(animateLoop),mainAudio&&mainAudio.play(),startCallback&&startCallback())},function(_options){body=document.body,_options=extendParameters(_options,{duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null}),_options.element&&bindElevateToElement(_options.element),browserMeetsRequirements()&&(_options.duration&&(customDuration=!0,duration=_options.duration),_options.targetElement&&(targetElement=_options.targetElement),_options.verticalPadding&&(verticalPadding=_options.verticalPadding),window.addEventListener("blur",onWindowBlur,!1),_options.mainAudio&&(mainAudio=new Audio(_options.mainAudio),mainAudio.setAttribute("preload",_options.preloadAudio),mainAudio.setAttribute("loop",_options.loopAudio)),_options.endAudio&&(endAudio=new Audio(_options.endAudio),endAudio.setAttribute("preload","true")),_options.endCallback&&(endCallback=_options.endCallback),_options.startCallback&&(startCallback=_options.startCallback))}(options)};module.exports=Elevator},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue){Vue.component("VueElevator",__WEBPACK_IMPORTED_MODULE_0__components_vue_elevator_vue___default.a)}__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_vue_elevator_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__components_vue_elevator_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vue_elevator_vue__);__webpack_require__.d(__webpack_exports__,"VueElevator",function(){return __WEBPACK_IMPORTED_MODULE_0__components_vue_elevator_vue___default.a});var plugin={version:"1.1.4",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}.call(__webpack_exports__,__webpack_require__(0))},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_elevator_js__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_0_elevator_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_elevator_js__);__webpack_exports__.default={props:{word:{type:String,required:!1,default:"Go to Top"},duration:{type:Number,required:!1,default:4e3},mainAudio:{type:String,required:!1,default:"http://tholman.com/elevator.js/music/elevator.mp3"},endAudio:{type:String,required:!1,default:"http://tholman.com/elevator.js/music/ding.mp3"}},data:function(){return{elevator:null}},mounted:function(){this.elevatorUp()},methods:{elevatorUp:function(){this.elevator=new __WEBPACK_IMPORTED_MODULE_0_elevator_js___default.a({element:this.$refs.elevatorup,duration:this.duration,mainAudio:this.mainAudio,endAudio:this.endAudio})}}}},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{attrs:{id:"app"}},[_c("div",{ref:"elevatorup",staticClass:"elevator-button"},[_c("svg",{staticClass:"sweet-svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve",height:"100px",width:"100px"}},[_c("path",{attrs:{d:"M70,47.5H30c-1.4,0-2.5,1.1-2.5,2.5v40c0,1.4,1.1,2.5,2.5,2.5h40c1.4,0,2.5-1.1,2.5-2.5V50C72.5,48.6,71.4,47.5,70,47.5z   M47.5,87.5h-5v-25h5V87.5z M57.5,87.5h-5v-25h5V87.5z M67.5,87.5h-5V60c0-1.4-1.1-2.5-2.5-2.5H40c-1.4,0-2.5,1.1-2.5,2.5v27.5h-5  v-35h35V87.5z"}}),_vm._v(" "),_c("path",{attrs:{d:"M50,42.5c1.4,0,2.5-1.1,2.5-2.5V16l5.7,5.7c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7c1-1,1-2.6,0-3.5l-10-10  c-1-1-2.6-1-3.5,0l-10,10c-1,1-1,2.6,0,3.5c1,1,2.6,1,3.5,0l5.7-5.7v24C47.5,41.4,48.6,42.5,50,42.5z"}})]),_vm._v("\n    "+_vm._s(_vm.word)+"\n  ")])])},staticRenderFns:[]}}])});