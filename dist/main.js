(()=>{var n={49:(n,e,r)=>{"use strict";r.d(e,{Z:()=>i});var t=r(81),o=r.n(t),s=r(645),c=r.n(s)()(o());c.push([n.id,":root {\r\n  --color-base-bg: rgb(250, 250, 250);\r\n  --bg-image: url(https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1) center/cover;\r\n  --color-btn-bg: rgb(220, 220, 220);\r\n  --color-div-bg: rgba(238, 243, 245, 0.493);\r\n  --color-div-text: white;\r\n  --color-icon: white;\r\n}\r\n\r\n:root.light {\r\n    --color-base-bg: rgb(250, 250, 250);\r\n    --bg-image: url(https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1) center/cover;\r\n    --color-btn-bg: rgb(220, 220, 220);\r\n    --color-div-bg: rgba(238, 243, 245, 0.493);\r\n    --color-div-text: white;\r\n    --color-icon: white;\r\n}\r\n\r\n:root.dark {\r\n      --bg-image: url(https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1275&dpr=1) center/cover;\r\n      --border-btn: 1px solid rgb(220, 220, 220);\r\n      --color-base-bg :  #313c47;\r\n      --color-div-bg: rgba(67, 67, 85, 0.493);\r\n      --color-div-text: white;\r\n      --color-icon: #8d8c8c;\r\n\r\n    }\r\n    \r\n.nav-bar {\r\n      background: var(--color-div-bg);\r\n      color: var(--color-div-text);\r\n    }\r\n\r\n.weather-app-body {\r\n        background: var(--color-div-bg);\r\n        color: var(--color-div-text);\r\n\r\n}\r\n\r\n.nav-icon{\r\n        fill: var(--color-icon);\r\n    }\r\n    \r\n body {\r\n      background: var(--bg-image);\r\n      padding: 10px;\r\n    }\r\n  \r\n\r\n\r\n",""]);const i=c},360:(n,e,r)=>{"use strict";r.d(e,{Z:()=>i});var t=r(81),o=r.n(t),s=r(645),c=r.n(s)()(o());c.push([n.id,"@media only screen and (max-width: 760px) {\r\n\r\n    body {\r\n        height: 100vh;\r\n        background-repeat: no-repeat;\r\n        height: max-content;\r\n    }\r\n\r\n    .title {\r\n        font-size: 1.1em;\r\n    }\r\n\r\n    .loupe {\r\n        width: 40%;\r\n        height: 40%;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        bottom: 12px;\r\n        right: -30px;\r\n    }\r\n    \r\n    .nav-icon {\r\n        width: 20px;\r\n        height: 20px;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .weather-app-body {\r\n        margin-top: 50px;\r\n        width: 90%;\r\n        height: 480px;\r\n        border-radius: 15px;\r\n    }    \r\n}",""]);const i=c},426:(n,e,r)=>{"use strict";r.d(e,{Z:()=>i});var t=r(81),o=r.n(t),s=r(645),c=r.n(s)()(o());c.push([n.id,"@font-face {\r\n    font-family: 'Barlow';\r\n    font-style: italic;\r\n    font-weight: 300;\r\n    font-display: swap;\r\n    src: url(https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfP04WouvTo.woff2) format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n\r\n* {\r\n    font-family: 'Barlow', 'CooperHewittThin', sans-serif;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    align-content: stretch;\r\n    align-items: center;}\r\n\r\ndiv {\r\n    padding: 10px;\r\n}\r\n\r\nheader {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.nav-bar {\r\n    background: var(--color-base-bg);\r\n    border-radius: 45px;\r\n    width: 90%;\r\n    height: 60px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: stretch;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n\r\n.title {\r\n    font-size: 2.3em;\r\n}\r\n\r\n.search-container {\r\n    position: relative;\r\n}\r\n\r\n.loupe {\r\n    width: 40%;\r\n    height: 40%;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    bottom: 12px;\r\n    right: -50px;\r\n}\r\n\r\ninput[type = \"text\"] {\r\n    background-color: beige;\r\n    color: black;\r\n    border-radius: 5px;\r\n    border: none;\r\n    width: 100%;\r\n    height: 25px;\r\n}\r\n\r\n.nav-bar-icons{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    gap: 10%;\r\n}\r\n\r\n.weather-app-body {\r\n    margin-top: 50px;\r\n    width: 450px;\r\n    height: 480px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.weather-icon {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.dark-mode {\r\n    width: 30px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n\r\n.country {\r\n    font-size: 32px;\r\n}\r\n\r\n.temperature {\r\n    font-size: 38px;\r\n    font-weight: bold;\r\n}\r\n\r\n.weather, .date {\r\n    font-size: 26px;\r\n}\r\n\r\n.temp-weather-date {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n}\r\n\r\n.sun, .cloud, .fog, .snow, .rain, .thunder, .error-icon{\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.sun {\r\n    fill: rgb(241, 241, 99);\r\n}\r\n\r\n.cloud {\r\n    fill: rgb(141, 139, 139);\r\n}\r\n\r\n.fog {\r\n    fill: rgba(117, 90, 90, 0.877);\r\n}\r\n\r\n.rain, .error-icon {\r\n    fill: white;\r\n}\r\n\r\n\r\n.sun-course {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    font-size: 20px;\r\n    margin-top: 20px;\r\n}\r\n.nav-icon {\r\n    width: 30px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}",""]);const i=c},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(c[a]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&c[p[0]]||(void 0!==s&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=s),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var s={},c=[],i=0;i<n.length;i++){var a=n[i],l=t.base?a[0]+t.base:a[0],p=s[l]||0,d="".concat(l," ").concat(p);s[l]=p+1;var m=r(d),u={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=o(u,t);t.byIndex=i,e.splice(i,0,{identifier:d,updater:h,references:1})}c.push(d)}return c}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var s=t(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<s.length;c++){var i=r(s[c]);e[i].references--}for(var a=t(n,o),l=0;l<s.length;l++){var p=r(s[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}s=a}}},569:n=>{"use strict";var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{"use strict";n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},530:()=>{const n=document.createElement("header");document.body.appendChild(n),n.innerHTML='    <div class="nav-bar">\n<div class="title">WEATHER APP</div>\n\n<div class="search-container">        \n    <input type="text" name="search" id="search-bar" placeholder="Enter a city or a country name">\n    <svg class="loupe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg></div>\n\n<div class="nav-bar-icons">\n    <svg class="localisation nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>\n    <a href="https://github.com/Aminady" target="_blank" rel="noreferrer">\n    <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>\n    <svg class="dark-mode nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M421.6 379.9c-.6641 0-1.35 .0625-2.049 .1953c-11.24 2.143-22.37 3.17-33.32 3.17c-94.81 0-174.1-77.14-174.1-175.5c0-63.19 33.79-121.3 88.73-152.6c8.467-4.812 6.339-17.66-3.279-19.44c-11.2-2.078-29.53-3.746-40.9-3.746C132.3 31.1 32 132.2 32 256c0 123.6 100.1 224 223.8 224c69.04 0 132.1-31.45 173.8-82.93C435.3 389.1 429.1 379.9 421.6 379.9zM255.8 432C158.9 432 80 353 80 256c0-76.32 48.77-141.4 116.7-165.8C175.2 125 163.2 165.6 163.2 207.8c0 99.44 65.13 183.9 154.9 212.8C298.5 428.1 277.4 432 255.8 432z"/></svg>\n</div>\n</div>\n';const e=document.createElement("div");e.className="weather-app-body",document.body.appendChild(e),e.innerHTML='        \n<div class="localisation">\n    <p class="country"></p>\n</div>\n\n<div class="weather-icon">\n</div>\n\n<div class="temp-weather-date">\n    <p class="temperature"></p>\n    <p class="weather"></p>\n    <p class="date"></p>\n</div>\n\n<div class="sun-course">\n    <p class="sunrise"></p>\n    <p class="sunset"></p>\n</div>\n'}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var s=e[t]={id:t,exports:{}};return n[t](s,s.exports,r),s.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{"use strict";var n=r(379),e=r.n(n),t=r(795),o=r.n(t),s=r(569),c=r.n(s),i=r(565),a=r.n(i),l=r(216),p=r.n(l),d=r(589),m=r.n(d),u=r(426),h={};h.styleTagTransform=m(),h.setAttributes=a(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var v=r(49),g={};g.styleTagTransform=m(),g.setAttributes=a(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),e()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;var w=r(360),f={};function x(n){return new Date(1e3*n).toLocaleTimeString().slice(0,5)}f.styleTagTransform=m(),f.setAttributes=a(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(w.Z,f),w.Z&&w.Z.locals&&w.Z.locals,r(530);let b=document.querySelector(".country"),y=document.querySelector(".temperature"),C=document.querySelector(".weather"),L=document.querySelector(".date"),z=document.querySelector(".sunrise"),M=document.querySelector(".sunset"),F=document.querySelector(".weather-icon");async function H(n){const e=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${n}&APPID=bf6a7f8b83a17833aa9772415f2e3e57`,{mode:"cors"}),r=await e.json();try{b.textContent=r.name+", "+r.sys.country,y.textContent=parseInt(.1*r.main.temp)+" °C",C.textContent=(s=r.weather[0].description).charAt(0).toUpperCase()+s.slice(1),L.textContent=(new Date).toLocaleDateString("en-EN",{month:"2-digit",day:"2-digit"}),z.textContent=`Sunrise : ${x(r.sys.sunrise+r.timezone)}`,M.textContent=`Sunset : ${x(r.sys.sunset+r.timezone)}`,t=r.weather[0].id,o=F,t<=300&&(o.innerHTML='<svg class="thunder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M0 224c0 53 43 96 96 96h47.2L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L333.7 320H352h64c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm330.1 3.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7h70.1L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7H281.9l52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z"/></svg>'),t>300&&(o.innerHTML='<svg class="rain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3z"/></svg>'),t>=500&&(o.innerHTML='<svg class="rain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3z"/></svg>'),t>=600&&(o.innerHTML='<svg class="snow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M484.4 294.4c1.715 6.402 .6758 12.89-2.395 18.21s-8.172 9.463-14.57 11.18l-31.46 8.43l32.96 19.03C480.4 357.8 484.4 372.5 477.8 384s-21.38 15.41-32.86 8.783l-32.96-19.03l8.43 31.46c3.432 12.81-4.162 25.96-16.97 29.39s-25.96-4.162-29.39-16.97l-20.85-77.82L280 297.6v84.49l56.97 56.97c9.375 9.375 9.375 24.56 0 33.94C332.3 477.7 326.1 480 320 480s-12.28-2.344-16.97-7.031L280 449.9V488c0 13.25-10.75 24-24 24s-24-10.75-24-24v-38.06l-23.03 23.03c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94L232 382.1V297.6l-73.17 42.25l-20.85 77.82c-3.432 12.81-16.58 20.4-29.39 16.97s-20.4-16.58-16.97-29.39l8.43-31.46l-32.96 19.03C55.61 399.4 40.85 395.5 34.22 384s-2.615-26.16 8.859-32.79l32.96-19.03l-31.46-8.43c-12.81-3.432-20.4-16.58-16.97-29.39s16.58-20.4 29.39-16.97l77.82 20.85L208 255.1L134.8 213.8L57.01 234.6C44.2 238 31.05 230.4 27.62 217.6s4.162-25.96 16.97-29.39l31.46-8.432L43.08 160.8C31.61 154.2 27.6 139.5 34.22 128s21.38-15.41 32.86-8.785l32.96 19.03L91.62 106.8C88.18 93.98 95.78 80.83 108.6 77.39s25.96 4.162 29.39 16.97l20.85 77.82L232 214.4V129.9L175 72.97c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L232 62.06V24C232 10.75 242.8 0 256 0s24 10.75 24 24v38.06l23.03-23.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94L280 129.9v84.49l73.17-42.25l20.85-77.82c3.432-12.81 16.58-20.4 29.39-16.97c6.402 1.715 11.5 5.861 14.57 11.18s4.109 11.81 2.395 18.21l-8.43 31.46l32.96-19.03C456.4 112.6 471.2 116.5 477.8 128s2.615 26.16-8.859 32.78l-32.96 19.03l31.46 8.432c12.81 3.432 20.4 16.58 16.97 29.39s-16.58 20.4-29.39 16.97l-77.82-20.85L304 255.1l73.17 42.25l77.82-20.85C467.8 273.1 480.1 281.6 484.4 294.4z"/></svg>'),t>=701&&(o.innerHTML='<svg class="fog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M32 144c0 79.5 64.5 144 144 144H299.3c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32H496c61.9 0 112-50.1 112-112s-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.4 12.2-85.1 32.3C242.1 12.1 210.5 0 176 0C96.5 0 32 64.5 32 144zM616 368H280c-13.3 0-24 10.7-24 24s10.7 24 24 24H616c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-64 96H440c-13.3 0-24 10.7-24 24s10.7 24 24 24H552c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-192 0H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24zM224 392c0-13.3-10.7-24-24-24H96c-13.3 0-24 10.7-24 24s10.7 24 24 24H200c13.3 0 24-10.7 24-24z"/></svg>'),t>=801&&(o.innerHTML='<svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>'),800===t&&(o.innerHTML='<svg class="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"/></svg>')}catch(n){if("city not found"!=r.message)return n;b.textContent="Location not found.",y.textContent="",C.textContent="",L.textContent="",z.textContent="",M.textContent="",F.innerHTML='<svg class="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M169.6 291.3C172.8 286.9 179.2 286.9 182.4 291.3C195.6 308.6 223.1 349 223.1 369C223.1 395 202.5 416 175.1 416C149.5 416 127.1 395 127.1 369C127.1 349 156.6 308.6 169.6 291.3H169.6zM368 346.8C377.9 355.6 378.7 370.8 369.9 380.7C361 390.6 345.9 391.4 335.1 382.6C314.7 363.5 286.7 352 256 352C242.7 352 232 341.3 232 328C232 314.7 242.7 304 256 304C299 304 338.3 320.2 368 346.8L368 346.8zM335.6 176C353.3 176 367.6 190.3 367.6 208C367.6 225.7 353.3 240 335.6 240C317.1 240 303.6 225.7 303.6 208C303.6 190.3 317.1 176 335.6 176zM175.6 240C157.1 240 143.6 225.7 143.6 208C143.6 190.3 157.1 176 175.6 176C193.3 176 207.6 190.3 207.6 208C207.6 225.7 193.3 240 175.6 240zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM175.9 448C200.5 458.3 227.6 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 308.7 67.59 356.8 99.88 393.4C110.4 425.4 140.9 447.9 175.9 448V448z"/></svg> '}var t,o,s}async function A(){const n=await fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=18f81c5c2973449488cd1ce29cfea360",{mode:"cors"}),e=await n.json();try{H(e.city)}catch(n){console.log(n)}}let S=document.getElementById("search-bar"),T=document.querySelector(".loupe"),I=document.querySelector(".localisation");document.body.onload=A(),document.querySelector(".dark-mode").addEventListener("click",(function(){const n=document.documentElement,e="dark"===n.className?"light":"dark";n.className=e})),I.addEventListener("click",A),T.addEventListener("click",(()=>{H(S.value)}))})()})();