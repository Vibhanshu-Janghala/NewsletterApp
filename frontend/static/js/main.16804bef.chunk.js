(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(5),o=n.n(c),s=(n(11),n(4)),i=n.n(s),u=n(6),l=n(2),d=n(0),m=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(d.jsxs)("div",{className:"flex flex-col max-w-6xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-40 md:ml-auto md:mr-auto ",children:[Object(d.jsx)("div",{className:"md:flex items-center justify-center md:w-1/2 md:bg-gray-700",children:Object(d.jsxs)("div",{className:"py-6 px-8 md:py-0",children:[Object(d.jsx)("h2",{className:"text-gray-700 text-2xl font-bold md:text-gray-100",children:"Sign Up For Project Updates"}),Object(d.jsx)("p",{className:"mt-2 text-gray-600 md:text-gray-400",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio"})]})}),Object(d.jsx)("div",{className:"flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700",children:""===e.formState?Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.formSubmit(a),c((function(){return""}))},children:Object(d.jsxs)("div",{className:"flex flex-col rounded-lg overflow-hidden sm:flex-row",children:[Object(d.jsx)("input",{className:"py-3 px-5 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100",type:"text",name:"email",placeholder:"Enter your email",onChange:function(e){c((function(){return e.target.value}))}}),Object(d.jsx)("button",{className:"py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600",type:"submit",children:"subscribe"})]})}):Object(d.jsx)("p",{className:"mt-2 text-gray-600 md:text-gray-400 text-3xl font-bold",children:e.formState})})]})},b=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((function(){return"Loading"})),e.prev=1,e.next=4,fetch("add/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:t})});case 4:n=e.sent,console.log(n),200===n.status?a((function(){return"Success"})):(console.error(n),a((function(){return"Failed.Try again"}))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),a((function(){return"Failed.Try again"}));case 13:setTimeout((function(){a((function(){return""}))}),1e3);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(m,{formSubmit:c,formState:n})};var f=function(){return Object(d.jsx)(b,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.16804bef.chunk.js.map