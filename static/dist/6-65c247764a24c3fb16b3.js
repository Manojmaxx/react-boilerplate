webpackJsonp([6],{379:function(e,t,l){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,r,o,c=l(63),d=u(c),i=l(13),s=u(i),f=l(64),p=u(f),m=l(14),h=u(m),v=l(15),g=u(v),E=l(0),y=u(E),_=l(2),w=u(_),b=l(21),j=l(222),O=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(j),k=(n=(0,b.connect)(function(e){return{user:e.auth.user}},O))((o=r=function(e){function t(){return(0,s.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,l=e.logout;return t&&y.default.createElement("div",{className:"container"},y.default.createElement("h1",null,"Login Success"),y.default.createElement("div",null,y.default.createElement("p",null,"Hi, ",t.email,". You have just successfully logged in, and were forwarded here by"," ",y.default.createElement("code",null,"componentWillReceiveProps()")," in ",y.default.createElement("code",null,"App.js"),", which is listening to the auth reducer via redux ",y.default.createElement("code",null,"@connect"),". How exciting!"),y.default.createElement("p",null,"The same function will forward you to ",y.default.createElement("code",null,"/")," should you chose to log out. The choice is yours..."),y.default.createElement("div",null,y.default.createElement("button",{className:"btn btn-danger",onClick:l},y.default.createElement("i",{className:"fa fa-sign-out"})," Log Out"))))}}]),t}(E.Component),r.propTypes={user:w.default.shape({email:w.default.string}).isRequired,logout:w.default.func.isRequired},a=o))||a;t.default=k,e.exports=t.default}});