"use strict";(self.webpackChunkreact_simple_movies=self.webpackChunkreact_simple_movies||[]).push([[367],{367:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(885),a=n(791),i=n(419),u=n(541),o=n(555),l=n(112),c=(n(48),n(810)),s=n(110),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)};function d(e,t,n,r){return new(n||(n=Promise))((function(a,i){function u(e){try{l(r.next(e))}catch(t){i(t)}}function o(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,o)}l((r=r.apply(e,t||[])).next())}))}function p(e,t){var n,r,a,i,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(a=(a=u.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){u.label=i[1];break}if(6===i[0]&&u.label<a[1]){u.label=a[1],a=i;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(i);break}a[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(o){i=[6,o],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}var v,h,g=function(){},y=g(),b=Object,m=function(e){return e===y},w=function(e){return"function"==typeof e},x=!("undefined"!=typeof window)||"Deno"in window?a.useEffect:a.useLayoutEffect,k=new WeakMap,j=0,S=function e(t){var n,r,a=typeof t,i=t&&t.constructor,u=i==Date;if(b(t)!==t||u||i==RegExp)n=u?t.toJSON():"symbol"==a?t.toString():"string"==a?JSON.stringify(t):""+t;else{if(n=k.get(t))return n;if(n=++j+"~",k.set(t,n),i==Array){for(n="@",r=0;r<t.length;r++)n+=e(t[r])+",";k.set(t,n)}if(i==b){n="#";for(var o=b.keys(t).sort();!m(r=o.pop());)m(t[r])||(n+=r+":"+e(t[r])+",");k.set(t,n)}}return n},N=function(e){if(w(e))try{e=e()}catch(n){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?S(e):"",t,e?"$swr$"+e:""]},Z=function(e){return w(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},C="$inf$",M=function(e){return N(e?e(0,null):null)[0]},$=(v=i.ZP,h=function(e){return function(t,n,r){var i=(0,a.useState)({})[1],u=(0,a.useRef)(!1),o=(0,a.useRef)(),l=r.cache,c=r.initialSize,s=void 0===c?1:c,f=r.revalidateAll,v=void 0!==f&&f,h=r.persistSize,g=void 0!==h&&h,b=r.revalidateFirstPage,k=void 0===b||b,j=r.revalidateOnMount,S=void 0!==j&&j,Z=null;try{Z=M(t)}catch(R){}var $=null,z=null;Z&&($="$ctx$"+Z,z="$len$"+Z);var E=(0,a.useCallback)((function(){var e=l.get(z);return m(e)?s:e}),[z,s]),O=(0,a.useRef)(E());x((function(){u.current?Z&&l.set(z,g?O.current:s):u.current=!0}),[Z]);var _=S&&!u.current,L=e(Z?C+Z:null,(function(){return d(void 0,void 0,void 0,(function(){var e,a,i,u,c,s,f,d,h,g,y,b;return p(this,(function(p){switch(p.label){case 0:e=l.get($)||[],a=e[0],i=e[1],u=[],c=E(),s=null,f=0,p.label=1;case 1:return f<c?(d=N(t(f,s)),h=d[0],g=d[1],h?(y=l.get(h),b=v||a||m(y)||k&&!f&&!m(o.current)||_||i&&!m(i[f])&&!r.compare(i[f],y),n&&b?[4,n.apply(void 0,g)]:[3,3]):[3,5]):[3,5];case 2:y=p.sent(),l.set(h,y),p.label=3;case 3:u.push(y),s=y,p.label=4;case 4:return++f,[3,1];case 5:return l.delete($),[2,u]}}))}))}),r);x((function(){o.current=L.data}),[L.data]);var A=(0,a.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[0],r=!1!==e[1];if($){if(r)if(m(n))l.set($,[!0]);else{var a=o.current;l.set($,[!1,a])}return e.length?L.mutate(n,r):L.mutate()}}),[$]),P=(0,a.useCallback)((function(e){var n;if(z&&(w(e)?n=e(E()):"number"==typeof e&&(n=e),"number"==typeof n))return l.set(z,n),O.current=n,i({}),A(function(e){for(var n=[],r=null,a=0;a<e;++a){var i=N(t(a,r))[0],u=i?l.get(i):y;if(m(u))return o.current;n.push(u),r=u}return n}(n))}),[z,E,A]);return{size:E(),setSize:P,mutate:A,get error(){return L.error},get data(){return L.data},get isValidating(){return L.isValidating}}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Z(e),r=n[0],a=n[1],i=n[2],u=(i.use||[]).concat(h);return v(r,a,f(f({},i),{use:u}))}),z=n(184),E=function(){var e,t,n=(0,a.useState)(0),i=(0,r.Z)(n,2),f=(i[0],i[1]),d=(0,a.useState)(0),p=(0,r.Z)(d,2),v=p[0],h=(p[1],(0,a.useState)(1)),g=(0,r.Z)(h,2),y=g[0],b=(g[1],(0,a.useState)("")),m=(0,r.Z)(b,2),w=m[0],x=m[1],k=(0,a.useState)(o.Qo.getMovieList("popular",y)),j=(0,r.Z)(k,2),S=j[0],N=j[1],Z=(0,l.Z)(w,500),C=$((function(e){return S.replace("page=1","page=".concat(e+1))}),o._i),M=C.data,E=C.error,O=C.size,_=C.setSize,L=M?M.reduce((function(e,t){return e.concat(t.results)}),[]):[],A=!M&&!E,P=0===(null===M||void 0===M||null===(e=M[0])||void 0===e?void 0:e.results.length)||M&&(null===(t=M[M.length-1])||void 0===t?void 0:t.results.length)<20;console.log("MoviePage ~ isReachingEnd",P),(0,a.useEffect)((function(){N(Z?o.Qo.getMovieSearch(Z,y):o.Qo.getMovieList("popular",y))}),[Z,y]),(0,a.useEffect)((function(){M&&M.total_results&&f(Math.ceil(M.total_results/20))}),[M,v]);return(0,z.jsxs)("div",{className:"py-10 page-container",children:[(0,z.jsxs)("div",{className:"flex mb-10",children:[(0,z.jsx)("div",{className:"flex-1",children:(0,z.jsx)("input",{type:"text",className:"w-full p-4 bg-slate-800 text-white outline-none",placeholder:"Type here to search...",onChange:function(e){x(e.target.value)}})}),(0,z.jsx)("button",{className:"p-4 bg-primary text-white",children:(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,z.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),A&&(0,z.jsx)("div",{className:"grid grid-cols-4 gap-10",children:new Array(20).fill(0).map((function(){return(0,z.jsx)(u.d,{},(0,c.Z)())}))}),(0,z.jsx)("div",{className:"grid grid-cols-4 gap-10",children:!A&&L.length>0&&L.map((function(e){return(0,z.jsx)(u.Z,{item:e},e.id)}))}),(0,z.jsx)("div",{className:"mt-10 text-center",children:(0,z.jsx)(s.Z,{onClick:function(){return P?{}:_(O+1)},disabled:P,className:"".concat(P?"bg-slate-300":""),children:"Load more"})})]})}}}]);
//# sourceMappingURL=367.ffbe75ee.chunk.js.map