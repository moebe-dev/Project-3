"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _mobx=require("mobx");function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var UserStore=function e(){_classCallCheck(this,e),(0,_mobx.extendObservable)(this,{loading:!0,isLoggedIn:!1,username:""})},_default=new UserStore;exports.default=_default;