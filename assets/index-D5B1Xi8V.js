const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-CepRs5w-.js","assets/AboutView-C6Dx7pxG.css"])))=>i.map(i=>d[i]);
var Sd=Object.defineProperty;var Ed=(n,e,t)=>e in n?Sd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var oi=(n,e,t)=>Ed(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Sl(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const nt={},rr=[],hn=()=>{},yd=()=>!1,ho=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),El=n=>n.startsWith("onUpdate:"),xt=Object.assign,yl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Td=Object.prototype.hasOwnProperty,et=(n,e)=>Td.call(n,e),ze=Array.isArray,sr=n=>po(n)==="[object Map]",hf=n=>po(n)==="[object Set]",He=n=>typeof n=="function",ht=n=>typeof n=="string",ti=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",df=n=>(st(n)||He(n))&&He(n.then)&&He(n.catch),pf=Object.prototype.toString,po=n=>pf.call(n),bd=n=>po(n).slice(8,-1),mf=n=>po(n)==="[object Object]",Tl=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ur=Sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ad=/-(\w)/g,bi=mo(n=>n.replace(Ad,(e,t)=>t?t.toUpperCase():"")),wd=/\B([A-Z])/g,Ci=mo(n=>n.replace(wd,"-$1").toLowerCase()),gf=mo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Uo=mo(n=>n?`on${gf(n)}`:""),Jn=(n,e)=>!Object.is(n,e),ks=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},_f=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ya=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let uc;const vf=()=>uc||(uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bl(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?Ld(i):bl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||st(n))return n}const Rd=/;(?![^(]*\))/g,Cd=/:([^]+)/,Pd=/\/\*[^]*?\*\//g;function Ld(n){const e={};return n.replace(Pd,"").split(Rd).forEach(t=>{if(t){const i=t.split(Cd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Al(n){let e="";if(ht(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=Al(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Id=Sl(Dd);function xf(n){return!!n||n===""}const Mf=n=>!!(n&&n.__v_isRef===!0),Ta=n=>ht(n)?n:n==null?"":ze(n)||st(n)&&(n.toString===pf||!He(n.toString))?Mf(n)?Ta(n.value):JSON.stringify(n,Sf,2):String(n),Sf=(n,e)=>Mf(e)?Sf(n,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[No(i,s)+" =>"]=r,t),{})}:hf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>No(t))}:ti(e)?No(e):st(e)&&!ze(e)&&!mf(e)?String(e):e,No=(n,e="")=>{var t;return ti(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class Ef{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ud(n){return new Ef(n)}function Nd(){return Bt}let it;const Fo=new WeakSet;class yf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fo.has(this)&&(Fo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Nr,Nr=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fc(this),bf(this);const e=it,t=nn;it=this,nn=!0;try{return this.fn()}finally{Af(this),it=e,nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cl(e);this.deps=this.depsTail=void 0,fc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ba(this)&&this.run()}get dirty(){return ba(this)}}let Tf=0,Nr;function wl(){Tf++}function Rl(){if(--Tf>0)return;let n;for(;Nr;){let e=Nr;for(Nr=void 0;e;){const t=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function bf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Af(n){let e,t=n.depsTail;for(let i=t;i;i=i.prevDep)i.version===-1?(i===t&&(t=i.prevDep),Cl(i),Fd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0;n.deps=e,n.depsTail=t}function ba(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&wf(e.dep.computed)===!1||e.dep.version!==e.version)return!0;return!!n._dirty}function wf(n){if(n.flags&2)return!1;if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Xr))return;n.globalVersion=Xr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&!ba(n)){n.flags&=-3;return}const t=it,i=nn;it=n,nn=!0;try{bf(n);const r=n.fn();(e.version===0||Jn(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=t,nn=i,Af(n),n.flags&=-3}}function Cl(n){const{dep:e,prevSub:t,nextSub:i}=n;if(t&&(t.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=t,n.nextSub=void 0),e.subs===n&&(e.subs=t),!e.subs&&e.computed){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Cl(r)}}function Fd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let nn=!0;const Rf=[];function ni(){Rf.push(nn),nn=!1}function ii(){const n=Rf.pop();nn=n===void 0?!0:n}function fc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Xr=0;class Pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!it||!nn)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink={dep:this,sub:it,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,it.flags&4&&Cf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Xr++,this.notify(e)}notify(e){wl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()}finally{Rl()}}}function Cf(n){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Cf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}const Aa=new WeakMap,yi=Symbol(""),wa=Symbol(""),qr=Symbol("");function yt(n,e,t){if(nn&&it){let i=Aa.get(n);i||Aa.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=new Pl),r.track()}}function Ln(n,e,t,i,r,s){const o=Aa.get(n);if(!o){Xr++;return}let a=[];if(e==="clear")a=[...o.values()];else{const l=ze(n),c=l&&Tl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===qr||!ti(h)&&h>=u)&&a.push(f)})}else{const u=f=>f&&a.push(f);switch(t!==void 0&&u(o.get(t)),c&&u(o.get(qr)),e){case"add":l?c&&u(o.get("length")):(u(o.get(yi)),sr(n)&&u(o.get(wa)));break;case"delete":l||(u(o.get(yi)),sr(n)&&u(o.get(wa)));break;case"set":sr(n)&&u(o.get(yi));break}}}wl();for(const l of a)l.trigger();Rl()}function Li(n){const e=tt(n);return e===n?e:(yt(e,"iterate",qr),rn(n)?e:e.map(wt))}function Ll(n){return yt(n=tt(n),"iterate",qr),n}const Od={__proto__:null,[Symbol.iterator](){return Oo(this,Symbol.iterator,wt)},concat(...n){return Li(this).concat(...n.map(e=>ze(e)?Li(e):e))},entries(){return Oo(this,"entries",n=>(n[1]=wt(n[1]),n))},every(n,e){return gn(this,"every",n,e,void 0,arguments)},filter(n,e){return gn(this,"filter",n,e,t=>t.map(wt),arguments)},find(n,e){return gn(this,"find",n,e,wt,arguments)},findIndex(n,e){return gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return gn(this,"findLast",n,e,wt,arguments)},findLastIndex(n,e){return gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Bo(this,"includes",n)},indexOf(...n){return Bo(this,"indexOf",n)},join(n){return Li(this).join(n)},lastIndexOf(...n){return Bo(this,"lastIndexOf",n)},map(n,e){return gn(this,"map",n,e,void 0,arguments)},pop(){return yr(this,"pop")},push(...n){return yr(this,"push",n)},reduce(n,...e){return hc(this,"reduce",n,e)},reduceRight(n,...e){return hc(this,"reduceRight",n,e)},shift(){return yr(this,"shift")},some(n,e){return gn(this,"some",n,e,void 0,arguments)},splice(...n){return yr(this,"splice",n)},toReversed(){return Li(this).toReversed()},toSorted(n){return Li(this).toSorted(n)},toSpliced(...n){return Li(this).toSpliced(...n)},unshift(...n){return yr(this,"unshift",n)},values(){return Oo(this,"values",wt)}};function Oo(n,e,t){const i=Ll(n),r=i[e]();return i!==n&&!rn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Bd=Array.prototype;function gn(n,e,t,i,r,s){const o=Ll(n),a=o!==n&&!rn(n),l=o[e];if(l!==Bd[e]){const f=l.apply(n,s);return a?wt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,wt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function hc(n,e,t,i){const r=Ll(n);let s=t;return r!==n&&(rn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,wt(a),l,n)}),r[e](s,...i)}function Bo(n,e,t){const i=tt(n);yt(i,"iterate",qr);const r=i[e](...t);return(r===-1||r===!1)&&Nl(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function yr(n,e,t=[]){ni(),wl();const i=tt(n)[e].apply(n,t);return Rl(),ii(),i}const zd=Sl("__proto__,__v_isRef,__isVue"),Pf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ti));function Hd(n){ti(n)||(n=String(n));const e=tt(this);return yt(e,"has",n),e.hasOwnProperty(n)}class Lf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Qd:Nf:s?Uf:If).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!r){let l;if(o&&(l=Od[t]))return l;if(t==="hasOwnProperty")return Hd}const a=Reflect.get(e,t,Et(e)?e:i);return(ti(t)?Pf.has(t):zd(t))||(r||yt(e,"get",t),s)?a:Et(a)?o&&Tl(t)?a:a.value:st(a)?r?Of(a):_o(a):a}}class Df extends Lf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Ai(s);if(!rn(i)&&!Ai(i)&&(s=tt(s),i=tt(i)),!ze(e)&&Et(s)&&!Et(i))return l?!1:(s.value=i,!0)}const o=ze(e)&&Tl(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,i,Et(e)?e:r);return e===tt(r)&&(o?Jn(i,s)&&Ln(e,"set",t,i):Ln(e,"add",t,i)),a}deleteProperty(e,t){const i=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ln(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ti(t)||!Pf.has(t))&&yt(e,"has",t),i}ownKeys(e){return yt(e,"iterate",ze(e)?"length":yi),Reflect.ownKeys(e)}}class Vd extends Lf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Gd=new Df,kd=new Vd,Wd=new Df(!0);const Dl=n=>n,go=n=>Reflect.getPrototypeOf(n);function us(n,e,t=!1,i=!1){n=n.__v_raw;const r=tt(n),s=tt(e);t||(Jn(e,s)&&yt(r,"get",e),yt(r,"get",s));const{has:o}=go(r),a=i?Dl:t?Fl:wt;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function fs(n,e=!1){const t=this.__v_raw,i=tt(t),r=tt(n);return e||(Jn(n,r)&&yt(i,"has",n),yt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function hs(n,e=!1){return n=n.__v_raw,!e&&yt(tt(n),"iterate",yi),Reflect.get(n,"size",n)}function dc(n,e=!1){!e&&!rn(n)&&!Ai(n)&&(n=tt(n));const t=tt(this);return go(t).has.call(t,n)||(t.add(n),Ln(t,"add",n,n)),this}function pc(n,e,t=!1){!t&&!rn(e)&&!Ai(e)&&(e=tt(e));const i=tt(this),{has:r,get:s}=go(i);let o=r.call(i,n);o||(n=tt(n),o=r.call(i,n));const a=s.call(i,n);return i.set(n,e),o?Jn(e,a)&&Ln(i,"set",n,e):Ln(i,"add",n,e),this}function mc(n){const e=tt(this),{has:t,get:i}=go(e);let r=t.call(e,n);r||(n=tt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Ln(e,"delete",n,void 0),s}function gc(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&Ln(n,"clear",void 0,void 0),t}function ds(n,e){return function(i,r){const s=this,o=s.__v_raw,a=tt(o),l=e?Dl:n?Fl:wt;return!n&&yt(a,"iterate",yi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ps(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=sr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Dl:e?Fl:wt;return!e&&yt(s,"iterate",l?wa:yi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function On(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Xd(){const n={get(s){return us(this,s)},get size(){return hs(this)},has:fs,add:dc,set:pc,delete:mc,clear:gc,forEach:ds(!1,!1)},e={get(s){return us(this,s,!1,!0)},get size(){return hs(this)},has:fs,add(s){return dc.call(this,s,!0)},set(s,o){return pc.call(this,s,o,!0)},delete:mc,clear:gc,forEach:ds(!1,!0)},t={get(s){return us(this,s,!0)},get size(){return hs(this,!0)},has(s){return fs.call(this,s,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:ds(!0,!1)},i={get(s){return us(this,s,!0,!0)},get size(){return hs(this,!0)},has(s){return fs.call(this,s,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:ds(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ps(s,!1,!1),t[s]=ps(s,!0,!1),e[s]=ps(s,!1,!0),i[s]=ps(s,!0,!0)}),[n,t,e,i]}const[qd,Yd,$d,Kd]=Xd();function Il(n,e){const t=e?n?Kd:$d:n?Yd:qd;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(et(t,r)&&r in i?t:i,r,s)}const jd={get:Il(!1,!1)},Zd={get:Il(!1,!0)},Jd={get:Il(!0,!1)};const If=new WeakMap,Uf=new WeakMap,Nf=new WeakMap,Qd=new WeakMap;function ep(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tp(n){return n.__v_skip||!Object.isExtensible(n)?0:ep(bd(n))}function _o(n){return Ai(n)?n:Ul(n,!1,Gd,jd,If)}function Ff(n){return Ul(n,!1,Wd,Zd,Uf)}function Of(n){return Ul(n,!0,kd,Jd,Nf)}function Ul(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=tp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Fr(n){return Ai(n)?Fr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ai(n){return!!(n&&n.__v_isReadonly)}function rn(n){return!!(n&&n.__v_isShallow)}function Nl(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Bf(n){return Object.isExtensible(n)&&_f(n,"__v_skip",!0),n}const wt=n=>st(n)?_o(n):n,Fl=n=>st(n)?Of(n):n;function Et(n){return n?n.__v_isRef===!0:!1}function zf(n){return Hf(n,!1)}function np(n){return Hf(n,!0)}function Hf(n,e){return Et(n)?n:new ip(n,e)}class ip{constructor(e,t){this.dep=new Pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||rn(e)||Ai(e);e=i?e:tt(e),Jn(e,t)&&(this._rawValue=e,this._value=i?e:wt(e),this.dep.trigger())}}function Ti(n){return Et(n)?n.value:n}const rp={get:(n,e,t)=>Ti(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Et(r)&&!Et(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Vf(n){return Fr(n)?n:new Proxy(n,rp)}class sp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xr-1,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){it!==this&&(this.flags|=16,this.dep.notify())}get value(){const e=this.dep.track();return wf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function op(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new sp(i,r,t)}const ms={},eo=new WeakMap;let mi;function ap(n,e=!1,t=mi){if(t){let i=eo.get(t);i||eo.set(t,i=[]),i.push(n)}}function lp(n,e,t=nt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:rn(y)||r===!1||r===0?An(y,1):An(y);let u,f,h,d,_=!1,v=!1;if(Et(n)?(f=()=>n.value,_=rn(n)):Fr(n)?(f=()=>c(n),_=!0):ze(n)?(v=!0,_=n.some(y=>Fr(y)||rn(y)),f=()=>n.map(y=>{if(Et(y))return y.value;if(Fr(y))return c(y);if(He(y))return l?l(y,2):y()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ni();try{h()}finally{ii()}}const y=mi;mi=u;try{return l?l(n,3,[d]):n(d)}finally{mi=y}}:f=hn,e&&r){const y=f,H=r===!0?1/0:r;f=()=>An(y(),H)}const m=Nd(),p=()=>{u.stop(),m&&yl(m.effects,u)};if(s)if(e){const y=e;e=(...H)=>{y(...H),p()}}else{const y=f;f=()=>{y(),p()}}let b=v?new Array(n.length).fill(ms):ms;const S=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const H=u.run();if(r||_||(v?H.some((P,L)=>Jn(P,b[L])):Jn(H,b))){h&&h();const P=mi;mi=u;try{const L=[H,b===ms?void 0:v&&b[0]===ms?[]:b,d];l?l(e,3,L):e(...L),b=H}finally{mi=P}}}else u.run()};return a&&a(S),u=new yf(f),u.scheduler=o?()=>o(S,!1):S,d=y=>ap(y,!1,u),h=u.onStop=()=>{const y=eo.get(u);if(y){if(l)l(y,4);else for(const H of y)H();eo.delete(u)}},e?i?S(!0):b=u.run():o?o(S.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function An(n,e=1/0,t){if(e<=0||!st(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Et(n))An(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)An(n[i],e,t);else if(hf(n)||sr(n))n.forEach(i=>{An(i,e,t)});else if(mf(n)){for(const i in n)An(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&An(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ts(n,e,t,i){try{return i?n(...i):n()}catch(r){vo(r,e,t)}}function pn(n,e,t,i){if(He(n)){const r=ts(n,e,t,i);return r&&df(r)&&r.catch(s=>{vo(s,e,t)}),r}if(ze(n)){const r=[];for(let s=0;s<n.length;s++)r.push(pn(n[s],e,t,i));return r}}function vo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||nt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ni(),ts(s,null,10,[n,l,c]),ii();return}}cp(n,t,r,i,o)}function cp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}let Yr=!1,Ra=!1;const zt=[];let vi=0;const or=[];let Xn=null,Zi=0;const Gf=Promise.resolve();let Ol=null;function kf(n){const e=Ol||Gf;return n?e.then(this?n.bind(this):n):e}function up(n){let e=Yr?vi+1:0,t=zt.length;for(;e<t;){const i=e+t>>>1,r=zt[i],s=$r(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Bl(n){if(!(n.flags&1)){const e=$r(n),t=zt[zt.length-1];!t||!(n.flags&2)&&e>=$r(t)?zt.push(n):zt.splice(up(e),0,n),n.flags&4||(n.flags|=1),Wf()}}function Wf(){!Yr&&!Ra&&(Ra=!0,Ol=Gf.then(qf))}function fp(n){ze(n)?or.push(...n):Xn&&n.id===-1?Xn.splice(Zi+1,0,n):n.flags&1||(or.push(n),n.flags&4||(n.flags|=1)),Wf()}function _c(n,e,t=Yr?vi+1:0){for(;t<zt.length;t++){const i=zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;zt.splice(t,1),t--,i(),i.flags&=-2}}}function Xf(n){if(or.length){const e=[...new Set(or)].sort((t,i)=>$r(t)-$r(i));if(or.length=0,Xn){Xn.push(...e);return}for(Xn=e,Zi=0;Zi<Xn.length;Zi++){const t=Xn[Zi];t.flags&8||t(),t.flags&=-2}Xn=null,Zi=0}}const $r=n=>n.id==null?n.flags&2?-1:1/0:n.id;function qf(n){Ra=!1,Yr=!0;try{for(vi=0;vi<zt.length;vi++){const e=zt[vi];e&&!(e.flags&8)&&(ts(e,e.i,e.i?15:14),e.flags&=-2)}}finally{vi=0,zt.length=0,Xf(),Yr=!1,Ol=null,(zt.length||or.length)&&qf()}}let Xt=null,Yf=null;function to(n){const e=Xt;return Xt=n,Yf=n&&n.type.__scopeId||null,e}function hp(n,e=Xt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&bc(-1);const s=to(e);let o;try{o=n(...r)}finally{to(s),i._d&&bc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function dp(n,e){if(Xt===null)return n;const t=To(Xt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=nt]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&An(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ai(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ni(),pn(l,t,8,[n.el,a,n,e]),ii())}}const pp=Symbol("_vte"),mp=n=>n.__isTeleport;function $f(n,e){n.shapeFlag&6&&n.component?$f(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function xo(n,e){return He(n)?xt({name:n.name},e,{setup:n}):n}function Kf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ca(n,e,t,i,r=!1){if(ze(n)){n.forEach((d,_)=>Ca(d,e&&(ze(e)?e[_]:e),t,i,r));return}if(Or(i)&&!r)return;const s=i.shapeFlag&4?To(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,f=a.setupState,h=f===nt?()=>!1:d=>et(f,d)&&!(Object.getOwnPropertyDescriptor(u,d)||nt).get;if(c!=null&&c!==l&&(ht(c)?(u[c]=null,h(c)&&(f[c]=null)):Et(c)&&(c.value=null)),He(l))ts(l,a,12,[o,u]);else{const d=ht(l),_=Et(l);if(d||_){const v=()=>{if(n.f){const m=d?h(l)?f[l]:u[l]:l.value;r?ze(m)&&yl(m,s):ze(m)?m.includes(s)||m.push(s):d?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(v.id=-1,Ot(v,t)):v()}}}const Or=n=>!!n.type.__asyncLoader,jf=n=>n.type.__isKeepAlive;function gp(n,e){Zf(n,"a",e)}function _p(n,e){Zf(n,"da",e)}function Zf(n,e,t=Ct){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Mo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)jf(r.parent.vnode)&&vp(i,e,t,r),r=r.parent}}function vp(n,e,t,i){const r=Mo(e,n,i,!0);Jf(()=>{yl(i[e],r)},t)}function Mo(n,e,t=Ct,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ni();const a=ns(t),l=pn(e,t,n,o);return a(),ii(),l});return i?r.unshift(s):r.push(s),s}}const Nn=n=>(e,t=Ct)=>{(!yo||n==="sp")&&Mo(n,(...i)=>e(...i),t)},xp=Nn("bm"),Mp=Nn("m"),Sp=Nn("bu"),Ep=Nn("u"),yp=Nn("bum"),Jf=Nn("um"),Tp=Nn("sp"),bp=Nn("rtg"),Ap=Nn("rtc");function wp(n,e=Ct){Mo("ec",n,e)}const Rp=Symbol.for("v-ndc"),Pa=n=>n?xh(n)?To(n):Pa(n.parent):null,Br=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pa(n.parent),$root:n=>Pa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>zl(n),$forceUpdate:n=>n.f||(n.f=()=>{Bl(n.update)}),$nextTick:n=>n.n||(n.n=kf.bind(n.proxy)),$watch:n=>Kp.bind(n)}),zo=(n,e)=>n!==nt&&!n.__isScriptSetup&&et(n,e),Cp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(zo(i,e))return o[e]=1,i[e];if(r!==nt&&et(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&et(c,e))return o[e]=3,s[e];if(t!==nt&&et(t,e))return o[e]=4,t[e];La&&(o[e]=0)}}const u=Br[e];let f,h;if(u)return e==="$attrs"&&yt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==nt&&et(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,et(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return zo(r,e)?(r[e]=t,!0):i!==nt&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==nt&&et(n,o)||zo(e,o)||(a=s[0])&&et(a,o)||et(i,o)||et(Br,o)||et(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function vc(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let La=!0;function Pp(n){const e=zl(n),t=n.proxy,i=n.ctx;La=!1,e.beforeCreate&&xc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:S,unmounted:y,render:H,renderTracked:P,renderTriggered:L,errorCaptured:q,serverPrefetch:A,expose:E,inheritAttrs:D,components:ee,directives:$,filters:Q}=e;if(c&&Lp(c,i,null),o)for(const te in o){const k=o[te];He(k)&&(i[te]=k.bind(t))}if(r){const te=r.call(t,t);st(te)&&(n.data=_o(te))}if(La=!0,s)for(const te in s){const k=s[te],ve=He(k)?k.bind(t,t):He(k.get)?k.get.bind(t,t):hn,Se=!He(k)&&He(k.set)?k.set.bind(t):hn,be=Qt({get:ve,set:Se});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>be.value,set:Ie=>be.value=Ie})}if(a)for(const te in a)Qf(a[te],i,t,te);if(l){const te=He(l)?l.call(t):l;Reflect.ownKeys(te).forEach(k=>{Ws(k,te[k])})}u&&xc(u,n,"c");function Z(te,k){ze(k)?k.forEach(ve=>te(ve.bind(t))):k&&te(k.bind(t))}if(Z(xp,f),Z(Mp,h),Z(Sp,d),Z(Ep,_),Z(gp,v),Z(_p,m),Z(wp,q),Z(Ap,P),Z(bp,L),Z(yp,b),Z(Jf,y),Z(Tp,A),ze(E))if(E.length){const te=n.exposed||(n.exposed={});E.forEach(k=>{Object.defineProperty(te,k,{get:()=>t[k],set:ve=>t[k]=ve})})}else n.exposed||(n.exposed={});H&&n.render===hn&&(n.render=H),D!=null&&(n.inheritAttrs=D),ee&&(n.components=ee),$&&(n.directives=$),A&&Kf(n)}function Lp(n,e,t=hn){ze(n)&&(n=Da(n));for(const i in n){const r=n[i];let s;st(r)?"default"in r?s=Dn(r.from||i,r.default,!0):s=Dn(r.from||i):s=Dn(r),Et(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function xc(n,e,t){pn(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qf(n,e,t,i){let r=i.includes(".")?dh(t,i):()=>t[i];if(ht(n)){const s=e[n];He(s)&&Xs(r,s)}else if(He(n))Xs(r,n.bind(t));else if(st(n))if(ze(n))n.forEach(s=>Qf(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&Xs(r,s,n)}}function zl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>no(l,c,o,!0)),no(l,e,o)),st(e)&&s.set(e,l),l}function no(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&no(n,s,t,!0),r&&r.forEach(o=>no(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Dp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Dp={data:Mc,props:Sc,emits:Sc,methods:Dr,computed:Dr,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Dr,directives:Dr,watch:Up,provide:Mc,inject:Ip};function Mc(n,e){return e?n?function(){return xt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function Ip(n,e){return Dr(Da(n),Da(e))}function Da(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tt(n,e){return n?[...new Set([].concat(n,e))]:e}function Dr(n,e){return n?xt(Object.create(null),n,e):e}function Sc(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:xt(Object.create(null),vc(n),vc(e??{})):e}function Up(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=Tt(n[i],e[i]);return t}function eh(){return{app:null,config:{isNativeTag:yd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Np=0;function Fp(n,e){return function(i,r=null){He(i)||(i=xt({},i)),r!=null&&!st(r)&&(r=null);const s=eh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Np++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:gm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&He(u.install)?(o.add(u),u.install(c,...f)):He(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Vt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,To(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(pn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ar;ar=c;try{return u()}finally{ar=f}}};return c}}let ar=null;function Ws(n,e){if(Ct){let t=Ct.provides;const i=Ct.parent&&Ct.parent.provides;i===t&&(t=Ct.provides=Object.create(i)),t[n]=e}}function Dn(n,e,t=!1){const i=Ct||Xt;if(i||ar){const r=ar?ar._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const th={},nh=()=>Object.create(th),ih=n=>Object.getPrototypeOf(n)===th;function Op(n,e,t,i=!1){const r={},s=nh();n.propsDefaults=Object.create(null),rh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ff(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Bp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(So(n.emitsOptions,h))continue;const d=e[h];if(l)if(et(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=bi(h);r[_]=Ia(l,a,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{rh(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!et(e,f)&&((u=Ci(f))===f||!et(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ia(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!et(e,f))&&(delete s[f],c=!0)}c&&Ln(n.attrs,"set","")}function rh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ur(l))continue;const c=e[l];let u;r&&et(r,u=bi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:So(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ia(r,l,f,c[f],n,!et(c,f))}}return o}function Ia(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ns(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ci(t))&&(i=!0))}return i}const zp=new WeakMap;function sh(n,e,t=!1){const i=t?zp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[h,d]=sh(f,e,!0);xt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,rr),rr;if(ze(s))for(let u=0;u<s.length;u++){const f=bi(s[u]);Ec(f)&&(o[f]=nt)}else if(s)for(const u in s){const f=bi(u);if(Ec(f)){const h=s[u],d=o[f]=ze(h)||He(h)?{type:h}:xt({},h),_=d.type;let v=!1,m=!0;if(ze(_))for(let p=0;p<_.length;++p){const b=_[p],S=He(b)&&b.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(m=!1)}else v=He(_)&&_.name==="Boolean";d[0]=v,d[1]=m,(v||et(d,"default"))&&a.push(f)}}const c=[o,a];return st(n)&&i.set(n,c),c}function Ec(n){return n[0]!=="$"&&!Ur(n)}const oh=n=>n[0]==="_"||n==="$stable",Hl=n=>ze(n)?n.map(cn):[cn(n)],Hp=(n,e,t)=>{if(e._n)return e;const i=hp((...r)=>Hl(e(...r)),t);return i._c=!1,i},ah=(n,e,t)=>{const i=n._ctx;for(const r in n){if(oh(r))continue;const s=n[r];if(He(s))e[r]=Hp(r,s,i);else if(s!=null){const o=Hl(s);e[r]=()=>o}}},lh=(n,e)=>{const t=Hl(e);n.slots.default=()=>t},ch=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Vp=(n,e,t)=>{const i=n.slots=nh();if(n.vnode.shapeFlag&32){const r=e._;r?(ch(i,e,t),t&&_f(i,"_",r,!0)):ah(e,i)}else e&&lh(n,e)},Gp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:ch(r,e,t):(s=!e.$stable,ah(e,r)),o=e}else e&&(lh(n,e),o={default:1});if(s)for(const a in r)!oh(a)&&o[a]==null&&delete r[a]},Ot=nm;function kp(n){return Wp(n)}function Wp(n,e){const t=vf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=hn,insertStaticContent:_}=n,v=(T,w,F,G=null,j=null,K=null,ne=void 0,M=null,g=!!w.dynamicChildren)=>{if(T===w)return;T&&!Tr(T,w)&&(G=N(T),Ie(T,j,K,!0),T=null),w.patchFlag===-2&&(g=!1,w.dynamicChildren=null);const{type:C,ref:V,shapeFlag:O}=w;switch(C){case Eo:m(T,w,F,G);break;case Kr:p(T,w,F,G);break;case Go:T==null&&b(w,F,G,ne);break;case bn:ee(T,w,F,G,j,K,ne,M,g);break;default:O&1?H(T,w,F,G,j,K,ne,M,g):O&6?$(T,w,F,G,j,K,ne,M,g):(O&64||O&128)&&C.process(T,w,F,G,j,K,ne,M,g,fe)}V!=null&&j&&Ca(V,T&&T.ref,K,w||T,!w)},m=(T,w,F,G)=>{if(T==null)i(w.el=a(w.children),F,G);else{const j=w.el=T.el;w.children!==T.children&&c(j,w.children)}},p=(T,w,F,G)=>{T==null?i(w.el=l(w.children||""),F,G):w.el=T.el},b=(T,w,F,G)=>{[T.el,T.anchor]=_(T.children,w,F,G,T.el,T.anchor)},S=({el:T,anchor:w},F,G)=>{let j;for(;T&&T!==w;)j=h(T),i(T,F,G),T=j;i(w,F,G)},y=({el:T,anchor:w})=>{let F;for(;T&&T!==w;)F=h(T),r(T),T=F;r(w)},H=(T,w,F,G,j,K,ne,M,g)=>{w.type==="svg"?ne="svg":w.type==="math"&&(ne="mathml"),T==null?P(w,F,G,j,K,ne,M,g):A(T,w,j,K,ne,M,g)},P=(T,w,F,G,j,K,ne,M)=>{let g,C;const{props:V,shapeFlag:O,transition:z,dirs:ue}=T;if(g=T.el=o(T.type,K,V&&V.is,V),O&8?u(g,T.children):O&16&&q(T.children,g,null,G,j,Ho(T,K),ne,M),ue&&ai(T,null,G,"created"),L(g,T,T.scopeId,ne,G),V){for(const de in V)de!=="value"&&!Ur(de)&&s(g,de,null,V[de],K,G);"value"in V&&s(g,"value",null,V.value,K),(C=V.onVnodeBeforeMount)&&ln(C,G,T)}ue&&ai(T,null,G,"beforeMount");const oe=Xp(j,z);oe&&z.beforeEnter(g),i(g,w,F),((C=V&&V.onVnodeMounted)||oe||ue)&&Ot(()=>{C&&ln(C,G,T),oe&&z.enter(g),ue&&ai(T,null,G,"mounted")},j)},L=(T,w,F,G,j)=>{if(F&&d(T,F),G)for(let K=0;K<G.length;K++)d(T,G[K]);if(j){let K=j.subTree;if(w===K||mh(K.type)&&(K.ssContent===w||K.ssFallback===w)){const ne=j.vnode;L(T,ne,ne.scopeId,ne.slotScopeIds,j.parent)}}},q=(T,w,F,G,j,K,ne,M,g=0)=>{for(let C=g;C<T.length;C++){const V=T[C]=M?qn(T[C]):cn(T[C]);v(null,V,w,F,G,j,K,ne,M)}},A=(T,w,F,G,j,K,ne)=>{const M=w.el=T.el;let{patchFlag:g,dynamicChildren:C,dirs:V}=w;g|=T.patchFlag&16;const O=T.props||nt,z=w.props||nt;let ue;if(F&&li(F,!1),(ue=z.onVnodeBeforeUpdate)&&ln(ue,F,w,T),V&&ai(w,T,F,"beforeUpdate"),F&&li(F,!0),(O.innerHTML&&z.innerHTML==null||O.textContent&&z.textContent==null)&&u(M,""),C?E(T.dynamicChildren,C,M,F,G,Ho(w,j),K):ne||k(T,w,M,null,F,G,Ho(w,j),K,!1),g>0){if(g&16)D(M,O,z,F,j);else if(g&2&&O.class!==z.class&&s(M,"class",null,z.class,j),g&4&&s(M,"style",O.style,z.style,j),g&8){const oe=w.dynamicProps;for(let de=0;de<oe.length;de++){const Ee=oe[de],ce=O[Ee],ge=z[Ee];(ge!==ce||Ee==="value")&&s(M,Ee,ce,ge,j,F)}}g&1&&T.children!==w.children&&u(M,w.children)}else!ne&&C==null&&D(M,O,z,F,j);((ue=z.onVnodeUpdated)||V)&&Ot(()=>{ue&&ln(ue,F,w,T),V&&ai(w,T,F,"updated")},G)},E=(T,w,F,G,j,K,ne)=>{for(let M=0;M<w.length;M++){const g=T[M],C=w[M],V=g.el&&(g.type===bn||!Tr(g,C)||g.shapeFlag&70)?f(g.el):F;v(g,C,V,null,G,j,K,ne,!0)}},D=(T,w,F,G,j)=>{if(w!==F){if(w!==nt)for(const K in w)!Ur(K)&&!(K in F)&&s(T,K,w[K],null,j,G);for(const K in F){if(Ur(K))continue;const ne=F[K],M=w[K];ne!==M&&K!=="value"&&s(T,K,M,ne,j,G)}"value"in F&&s(T,"value",w.value,F.value,j)}},ee=(T,w,F,G,j,K,ne,M,g)=>{const C=w.el=T?T.el:a(""),V=w.anchor=T?T.anchor:a("");let{patchFlag:O,dynamicChildren:z,slotScopeIds:ue}=w;ue&&(M=M?M.concat(ue):ue),T==null?(i(C,F,G),i(V,F,G),q(w.children||[],F,V,j,K,ne,M,g)):O>0&&O&64&&z&&T.dynamicChildren?(E(T.dynamicChildren,z,F,j,K,ne,M),(w.key!=null||j&&w===j.subTree)&&uh(T,w,!0)):k(T,w,F,V,j,K,ne,M,g)},$=(T,w,F,G,j,K,ne,M,g)=>{w.slotScopeIds=M,T==null?w.shapeFlag&512?j.ctx.activate(w,F,G,ne,g):Q(w,F,G,j,K,ne,g):le(T,w,g)},Q=(T,w,F,G,j,K,ne)=>{const M=T.component=um(T,G,j);if(jf(T)&&(M.ctx.renderer=fe),fm(M,!1,ne),M.asyncDep){if(j&&j.registerDep(M,Z,ne),!T.el){const g=M.subTree=Vt(Kr);p(null,g,w,F)}}else Z(M,T,w,F,j,K,ne)},le=(T,w,F)=>{const G=w.component=T.component;if(em(T,w,F))if(G.asyncDep&&!G.asyncResolved){te(G,w,F);return}else G.next=w,G.update();else w.el=T.el,G.vnode=w},Z=(T,w,F,G,j,K,ne)=>{const M=()=>{if(T.isMounted){let{next:O,bu:z,u:ue,parent:oe,vnode:de}=T;{const Re=fh(T);if(Re){O&&(O.el=de.el,te(T,O,ne)),Re.asyncDep.then(()=>{T.isUnmounted||M()});return}}let Ee=O,ce;li(T,!1),O?(O.el=de.el,te(T,O,ne)):O=de,z&&ks(z),(ce=O.props&&O.props.onVnodeBeforeUpdate)&&ln(ce,oe,O,de),li(T,!0);const ge=Vo(T),Fe=T.subTree;T.subTree=ge,v(Fe,ge,f(Fe.el),N(Fe),T,j,K),O.el=ge.el,Ee===null&&tm(T,ge.el),ue&&Ot(ue,j),(ce=O.props&&O.props.onVnodeUpdated)&&Ot(()=>ln(ce,oe,O,de),j)}else{let O;const{el:z,props:ue}=w,{bm:oe,m:de,parent:Ee,root:ce,type:ge}=T,Fe=Or(w);if(li(T,!1),oe&&ks(oe),!Fe&&(O=ue&&ue.onVnodeBeforeMount)&&ln(O,Ee,w),li(T,!0),z&&R){const Re=()=>{T.subTree=Vo(T),R(z,T.subTree,T,j,null)};Fe?ge.__asyncHydrate(z,T,Re):Re()}else{ce.ce&&ce.ce._injectChildStyle(ge);const Re=T.subTree=Vo(T);v(null,Re,F,G,T,j,K),w.el=Re.el}if(de&&Ot(de,j),!Fe&&(O=ue&&ue.onVnodeMounted)){const Re=w;Ot(()=>ln(O,Ee,Re),j)}(w.shapeFlag&256||Ee&&Or(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&T.a&&Ot(T.a,j),T.isMounted=!0,w=F=G=null}};T.scope.on();const g=T.effect=new yf(M);T.scope.off();const C=T.update=g.run.bind(g),V=T.job=g.runIfDirty.bind(g);V.i=T,V.id=T.uid,g.scheduler=()=>Bl(V),li(T,!0),C()},te=(T,w,F)=>{w.component=T;const G=T.vnode.props;T.vnode=w,T.next=null,Bp(T,w.props,G,F),Gp(T,w.children,F),ni(),_c(T),ii()},k=(T,w,F,G,j,K,ne,M,g=!1)=>{const C=T&&T.children,V=T?T.shapeFlag:0,O=w.children,{patchFlag:z,shapeFlag:ue}=w;if(z>0){if(z&128){Se(C,O,F,G,j,K,ne,M,g);return}else if(z&256){ve(C,O,F,G,j,K,ne,M,g);return}}ue&8?(V&16&&Me(C,j,K),O!==C&&u(F,O)):V&16?ue&16?Se(C,O,F,G,j,K,ne,M,g):Me(C,j,K,!0):(V&8&&u(F,""),ue&16&&q(O,F,G,j,K,ne,M,g))},ve=(T,w,F,G,j,K,ne,M,g)=>{T=T||rr,w=w||rr;const C=T.length,V=w.length,O=Math.min(C,V);let z;for(z=0;z<O;z++){const ue=w[z]=g?qn(w[z]):cn(w[z]);v(T[z],ue,F,null,j,K,ne,M,g)}C>V?Me(T,j,K,!0,!1,O):q(w,F,G,j,K,ne,M,g,O)},Se=(T,w,F,G,j,K,ne,M,g)=>{let C=0;const V=w.length;let O=T.length-1,z=V-1;for(;C<=O&&C<=z;){const ue=T[C],oe=w[C]=g?qn(w[C]):cn(w[C]);if(Tr(ue,oe))v(ue,oe,F,null,j,K,ne,M,g);else break;C++}for(;C<=O&&C<=z;){const ue=T[O],oe=w[z]=g?qn(w[z]):cn(w[z]);if(Tr(ue,oe))v(ue,oe,F,null,j,K,ne,M,g);else break;O--,z--}if(C>O){if(C<=z){const ue=z+1,oe=ue<V?w[ue].el:G;for(;C<=z;)v(null,w[C]=g?qn(w[C]):cn(w[C]),F,oe,j,K,ne,M,g),C++}}else if(C>z)for(;C<=O;)Ie(T[C],j,K,!0),C++;else{const ue=C,oe=C,de=new Map;for(C=oe;C<=z;C++){const De=w[C]=g?qn(w[C]):cn(w[C]);De.key!=null&&de.set(De.key,C)}let Ee,ce=0;const ge=z-oe+1;let Fe=!1,Re=0;const ye=new Array(ge);for(C=0;C<ge;C++)ye[C]=0;for(C=ue;C<=O;C++){const De=T[C];if(ce>=ge){Ie(De,j,K,!0);continue}let We;if(De.key!=null)We=de.get(De.key);else for(Ee=oe;Ee<=z;Ee++)if(ye[Ee-oe]===0&&Tr(De,w[Ee])){We=Ee;break}We===void 0?Ie(De,j,K,!0):(ye[We-oe]=C+1,We>=Re?Re=We:Fe=!0,v(De,w[We],F,null,j,K,ne,M,g),ce++)}const Oe=Fe?qp(ye):rr;for(Ee=Oe.length-1,C=ge-1;C>=0;C--){const De=oe+C,We=w[De],I=De+1<V?w[De+1].el:G;ye[C]===0?v(null,We,F,I,j,K,ne,M,g):Fe&&(Ee<0||C!==Oe[Ee]?be(We,F,I,2):Ee--)}}},be=(T,w,F,G,j=null)=>{const{el:K,type:ne,transition:M,children:g,shapeFlag:C}=T;if(C&6){be(T.component.subTree,w,F,G);return}if(C&128){T.suspense.move(w,F,G);return}if(C&64){ne.move(T,w,F,fe);return}if(ne===bn){i(K,w,F);for(let O=0;O<g.length;O++)be(g[O],w,F,G);i(T.anchor,w,F);return}if(ne===Go){S(T,w,F);return}if(G!==2&&C&1&&M)if(G===0)M.beforeEnter(K),i(K,w,F),Ot(()=>M.enter(K),j);else{const{leave:O,delayLeave:z,afterLeave:ue}=M,oe=()=>i(K,w,F),de=()=>{O(K,()=>{oe(),ue&&ue()})};z?z(K,oe,de):de()}else i(K,w,F)},Ie=(T,w,F,G=!1,j=!1)=>{const{type:K,props:ne,ref:M,children:g,dynamicChildren:C,shapeFlag:V,patchFlag:O,dirs:z,cacheIndex:ue}=T;if(O===-2&&(j=!1),M!=null&&Ca(M,null,F,T,!0),ue!=null&&(w.renderCache[ue]=void 0),V&256){w.ctx.deactivate(T);return}const oe=V&1&&z,de=!Or(T);let Ee;if(de&&(Ee=ne&&ne.onVnodeBeforeUnmount)&&ln(Ee,w,T),V&6)he(T.component,F,G);else{if(V&128){T.suspense.unmount(F,G);return}oe&&ai(T,null,w,"beforeUnmount"),V&64?T.type.remove(T,w,F,fe,G):C&&!C.hasOnce&&(K!==bn||O>0&&O&64)?Me(C,w,F,!1,!0):(K===bn&&O&384||!j&&V&16)&&Me(g,w,F),G&&ke(T)}(de&&(Ee=ne&&ne.onVnodeUnmounted)||oe)&&Ot(()=>{Ee&&ln(Ee,w,T),oe&&ai(T,null,w,"unmounted")},F)},ke=T=>{const{type:w,el:F,anchor:G,transition:j}=T;if(w===bn){J(F,G);return}if(w===Go){y(T);return}const K=()=>{r(F),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(T.shapeFlag&1&&j&&!j.persisted){const{leave:ne,delayLeave:M}=j,g=()=>ne(F,K);M?M(T.el,K,g):g()}else K()},J=(T,w)=>{let F;for(;T!==w;)F=h(T),r(T),T=F;r(w)},he=(T,w,F)=>{const{bum:G,scope:j,job:K,subTree:ne,um:M,m:g,a:C}=T;yc(g),yc(C),G&&ks(G),j.stop(),K&&(K.flags|=8,Ie(ne,T,w,F)),M&&Ot(M,w),Ot(()=>{T.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Me=(T,w,F,G=!1,j=!1,K=0)=>{for(let ne=K;ne<T.length;ne++)Ie(T[ne],w,F,G,j)},N=T=>{if(T.shapeFlag&6)return N(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=h(T.anchor||T.el),F=w&&w[pp];return F?h(F):w};let re=!1;const ie=(T,w,F)=>{T==null?w._vnode&&Ie(w._vnode,null,null,!0):v(w._vnode||null,T,w,null,null,null,F),w._vnode=T,re||(re=!0,_c(),Xf(),re=!1)},fe={p:v,um:Ie,m:be,r:ke,mt:Q,mc:q,pc:k,pbc:E,n:N,o:n};let Le,R;return{render:ie,hydrate:Le,createApp:Fp(ie,Le)}}function Ho({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function li({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Xp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function uh(n,e,t=!1){const i=n.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=qn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&uh(o,a)),a.type===Eo&&(a.el=o.el)}}function qp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function fh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fh(e)}function yc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Yp=Symbol.for("v-scx"),$p=()=>Dn(Yp);function Xs(n,e,t){return hh(n,e,t)}function hh(n,e,t=nt){const{immediate:i,deep:r,flush:s,once:o}=t,a=xt({},t);let l;if(yo)if(s==="sync"){const h=$p();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!e||i)a.once=!0;else return{stop:hn,resume:hn,pause:hn};const c=Ct;a.call=(h,d,_)=>pn(h,c,d,_);let u=!1;s==="post"?a.scheduler=h=>{Ot(h,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(h,d)=>{d?h():Bl(h)}),a.augmentJob=h=>{e&&(h.flags|=4),u&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=lp(n,e,a);return l&&l.push(f),f}function Kp(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?dh(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=ns(this),a=hh(r,s.bind(i),t);return o(),a}function dh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const jp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${bi(e)}Modifiers`]||n[`${Ci(e)}Modifiers`];function Zp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),o=s&&jp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>ht(u)?u.trim():u)),o.number&&(r=t.map(ya)));let a,l=i[a=Uo(e)]||i[a=Uo(bi(e))];!l&&s&&(l=i[a=Uo(Ci(e))]),l&&pn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,pn(c,n,6,r)}}function ph(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=ph(c,e,!0);u&&(a=!0,xt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(st(n)&&i.set(n,null),null):(ze(s)?s.forEach(l=>o[l]=null):xt(o,s),st(n)&&i.set(n,o),o)}function So(n,e){return!n||!ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,Ci(e))||et(n,e))}function Vo(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:v}=n,m=to(n);let p,b;try{if(t.shapeFlag&4){const y=r||i,H=y;p=cn(c.call(H,y,u,f,d,h,_)),b=a}else{const y=e;p=cn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),b=e.props?a:Jp(a)}}catch(y){zr.length=0,vo(y,n,1),p=Vt(Kr)}let S=p;if(b&&v!==!1){const y=Object.keys(b),{shapeFlag:H}=S;y.length&&H&7&&(s&&y.some(El)&&(b=Qp(b,s)),S=fr(S,b,!1,!0))}return t.dirs&&(S=fr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),p=S,to(m),p}const Jp=n=>{let e;for(const t in n)(t==="class"||t==="style"||ho(t))&&((e||(e={}))[t]=n[t]);return e},Qp=(n,e)=>{const t={};for(const i in n)(!El(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function em(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Tc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!So(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Tc(i,o,c):!0:!!o;return!1}function Tc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!So(t,s))return!0}return!1}function tm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const mh=n=>n.__isSuspense;function nm(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):fp(n)}const bn=Symbol.for("v-fgt"),Eo=Symbol.for("v-txt"),Kr=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),zr=[];let Ht=null;function Vl(n=!1){zr.push(Ht=n?null:[])}function im(){zr.pop(),Ht=zr[zr.length-1]||null}let jr=1;function bc(n){jr+=n,n<0&&Ht&&(Ht.hasOnce=!0)}function gh(n){return n.dynamicChildren=jr>0?Ht||rr:null,im(),jr>0&&Ht&&Ht.push(n),n}function _h(n,e,t,i,r,s){return gh(Wt(n,e,t,i,r,s,!0))}function rm(n,e,t,i,r){return gh(Vt(n,e,t,i,r,!0))}function Ua(n){return n?n.__v_isVNode===!0:!1}function Tr(n,e){return n.type===e.type&&n.key===e.key}const vh=({key:n})=>n??null,qs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||Et(n)||He(n)?{i:Xt,r:n,k:e,f:!!t}:n:null);function Wt(n,e=null,t=null,i=0,r=null,s=n===bn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&vh(e),ref:e&&qs(e),scopeId:Yf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xt};return a?(Gl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),jr>0&&!o&&Ht&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ht.push(l),l}const Vt=sm;function sm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Rp)&&(n=Kr),Ua(n)){const a=fr(n,e,!0);return t&&Gl(a,t),jr>0&&!s&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(n)]=a:Ht.push(a)),a.patchFlag=-2,a}if(mm(n)&&(n=n.__vccOpts),e){e=om(e);let{class:a,style:l}=e;a&&!ht(a)&&(e.class=Al(a)),st(l)&&(Nl(l)&&!ze(l)&&(l=xt({},l)),e.style=bl(l))}const o=ht(n)?1:mh(n)?128:mp(n)?64:st(n)?4:He(n)?2:0;return Wt(n,e,t,i,r,o,s,!0)}function om(n){return n?Nl(n)||ih(n)?xt({},n):n:null}function fr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?am(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&vh(c),ref:e&&e.ref?t&&s?ze(s)?s.concat(qs(e)):[s,qs(e)]:qs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==bn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fr(n.ssContent),ssFallback:n.ssFallback&&fr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&$f(u,l.clone(u)),u}function Na(n=" ",e=0){return Vt(Eo,null,n,e)}function cn(n){return n==null||typeof n=="boolean"?Vt(Kr):ze(n)?Vt(bn,null,n.slice()):typeof n=="object"?qn(n):Vt(Eo,null,String(n))}function qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fr(n)}function Gl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Gl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!ih(e)?e._ctx=Xt:r===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:Xt},t=32):(e=String(e),i&64?(t=16,e=[Na(e)]):t=8);n.children=e,n.shapeFlag|=t}function am(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Al([e.class,i.class]));else if(r==="style")e.style=bl([e.style,i.style]);else if(ho(r)){const s=e[r],o=i[r];o&&s!==o&&!(ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function ln(n,e,t,i=null){pn(n,e,7,[t,i])}const lm=eh();let cm=0;function um(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||lm,s={uid:cm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ef(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sh(i,r),emitsOptions:ph(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Zp.bind(null,s),n.ce&&n.ce(s),s}let Ct=null,io,Fa;{const n=vf(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};io=e("__VUE_INSTANCE_SETTERS__",t=>Ct=t),Fa=e("__VUE_SSR_SETTERS__",t=>yo=t)}const ns=n=>{const e=Ct;return io(n),n.scope.on(),()=>{n.scope.off(),io(e)}},Ac=()=>{Ct&&Ct.scope.off(),io(null)};function xh(n){return n.vnode.shapeFlag&4}let yo=!1;function fm(n,e=!1,t=!1){e&&Fa(e);const{props:i,children:r}=n.vnode,s=xh(n);Op(n,i,s,e),Vp(n,r,t);const o=s?hm(n,e):void 0;return e&&Fa(!1),o}function hm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Cp);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?pm(n):null,s=ns(n);ni();const o=ts(i,n,0,[n.props,r]);if(ii(),s(),df(o)){if(Or(n)||Kf(n),o.then(Ac,Ac),e)return o.then(a=>{wc(n,a,e)}).catch(a=>{vo(a,n,0)});n.asyncDep=o}else wc(n,o,e)}else Mh(n,e)}function wc(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=Vf(e)),Mh(n,t)}let Rc;function Mh(n,e,t){const i=n.type;if(!n.render){if(!e&&Rc&&!i.render){const r=i.template||zl(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:a},o),l);i.render=Rc(r,c)}}n.render=i.render||hn}{const r=ns(n);ni();try{Pp(n)}finally{ii(),r()}}}const dm={get(n,e){return yt(n,"get",""),n[e]}};function pm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,dm),slots:n.slots,emit:n.emit,expose:e}}function To(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vf(Bf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Br)return Br[t](n)},has(e,t){return t in e||t in Br}})):n.proxy}function mm(n){return He(n)&&"__vccOpts"in n}const Qt=(n,e)=>op(n,e,yo);function Sh(n,e,t){const i=arguments.length;return i===2?st(e)&&!ze(e)?Ua(e)?Vt(n,null,[e]):Vt(n,e):Vt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ua(t)&&(t=[t]),Vt(n,e,t))}const gm="3.5.1";/**
* @vue/runtime-dom v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oa;const Cc=typeof window<"u"&&window.trustedTypes;if(Cc)try{Oa=Cc.createPolicy("vue",{createHTML:n=>n})}catch{}const Eh=Oa?n=>Oa.createHTML(n):n=>n,_m="http://www.w3.org/2000/svg",vm="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,Pc=Tn&&Tn.createElement("template"),xm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Tn.createElementNS(_m,n):e==="mathml"?Tn.createElementNS(vm,n):t?Tn.createElement(n,{is:t}):Tn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Tn.createTextNode(n),createComment:n=>Tn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Tn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Pc.innerHTML=Eh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Pc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Mm=Symbol("_vtc");function Sm(n,e,t){const i=n[Mm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Lc=Symbol("_vod"),Em=Symbol("_vsh"),ym=Symbol(""),Tm=/(^|;)\s*display\s*:/;function bm(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ys(i,a,"")}else for(const o in e)t[o]==null&&Ys(i,o,"");for(const o in t)o==="display"&&(s=!0),Ys(i,o,t[o])}else if(r){if(e!==t){const o=i[ym];o&&(t+=";"+o),i.cssText=t,s=Tm.test(t)}}else e&&n.removeAttribute("style");Lc in n&&(n[Lc]=s?i.display:"",n[Em]&&(i.display="none"))}const Dc=/\s*!important$/;function Ys(n,e,t){if(ze(t))t.forEach(i=>Ys(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Am(n,e);Dc.test(t)?n.setProperty(Ci(i),t.replace(Dc,""),"important"):n[i]=t}}const Ic=["Webkit","Moz","ms"],ko={};function Am(n,e){const t=ko[e];if(t)return t;let i=bi(e);if(i!=="filter"&&i in n)return ko[e]=i;i=gf(i);for(let r=0;r<Ic.length;r++){const s=Ic[r]+i;if(s in n)return ko[e]=s}return e}const Uc="http://www.w3.org/1999/xlink";function Nc(n,e,t,i,r,s=Id(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Uc,e.slice(6,e.length)):n.setAttributeNS(Uc,e,t):t==null||s&&!xf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ti(t)?String(t):t)}function wm(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Eh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=xf(t):t==null&&o==="string"?(t="",s=!0):o==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(e)}function Ji(n,e,t,i){n.addEventListener(e,t,i)}function Rm(n,e,t,i){n.removeEventListener(e,t,i)}const Fc=Symbol("_vei");function Cm(n,e,t,i,r=null){const s=n[Fc]||(n[Fc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Pm(e);if(i){const c=s[e]=Im(i,r);Ji(n,a,c,l)}else o&&(Rm(n,a,o,l),s[e]=void 0)}}const Oc=/(?:Once|Passive|Capture)$/;function Pm(n){let e;if(Oc.test(n)){e={};let i;for(;i=n.match(Oc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ci(n.slice(2)),e]}let Wo=0;const Lm=Promise.resolve(),Dm=()=>Wo||(Lm.then(()=>Wo=0),Wo=Date.now());function Im(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;pn(Um(i,t.value),e,5,[i])};return t.value=n,t.attached=Dm(),t}function Um(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Bc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Nm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Sm(n,i,o):e==="style"?bm(n,t,i):ho(e)?El(e)||Cm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fm(n,e,i,o))?(wm(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nc(n,e,i,o,s,e!=="value")):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Nc(n,e,i,o))};function Fm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Bc(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Bc(e)&&ht(t)?!1:!!(e in n||n._isVueCE&&(/[A-Z]/.test(e)||!ht(t)))}const zc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ze(e)?t=>ks(e,t):e};function Om(n){n.target.composing=!0}function Hc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xo=Symbol("_assign"),Bm={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Xo]=zc(r);const s=i||r.props&&r.props.type==="number";Ji(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=ya(a)),n[Xo](a)}),t&&Ji(n,"change",()=>{n.value=n.value.trim()}),e||(Ji(n,"compositionstart",Om),Ji(n,"compositionend",Hc),Ji(n,"change",Hc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Xo]=zc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?ya(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},zm=xt({patchProp:Nm},xm);let Vc;function Hm(){return Vc||(Vc=kp(zm))}const Vm=(...n)=>{const e=Hm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=km(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Gm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Gm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function km(n){return ht(n)?document.querySelector(n):n}var Wm=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const Xm=Symbol();var Gc;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Gc||(Gc={}));function qm(){const n=Ud(!0),e=n.run(()=>zf({}));let t=[],i=[];const r=Bf({install(s){r._a=s,s.provide(Xm,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!Wm?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qi=typeof document<"u";function Ym(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Qe=Object.assign;function qo(n,e){const t={};for(const i in e){const r=e[i];t[i]=sn(r)?r.map(n):n(r)}return t}const Hr=()=>{},sn=Array.isArray,yh=/#/g,$m=/&/g,Km=/\//g,jm=/=/g,Zm=/\?/g,Th=/\+/g,Jm=/%5B/g,Qm=/%5D/g,bh=/%5E/g,eg=/%60/g,Ah=/%7B/g,tg=/%7C/g,wh=/%7D/g,ng=/%20/g;function kl(n){return encodeURI(""+n).replace(tg,"|").replace(Jm,"[").replace(Qm,"]")}function ig(n){return kl(n).replace(Ah,"{").replace(wh,"}").replace(bh,"^")}function Ba(n){return kl(n).replace(Th,"%2B").replace(ng,"+").replace(yh,"%23").replace($m,"%26").replace(eg,"`").replace(Ah,"{").replace(wh,"}").replace(bh,"^")}function rg(n){return Ba(n).replace(jm,"%3D")}function sg(n){return kl(n).replace(yh,"%23").replace(Zm,"%3F")}function og(n){return n==null?"":sg(n).replace(Km,"%2F")}function Zr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const ag=/\/$/,lg=n=>n.replace(ag,"");function Yo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=hg(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Zr(o)}}function cg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function kc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function ug(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&hr(e.matched[i],t.matched[r])&&Rh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function hr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Rh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!fg(n[t],e[t]))return!1;return!0}function fg(n,e){return sn(n)?Wc(n,e):sn(e)?Wc(e,n):n===e}function Wc(n,e){return sn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function hg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Jr;(function(n){n.pop="pop",n.push="push"})(Jr||(Jr={}));var Vr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Vr||(Vr={}));function dg(n){if(!n)if(Qi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),lg(n)}const pg=/^[^#]+#/;function mg(n,e){return n.replace(pg,"#")+e}function gg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const bo=()=>({left:window.scrollX,top:window.scrollY});function _g(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=gg(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xc(n,e){return(history.state?history.state.position-e:-1)+n}const za=new Map;function vg(n,e){za.set(n,e)}function xg(n){const e=za.get(n);return za.delete(n),e}let Mg=()=>location.protocol+"//"+location.host;function Ch(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),kc(l,"")}return kc(t,n)+i+r}function Sg(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=Ch(n,location),_=t.value,v=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===_){o=null;return}m=v?h.position-v.position:0}else i(d);r.forEach(p=>{p(t.value,_,{delta:m,type:Jr.pop,direction:m?m>0?Vr.forward:Vr.back:Vr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(Qe({},h.state,{scroll:bo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function qc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?bo():null}}function Eg(n){const{history:e,location:t}=window,i={value:Ch(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Mg()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=Qe({},e.state,qc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Qe({},r.value,e.state,{forward:l,scroll:bo()});s(u.current,u,!0);const f=Qe({},qc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function yg(n){n=dg(n);const e=Eg(n),t=Sg(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Qe({location:"",base:n,go:i,createHref:mg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Tg(n){return typeof n=="string"||n&&typeof n=="object"}function Ph(n){return typeof n=="string"||typeof n=="symbol"}const Lh=Symbol("");var Yc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Yc||(Yc={}));function dr(n,e){return Qe(new Error,{type:n,[Lh]:!0},e)}function _n(n,e){return n instanceof Error&&Lh in n&&(e==null||!!(n.type&e))}const $c="[^/]+?",bg={sensitive:!1,strict:!1,start:!0,end:!0},Ag=/[.+*?^${}()[\]/\\]/g;function wg(n,e){const t=Qe({},bg,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Ag,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:v,optional:m,regexp:p}=h;s.push({name:_,repeatable:v,optional:m});const b=p||$c;if(b!==$c){d+=10;try{new RegExp(`(${b})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+y.message)}}let S=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,d+=20,m&&(d+=-8),v&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:v,optional:m}=d,p=_ in c?c[_]:"";if(sn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=sn(p)?p.join("/"):p;if(!b)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Rg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Dh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Rg(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Kc(i))return 1;if(Kc(r))return-1}return r.length-i.length}function Kc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Cg={type:0,value:""},Pg=/[a-zA-Z0-9_]/;function Lg(n){if(!n)return[[]];if(n==="/")return[[Cg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Pg.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Dg(n,e,t){const i=wg(Lg(n.path),t),r=Qe(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ig(n,e){const t=[],i=new Map;e=Jc({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const _=!d,v=Ug(f);v.aliasOf=d&&d.record;const m=Jc(e,f),p=[v];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const H of y)p.push(Qe({},v,{components:d?d.record.components:v.components,path:H,aliasOf:d?d.record:v}))}let b,S;for(const y of p){const{path:H}=y;if(h&&H[0]!=="/"){const P=h.record.path,L=P[P.length-1]==="/"?"":"/";y.path=h.record.path+(H&&L+H)}if(b=Dg(y,h,m),d?d.alias.push(b):(S=S||b,S!==b&&S.alias.push(b),_&&f.name&&!Zc(b)&&o(f.name)),Ih(b)&&l(b),v.children){const P=v.children;for(let L=0;L<P.length;L++)s(P[L],b,d&&d.children[L])}d=d||b}return S?()=>{o(S)}:Hr}function o(f){if(Ph(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=Og(f,t);t.splice(h,0,f),f.record.name&&!Zc(f)&&i.set(f.record.name,f)}function c(f,h){let d,_={},v,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw dr(1,{location:f});m=d.record.name,_=Qe(jc(h.params,d.keys.filter(S=>!S.optional).concat(d.parent?d.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&jc(f.params,d.keys.map(S=>S.name))),v=d.stringify(_)}else if(f.path!=null)v=f.path,d=t.find(S=>S.re.test(v)),d&&(_=d.parse(v),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(S=>S.re.test(h.path)),!d)throw dr(1,{location:f,currentLocation:h});m=d.record.name,_=Qe({},h.params,f.params),v=d.stringify(_)}const p=[];let b=d;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:v,params:_,matched:p,meta:Fg(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function jc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Ug(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Ng(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Ng(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Zc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Fg(n){return n.reduce((e,t)=>Qe(e,t.meta),{})}function Jc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Og(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Dh(n,e[s])<0?i=s:t=s+1}const r=Bg(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Bg(n){let e=n;for(;e=e.parent;)if(Ih(e)&&Dh(n,e)===0)return e}function Ih({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function zg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Th," "),o=s.indexOf("="),a=Zr(o<0?s:s.slice(0,o)),l=o<0?null:Zr(s.slice(o+1));if(a in e){let c=e[a];sn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Qc(n){let e="";for(let t in n){const i=n[t];if(t=rg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(sn(i)?i.map(s=>s&&Ba(s)):[i&&Ba(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Hg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=sn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Vg=Symbol(""),eu=Symbol(""),Wl=Symbol(""),Uh=Symbol(""),Ha=Symbol("");function br(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Yn(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(dr(4,{from:t,to:e})):h instanceof Error?l(h):Tg(h)?l(dr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function $o(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Gg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Yn(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=Ym(u)?u.default:u;o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Yn(d,t,i,o,a,r)()}))}}return s}function Gg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function tu(n){const e=Dn(Wl),t=Dn(Uh),i=Qt(()=>{const l=Ti(n.to);return e.resolve(l)}),r=Qt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(hr.bind(null,u));if(h>-1)return h;const d=nu(l[c-2]);return c>1&&nu(u)===d&&f[f.length-1].path!==d?f.findIndex(hr.bind(null,l[c-2])):h}),s=Qt(()=>r.value>-1&&qg(t.params,i.value.params)),o=Qt(()=>r.value>-1&&r.value===t.matched.length-1&&Rh(t.params,i.value.params));function a(l={}){return Xg(l)?e[Ti(n.replace)?"replace":"push"](Ti(n.to)).catch(Hr):Promise.resolve()}return{route:i,href:Qt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const kg=xo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tu,setup(n,{slots:e}){const t=_o(tu(n)),{options:i}=Dn(Wl),r=Qt(()=>({[iu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[iu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Sh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Wg=kg;function Xg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function qg(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!sn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function nu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const iu=(n,e,t)=>n??e??t,Yg=xo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Dn(Ha),r=Qt(()=>n.route||i.value),s=Dn(eu,0),o=Qt(()=>{let c=Ti(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Qt(()=>r.value.matched[o.value]);Ws(eu,Qt(()=>o.value+1)),Ws(Vg,a),Ws(Ha,r);const l=zf();return Xs(()=>[l.value,a.value,n.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!hr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return ru(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Sh(h,Qe({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ru(t.default,{Component:m,route:c})||m}}});function ru(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Nh=Yg;function $g(n){const e=Ig(n.routes,n),t=n.parseQuery||zg,i=n.stringifyQuery||Qc,r=n.history,s=br(),o=br(),a=br(),l=np(Bn);let c=Bn;Qi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qo.bind(null,N=>""+N),f=qo.bind(null,og),h=qo.bind(null,Zr);function d(N,re){let ie,fe;return Ph(N)?(ie=e.getRecordMatcher(N),fe=re):fe=N,e.addRoute(fe,ie)}function _(N){const re=e.getRecordMatcher(N);re&&e.removeRoute(re)}function v(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,re){if(re=Qe({},re||l.value),typeof N=="string"){const w=Yo(t,N,re.path),F=e.resolve({path:w.path},re),G=r.createHref(w.fullPath);return Qe(w,F,{params:h(F.params),hash:Zr(w.hash),redirectedFrom:void 0,href:G})}let ie;if(N.path!=null)ie=Qe({},N,{path:Yo(t,N.path,re.path).path});else{const w=Qe({},N.params);for(const F in w)w[F]==null&&delete w[F];ie=Qe({},N,{params:f(w)}),re.params=f(re.params)}const fe=e.resolve(ie,re),Le=N.hash||"";fe.params=u(h(fe.params));const R=cg(i,Qe({},N,{hash:ig(Le),path:fe.path})),T=r.createHref(R);return Qe({fullPath:R,hash:Le,query:i===Qc?Hg(N.query):N.query||{}},fe,{redirectedFrom:void 0,href:T})}function b(N){return typeof N=="string"?Yo(t,N,l.value.path):Qe({},N)}function S(N,re){if(c!==N)return dr(8,{from:re,to:N})}function y(N){return L(N)}function H(N){return y(Qe(b(N),{replace:!0}))}function P(N){const re=N.matched[N.matched.length-1];if(re&&re.redirect){const{redirect:ie}=re;let fe=typeof ie=="function"?ie(N):ie;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=b(fe):{path:fe},fe.params={}),Qe({query:N.query,hash:N.hash,params:fe.path!=null?{}:N.params},fe)}}function L(N,re){const ie=c=p(N),fe=l.value,Le=N.state,R=N.force,T=N.replace===!0,w=P(ie);if(w)return L(Qe(b(w),{state:typeof w=="object"?Qe({},Le,w.state):Le,force:R,replace:T}),re||ie);const F=ie;F.redirectedFrom=re;let G;return!R&&ug(i,fe,ie)&&(G=dr(16,{to:F,from:fe}),be(fe,fe,!0,!1)),(G?Promise.resolve(G):E(F,fe)).catch(j=>_n(j)?_n(j,2)?j:Se(j):k(j,F,fe)).then(j=>{if(j){if(_n(j,2))return L(Qe({replace:T},b(j.to),{state:typeof j.to=="object"?Qe({},Le,j.to.state):Le,force:R}),re||F)}else j=ee(F,fe,!0,T,Le);return D(F,fe,j),j})}function q(N,re){const ie=S(N,re);return ie?Promise.reject(ie):Promise.resolve()}function A(N){const re=J.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(N):N()}function E(N,re){let ie;const[fe,Le,R]=Kg(N,re);ie=$o(fe.reverse(),"beforeRouteLeave",N,re);for(const w of fe)w.leaveGuards.forEach(F=>{ie.push(Yn(F,N,re))});const T=q.bind(null,N,re);return ie.push(T),Me(ie).then(()=>{ie=[];for(const w of s.list())ie.push(Yn(w,N,re));return ie.push(T),Me(ie)}).then(()=>{ie=$o(Le,"beforeRouteUpdate",N,re);for(const w of Le)w.updateGuards.forEach(F=>{ie.push(Yn(F,N,re))});return ie.push(T),Me(ie)}).then(()=>{ie=[];for(const w of R)if(w.beforeEnter)if(sn(w.beforeEnter))for(const F of w.beforeEnter)ie.push(Yn(F,N,re));else ie.push(Yn(w.beforeEnter,N,re));return ie.push(T),Me(ie)}).then(()=>(N.matched.forEach(w=>w.enterCallbacks={}),ie=$o(R,"beforeRouteEnter",N,re,A),ie.push(T),Me(ie))).then(()=>{ie=[];for(const w of o.list())ie.push(Yn(w,N,re));return ie.push(T),Me(ie)}).catch(w=>_n(w,8)?w:Promise.reject(w))}function D(N,re,ie){a.list().forEach(fe=>A(()=>fe(N,re,ie)))}function ee(N,re,ie,fe,Le){const R=S(N,re);if(R)return R;const T=re===Bn,w=Qi?history.state:{};ie&&(fe||T?r.replace(N.fullPath,Qe({scroll:T&&w&&w.scroll},Le)):r.push(N.fullPath,Le)),l.value=N,be(N,re,ie,T),Se()}let $;function Q(){$||($=r.listen((N,re,ie)=>{if(!he.listening)return;const fe=p(N),Le=P(fe);if(Le){L(Qe(Le,{replace:!0}),fe).catch(Hr);return}c=fe;const R=l.value;Qi&&vg(Xc(R.fullPath,ie.delta),bo()),E(fe,R).catch(T=>_n(T,12)?T:_n(T,2)?(L(T.to,fe).then(w=>{_n(w,20)&&!ie.delta&&ie.type===Jr.pop&&r.go(-1,!1)}).catch(Hr),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),k(T,fe,R))).then(T=>{T=T||ee(fe,R,!1),T&&(ie.delta&&!_n(T,8)?r.go(-ie.delta,!1):ie.type===Jr.pop&&_n(T,20)&&r.go(-1,!1)),D(fe,R,T)}).catch(Hr)}))}let le=br(),Z=br(),te;function k(N,re,ie){Se(N);const fe=Z.list();return fe.length?fe.forEach(Le=>Le(N,re,ie)):console.error(N),Promise.reject(N)}function ve(){return te&&l.value!==Bn?Promise.resolve():new Promise((N,re)=>{le.add([N,re])})}function Se(N){return te||(te=!N,Q(),le.list().forEach(([re,ie])=>N?ie(N):re()),le.reset()),N}function be(N,re,ie,fe){const{scrollBehavior:Le}=n;if(!Qi||!Le)return Promise.resolve();const R=!ie&&xg(Xc(N.fullPath,0))||(fe||!ie)&&history.state&&history.state.scroll||null;return kf().then(()=>Le(N,re,R)).then(T=>T&&_g(T)).catch(T=>k(T,N,re))}const Ie=N=>r.go(N);let ke;const J=new Set,he={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:y,replace:H,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:ve,install(N){const re=this;N.component("RouterLink",Wg),N.component("RouterView",Nh),N.config.globalProperties.$router=re,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Ti(l)}),Qi&&!ke&&l.value===Bn&&(ke=!0,y(r.location).catch(Le=>{}));const ie={};for(const Le in Bn)Object.defineProperty(ie,Le,{get:()=>l.value[Le],enumerable:!0});N.provide(Wl,re),N.provide(Uh,Ff(ie)),N.provide(Ha,l);const fe=N.unmount;J.add(N),N.unmount=function(){J.delete(N),J.size<1&&(c=Bn,$&&$(),$=null,l.value=Bn,ke=!1,te=!1),fe()}}};function Me(N){return N.reduce((re,ie)=>re.then(()=>A(ie)),Promise.resolve())}return he}function Kg(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>hr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>hr(c,l))||r.push(l))}return[t,i,r]}const jg=xo({__name:"App",setup(n){return(e,t)=>(Vl(),rm(Ti(Nh)))}}),Zg="modulepreload",Jg=function(n){return"/"+n},su={},Qg=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Jg(l),l in su)return;su[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Zg,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xl="168",e_=0,ou=1,t_=2,Fh=1,n_=2,yn=3,Qn=0,Dt=1,wn=2,Kn=0,lr=1,au=2,lu=3,cu=4,i_=5,xi=100,r_=101,s_=102,o_=103,a_=104,l_=200,c_=201,u_=202,f_=203,Va=204,Ga=205,h_=206,d_=207,p_=208,m_=209,g_=210,__=211,v_=212,x_=213,M_=214,S_=0,E_=1,y_=2,ro=3,T_=4,b_=5,A_=6,w_=7,Oh=0,R_=1,C_=2,jn=0,P_=1,L_=2,D_=3,I_=4,U_=5,N_=6,F_=7,Bh=300,pr=301,mr=302,ka=303,Wa=304,Ao=306,Xa=1e3,Si=1001,qa=1002,qt=1003,O_=1004,gs=1005,en=1006,Ko=1007,Ei=1008,In=1009,zh=1010,Hh=1011,Qr=1012,ql=1013,wi=1014,Rn=1015,is=1016,Yl=1017,$l=1018,gr=1020,Vh=35902,Gh=1021,kh=1022,tn=1023,Wh=1024,Xh=1025,cr=1026,_r=1027,qh=1028,Kl=1029,Yh=1030,jl=1031,Zl=1033,$s=33776,Ks=33777,js=33778,Zs=33779,Ya=35840,$a=35841,Ka=35842,ja=35843,Za=36196,Ja=37492,Qa=37496,el=37808,tl=37809,nl=37810,il=37811,rl=37812,sl=37813,ol=37814,al=37815,ll=37816,cl=37817,ul=37818,fl=37819,hl=37820,dl=37821,Js=36492,pl=36494,ml=36495,$h=36283,gl=36284,_l=36285,vl=36286,B_=3200,z_=3201,H_=0,V_=1,$n="",Zt="srgb",ri="srgb-linear",Jl="display-p3",wo="display-p3-linear",so="linear",rt="srgb",oo="rec709",ao="p3",Di=7680,uu=519,G_=512,k_=513,W_=514,Kh=515,X_=516,q_=517,Y_=518,$_=519,fu=35044,hu="300 es",Cn=2e3,lo=2001;class xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let du=1234567;const Gr=Math.PI/180,es=180/Math.PI;function Mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Ql(n,e){return(n%e+e)%e}function K_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function j_(n,e,t){return n!==e?(t-n)/(e-n):0}function kr(n,e,t){return(1-t)*n+t*e}function Z_(n,e,t,i){return kr(n,e,1-Math.exp(-t*i))}function J_(n,e=1){return e-Math.abs(Ql(n,e*2)-e)}function Q_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ev(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function tv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function nv(n,e){return n+Math.random()*(e-n)}function iv(n){return n*(.5-Math.random())}function rv(n){n!==void 0&&(du=n);let e=du+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sv(n){return n*Gr}function ov(n){return n*es}function av(n){return(n&n-1)===0&&n!==0}function lv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function uv(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pu={DEG2RAD:Gr,RAD2DEG:es,generateUUID:Mr,clamp:Rt,euclideanModulo:Ql,mapLinear:K_,inverseLerp:j_,lerp:kr,damp:Z_,pingpong:J_,smoothstep:Q_,smootherstep:ev,randInt:tv,randFloat:nv,randFloatSpread:iv,seededRandom:rv,degToRad:sv,radToDeg:ov,isPowerOfTwo:av,ceilPowerOfTwo:lv,floorPowerOfTwo:cv,setQuaternionFromProperEuler:uv,normalize:bt,denormalize:er};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],v=r[0],m=r[3],p=r[6],b=r[1],S=r[4],y=r[7],H=r[2],P=r[5],L=r[8];return s[0]=o*v+a*b+l*H,s[3]=o*m+a*S+l*P,s[6]=o*p+a*y+l*L,s[1]=c*v+u*b+f*H,s[4]=c*m+u*S+f*P,s[7]=c*p+u*y+f*L,s[2]=h*v+d*b+_*H,s[5]=h*m+d*S+_*P,s[8]=h*p+d*y+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jo.makeScale(e,t)),this}rotate(e){return this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jo=new Ge;function jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fv(){const n=co("canvas");return n.style.display="block",n}const mu={};function Wr(n){n in mu||(mu[n]=!0,console.warn(n))}function hv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const gu=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_u=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ar={[ri]:{transfer:so,primaries:oo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Zt]:{transfer:rt,primaries:oo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wo]:{transfer:so,primaries:ao,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(_u),fromReference:n=>n.applyMatrix3(gu)},[Jl]:{transfer:rt,primaries:ao,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(_u),fromReference:n=>n.applyMatrix3(gu).convertLinearToSRGB()}},dv=new Set([ri,wo]),Ze={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ar[e].toReference,r=Ar[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ar[n].primaries},getTransfer:function(n){return n===$n?so:Ar[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ar[e].luminanceCoefficients)}};function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class pv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=co("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ur(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mv=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jo(r[o].image)):s.push(Jo(r[o]))}else s=Jo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gv=0;class Pt extends xr{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=Si,r=Si,s=en,o=Ei,a=tn,l=In,c=Pt.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Mr(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xa:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xa:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Bh;Pt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(d+1)/2,H=(p+1)/2,P=(u+h)/4,L=(f+v)/4,q=(_+m)/4;return S>y&&S>H?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=P/i,s=L/i):y>H?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=P/r,s=q/r):H<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(H),i=L/s,r=q/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-v)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _v extends xr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends _v{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jh extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vv extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*v,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const H=Math.sqrt(S),P=Math.atan2(H,p*b);m=Math.sin(m*P)/H,a=Math.sin(a*P)/H}const y=a*b;if(l=l*m+h*y,c=c*m+d*y,u=u*m+_*y,f=f*m+v*y,m===1-a){const H=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=H,c*=H,u*=H,f*=H}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new W,vu=new rs;class ss{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$t):$t.fromBufferAttribute(s,o),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox)),_s.applyMatrix4(e.matrixWorld),this.union(_s)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),vs.subVectors(this.max,wr),Ui.subVectors(e.a,wr),Ni.subVectors(e.b,wr),Fi.subVectors(e.c,wr),zn.subVectors(Ni,Ui),Hn.subVectors(Fi,Ni),ci.subVectors(Ui,Fi);let t=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ci.z,ci.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ci.z,0,-ci.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ci.y,ci.x,0];return!ea(t,Ui,Ni,Fi,vs)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,Ui,Ni,Fi,vs))?!1:(xs.crossVectors(zn,Hn),t=[xs.x,xs.y,xs.z],ea(t,Ui,Ni,Fi,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new W,new W,new W,new W,new W,new W,new W,new W],$t=new W,_s=new ss,Ui=new W,Ni=new W,Fi=new W,zn=new W,Hn=new W,ci=new W,wr=new W,vs=new W,xs=new W,ui=new W;function ea(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ui.fromArray(n,s);const a=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=i.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xv=new ss,Rr=new W,ta=new W;class os{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(ta)),this.expandByPoint(Rr.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new W,na=new W,Ms=new W,Vn=new W,ia=new W,Ss=new W,ra=new W;class ec{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){na.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(na);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ms),a=Vn.dot(this.direction),l=-Vn.dot(Ms),c=Vn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(na).addScaledVector(Ms,h),d}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const i=xn.dot(this.direction),r=xn.dot(xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,r,s){ia.subVectors(t,e),Ss.subVectors(i,e),ra.crossVectors(ia,Ss);let o=this.direction.dot(ra),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const l=a*this.direction.dot(Ss.crossVectors(Vn,Ss));if(l<0)return null;const c=a*this.direction.dot(ia.cross(Vn));if(c<0||l+c>o)return null;const u=-a*Vn.dot(ra);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,_,v,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Oi.setFromMatrixColumn(e,0).length(),s=1/Oi.setFromMatrixColumn(e,1).length(),o=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,v=c*f;t[0]=h+v*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mv,e,Sv)}lookAt(e,t,i){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Gn.crossVectors(i,Nt),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Gn.crossVectors(i,Nt)),Gn.normalize(),Es.crossVectors(Nt,Gn),r[0]=Gn.x,r[4]=Es.x,r[8]=Nt.x,r[1]=Gn.y,r[5]=Es.y,r[9]=Nt.y,r[2]=Gn.z,r[6]=Es.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],v=i[6],m=i[10],p=i[14],b=i[3],S=i[7],y=i[11],H=i[15],P=r[0],L=r[4],q=r[8],A=r[12],E=r[1],D=r[5],ee=r[9],$=r[13],Q=r[2],le=r[6],Z=r[10],te=r[14],k=r[3],ve=r[7],Se=r[11],be=r[15];return s[0]=o*P+a*E+l*Q+c*k,s[4]=o*L+a*D+l*le+c*ve,s[8]=o*q+a*ee+l*Z+c*Se,s[12]=o*A+a*$+l*te+c*be,s[1]=u*P+f*E+h*Q+d*k,s[5]=u*L+f*D+h*le+d*ve,s[9]=u*q+f*ee+h*Z+d*Se,s[13]=u*A+f*$+h*te+d*be,s[2]=_*P+v*E+m*Q+p*k,s[6]=_*L+v*D+m*le+p*ve,s[10]=_*q+v*ee+m*Z+p*Se,s[14]=_*A+v*$+m*te+p*be,s[3]=b*P+S*E+y*Q+H*k,s[7]=b*L+S*D+y*le+H*ve,s[11]=b*q+S*ee+y*Z+H*Se,s[15]=b*A+S*$+y*te+H*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+v*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],v=e[13],m=e[14],p=e[15],b=f*m*c-v*h*c+v*l*d-a*m*d-f*l*p+a*h*p,S=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,y=u*v*c-_*f*c+_*a*d-o*v*d-u*a*p+o*f*p,H=_*f*l-u*v*l-_*a*h+o*v*h+u*a*m-o*f*m,P=t*b+i*S+r*y+s*H;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=b*L,e[1]=(v*h*s-f*m*s-v*r*d+i*m*d+f*r*p-i*h*p)*L,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*L,e[4]=S*L,e[5]=(u*m*s-_*h*s+_*r*d-t*m*d-u*r*p+t*h*p)*L,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*L,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*L,e[8]=y*L,e[9]=(_*f*s-u*v*s-_*i*d+t*v*d+u*i*p-t*f*p)*L,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*p+t*a*p)*L,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*L,e[12]=H*L,e[13]=(u*v*r-_*f*r+_*i*h-t*v*h-u*i*m+t*f*m)*L,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*m-t*a*m)*L,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,v=o*u,m=o*f,p=a*f,b=l*c,S=l*u,y=l*f,H=i.x,P=i.y,L=i.z;return r[0]=(1-(v+p))*H,r[1]=(d+y)*H,r[2]=(_-S)*H,r[3]=0,r[4]=(d-y)*P,r[5]=(1-(h+p))*P,r[6]=(m+b)*P,r[7]=0,r[8]=(_+S)*L,r[9]=(m-b)*L,r[10]=(1-(h+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Oi.set(r[0],r[1],r[2]).length();const o=Oi.set(r[4],r[5],r[6]).length(),a=Oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const c=1/s,u=1/o,f=1/a;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,t.setFromRotationMatrix(Kt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Cn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,_;if(a===Cn)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===lo)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Cn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let _,v;if(a===Cn)_=(o+s)*f,v=-2*f;else if(a===lo)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Oi=new W,Kt=new lt,Mv=new W(0,0,0),Sv=new W(1,1,1),Gn=new W,Es=new W,Nt=new W,xu=new lt,Mu=new rs;class Un{constructor(e=0,t=0,i=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ev=0;const Su=new W,Bi=new rs,Mn=new lt,ys=new W,Cr=new W,yv=new W,Tv=new rs,Eu=new W(1,0,0),yu=new W(0,1,0),Tu=new W(0,0,1),bu={type:"added"},bv={type:"removed"},zi={type:"childadded",child:null},sa={type:"childremoved",child:null};class Lt extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new W,t=new Un,i=new rs,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ge}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(yu,e)}rotateZ(e){return this.rotateOnAxis(Tu,e)}translateOnAxis(e,t){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(yu,e)}translateZ(e){return this.translateOnAxis(Tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ys.copy(e):ys.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Cr,ys,this.up):Mn.lookAt(ys,Cr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Bi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bv),sa.child=e,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Tv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new W(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new W,Sn=new W,oa=new W,En=new W,Hi=new W,Vi=new W,Au=new W,aa=new W,la=new W,ca=new W;class fn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jt.subVectors(r,t),Sn.subVectors(i,t),oa.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(Sn),l=jt.dot(oa),c=Sn.dot(Sn),u=Sn.dot(oa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static isFrontFacing(e,t,i,r){return jt.subVectors(i,t),Sn.subVectors(e,t),jt.cross(Sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),jt.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Hi.subVectors(r,i),Vi.subVectors(s,i),aa.subVectors(e,i);const l=Hi.dot(aa),c=Vi.dot(aa);if(l<=0&&c<=0)return t.copy(i);la.subVectors(e,r);const u=Hi.dot(la),f=Vi.dot(la);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Hi,o);ca.subVectors(e,s);const d=Hi.dot(ca),_=Vi.dot(ca);if(_>=0&&d<=_)return t.copy(s);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Vi,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Au.subVectors(s,r),a=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Au,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Ql(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ua(o,s,e+1/3),this.g=ua(o,s,e),this.b=ua(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Ze.fromWorkingColorSpace(St.copy(this),e),Math.round(Rt(St.r*255,0,255))*65536+Math.round(Rt(St.g*255,0,255))*256+Math.round(Rt(St.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Zt){Ze.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Ts);const i=kr(kn.h,Ts.h,t),r=kr(kn.s,Ts.s,t),s=kr(kn.l,Ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Je;Je.NAMES=ed;let Av=0;class Sr extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=lr,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Va&&(i.blendSrc=this.blendSrc),this.blendDst!==Ga&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class td extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new W,bs=new qe;class dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fu&&(e.usage=this.usage),e}}class nd extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class id extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zn extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wv=0;const kt=new lt,fa=new Lt,Gi=new W,Ft=new ss,Pr=new ss,mt=new W;class on extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?id:nd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Ft.min,Pr.min),Ft.expandByPoint(mt),mt.addVectors(Ft.max,Pr.max),Ft.expandByPoint(mt)):(Ft.expandByPoint(Pr.min),Ft.expandByPoint(Pr.max))}Ft.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(e,c),mt.add(Gi)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let q=0;q<i.count;q++)a[q]=new W,l[q]=new W;const c=new W,u=new W,f=new W,h=new qe,d=new qe,_=new qe,v=new W,m=new W;function p(q,A,E){c.fromBufferAttribute(i,q),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,q),d.fromBufferAttribute(s,A),_.fromBufferAttribute(s,E),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),a[q].add(v),a[A].add(v),a[E].add(v),l[q].add(m),l[A].add(m),l[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let q=0,A=b.length;q<A;++q){const E=b[q],D=E.start,ee=E.count;for(let $=D,Q=D+ee;$<Q;$+=3)p(e.getX($+0),e.getX($+1),e.getX($+2))}const S=new W,y=new W,H=new W,P=new W;function L(q){H.fromBufferAttribute(r,q),P.copy(H);const A=a[q];S.copy(A),S.sub(H.multiplyScalar(H.dot(A))).normalize(),y.crossVectors(P,A);const D=y.dot(l[q])<0?-1:1;o.setXYZW(q,S.x,S.y,S.z,D)}for(let q=0,A=b.length;q<A;++q){const E=b[q],D=E.start,ee=E.count;for(let $=D,Q=D+ee;$<Q;$+=3)L(e.getX($+0)),L(e.getX($+1)),L(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new dn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wu=new lt,fi=new ec,As=new os,Ru=new W,ki=new W,Wi=new W,Xi=new W,ha=new W,ws=new W,Rs=new qe,Cs=new qe,Ps=new qe,Cu=new W,Pu=new W,Lu=new W,Ls=new W,Ds=new W;class Pn extends Lt{constructor(e=new on,t=new td){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ha.fromBufferAttribute(f,e),o?ws.addScaledVector(ha,u):ws.addScaledVector(ha.sub(t),u))}t.add(ws)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(As.containsPoint(fi.origin)===!1&&(fi.intersectSphere(As,Ru)===null||fi.origin.distanceToSquared(Ru)>(e.far-e.near)**2))&&(wu.copy(s).invert(),fi.copy(e.ray).applyMatrix4(wu),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,H=S;y<H;y+=3){const P=a.getX(y),L=a.getX(y+1),q=a.getX(y+2);r=Is(this,p,e,i,c,u,f,P,L,q),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const b=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);r=Is(this,o,e,i,c,u,f,b,S,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,H=S;y<H;y+=3){const P=y,L=y+1,q=y+2;r=Is(this,p,e,i,c,u,f,P,L,q),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const b=m,S=m+1,y=m+2;r=Is(this,o,e,i,c,u,f,b,S,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Rv(n,e,t,i,r,s,o,a){let l;if(e.side===Dt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qn,a),l===null)return null;Ds.copy(a),Ds.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ds);return c<t.near||c>t.far?null:{distance:c,point:Ds.clone(),object:n}}function Is(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ki),n.getVertexPosition(l,Wi),n.getVertexPosition(c,Xi);const u=Rv(n,e,t,i,ki,Wi,Xi,Ls);if(u){r&&(Rs.fromBufferAttribute(r,a),Cs.fromBufferAttribute(r,l),Ps.fromBufferAttribute(r,c),u.uv=fn.getInterpolation(Ls,ki,Wi,Xi,Rs,Cs,Ps,new qe)),s&&(Rs.fromBufferAttribute(s,a),Cs.fromBufferAttribute(s,l),Ps.fromBufferAttribute(s,c),u.uv1=fn.getInterpolation(Ls,ki,Wi,Xi,Rs,Cs,Ps,new qe)),o&&(Cu.fromBufferAttribute(o,a),Pu.fromBufferAttribute(o,l),Lu.fromBufferAttribute(o,c),u.normal=fn.getInterpolation(Ls,ki,Wi,Xi,Cu,Pu,Lu,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};fn.getNormal(ki,Wi,Xi,f.normal),u.face=f}return u}class as extends on{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zn(c,3)),this.setAttribute("normal",new Zn(u,3)),this.setAttribute("uv",new Zn(f,2));function _(v,m,p,b,S,y,H,P,L,q,A){const E=y/L,D=H/q,ee=y/2,$=H/2,Q=P/2,le=L+1,Z=q+1;let te=0,k=0;const ve=new W;for(let Se=0;Se<Z;Se++){const be=Se*D-$;for(let Ie=0;Ie<le;Ie++){const ke=Ie*E-ee;ve[v]=ke*b,ve[m]=be*S,ve[p]=Q,c.push(ve.x,ve.y,ve.z),ve[v]=0,ve[m]=0,ve[p]=P>0?1:-1,u.push(ve.x,ve.y,ve.z),f.push(Ie/L),f.push(1-Se/q),te+=1}}for(let Se=0;Se<q;Se++)for(let be=0;be<L;be++){const Ie=h+be+le*Se,ke=h+be+le*(Se+1),J=h+(be+1)+le*(Se+1),he=h+(be+1)+le*Se;l.push(Ie,ke,he),l.push(ke,J,he),k+=6}a.addGroup(d,k,A),d+=k,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=vr(n[t]);for(const r in i)e[r]=i[r]}return e}function Cv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Pv={clone:vr,merge:At};var Lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lv,this.fragmentShader=Dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sd extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new W,Du=new qe,Iu=new qe;class Jt extends sd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Iu),t.subVectors(Iu,Du)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Yi=1;class Iv extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(qi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new Jt(qi,Yi,e,t);s.layers=this.layers,this.add(s);const o=new Jt(qi,Yi,e,t);o.layers=this.layers,this.add(o);const a=new Jt(qi,Yi,e,t);a.layers=this.layers,this.add(a);const l=new Jt(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class od extends Pt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uv extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new od(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new as(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Kn});s.uniforms.tEquirect.value=t;const o=new Pn(r,s),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=en),new Iv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const da=new W,Nv=new W,Fv=new Ge;class gi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=da.subVectors(i,t).cross(Nv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(da),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Fv.getNormalMatrix(e),r=this.coplanarPoint(da).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new os,Us=new W;class ad{constructor(e=new gi,t=new gi,i=new gi,r=new gi,s=new gi,o=new gi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],v=r[10],m=r[11],p=r[12],b=r[13],S=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-d,y-p).normalize(),i[1].setComponents(l+s,h+c,m+d,y+p).normalize(),i[2].setComponents(l+o,h+u,m+_,y+b).normalize(),i[3].setComponents(l-o,h-u,m-_,y-b).normalize(),i[4].setComponents(l-a,h-f,m-v,y-S).normalize(),t===Cn)i[5].setComponents(l+a,h+f,m+v,y+S).normalize();else if(t===lo)i[5].setComponents(a,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Us.x=r.normal.x>0?e.max.x:e.min.x,Us.y=r.normal.y>0?e.max.y:e.min.y,Us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ld(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ov(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let d=0,_=h.length;d<_;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ro extends on{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let S=0;S<c;S++){const y=S*f-s;_.push(y,-b,0),v.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const S=b+c*p,y=b+c*(p+1),H=b+1+c*(p+1),P=b+1+c*p;d.push(S,y,P),d.push(y,H,P)}this.setIndex(d),this.setAttribute("position",new Zn(_,3)),this.setAttribute("normal",new Zn(v,3)),this.setAttribute("uv",new Zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,a0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,P0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ox=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Bv,alphahash_pars_fragment:zv,alphamap_fragment:Hv,alphamap_pars_fragment:Vv,alphatest_fragment:Gv,alphatest_pars_fragment:kv,aomap_fragment:Wv,aomap_pars_fragment:Xv,batching_pars_vertex:qv,batching_vertex:Yv,begin_vertex:$v,beginnormal_vertex:Kv,bsdfs:jv,iridescence_fragment:Zv,bumpmap_pars_fragment:Jv,clipping_planes_fragment:Qv,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:r0,color_pars_vertex:s0,color_vertex:o0,common:a0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:u0,displacementmap_vertex:f0,emissivemap_fragment:h0,emissivemap_pars_fragment:d0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:_0,envmap_pars_fragment:v0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:P0,envmap_vertex:M0,fog_vertex:S0,fog_pars_vertex:E0,fog_fragment:y0,fog_pars_fragment:T0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:A0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:R0,lights_pars_begin:C0,lights_toon_fragment:L0,lights_toon_pars_fragment:D0,lights_phong_fragment:I0,lights_phong_pars_fragment:U0,lights_physical_fragment:N0,lights_physical_pars_fragment:F0,lights_fragment_begin:O0,lights_fragment_maps:B0,lights_fragment_end:z0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:k0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:q0,map_particle_pars_fragment:Y0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:K0,morphinstance_vertex:j0,morphcolor_vertex:Z0,morphnormal_vertex:J0,morphtarget_pars_vertex:Q0,morphtarget_vertex:ex,normal_fragment_begin:tx,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:rx,normal_vertex:sx,normalmap_pars_fragment:ox,clearcoat_normal_fragment_begin:ax,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:ux,opaque_fragment:fx,packing:hx,premultiplied_alpha_fragment:dx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:_x,roughnessmap_pars_fragment:vx,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:Mx,shadowmap_vertex:Sx,shadowmask_pars_fragment:Ex,skinbase_vertex:yx,skinning_pars_vertex:Tx,skinning_vertex:bx,skinnormal_vertex:Ax,specularmap_fragment:wx,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Px,transmission_fragment:Lx,transmission_pars_fragment:Dx,uv_pars_fragment:Ix,uv_pars_vertex:Ux,uv_vertex:Nx,worldpos_vertex:Fx,background_vert:Ox,background_frag:Bx,backgroundCube_vert:zx,backgroundCube_frag:Hx,cube_vert:Vx,cube_frag:Gx,depth_vert:kx,depth_frag:Wx,distanceRGBA_vert:Xx,distanceRGBA_frag:qx,equirect_vert:Yx,equirect_frag:$x,linedashed_vert:Kx,linedashed_frag:jx,meshbasic_vert:Zx,meshbasic_frag:Jx,meshlambert_vert:Qx,meshlambert_frag:eM,meshmatcap_vert:tM,meshmatcap_frag:nM,meshnormal_vert:iM,meshnormal_frag:rM,meshphong_vert:sM,meshphong_frag:oM,meshphysical_vert:aM,meshphysical_frag:lM,meshtoon_vert:cM,meshtoon_frag:uM,points_vert:fM,points_frag:hM,shadow_vert:dM,shadow_frag:pM,sprite_vert:mM,sprite_frag:gM},xe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},un={basic:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:At([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:At([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:At([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:At([xe.points,xe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:At([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:At([xe.common,xe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:At([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:At([xe.sprite,xe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:At([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:At([xe.lights,xe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};un.physical={uniforms:At([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ns={r:0,b:0,g:0},di=new Un,_M=new lt;function vM(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function v(b){let S=!1;const y=_(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0);const H=n.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){const y=_(S);y&&(y.isCubeTexture||y.mapping===Ao)?(u===void 0&&(u=new Pn(new as(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:vr(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),di.copy(S.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_M.makeRotationFromEuler(di)),u.material.toneMapped=Ze.getTransfer(y.colorSpace)!==rt,(f!==y||h!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Pn(new Ro(2,2),new ei({name:"BackgroundMaterial",uniforms:vr(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(Ns,rd(n)),i.buffers.color.setClear(Ns.r,Ns.g,Ns.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:v,addToRenderList:m}}function xM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,D,ee,$,Q){let le=!1;const Z=f($,ee,D);s!==Z&&(s=Z,c(s.object)),le=d(E,$,ee,Q),le&&_(E,$,ee,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,y(E,D,ee,$),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,D,ee){const $=ee.wireframe===!0;let Q=i[E.id];Q===void 0&&(Q={},i[E.id]=Q);let le=Q[D.id];le===void 0&&(le={},Q[D.id]=le);let Z=le[$];return Z===void 0&&(Z=h(l()),le[$]=Z),Z}function h(E){const D=[],ee=[],$=[];for(let Q=0;Q<t;Q++)D[Q]=0,ee[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:ee,attributeDivisors:$,object:E,attributes:{},index:null}}function d(E,D,ee,$){const Q=s.attributes,le=D.attributes;let Z=0;const te=ee.getAttributes();for(const k in te)if(te[k].location>=0){const Se=Q[k];let be=le[k];if(be===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(be=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(be=E.instanceColor)),Se===void 0||Se.attribute!==be||be&&Se.data!==be.data)return!0;Z++}return s.attributesNum!==Z||s.index!==$}function _(E,D,ee,$){const Q={},le=D.attributes;let Z=0;const te=ee.getAttributes();for(const k in te)if(te[k].location>=0){let Se=le[k];Se===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(Se=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(Se=E.instanceColor));const be={};be.attribute=Se,Se&&Se.data&&(be.data=Se.data),Q[k]=be,Z++}s.attributes=Q,s.attributesNum=Z,s.index=$}function v(){const E=s.newAttributes;for(let D=0,ee=E.length;D<ee;D++)E[D]=0}function m(E){p(E,0)}function p(E,D){const ee=s.newAttributes,$=s.enabledAttributes,Q=s.attributeDivisors;ee[E]=1,$[E]===0&&(n.enableVertexAttribArray(E),$[E]=1),Q[E]!==D&&(n.vertexAttribDivisor(E,D),Q[E]=D)}function b(){const E=s.newAttributes,D=s.enabledAttributes;for(let ee=0,$=D.length;ee<$;ee++)D[ee]!==E[ee]&&(n.disableVertexAttribArray(ee),D[ee]=0)}function S(E,D,ee,$,Q,le,Z){Z===!0?n.vertexAttribIPointer(E,D,ee,Q,le):n.vertexAttribPointer(E,D,ee,$,Q,le)}function y(E,D,ee,$){v();const Q=$.attributes,le=ee.getAttributes(),Z=D.defaultAttributeValues;for(const te in le){const k=le[te];if(k.location>=0){let ve=Q[te];if(ve===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor)),ve!==void 0){const Se=ve.normalized,be=ve.itemSize,Ie=e.get(ve);if(Ie===void 0)continue;const ke=Ie.buffer,J=Ie.type,he=Ie.bytesPerElement,Me=J===n.INT||J===n.UNSIGNED_INT||ve.gpuType===ql;if(ve.isInterleavedBufferAttribute){const N=ve.data,re=N.stride,ie=ve.offset;if(N.isInstancedInterleavedBuffer){for(let fe=0;fe<k.locationSize;fe++)p(k.location+fe,N.meshPerAttribute);E.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let fe=0;fe<k.locationSize;fe++)m(k.location+fe);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let fe=0;fe<k.locationSize;fe++)S(k.location+fe,be/k.locationSize,J,Se,re*he,(ie+be/k.locationSize*fe)*he,Me)}else{if(ve.isInstancedBufferAttribute){for(let N=0;N<k.locationSize;N++)p(k.location+N,ve.meshPerAttribute);E.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let N=0;N<k.locationSize;N++)m(k.location+N);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let N=0;N<k.locationSize;N++)S(k.location+N,be/k.locationSize,J,Se,be*he,be/k.locationSize*N*he,Me)}}else if(Z!==void 0){const Se=Z[te];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(k.location,Se);break;case 3:n.vertexAttrib3fv(k.location,Se);break;case 4:n.vertexAttrib4fv(k.location,Se);break;default:n.vertexAttrib1fv(k.location,Se)}}}}b()}function H(){q();for(const E in i){const D=i[E];for(const ee in D){const $=D[ee];for(const Q in $)u($[Q].object),delete $[Q];delete D[ee]}delete i[E]}}function P(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const ee in D){const $=D[ee];for(const Q in $)u($[Q].object),delete $[Q];delete D[ee]}delete i[E.id]}function L(E){for(const D in i){const ee=i[D];if(ee[E.id]===void 0)continue;const $=ee[E.id];for(const Q in $)u($[Q].object),delete $[Q];delete ee[E.id]}}function q(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:q,resetDefaultState:A,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function MM(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];for(let v=0;v<h.length;v++)t.update(_,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function SM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==tn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const L=P===is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==In&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Rn&&!L)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,H=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:y,maxSamples:H}}function EM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new gi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,S=b*4;let y=p.clippingState||null;l.value=y,y=u(_,h,S,d);for(let H=0;H!==S;++H)y[H]=t[H];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=d+v*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=d;S!==v;++S,y+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function yM(n){let e=new WeakMap;function t(o,a){return a===ka?o.mapping=pr:a===Wa&&(o.mapping=mr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ka||a===Wa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Uv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cd extends sd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const tr=4,Uu=[.125,.215,.35,.446,.526,.582],Mi=20,pa=new cd,Nu=new Je;let ma=null,ga=0,_a=0,va=!1;const _i=(1+Math.sqrt(5))/2,$i=1/_i,Fu=[new W(-_i,$i,0),new W(_i,$i,0),new W(-$i,0,_i),new W($i,0,_i),new W(0,_i,-$i),new W(0,_i,$i),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=va,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:is,format:tn,colorSpace:ri,depthBuffer:!1},r=Bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TM(s)),this._blurMaterial=bM(s,e,t)}return r}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,i,r){const a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Nu),u.toneMapping=jn,u.autoClear=!1;const d=new td({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),_=new Pn(new as,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Nu),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Fs(r,b*S,p>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fu[(r-s-1)%Fu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let b=0;for(let L=0;L<Mi;++L){const q=L/v,A=Math.exp(-q*q/2);p.push(A),L===0?b+=A:L<m&&(b+=2*A)}for(let L=0;L<p.length;L++)p[L]=p[L]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-i;const y=this._sizeLods[r],H=3*y*(r>S-tr?r-S+tr:0),P=4*(this._cubeSize-y);Fs(t,H,P,3*y,2*y),l.setRenderTarget(t),l.render(f,pa)}}function TM(n){const e=[],t=[],i=[];let r=n;const s=n-tr+1+Uu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-tr?l=Uu[o-n+tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,v=3,m=2,p=1,b=new Float32Array(v*_*d),S=new Float32Array(m*_*d),y=new Float32Array(p*_*d);for(let P=0;P<d;P++){const L=P%3*2/3-1,q=P>2?0:-1,A=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];b.set(A,v*_*P),S.set(h,m*_*P);const E=[P,P,P,P,P,P];y.set(E,p*_*P)}const H=new on;H.setAttribute("position",new dn(b,v)),H.setAttribute("uv",new dn(S,m)),H.setAttribute("faceIndex",new dn(y,p)),e.push(H),r>tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bu(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bM(n,e,t){const i=new Float32Array(Mi),r=new W(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function zu(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Hu(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ka||l===Wa,u=l===pr||l===mr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ou(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Ou(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Wr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function RM(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const v=d[_];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let S=0,y=b.length;S<y;S+=3){const H=b[S+0],P=b[S+1],L=b[S+2];h.push(H,P,P,L,L,H)}}else if(_!==void 0){const b=_.array;v=_.version;for(let S=0,y=b.length/3-1;S<y;S+=3){const H=S+0,P=S+1,L=S+2;h.push(H,P,P,L,L,H)}}else return;const m=new(jh(h)?id:nd)(h,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function CM(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*o,_),t.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function f(h,d,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,v,0,_);let p=0;for(let b=0;b<_;b++)p+=d[b];for(let b=0;b<v.length;b++)t.update(p,i,v[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function PM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function LM(n,e,t){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let A=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),_===!0&&(S=2),v===!0&&(S=3);let y=a.attributes.position.count*S,H=1;y>e.maxTextureSize&&(H=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const P=new Float32Array(y*H*4*f),L=new Jh(P,y,H,f);L.type=Rn,L.needsUpdate=!0;const q=S*4;for(let E=0;E<f;E++){const D=m[E],ee=p[E],$=b[E],Q=y*H*4*E;for(let le=0;le<D.count;le++){const Z=le*q;d===!0&&(r.fromBufferAttribute(D,le),P[Q+Z+0]=r.x,P[Q+Z+1]=r.y,P[Q+Z+2]=r.z,P[Q+Z+3]=0),_===!0&&(r.fromBufferAttribute(ee,le),P[Q+Z+4]=r.x,P[Q+Z+5]=r.y,P[Q+Z+6]=r.z,P[Q+Z+7]=0),v===!0&&(r.fromBufferAttribute($,le),P[Q+Z+8]=r.x,P[Q+Z+9]=r.y,P[Q+Z+10]=r.z,P[Q+Z+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new qe(y,H)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function DM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ud extends Pt{constructor(e,t,i,r,s,o,a,l,c,u=cr){if(u!==cr&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===cr&&(i=wi),i===void 0&&u===_r&&(i=gr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fd=new Pt,Vu=new ud(1,1),hd=new Jh,dd=new vv,pd=new od,Gu=[],ku=[],Wu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function Er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gu[r];if(s===void 0&&(s=new Float32Array(r),Gu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Co(n,e){let t=ku[e];t===void 0&&(t=new Int32Array(e),ku[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function IM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function OM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;qu.set(i),n.uniformMatrix2fv(this.addr,!1,qu),pt(t,i)}}function BM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Xu.set(i),n.uniformMatrix3fv(this.addr,!1,Xu),pt(t,i)}}function zM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Wu.set(i),n.uniformMatrix4fv(this.addr,!1,Wu),pt(t,i)}}function HM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function WM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function XM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function $M(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Vu.compareFunction=Kh,s=Vu):s=fd,t.setTexture2D(e||s,r)}function KM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dd,r)}function jM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pd,r)}function ZM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hd,r)}function JM(n){switch(n){case 5126:return IM;case 35664:return UM;case 35665:return NM;case 35666:return FM;case 35674:return OM;case 35675:return BM;case 35676:return zM;case 5124:case 35670:return HM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return kM;case 5125:return WM;case 36294:return XM;case 36295:return qM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return ZM}}function QM(n,e){n.uniform1fv(this.addr,e)}function eS(n,e){const t=Er(e,this.size,2);n.uniform2fv(this.addr,t)}function tS(n,e){const t=Er(e,this.size,3);n.uniform3fv(this.addr,t)}function nS(n,e){const t=Er(e,this.size,4);n.uniform4fv(this.addr,t)}function iS(n,e){const t=Er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rS(n,e){const t=Er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sS(n,e){const t=Er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oS(n,e){n.uniform1iv(this.addr,e)}function aS(n,e){n.uniform2iv(this.addr,e)}function lS(n,e){n.uniform3iv(this.addr,e)}function cS(n,e){n.uniform4iv(this.addr,e)}function uS(n,e){n.uniform1uiv(this.addr,e)}function fS(n,e){n.uniform2uiv(this.addr,e)}function hS(n,e){n.uniform3uiv(this.addr,e)}function dS(n,e){n.uniform4uiv(this.addr,e)}function pS(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||fd,s[o])}function mS(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||dd,s[o])}function gS(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||pd,s[o])}function _S(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||hd,s[o])}function vS(n){switch(n){case 5126:return QM;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return oS;case 35667:case 35671:return aS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return fS;case 36295:return hS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return gS;case 36289:case 36303:case 36311:case 36292:return _S}}class xS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=JM(t.type)}}class MS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vS(t.type)}}class SS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Yu(n,e){n.seq.push(e),n.map[e.id]=e}function ES(n,e,t){const i=n.name,r=i.length;for(xa.lastIndex=0;;){const s=xa.exec(i),o=xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yu(t,c===void 0?new xS(a,n,e):new MS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new SS(a),Yu(t,f)),t=f}}}class Qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ES(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function $u(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yS=37297;let TS=0;function bS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function AS(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===ao&&t===oo?i="LinearDisplayP3ToLinearSRGB":e===oo&&t===ao&&(i="LinearSRGBToLinearDisplayP3"),n){case ri:case wo:return[i,"LinearTransferOETF"];case Zt:case Jl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ku(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bS(n.getShaderSource(e),o)}else return r}function wS(n,e){const t=AS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function RS(n,e){let t;switch(e){case P_:t="Linear";break;case L_:t="Reinhard";break;case D_:t="Cineon";break;case I_:t="ACESFilmic";break;case N_:t="AgX";break;case F_:t="Neutral";break;case U_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Os=new W;function CS(){Ze.getLuminanceCoefficients(Os);const n=Os.x.toFixed(4),e=Os.y.toFixed(4),t=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function LS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ir(n){return n!==""}function ju(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IS=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(n){return n.replace(IS,NS)}const US=new Map;function NS(n,e){let t=Ve[e];if(t===void 0){const i=US.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}const FS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(FS,OS)}function OS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function zS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function VS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oh:e="ENVMAP_BLENDING_MULTIPLY";break;case R_:e="ENVMAP_BLENDING_MIX";break;case C_:e="ENVMAP_BLENDING_ADD";break}return e}function GS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function kS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=BS(t),c=zS(t),u=HS(t),f=VS(t),h=GS(t),d=PS(t),_=LS(s),v=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==jn?RS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,wS("linearToOutputTexel",t.outputColorSpace),CS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=xl(o),o=ju(o,t),o=Zu(o,t),a=xl(a),a=ju(a,t),a=Zu(a,t),o=Ju(o),a=Ju(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+o,y=b+p+a,H=$u(r,r.VERTEX_SHADER,S),P=$u(r,r.FRAGMENT_SHADER,y);r.attachShader(v,H),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){const ee=r.getProgramInfoLog(v).trim(),$=r.getShaderInfoLog(H).trim(),Q=r.getShaderInfoLog(P).trim();let le=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,H,P);else{const te=Ku(r,H,"vertex"),k=Ku(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ee+`
`+te+`
`+k)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):($===""||Q==="")&&(Z=!1);Z&&(D.diagnostics={runnable:le,programLog:ee,vertexShader:{log:$,prefix:m},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(H),r.deleteShader(P),q=new Qs(r,v),A=DS(r,v)}let q;this.getUniforms=function(){return q===void 0&&L(this),q};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,yS)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=H,this.fragmentShader=P,this}let WS=0;class XS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qS(e),t.set(e,i)),i}}class qS{constructor(e){this.id=WS++,this.code=e,this.usedTimes=0}}function YS(n,e,t,i,r,s,o){const a=new Qh,l=new XS,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,E,D,ee,$){const Q=ee.fog,le=$.geometry,Z=A.isMeshStandardMaterial?ee.environment:null,te=(A.isMeshStandardMaterial?t:e).get(A.envMap||Z),k=te&&te.mapping===Ao?te.image.height:null,ve=_[A.type];A.precision!==null&&(d=r.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const Se=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,be=Se!==void 0?Se.length:0;let Ie=0;le.morphAttributes.position!==void 0&&(Ie=1),le.morphAttributes.normal!==void 0&&(Ie=2),le.morphAttributes.color!==void 0&&(Ie=3);let ke,J,he,Me;if(ve){const Ye=un[ve];ke=Ye.vertexShader,J=Ye.fragmentShader}else ke=A.vertexShader,J=A.fragmentShader,l.update(A),he=l.getVertexShaderID(A),Me=l.getFragmentShaderID(A);const N=n.getRenderTarget(),re=$.isInstancedMesh===!0,ie=$.isBatchedMesh===!0,fe=!!A.map,Le=!!A.matcap,R=!!te,T=!!A.aoMap,w=!!A.lightMap,F=!!A.bumpMap,G=!!A.normalMap,j=!!A.displacementMap,K=!!A.emissiveMap,ne=!!A.metalnessMap,M=!!A.roughnessMap,g=A.anisotropy>0,C=A.clearcoat>0,V=A.dispersion>0,O=A.iridescence>0,z=A.sheen>0,ue=A.transmission>0,oe=g&&!!A.anisotropyMap,de=C&&!!A.clearcoatMap,Ee=C&&!!A.clearcoatNormalMap,ce=C&&!!A.clearcoatRoughnessMap,ge=O&&!!A.iridescenceMap,Fe=O&&!!A.iridescenceThicknessMap,Re=z&&!!A.sheenColorMap,ye=z&&!!A.sheenRoughnessMap,Oe=!!A.specularMap,De=!!A.specularColorMap,We=!!A.specularIntensityMap,I=ue&&!!A.transmissionMap,pe=ue&&!!A.thicknessMap,se=!!A.gradientMap,ae=!!A.alphaMap,_e=A.alphaTest>0,Ue=!!A.alphaHash,Xe=!!A.extensions;let ct=jn;A.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ct=n.toneMapping);const _t={shaderID:ve,shaderType:A.type,shaderName:A.name,vertexShader:ke,fragmentShader:J,defines:A.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:ie,batchingColor:ie&&$._colorsTexture!==null,instancing:re,instancingColor:re&&$.instanceColor!==null,instancingMorph:re&&$.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ri,alphaToCoverage:!!A.alphaToCoverage,map:fe,matcap:Le,envMap:R,envMapMode:R&&te.mapping,envMapCubeUVHeight:k,aoMap:T,lightMap:w,bumpMap:F,normalMap:G,displacementMap:h&&j,emissiveMap:K,normalMapObjectSpace:G&&A.normalMapType===V_,normalMapTangentSpace:G&&A.normalMapType===H_,metalnessMap:ne,roughnessMap:M,anisotropy:g,anisotropyMap:oe,clearcoat:C,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ce,dispersion:V,iridescence:O,iridescenceMap:ge,iridescenceThicknessMap:Fe,sheen:z,sheenColorMap:Re,sheenRoughnessMap:ye,specularMap:Oe,specularColorMap:De,specularIntensityMap:We,transmission:ue,transmissionMap:I,thicknessMap:pe,gradientMap:se,opaque:A.transparent===!1&&A.blending===lr&&A.alphaToCoverage===!1,alphaMap:ae,alphaTest:_e,alphaHash:Ue,combine:A.combine,mapUv:fe&&v(A.map.channel),aoMapUv:T&&v(A.aoMap.channel),lightMapUv:w&&v(A.lightMap.channel),bumpMapUv:F&&v(A.bumpMap.channel),normalMapUv:G&&v(A.normalMap.channel),displacementMapUv:j&&v(A.displacementMap.channel),emissiveMapUv:K&&v(A.emissiveMap.channel),metalnessMapUv:ne&&v(A.metalnessMap.channel),roughnessMapUv:M&&v(A.roughnessMap.channel),anisotropyMapUv:oe&&v(A.anisotropyMap.channel),clearcoatMapUv:de&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(A.sheenRoughnessMap.channel),specularMapUv:Oe&&v(A.specularMap.channel),specularColorMapUv:De&&v(A.specularColorMap.channel),specularIntensityMapUv:We&&v(A.specularIntensityMap.channel),transmissionMapUv:I&&v(A.transmissionMap.channel),thicknessMapUv:pe&&v(A.thicknessMap.channel),alphaMapUv:ae&&v(A.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(G||g),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!le.attributes.uv&&(fe||ae),fog:!!Q,useFog:A.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:fe&&A.map.isVideoTexture===!0&&Ze.getTransfer(A.map.colorSpace)===rt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===wn,flipSided:A.side===Dt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Xe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&A.extensions.multiDraw===!0||ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const D in A.defines)E.push(D),E.push(A.defines[D]);return A.isRawShaderMaterial===!1&&(b(E,A),S(E,A),E.push(n.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function b(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function S(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),A.push(a.mask)}function y(A){const E=_[A.type];let D;if(E){const ee=un[E];D=Pv.clone(ee.uniforms)}else D=A.uniforms;return D}function H(A,E){let D;for(let ee=0,$=u.length;ee<$;ee++){const Q=u[ee];if(Q.cacheKey===E){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new kS(n,E,A,s),u.push(D)),D}function P(A){if(--A.usedTimes===0){const E=u.indexOf(A);u[E]=u[u.length-1],u.pop(),A.destroy()}}function L(A){l.remove(A)}function q(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:H,releaseProgram:P,releaseShaderCache:L,programs:u,dispose:q}}function $S(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function KS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ef(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,_,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,h,d,_,v,m){const p=o(f,h,d,_,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,_,v,m){const p=o(f,h,d,_,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||KS),i.length>1&&i.sort(h||ef),r.length>1&&r.sort(h||ef)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function jS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new tf,n.set(i,[o])):r>=s.length?(o=new tf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ZS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Je};break;case"SpotLight":t={position:new W,direction:new W,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function JS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let QS=0;function eE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tE(n){const e=new ZS,t=JS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new lt,o=new lt;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,_=0,v=0,m=0,p=0,b=0,S=0,y=0,H=0,P=0,L=0;c.sort(eE);for(let A=0,E=c.length;A<E;A++){const D=c[A],ee=D.color,$=D.intensity,Q=D.distance,le=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=ee.r*$,f+=ee.g*$,h+=ee.b*$;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],$);L++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,k=t.get(D);k.shadowIntensity=te.intensity,k.shadowBias=te.bias,k.shadowNormalBias=te.normalBias,k.shadowRadius=te.radius,k.shadowMapSize=te.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=le,i.directionalShadowMatrix[d]=D.shadow.matrix,b++}i.directional[d]=Z,d++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(ee).multiplyScalar($),Z.distance=Q,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[v]=Z;const te=D.shadow;if(D.map&&(i.spotLightMap[H]=D.map,H++,te.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[v]=te.matrix,D.castShadow){const k=t.get(D);k.shadowIntensity=te.intensity,k.shadowBias=te.bias,k.shadowNormalBias=te.normalBias,k.shadowRadius=te.radius,k.shadowMapSize=te.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=le,y++}v++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(ee).multiplyScalar($),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const te=D.shadow,k=t.get(D);k.shadowIntensity=te.intensity,k.shadowBias=te.bias,k.shadowNormalBias=te.normalBias,k.shadowRadius=te.radius,k.shadowMapSize=te.mapSize,k.shadowCameraNear=te.camera.near,k.shadowCameraFar=te.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=le,i.pointShadowMatrix[_]=D.shadow.matrix,S++}i.point[_]=Z,_++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar($),Z.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const q=i.hash;(q.directionalLength!==d||q.pointLength!==_||q.spotLength!==v||q.rectAreaLength!==m||q.hemiLength!==p||q.numDirectionalShadows!==b||q.numPointShadows!==S||q.numSpotShadows!==y||q.numSpotMaps!==H||q.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+H-P,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,q.directionalLength=d,q.pointLength=_,q.spotLength=v,q.rectAreaLength=m,q.hemiLength=p,q.numDirectionalShadows=b,q.numPointShadows=S,q.numSpotShadows=y,q.numSpotMaps=H,q.numLightProbes=L,i.version=QS++)}function l(c,u){let f=0,h=0,d=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(S.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function nf(n){const e=new tE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function nE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nf(n),e.set(r,[a])):s>=o.length?(a=new nf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class iE extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rE extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aE(n,e,t){let i=new ad;const r=new qe,s=new qe,o=new gt,a=new iE({depthPacking:z_}),l=new rE,c={},u=t.maxTextureSize,f={[Qn]:Dt,[Dt]:Qn,[wn]:wn},h=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:sE,fragmentShader:oE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new on;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let p=this.type;this.render=function(P,L,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const A=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(Kn),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const $=p!==yn&&this.type===yn,Q=p===yn&&this.type!==yn;for(let le=0,Z=P.length;le<Z;le++){const te=P[le],k=te.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ve=k.getFrameExtents();if(r.multiply(ve),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ve.x),r.x=s.x*ve.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ve.y),r.y=s.y*ve.y,k.mapSize.y=s.y)),k.map===null||$===!0||Q===!0){const be=this.type!==yn?{minFilter:qt,magFilter:qt}:{};k.map!==null&&k.map.dispose(),k.map=new Ri(r.x,r.y,be),k.map.texture.name=te.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const Se=k.getViewportCount();for(let be=0;be<Se;be++){const Ie=k.getViewport(be);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),ee.viewport(o),k.updateMatrices(te,be),i=k.getFrustum(),y(L,q,k.camera,te,this.type)}k.isPointLightShadow!==!0&&this.type===yn&&b(k,q),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,E,D)};function b(P,L){const q=e.update(v);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ri(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,q,h,v,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,q,d,v,null)}function S(P,L,q,A){let E=null;const D=q.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)E=D;else if(E=q.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ee=E.uuid,$=L.uuid;let Q=c[ee];Q===void 0&&(Q={},c[ee]=Q);let le=Q[$];le===void 0&&(le=E.clone(),Q[$]=le,L.addEventListener("dispose",H)),E=le}if(E.visible=L.visible,E.wireframe=L.wireframe,A===yn?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:f[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,q.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ee=n.properties.get(E);ee.light=q}return E}function y(P,L,q,A,E){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===yn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld);const $=e.update(P),Q=P.material;if(Array.isArray(Q)){const le=$.groups;for(let Z=0,te=le.length;Z<te;Z++){const k=le[Z],ve=Q[k.materialIndex];if(ve&&ve.visible){const Se=S(P,ve,A,E);P.onBeforeShadow(n,P,L,q,$,Se,k),n.renderBufferDirect(q,null,$,Se,P,k),P.onAfterShadow(n,P,L,q,$,Se,k)}}}else if(Q.visible){const le=S(P,Q,A,E);P.onBeforeShadow(n,P,L,q,$,le,null),n.renderBufferDirect(q,null,$,le,P,null),P.onAfterShadow(n,P,L,q,$,le,null)}}const ee=P.children;for(let $=0,Q=ee.length;$<Q;$++)y(ee[$],L,q,A,E)}function H(P){P.target.removeEventListener("dispose",H);for(const q in c){const A=c[q],E=P.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}function lE(n){function e(){let I=!1;const pe=new gt;let se=null;const ae=new gt(0,0,0,0);return{setMask:function(_e){se!==_e&&!I&&(n.colorMask(_e,_e,_e,_e),se=_e)},setLocked:function(_e){I=_e},setClear:function(_e,Ue,Xe,ct,_t){_t===!0&&(_e*=ct,Ue*=ct,Xe*=ct),pe.set(_e,Ue,Xe,ct),ae.equals(pe)===!1&&(n.clearColor(_e,Ue,Xe,ct),ae.copy(pe))},reset:function(){I=!1,se=null,ae.set(-1,0,0,0)}}}function t(){let I=!1,pe=null,se=null,ae=null;return{setTest:function(_e){_e?Me(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(_e){pe!==_e&&!I&&(n.depthMask(_e),pe=_e)},setFunc:function(_e){if(se!==_e){switch(_e){case S_:n.depthFunc(n.NEVER);break;case E_:n.depthFunc(n.ALWAYS);break;case y_:n.depthFunc(n.LESS);break;case ro:n.depthFunc(n.LEQUAL);break;case T_:n.depthFunc(n.EQUAL);break;case b_:n.depthFunc(n.GEQUAL);break;case A_:n.depthFunc(n.GREATER);break;case w_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=_e}},setLocked:function(_e){I=_e},setClear:function(_e){ae!==_e&&(n.clearDepth(_e),ae=_e)},reset:function(){I=!1,pe=null,se=null,ae=null}}}function i(){let I=!1,pe=null,se=null,ae=null,_e=null,Ue=null,Xe=null,ct=null,_t=null;return{setTest:function(Ye){I||(Ye?Me(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(Ye){pe!==Ye&&!I&&(n.stencilMask(Ye),pe=Ye)},setFunc:function(Ye,mn,an){(se!==Ye||ae!==mn||_e!==an)&&(n.stencilFunc(Ye,mn,an),se=Ye,ae=mn,_e=an)},setOp:function(Ye,mn,an){(Ue!==Ye||Xe!==mn||ct!==an)&&(n.stencilOp(Ye,mn,an),Ue=Ye,Xe=mn,ct=an)},setLocked:function(Ye){I=Ye},setClear:function(Ye){_t!==Ye&&(n.clearStencil(Ye),_t=Ye)},reset:function(){I=!1,pe=null,se=null,ae=null,_e=null,Ue=null,Xe=null,ct=null,_t=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,v=null,m=null,p=null,b=null,S=null,y=null,H=null,P=new Je(0,0,0),L=0,q=!1,A=null,E=null,D=null,ee=null,$=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,Z=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(te)[1]),le=Z>=1):te.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),le=Z>=2);let k=null,ve={};const Se=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),Ie=new gt().fromArray(Se),ke=new gt().fromArray(be);function J(I,pe,se,ae){const _e=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(I,Ue),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<se;Xe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(pe+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return Ue}const he={};he[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Me(n.DEPTH_TEST),s.setFunc(ro),F(!1),G(ou),Me(n.CULL_FACE),T(Kn);function Me(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function N(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function re(I,pe){return u[I]!==pe?(n.bindFramebuffer(I,pe),u[I]=pe,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function ie(I,pe){let se=h,ae=!1;if(I){se=f.get(pe),se===void 0&&(se=[],f.set(pe,se));const _e=I.textures;if(se.length!==_e.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,Xe=_e.length;Ue<Xe;Ue++)se[Ue]=n.COLOR_ATTACHMENT0+Ue;se.length=_e.length,ae=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ae=!0);ae&&n.drawBuffers(se)}function fe(I){return d!==I?(n.useProgram(I),d=I,!0):!1}const Le={[xi]:n.FUNC_ADD,[r_]:n.FUNC_SUBTRACT,[s_]:n.FUNC_REVERSE_SUBTRACT};Le[o_]=n.MIN,Le[a_]=n.MAX;const R={[l_]:n.ZERO,[c_]:n.ONE,[u_]:n.SRC_COLOR,[Va]:n.SRC_ALPHA,[g_]:n.SRC_ALPHA_SATURATE,[p_]:n.DST_COLOR,[h_]:n.DST_ALPHA,[f_]:n.ONE_MINUS_SRC_COLOR,[Ga]:n.ONE_MINUS_SRC_ALPHA,[m_]:n.ONE_MINUS_DST_COLOR,[d_]:n.ONE_MINUS_DST_ALPHA,[__]:n.CONSTANT_COLOR,[v_]:n.ONE_MINUS_CONSTANT_COLOR,[x_]:n.CONSTANT_ALPHA,[M_]:n.ONE_MINUS_CONSTANT_ALPHA};function T(I,pe,se,ae,_e,Ue,Xe,ct,_t,Ye){if(I===Kn){_===!0&&(N(n.BLEND),_=!1);return}if(_===!1&&(Me(n.BLEND),_=!0),I!==i_){if(I!==v||Ye!==q){if((m!==xi||S!==xi)&&(n.blendEquation(n.FUNC_ADD),m=xi,S=xi),Ye)switch(I){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFunc(n.ONE,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,b=null,y=null,H=null,P.set(0,0,0),L=0,v=I,q=Ye}return}_e=_e||pe,Ue=Ue||se,Xe=Xe||ae,(pe!==m||_e!==S)&&(n.blendEquationSeparate(Le[pe],Le[_e]),m=pe,S=_e),(se!==p||ae!==b||Ue!==y||Xe!==H)&&(n.blendFuncSeparate(R[se],R[ae],R[Ue],R[Xe]),p=se,b=ae,y=Ue,H=Xe),(ct.equals(P)===!1||_t!==L)&&(n.blendColor(ct.r,ct.g,ct.b,_t),P.copy(ct),L=_t),v=I,q=!1}function w(I,pe){I.side===wn?N(n.CULL_FACE):Me(n.CULL_FACE);let se=I.side===Dt;pe&&(se=!se),F(se),I.blending===lr&&I.transparent===!1?T(Kn):T(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const ae=I.stencilWrite;o.setTest(ae),ae&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),K(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(I){A!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),A=I)}function G(I){I!==e_?(Me(n.CULL_FACE),I!==E&&(I===ou?n.cullFace(n.BACK):I===t_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),E=I}function j(I){I!==D&&(le&&n.lineWidth(I),D=I)}function K(I,pe,se){I?(Me(n.POLYGON_OFFSET_FILL),(ee!==pe||$!==se)&&(n.polygonOffset(pe,se),ee=pe,$=se)):N(n.POLYGON_OFFSET_FILL)}function ne(I){I?Me(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function M(I){I===void 0&&(I=n.TEXTURE0+Q-1),k!==I&&(n.activeTexture(I),k=I)}function g(I,pe,se){se===void 0&&(k===null?se=n.TEXTURE0+Q-1:se=k);let ae=ve[se];ae===void 0&&(ae={type:void 0,texture:void 0},ve[se]=ae),(ae.type!==I||ae.texture!==pe)&&(k!==se&&(n.activeTexture(se),k=se),n.bindTexture(I,pe||he[I]),ae.type=I,ae.texture=pe)}function C(){const I=ve[k];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Ie.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ie.copy(I))}function ye(I){ke.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ke.copy(I))}function Oe(I,pe){let se=l.get(pe);se===void 0&&(se=new WeakMap,l.set(pe,se));let ae=se.get(I);ae===void 0&&(ae=n.getUniformBlockIndex(pe,I.name),se.set(I,ae))}function De(I,pe){const ae=l.get(pe).get(I);a.get(pe)!==ae&&(n.uniformBlockBinding(pe,ae,I.__bindingPointIndex),a.set(pe,ae))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},k=null,ve={},u={},f=new WeakMap,h=[],d=null,_=!1,v=null,m=null,p=null,b=null,S=null,y=null,H=null,P=new Je(0,0,0),L=0,q=!1,A=null,E=null,D=null,ee=null,$=null,Ie.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Me,disable:N,bindFramebuffer:re,drawBuffers:ie,useProgram:fe,setBlending:T,setMaterial:w,setFlipSided:F,setCullFace:G,setLineWidth:j,setPolygonOffset:K,setScissorTest:ne,activeTexture:M,bindTexture:g,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:O,texImage2D:ge,texImage3D:Fe,updateUBOMapping:Oe,uniformBlockBinding:De,texStorage2D:Ee,texStorage3D:ce,texSubImage2D:z,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Re,viewport:ye,reset:We}}function rf(n,e,t,i){const r=cE(i);switch(t){case Gh:return n*e;case Wh:return n*e;case Xh:return n*e*2;case qh:return n*e/r.components*r.byteLength;case Kl:return n*e/r.components*r.byteLength;case Yh:return n*e*2/r.components*r.byteLength;case jl:return n*e*2/r.components*r.byteLength;case kh:return n*e*3/r.components*r.byteLength;case tn:return n*e*4/r.components*r.byteLength;case Zl:return n*e*4/r.components*r.byteLength;case $s:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case js:case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:case ja:return Math.max(n,16)*Math.max(e,8)/4;case Ya:case Ka:return Math.max(n,8)*Math.max(e,8)/2;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Js:case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $h:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _l:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cE(n){switch(n){case In:case zh:return{byteLength:1,components:1};case Qr:case Hh:case is:return{byteLength:2,components:1};case Yl:case $l:return{byteLength:2,components:4};case wi:case ql:case Rn:return{byteLength:4,components:1};case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function uE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return d?new OffscreenCanvas(M,g):co("canvas")}function v(M,g,C){let V=1;const O=ne(M);if((O.width>C||O.height>C)&&(V=C/Math.max(O.width,O.height)),V<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const z=Math.floor(V*O.width),ue=Math.floor(V*O.height);f===void 0&&(f=_(z,ue));const oe=g?_(z,ue):f;return oe.width=z,oe.height=ue,oe.getContext("2d").drawImage(M,0,0,z,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+z+"x"+ue+")."),oe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==qt&&M.minFilter!==en}function p(M){n.generateMipmap(M)}function b(M,g,C,V,O=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let z=g;if(g===n.RED&&(C===n.FLOAT&&(z=n.R32F),C===n.HALF_FLOAT&&(z=n.R16F),C===n.UNSIGNED_BYTE&&(z=n.R8)),g===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.R8UI),C===n.UNSIGNED_SHORT&&(z=n.R16UI),C===n.UNSIGNED_INT&&(z=n.R32UI),C===n.BYTE&&(z=n.R8I),C===n.SHORT&&(z=n.R16I),C===n.INT&&(z=n.R32I)),g===n.RG&&(C===n.FLOAT&&(z=n.RG32F),C===n.HALF_FLOAT&&(z=n.RG16F),C===n.UNSIGNED_BYTE&&(z=n.RG8)),g===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.RG8UI),C===n.UNSIGNED_SHORT&&(z=n.RG16UI),C===n.UNSIGNED_INT&&(z=n.RG32UI),C===n.BYTE&&(z=n.RG8I),C===n.SHORT&&(z=n.RG16I),C===n.INT&&(z=n.RG32I)),g===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),g===n.RGBA){const ue=O?so:Ze.getTransfer(V);C===n.FLOAT&&(z=n.RGBA32F),C===n.HALF_FLOAT&&(z=n.RGBA16F),C===n.UNSIGNED_BYTE&&(z=ue===rt?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function S(M,g){let C;return M?g===null||g===wi||g===gr?C=n.DEPTH24_STENCIL8:g===Rn?C=n.DEPTH32F_STENCIL8:g===Qr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===wi||g===gr?C=n.DEPTH_COMPONENT24:g===Rn?C=n.DEPTH_COMPONENT32F:g===Qr&&(C=n.DEPTH_COMPONENT16),C}function y(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==qt&&M.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function H(M){const g=M.target;g.removeEventListener("dispose",H),L(g),g.isVideoTexture&&u.delete(g)}function P(M){const g=M.target;g.removeEventListener("dispose",P),A(g)}function L(M){const g=i.get(M);if(g.__webglInit===void 0)return;const C=M.source,V=h.get(C);if(V){const O=V[g.__cacheKey];O.usedTimes--,O.usedTimes===0&&q(M),Object.keys(V).length===0&&h.delete(C)}i.remove(M)}function q(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const C=M.source,V=h.get(C);delete V[g.__cacheKey],o.memory.textures--}function A(M){const g=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let O=0;O<g.__webglFramebuffer[V].length;O++)n.deleteFramebuffer(g.__webglFramebuffer[V][O]);else n.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)n.deleteFramebuffer(g.__webglFramebuffer[V]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const C=M.textures;for(let V=0,O=C.length;V<O;V++){const z=i.get(C[V]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(C[V])}i.remove(M)}let E=0;function D(){E=0}function ee(){const M=E;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),E+=1,M}function $(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function Q(M,g){const C=i.get(M);if(M.isVideoTexture&&j(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){const V=M.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(C,M,g);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+g)}function le(M,g){const C=i.get(M);if(M.version>0&&C.__version!==M.version){ke(C,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+g)}function Z(M,g){const C=i.get(M);if(M.version>0&&C.__version!==M.version){ke(C,M,g);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+g)}function te(M,g){const C=i.get(M);if(M.version>0&&C.__version!==M.version){J(C,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+g)}const k={[Xa]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},ve={[qt]:n.NEAREST,[O_]:n.NEAREST_MIPMAP_NEAREST,[gs]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Ko]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},Se={[G_]:n.NEVER,[$_]:n.ALWAYS,[k_]:n.LESS,[Kh]:n.LEQUAL,[W_]:n.EQUAL,[Y_]:n.GEQUAL,[X_]:n.GREATER,[q_]:n.NOTEQUAL};function be(M,g){if(g.type===Rn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===Ko||g.magFilter===gs||g.magFilter===Ei||g.minFilter===en||g.minFilter===Ko||g.minFilter===gs||g.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,k[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,k[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,k[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ve[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===qt||g.minFilter!==gs&&g.minFilter!==Ei||g.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ie(M,g){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",H));const V=g.source;let O=h.get(V);O===void 0&&(O={},h.set(V,O));const z=$(g);if(z!==M.__cacheKey){O[z]===void 0&&(O[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),O[z].usedTimes++;const ue=O[M.__cacheKey];ue!==void 0&&(O[M.__cacheKey].usedTimes--,ue.usedTimes===0&&q(g)),M.__cacheKey=z,M.__webglTexture=O[z].texture}return C}function ke(M,g,C){let V=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=n.TEXTURE_3D);const O=Ie(M,g),z=g.source;t.bindTexture(V,M.__webglTexture,n.TEXTURE0+C);const ue=i.get(z);if(z.version!==ue.__version||O===!0){t.activeTexture(n.TEXTURE0+C);const oe=Ze.getPrimaries(Ze.workingColorSpace),de=g.colorSpace===$n?null:Ze.getPrimaries(g.colorSpace),Ee=g.colorSpace===$n||oe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ce=v(g.image,!1,r.maxTextureSize);ce=K(g,ce);const ge=s.convert(g.format,g.colorSpace),Fe=s.convert(g.type);let Re=b(g.internalFormat,ge,Fe,g.colorSpace,g.isVideoTexture);be(V,g);let ye;const Oe=g.mipmaps,De=g.isVideoTexture!==!0,We=ue.__version===void 0||O===!0,I=z.dataReady,pe=y(g,ce);if(g.isDepthTexture)Re=S(g.format===_r,g.type),We&&(De?t.texStorage2D(n.TEXTURE_2D,1,Re,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Re,ce.width,ce.height,0,ge,Fe,null));else if(g.isDataTexture)if(Oe.length>0){De&&We&&t.texStorage2D(n.TEXTURE_2D,pe,Re,Oe[0].width,Oe[0].height);for(let se=0,ae=Oe.length;se<ae;se++)ye=Oe[se],De?I&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ye.width,ye.height,ge,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,se,Re,ye.width,ye.height,0,ge,Fe,ye.data);g.generateMipmaps=!1}else De?(We&&t.texStorage2D(n.TEXTURE_2D,pe,Re,ce.width,ce.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,ge,Fe,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Re,ce.width,ce.height,0,ge,Fe,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){De&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Re,Oe[0].width,Oe[0].height,ce.depth);for(let se=0,ae=Oe.length;se<ae;se++)if(ye=Oe[se],g.format!==tn)if(ge!==null)if(De){if(I)if(g.layerUpdates.size>0){const _e=rf(ye.width,ye.height,g.format,g.type);for(const Ue of g.layerUpdates){const Xe=ye.data.subarray(Ue*_e/ye.data.BYTES_PER_ELEMENT,(Ue+1)*_e/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ue,ye.width,ye.height,1,ge,Xe,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ce.depth,ge,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Re,ye.width,ye.height,ce.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ce.depth,ge,Fe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Re,ye.width,ye.height,ce.depth,0,ge,Fe,ye.data)}else{De&&We&&t.texStorage2D(n.TEXTURE_2D,pe,Re,Oe[0].width,Oe[0].height);for(let se=0,ae=Oe.length;se<ae;se++)ye=Oe[se],g.format!==tn?ge!==null?De?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,ye.width,ye.height,ge,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Re,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?I&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ye.width,ye.height,ge,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,se,Re,ye.width,ye.height,0,ge,Fe,ye.data)}else if(g.isDataArrayTexture)if(De){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Re,ce.width,ce.height,ce.depth),I)if(g.layerUpdates.size>0){const se=rf(ce.width,ce.height,g.format,g.type);for(const ae of g.layerUpdates){const _e=ce.data.subarray(ae*se/ce.data.BYTES_PER_ELEMENT,(ae+1)*se/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,ce.width,ce.height,1,ge,Fe,_e)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ge,Fe,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ce.width,ce.height,ce.depth,0,ge,Fe,ce.data);else if(g.isData3DTexture)De?(We&&t.texStorage3D(n.TEXTURE_3D,pe,Re,ce.width,ce.height,ce.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ge,Fe,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ce.width,ce.height,ce.depth,0,ge,Fe,ce.data);else if(g.isFramebufferTexture){if(We)if(De)t.texStorage2D(n.TEXTURE_2D,pe,Re,ce.width,ce.height);else{let se=ce.width,ae=ce.height;for(let _e=0;_e<pe;_e++)t.texImage2D(n.TEXTURE_2D,_e,Re,se,ae,0,ge,Fe,null),se>>=1,ae>>=1}}else if(Oe.length>0){if(De&&We){const se=ne(Oe[0]);t.texStorage2D(n.TEXTURE_2D,pe,Re,se.width,se.height)}for(let se=0,ae=Oe.length;se<ae;se++)ye=Oe[se],De?I&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ge,Fe,ye):t.texImage2D(n.TEXTURE_2D,se,Re,ge,Fe,ye);g.generateMipmaps=!1}else if(De){if(We){const se=ne(ce);t.texStorage2D(n.TEXTURE_2D,pe,Re,se.width,se.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Fe,ce)}else t.texImage2D(n.TEXTURE_2D,0,Re,ge,Fe,ce);m(g)&&p(V),ue.__version=z.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function J(M,g,C){if(g.image.length!==6)return;const V=Ie(M,g),O=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+C);const z=i.get(O);if(O.version!==z.__version||V===!0){t.activeTexture(n.TEXTURE0+C);const ue=Ze.getPrimaries(Ze.workingColorSpace),oe=g.colorSpace===$n?null:Ze.getPrimaries(g.colorSpace),de=g.colorSpace===$n||ue===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ee=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,ge=[];for(let ae=0;ae<6;ae++)!Ee&&!ce?ge[ae]=v(g.image[ae],!0,r.maxCubemapSize):ge[ae]=ce?g.image[ae].image:g.image[ae],ge[ae]=K(g,ge[ae]);const Fe=ge[0],Re=s.convert(g.format,g.colorSpace),ye=s.convert(g.type),Oe=b(g.internalFormat,Re,ye,g.colorSpace),De=g.isVideoTexture!==!0,We=z.__version===void 0||V===!0,I=O.dataReady;let pe=y(g,Fe);be(n.TEXTURE_CUBE_MAP,g);let se;if(Ee){De&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Oe,Fe.width,Fe.height);for(let ae=0;ae<6;ae++){se=ge[ae].mipmaps;for(let _e=0;_e<se.length;_e++){const Ue=se[_e];g.format!==tn?Re!==null?De?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,0,0,Ue.width,Ue.height,Re,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,Oe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,0,0,Ue.width,Ue.height,Re,ye,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,Oe,Ue.width,Ue.height,0,Re,ye,Ue.data)}}}else{if(se=g.mipmaps,De&&We){se.length>0&&pe++;const ae=ne(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Oe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ce){De?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ge[ae].width,ge[ae].height,Re,ye,ge[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Oe,ge[ae].width,ge[ae].height,0,Re,ye,ge[ae].data);for(let _e=0;_e<se.length;_e++){const Xe=se[_e].image[ae].image;De?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,0,0,Xe.width,Xe.height,Re,ye,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,Oe,Xe.width,Xe.height,0,Re,ye,Xe.data)}}else{De?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re,ye,ge[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Oe,Re,ye,ge[ae]);for(let _e=0;_e<se.length;_e++){const Ue=se[_e];De?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,0,0,Re,ye,Ue.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,Oe,Re,ye,Ue.image[ae])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),z.__version=O.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function he(M,g,C,V,O,z){const ue=s.convert(C.format,C.colorSpace),oe=s.convert(C.type),de=b(C.internalFormat,ue,oe,C.colorSpace);if(!i.get(g).__hasExternalTextures){const ce=Math.max(1,g.width>>z),ge=Math.max(1,g.height>>z);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,z,de,ce,ge,g.depth,0,ue,oe,null):t.texImage2D(O,z,de,ce,ge,0,ue,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),G(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,O,i.get(C).__webglTexture,0,F(g)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,O,i.get(C).__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(M,g,C){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){const V=g.depthTexture,O=V&&V.isDepthTexture?V.type:null,z=S(g.stencilBuffer,O),ue=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=F(g);G(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,z,g.width,g.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,z,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,M)}else{const V=g.textures;for(let O=0;O<V.length;O++){const z=V[O],ue=s.convert(z.format,z.colorSpace),oe=s.convert(z.type),de=b(z.internalFormat,ue,oe,z.colorSpace),Ee=F(g);C&&G(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,de,g.width,g.height):G(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,de,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,de,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const V=i.get(g.depthTexture).__webglTexture,O=F(g);if(g.depthTexture.format===cr)G(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(g.depthTexture.format===_r)G(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function re(M){const g=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const V=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const O=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",O)};V.addEventListener("dispose",O),g.__depthDisposeCallback=O}g.__boundDepthTexture=V}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");N(g.__webglFramebuffer,M)}else if(C){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=n.createRenderbuffer(),Me(g.__webglDepthbuffer[V],M,!1);else{const O=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=g.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Me(g.__webglDepthbuffer,M,!1);else{const V=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,O)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(M,g,C){const V=i.get(M);g!==void 0&&he(V.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&re(M)}function fe(M){const g=M.texture,C=i.get(M),V=i.get(g);M.addEventListener("dispose",P);const O=M.textures,z=M.isWebGLCubeRenderTarget===!0,ue=O.length>1;if(ue||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=g.version,o.memory.textures++),z){C.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[oe]=[];for(let de=0;de<g.mipmaps.length;de++)C.__webglFramebuffer[oe][de]=n.createFramebuffer()}else C.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)C.__webglFramebuffer[oe]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ue)for(let oe=0,de=O.length;oe<de;oe++){const Ee=i.get(O[oe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&G(M)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let oe=0;oe<O.length;oe++){const de=O[oe];C.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[oe]);const Ee=s.convert(de.format,de.colorSpace),ce=s.convert(de.type),ge=b(de.internalFormat,Ee,ce,de.colorSpace,M.isXRRenderTarget===!0),Fe=F(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ge,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,C.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(C.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),be(n.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)he(C.__webglFramebuffer[oe][de],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else he(C.__webglFramebuffer[oe],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,de=O.length;oe<de;oe++){const Ee=O[oe],ce=i.get(Ee);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),be(n.TEXTURE_2D,Ee),he(C.__webglFramebuffer,M,Ee,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Ee)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(oe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,V.__webglTexture),be(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)he(C.__webglFramebuffer[de],M,g,n.COLOR_ATTACHMENT0,oe,de);else he(C.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,oe,0);m(g)&&p(oe),t.unbindTexture()}M.depthBuffer&&re(M)}function Le(M){const g=M.textures;for(let C=0,V=g.length;C<V;C++){const O=g[C];if(m(O)){const z=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(O).__webglTexture;t.bindTexture(z,ue),p(z),t.unbindTexture()}}}const R=[],T=[];function w(M){if(M.samples>0){if(G(M)===!1){const g=M.textures,C=M.width,V=M.height;let O=n.COLOR_BUFFER_BIT;const z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(M),oe=g.length>1;if(oe)for(let de=0;de<g.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<g.length;de++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Ee=i.get(g[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,C,V,0,0,C,V,O,n.NEAREST),l===!0&&(R.length=0,T.length=0,R.push(n.COLOR_ATTACHMENT0+de),M.depthBuffer&&M.resolveDepthBuffer===!1&&(R.push(z),T.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<g.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Ee=i.get(g[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function F(M){return Math.min(r.maxSamples,M.samples)}function G(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function j(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function K(M,g){const C=M.colorSpace,V=M.format,O=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==ri&&C!==$n&&(Ze.getTransfer(C)===rt?(V!==tn||O!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),g}function ne(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=D,this.setTexture2D=Q,this.setTexture2DArray=le,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=ie,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=he,this.useMultisampledRTT=G}function fE(n,e){function t(i,r=$n){let s;const o=Ze.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===Yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$l)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return n.BYTE;if(i===Hh)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===ql)return n.INT;if(i===wi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===is)return n.HALF_FLOAT;if(i===Gh)return n.ALPHA;if(i===kh)return n.RGB;if(i===tn)return n.RGBA;if(i===Wh)return n.LUMINANCE;if(i===Xh)return n.LUMINANCE_ALPHA;if(i===cr)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===Kl)return n.RED_INTEGER;if(i===Yh)return n.RG;if(i===jl)return n.RG_INTEGER;if(i===Zl)return n.RGBA_INTEGER;if(i===$s||i===Ks||i===js||i===Zs)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===$a||i===Ka||i===ja)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$a)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===Ja||i===Qa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Za||i===Ja)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===el)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===il)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===al)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ll)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ul)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Js||i===pl||i===ml)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Js)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$h||i===gl||i===_l||i===vl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Js)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class hE extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nr extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const pE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:pE,fragmentShader:mE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _E extends xr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const v=new gE,m=t.getContextAttributes();let p=null,b=null;const S=[],y=[],H=new qe;let P=null;const L=new Jt;L.layers.enable(1),L.viewport=new gt;const q=new Jt;q.layers.enable(2),q.viewport=new gt;const A=[L,q],E=new hE;E.layers.enable(1),E.layers.enable(2);let D=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=S[J];return he===void 0&&(he=new Ma,S[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=S[J];return he===void 0&&(he=new Ma,S[J]=he),he.getGripSpace()},this.getHand=function(J){let he=S[J];return he===void 0&&(he=new Ma,S[J]=he),he.getHandSpace()};function $(J){const he=y.indexOf(J.inputSource);if(he===-1)return;const Me=S[he];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||o),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function Q(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",le);for(let J=0;J<S.length;J++){const he=y[J];he!==null&&(y[J]=null,S[J].disconnect(he))}D=null,ee=null,v.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,b=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",le),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(H),r.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Ri(d.framebufferWidth,d.framebufferHeight,{format:tn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Me=null,N=null;m.depth&&(N=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?_r:cr,Me=m.stencil?gr:wi);const re={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Ri(h.textureWidth,h.textureHeight,{format:tn,type:In,depthTexture:new ud(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function le(J){for(let he=0;he<J.removed.length;he++){const Me=J.removed[he],N=y.indexOf(Me);N>=0&&(y[N]=null,S[N].disconnect(Me))}for(let he=0;he<J.added.length;he++){const Me=J.added[he];let N=y.indexOf(Me);if(N===-1){for(let ie=0;ie<S.length;ie++)if(ie>=y.length){y.push(Me),N=ie;break}else if(y[ie]===null){y[ie]=Me,N=ie;break}if(N===-1)break}const re=S[N];re&&re.connect(Me)}}const Z=new W,te=new W;function k(J,he,Me){Z.setFromMatrixPosition(he.matrixWorld),te.setFromMatrixPosition(Me.matrixWorld);const N=Z.distanceTo(te),re=he.projectionMatrix.elements,ie=Me.projectionMatrix.elements,fe=re[14]/(re[10]-1),Le=re[14]/(re[10]+1),R=(re[9]+1)/re[5],T=(re[9]-1)/re[5],w=(re[8]-1)/re[0],F=(ie[8]+1)/ie[0],G=fe*w,j=fe*F,K=N/(-w+F),ne=K*-w;if(he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ne),J.translateZ(K),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),re[10]===-1)J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const M=fe+K,g=Le+K,C=G-ne,V=j+(N-ne),O=R*Le/g*M,z=T*Le/g*M;J.projectionMatrix.makePerspective(C,V,O,z,M,g),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ve(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let he=J.near,Me=J.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),E.near=q.near=L.near=he,E.far=q.far=L.far=Me,(D!==E.near||ee!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,ee=E.far);const N=J.parent,re=E.cameras;ve(E,N);for(let ie=0;ie<re.length;ie++)ve(re[ie],N);re.length===2?k(E,L,q):E.projectionMatrix.copy(L.projectionMatrix),Se(J,E,N)};function Se(J,he,Me){Me===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=es*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let be=null;function Ie(J,he){if(u=he.getViewerPose(c||o),_=he,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let N=!1;Me.length!==E.cameras.length&&(E.cameras.length=0,N=!0);for(let ie=0;ie<Me.length;ie++){const fe=Me[ie];let Le=null;if(d!==null)Le=d.getViewport(fe);else{const T=f.getViewSubImage(h,fe);Le=T.viewport,ie===0&&(e.setRenderTargetTextures(b,T.colorTexture,h.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(b))}let R=A[ie];R===void 0&&(R=new Jt,R.layers.enable(ie),R.viewport=new gt,A[ie]=R),R.matrix.fromArray(fe.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(fe.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Le.x,Le.y,Le.width,Le.height),ie===0&&(E.matrix.copy(R.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),N===!0&&E.cameras.push(R)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")){const ie=f.getDepthInformation(Me[0]);ie&&ie.isValid&&ie.texture&&v.init(e,ie,r.renderState)}}for(let Me=0;Me<S.length;Me++){const N=y[Me],re=S[Me];N!==null&&re!==void 0&&re.update(N,he,c||o)}be&&be(J,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const ke=new ld;ke.setAnimationLoop(Ie),this.setAnimationLoop=function(J){be=J},this.dispose=function(){}}}const pi=new Un,vE=new lt;function xE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,rd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,y=b.envMapRotation;S&&(m.envMap.value=S,pi.copy(y),pi.x*=-1,pi.y*=-1,pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(vE.makeRotationFromEuler(pi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ME(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const y=S.program;i.uniformBlockBinding(b,y)}function c(b,S){let y=r[b.id];y===void 0&&(_(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",m));const H=S.program;i.updateUBOMapping(b,H);const P=e.render.frame;s[b.id]!==P&&(h(b),s[b.id]=P)}function u(b){const S=f();b.__bindingPointIndex=S;const y=n.createBuffer(),H=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,H,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=r[b.id],y=b.uniforms,H=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,L=y.length;P<L;P++){const q=Array.isArray(y[P])?y[P]:[y[P]];for(let A=0,E=q.length;A<E;A++){const D=q[A];if(d(D,P,A,H)===!0){const ee=D.__offset,$=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let le=0;le<$.length;le++){const Z=$[le],te=v(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,ee+Q,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,Q),Q+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,S,y,H){const P=b.value,L=S+"_"+y;if(H[L]===void 0)return typeof P=="number"||typeof P=="boolean"?H[L]=P:H[L]=P.clone(),!0;{const q=H[L];if(typeof P=="number"||typeof P=="boolean"){if(q!==P)return H[L]=P,!0}else if(q.equals(P)===!1)return q.copy(P),!0}return!1}function _(b){const S=b.uniforms;let y=0;const H=16;for(let L=0,q=S.length;L<q;L++){const A=Array.isArray(S[L])?S[L]:[S[L]];for(let E=0,D=A.length;E<D;E++){const ee=A[E],$=Array.isArray(ee.value)?ee.value:[ee.value];for(let Q=0,le=$.length;Q<le;Q++){const Z=$[Q],te=v(Z),k=y%H,ve=k%te.boundary,Se=k+ve;y+=ve,Se!==0&&H-Se<te.storage&&(y+=H-Se),ee.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=y,y+=te.storage}}}const P=y%H;return P>0&&(y+=H-P),b.__size=y,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class SE{constructor(e={}){const{canvas:t=fv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=jn,this.toneMappingExposure=1;const S=this;let y=!1,H=0,P=0,L=null,q=-1,A=null;const E=new gt,D=new gt;let ee=null;const $=new Je(0);let Q=0,le=t.width,Z=t.height,te=1,k=null,ve=null;const Se=new gt(0,0,le,Z),be=new gt(0,0,le,Z);let Ie=!1;const ke=new ad;let J=!1,he=!1;const Me=new lt,N=new W,re=new gt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Le(){return L===null?te:1}let R=i;function T(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",_e,!1),R===null){const U="webgl2";if(R=T(U,x),R===null)throw T(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let w,F,G,j,K,ne,M,g,C,V,O,z,ue,oe,de,Ee,ce,ge,Fe,Re,ye,Oe,De,We;function I(){w=new wM(R),w.init(),Oe=new fE(R,w),F=new SM(R,w,e,Oe),G=new lE(R),j=new PM(R),K=new $S,ne=new uE(R,w,G,K,F,Oe,j),M=new yM(S),g=new AM(S),C=new Ov(R),De=new xM(R,C),V=new RM(R,C,j,De),O=new DM(R,V,C,j),Fe=new LM(R,F,ne),Ee=new EM(K),z=new YS(S,M,g,w,F,De,Ee),ue=new xE(S,K),oe=new jS,de=new nE(w),ge=new vM(S,M,g,G,O,h,l),ce=new aE(S,O,F),We=new ME(R,j,F,G),Re=new MM(R,w,j),ye=new CM(R,w,j),j.programs=z.programs,S.capabilities=F,S.extensions=w,S.properties=K,S.renderLists=oe,S.shadowMap=ce,S.state=G,S.info=j}I();const pe=new _E(S,R);this.xr=pe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=w.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=w.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(x){x!==void 0&&(te=x,this.setSize(le,Z,!1))},this.getSize=function(x){return x.set(le,Z)},this.setSize=function(x,U,X=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=x,Z=U,t.width=Math.floor(x*te),t.height=Math.floor(U*te),X===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(le*te,Z*te).floor()},this.setDrawingBufferSize=function(x,U,X){le=x,Z=U,te=X,t.width=Math.floor(x*X),t.height=Math.floor(U*X),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(E)},this.getViewport=function(x){return x.copy(Se)},this.setViewport=function(x,U,X,Y){x.isVector4?Se.set(x.x,x.y,x.z,x.w):Se.set(x,U,X,Y),G.viewport(E.copy(Se).multiplyScalar(te).round())},this.getScissor=function(x){return x.copy(be)},this.setScissor=function(x,U,X,Y){x.isVector4?be.set(x.x,x.y,x.z,x.w):be.set(x,U,X,Y),G.scissor(D.copy(be).multiplyScalar(te).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(x){G.setScissorTest(Ie=x)},this.setOpaqueSort=function(x){k=x},this.setTransparentSort=function(x){ve=x},this.getClearColor=function(x){return x.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(x=!0,U=!0,X=!0){let Y=0;if(x){let B=!1;if(L!==null){const me=L.texture.format;B=me===Zl||me===jl||me===Kl}if(B){const me=L.texture.type,Te=me===In||me===wi||me===Qr||me===gr||me===Yl||me===$l,Ae=ge.getClearColor(),we=ge.getClearAlpha(),Ne=Ae.r,Be=Ae.g,Ce=Ae.b;Te?(d[0]=Ne,d[1]=Be,d[2]=Ce,d[3]=we,R.clearBufferuiv(R.COLOR,0,d)):(_[0]=Ne,_[1]=Be,_[2]=Ce,_[3]=we,R.clearBufferiv(R.COLOR,0,_))}else Y|=R.COLOR_BUFFER_BIT}U&&(Y|=R.DEPTH_BUFFER_BIT),X&&(Y|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),oe.dispose(),de.dispose(),K.dispose(),M.dispose(),g.dispose(),O.dispose(),De.dispose(),We.dispose(),z.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",an),pe.removeEventListener("sessionend",ic),si.stop()};function se(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const x=j.autoReset,U=ce.enabled,X=ce.autoUpdate,Y=ce.needsUpdate,B=ce.type;I(),j.autoReset=x,ce.enabled=U,ce.autoUpdate=X,ce.needsUpdate=Y,ce.type=B}function _e(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ue(x){const U=x.target;U.removeEventListener("dispose",Ue),Xe(U)}function Xe(x){ct(x),K.remove(x)}function ct(x){const U=K.get(x).programs;U!==void 0&&(U.forEach(function(X){z.releaseProgram(X)}),x.isShaderMaterial&&z.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,X,Y,B,me){U===null&&(U=ie);const Te=B.isMesh&&B.matrixWorld.determinant()<0,Ae=_d(x,U,X,Y,B);G.setMaterial(Y,Te);let we=X.index,Ne=1;if(Y.wireframe===!0){if(we=V.getWireframeAttribute(X),we===void 0)return;Ne=2}const Be=X.drawRange,Ce=X.attributes.position;let $e=Be.start*Ne,ot=(Be.start+Be.count)*Ne;me!==null&&($e=Math.max($e,me.start*Ne),ot=Math.min(ot,(me.start+me.count)*Ne)),we!==null?($e=Math.max($e,0),ot=Math.min(ot,we.count)):Ce!=null&&($e=Math.max($e,0),ot=Math.min(ot,Ce.count));const at=ot-$e;if(at<0||at===1/0)return;De.setup(B,Y,Ae,X,we);let It,Ke=Re;if(we!==null&&(It=C.get(we),Ke=ye,Ke.setIndex(It)),B.isMesh)Y.wireframe===!0?(G.setLineWidth(Y.wireframeLinewidth*Le()),Ke.setMode(R.LINES)):Ke.setMode(R.TRIANGLES);else if(B.isLine){let Pe=Y.linewidth;Pe===void 0&&(Pe=1),G.setLineWidth(Pe*Le()),B.isLineSegments?Ke.setMode(R.LINES):B.isLineLoop?Ke.setMode(R.LINE_LOOP):Ke.setMode(R.LINE_STRIP)}else B.isPoints?Ke.setMode(R.POINTS):B.isSprite&&Ke.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ke.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(w.get("WEBGL_multi_draw"))Ke.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Pe=B._multiDrawStarts,vt=B._multiDrawCounts,je=B._multiDrawCount,Yt=we?C.get(we).bytesPerElement:1,Pi=K.get(Y).currentProgram.getUniforms();for(let Ut=0;Ut<je;Ut++)Pi.setValue(R,"_gl_DrawID",Ut),Ke.render(Pe[Ut]/Yt,vt[Ut])}else if(B.isInstancedMesh)Ke.renderInstances($e,at,B.count);else if(X.isInstancedBufferGeometry){const Pe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vt=Math.min(X.instanceCount,Pe);Ke.renderInstances($e,at,vt)}else Ke.render($e,at)};function _t(x,U,X){x.transparent===!0&&x.side===wn&&x.forceSinglePass===!1?(x.side=Dt,x.needsUpdate=!0,cs(x,U,X),x.side=Qn,x.needsUpdate=!0,cs(x,U,X),x.side=wn):cs(x,U,X)}this.compile=function(x,U,X=null){X===null&&(X=x),m=de.get(X),m.init(U),b.push(m),X.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),x!==X&&x.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const Y=new Set;return x.traverse(function(B){const me=B.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Ae=me[Te];_t(Ae,X,B),Y.add(Ae)}else _t(me,X,B),Y.add(me)}),b.pop(),m=null,Y},this.compileAsync=function(x,U,X=null){const Y=this.compile(x,U,X);return new Promise(B=>{function me(){if(Y.forEach(function(Te){K.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){B(x);return}setTimeout(me,10)}w.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ye=null;function mn(x){Ye&&Ye(x)}function an(){si.stop()}function ic(){si.start()}const si=new ld;si.setAnimationLoop(mn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(x){Ye=x,pe.setAnimationLoop(x),x===null?si.stop():si.start()},pe.addEventListener("sessionstart",an),pe.addEventListener("sessionend",ic),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,U,L),m=de.get(x,b.length),m.init(U),b.push(m),Me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ke.setFromProjectionMatrix(Me),he=this.localClippingEnabled,J=Ee.init(this.clippingPlanes,he),v=oe.get(x,p.length),v.init(),p.push(v),pe.enabled===!0&&pe.isPresenting===!0){const me=S.xr.getDepthSensingMesh();me!==null&&Po(me,U,-1/0,S.sortObjects)}Po(x,U,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(k,ve),fe=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,fe&&ge.addToRenderList(v,x),this.info.render.frame++,J===!0&&Ee.beginShadows();const X=m.state.shadowsArray;ce.render(X,x,U),J===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,B=v.transmissive;if(m.setupLights(),U.isArrayCamera){const me=U.cameras;if(B.length>0)for(let Te=0,Ae=me.length;Te<Ae;Te++){const we=me[Te];sc(Y,B,x,we)}fe&&ge.render(x);for(let Te=0,Ae=me.length;Te<Ae;Te++){const we=me[Te];rc(v,x,we,we.viewport)}}else B.length>0&&sc(Y,B,x,U),fe&&ge.render(x),rc(v,x,U);L!==null&&(ne.updateMultisampleRenderTarget(L),ne.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(S,x,U),De.resetDefaultState(),q=-1,A=null,b.pop(),b.length>0?(m=b[b.length-1],J===!0&&Ee.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Po(x,U,X,Y){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ke.intersectsSprite(x)){Y&&re.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Me);const Te=O.update(x),Ae=x.material;Ae.visible&&v.push(x,Te,Ae,X,re.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ke.intersectsObject(x))){const Te=O.update(x),Ae=x.material;if(Y&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),re.copy(x.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),re.copy(Te.boundingSphere.center)),re.applyMatrix4(x.matrixWorld).applyMatrix4(Me)),Array.isArray(Ae)){const we=Te.groups;for(let Ne=0,Be=we.length;Ne<Be;Ne++){const Ce=we[Ne],$e=Ae[Ce.materialIndex];$e&&$e.visible&&v.push(x,Te,$e,X,re.z,Ce)}}else Ae.visible&&v.push(x,Te,Ae,X,re.z,null)}}const me=x.children;for(let Te=0,Ae=me.length;Te<Ae;Te++)Po(me[Te],U,X,Y)}function rc(x,U,X,Y){const B=x.opaque,me=x.transmissive,Te=x.transparent;m.setupLightsView(X),J===!0&&Ee.setGlobalState(S.clippingPlanes,X),Y&&G.viewport(E.copy(Y)),B.length>0&&ls(B,U,X),me.length>0&&ls(me,U,X),Te.length>0&&ls(Te,U,X),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function sc(x,U,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Ri(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float")?is:In,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const me=m.state.transmissionRenderTarget[Y.id],Te=Y.viewport||E;me.setSize(Te.z,Te.w);const Ae=S.getRenderTarget();S.setRenderTarget(me),S.getClearColor($),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),fe&&ge.render(X);const we=S.toneMapping;S.toneMapping=jn;const Ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),J===!0&&Ee.setGlobalState(S.clippingPlanes,Y),ls(x,X,Y),ne.updateMultisampleRenderTarget(me),ne.updateRenderTargetMipmap(me),w.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ce=0,$e=U.length;Ce<$e;Ce++){const ot=U[Ce],at=ot.object,It=ot.geometry,Ke=ot.material,Pe=ot.group;if(Ke.side===wn&&at.layers.test(Y.layers)){const vt=Ke.side;Ke.side=Dt,Ke.needsUpdate=!0,oc(at,X,Y,It,Ke,Pe),Ke.side=vt,Ke.needsUpdate=!0,Be=!0}}Be===!0&&(ne.updateMultisampleRenderTarget(me),ne.updateRenderTargetMipmap(me))}S.setRenderTarget(Ae),S.setClearColor($,Q),Ne!==void 0&&(Y.viewport=Ne),S.toneMapping=we}function ls(x,U,X){const Y=U.isScene===!0?U.overrideMaterial:null;for(let B=0,me=x.length;B<me;B++){const Te=x[B],Ae=Te.object,we=Te.geometry,Ne=Y===null?Te.material:Y,Be=Te.group;Ae.layers.test(X.layers)&&oc(Ae,U,X,we,Ne,Be)}}function oc(x,U,X,Y,B,me){x.onBeforeRender(S,U,X,Y,B,me),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(S,U,X,Y,x,me),B.transparent===!0&&B.side===wn&&B.forceSinglePass===!1?(B.side=Dt,B.needsUpdate=!0,S.renderBufferDirect(X,U,Y,B,x,me),B.side=Qn,B.needsUpdate=!0,S.renderBufferDirect(X,U,Y,B,x,me),B.side=wn):S.renderBufferDirect(X,U,Y,B,x,me),x.onAfterRender(S,U,X,Y,B,me)}function cs(x,U,X){U.isScene!==!0&&(U=ie);const Y=K.get(x),B=m.state.lights,me=m.state.shadowsArray,Te=B.state.version,Ae=z.getParameters(x,B.state,me,U,X),we=z.getProgramCacheKey(Ae);let Ne=Y.programs;Y.environment=x.isMeshStandardMaterial?U.environment:null,Y.fog=U.fog,Y.envMap=(x.isMeshStandardMaterial?g:M).get(x.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ne===void 0&&(x.addEventListener("dispose",Ue),Ne=new Map,Y.programs=Ne);let Be=Ne.get(we);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===Te)return lc(x,Ae),Be}else Ae.uniforms=z.getUniforms(x),x.onBeforeCompile(Ae,S),Be=z.acquireProgram(Ae,we),Ne.set(we,Be),Y.uniforms=Ae.uniforms;const Ce=Y.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=Ee.uniform),lc(x,Ae),Y.needsLights=xd(x),Y.lightsStateVersion=Te,Y.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function ac(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Qs.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function lc(x,U){const X=K.get(x);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function _d(x,U,X,Y,B){U.isScene!==!0&&(U=ie),ne.resetTextureUnits();const me=U.fog,Te=Y.isMeshStandardMaterial?U.environment:null,Ae=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ri,we=(Y.isMeshStandardMaterial?g:M).get(Y.envMap||Te),Ne=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ce=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,ot=!!X.morphAttributes.color;let at=jn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(at=S.toneMapping);const It=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ke=It!==void 0?It.length:0,Pe=K.get(Y),vt=m.state.lights;if(J===!0&&(he===!0||x!==A)){const Gt=x===A&&Y.id===q;Ee.setState(Y,x,Gt)}let je=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==vt.state.version||Pe.outputColorSpace!==Ae||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==we||Y.fog===!0&&Pe.fog!==me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ee.numPlanes||Pe.numIntersection!==Ee.numIntersection)||Pe.vertexAlphas!==Ne||Pe.vertexTangents!==Be||Pe.morphTargets!==Ce||Pe.morphNormals!==$e||Pe.morphColors!==ot||Pe.toneMapping!==at||Pe.morphTargetsCount!==Ke)&&(je=!0):(je=!0,Pe.__version=Y.version);let Yt=Pe.currentProgram;je===!0&&(Yt=cs(Y,U,B));let Pi=!1,Ut=!1,Lo=!1;const ut=Yt.getUniforms(),Fn=Pe.uniforms;if(G.useProgram(Yt.program)&&(Pi=!0,Ut=!0,Lo=!0),Y.id!==q&&(q=Y.id,Ut=!0),Pi||A!==x){ut.setValue(R,"projectionMatrix",x.projectionMatrix),ut.setValue(R,"viewMatrix",x.matrixWorldInverse);const Gt=ut.map.cameraPosition;Gt!==void 0&&Gt.setValue(R,N.setFromMatrixPosition(x.matrixWorld)),F.logarithmicDepthBuffer&&ut.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ut.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),A!==x&&(A=x,Ut=!0,Lo=!0)}if(B.isSkinnedMesh){ut.setOptional(R,B,"bindMatrix"),ut.setOptional(R,B,"bindMatrixInverse");const Gt=B.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),ut.setValue(R,"boneTexture",Gt.boneTexture,ne))}B.isBatchedMesh&&(ut.setOptional(R,B,"batchingTexture"),ut.setValue(R,"batchingTexture",B._matricesTexture,ne),ut.setOptional(R,B,"batchingIdTexture"),ut.setValue(R,"batchingIdTexture",B._indirectTexture,ne),ut.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&ut.setValue(R,"batchingColorTexture",B._colorsTexture,ne));const Do=X.morphAttributes;if((Do.position!==void 0||Do.normal!==void 0||Do.color!==void 0)&&Fe.update(B,X,Yt),(Ut||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,ut.setValue(R,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Fn.envMap.value=we,Fn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&U.environment!==null&&(Fn.envMapIntensity.value=U.environmentIntensity),Ut&&(ut.setValue(R,"toneMappingExposure",S.toneMappingExposure),Pe.needsLights&&vd(Fn,Lo),me&&Y.fog===!0&&ue.refreshFogUniforms(Fn,me),ue.refreshMaterialUniforms(Fn,Y,te,Z,m.state.transmissionRenderTarget[x.id]),Qs.upload(R,ac(Pe),Fn,ne)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Qs.upload(R,ac(Pe),Fn,ne),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ut.setValue(R,"center",B.center),ut.setValue(R,"modelViewMatrix",B.modelViewMatrix),ut.setValue(R,"normalMatrix",B.normalMatrix),ut.setValue(R,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Gt=Y.uniformsGroups;for(let Io=0,Md=Gt.length;Io<Md;Io++){const cc=Gt[Io];We.update(cc,Yt),We.bind(cc,Yt)}}return Yt}function vd(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function xd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,U,X){K.get(x.texture).__webglTexture=U,K.get(x.depthTexture).__webglTexture=X;const Y=K.get(x);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,U){const X=K.get(x);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(x,U=0,X=0){L=x,H=U,P=X;let Y=!0,B=null,me=!1,Te=!1;if(x){const we=K.get(x);if(we.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(R.FRAMEBUFFER,null),Y=!1;else if(we.__webglFramebuffer===void 0)ne.setupRenderTarget(x);else if(we.__hasExternalTextures)ne.rebindTextures(x,K.get(x.texture).__webglTexture,K.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ce=x.depthTexture;if(we.__boundDepthTexture!==Ce){if(Ce!==null&&K.has(Ce)&&(x.width!==Ce.image.width||x.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(x)}}const Ne=x.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Te=!0);const Be=K.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?B=Be[U][X]:B=Be[U],me=!0):x.samples>0&&ne.useMultisampledRTT(x)===!1?B=K.get(x).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[X]:B=Be,E.copy(x.viewport),D.copy(x.scissor),ee=x.scissorTest}else E.copy(Se).multiplyScalar(te).floor(),D.copy(be).multiplyScalar(te).floor(),ee=Ie;if(G.bindFramebuffer(R.FRAMEBUFFER,B)&&Y&&G.drawBuffers(x,B),G.viewport(E),G.scissor(D),G.setScissorTest(ee),me){const we=K.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,X)}else if(Te){const we=K.get(x.texture),Ne=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,we.__webglTexture,X||0,Ne)}q=-1},this.readRenderTargetPixels=function(x,U,X,Y,B,me,Te){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=K.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){G.bindFramebuffer(R.FRAMEBUFFER,Ae);try{const we=x.texture,Ne=we.format,Be=we.type;if(!F.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-Y&&X>=0&&X<=x.height-B&&R.readPixels(U,X,Y,B,Oe.convert(Ne),Oe.convert(Be),me)}finally{const we=L!==null?K.get(L).__webglFramebuffer:null;G.bindFramebuffer(R.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(x,U,X,Y,B,me,Te){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=K.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){G.bindFramebuffer(R.FRAMEBUFFER,Ae);try{const we=x.texture,Ne=we.format,Be=we.type;if(!F.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=x.width-Y&&X>=0&&X<=x.height-B){const Ce=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ce),R.bufferData(R.PIXEL_PACK_BUFFER,me.byteLength,R.STREAM_READ),R.readPixels(U,X,Y,B,Oe.convert(Ne),Oe.convert(Be),0),R.flush();const $e=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await hv(R,$e,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,Ce),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,me)}finally{R.deleteBuffer(Ce),R.deleteSync($e)}return me}}finally{const we=L!==null?K.get(L).__webglFramebuffer:null;G.bindFramebuffer(R.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(x,U=null,X=0){x.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1]);const Y=Math.pow(2,-X),B=Math.floor(x.image.width*Y),me=Math.floor(x.image.height*Y),Te=U!==null?U.x:0,Ae=U!==null?U.y:0;ne.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,X,0,0,Te,Ae,B,me),G.unbindTexture()},this.copyTextureToTexture=function(x,U,X=null,Y=null,B=0){x.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,x=arguments[1],U=arguments[2],B=arguments[3]||0,X=null);let me,Te,Ae,we,Ne,Be;X!==null?(me=X.max.x-X.min.x,Te=X.max.y-X.min.y,Ae=X.min.x,we=X.min.y):(me=x.image.width,Te=x.image.height,Ae=0,we=0),Y!==null?(Ne=Y.x,Be=Y.y):(Ne=0,Be=0);const Ce=Oe.convert(U.format),$e=Oe.convert(U.type);ne.setTexture2D(U,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const ot=R.getParameter(R.UNPACK_ROW_LENGTH),at=R.getParameter(R.UNPACK_IMAGE_HEIGHT),It=R.getParameter(R.UNPACK_SKIP_PIXELS),Ke=R.getParameter(R.UNPACK_SKIP_ROWS),Pe=R.getParameter(R.UNPACK_SKIP_IMAGES),vt=x.isCompressedTexture?x.mipmaps[B]:x.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,vt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,vt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,we),x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,B,Ne,Be,me,Te,Ce,$e,vt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,B,Ne,Be,vt.width,vt.height,Ce,vt.data):R.texSubImage2D(R.TEXTURE_2D,B,Ne,Be,me,Te,Ce,$e,vt),R.pixelStorei(R.UNPACK_ROW_LENGTH,ot),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at),R.pixelStorei(R.UNPACK_SKIP_PIXELS,It),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pe),B===0&&U.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(x,U,X=null,Y=null,B=0){x.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,x=arguments[2],U=arguments[3],B=arguments[4]||0);let me,Te,Ae,we,Ne,Be,Ce,$e,ot;const at=x.isCompressedTexture?x.mipmaps[B]:x.image;X!==null?(me=X.max.x-X.min.x,Te=X.max.y-X.min.y,Ae=X.max.z-X.min.z,we=X.min.x,Ne=X.min.y,Be=X.min.z):(me=at.width,Te=at.height,Ae=at.depth,we=0,Ne=0,Be=0),Y!==null?(Ce=Y.x,$e=Y.y,ot=Y.z):(Ce=0,$e=0,ot=0);const It=Oe.convert(U.format),Ke=Oe.convert(U.type);let Pe;if(U.isData3DTexture)ne.setTexture3D(U,0),Pe=R.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)ne.setTexture2DArray(U,0),Pe=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const vt=R.getParameter(R.UNPACK_ROW_LENGTH),je=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Yt=R.getParameter(R.UNPACK_SKIP_PIXELS),Pi=R.getParameter(R.UNPACK_SKIP_ROWS),Ut=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,at.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,we),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ne),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Be),x.isDataTexture||x.isData3DTexture?R.texSubImage3D(Pe,B,Ce,$e,ot,me,Te,Ae,It,Ke,at.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Pe,B,Ce,$e,ot,me,Te,Ae,It,at.data):R.texSubImage3D(Pe,B,Ce,$e,ot,me,Te,Ae,It,Ke,at),R.pixelStorei(R.UNPACK_ROW_LENGTH,vt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,je),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Yt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ut),B===0&&U.generateMipmaps&&R.generateMipmap(Pe),G.unbindTexture()},this.initRenderTarget=function(x){K.get(x).__webglFramebuffer===void 0&&ne.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?ne.setTextureCube(x,0):x.isData3DTexture?ne.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ne.setTexture2DArray(x,0):ne.setTexture2D(x,0),G.unbindTexture()},this.resetState=function(){H=0,P=0,L=null,G.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jl?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===wo?"display-p3":"srgb"}}class EE extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class md extends Sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uo=new W,fo=new W,sf=new lt,Lr=new ec,Bs=new os,Sa=new W,of=new W;class yE extends Lt{constructor(e=new on,t=new md){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)uo.fromBufferAttribute(t,r-1),fo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new Zn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(r),Bs.radius+=s,e.ray.intersectsSphere(Bs)===!1)return;sf.copy(r).invert(),Lr.copy(e.ray).applyMatrix4(sf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=d,m=_-1;v<m;v+=c){const p=u.getX(v),b=u.getX(v+1),S=zs(this,e,Lr,l,p,b);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(d),p=zs(this,e,Lr,l,v,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=d,m=_-1;v<m;v+=c){const p=zs(this,e,Lr,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=zs(this,e,Lr,l,_-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zs(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(uo.fromBufferAttribute(o,r),fo.fromBufferAttribute(o,s),t.distanceSqToSegment(uo,fo,Sa,of)>i)return;Sa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Sa);if(!(l<e.near||l>e.far))return{distance:l,point:of.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class gd extends Sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const af=new lt,Ml=new ec,Hs=new os,Vs=new W;class TE extends Lt{constructor(e=new on,t=new gd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(r),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;af.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(af);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,v=d;_<v;_++){const m=c.getX(_);Vs.fromBufferAttribute(f,m),lf(Vs,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,v=d;_<v;_++)Vs.fromBufferAttribute(f,_),lf(Vs,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lf(n,e,t,i,r,s,o){const a=Ml.distanceSqToPoint(n);if(a<t){const l=new W;Ml.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class bE extends Pt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class AE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cf(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);function wE(n){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.arc(64,64,64,0,2*Math.PI),t.fillStyle=`rgb(${n.r},${n.g},${n.b})`,t.fill();const i=new bE(e);return i.colorSpace=Zt,i}function uf(n,e,t){const i=[];i.push(new qe(n.x,n.y)),i.push(new qe(e.x,e.y));const r=new md({color:13092807}),s=new on().setFromPoints(i);return new yE(s,r)}function RE(n,e,t){const i=new on().setFromPoints(n),r=wE(t),s=new gd({size:e,map:r,transparent:!0,alphaTest:.1});return new TE(i,s)}var ir;(n=>{function e(s){if(s%1==0)return(s^s>>31)-(s>>31);const o=new Float64Array(1),a=new BigUint64Array(o.buffer);return o[0]=s,a[0]&=0x7FFFFFFFFFFFFFFFn,o[0]}n.abs=e;function t(s){return s>>31|1}n.sign=t;function i(s,o){return Math.floor(Math.random()*(o-s+1))+s}n.randomInteger=i;class r{constructor(o){oi(this,"x",0);oi(this,"y",0);oi(this,"z",0);[this.x,this.y,this.z]=o}static createFrom(o){return new r(o)}clone(){const o=new Float64Array([this.x,this.y,this.z]);return r.createFrom(o)}distanceTo(o){return this.minus(o).magnitude()}normalize(){return Math.sqrt(this.dot(this))}magnitude(){return this.normalize()}minus(o){const a=this.clone();return a.x-=o.x,a.y-=o.y,a.z-=o.z,a}multiplyScalar(o){const a=this.clone();return a.x=this.x*o,a.y=this.y*o,a.z=this.z*o,a}momentum(o){return this.multiplyScalar(o)}direction(){return this.multiplyScalar(1/this.magnitude())}dot(o){let a=0;return a+=this.x*o.x,a+=this.y*o.y,a+=this.z*o.z,a}}n.Vector=r})(ir||(ir={}));class CE{constructor(e){oi(this,"GRAVITATIONAL_CONSTANT",1);oi(this,"clock");oi(this,"timeScale",100);this.clock=e}setTimeScale(e){this.timeScale=e}calculateForces(e){let t=this.clock.getDelta();t*=this.timeScale;const i=e.children.length;for(let r=0;r<i;r++){const s=e.children[r],o=this.mapBody(s),a=new W;if(!o.static){for(let l=0;l<i;l++){if(r==l)continue;const c=e.children[l],u=this.mapBody(c),f=this.calculateForceBetween(o,u);a.add(f.divideScalar(o.mass))}this.updateForces(o,a,t),s.geometry.attributes.position.needsUpdate=!0}}}calculateForceBetween(e,t){const i=new W(...e.position),r=new W(...t.position),s=i.distanceTo(r),o=r.clone().sub(i),a=this.constrain(s,60,160),l=this.GRAVITATIONAL_CONSTANT*e.mass*t.mass/a**2;return o.normalize().clone().multiplyScalar(l)}updateForces(e,t,i){this.bounceAtEdge(e,t),e.acceleration.x+=t.x*=i,e.acceleration.y+=t.y*=i,e.velocity.x+=e.acceleration.x,e.velocity.y+=e.acceleration.y,e.position[0]+=e.velocity.x,e.position[1]+=e.velocity.y,e.acceleration.x=0,e.acceleration.y=0}bounceAtEdge(e,t){const[i,r]=[e.position[0],e.position[1]],s=400,o=s-Math.abs(i),a=s-Math.abs(r),l=e.velocity.x,c=e.velocity.y;o<ir.abs(l+t.x)&&(e.velocity.x*=-.1,t.x=0),(a<40||a<ir.abs(c+t.y))&&(e.velocity.y*=-.1,t.y=0),o<40&&(t.x=.01*-ir.sign(i)),a<40&&(t.y=.01*-ir.sign(r))}logScale(e,t,i){return Math.log(e+i)/Math.log(t+i)}linearScale(e,t){return this.roundDownToFixed(e/t,1)}roundDownToFixed(e,t){return e>t?t:e}expDecayScale(e,t,i){const r=e/t;return 1-Math.exp(-i*r)}momentum(e,t){return e.multiplyScalar(t)}constrain(e,t,i){return Math.max(Math.min(i,e),t)}mapBody(e){const t=e.geometry.attributes.position.array,i=e.userData;return{mass:i.mass,acceleration:i.acceleration,velocity:i.velocity,position:t,static:i.static}}}const Ki=new EE,ji=new SE({alpha:!0}),PE=new AE,ff=new CE(PE),Ea="bodies",Gs=800,LE={data(){return{camera:void 0,nuberOfBody:0,timeScale:100,mouseState:{isMouseDown:!1,mouseDownCoord:{x:0,y:0},mouseUpCoord:{x:0,y:0}}}},watch:{timeScale(n,e){ff.setTimeScale(n)}},methods:{animateScene(){if(this.camera){const n=Ki.getObjectByName(Ea);ff.calculateForces(n),ji.render(Ki,this.camera)}},setMouseState(n,e){console.log(n),this.mouseState.isMouseDown=e;let{x:t,y:i}=this.scaleMouseCoord(n);e?(this.mouseState.mouseDownCoord={x:t,y:i},this.addBody(t,i,pu.randFloat(.1,3))):this.mouseState.mouseUpCoord={x:t,y:i}},setCoordinate(){const n=new nr,e=15;n.add(uf({x:e,y:0},{x:-e,y:0})),n.add(uf({x:0,y:-e},{x:0,y:e})),Ki.add(n)},onMousemove(n){if(!this.mouseState.isMouseDown)return;let{x:e,y:t}=this.scaleMouseCoord(n);this.addBody(e,t,pu.randFloat(.1,3))},addBody(n,e,t,i={r:130,g:127,b:255}){let r=Ki.getObjectByName(Ea),s=[new W(n,e,0)],o=t*10,a=RE(s,o,i);return a.userData={mass:t,acceleration:{x:0,y:0},velocity:{x:-0,y:0},position:s},r==null||r.add(a),this.nuberOfBody++,a},drawVectorLine(n){console.log(n)},scaleMouseCoord(n){const e=Gs/2;return{x:n.offsetX-e,y:-(n.offsetY-e)}},setBodiesGroup(){let n=new nr;n.name=Ea,Ki.add(n)},initRenderer(){const n=this.$refs.scene,e=Gs;this.camera=new cd(e/-2,e/2,e/2,e/-2),this.camera.position.set(0,0,1),this.camera.lookAt(0,0,0),ji.setSize(Gs,Gs),n.appendChild(ji.domElement),ji.render(Ki,this.camera),ji.setClearColor(0,0),ji.setAnimationLoop(this.animateScene)}},mounted(){this.initRenderer(),this.setBodiesGroup(),this.setCoordinate()}},DE=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},IE={class:"container"},UE={class:"nview"},NE={class:"control"},FE={class:"stat"},OE={class:""},BE={class:"ms-1"},zE={class:""},HE={class:"ms-1"},VE={class:"mt-1"};function GE(n,e,t,i,r,s){return Vl(),_h("div",IE,[Wt("div",UE,[Wt("div",NE,[Wt("div",FE,[Wt("p",OE,[e[4]||(e[4]=Na("N of body: ")),Wt("b",BE,Ta(r.nuberOfBody),1)]),Wt("p",zE,[e[5]||(e[5]=Na("Time scale: ")),Wt("b",HE,Ta(r.timeScale),1)]),Wt("p",VE,[dp(Wt("input",{class:"slider",type:"range",min:"10",max:"1000",step:"10","onUpdate:modelValue":e[0]||(e[0]=o=>r.timeScale=o)},null,512),[[Bm,r.timeScale]])])])]),Wt("div",{class:"scene",ref:"scene",onMousedown:e[1]||(e[1]=o=>s.setMouseState(o,!0)),onMouseup:e[2]||(e[2]=o=>s.setMouseState(o,!1)),onMousemove:e[3]||(e[3]=(...o)=>s.onMousemove&&s.onMousemove(...o))},null,544)])])}const kE=DE(LE,[["render",GE],["__scopeId","data-v-775d4fd5"]]),WE=xo({__name:"NBodyView",setup(n){return(e,t)=>(Vl(),_h("main",null,[Vt(kE)]))}}),XE=$g({history:yg("/"),routes:[{path:"/",name:"home",component:WE},{path:"/about",name:"about",component:()=>Qg(()=>import("./AboutView-CepRs5w-.js"),__vite__mapDeps([0,1]))}]}),nc=Vm(jg);nc.use(qm());nc.use(XE);nc.mount("#app");export{DE as _,Wt as a,_h as c,Vl as o};
