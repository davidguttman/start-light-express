(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();var me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pe(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Mi(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var n=t.default;if(typeof n=="function"){var o=function r(){var s=!1;try{s=this instanceof r}catch{}return s?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};o.prototype=n.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(o,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),o}var At={exports:{}},xn;function Ui(){if(xn)return At.exports;xn=1;var t=[],n=[],o="insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";function r(i,f){if(f=f||{},i===void 0)throw new Error(o);var x=f.prepend===!0?"prepend":"append",d=f.container!==void 0?f.container:document.querySelector("head"),c=t.indexOf(d);c===-1&&(c=t.push(d)-1,n[c]={});var g;return n[c]!==void 0&&n[c][x]!==void 0?g=n[c][x]:(g=n[c][x]=s(),x==="prepend"?d.insertBefore(g,d.childNodes[0]):d.appendChild(g)),i.charCodeAt(0)===65279&&(i=i.substr(1,i.length)),g.styleSheet?g.styleSheet.cssText+=i:g.textContent+=i,g}function s(){var i=document.createElement("style");return i.setAttribute("type","text/css"),i}return At.exports=r,At.exports.insertCss=r,At.exports}var no=Ui();const io=Pe(no);io(`
  body {
    background: #1c1c1c;
    color: #f8f9fa;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 20px 20px;
    position: relative;
  }
  
  .user-email {
    font-size: 0.75rem;
    color: #6c757d;
    text-align: right;
    margin-bottom: 1rem;
  }
  
  /* Mobile responsive styles */
  @media (max-width: 768px) {
    .container {
      padding: 15px;
      width: 100%;
      box-sizing: border-box;
    }
    
    .content {
      padding: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .container {
      padding: 10px;
    }
    
    .content {
      padding: 1rem;
      margin-bottom: 1rem;
    }
    
    .content h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .content h2 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }
  }

  .header {
    background: #343a40;
    padding: 0.5rem 0;
    border-bottom: 1px solid #495057;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 2rem;
  }
  
  .nav-left,
  .nav-center,
  .nav-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .nav-center {
    flex: 1;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    .header {
      padding: 0.5rem 0;
    }
    
    .nav {
      min-height: auto;
    }
    
    .nav-left,
    .nav-center,
    .nav-right {
      gap: 0.5rem;
    }
    
    .nav a, .logout-btn, .auth-btn {
      padding: 0.4rem 0.6rem;
      font-size: 0.85rem;
    }
    
    .user-info {
      font-size: 0.8rem;
      margin-right: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .header {
      padding: 0.4rem 0;
    }
    
    .user-info {
      font-size: 0.8rem;
      margin-right: 0;
      width: 100%;
      text-align: right;
      margin-top: 0.5rem;
    }
    
    .nav a, .logout-btn, .auth-btn {
      padding: 0.4rem 0.7rem;
      font-size: 0.9rem;
    }
  }

  .nav a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .nav a:hover,
  .nav a.active {
    background-color: #495057;
  }

  /* User info display */
  .user-info {
    color: #adb5bd;
    font-size: 0.85rem;
    margin-right: 0.75rem;
  }

  /* Auth and logout buttons */
  .logout-btn,
  .auth-btn {
    border: none;
    padding: 0.4rem 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background-color 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  
  .auth-btn {
    background: #007bff;
    color: white;
  }
  
  .logout-btn {
    background: transparent;
    color: #adb5bd;
    border: 1px solid #495057;
  }
  
  .logout-btn:hover {
    background: #495057;
    color: #fff;
  }
  
  .auth-btn:hover {
    background: #0056b3;
  }

  .content {
    background: #212529;
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid #343a40;
  }

  .btn {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.2s;
  }

  .btn:hover {
    background: #0056b3;
  }

  .btn-secondary {
    background: #6c757d;
  }

  .btn-secondary:hover {
    background: #545b62;
  }

  .widget-list {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
  }

  .widget-item {
    background: #343a40;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #495057;
  }

  .widget-item h3 {
    margin: 0 0 0.5rem 0;
    color: #fff;
  }

  .widget-meta {
    color: #adb5bd;
    font-size: 0.9rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.25rem;
    color: #f8f9fa;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #495057;
    border-radius: 4px;
    background: #343a40;
    color: #f8f9fa;
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    .form-group input,
    .form-group textarea {
      font-size: 16px; /* Prevent zoom on iOS */
    }
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #007bff;
  }

  .loading {
    text-align: center;
    padding: 2rem;
    color: #adb5bd;
  }

  .error {
    background: #721c24;
    color: #f1aeb5;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    border: 1px solid #842029;
  }

  .success {
    background: #0f5132;
    color: #a3cfbb;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    border: 1px solid #146c43;
  }

  /* Auth container styling */
  .auth-container {
    max-width: 450px;
    margin: 2rem auto;
    padding: 2rem;
    background: #212529;
    border-radius: 8px;
    border: 1px solid #343a40;
  }
  
  @media (max-width: 768px) {
    .auth-container {
      max-width: none !important;
      margin: 1rem 0 !important;
      padding: 1rem !important;
      border-radius: 4px;
      width: 100% !important;
      box-sizing: border-box;
    }
    
    /* Override authentic-ui generated styles */
    .auth-container > div {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      box-sizing: border-box !important;
    }
    
    .auth-container form,
    .auth-container form > div {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
    }
    
    .auth-container input,
    .auth-container button {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
    }
  }
  
  .auth-container h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #f8f9fa;
  }
  
  .auth-container input {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    background: #343a40;
    border: 1px solid #495057;
    border-radius: 4px;
    color: #f8f9fa;
    font-size: 1rem;
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    .auth-container input {
      font-size: 16px; /* Prevent zoom on iOS */
      padding: 1rem;
    }
  }
  
  /* Fix input attributes for better UX */
  .auth-container input[name="email"] {
    text-transform: none !important;
    autocapitalize: none !important;
    autocorrect: off !important;
    spellcheck: false !important;
  }
  
  .auth-container input[type="email"] {
    text-transform: none !important;
    autocapitalize: none !important;
    autocorrect: off !important;
    spellcheck: false !important;
  }
  
  .auth-container input:focus {
    outline: none;
    border-color: #007bff;
    background: #495057;
  }
  
  .auth-container button {
    width: 100%;
    padding: 0.75rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s;
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    .auth-container button {
      padding: 1rem;
      font-size: 16px;
    }
  }
  
  .auth-container button:hover {
    background: #0056b3;
  }
  
  .auth-container button:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
  
  .auth-container .auth-error {
    color: #f1aeb5;
    background: #721c24;
    padding: 0.75rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    text-align: center;
    border: 1px solid #842029;
  }
  
  .auth-container .auth-success {
    color: #a3cfbb;
    background: #0f5132;
    padding: 0.75rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    text-align: center;
    border: 1px solid #146c43;
  }
  
  .auth-container .auth-links {
    text-align: center;
    margin-top: 1rem;
  }
  
  .auth-container .auth-links a {
    color: #007bff;
    text-decoration: none;
    margin: 0 0.5rem;
  }
  
  .auth-container .auth-links a:hover {
    text-decoration: underline;
  }
  
  /* Complete authentic-ui styling override (styles: false) */
  /* Since styles are disabled, we just need to style the auth-container directly */
  .auth-container {
    background: #212529;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 16px;
    padding: 30px 50px;
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
    margin: 2rem auto;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 14px 45px, rgba(0, 0, 0, 0.3) 0px 10px 18px;
    border: 1px solid #343a40;
    color: #f8f9fa;
    box-sizing: border-box;
  }
  
  /* Mobile responsive styling for auth container */
  @media (max-width: 768px) {
    .auth-container {
      margin: 1rem;
      padding: 20px 30px;
      max-width: none;
      width: calc(100% - 2rem);
    }
  }
  
  /* Title styling */
  .auth-container h1,
  .auth-container h2,
  .auth-container .title {
    font-size: 16px;
    font-weight: bold;
    margin: 1.33em 0;
    color: #f8f9fa;
  }
  
  /* Input styling matching authentic-ui */
  .auth-container input {
    width: 100%;
    height: 36px;
    outline: none;
    font-size: 16px;
    font-weight: 100;
    line-height: 24px;
    border: none;
    border-bottom: 1px solid #495057;
    margin-bottom: 16px;
    background: transparent;
    color: #f8f9fa;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  .auth-container input:focus {
    border-bottom-color: #007bff;
    background: transparent;
  }
  
  /* Error styling */
  .auth-container .error {
    margin: 20px 0;
    color: #f1aeb5;
    background: #721c24;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid #842029;
  }
  
  /* Submit button styling matching authentic-ui */
  .auth-container button,
  .auth-container input[type="submit"] {
    color: #fff;
    background-color: #007bff;
    width: 100%;
    padding: 0px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border: 0px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 6px, rgba(0, 0, 0, 0.3) 0px 1px 4px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-appearance: button;
    margin-bottom: 1rem;
  }
  
  .auth-container button:hover,
  .auth-container input[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  .auth-container button:disabled,
  .auth-container input[type="submit"]:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  
  /* Links styling */
  .auth-container .links {
    margin-top: 20px;
    color: #adb5bd;
  }
  
  .auth-container .links a,
  .auth-container .link,
  .auth-container a {
    color: #4fc3f7; /* Light blue for better visibility on dark background */
    font-weight: 100;
    text-decoration: none;
  }
  
  .auth-container .links a:hover,
  .auth-container .link:hover,
  .auth-container a:hover {
    color: #81d4fa; /* Lighter blue on hover */
    text-decoration: underline;
  }
  
  /* Success message styling */
  .auth-container .success {
    margin: 20px 0;
    color: #a3cfbb;
    background: #0f5132;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid #146c43;
  }
`);var er,wn;function ao(){if(wn)return er;wn=1,er=t;function t(){if(!(this instanceof t))return new t;this._hash=new r}t.prototype.get=n,t.prototype.set=o;function n(d){for(var c=d.split("/"),g=this._hash,m=null,h={},a,l=0;l<c.length;l++){var p=c[l];if(!(!p&&!g.isSplat))if(p==="__proto__"&&g.hasOwnProperty("proto"))g=g.proto;else if(g.staticPaths.hasOwnProperty(p))g=g.staticPaths[p];else if(a=g.variablePaths)if(a.isSplat){m=c.slice(l).join("/"),g=a;break}else h[a.segment]=p,g=a;else{g=null;break}}return g&&g.handler===null&&g.variablePaths&&g.variablePaths.isSplat&&(m="",g=g.variablePaths),new s(g,h,m)}function o(d,c){var g=d.split("/"),m=this._hash,h=g.length-1,a=d.indexOf("*"),l=a>=0;if(l&&a!==d.length-1)throw i(d);for(var p=0;p<g.length;p++){var b=g[p];if(b)if(l&&p===h){if(m=m.variablePaths||(m.variablePaths=new r(m,b,!0)),!m.isSplat)throw f(d,m)}else if(b.indexOf(":")===0){if(b=b.slice(1),m=m.variablePaths||(m.variablePaths=new r(m,b)),m.segment!==b||m.isSplat)throw f(d,m)}else b==="__proto__"?m=m.hasOwnProperty("proto")&&m.proto||(m.proto=new r(m,b)):m=m.staticPaths.hasOwnProperty(b)&&m.staticPaths[b]||(m.staticPaths[b]=new r(m,b))}m.handler===null?(m.src=d,m.handler=c):x(d,m)}function r(d,c,g){this.parent=d||null,this.segment=c||null,this.handler=null,this.staticPaths={},this.variablePaths=null,this.isSplat=!!g,this.src=null}function s(d,c,g){this.handler=d&&d.handler||null,this.splat=g,this.params=c,this.src=d&&d.src||null}function i(d){var c=new Error("The splat * must be the last segment of the path");return c.pathname=d,c}function f(d,c){for(var g=c.isSplat?"":"/";c&&c.parent;){var m=!c.isSplat&&c===c.parent.variablePaths?":":"";g="/"+m+c.segment+g,c=c.parent}var h=new Error("Route conflict");return h.attemptedPath=d,h.conflictPath=g,h}function x(d,c){throw f(d,c)}return er}var oo=ao();const so=Pe(oo);var tr,Tn;function uo(){if(Tn)return tr;Tn=1,tr=n;var t={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};function n(o){return function(r,s,i){for(var f in s)f in t&&(s[t[f]]=s[f],delete s[f]);return o(r,s,i)}}return tr}var rr,En;function Di(){if(En)return rr;En=1;var t=uo(),n=0,o=1,r=2,s=3,i=4,f=5,x=6,d=7,c=8,g=9,m=10,h=11,a=12,l=13;rr=function(T,A){A||(A={});var P=A.concat||function($,E){return String($)+String(E)};return A.attrToProp!==!1&&(T=t(T)),function($){for(var E=o,R="",X=arguments.length,U=[],O=0;O<$.length;O++)if(O<X-1){var ne=arguments[O+1],j=re($[O]),J=E;J===m&&(J=c),J===g&&(J=c),J===d&&(J=c),J===i&&(J=f),J===r?R==="/"?(j.push([r,"/",ne]),R=""):j.push([r,ne]):J===l&&A.comments?R+=String(ne):J!==l&&j.push([n,J,ne]),U.push.apply(U,j)}else U.push.apply(U,re($[O]));for(var K=[null,{},[]],W=[[K,-1]],O=0;O<U.length;O++){var S=W[W.length-1][0],j=U[O],k=j[0];if(k===r&&/^\//.test(j[1])){var G=W[W.length-1][1];W.length>1&&(W.pop(),W[W.length-1][0][2][G]=T(S[0],S[1],S[2].length?S[2]:void 0))}else if(k===r){var H=[j[1],{},[]];S[2].push(H),W.push([H,S[2].length-1])}else if(k===f||k===n&&j[1]===f){for(var I="",ie;O<U.length;O++)if(U[O][0]===f)I=P(I,U[O][1]);else if(U[O][0]===n&&U[O][1]===f)if(typeof U[O][2]=="object"&&!I)for(ie in U[O][2])U[O][2].hasOwnProperty(ie)&&!S[1][ie]&&(S[1][ie]=U[O][2][ie]);else I=P(I,U[O][2]);else break;U[O][0]===h&&O++;for(var oe=O;O<U.length;O++)if(U[O][0]===c||U[O][0]===f)S[1][I]?U[O][1]===""||(S[1][I]=P(S[1][I],U[O][1])):S[1][I]=D(U[O][1]);else if(U[O][0]===n&&(U[O][1]===c||U[O][1]===f))S[1][I]?U[O][2]===""||(S[1][I]=P(S[1][I],U[O][2])):S[1][I]=D(U[O][2]);else{I.length&&!S[1][I]&&O===oe&&(U[O][0]===s||U[O][0]===a)&&(S[1][I]=I.toLowerCase()),U[O][0]===s&&O--;break}}else if(k===f)S[1][j[1]]=!0;else if(k===n&&j[1]===f)S[1][j[2]]=!0;else if(k===s){if(C(S[0])&&W.length){var G=W[W.length-1][1];W.pop(),W[W.length-1][0][2][G]=T(S[0],S[1],S[2].length?S[2]:void 0)}}else if(k===n&&j[1]===o)j[2]===void 0||j[2]===null?j[2]="":j[2]||(j[2]=P("",j[2])),Array.isArray(j[2][0])?S[2].push.apply(S[2],j[2]):S[2].push(j[2]);else if(k===o)S[2].push(j[1]);else if(!(k===h||k===a))throw new Error("unhandled: "+k)}if(K[2].length>1&&/^\s*$/.test(K[2][0])&&K[2].shift(),K[2].length>2||K[2].length===2&&/\S/.test(K[2][1])){if(A.createFragment)return A.createFragment(K[2]);throw new Error("multiple root elements must be wrapped in an enclosing tag")}return Array.isArray(K[2][0])&&typeof K[2][0][0]=="string"&&Array.isArray(K[2][0][2])&&(K[2][0]=T(K[2][0][0],K[2][0][1],K[2][0][2])),K[2][0];function re(ve){var F=[];E===d&&(E=i);for(var ce=0;ce<ve.length;ce++){var N=ve.charAt(ce);E===o&&N==="<"?(R.length&&F.push([o,R]),R="",E=r):N===">"&&!p(E)&&E!==l?(E===r&&R.length?F.push([r,R]):E===f?F.push([f,R]):E===c&&R.length&&F.push([c,R]),F.push([s]),R="",E=o):E===l&&/-$/.test(R)&&N==="-"?(A.comments&&F.push([c,R.substr(0,R.length-1)]),R="",E=o):E===r&&/^!--$/.test(R)?(A.comments&&F.push([r,R],[f,"comment"],[h]),R=N,E=l):E===o||E===l?R+=N:E===r&&N==="/"&&R.length||(E===r&&/\s/.test(N)?(R.length&&F.push([r,R]),R="",E=i):E===r?R+=N:E===i&&/[^\s"'=/]/.test(N)?(E=f,R=N):E===i&&/\s/.test(N)?(R.length&&F.push([f,R]),F.push([a])):E===f&&/\s/.test(N)?(F.push([f,R]),R="",E=x):E===f&&N==="="?(F.push([f,R],[h]),R="",E=d):E===f?R+=N:(E===x||E===i)&&N==="="?(F.push([h]),E=d):(E===x||E===i)&&!/\s/.test(N)?(F.push([a]),/[\w-]/.test(N)?(R+=N,E=f):E=i):E===d&&N==='"'?E=m:E===d&&N==="'"?E=g:E===m&&N==='"'?(F.push([c,R],[a]),R="",E=i):E===g&&N==="'"?(F.push([c,R],[a]),R="",E=i):E===d&&!/\s/.test(N)?(E=c,ce--):E===c&&/\s/.test(N)?(F.push([c,R],[a]),R="",E=i):(E===c||E===g||E===m)&&(R+=N))}return E===o&&R.length?(F.push([o,R]),R=""):E===c&&R.length?(F.push([c,R]),R=""):E===m&&R.length?(F.push([c,R]),R=""):E===g&&R.length?(F.push([c,R]),R=""):E===f&&(F.push([f,R]),R=""),F}};function D($){return typeof $=="function"||typeof $=="string"||$&&typeof $=="object"||$==null?$:P("",$)}};function p(T){return T===g||T===m}var b=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");function C(T){return b.test(T)}return rr}var nr,_n;function lo(){if(_n)return nr;_n=1;var t=/\n[\s]+$/,n=/^\n[\s]+/,o=/[\s]+$/,r=/^[\s]+/,s=/[\n\s]+/g,i=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],f=["code","pre","textarea"];return nr=function x(d,c){if(Array.isArray(c))for(var g=d.nodeName.toLowerCase(),m=!1,h,a,l=0,p=c.length;l<p;l++){var b=c[l];if(Array.isArray(b)){x(d,b);continue}(typeof b=="number"||typeof b=="boolean"||typeof b=="function"||b instanceof Date||b instanceof RegExp)&&(b=b.toString());var C=d.childNodes[d.childNodes.length-1];if(typeof b=="string")m=!0,C&&C.nodeName==="#text"?C.nodeValue+=b:(b=d.ownerDocument.createTextNode(b),d.appendChild(b),C=b),l===p-1&&(m=!1,i.indexOf(g)===-1&&f.indexOf(g)===-1?(h=C.nodeValue.replace(n,"").replace(o,"").replace(t,"").replace(s," "),h===""?d.removeChild(C):C.nodeValue=h):f.indexOf(g)===-1&&(a=l===0?"":" ",h=C.nodeValue.replace(n,a).replace(r," ").replace(o,"").replace(t,"").replace(s," "),C.nodeValue=h));else if(b&&b.nodeType){m&&(m=!1,i.indexOf(g)===-1&&f.indexOf(g)===-1?(h=C.nodeValue.replace(n,"").replace(t," ").replace(s," "),h===""?d.removeChild(C):C.nodeValue=h):f.indexOf(g)===-1&&(h=C.nodeValue.replace(r," ").replace(n,"").replace(t," ").replace(s," "),C.nodeValue=h));var T=b.nodeName;T&&(g=T.toLowerCase()),d.appendChild(b)}}},nr}var ir,Sn;function fo(){return Sn||(Sn=1,ir=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]),ir}var ar,An;function co(){return An||(An=1,ar=["async","autofocus","autoplay","checked","controls","default","defaultchecked","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","novalidate","open","playsinline","readonly","required","reversed","selected"]),ar}var or,Rn;function ho(){return Rn||(Rn=1,or=["indeterminate"]),or}var sr,kn;function po(){if(kn)return sr;kn=1;var t=Di(),n=lo(),o=fo(),r=co(),s=ho(),i="http://www.w3.org/2000/svg",f="http://www.w3.org/1999/xlink",x="!--";return sr=function(d){function c(h,a,l){var p;o.indexOf(h)!==-1&&(a.namespace=i);var b=!1;a.namespace&&(b=a.namespace,delete a.namespace);var C=!1;if(a.is&&(C=a.is,delete a.is),b)C?p=d.createElementNS(b,h,{is:C}):p=d.createElementNS(b,h);else{if(h===x)return d.createComment(a.comment);C?p=d.createElement(h,{is:C}):p=d.createElement(h)}for(var T in a)if(a.hasOwnProperty(T)){var A=T.toLowerCase(),P=a[T];if(A==="classname"&&(A="class",T="class"),T==="htmlFor"&&(T="for"),r.indexOf(A)!==-1){if(String(P)==="true")P=A;else if(String(P)==="false")continue}A.slice(0,2)==="on"||s.indexOf(A)!==-1?p[T]=P:b?T==="xlink:href"?p.setAttributeNS(f,T,P):/^xmlns($|:)/i.test(T)||p.setAttributeNS(null,T,P):p.setAttribute(T,P)}return n(p,l),p}function g(h){for(var a=d.createDocumentFragment(),l=0;l<h.length;l++)h[l]!=null&&(Array.isArray(h[l])?a.appendChild(g(h[l])):(typeof h[l]=="string"&&(h[l]=d.createTextNode(h[l])),a.appendChild(h[l])));return a}var m=t(c,{comments:!0,createFragment:g});return m.default=m,m.createComment=c,m},sr}var ur,On;function Hi(){return On||(On=1,ur=po()(document)),ur}var go=Hi();const Z=Pe(go);var lr,Pn;function Ni(){if(Pn)return lr;Pn=1,r.notEqual=n,r.notOk=o,r.equal=t,r.ok=r,lr=r;function t(s,i,f){r(s==i,f)}function n(s,i,f){r(s!=i,f)}function o(s,i){r(!s,i)}function r(s,i){if(!s)throw new Error(i||"AssertionError")}return lr}var fr,Ln;function mo(){return Ln||(Ln=1,fr=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onmouseenter","onmouseleave","ontouchcancel","ontouchend","ontouchmove","ontouchstart","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","onanimationend","onanimationiteration","onanimationstart","oncontextmenu","onfocusin","onfocusout"]),fr}var cr,qn;function vo(){if(qn)return cr;qn=1;var t=mo(),n=t.length,o=1,r=3,s=8;cr=i;function i(h,a){var l=h.nodeType,p=h.nodeName;l===o&&f(h,a),(l===r||l===s)&&a.nodeValue!==h.nodeValue&&(a.nodeValue=h.nodeValue),p==="INPUT"?c(h,a):p==="OPTION"?d(h,a):p==="TEXTAREA"&&g(h,a),x(h,a)}function f(h,a){for(var l=a.attributes,p=h.attributes,b=null,C=null,T=null,A=null,P=null,D=p.length-1;D>=0;--D)P=p[D],A=P.name,b=P.namespaceURI,C=P.value,b?(A=P.localName||A,T=a.getAttributeNS(b,A),T!==C&&a.setAttributeNS(b,A,C)):a.hasAttribute(A)?(T=a.getAttribute(A),T!==C&&(C==="null"||C==="undefined"?a.removeAttribute(A):a.setAttribute(A,C))):a.setAttribute(A,C);for(var $=l.length-1;$>=0;--$)P=l[$],P.specified!==!1&&(A=P.name,b=P.namespaceURI,b?(A=P.localName||A,h.hasAttributeNS(b,A)||a.removeAttributeNS(b,A)):h.hasAttributeNS(null,A)||a.removeAttribute(A))}function x(h,a){for(var l=0;l<n;l++){var p=t[l];h[p]?a[p]=h[p]:a[p]&&(a[p]=void 0)}}function d(h,a){m(h,a,"selected")}function c(h,a){var l=h.value,p=a.value;m(h,a,"checked"),m(h,a,"disabled"),h.indeterminate!==a.indeterminate&&(a.indeterminate=h.indeterminate),a.type!=="file"&&(l!==p&&(a.setAttribute("value",l),a.value=l),l==="null"&&(a.value="",a.removeAttribute("value")),h.hasAttributeNS(null,"value")?a.type==="range"&&(a.value=l):a.removeAttribute("value"))}function g(h,a){var l=h.value;if(l!==a.value&&(a.value=l),a.firstChild&&a.firstChild.nodeValue!==l){if(l===""&&a.firstChild.nodeValue===a.placeholder)return;a.firstChild.nodeValue=l}}function m(h,a,l){h[l]!==a[l]&&(a[l]=h[l],h[l]?a.setAttribute(l,""):a.removeAttribute(l))}return cr}var dr,$n;function bo(){if($n)return dr;$n=1;var t=Ni(),n=vo(),o=3;dr=r;function r(d,c,g){return t.equal(typeof d,"object","nanomorph: oldTree should be an object"),t.equal(typeof c,"object","nanomorph: newTree should be an object"),g&&g.childrenOnly?(f(c,d),d):(t.notEqual(c.nodeType,11,"nanomorph: newTree should have one root node (which is not a DocumentFragment)"),s(c,d))}function s(d,c){return c?d?d.isSameNode&&d.isSameNode(c)?c:d.tagName!==c.tagName||i(d)!==i(c)?d:(n(d,c),f(d,c),c):null:d}function i(d){return d.dataset?d.dataset.nanomorphComponentId:void 0}function f(d,c){for(var g,m,h,a,l=0,p=0;g=c.childNodes[p],m=d.childNodes[p-l],!(!g&&!m);p++)if(!m)c.removeChild(g),p--;else if(!g)c.appendChild(m),l++;else if(x(m,g))h=s(m,g),h!==g&&(c.replaceChild(h,g),l++);else{a=null;for(var b=p;b<c.childNodes.length;b++)if(x(c.childNodes[b],m)){a=c.childNodes[b];break}a?(h=s(m,a),h!==a&&l++,c.insertBefore(h,g)):!m.id&&!g.id?(h=s(m,g),h!==g&&(c.replaceChild(h,g),l++)):(c.insertBefore(m,g),l++)}}function x(d,c){return d.id?d.id===c.id:d.isSameNode?d.isSameNode(c):d.tagName!==c.tagName?!1:d.type===o?d.nodeValue===c.nodeValue:!1}return dr}var yo=bo();const at=Pe(yo);var hr,In;function Co(){if(In)return hr;In=1;var t="Expected a function",n="__lodash_hash_undefined__",o=9007199254740991,r="[object Function]",s="[object GeneratorFunction]",i="[object Symbol]",f=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/,d=/^\./,c=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,g=/[\\^$.*+?()[\]{}|]/g,m=/\\(\\)?/g,h=/^\[object .+?Constructor\]$/,a=/^(?:0|[1-9]\d*)$/,l=typeof me=="object"&&me&&me.Object===Object&&me,p=typeof self=="object"&&self&&self.Object===Object&&self,b=l||p||Function("return this")();function C(v,w){return v?.[w]}function T(v){var w=!1;if(v!=null&&typeof v.toString!="function")try{w=!!(v+"")}catch{}return w}var A=Array.prototype,P=Function.prototype,D=Object.prototype,$=b["__core-js_shared__"],E=function(){var v=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||"");return v?"Symbol(src)_1."+v:""}(),R=P.toString,X=D.hasOwnProperty,U=D.toString,O=RegExp("^"+R.call(X).replace(g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ne=b.Symbol,j=A.splice,J=Ye(b,"Map"),K=Ye(Object,"create"),W=ne?ne.prototype:void 0,S=W?W.toString:void 0;function k(v){var w=-1,q=v?v.length:0;for(this.clear();++w<q;){var Y=v[w];this.set(Y[0],Y[1])}}function G(){this.__data__=K?K(null):{}}function H(v){return this.has(v)&&delete this.__data__[v]}function I(v){var w=this.__data__;if(K){var q=w[v];return q===n?void 0:q}return X.call(w,v)?w[v]:void 0}function ie(v){var w=this.__data__;return K?w[v]!==void 0:X.call(w,v)}function oe(v,w){var q=this.__data__;return q[v]=K&&w===void 0?n:w,this}k.prototype.clear=G,k.prototype.delete=H,k.prototype.get=I,k.prototype.has=ie,k.prototype.set=oe;function re(v){var w=-1,q=v?v.length:0;for(this.clear();++w<q;){var Y=v[w];this.set(Y[0],Y[1])}}function ve(){this.__data__=[]}function F(v){var w=this.__data__,q=Ve(w,v);if(q<0)return!1;var Y=w.length-1;return q==Y?w.pop():j.call(w,q,1),!0}function ce(v){var w=this.__data__,q=Ve(w,v);return q<0?void 0:w[q][1]}function N(v){return Ve(this.__data__,v)>-1}function Le(v,w){var q=this.__data__,Y=Ve(q,v);return Y<0?q.push([v,w]):q[Y][1]=w,this}re.prototype.clear=ve,re.prototype.delete=F,re.prototype.get=ce,re.prototype.has=N,re.prototype.set=Le;function he(v){var w=-1,q=v?v.length:0;for(this.clear();++w<q;){var Y=v[w];this.set(Y[0],Y[1])}}function qt(){this.__data__={hash:new k,map:new(J||re),string:new k}}function $t(v){return qe(this,v).delete(v)}function It(v){return qe(this,v).get(v)}function B(v){return qe(this,v).has(v)}function Mt(v,w){return qe(this,v).set(v,w),this}he.prototype.clear=qt,he.prototype.delete=$t,he.prototype.get=It,he.prototype.has=B,he.prototype.set=Mt;function lt(v,w,q){var Y=v[w];(!(X.call(v,w)&&ht(Y,q))||q===void 0&&!(w in v))&&(v[w]=q)}function Ve(v,w){for(var q=v.length;q--;)if(ht(v[q][0],w))return q;return-1}function ye(v){if(!Fe(v)||Nt(v))return!1;var w=Gt(v)||T(v)?O:h;return w.test(jt(v))}function ft(v,w,q,Y){if(!Fe(v))return v;w=Dt(w,v)?[w]:Ut(w);for(var de=-1,be=w.length,je=be-1,Ie=v;Ie!=null&&++de<be;){var Je=Ft(w[de]),Ge=q;if(de!=je){var Be=Ie[Je];Ge=void 0,Ge===void 0&&(Ge=Fe(Be)?Be:dt(w[de+1])?[]:{})}lt(Ie,Je,Ge),Ie=Ie[Je]}return v}function ct(v){if(typeof v=="string")return v;if(Ae(v))return S?S.call(v):"";var w=v+"";return w=="0"&&1/v==-1/0?"-0":w}function Ut(v){return pt(v)?v:Vt(v)}function qe(v,w){var q=v.__data__;return Ht(w)?q[typeof w=="string"?"string":"hash"]:q.map}function Ye(v,w){var q=C(v,w);return ye(q)?q:void 0}function dt(v,w){return w=w??o,!!w&&(typeof v=="number"||a.test(v))&&v>-1&&v%1==0&&v<w}function Dt(v,w){if(pt(v))return!1;var q=typeof v;return q=="number"||q=="symbol"||q=="boolean"||v==null||Ae(v)?!0:x.test(v)||!f.test(v)||w!=null&&v in Object(w)}function Ht(v){var w=typeof v;return w=="string"||w=="number"||w=="symbol"||w=="boolean"?v!=="__proto__":v===null}function Nt(v){return!!E&&E in v}var Vt=$e(function(v){v=Xe(v);var w=[];return d.test(v)&&w.push(""),v.replace(c,function(q,Y,de,be){w.push(de?be.replace(m,"$1"):Y||q)}),w});function Ft(v){if(typeof v=="string"||Ae(v))return v;var w=v+"";return w=="0"&&1/v==-1/0?"-0":w}function jt(v){if(v!=null){try{return R.call(v)}catch{}try{return v+""}catch{}}return""}function $e(v,w){if(typeof v!="function"||w&&typeof w!="function")throw new TypeError(t);var q=function(){var Y=arguments,de=w?w.apply(this,Y):Y[0],be=q.cache;if(be.has(de))return be.get(de);var je=v.apply(this,Y);return q.cache=be.set(de,je),je};return q.cache=new($e.Cache||he),q}$e.Cache=he;function ht(v,w){return v===w||v!==v&&w!==w}var pt=Array.isArray;function Gt(v){var w=Fe(v)?U.call(v):"";return w==r||w==s}function Fe(v){var w=typeof v;return!!v&&(w=="object"||w=="function")}function Bt(v){return!!v&&typeof v=="object"}function Ae(v){return typeof v=="symbol"||Bt(v)&&U.call(v)==i}function Xe(v){return v==null?"":ct(v)}function gt(v,w,q){return v==null?v:ft(v,w,q)}return hr=gt,hr}var xo=Co();const wo=Pe(xo);var pr,Mn;function rn(){if(Mn)return pr;Mn=1,pr=t;function t(){}return t.mixin=function(n){var o=n.prototype||n;o.isWildEmitter=!0,o.on=function(r,s,i){this.callbacks=this.callbacks||{};var f=arguments.length===3,x=f?arguments[1]:void 0,d=f?arguments[2]:arguments[1];return d._groupName=x,(this.callbacks[r]=this.callbacks[r]||[]).push(d),this},o.once=function(r,s,i){var f=this,x=arguments.length===3,d=x?arguments[1]:void 0,c=x?arguments[2]:arguments[1];function g(){f.off(r,g),c.apply(this,arguments)}return this.on(r,d,g),this},o.releaseGroup=function(r){this.callbacks=this.callbacks||{};var s,i,f,x;for(s in this.callbacks)for(x=this.callbacks[s],i=0,f=x.length;i<f;i++)x[i]._groupName===r&&(x.splice(i,1),i--,f--);return this},o.off=function(r,s){this.callbacks=this.callbacks||{};var i=this.callbacks[r],f;return i?arguments.length===1?(delete this.callbacks[r],this):(f=i.indexOf(s),f!==-1&&(i.splice(f,1),i.length===0&&delete this.callbacks[r]),this):this},o.emit=function(r){this.callbacks=this.callbacks||{};var s=[].slice.call(arguments,1),i=this.callbacks[r],f=this.getWildcardCallbacks(r),x,d,c;if(i)for(c=i.slice(),x=0,d=c.length;x<d&&c[x];++x)c[x].apply(this,s);if(f)for(d=f.length,c=f.slice(),x=0,d=c.length;x<d&&c[x];++x)c[x].apply(this,[r].concat(s));return this},o.getWildcardCallbacks=function(r){this.callbacks=this.callbacks||{};var s,i,f=[];for(s in this.callbacks)i=s.split("*"),(s==="*"||i.length===2&&r.slice(0,i[0].length)===i[0])&&(f=f.concat(this.callbacks[s]));return f}},t.mixin(t),pr}var To=rn();const Vi=Pe(To);function Lt(t={}){const n=new Vi;return n.set(t),n}Vi.prototype.set=function(t,n,o={silent:!1,prefix:""}){if(typeof t=="object"&&!Array.isArray(t))return o=n||o,Object.entries(t).forEach(([s,i])=>{this.set(s,i,o)});if(typeof n=="object"&&n!==null&&!Array.isArray(n)){const s=o.prefix?`${o.prefix}.${t}`:t;Object.entries(n).forEach(([i,f])=>{this.set(`${s}.${i}`,f,o)})}const r=o.prefix?`${o.prefix}.${t}`:t;return wo(this,r,n),o.silent||this.emit(t,n),n};const Pt=Lt();function Eo({name:t}){const n=Un();return Pt.on("*",o=>at(n,Un())),Pt.set({name:t}),n}function Un(){return Z`
    <div class="content">
      <h1>Welcome to Start Light Express${Pt.name?` ${Pt.name}`:""}!</h1>
      <p>This is a lightweight Express.js starter template with client-side integration.</p>
      
      <h2>Features</h2>
      <ul>
        <li>Express server with MongoDB integration</li>
        <li>Authentication middleware</li>
        <li>Widget CRUD API at <code>/api/widgets</code></li>
        <li>Health monitoring at <code>/health</code></li>
        <li>Client-side routing with hash-based navigation</li>
        <li>Development server with auto-restart</li>
      </ul>

      <h2>API Endpoints</h2>
      <p>The server provides the following API endpoints:</p>
      <ul>
        <li><strong>GET /health</strong> - Health check and database connectivity</li>
        <li><strong>GET /api/widgets</strong> - List all widgets</li>
        <li><strong>POST /api/widgets</strong> - Create a new widget</li>
        <li><strong>GET /api/widgets/:id</strong> - Get widget by ID</li>
        <li><strong>PUT /api/widgets/:id</strong> - Update widget</li>
        <li><strong>DELETE /api/widgets/:id</strong> - Delete widget</li>
        <li><strong>GET /api/auth/authTest</strong> - Test authentication</li>
        <li><strong>GET /api/auth/errorTest</strong> - Test error handling</li>
      </ul>

      <h2>Navigation</h2>
      <p>Use the navigation above to explore:</p>
      <ul>
        <li><strong>Home</strong> - This welcome page</li>
        <li><strong>Widgets</strong> - Manage widgets (CRUD interface)</li>
        <li><strong>Settings</strong> - Application settings</li>
      </ul>
    </div>
  `}var Ke={},gr,Dn;function _o(){if(Dn)return gr;Dn=1;function t(n,o){return Object.prototype.hasOwnProperty.call(n,o)}return gr=function(n,o,r,s){o=o||"&",r=r||"=";var i={};if(typeof n!="string"||n.length===0)return i;var f=/\+/g;n=n.split(o);var x=1e3;s&&typeof s.maxKeys=="number"&&(x=s.maxKeys);var d=n.length;x>0&&d>x&&(d=x);for(var c=0;c<d;++c){var g=n[c].replace(f,"%20"),m=g.indexOf(r),h,a,l,p;m>=0?(h=g.substr(0,m),a=g.substr(m+1)):(h=g,a=""),l=decodeURIComponent(h),p=decodeURIComponent(a),t(i,l)?Array.isArray(i[l])?i[l].push(p):i[l]=[i[l],p]:i[l]=p}return i},gr}var mr,Hn;function So(){if(Hn)return mr;Hn=1;var t=function(n){switch(typeof n){case"string":return n;case"boolean":return n?"true":"false";case"number":return isFinite(n)?n:"";default:return""}};return mr=function(n,o,r,s){return o=o||"&",r=r||"=",n===null&&(n=void 0),typeof n=="object"?Object.keys(n).map(function(i){var f=encodeURIComponent(t(i))+r;return Array.isArray(n[i])?n[i].map(function(x){return f+encodeURIComponent(t(x))}).join(o):f+encodeURIComponent(t(n[i]))}).filter(Boolean).join(o):s?encodeURIComponent(t(s))+r+encodeURIComponent(t(n)):""},mr}var Nn;function Ao(){return Nn||(Nn=1,Ke.decode=Ke.parse=_o(),Ke.encode=Ke.stringify=So()),Ke}var Ro=Ao();const Fi=Pe(Ro);var vr={exports:{}},br,Vn;function _e(){if(Vn)return br;Vn=1,br=n;var t=Object.prototype.hasOwnProperty;function n(){for(var o={},r=0;r<arguments.length;r++){var s=arguments[r];for(var i in s)t.call(s,i)&&(o[i]=s[i])}return o}return br}var yr={exports:{}},Cr={exports:{}},Fn;function ko(){if(Fn)return Cr.exports;Fn=1;var t="(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}",n="(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+",o=Cr.exports=function(r){return r=r||{},r.exact?new RegExp("(?:^"+t+"$)|(?:^"+n+"$)"):new RegExp("(?:"+t+")|(?:"+n+")","g")};return o.v4=function(r){return r=r||{},r.exact?new RegExp("^"+t+"$"):new RegExp(t,"g")},o.v6=function(r){return r=r||{},r.exact?new RegExp("^"+n+"$"):new RegExp(n,"g")},Cr.exports}var xr,jn;function Oo(){if(jn)return xr;jn=1;var t=ko();return xr=function(n){n=n||{};var o="(?:(?:[a-z]+:)?//)",r="(?:\\S+(?::\\S*)?@)?",s=t.v4().source,i="(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)",f="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",x="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",d="(?::\\d{2,5})?",c='(?:[/?#][^\\s"]*)?',g=["(?:"+o+"|www\\.)"+r,"(?:localhost|"+s+"|"+i+f+x+")",d,c].join("");return n.exact?new RegExp("(?:^"+g+"$)","i"):new RegExp(g,"ig")},xr}var wr,Gn;function Po(){if(Gn)return wr;Gn=1;var t=Oo()({exact:!0});return wr=function(n){if(typeof n!="string")throw new TypeError("Expected a string");return t.test(n.trim())},wr}var Bn;function Lo(){if(Bn)return yr.exports;Bn=1;var t=Po(),n=rn(),o=typeof fetch<"u"?fetch:function(){throw new Error("fetch not available - requires Node.js 18+ or polyfill")},r=yr.exports=function(a){if(!a)throw new Error("opts are required argument");if(!t(a.server))throw new Error("opts.server must be url");return this instanceof r?(this.server=a.server,this.prefix=a.prefix||"/auth",this.email=a.email,this.authToken=a.authToken,this.googleSignInUrl=this.server+this.prefix+"/google",this):new r(a)};n.mixin(r),r.prototype.get=function(a,l,p){p||(p=l,l={});var b=this.authToken;return b?this.verifyToken(function(C){return C?p(C):f(a,h(b,l),p)}):f(a,l,p)},r.prototype.post=function(a,l,p,b){b||(b=p,p={});var C=this.authToken;return C?this.verifyToken(function(T){return T?b(T):s(a,l,h(C,p),b)}):s(a,l,p,b)},r.prototype.put=function(a,l,p,b){b||(b=p,p={});var C=this.authToken;return C?this.verifyToken(function(T){return T?b(T):i(a,l,h(C,p),b)}):s(a,l,p,b)},r.prototype.delete=function(a,l,p){p||(p=l,l={});var b=this.authToken;return b?this.verifyToken(function(C){return C?p(C):x(a,h(b,l),p)}):x(a,l,p)},r.prototype.signup=function(a,l){var p=this.getEndpoint("signup");s(p,a,{},l)},r.prototype.confirm=function(a,l){var p=this,b=this.getEndpoint("confirm");this.setEmail(a.email),s(b,a,{},function(C,T){if(C)return l(C);p.setAuthToken(T.data.authToken),l(null,T)})},r.prototype.login=function(a,l){var p=this,b=this.getEndpoint("login");this.setEmail(a.email),s(b,a,{},function(C,T){if(C)return l(C);p.setAuthToken(T.data.authToken),l(null,T)})},r.prototype.changePasswordRequest=function(a,l){var p=this.getEndpoint("change-password-request");s(p,a,{},l)},r.prototype.changePassword=function(a,l){var p=this,b=this.getEndpoint("change-password");this.setEmail(a.email),s(b,a,{},function(C,T){if(C)return l(C);p.setAuthToken(T.data.authToken),l(null,T)})},r.prototype.magicRequest=function(a,l){var p=this.getEndpoint("magic-request");s(p,a,{},l)},r.prototype.magicLogin=function(a,l){var p=this,b=this.getEndpoint("magic-login");s(b,a,{},function(C,T){if(C)return l(C);p.setAuthToken(T.data.authToken),l(null,T)})},r.prototype.logout=function(){this.setAuthToken(null),this.setEmail(null)},r.prototype.getEndpoint=function(a){return this.server+this.prefix+"/"+a},r.prototype.setAuthToken=function(a){this.authToken=a,this.emit("authToken",a)},r.prototype.setEmail=function(a){this.email=a,this.emit("email",a)},r.prototype.verifyToken=function(a){var l=this;return g(this.authToken,function(p){return p?(l.logout(),a(p)):a()})};function s(a,l,p,b){return d("post",a,l,p,b)}function i(a,l,p,b){return d("put",a,l,p,b)}function f(a,l,p){return c("get",a,l,p)}function x(a,l,p){return c("delete",a,l,p)}function d(a,l,p,b,C){var T=m(l),A={method:a.toUpperCase(),headers:Object.assign({"Content-Type":"application/json"},b.headers||{})};p&&(A.body=JSON.stringify(p)),o(T,A).then(function(P){return P.text().then(function(D){var $;try{$=D?JSON.parse(D):null}catch{$=D}if(P.status>=400){var E=new Error($&&$.error||P.statusText);return E.statusCode=P.status,E.body=$,C(E)}var R={statusCode:P.status,statusMessage:P.statusText,headers:{}};P.headers.forEach(function(X,U){R.headers[U]=X}),C(null,$,R)})}).catch(C)}function c(a,l,p,b){var C=m(l),T={method:a.toUpperCase(),headers:Object.assign({},p.headers||{})};o(C,T).then(function(A){return A.text().then(function(P){var D;try{D=P?JSON.parse(P):null}catch{D=P}if(A.status>=400){var $=new Error(D&&D.error||A.statusText);return $.statusCode=A.status,$.body=D,b($)}var E={statusCode:A.status,statusMessage:A.statusText,headers:{}};A.headers.forEach(function(R,X){E.headers[X]=R}),b(null,D,E)})}).catch(b)}function g(a,l){if(!a)return l(new Error("jwt must be provided"));try{var p=a.split(".");if(p.length!==3)return l(new Error("jwt malformed"));var b=JSON.parse(Buffer.from(p[1],"base64url").toString());return b.exp&&b.exp<Math.floor(Date.now()/1e3)?l(new Error("jwt expired")):l(null,b)}catch{return l(new Error("jwt malformed"))}}function m(a){var l=typeof window<"u"&&typeof window.location<"u";return l&&a.match(/^\//)?window.location.origin+a:a}function h(a,l){return a?Object.assign({},l,{headers:{authorization:"Bearer "+a}}):l}return yr.exports}var Rt={exports:{}},Tr={exports:{}};const qo={},$o=Object.freeze(Object.defineProperty({__proto__:null,default:qo},Symbol.toStringTag,{value:"Module"})),Io=Mi($o);var Er,zn;function ji(){if(zn)return Er;zn=1;var t=typeof me<"u"?me:typeof window<"u"?window:{},n=Io,o;return typeof document<"u"?o=document:(o=t["__GLOBAL_DOCUMENT_CACHE@4"],o||(o=t["__GLOBAL_DOCUMENT_CACHE@4"]=n)),Er=o,Er}var tt={exports:{}},_r,Zn;function Mo(){if(Zn)return _r;Zn=1;var t;return typeof window<"u"?t=window:typeof me<"u"?t=me:typeof self<"u"?t=self:t={},_r=t,_r}var Kn;function Uo(){if(Kn)return tt.exports;Kn=1;var t=ji(),n=Mo(),o=Ni(),r=Object.create(null),s="onloadid"+(new Date%9e6).toString(36),i="data-"+s,f=0;if(n&&n.MutationObserver){var x=new MutationObserver(function(l){if(!(Object.keys(r).length<1))for(var p=0;p<l.length;p++){if(l[p].attributeName===i){m(l[p],c,g);continue}a(l[p].removedNodes,g),a(l[p].addedNodes,c)}});t.body?d(x):t.addEventListener("DOMContentLoaded",function(l){d(x)})}function d(l){l.observe(t.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[i]})}tt.exports=function l(p,b,C,T){return o(t.body,"on-load: will not work prior to DOMContentLoaded"),b=b||function(){},C=C||function(){},p.setAttribute(i,"o"+f),r["o"+f]=[b,C,0,T||l.caller],f+=1,p},tt.exports.KEY_ATTR=i,tt.exports.KEY_ID=s;function c(l,p){r[l][0]&&r[l][2]===0&&(r[l][0](p),r[l][2]=1)}function g(l,p){r[l][1]&&r[l][2]===1&&(r[l][1](p),r[l][2]=0)}function m(l,p,b){var C=l.target.getAttribute(i);if(h(l.oldValue,C)){r[C]=r[l.oldValue];return}r[l.oldValue]&&b(l.oldValue,l.target),r[C]&&p(C,l.target)}function h(l,p){return!l||!p?!1:r[l][3]===r[p][3]}function a(l,p){for(var b=Object.keys(r),C=0;C<l.length;C++){if(l[C]&&l[C].getAttribute&&l[C].getAttribute(i)){var T=l[C].getAttribute(i);b.forEach(function(A){T===A&&p(A,l[C])})}l[C].childNodes.length>0&&a(l[C].childNodes,p)}}return tt.exports}var Wn;function Do(){return Wn||(Wn=1,function(t){var n=ji(),o=Di(),r=Uo(),s="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",f={autofocus:1,checked:1,defaultchecked:1,disabled:1,formnovalidate:1,indeterminate:1,readonly:1,required:1,selected:1,willvalidate:1},x="!--",d=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function c(g,m,h){var a;d.indexOf(g)!==-1&&(m.namespace=s);var l=!1;if(m.namespace&&(l=m.namespace,delete m.namespace),l)a=n.createElementNS(l,g);else{if(g===x)return n.createComment(m.comment);a=n.createElement(g)}if(m.onload||m.onunload){var p=m.onload||function(){},b=m.onunload||function(){};r(a,function(){p(a)},function(){b(a)},c.caller.caller.caller),delete m.onload,delete m.onunload}for(var C in m)if(m.hasOwnProperty(C)){var T=C.toLowerCase(),A=m[C];if(T==="classname"&&(T="class",C="class"),C==="htmlFor"&&(C="for"),f[T]){if(A==="true")A=T;else if(A==="false")continue}T.slice(0,2)==="on"?a[C]=A:l?C==="xlink:href"?a.setAttributeNS(i,C,A):/^xmlns($|:)/i.test(C)||a.setAttributeNS(null,C,A):a.setAttribute(C,A)}function P(D){if(Array.isArray(D))for(var $=0;$<D.length;$++){var E=D[$];if(Array.isArray(E)){P(E);continue}if((typeof E=="number"||typeof E=="boolean"||typeof E=="function"||E instanceof Date||E instanceof RegExp)&&(E=E.toString()),typeof E=="string"){if(a.lastChild&&a.lastChild.nodeName==="#text"){a.lastChild.nodeValue+=E;continue}E=n.createTextNode(E)}E&&E.nodeType&&a.appendChild(E)}}return P(h),a}t.exports=o(c,{comments:!0}),t.exports.default=t.exports,t.exports.createElement=c}(Tr)),Tr.exports}var Yn=11;function Ho(t,n){var o=n.attributes,r,s,i,f,x;if(!(n.nodeType===Yn||t.nodeType===Yn)){for(var d=o.length-1;d>=0;d--)r=o[d],s=r.name,i=r.namespaceURI,f=r.value,i?(s=r.localName||s,x=t.getAttributeNS(i,s),x!==f&&(r.prefix==="xmlns"&&(s=r.name),t.setAttributeNS(i,s,f))):(x=t.getAttribute(s),x!==f&&t.setAttribute(s,f));for(var c=t.attributes,g=c.length-1;g>=0;g--)r=c[g],s=r.name,i=r.namespaceURI,i?(s=r.localName||s,n.hasAttributeNS(i,s)||t.removeAttributeNS(i,s)):n.hasAttribute(s)||t.removeAttribute(s)}}var kt,No="http://www.w3.org/1999/xhtml",fe=typeof document>"u"?void 0:document,Vo=!!fe&&"content"in fe.createElement("template"),Fo=!!fe&&fe.createRange&&"createContextualFragment"in fe.createRange();function jo(t){var n=fe.createElement("template");return n.innerHTML=t,n.content.childNodes[0]}function Go(t){kt||(kt=fe.createRange(),kt.selectNode(fe.body));var n=kt.createContextualFragment(t);return n.childNodes[0]}function Bo(t){var n=fe.createElement("body");return n.innerHTML=t,n.childNodes[0]}function zo(t){return t=t.trim(),Vo?jo(t):Fo?Go(t):Bo(t)}function Ot(t,n){var o=t.nodeName,r=n.nodeName,s,i;return o===r?!0:(s=o.charCodeAt(0),i=r.charCodeAt(0),s<=90&&i>=97?o===r.toUpperCase():i<=90&&s>=97?r===o.toUpperCase():!1)}function Zo(t,n){return!n||n===No?fe.createElement(t):fe.createElementNS(n,t)}function Ko(t,n){for(var o=t.firstChild;o;){var r=o.nextSibling;n.appendChild(o),o=r}return n}function Sr(t,n,o){t[o]!==n[o]&&(t[o]=n[o],t[o]?t.setAttribute(o,""):t.removeAttribute(o))}var Xn={OPTION:function(t,n){var o=t.parentNode;if(o){var r=o.nodeName.toUpperCase();r==="OPTGROUP"&&(o=o.parentNode,r=o&&o.nodeName.toUpperCase()),r==="SELECT"&&!o.hasAttribute("multiple")&&(t.hasAttribute("selected")&&!n.selected&&(t.setAttribute("selected","selected"),t.removeAttribute("selected")),o.selectedIndex=-1)}Sr(t,n,"selected")},INPUT:function(t,n){Sr(t,n,"checked"),Sr(t,n,"disabled"),t.value!==n.value&&(t.value=n.value),n.hasAttribute("value")||t.removeAttribute("value")},TEXTAREA:function(t,n){var o=n.value;t.value!==o&&(t.value=o);var r=t.firstChild;if(r){var s=r.nodeValue;if(s==o||!o&&s==t.placeholder)return;r.nodeValue=o}},SELECT:function(t,n){if(!n.hasAttribute("multiple")){for(var o=-1,r=0,s=t.firstChild,i,f;s;)if(f=s.nodeName&&s.nodeName.toUpperCase(),f==="OPTGROUP")i=s,s=i.firstChild,s||(s=i.nextSibling,i=null);else{if(f==="OPTION"){if(s.hasAttribute("selected")){o=r;break}r++}s=s.nextSibling,!s&&i&&(s=i.nextSibling,i=null)}t.selectedIndex=o}}},rt=1,Jn=11,Qn=3,ei=8;function Oe(){}function Wo(t){if(t)return t.getAttribute&&t.getAttribute("id")||t.id}function Yo(t){return function(o,r,s){if(s||(s={}),typeof r=="string")if(o.nodeName==="#document"||o.nodeName==="HTML"||o.nodeName==="BODY"){var i=r;r=fe.createElement("html"),r.innerHTML=i}else r=zo(r);else r.nodeType===Jn&&(r=r.firstElementChild);var f=s.getNodeKey||Wo,x=s.onBeforeNodeAdded||Oe,d=s.onNodeAdded||Oe,c=s.onBeforeElUpdated||Oe,g=s.onElUpdated||Oe,m=s.onBeforeNodeDiscarded||Oe,h=s.onNodeDiscarded||Oe,a=s.onBeforeElChildrenUpdated||Oe,l=s.skipFromChildren||Oe,p=s.addChild||function(S,k){return S.appendChild(k)},b=s.childrenOnly===!0,C=Object.create(null),T=[];function A(S){T.push(S)}function P(S,k){if(S.nodeType===rt)for(var G=S.firstChild;G;){var H=void 0;k&&(H=f(G))?A(H):(h(G),G.firstChild&&P(G,k)),G=G.nextSibling}}function D(S,k,G){m(S)!==!1&&(k&&k.removeChild(S),h(S),P(S,G))}function $(S){if(S.nodeType===rt||S.nodeType===Jn)for(var k=S.firstChild;k;){var G=f(k);G&&(C[G]=k),$(k),k=k.nextSibling}}$(o);function E(S){d(S);for(var k=S.firstChild;k;){var G=k.nextSibling,H=f(k);if(H){var I=C[H];I&&Ot(k,I)?(k.parentNode.replaceChild(I,k),X(I,k)):E(k)}else E(k);k=G}}function R(S,k,G){for(;k;){var H=k.nextSibling;(G=f(k))?A(G):D(k,S,!0),k=H}}function X(S,k,G){var H=f(k);if(H&&delete C[H],!G){var I=c(S,k);if(I===!1||(I instanceof HTMLElement&&(S=I,$(S)),t(S,k),g(S),a(S,k)===!1))return}S.nodeName!=="TEXTAREA"?U(S,k):Xn.TEXTAREA(S,k)}function U(S,k){var G=l(S,k),H=k.firstChild,I=S.firstChild,ie,oe,re,ve,F;e:for(;H;){for(ve=H.nextSibling,ie=f(H);!G&&I;){if(re=I.nextSibling,H.isSameNode&&H.isSameNode(I)){H=ve,I=re;continue e}oe=f(I);var ce=I.nodeType,N=void 0;if(ce===H.nodeType&&(ce===rt?(ie?ie!==oe&&((F=C[ie])?re===F?N=!1:(S.insertBefore(F,I),oe?A(oe):D(I,S,!0),I=F,oe=f(I)):N=!1):oe&&(N=!1),N=N!==!1&&Ot(I,H),N&&X(I,H)):(ce===Qn||ce==ei)&&(N=!0,I.nodeValue!==H.nodeValue&&(I.nodeValue=H.nodeValue))),N){H=ve,I=re;continue e}oe?A(oe):D(I,S,!0),I=re}if(ie&&(F=C[ie])&&Ot(F,H))G||p(S,F),X(F,H);else{var Le=x(H);Le!==!1&&(Le&&(H=Le),H.actualize&&(H=H.actualize(S.ownerDocument||fe)),p(S,H),E(H))}H=ve,I=re}R(S,I,oe);var he=Xn[S.nodeName];he&&he(S,k)}var O=o,ne=O.nodeType,j=r.nodeType;if(!b){if(ne===rt)j===rt?Ot(o,r)||(h(o),O=Ko(o,Zo(r.nodeName,r.namespaceURI))):O=r;else if(ne===Qn||ne===ei){if(j===ne)return O.nodeValue!==r.nodeValue&&(O.nodeValue=r.nodeValue),O;O=r}}if(O===r)h(o);else{if(r.isSameNode&&r.isSameNode(O))return;if(X(O,r,b),T)for(var J=0,K=T.length;J<K;J++){var W=C[T[J]];W&&D(W,W.parentNode,!1)}}return!b&&O!==o&&o.parentNode&&(O.actualize&&(O=O.actualize(o.ownerDocument||fe)),o.parentNode.replaceChild(O,o)),O}}var Xo=Yo(Ho);const Jo=Object.freeze(Object.defineProperty({__proto__:null,default:Xo},Symbol.toStringTag,{value:"Module"})),Qo=Mi(Jo);var Ar,ti;function es(){return ti||(ti=1,Ar=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"]),Ar}var ri;function Ne(){if(ri)return Rt.exports;ri=1;var t=Do(),n=Qo,o=es();return n.default&&(n=n.default),Rt.exports=t,Rt.exports.update=function(r,s,i){return i||(i={}),i.events!==!1&&(i.onBeforeElUpdated||(i.onBeforeElUpdated=f)),n(r,s,i);function f(x,d){for(var c=i.events||o,g=0;g<c.length;g++){var m=c[g];d[m]?x[m]=d[m]:x[m]&&(x[m]=void 0)}var h=x.value,a=d.value;x.nodeName==="INPUT"&&x.type!=="file"||x.nodeName==="SELECT"?!a&&!d.hasAttribute("value")?d.value=x.value:a!==h&&(x.value=a):x.nodeName==="TEXTAREA"&&d.getAttribute("value")===null&&(x.value=d.value)}},Rt.exports}var nt={exports:{}};nt.exports;var ni;function ts(){return ni||(ni=1,function(t,n){var o=200,r="Expected a function",s="__lodash_hash_undefined__",i=1,f=2,x=1/0,d=9007199254740991,c=17976931348623157e292,g=NaN,m="[object Arguments]",h="[object Array]",a="[object Boolean]",l="[object Date]",p="[object Error]",b="[object Function]",C="[object GeneratorFunction]",T="[object Map]",A="[object Number]",P="[object Object]",D="[object Promise]",$="[object RegExp]",E="[object Set]",R="[object String]",X="[object Symbol]",U="[object WeakMap]",O="[object ArrayBuffer]",ne="[object DataView]",j="[object Float32Array]",J="[object Float64Array]",K="[object Int8Array]",W="[object Int16Array]",S="[object Int32Array]",k="[object Uint8Array]",G="[object Uint8ClampedArray]",H="[object Uint16Array]",I="[object Uint32Array]",ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oe=/^\w*$/,re=/^\./,ve=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,F=/[\\^$.*+?()[\]{}|]/g,ce=/^\s+|\s+$/g,N=/\\(\\)?/g,Le=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,qt=/^\[object .+?Constructor\]$/,$t=/^0o[0-7]+$/i,It=/^(?:0|[1-9]\d*)$/,B={};B[j]=B[J]=B[K]=B[W]=B[S]=B[k]=B[G]=B[H]=B[I]=!0,B[m]=B[h]=B[O]=B[a]=B[ne]=B[l]=B[p]=B[b]=B[T]=B[A]=B[P]=B[$]=B[E]=B[R]=B[U]=!1;var Mt=parseInt,lt=typeof me=="object"&&me&&me.Object===Object&&me,Ve=typeof self=="object"&&self&&self.Object===Object&&self,ye=lt||Ve||Function("return this")(),ft=n&&!n.nodeType&&n,ct=ft&&!0&&t&&!t.nodeType&&t,Ut=ct&&ct.exports===ft,qe=Ut&&lt.process,Ye=function(){try{return qe&&qe.binding("util")}catch{}}(),dt=Ye&&Ye.isTypedArray;function Dt(e,u){for(var y=-1,_=e?e.length:0;++y<_;)if(u(e[y],y,e))return!0;return!1}function Ht(e,u,y,_){for(var M=e.length,L=y+-1;++L<M;)if(u(e[L],L,e))return L;return-1}function Nt(e){return function(u){return u?.[e]}}function Vt(e,u){for(var y=-1,_=Array(e);++y<e;)_[y]=u(y);return _}function Ft(e){return function(u){return e(u)}}function jt(e,u){return e?.[u]}function $e(e){var u=!1;if(e!=null&&typeof e.toString!="function")try{u=!!(e+"")}catch{}return u}function ht(e){var u=-1,y=Array(e.size);return e.forEach(function(_,M){y[++u]=[M,_]}),y}function pt(e,u){return function(y){return e(u(y))}}function Gt(e){var u=-1,y=Array(e.size);return e.forEach(function(_){y[++u]=_}),y}var Fe=Array.prototype,Bt=Function.prototype,Ae=Object.prototype,Xe=ye["__core-js_shared__"],gt=function(){var e=/[^.]+$/.exec(Xe&&Xe.keys&&Xe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),v=Bt.toString,w=Ae.hasOwnProperty,q=Ae.toString,Y=RegExp("^"+v.call(w).replace(F,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),de=ye.Symbol,be=ye.Uint8Array,je=Ae.propertyIsEnumerable,Ie=Fe.splice,Je=pt(Object.keys,Object),Ge=Math.max,Be=ze(ye,"DataView"),Qe=ze(ye,"Map"),zt=ze(ye,"Promise"),Zt=ze(ye,"Set"),Kt=ze(ye,"WeakMap"),et=ze(Object,"create"),Xi=Ue(Be),Ji=Ue(Qe),Qi=Ue(zt),ea=Ue(Zt),ta=Ue(Kt),mt=de?de.prototype:void 0,Wt=mt?mt.valueOf:void 0,ln=mt?mt.toString:void 0;function Me(e){var u=-1,y=e?e.length:0;for(this.clear();++u<y;){var _=e[u];this.set(_[0],_[1])}}function ra(){this.__data__=et?et(null):{}}function na(e){return this.has(e)&&delete this.__data__[e]}function ia(e){var u=this.__data__;if(et){var y=u[e];return y===s?void 0:y}return w.call(u,e)?u[e]:void 0}function aa(e){var u=this.__data__;return et?u[e]!==void 0:w.call(u,e)}function oa(e,u){var y=this.__data__;return y[e]=et&&u===void 0?s:u,this}Me.prototype.clear=ra,Me.prototype.delete=na,Me.prototype.get=ia,Me.prototype.has=aa,Me.prototype.set=oa;function xe(e){var u=-1,y=e?e.length:0;for(this.clear();++u<y;){var _=e[u];this.set(_[0],_[1])}}function sa(){this.__data__=[]}function ua(e){var u=this.__data__,y=bt(u,e);if(y<0)return!1;var _=u.length-1;return y==_?u.pop():Ie.call(u,y,1),!0}function la(e){var u=this.__data__,y=bt(u,e);return y<0?void 0:u[y][1]}function fa(e){return bt(this.__data__,e)>-1}function ca(e,u){var y=this.__data__,_=bt(y,e);return _<0?y.push([e,u]):y[_][1]=u,this}xe.prototype.clear=sa,xe.prototype.delete=ua,xe.prototype.get=la,xe.prototype.has=fa,xe.prototype.set=ca;function we(e){var u=-1,y=e?e.length:0;for(this.clear();++u<y;){var _=e[u];this.set(_[0],_[1])}}function da(){this.__data__={hash:new Me,map:new(Qe||xe),string:new Me}}function ha(e){return yt(this,e).delete(e)}function pa(e){return yt(this,e).get(e)}function ga(e){return yt(this,e).has(e)}function ma(e,u){return yt(this,e).set(e,u),this}we.prototype.clear=da,we.prototype.delete=ha,we.prototype.get=pa,we.prototype.has=ga,we.prototype.set=ma;function vt(e){var u=-1,y=e?e.length:0;for(this.__data__=new we;++u<y;)this.add(e[u])}function va(e){return this.__data__.set(e,s),this}function ba(e){return this.__data__.has(e)}vt.prototype.add=vt.prototype.push=va,vt.prototype.has=ba;function Te(e){this.__data__=new xe(e)}function ya(){this.__data__=new xe}function Ca(e){return this.__data__.delete(e)}function xa(e){return this.__data__.get(e)}function wa(e){return this.__data__.has(e)}function Ta(e,u){var y=this.__data__;if(y instanceof xe){var _=y.__data__;if(!Qe||_.length<o-1)return _.push([e,u]),this;y=this.__data__=new we(_)}return y.set(e,u),this}Te.prototype.clear=ya,Te.prototype.delete=Ca,Te.prototype.get=xa,Te.prototype.has=wa,Te.prototype.set=Ta;function Ea(e,u){var y=De(e)||bn(e)?Vt(e.length,String):[],_=y.length,M=!!_;for(var L in e)w.call(e,L)&&!(M&&(L=="length"||pn(L,_)))&&y.push(L);return y}function bt(e,u){for(var y=e.length;y--;)if(vn(e[y][0],u))return y;return-1}function fn(e,u){u=Ct(u,e)?[u]:dn(u);for(var y=0,_=u.length;e!=null&&y<_;)e=e[xt(u[y++])];return y&&y==_?e:void 0}function _a(e){return q.call(e)}function Sa(e,u){return e!=null&&u in Object(e)}function Yt(e,u,y,_,M){return e===u?!0:e==null||u==null||!Ze(e)&&!wt(u)?e!==e&&u!==u:Aa(e,u,Yt,y,_,M)}function Aa(e,u,y,_,M,L){var V=De(e),Q=De(u),te=h,ae=h;V||(te=Re(e),te=te==m?P:te),Q||(ae=Re(u),ae=ae==m?P:ae);var ue=te==P&&!$e(e),le=ae==P&&!$e(u),se=te==ae;if(se&&!ue)return L||(L=new Te),V||Ka(e)?hn(e,u,y,_,M,L):Ua(e,u,te,y,_,M,L);if(!(M&f)){var pe=ue&&w.call(e,"__wrapped__"),ge=le&&w.call(u,"__wrapped__");if(pe||ge){var ke=pe?e.value():e,Ee=ge?u.value():u;return L||(L=new Te),y(ke,Ee,_,M,L)}}return se?(L||(L=new Te),Da(e,u,y,_,M,L)):!1}function Ra(e,u,y,_){var M=y.length,L=M;if(e==null)return!L;for(e=Object(e);M--;){var V=y[M];if(V[2]?V[1]!==e[V[0]]:!(V[0]in e))return!1}for(;++M<L;){V=y[M];var Q=V[0],te=e[Q],ae=V[1];if(V[2]){if(te===void 0&&!(Q in e))return!1}else{var ue=new Te,le;if(!(le===void 0?Yt(ae,te,_,i|f,ue):le))return!1}}return!0}function ka(e){if(!Ze(e)||Fa(e))return!1;var u=yn(e)||$e(e)?Y:qt;return u.test(Ue(e))}function Oa(e){return wt(e)&&Qt(e.length)&&!!B[q.call(e)]}function cn(e){return typeof e=="function"?e:e==null?to:typeof e=="object"?De(e)?qa(e[0],e[1]):La(e):ro(e)}function Pa(e){if(!ja(e))return Je(e);var u=[];for(var y in Object(e))w.call(e,y)&&y!="constructor"&&u.push(y);return u}function La(e){var u=Ha(e);return u.length==1&&u[0][2]?mn(u[0][0],u[0][1]):function(y){return y===e||Ra(y,e,u)}}function qa(e,u){return Ct(e)&&gn(u)?mn(xt(e),u):function(y){var _=Qa(y,e);return _===void 0&&_===u?eo(y,e):Yt(u,_,void 0,i|f)}}function $a(e){return function(u){return fn(u,e)}}function Ia(e){if(typeof e=="string")return e;if(Tt(e))return ln?ln.call(e):"";var u=e+"";return u=="0"&&1/e==-x?"-0":u}function dn(e){return De(e)?e:Ga(e)}function Ma(e){return function(u,y,_){var M=Object(u);if(!Jt(u)){var L=cn(y);u=Et(u),y=function(Q){return L(M[Q],Q,M)}}var V=e(u,y,_);return V>-1?M[L?u[V]:V]:void 0}}function hn(e,u,y,_,M,L){var V=M&f,Q=e.length,te=u.length;if(Q!=te&&!(V&&te>Q))return!1;var ae=L.get(e);if(ae&&L.get(u))return ae==u;var ue=-1,le=!0,se=M&i?new vt:void 0;for(L.set(e,u),L.set(u,e);++ue<Q;){var pe=e[ue],ge=u[ue];if(_)var ke=V?_(ge,pe,ue,u,e,L):_(pe,ge,ue,e,u,L);if(ke!==void 0){if(ke)continue;le=!1;break}if(se){if(!Dt(u,function(Ee,He){if(!se.has(He)&&(pe===Ee||y(pe,Ee,_,M,L)))return se.add(He)})){le=!1;break}}else if(!(pe===ge||y(pe,ge,_,M,L))){le=!1;break}}return L.delete(e),L.delete(u),le}function Ua(e,u,y,_,M,L,V){switch(y){case ne:if(e.byteLength!=u.byteLength||e.byteOffset!=u.byteOffset)return!1;e=e.buffer,u=u.buffer;case O:return!(e.byteLength!=u.byteLength||!_(new be(e),new be(u)));case a:case l:case A:return vn(+e,+u);case p:return e.name==u.name&&e.message==u.message;case $:case R:return e==u+"";case T:var Q=ht;case E:var te=L&f;if(Q||(Q=Gt),e.size!=u.size&&!te)return!1;var ae=V.get(e);if(ae)return ae==u;L|=i,V.set(e,u);var ue=hn(Q(e),Q(u),_,M,L,V);return V.delete(e),ue;case X:if(Wt)return Wt.call(e)==Wt.call(u)}return!1}function Da(e,u,y,_,M,L){var V=M&f,Q=Et(e),te=Q.length,ae=Et(u),ue=ae.length;if(te!=ue&&!V)return!1;for(var le=te;le--;){var se=Q[le];if(!(V?se in u:w.call(u,se)))return!1}var pe=L.get(e);if(pe&&L.get(u))return pe==u;var ge=!0;L.set(e,u),L.set(u,e);for(var ke=V;++le<te;){se=Q[le];var Ee=e[se],He=u[se];if(_)var Cn=V?_(He,Ee,se,u,e,L):_(Ee,He,se,e,u,L);if(!(Cn===void 0?Ee===He||y(Ee,He,_,M,L):Cn)){ge=!1;break}ke||(ke=se=="constructor")}if(ge&&!ke){var _t=e.constructor,St=u.constructor;_t!=St&&"constructor"in e&&"constructor"in u&&!(typeof _t=="function"&&_t instanceof _t&&typeof St=="function"&&St instanceof St)&&(ge=!1)}return L.delete(e),L.delete(u),ge}function yt(e,u){var y=e.__data__;return Va(u)?y[typeof u=="string"?"string":"hash"]:y.map}function Ha(e){for(var u=Et(e),y=u.length;y--;){var _=u[y],M=e[_];u[y]=[_,M,gn(M)]}return u}function ze(e,u){var y=jt(e,u);return ka(y)?y:void 0}var Re=_a;(Be&&Re(new Be(new ArrayBuffer(1)))!=ne||Qe&&Re(new Qe)!=T||zt&&Re(zt.resolve())!=D||Zt&&Re(new Zt)!=E||Kt&&Re(new Kt)!=U)&&(Re=function(e){var u=q.call(e),y=u==P?e.constructor:void 0,_=y?Ue(y):void 0;if(_)switch(_){case Xi:return ne;case Ji:return T;case Qi:return D;case ea:return E;case ta:return U}return u});function Na(e,u,y){u=Ct(u,e)?[u]:dn(u);for(var _,M=-1,V=u.length;++M<V;){var L=xt(u[M]);if(!(_=e!=null&&y(e,L)))break;e=e[L]}if(_)return _;var V=e?e.length:0;return!!V&&Qt(V)&&pn(L,V)&&(De(e)||bn(e))}function pn(e,u){return u=u??d,!!u&&(typeof e=="number"||It.test(e))&&e>-1&&e%1==0&&e<u}function Ct(e,u){if(De(e))return!1;var y=typeof e;return y=="number"||y=="symbol"||y=="boolean"||e==null||Tt(e)?!0:oe.test(e)||!ie.test(e)||u!=null&&e in Object(u)}function Va(e){var u=typeof e;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?e!=="__proto__":e===null}function Fa(e){return!!gt&&gt in e}function ja(e){var u=e&&e.constructor,y=typeof u=="function"&&u.prototype||Ae;return e===y}function gn(e){return e===e&&!Ze(e)}function mn(e,u){return function(y){return y==null?!1:y[e]===u&&(u!==void 0||e in Object(y))}}var Ga=Xt(function(e){e=Ja(e);var u=[];return re.test(e)&&u.push(""),e.replace(ve,function(y,_,M,L){u.push(M?L.replace(N,"$1"):_||y)}),u});function xt(e){if(typeof e=="string"||Tt(e))return e;var u=e+"";return u=="0"&&1/e==-x?"-0":u}function Ue(e){if(e!=null){try{return v.call(e)}catch{}try{return e+""}catch{}}return""}function Ba(e,u,y){var _=e?e.length:0;if(!_)return-1;var M=y==null?0:Ya(y);return M<0&&(M=Ge(_+M,0)),Ht(e,cn(u),M)}var za=Ma(Ba);function Xt(e,u){if(typeof e!="function"||u&&typeof u!="function")throw new TypeError(r);var y=function(){var _=arguments,M=u?u.apply(this,_):_[0],L=y.cache;if(L.has(M))return L.get(M);var V=e.apply(this,_);return y.cache=L.set(M,V),V};return y.cache=new(Xt.Cache||we),y}Xt.Cache=we;function vn(e,u){return e===u||e!==e&&u!==u}function bn(e){return Za(e)&&w.call(e,"callee")&&(!je.call(e,"callee")||q.call(e)==m)}var De=Array.isArray;function Jt(e){return e!=null&&Qt(e.length)&&!yn(e)}function Za(e){return wt(e)&&Jt(e)}function yn(e){var u=Ze(e)?q.call(e):"";return u==b||u==C}function Qt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=d}function Ze(e){var u=typeof e;return!!e&&(u=="object"||u=="function")}function wt(e){return!!e&&typeof e=="object"}function Tt(e){return typeof e=="symbol"||wt(e)&&q.call(e)==X}var Ka=dt?Ft(dt):Oa;function Wa(e){if(!e)return e===0?e:0;if(e=Xa(e),e===x||e===-x){var u=e<0?-1:1;return u*c}return e===e?e:0}function Ya(e){var u=Wa(e),y=u%1;return u===u?y?u-y:u:0}function Xa(e){if(typeof e=="number")return e;if(Tt(e))return g;if(Ze(e)){var u=typeof e.valueOf=="function"?e.valueOf():e;e=Ze(u)?u+"":u}if(typeof e!="string")return e===0?e:+e;e=e.replace(ce,"");var y=he.test(e);return y||$t.test(e)?Mt(e.slice(2),y?2:8):Le.test(e)?g:+e}function Ja(e){return e==null?"":Ia(e)}function Qa(e,u,y){var _=e==null?void 0:fn(e,u);return _===void 0?y:_}function eo(e,u){return e!=null&&Na(e,u,Sa)}function Et(e){return Jt(e)?Ea(e):Pa(e)}function to(e){return e}function ro(e){return Ct(e)?Nt(xt(e)):$a(e)}t.exports=za}(nt,nt.exports)),nt.exports}var Rr={exports:{}},We={exports:{}},kr,ii;function nn(){if(ii)return kr;ii=1,kr={makeComposition:t,isComposition:n,ignoreComposition:o};function t(s,i,f){var x=s.join(" ");return Object.create(r.prototype,{classNames:{value:Object.freeze(s),configurable:!1,writable:!1,enumerable:!0},unscoped:{value:Object.freeze(i),configurable:!1,writable:!1,enumerable:!0},className:{value:x,configurable:!1,writable:!1,enumerable:!0},selector:{value:s.map(function(d){return f?d:"."+d}).join(", "),configurable:!1,writable:!1,enumerable:!0},toString:{value:function(){return x},configurable:!1,writeable:!1,enumerable:!1}})}function n(s){return s instanceof r}function o(s){return s.reduce(function(i,f){return n(f)&&f.classNames.forEach(function(x,d){i[x]=f.unscoped[d]}),i},{})}function r(){}return kr}var Or,ai;function rs(){if(ai)return Or;ai=1,nn().makeComposition;var t=/\.([^\s]+)(\s+)(extends\s+)(\.[^{]+)/g;Or=function(s){for(var i,f=[];i=t.exec(s);)f.unshift(i);function x(d,c){var g=o(c[1]),m=c[3],h=c[4],a=c.index+c[1].length+c[2].length,l=m.length+h.length;d.css=d.css.slice(0,a)+" "+d.css.slice(a+l+1);var p=n(h);return p.forEach(function(b){d.compositions[g]||(d.compositions[g]={}),d.compositions[b]||(d.compositions[b]={}),d.compositions[g][b]=d.compositions[b]}),d}return f.reduce(x,{css:s,compositions:{}})};function n(r){return r.split(",").map(o)}function o(r){var s=r.trim();return s[0]==="."?s.substr(1):s}return Or}var Pr,oi;function ns(){if(oi)return Pr;oi=1;var t=nn().makeComposition;Pr=function(r,s,i){var f=Object.keys(s).reduce(function(d,c){var g=s[c];return d[g]=t([c],[g],!0),d},{}),x=Object.keys(r).reduce(function(d,c){var g=r[c],m=i[c],h=m?n(m):[],a=[c].concat(h),l=a.map(function(p){return r[p]?r[p]:p});return d[g]=t(a,l),d},f);return x};function n(o){var r={},s=[];function i(f){return Object.keys(f).forEach(function(x){r[x]||(r[x]=!0,s.push(x),i(f[x]))})}return i(o),s}return Pr}var Lr,si;function is(){if(si)return Lr;si=1;var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return Lr=function(o){if(o===0)return"0";for(var r="";o>0;)r=t[o%62]+r,o=Math.floor(o/62);return r},Lr}var qr,ui;function as(){return ui||(ui=1,qr=function(n){for(var o=5381,r=n.length;r;)o=o*33^n.charCodeAt(--r);return o>>>0}),qr}var $r,li;function os(){if(li)return $r;li=1;var t=is(),n=as();return $r=function(r){var s=t(n(r));return function(f){return f+"_"+s}},$r}var Ir,fi;function an(){if(fi)return Ir;fi=1;var t=/(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/.source,n=/(@\S*keyframes\s*)([^{\s]*)/.source,o=/(?!(?:[^*/]|\*[^/]|\/[^*])*\*+\/)/.source,r=new RegExp(t+o,"g"),s=new RegExp(n+o,"g");return Ir={classRegex:r,keyframesRegex:s,ignoreComments:o},Ir}var Mr,ci;function ss(){if(ci)return Mr;ci=1;var t=an().ignoreComments;Mr=n;function n(o){var r=Object.keys(o.keyframes).reduce(function(d,c){return d[o.keyframes[c]]=c,d},{}),s=Object.keys(r);if(s.length){var i="((?:animation|animation-name)\\s*:[^};]*)("+s.join("|")+")([;\\s])"+t,f=new RegExp(i,"g"),x=o.css.replace(f,function(d,c,g,m){return c+r[g]+m});return{css:x,keyframes:o.keyframes,classes:o.classes}}return o}return Mr}var Ur,di;function us(){if(di)return Ur;di=1;var t=os(),n=ss(),o=an(),r=o.classRegex,s=o.keyframesRegex;Ur=i;function i(f,x){var d=t(f),c={classes:r,keyframes:s};function g(h,a){var l=c[a];function p(b,C,T){var A=x[T]?T:d(T);return h[a][A]=T,C+A}return{css:h.css.replace(l,p),keyframes:h.keyframes,classes:h.classes}}var m=Object.keys(c).reduce(g,{css:f,keyframes:{},classes:{}});return n(m)}return Ur}var Dr,hi;function Gi(){return hi||(hi=1,Dr=" css "),Dr}var Hr,pi;function ls(){if(pi)return Hr;pi=1;var t=an(),n=t.classRegex,o=t.keyframesRegex;Hr=r;function r(i){return{css:i,keyframes:s(i,o),classes:s(i,n)}}function s(i,f){for(var x={},d;(d=f.exec(i))!==null;){var c=d[2];x[c]=c}return x}return Hr}var Nr,gi;function fs(){if(gi)return Nr;gi=1;var t=rs(),n=nn(),o=n.isComposition,r=n.ignoreComposition,s=ns(),i=us(),f=Gi(),x=ls();Nr=function(h){h=typeof h>"u"?{}:h;var a=typeof h.noscope>"u"?!1:h.noscope;return function(p,C){for(var C=Array(arguments.length-1),T=1;T<arguments.length;T++)C[T-1]=arguments[T];var A=c(p,C.map(d)),P=r(C),D=a?x(A):i(A,P),$=t(D.css),E=g(D.classes,P),R=g(D.keyframes,P),X=$.compositions,U=s(E,R,X);return Object.defineProperty(U,f,{enumerable:!1,configurable:!1,writeable:!1,value:$.css})}};function d(m){return o(m)?m.selector:m}function c(m,h){return m.map(function(a,l){return l!==h.length?a+h[l]:a}).join("")}function g(m,h){return Object.keys(m).reduce(function(a,l){return h[l]||(a[l]=m[l]),a},{})}return Nr}var Vr,mi;function cs(){return mi||(mi=1,Vr=fs()),Vr}var Fr,vi;function ds(){if(vi)return Fr;vi=1;var t=Gi();return Fr=function(o){return o[t]},Fr}var jr,bi;function hs(){return bi||(bi=1,jr=ds()),jr}var yi;function ps(){if(yi)return We.exports;yi=1;var t=cs();return We.exports=t(),We.exports.csjs=t,We.exports.noScope=t({noscope:!0}),We.exports.getCss=hs(),We.exports}var Ci;function Bi(){if(Ci)return Rr.exports;Ci=1;var t=ps(),n=Ui(),o=Rr.exports=t`
  .disabled {
    opacity: 0.5;
  }

  .box {
    background: #fff;
    font-family: sans-serif;
    font-size: 16px;
    padding: 15px 50px 30px;
    border-radius: 2px;
    width: 400px;
    margin: 100px auto 50px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
  }

  .input {
    width: 100%;
    height: 36px;
    outline: none;
    font-size: 16px;
    font-weight: 100;
    line-height: 24px;
    border-width: 0px 0px 1px;
    border-bottom-style: solid;
    border-bottom-color: #eee;
    margin-bottom: 16px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .error {
    margin: 20px;
    color: #f00;
  }

  .submit {
    color: #fff;
    background-color: #a551e1;
    width: 100%;
    padding: 0px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border: 0px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.239216) 0px 1px 4px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-appearance: button;
  }

  .links {
    margin-top: 20px;
    color: #aaa;
  }

  .link {
    color: #aaa;
    font-weight: 100;
  }

  .googleSignIn {
  }
`;return n(t.getCss(o)),Rr.exports}var Gr,xi;function on(){if(xi)return Gr;xi=1;var t=Bi();return Gr=Object.keys(t).reduce(function(n,o){return n[o]="",n},{}),Gr}var Br,wi;function gs(){if(wi)return Br;wi=1;var t=Ne(),n=_e();return Br=function(o,r){var s={styles:on()};o=n(s,o);var i=f(o);return i;function f(d){var c=d.styles;return t`<div>
      <input
        class='${c.input} ${d.disabled?c.disabled:""}'
        name=${d.name||""}
        placeholder=${d.placeholder||""}
        value=${d.value||""}
        disabled=${d.disabled}
        type=${d.type||"text"}
        onchange=${x} />
    </div>`}function x(d){o=n(o,{value:d.target.value}),t.update(i,f(o)),r({name:d.target.name,value:d.target.value})}},Br}var zr,Ti;function ms(){if(Ti)return zr;Ti=1;var t=Ne(),n=ts(),o=_e(),r=gs();return zr=function(i,f){var x={fields:[],error:"",disabled:!1,submitText:"Submit",styles:on()};i=o(x,i);var d=c(i);return d;function c(h){var a=h.styles;return t`<form onsubmit=${m}>
      ${h.fields.map(function(l,p){return r(o(l,{disabled:h.disabled,styles:a}),g)})}

      ${h.error?t`<div class=${a.error}>${h.error}</div>
      `:""}

      <div>
        <button
          class='${a.submit} ${h.disabled?a.disabled:""}'
          type='submit'
          disabled=${h.disabled} >
          ${h.submitText}
        </button>
      </div>
    </form>`}function g(h){var a=i.fields,l=n(a,function(p){return p.name===h.name});l.value=h.value,i=o(i,{fields:a}),t.update(d,c(i))}function m(h){h.preventDefault();var a=i.fields.reduce(function(l,p){return l[p.name]=p.value,l},{});f(a,i.fields)}},zr}var Zr,Ei;function vs(){if(Ei)return Zr;Ei=1;const t=Hi();return Zr=function({url:o}){return t`
    <div>
      <div
        style="display: flex; justify-content: center; align-items: center; margin: 10px 0;"
      >
        <div
          style="width: 100%; border-top: 1px solid #ddd; height: 1px;"
        ></div>
        <div style="color: #aaa; padding: 0 10px;">or</div>
        <div
          style="width: 100%; border-bottom: 1px solid #ddd; height: 1px;"
        ></div>
      </div>
      <a href=${o}>
        <svg
          width="175"
          height="40"
          viewBox="0 0 175 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="174" height="39" rx="3.5" fill="white" />
          <g clip-path="url(#clip0_710_6235)">
            <path
              d="M31.6 20.2273C31.6 19.5182 31.5364 18.8364 31.4182 18.1818H22V22.05H27.3818C27.15 23.3 26.4455 24.3591 25.3864 25.0682V27.5773H28.6182C30.5091 25.8364 31.6 23.2727 31.6 20.2273Z"
              fill="#4285F4"
            />
            <path
              d="M22 30C24.7 30 26.9636 29.1045 28.6181 27.5773L25.3863 25.0682C24.4909 25.6682 23.3454 26.0227 22 26.0227C19.3954 26.0227 17.1909 24.2636 16.4045 21.9H13.0636V24.4909C14.7091 27.7591 18.0909 30 22 30Z"
              fill="#34A853"
            />
            <path
              d="M16.4045 21.9C16.2045 21.3 16.0909 20.6591 16.0909 20C16.0909 19.3409 16.2045 18.7 16.4045 18.1V15.5091H13.0636C12.3864 16.8591 12 18.3864 12 20C12 21.6136 12.3864 23.1409 13.0636 24.4909L16.4045 21.9Z"
              fill="#FBBC04"
            />
            <path
              d="M22 13.9773C23.4681 13.9773 24.7863 14.4818 25.8227 15.4727L28.6909 12.6045C26.9591 10.9909 24.6954 10 22 10C18.0909 10 14.7091 12.2409 13.0636 15.5091L16.4045 18.1C17.1909 15.7364 19.3954 13.9773 22 13.9773Z"
              fill="#E94235"
            />
          </g>
          <path
            d="M48.248 22.4365C48.248 22.2314 48.2161 22.0492 48.1523 21.8896C48.0931 21.7301 47.986 21.5843 47.8311 21.4521C47.6761 21.32 47.4574 21.1924 47.1748 21.0693C46.8968 20.9417 46.5413 20.8118 46.1084 20.6797C45.6344 20.5339 45.1969 20.3721 44.7959 20.1943C44.3994 20.012 44.0531 19.8024 43.7568 19.5654C43.4606 19.3239 43.2305 19.0482 43.0664 18.7383C42.9023 18.4238 42.8203 18.0615 42.8203 17.6514C42.8203 17.2458 42.9046 16.8766 43.0732 16.5439C43.2464 16.2113 43.4902 15.9242 43.8047 15.6826C44.1237 15.4365 44.4997 15.2474 44.9326 15.1152C45.3656 14.9785 45.8441 14.9102 46.3682 14.9102C47.1064 14.9102 47.7422 15.0469 48.2754 15.3203C48.8132 15.5938 49.2256 15.9606 49.5127 16.4209C49.8044 16.8812 49.9502 17.3893 49.9502 17.9453H48.248C48.248 17.6172 48.1774 17.3278 48.0361 17.0771C47.8994 16.8219 47.6898 16.6214 47.4072 16.4756C47.1292 16.3298 46.776 16.2568 46.3477 16.2568C45.9421 16.2568 45.6048 16.3184 45.3359 16.4414C45.0671 16.5645 44.8665 16.7308 44.7344 16.9404C44.6022 17.1501 44.5361 17.387 44.5361 17.6514C44.5361 17.8382 44.5794 18.0091 44.666 18.1641C44.7526 18.3145 44.8848 18.4557 45.0625 18.5879C45.2402 18.7155 45.4635 18.8363 45.7324 18.9502C46.0013 19.0641 46.318 19.1735 46.6826 19.2783C47.234 19.4424 47.7148 19.6247 48.125 19.8252C48.5352 20.0212 48.877 20.2445 49.1504 20.4951C49.4238 20.7458 49.6289 21.0306 49.7656 21.3496C49.9023 21.6641 49.9707 22.0218 49.9707 22.4229C49.9707 22.8421 49.8864 23.2204 49.7178 23.5576C49.5492 23.8903 49.3076 24.1751 48.9932 24.4121C48.6833 24.6445 48.3096 24.8245 47.8721 24.9521C47.4391 25.0752 46.9561 25.1367 46.4229 25.1367C45.9443 25.1367 45.4727 25.0729 45.0078 24.9453C44.5475 24.8177 44.1283 24.624 43.75 24.3643C43.3717 24.0999 43.071 23.7718 42.8477 23.3799C42.6243 22.9834 42.5127 22.5208 42.5127 21.9922H44.2285C44.2285 22.3158 44.2832 22.5915 44.3926 22.8193C44.5065 23.0472 44.6637 23.234 44.8643 23.3799C45.0648 23.5212 45.2972 23.626 45.5615 23.6943C45.8304 23.7627 46.1175 23.7969 46.4229 23.7969C46.8239 23.7969 47.1589 23.7399 47.4277 23.626C47.7012 23.512 47.9062 23.3525 48.043 23.1475C48.1797 22.9424 48.248 22.7054 48.248 22.4365ZM53.0879 17.6035V25H51.4336V17.6035H53.0879ZM51.3242 15.6621C51.3242 15.4115 51.4062 15.2041 51.5703 15.04C51.7389 14.8714 51.9714 14.7871 52.2676 14.7871C52.5592 14.7871 52.7894 14.8714 52.958 15.04C53.1266 15.2041 53.2109 15.4115 53.2109 15.6621C53.2109 15.9082 53.1266 16.1133 52.958 16.2773C52.7894 16.4414 52.5592 16.5234 52.2676 16.5234C51.9714 16.5234 51.7389 16.4414 51.5703 16.2773C51.4062 16.1133 51.3242 15.9082 51.3242 15.6621ZM59.6299 17.6035H61.127V24.7949C61.127 25.4603 60.9857 26.0254 60.7031 26.4902C60.4206 26.9551 60.0264 27.3083 59.5205 27.5498C59.0146 27.7959 58.429 27.9189 57.7637 27.9189C57.4811 27.9189 57.1667 27.8779 56.8203 27.7959C56.4785 27.7139 56.1458 27.5817 55.8223 27.3994C55.5033 27.2217 55.2367 26.987 55.0225 26.6953L55.7949 25.7246C56.0592 26.0391 56.3509 26.2692 56.6699 26.415C56.9889 26.5609 57.3239 26.6338 57.6748 26.6338C58.0531 26.6338 58.3743 26.5632 58.6387 26.4219C58.9076 26.2852 59.1149 26.0824 59.2607 25.8135C59.4066 25.5446 59.4795 25.2165 59.4795 24.8291V19.2783L59.6299 17.6035ZM54.6055 21.3838V21.2402C54.6055 20.6797 54.6738 20.1693 54.8105 19.709C54.9473 19.2441 55.1432 18.8454 55.3984 18.5127C55.6536 18.1755 55.9635 17.918 56.3281 17.7402C56.6927 17.5579 57.1051 17.4668 57.5654 17.4668C58.0439 17.4668 58.4518 17.5534 58.7891 17.7266C59.1309 17.8997 59.4157 18.1481 59.6436 18.4717C59.8714 18.7907 60.0492 19.1735 60.1768 19.6201C60.3089 20.0622 60.4069 20.5544 60.4707 21.0967V21.5547C60.4115 22.0833 60.3112 22.5664 60.1699 23.0039C60.0286 23.4414 59.8418 23.8197 59.6094 24.1387C59.377 24.4577 59.0898 24.7038 58.748 24.877C58.4108 25.0501 58.012 25.1367 57.5518 25.1367C57.1006 25.1367 56.6927 25.0433 56.3281 24.8564C55.9681 24.6696 55.6582 24.4076 55.3984 24.0703C55.1432 23.7331 54.9473 23.3366 54.8105 22.8809C54.6738 22.4206 54.6055 21.9215 54.6055 21.3838ZM56.2529 21.2402V21.3838C56.2529 21.721 56.2848 22.0355 56.3486 22.3271C56.417 22.6188 56.5195 22.8763 56.6562 23.0996C56.7975 23.3184 56.9753 23.4915 57.1895 23.6191C57.4082 23.7422 57.6657 23.8037 57.9619 23.8037C58.3493 23.8037 58.666 23.7217 58.9121 23.5576C59.1628 23.3936 59.3542 23.1725 59.4863 22.8945C59.623 22.612 59.7188 22.2975 59.7734 21.9512V20.7139C59.7461 20.445 59.6891 20.1943 59.6025 19.9619C59.5205 19.7295 59.4089 19.5267 59.2676 19.3535C59.1263 19.1758 58.9486 19.0391 58.7344 18.9434C58.5202 18.8431 58.2673 18.793 57.9756 18.793C57.6794 18.793 57.4219 18.8568 57.2031 18.9844C56.9844 19.112 56.8044 19.2874 56.6631 19.5107C56.5264 19.734 56.4238 19.9938 56.3555 20.29C56.2871 20.5863 56.2529 20.903 56.2529 21.2402ZM64.4697 19.1826V25H62.8223V17.6035H64.374L64.4697 19.1826ZM64.1758 21.0283L63.6426 21.0215C63.6471 20.4974 63.7201 20.0166 63.8613 19.5791C64.0072 19.1416 64.2077 18.7656 64.4629 18.4512C64.7227 18.1367 65.0326 17.8952 65.3926 17.7266C65.7526 17.5534 66.1536 17.4668 66.5957 17.4668C66.9512 17.4668 67.2725 17.5169 67.5596 17.6172C67.8512 17.7129 68.0996 17.8701 68.3047 18.0889C68.5143 18.3076 68.6738 18.5924 68.7832 18.9434C68.8926 19.2897 68.9473 19.7158 68.9473 20.2217V25H67.293V20.2148C67.293 19.8594 67.2406 19.5791 67.1357 19.374C67.0355 19.1644 66.8874 19.0163 66.6914 18.9297C66.5 18.8385 66.2607 18.793 65.9736 18.793C65.6911 18.793 65.4382 18.8522 65.2148 18.9707C64.9915 19.0892 64.8024 19.251 64.6475 19.4561C64.4971 19.6611 64.3809 19.8981 64.2988 20.167C64.2168 20.4359 64.1758 20.723 64.1758 21.0283ZM75.8789 17.6035V25H74.2246V17.6035H75.8789ZM74.1152 15.6621C74.1152 15.4115 74.1973 15.2041 74.3613 15.04C74.5299 14.8714 74.7624 14.7871 75.0586 14.7871C75.3503 14.7871 75.5804 14.8714 75.749 15.04C75.9176 15.2041 76.002 15.4115 76.002 15.6621C76.002 15.9082 75.9176 16.1133 75.749 16.2773C75.5804 16.4414 75.3503 16.5234 75.0586 16.5234C74.7624 16.5234 74.5299 16.4414 74.3613 16.2773C74.1973 16.1133 74.1152 15.9082 74.1152 15.6621ZM79.3174 19.1826V25H77.6699V17.6035H79.2217L79.3174 19.1826ZM79.0234 21.0283L78.4902 21.0215C78.4948 20.4974 78.5677 20.0166 78.709 19.5791C78.8548 19.1416 79.0553 18.7656 79.3105 18.4512C79.5703 18.1367 79.8802 17.8952 80.2402 17.7266C80.6003 17.5534 81.0013 17.4668 81.4434 17.4668C81.7988 17.4668 82.1201 17.5169 82.4072 17.6172C82.6989 17.7129 82.9473 17.8701 83.1523 18.0889C83.362 18.3076 83.5215 18.5924 83.6309 18.9434C83.7402 19.2897 83.7949 19.7158 83.7949 20.2217V25H82.1406V20.2148C82.1406 19.8594 82.0882 19.5791 81.9834 19.374C81.8831 19.1644 81.735 19.0163 81.5391 18.9297C81.3477 18.8385 81.1084 18.793 80.8213 18.793C80.5387 18.793 80.2858 18.8522 80.0625 18.9707C79.8392 19.0892 79.6501 19.251 79.4951 19.4561C79.3447 19.6611 79.2285 19.8981 79.1465 20.167C79.0645 20.4359 79.0234 20.723 79.0234 21.0283ZM90.9727 23.3594L92.6816 17.6035H93.7344L93.4473 19.3262L91.7246 25H90.7812L90.9727 23.3594ZM89.9678 17.6035L91.3008 23.3867L91.4102 25H90.3574L88.3545 17.6035H89.9678ZM95.334 23.3184L96.626 17.6035H98.2324L96.2363 25H95.1836L95.334 23.3184ZM93.9121 17.6035L95.6006 23.291L95.8125 25H94.8691L93.126 19.3193L92.8389 17.6035H93.9121ZM101.117 17.6035V25H99.4629V17.6035H101.117ZM99.3535 15.6621C99.3535 15.4115 99.4355 15.2041 99.5996 15.04C99.7682 14.8714 100.001 14.7871 100.297 14.7871C100.589 14.7871 100.819 14.8714 100.987 15.04C101.156 15.2041 101.24 15.4115 101.24 15.6621C101.24 15.9082 101.156 16.1133 100.987 16.2773C100.819 16.4414 100.589 16.5234 100.297 16.5234C100.001 16.5234 99.7682 16.4414 99.5996 16.2773C99.4355 16.1133 99.3535 15.9082 99.3535 15.6621ZM106.312 17.6035V18.8066H102.143V17.6035H106.312ZM103.346 15.792H104.993V22.9561C104.993 23.1839 105.025 23.3594 105.089 23.4824C105.157 23.6009 105.251 23.6807 105.369 23.7217C105.488 23.7627 105.627 23.7832 105.786 23.7832C105.9 23.7832 106.009 23.7764 106.114 23.7627C106.219 23.749 106.303 23.7354 106.367 23.7217L106.374 24.9795C106.237 25.0205 106.078 25.057 105.896 25.0889C105.718 25.1208 105.513 25.1367 105.28 25.1367C104.902 25.1367 104.567 25.0706 104.275 24.9385C103.984 24.8018 103.756 24.5807 103.592 24.2754C103.428 23.9701 103.346 23.5645 103.346 23.0586V15.792ZM109.211 14.5V25H107.57V14.5H109.211ZM108.924 21.0283L108.391 21.0215C108.395 20.5111 108.466 20.0394 108.603 19.6064C108.744 19.1735 108.94 18.7975 109.19 18.4785C109.446 18.1549 109.751 17.9066 110.106 17.7334C110.462 17.5557 110.856 17.4668 111.289 17.4668C111.654 17.4668 111.982 17.5169 112.273 17.6172C112.57 17.7174 112.825 17.8792 113.039 18.1025C113.253 18.3213 113.415 18.6084 113.524 18.9639C113.638 19.3148 113.695 19.7432 113.695 20.249V25H112.041V20.2354C112.041 19.8799 111.989 19.5973 111.884 19.3877C111.784 19.1781 111.635 19.0277 111.439 18.9365C111.243 18.8408 111.004 18.793 110.722 18.793C110.425 18.793 110.163 18.8522 109.936 18.9707C109.712 19.0892 109.525 19.251 109.375 19.4561C109.225 19.6611 109.111 19.8981 109.033 20.167C108.96 20.4359 108.924 20.723 108.924 21.0283ZM126.656 19.9141V23.7148C126.515 23.9017 126.294 24.1068 125.993 24.3301C125.697 24.5488 125.303 24.738 124.811 24.8975C124.318 25.057 123.705 25.1367 122.972 25.1367C122.347 25.1367 121.775 25.0319 121.256 24.8223C120.736 24.6081 120.287 24.2959 119.909 23.8857C119.535 23.4756 119.246 22.9766 119.041 22.3887C118.836 21.7962 118.733 21.1217 118.733 20.3652V19.6748C118.733 18.9229 118.827 18.2529 119.014 17.665C119.205 17.0726 119.479 16.5713 119.834 16.1611C120.189 15.751 120.618 15.4411 121.119 15.2314C121.625 15.0173 122.197 14.9102 122.835 14.9102C123.651 14.9102 124.325 15.0469 124.858 15.3203C125.396 15.5892 125.811 15.9629 126.103 16.4414C126.394 16.9199 126.579 17.4668 126.656 18.082H124.975C124.92 17.7357 124.813 17.4258 124.653 17.1523C124.498 16.8789 124.275 16.6647 123.983 16.5098C123.696 16.3503 123.323 16.2705 122.862 16.2705C122.466 16.2705 122.117 16.3457 121.816 16.4961C121.516 16.6465 121.265 16.8675 121.064 17.1592C120.868 17.4508 120.72 17.8063 120.62 18.2256C120.52 18.6449 120.47 19.1234 120.47 19.6611V20.3652C120.47 20.9121 120.527 21.3975 120.641 21.8213C120.759 22.2451 120.928 22.6029 121.146 22.8945C121.37 23.1862 121.641 23.4072 121.96 23.5576C122.279 23.7035 122.639 23.7764 123.04 23.7764C123.432 23.7764 123.753 23.7445 124.004 23.6807C124.255 23.6123 124.453 23.5326 124.599 23.4414C124.749 23.3457 124.865 23.2546 124.947 23.168V21.1924H122.876V19.9141H126.656ZM128.078 21.3838V21.2266C128.078 20.6934 128.156 20.1989 128.311 19.7432C128.465 19.2829 128.689 18.8841 128.98 18.5469C129.277 18.2051 129.637 17.9408 130.061 17.7539C130.489 17.5625 130.972 17.4668 131.51 17.4668C132.052 17.4668 132.535 17.5625 132.959 17.7539C133.387 17.9408 133.75 18.2051 134.046 18.5469C134.342 18.8841 134.568 19.2829 134.723 19.7432C134.878 20.1989 134.955 20.6934 134.955 21.2266V21.3838C134.955 21.917 134.878 22.4115 134.723 22.8672C134.568 23.3229 134.342 23.7217 134.046 24.0635C133.75 24.4007 133.39 24.665 132.966 24.8564C132.542 25.0433 132.061 25.1367 131.523 25.1367C130.981 25.1367 130.496 25.0433 130.067 24.8564C129.644 24.665 129.284 24.4007 128.987 24.0635C128.691 23.7217 128.465 23.3229 128.311 22.8672C128.156 22.4115 128.078 21.917 128.078 21.3838ZM129.726 21.2266V21.3838C129.726 21.7165 129.76 22.0309 129.828 22.3271C129.896 22.6234 130.004 22.8831 130.149 23.1064C130.295 23.3298 130.482 23.5052 130.71 23.6328C130.938 23.7604 131.209 23.8242 131.523 23.8242C131.829 23.8242 132.093 23.7604 132.316 23.6328C132.544 23.5052 132.731 23.3298 132.877 23.1064C133.023 22.8831 133.13 22.6234 133.198 22.3271C133.271 22.0309 133.308 21.7165 133.308 21.3838V21.2266C133.308 20.8984 133.271 20.5885 133.198 20.2969C133.13 20.0007 133.021 19.7386 132.87 19.5107C132.724 19.2829 132.537 19.1051 132.31 18.9775C132.086 18.8454 131.82 18.7793 131.51 18.7793C131.2 18.7793 130.931 18.8454 130.703 18.9775C130.48 19.1051 130.295 19.2829 130.149 19.5107C130.004 19.7386 129.896 20.0007 129.828 20.2969C129.76 20.5885 129.726 20.8984 129.726 21.2266ZM136.021 21.3838V21.2266C136.021 20.6934 136.099 20.1989 136.254 19.7432C136.409 19.2829 136.632 18.8841 136.924 18.5469C137.22 18.2051 137.58 17.9408 138.004 17.7539C138.432 17.5625 138.915 17.4668 139.453 17.4668C139.995 17.4668 140.479 17.5625 140.902 17.7539C141.331 17.9408 141.693 18.2051 141.989 18.5469C142.285 18.8841 142.511 19.2829 142.666 19.7432C142.821 20.1989 142.898 20.6934 142.898 21.2266V21.3838C142.898 21.917 142.821 22.4115 142.666 22.8672C142.511 23.3229 142.285 23.7217 141.989 24.0635C141.693 24.4007 141.333 24.665 140.909 24.8564C140.485 25.0433 140.005 25.1367 139.467 25.1367C138.924 25.1367 138.439 25.0433 138.011 24.8564C137.587 24.665 137.227 24.4007 136.931 24.0635C136.634 23.7217 136.409 23.3229 136.254 22.8672C136.099 22.4115 136.021 21.917 136.021 21.3838ZM137.669 21.2266V21.3838C137.669 21.7165 137.703 22.0309 137.771 22.3271C137.84 22.6234 137.947 22.8831 138.093 23.1064C138.239 23.3298 138.425 23.5052 138.653 23.6328C138.881 23.7604 139.152 23.8242 139.467 23.8242C139.772 23.8242 140.036 23.7604 140.26 23.6328C140.488 23.5052 140.674 23.3298 140.82 23.1064C140.966 22.8831 141.073 22.6234 141.142 22.3271C141.215 22.0309 141.251 21.7165 141.251 21.3838V21.2266C141.251 20.8984 141.215 20.5885 141.142 20.2969C141.073 20.0007 140.964 19.7386 140.813 19.5107C140.668 19.2829 140.481 19.1051 140.253 18.9775C140.03 18.8454 139.763 18.7793 139.453 18.7793C139.143 18.7793 138.874 18.8454 138.646 18.9775C138.423 19.1051 138.239 19.2829 138.093 19.5107C137.947 19.7386 137.84 20.0007 137.771 20.2969C137.703 20.5885 137.669 20.8984 137.669 21.2266ZM149.017 17.6035H150.514V24.7949C150.514 25.4603 150.372 26.0254 150.09 26.4902C149.807 26.9551 149.413 27.3083 148.907 27.5498C148.401 27.7959 147.816 27.9189 147.15 27.9189C146.868 27.9189 146.553 27.8779 146.207 27.7959C145.865 27.7139 145.533 27.5817 145.209 27.3994C144.89 27.2217 144.623 26.987 144.409 26.6953L145.182 25.7246C145.446 26.0391 145.738 26.2692 146.057 26.415C146.376 26.5609 146.711 26.6338 147.062 26.6338C147.44 26.6338 147.761 26.5632 148.025 26.4219C148.294 26.2852 148.502 26.0824 148.647 25.8135C148.793 25.5446 148.866 25.2165 148.866 24.8291V19.2783L149.017 17.6035ZM143.992 21.3838V21.2402C143.992 20.6797 144.061 20.1693 144.197 19.709C144.334 19.2441 144.53 18.8454 144.785 18.5127C145.04 18.1755 145.35 17.918 145.715 17.7402C146.079 17.5579 146.492 17.4668 146.952 17.4668C147.431 17.4668 147.839 17.5534 148.176 17.7266C148.518 17.8997 148.802 18.1481 149.03 18.4717C149.258 18.7907 149.436 19.1735 149.563 19.6201C149.696 20.0622 149.794 20.5544 149.857 21.0967V21.5547C149.798 22.0833 149.698 22.5664 149.557 23.0039C149.415 23.4414 149.229 23.8197 148.996 24.1387C148.764 24.4577 148.477 24.7038 148.135 24.877C147.798 25.0501 147.399 25.1367 146.938 25.1367C146.487 25.1367 146.079 25.0433 145.715 24.8564C145.355 24.6696 145.045 24.4076 144.785 24.0703C144.53 23.7331 144.334 23.3366 144.197 22.8809C144.061 22.4206 143.992 21.9215 143.992 21.3838ZM145.64 21.2402V21.3838C145.64 21.721 145.672 22.0355 145.735 22.3271C145.804 22.6188 145.906 22.8763 146.043 23.0996C146.184 23.3184 146.362 23.4915 146.576 23.6191C146.795 23.7422 147.052 23.8037 147.349 23.8037C147.736 23.8037 148.053 23.7217 148.299 23.5576C148.549 23.3936 148.741 23.1725 148.873 22.8945C149.01 22.612 149.105 22.2975 149.16 21.9512V20.7139C149.133 20.445 149.076 20.1943 148.989 19.9619C148.907 19.7295 148.796 19.5267 148.654 19.3535C148.513 19.1758 148.335 19.0391 148.121 18.9434C147.907 18.8431 147.654 18.793 147.362 18.793C147.066 18.793 146.809 18.8568 146.59 18.9844C146.371 19.112 146.191 19.2874 146.05 19.5107C145.913 19.734 145.811 19.9938 145.742 20.29C145.674 20.5863 145.64 20.903 145.64 21.2402ZM153.986 14.5V25H152.332V14.5H153.986ZM159.052 25.1367C158.505 25.1367 158.01 25.0479 157.568 24.8701C157.131 24.6878 156.757 24.4349 156.447 24.1113C156.142 23.7878 155.907 23.4072 155.743 22.9697C155.579 22.5322 155.497 22.0605 155.497 21.5547V21.2812C155.497 20.7025 155.581 20.1784 155.75 19.709C155.919 19.2396 156.153 18.8385 156.454 18.5059C156.755 18.1686 157.11 17.9111 157.521 17.7334C157.931 17.5557 158.375 17.4668 158.854 17.4668C159.382 17.4668 159.845 17.5557 160.241 17.7334C160.638 17.9111 160.966 18.1618 161.226 18.4854C161.49 18.8044 161.686 19.1849 161.813 19.627C161.946 20.069 162.012 20.5566 162.012 21.0898V21.7939H156.297V20.6113H160.385V20.4814C160.376 20.1852 160.316 19.9072 160.207 19.6475C160.102 19.3877 159.94 19.1781 159.722 19.0186C159.503 18.859 159.211 18.7793 158.847 18.7793C158.573 18.7793 158.329 18.8385 158.115 18.957C157.906 19.071 157.73 19.2373 157.589 19.4561C157.448 19.6748 157.338 19.9391 157.261 20.249C157.188 20.5544 157.151 20.8984 157.151 21.2812V21.5547C157.151 21.8783 157.195 22.179 157.281 22.457C157.372 22.7305 157.505 22.9697 157.678 23.1748C157.851 23.3799 158.061 23.5417 158.307 23.6602C158.553 23.7741 158.833 23.8311 159.147 23.8311C159.544 23.8311 159.897 23.7513 160.207 23.5918C160.517 23.4323 160.786 23.2067 161.014 22.915L161.882 23.7559C161.722 23.9883 161.515 24.2116 161.26 24.4258C161.005 24.6354 160.692 24.8063 160.323 24.9385C159.959 25.0706 159.535 25.1367 159.052 25.1367Z"
            fill="#1F1F1F"
          />
          <rect
            x="0.5"
            y="0.5"
            width="174"
            height="39"
            rx="3.5"
            stroke="#747775"
          />
          <defs>
            <clipPath id="clip0_710_6235">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(12 10)"
              />
            </clipPath>
          </defs></svg
      ></a>
    </div>
  `},Zr}var Kr,_i;function ot(){if(_i)return Kr;_i=1;var t=Ne(),n=_e(),o=ms(),r=vs(),s=on(),i=Bi();return Kr=function(f,x){f.styles||(f.styles=s),f.styles===!0&&(f.styles=i);var d={title:"Log in to Your Account",fields:[],submitText:"Submit",links:[],error:"",_status:"READY",styles:i};f=n(d,f);var c=g(f);return c;function g(h){var a=h.styles;return t`<div class=${a.box}>
      <div class=${a.title}>${h.title}</div>

      ${h.message?t`<div>
            <div class=${a.message}>${h.message}</div>
            ${h.error?t`<div class=${a.error}>${h.error}</div>
            `:""}
          </div>`:o({submitText:h.submitText,fields:h.fields,error:h.error,disabled:h._status==="FETCHING",styles:a},m)}

      <div class=${a.links}>
        ${h.links.map(function(l){return t`<a
            href=${l.href}
            class=${a.link}>
            ${l.text}
          </a>`}).reduce(function(l,p,b){return b&&l.push(" - "),l.push(p),l},[])}
      </div>

      ${h.googleSignInUrl?t`<div class=${a.googleSignIn}>
          ${r({url:h.googleSignInUrl})}
        </div>
        `:""}
    </div>`}function m(h,a){f._status="FETCHING",f=n(f,{fields:a}),t.update(c,g(f)),x(h,function(l){if(l)return f.error=l.message,f._status="ERROR",t.update(c,g(f));f._status="SUCCESS",t.update(c,g(f))})}},Kr}var Wr,Si;function st(){return Si||(Si=1,Wr=function(n,o,r){var s=[];return n.forEach(function(i){var f=o[i];if(f){if(f.href&&f.text)return s.push(f);if(typeof f=="string")return r[i]?s.push({text:r[i].text,href:f}):void 0}}),s}),Wr}var Yr,Ai;function bs(){if(Ai)return Yr;Ai=1;var t=_e(),n=ot(),o=st(),r="jwt";Yr=function(f,x){var d=typeof x=="function"?x:function(){},c={title:"Log in to Your Account",fields:[{name:"email",placeholder:"Email"},{name:"password",placeholder:"Password",type:"password"}],links:{signup:{text:"Create Account",href:"#/signup"},changePasswordRequest:{text:"Reset Password",href:"#/change-password-request"}},styles:!0,submitText:"Login"};f=t(c,f);var g=b(f),m=new URLSearchParams(window.location.search),h=m.get(r);if(h){var a=s(h),l=a.email;f.auth.setEmail(l),f.auth.setAuthToken(h),m.delete(r);var p=m.toString();window.history.replaceState({},"",p?`?${p}`:window.location.pathname),d(null,{data:{authToken:h,email:l}})}return g;function b(T){var A=["signup","changePasswordRequest"],P=o(A,T.links,c.links),D=T.googleSignIn?`${T.auth.googleSignInUrl}?redirectUrl=${encodeURIComponent(window.location.href)}&redirectParam=${r}`:null;return n({title:T.titles.login||T.title,fields:T.fields,links:P,styles:T.styles,submitText:T.submitText,googleSignInUrl:D},C)}function C(T,A){f.auth.login(T,function(P,D){if(P)return A(P);d(null,D)})}};function s(i){var f=i.split("."),x=atob(f[1].replace(/_/g,"/").replace(/-/g,"+"));return JSON.parse(x)}return Yr}var Xr,Ri;function ys(){if(Ri)return Xr;Ri=1;var t=Ne(),n=_e(),o=ot(),r=st();return Xr=function(i,f){if(i=i||{},!i.subject)throw new Error("subject is required");if(!i.confirmUrl)throw new Error("confirmUrl is required");var x={confirmUrl:null,from:null,subject:null,provide:null,title:"Create Your Account",submitText:"Sign Up",successTitle:"Thanks!",successMessage:"Signup complete! Check your email to continue.",fields:[{name:"email",placeholder:"Email"},{name:"password",placeholder:"Password",type:"password"}],links:{login:{text:"Log In",href:"#/login"},changePasswordRequest:{text:"Reset Password",href:"#/change-password-request"}},styles:!0};i=n(x,i);var d=["login","changePasswordRequest"],c=r(d,i.links,x.links),g=m(i);return g;function m(a){return o({title:a.titles.signup||a.title,fields:a.fields,submitText:a.submitText,links:c,styles:a.styles},h)}function h(a,l){var p=["title","submitText","successTitle","successMessage","fields","links","styles","titles","auth"],b=n(a,i.provide);Object.keys(i).forEach(function(C){p.indexOf(C)===-1&&i[C]!=null&&(b[C]=i[C])}),i.auth.signup(b,function(C,T){if(C)return l(C);if(f)return f(null,T);t.update(g,o({title:i.successTitle,message:i.successMessage,styles:i.styles,links:c}))})}},Xr}var Jr,ki;function Cs(){if(ki)return Jr;ki=1;var t=Ne(),n=_e(),o=ot(),r=st();return Jr=function(i,f){if(!i.email)throw new Error("email is required");if(!i.confirmToken)throw new Error("confirmToken is required");var x={email:null,confirmToken:null,confirmError:"",confirmState:"pending",title:"Set Password",pendingTitle:"Confirming Account",pendingMessage:"Your account is being confirmed. Just a moment...",failureTitle:"Account Confirmation Failed",failureMessage:"Your account could not be confirmed.",successTitle:"Account Confirmed",successMessage:"Your account has been confirmed. Logging you in...",links:{login:{text:"Log In",href:"#/login"},signup:{text:"Create Account",href:"#/signup"}},styles:!0};i=n(x,i),g();var d=c(i);return d;function c(m){var h=["login","signup"],a=r(h,m.links,x.links),l=m[m.confirmState+"Title"],p=m[m.confirmState+"Message"];return o({title:l,message:p,error:m.confirmError,links:a,styles:m.styles})}function g(m){var h={email:i.email,confirmToken:i.confirmToken};i.auth.confirm(h,function(a,l){if(a){i.confirmState="failure",i.confirmError=a.message,t.update(d,c(i));return}f&&f(),i.confirmState="success",t.update(d,c(i))})}},Jr}var Qr,Oi;function xs(){if(Oi)return Qr;Oi=1;var t=Ne(),n=_e(),o=ot(),r=st();return Qr=function(i,f){if(!i.email)throw new Error("email is required");if(!i.changeToken)throw new Error("changeToken is required");var x={email:null,changeToken:null,title:"Set Password",submitText:"Set Password",successTitle:"Password Set",successMessage:"Your new password has been set. Logging you in...",fields:[{placeholder:"Password",name:"password",type:"password"}],links:{login:{text:"Log In",href:"#/login"},signup:{text:"Create Account",href:"#/signup"}},styles:!0};i=n(x,i);var d=["signup","changePasswordRequest"],c=r(d,i.links,x.links),g=m(i);return g;function m(a){return o({title:a.title,fields:a.fields,submitText:a.submitText,links:c,styles:a.styles},h)}function h(a,l){var p=n(a,{email:i.email,changeToken:i.changeToken});i.auth.changePassword(p,function(b,C){if(b)return l(b);f&&f(null,C),t.update(g,o({title:i.successTitle,message:i.successMessage,links:c,styles:i.styles}))})}},Qr}var en,Pi;function ws(){if(Pi)return en;Pi=1;var t=Ne(),n=_e(),o=ot(),r=st();return en=function(i,f){if(!i.subject)throw new Error("subject is required");if(!i.changeUrl)throw new Error("changeUrl is required");var x={changeUrl:null,from:null,subject:null,provide:null,title:"Reset Your Password",submitText:"Send Reset Code",successTitle:"Reset Code Sent!",successMessage:"Check your email for a link to reset your password.",fields:[{placeholder:"Email",name:"email"}],links:{login:{text:"Log In",href:"#/login"},signup:{text:"Create Account",href:"#/signup"}},styles:!0};i=n(x,i);var d=["login","signup"],c=r(d,i.links,x.links),g=m(i);return g;function m(a){return o({title:a.titles.changePasswordRequest||a.title,fields:a.fields,submitText:a.submitText,links:c,styles:a.styles},h)}function h(a,l){var p=["title","submitText","successTitle","successMessage","fields","links","styles","titles","auth"],b=n(a,i.provide);Object.keys(i).forEach(function(C){p.indexOf(C)===-1&&i[C]!=null&&(b[C]=i[C])}),i.auth.changePasswordRequest(b,function(C,T){if(C)return l(C);if(f)return f(null,T);t.update(g,o({title:i.successTitle,message:i.successMessage,links:c,styles:i.styles}))})}},en}var Li;function Ts(){if(Li)return vr.exports;Li=1;var t=_e(),n=Lo(),o=rn(),r={login:bs(),signup:ys(),confirm:Cs(),changePassword:xs(),changePasswordRequest:ws()},s=window.localStorage,i="_aui_",f=vr.exports=function(c){if(!(this instanceof f))return new f(c);this.auth=n(t(c,{authToken:this._get("authToken"),email:this._get("email")})),this.auth.on("authToken",this._set.bind(this,"authToken")),this.auth.on("email",this._set.bind(this,"email")),this.googleSignIn=c.googleSignIn||!1,this.titles=c.titles||{},this.links=c.links||!1,this.styles=!0,c.styles&&(this.styles=c.styles),c.styles===!1&&(this.styles=!1),this.get=this.auth.get.bind(this.auth),this.post=this.auth.post.bind(this.auth)};o.mixin(f),f.prototype.authToken=function(){return this.auth.authToken},f.prototype.email=function(){return this.auth.email},f.prototype._set=x,f.prototype._get=d,f.prototype.logout=function(c){this.auth.logout(),c&&c()},Object.keys(r).forEach(function(c){f.prototype[c]=function(g,m){return typeof g=="function"&&(m=g,g={}),r[c](t({auth:this.auth,links:this.links,titles:this.titles,styles:this.styles,googleSignIn:this.googleSignIn},g),m)}});function x(c,g){var m=i+c;return typeof g<"u"&&g!==null?s.setItem(m,JSON.stringify(g)):s.removeItem(m),this.emit(c,g),g}function d(c){var g=i+c,m=s.getItem(g)||"null";return JSON.parse(m)}return vr.exports}var Es=Ts();const _s=Pe(Es);throw new Error("VITE_AUTHENTIC_SERVER environment variable is required");const Ce=_s({server:void 0,prefix:"/auth",googleSignIn:!0,styles:!1,links:{signup:"#/signup",login:"#/login",changePasswordRequest:"#/change-password-request"},titles:{signup:"Create your account",login:"Sign in to your account",changePasswordRequest:"Reset your password"}});let it={isLoggedIn:!1,email:null,authToken:null};function Ss(){const t=Ce.authToken(),n=Ce.email();console.log("initAuthState called - token:",t?"present":"missing","email:",n),t&&n?(it={isLoggedIn:!0,email:n,authToken:t},console.log("Auth state updated - user is logged in:",n)):console.log("No valid auth token/email found")}function zi(){return{...it}}function sn(t,n){if(t){console.error("Login error:",t);return}it={isLoggedIn:!0,email:Ce.email(),authToken:Ce.authToken()},console.log("User logged in:",it.email),window.location.hash="/widgets"}function Zi(){Ce.logout(),it={isLoggedIn:!1,email:null,authToken:null},console.log("Auth state cleared")}function As(){Zi(),console.log("User logged out"),window.location.hash="/",window.dispatchEvent(new HashChangeEvent("hashchange"))}function Rs(){const t=document.createElement("div");t.className="auth-container";const n=sessionStorage.getItem("authError");if(n){const r=document.createElement("div");r.className="auth-error",r.textContent=n,t.appendChild(r),sessionStorage.removeItem("authError")}const o=Ce.login(sn);return t.appendChild(o),t}function ks(){const t=document.createElement("div");t.className="auth-container";const n=Ce.signup({confirmUrl:window.location.origin+"#/confirm",subject:"Welcome to Start Light Express!",bodyTemplate:'<p>Please click the link to confirm your account:</p><p><a href="<%= confirmUrl %>"><%= confirmUrl %></a></p>'});return t.appendChild(n),t}function Os(){const t=document.createElement("div");t.className="auth-container";const n=Fi.parse(window.location.search.slice(1));if(!n.email||!n.confirmToken){const r=Z`
      <div class="content">
        <h2>Invalid Confirmation Link</h2>
        <p>This confirmation link appears to be invalid or expired.</p>
        <a href="#/signup" class="btn">Try Signing Up Again</a>
      </div>
    `;return t.appendChild(r),t}const o=Ce.confirm({email:n.email,confirmToken:n.confirmToken},sn);return t.appendChild(o),t}function Ps(){const t=document.createElement("div");t.className="auth-container";const n={changeUrl:window.location.origin+"#/change-password",subject:"Reset Your Password",bodyTemplate:'<p>Please click the link to reset your password:</p><p><a href="<%= changeUrl %>">Reset Password</a></p><p>If the link does not work, copy and paste this URL: <%= changeUrl %></p>'};console.log("changeOpts",n);const o=Ce.changePasswordRequest(n);return t.appendChild(o),t}function Ls(){const t=document.createElement("div");t.className="auth-container";const n=Fi.parse(window.location.search.slice(1));if(!n.email||!n.changeToken){const r=Z`
      <div class="content">
        <h2>Invalid Password Reset Link</h2>
        <p>This password reset link appears to be invalid or expired.</p>
        <a href="#/change-password-request" class="btn">Request New Reset Link</a>
      </div>
    `;return t.appendChild(r),t}const o=Ce.changePassword({email:n.email,changeToken:n.changeToken},sn);return t.appendChild(o),t}async function ut(t,n={}){try{const o=zi(),r={"Content-Type":"application/json",...n.headers};o.isLoggedIn&&o.authToken&&(r.Authorization=`Bearer ${o.authToken}`);const s=await fetch(t,{...n,headers:r});if(s.status===401||s.status===403){console.log(`${s.status} ${s.status===401?"Unauthorized":"Forbidden"} - redirecting to login`),Zi();let i=s.status===401?"Your session has expired. Please sign in again.":"Access denied. Please sign in with an authorized account.";try{const f=await s.json();f.error?i=f.error:f.message&&(i=f.message)}catch{console.log(`Non-JSON ${s.status} response, using default message`)}throw sessionStorage.setItem("authError",i),window.location.hash="/login",new Error("Authentication required")}if(!s.ok){let i=`HTTP error! status: ${s.status}`;try{const f=await s.json();f.error?i=f.error:f.message&&(i=f.message)}catch(f){console.log("Non-JSON error response:",f)}throw new Error(i)}return s}catch(o){throw o}}const ee=Lt();function qs(t){const n=qi();return ee.on("*",o=>{at(n,qi())}),un(),n}async function un(){try{ee.set({loading:!0,error:null});const n=await(await ut("/api/widgets")).json();ee.set({widgets:n,loading:!1})}catch(t){console.error("Failed to load widgets:",t),t.message!=="Session expired"&&ee.set({error:t.message||"Failed to load widgets. Please check if the server is running.",loading:!1})}}async function $s(t){t.preventDefault();const n=t.target,o=new FormData(n),r={name:o.get("name"),quantity:parseInt(o.get("quantity"),10),metadata:{description:o.get("description")}};try{const s=await ut("/api/widgets",{method:"POST",body:JSON.stringify(r)});n.reset(),un(),ee.set({success:"Widget created successfully!"}),setTimeout(()=>ee.set({success:null}),3e3)}catch(s){console.error("Failed to create widget:",s),s.message!=="Session expired"&&ee.set({error:s.message||"Failed to create widget. Please try again."})}}async function Is(t){if(confirm("Are you sure you want to delete this widget?"))try{const n=await ut(`/api/widgets/${t}`,{method:"DELETE"});un(),ee.set({success:"Widget deleted successfully!"}),setTimeout(()=>ee.set({success:null}),3e3)}catch(n){console.error("Failed to delete widget:",n),n.message!=="Session expired"&&ee.set({error:n.message||"Failed to delete widget. Please try again."})}}function qi(){return Z`
    <div class="content">
      <h1>Widget Management</h1>
      
      ${ee.error?Z`<div class="error">${ee.error}</div>`:""}
      ${ee.success?Z`<div class="success">${ee.success}</div>`:""}
      
      <h2>Create New Widget</h2>
      <form onsubmit=${$s}>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="0" required>
        </div>
        
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" name="description" rows="3"></textarea>
        </div>
        
        <button type="submit" class="btn">Create Widget</button>
      </form>

      <h2>Existing Widgets</h2>
      
      ${ee.loading?Z`
        <div class="loading">Loading widgets...</div>
      `:""}
      
      ${ee.widgets&&ee.widgets.length>0?Z`
        <div class="widget-list">
          ${ee.widgets.map(t=>Z`
            <div class="widget-item">
              <h3>${t.name}</h3>
              <div class="widget-meta">
                <p><strong>Quantity:</strong> ${t.quantity}</p>
                ${t.metadata&&t.metadata.description?Z`
                  <p><strong>Description:</strong> ${t.metadata.description}</p>
                `:""}
                <p><strong>Created:</strong> ${new Date(t.dateCreated).toLocaleDateString()}</p>
                <p><strong>ID:</strong> <code>${t._id}</code></p>
              </div>
              <button 
                class="btn btn-secondary" 
                onclick=${()=>Is(t._id)}
              >
                Delete
              </button>
            </div>
          `)}
        </div>
      `:ee.widgets&&ee.widgets.length===0?Z`
        <p>No widgets found. Create your first widget above!</p>
      `:""}
    </div>
  `}const z=Lt();function Ms(t){const n=$i();return Ki(),z.on("*",o=>at(n,$i())),n}async function Ki(){try{z.set({healthLoading:!0,healthError:null});const t=await fetch("/health"),n=await t.json();z.set({health:n,healthLoading:!1,healthStatus:t.ok?"healthy":"unhealthy"})}catch(t){console.error("Failed to load health status:",t),z.set({healthError:"Failed to connect to server",healthLoading:!1,healthStatus:"error"})}}async function Us(){try{z.set({authLoading:!0,authError:null,authResult:null});const n=await(await ut("/api/auth/authTest")).json();z.set({authResult:n,authLoading:!1,authStatus:"success"})}catch(t){console.error("Auth test failed:",t),t.message!=="Session expired"&&z.set({authError:t.message||"Authentication failed",authLoading:!1,authStatus:"error"})}}async function Ds(){try{z.set({errorTestLoading:!0,errorTestError:null,errorTestResult:null});const n=await(await ut("/api/auth/errorTest")).json();z.set({errorTestResult:n,errorTestLoading:!1,errorTestStatus:"unexpected"})}catch(t){console.error("Error test failed:",t),t.message!=="Session expired"&&z.set({errorTestError:t.message,errorTestLoading:!1,errorTestStatus:"expected"})}}function $i(){return Z`
    <div class="content">
      <h1>Settings & Diagnostics</h1>
      
      <h2>Server Health</h2>
      <div class="form-group">
        <button class="btn" onclick=${Ki}>
          ${z.healthLoading?"Checking...":"Check Health"}
        </button>
        
        ${z.healthError?Z`
          <div class="error" style="margin-top: 1rem;">
            <strong>Health Check Failed:</strong> ${z.healthError}
          </div>
        `:""}
        
        ${z.health?Z`
          <div class="success" style="margin-top: 1rem;">
            <h3>Health Status: ${z.healthStatus}</h3>
            <pre>${JSON.stringify(z.health,null,2)}</pre>
          </div>
        `:""}
      </div>

      <h2>Authentication Test</h2>
      <div class="form-group">
        <button class="btn" onclick=${Us}>
          ${z.authLoading?"Testing...":"Test Authentication"}
        </button>
        
        ${z.authError?Z`
          <div class="error" style="margin-top: 1rem;">
            <strong>Auth Test Failed:</strong> ${z.authError}
          </div>
        `:""}
        
        ${z.authResult?Z`
          <div class="success" style="margin-top: 1rem;">
            <h3>Authentication Successful</h3>
            <pre>${JSON.stringify(z.authResult,null,2)}</pre>
          </div>
        `:""}
      </div>

      <h2>Error Handling Test</h2>
      <div class="form-group">
        <button class="btn btn-secondary" onclick=${Ds}>
          ${z.errorTestLoading?"Testing...":"Test Error Handling"}
        </button>
        
        ${z.errorTestError?Z`
          <div class="error" style="margin-top: 1rem;">
            <strong>Network Error:</strong> ${z.errorTestError}
          </div>
        `:""}
        
        ${z.errorTestResult?Z`
          <div class="${z.errorTestStatus==="expected"?"success":"error"}" style="margin-top: 1rem;">
            <h3>Error Response (Expected):</h3>
            <pre>${JSON.stringify(z.errorTestResult,null,2)}</pre>
          </div>
        `:""}
      </div>

      <h2>Application Info</h2>
      <div class="widget-item">
        <h3>Client Information</h3>
        <p><strong>Route:</strong> Hash-based routing (/#/route)</p>
        <p><strong>State Management:</strong> wildemitter</p>
        <p><strong>Templating:</strong> nanohtml</p>
        <p><strong>User Agent:</strong> ${navigator.userAgent}</p>
        <p><strong>Current URL:</strong> ${window.location.href}</p>
        <p><strong>Hash:</strong> ${window.location.hash||"(none)"}</p>
      </div>

      <h2>Server Information</h2>
      <div class="widget-item">
        <h3>API Endpoints</h3>
        <ul>
          <li><code>GET /health</code> - Health check</li>
          <li><code>GET /api/widgets</code> - List widgets</li>
          <li><code>POST /api/widgets</code> - Create widget</li>
          <li><code>GET /api/widgets/:id</code> - Get widget</li>
          <li><code>PUT /api/widgets/:id</code> - Update widget</li>
          <li><code>DELETE /api/widgets/:id</code> - Delete widget</li>
          <li><code>GET /api/auth/authTest</code> - Test authentication</li>
          <li><code>GET /api/auth/errorTest</code> - Test error handling</li>
        </ul>
      </div>
    </div>
  `}const Hs=["/widgets","/settings"];function Wi(t){return Hs.includes(t)}function Ns(t,n={isLoggedIn:!1}){return!n.isLoggedIn&&Wi(t)?(console.log(`Route ${t} requires authentication, redirecting to login`),"/login"):n.isLoggedIn&&["/login","/signup"].includes(t)?(console.log(`User already logged in, redirecting from ${t} to widgets`),"/widgets"):t}function Vs(t){return Z`
    <div class="content">
      <h2>Authentication Required</h2>
      <p>You need to be logged in to access ${t}.</p>
      <div style="margin-top: 1rem;">
        <a href="#/login" class="btn">Log In</a>
        <a href="#/signup" class="btn btn-secondary" style="margin-left: 1rem;">Sign Up</a>
      </div>
    </div>
  `}const Fs=Lt();function js(t,n,o){const r=Ii(t,n,o);return Fs.on("*",s=>at(r,Ii(t,n,o))),r}function Ii(t,n,o){return Z`
    <div class="header">
      <div class="container">
        <nav class="nav">
          <div class="nav-left">
            <a href="#/" class=${n==="#/"||n===""?"active":""}>Home</a>
          </div>
          <div class="nav-center">
            ${t.isLoggedIn?Z`
              <a href="#/widgets" class=${n==="#/widgets"?"active":""}>Widgets</a>
              <a href="#/settings" class=${n==="#/settings"?"active":""}>Settings</a>
            `:""}
          </div>
          <div class="nav-right">
            ${t.isLoggedIn?Z`
              <button onclick=${o} class="logout-btn">Logout</button>
            `:Z`
              <a href="#/login" class="${n==="#/login"?"active ":""}auth-btn">Sign In / Up</a>
            `}
          </div>
        </nav>
      </div>
    </div>
  `}function Gs(t){return t.isLoggedIn?Z`
    <div class="user-email">${t.email}</div>
  `:Z`<div></div>`}const Se=so();document.title="Start Light Express";Se.set("/",Eo);Se.set("/widgets",qs);Se.set("/settings",Ms);Se.set("/login",Rs);Se.set("/signup",ks);Se.set("/confirm",Os);Se.set("/change-password-request",Ps);Se.set("/change-password",Ls);let tn=null;function Yi(){const t=zi(),n=window.location.hash,o=n.slice(1)||"/",r=Ns(o,t);if(r!==o){window.location.hash=r;return}const s=Se.get(r);let i;s&&s.handler?Wi(r)&&!t.isLoggedIn?i=Vs(r):i=s.handler({...s.params,splat:s.splat}):i=Z`
      <div class="content">
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="#/" class="btn">Go Home</a>
      </div>
    `;const f=Z`
    <div class="app">
      ${js(t,n,As)}
      <div class="container">
        ${Gs(t)}
        <div class="main-content">
          ${i}
        </div>
      </div>
    </div>
  `;tn?at(tn,f):(document.body.innerHTML="",document.body.appendChild(f),tn=f)}Ss();window.addEventListener("hashchange",Yi);Yi();
