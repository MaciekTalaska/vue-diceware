(function(t){function e(e){for(var n,s,l=e[0],i=e[1],u=e[2],c=0,d=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-diceware/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},4829:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("generator"),r("projectInfo")],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Diceware Password Generator in Vue")]),r("div",{staticClass:"container"},[r("div",[r("label",{staticClass:"column-left",attrs:{for:"language_ctrl"}},[t._v("language:")]),r("select",{staticClass:"column-right",attrs:{id:"language_ctrl"},domProps:{value:t.language},on:{change:t.updateLanguage}},[r("option",{attrs:{value:"en"}},[t._v("English")]),r("option",{attrs:{value:"fi"}},[t._v("Finnish")]),r("option",{attrs:{value:"mi"}},[t._v("Maori")]),r("option",{attrs:{value:"pl"}},[t._v("Polish")])])]),r("div",[r("label",{staticClass:"column-left",attrs:{for:"password_ctrl"}},[t._v("words per password (4-10):")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordLength,expression:"passwordLength"}],staticClass:"column-right",attrs:{id:"password_ctrl",type:"number",onkeyup:"this.value=this.value.replace(/[^\\d]/,'');",min:t.MIN_PASS_LENGTH,max:t.MAX_PASS_LENGTH},domProps:{value:t.passwordLength},on:{change:t.updatePasswordLength,input:function(e){e.target.composing||(t.passwordLength=e.target.value)}}})]),r("div",[r("label",{staticClass:"column-left",attrs:{for:"separator_ctrl"}},[t._v("separator:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.separator,expression:"separator"}],staticClass:"column-right",attrs:{id:"separator_ctrl"},domProps:{value:t.separator},on:{input:function(e){e.target.composing||(t.separator=e.target.value)}}})]),r("div",[r("button",{on:{click:t.generatePassword}},[t._v(" Generate password ")])]),r("password",{attrs:{password:t.password}})],1)])},l=[];let i=function(t){let e=location.href+"diceware-"+t+".txt";return p(e).then(t=>t)};function u(t){let e=Array.from(t.split(/\n/)),r=null;return e.forEach((t,n)=>{let[a,o]=t.split(/\s+/);null==r&&(r=new Array(e.length)),r[n]=o||a}),r}function p(t){return new Promise(e=>{let r=new Headers;r.append("Content-type","text/plain; charset=UTF-8"),fetch(t,r).then(t=>t.text()).then(t=>{let r=u(t);e(r)})})}var c=i;let d=function(){let t=new Uint32Array(1);return window.crypto.getRandomValues(t),t[0]};var g=d,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("textarea",{staticClass:"password-area",attrs:{id:"passwordArea",readonly:"",rows:"1"},domProps:{value:t.password}}),t._v(" "),r("button",{on:{click:t.copyPasswordToClipboard}},[t._v("copy to clipboard")])])},h=[],v={name:"display",props:{password:String},methods:{copyPasswordToClipboard:function(){let t=document.getElementById("passwordArea");t.select(),document.execCommand("copy"),t.selectionStart=t.selectionEnd}}},w=v,m=r("2877"),_=Object(m["a"])(w,f,h,!1,null,null,null),b=_.exports;const y=10,P=4,L=6;var S={name:"generator",components:{password:b},data(){return{password:String,repository:new Map,passwordLength:String,language:String,separator:String,MAX_PASS_LENGTH:y,MIN_PASS_LENGTH:P}},created(){this.language="en",this.separator=".",this.passwordLength=L,this.password=""},mounted(){this.updateLanguageInternal(this.language)},methods:{updateLanguageInternal:function(t){c(t).then(t=>{this.repository.set(this.language,t)})},updateLanguage:function(t){let e=t.target.value;this.language=e,this.repository.has(e)||this.updateLanguageInternal(e)},updatePasswordLength:function(t){let e=Number(t.target.value);e=e>y?y:e,e=e<P?P:e,e!=this.passwordLength&&(this.passwordLength=e)},generatePassword:function(){this.password="";let t=this.repository.get(this.language),e=new Array(this.passwordLength);e=e.fill().map(()=>t[g()%t.length]),this.password=e.join(this.separator)}}},j=S,x=(r("b94f"),Object(m["a"])(j,s,l,!1,null,null,null)),O=x.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("small",[r("p",[t._v(" this project on github: "),r("a",{attrs:{href:"https://github.com/MaciekTalaska/vue-diceware"}},[t._v("vue-diceware")])])])}],C={name:"projectInfo"},M=C,T=Object(m["a"])(M,A,E,!1,null,null,null),I=T.exports,N={name:"App",components:{generator:O,projectInfo:I}},k=N,G=(r("034f"),Object(m["a"])(k,a,o,!1,null,null,null)),H=G.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(H),el:"#root"})},"85ec":function(t,e,r){},b94f:function(t,e,r){"use strict";var n=r("4829"),a=r.n(n);a.a}});
//# sourceMappingURL=app.7b0a0ac5.js.map