(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(4),r=a.n(n),i=a(2),o=a(0),u=function(e){var t=e.handleQuery;return Object(o.jsx)("div",{className:"app__search",children:Object(o.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var a=e.target[0].value.trim();a=a.replace(/\s\s+/g," "),t(escape(a))}(e)},onReset:function(e){t("")},className:"form",children:[Object(o.jsx)("div",{className:"formInputContainer",children:Object(o.jsx)("input",{type:"text",name:"City",id:"city",placeholder:"Search City",className:"formInputContainer__input"})}),Object(o.jsxs)("div",{className:"formButtonsContainer",children:[Object(o.jsx)("button",{type:"reset",className:"formButtonsContainer__clear",children:"\u2716"}),Object(o.jsx)("button",{type:"submit",className:"formButtonsContainer__submit",children:"\u2714"})]})]})})},l=function(e){var t=e.searchQuery,a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],r=s[1],u=Object(c.useState)(""),l=Object(i.a)(u,2),j=l[0],d=l[1],h=Object(c.useState)(""),b=Object(i.a)(h,2),m=b[0],p=b[1],O=Object(c.useState)([]),f=Object(i.a)(O,2),x=f[0],g=f[1],y=Object(c.useState)(!1),v=Object(i.a)(y,2),N=v[0],_=v[1],w=["January","February","March","April","May","June","July","August","September","October","November","December"],C=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return Object(c.useEffect)((function(){t.length>0?(console.log("search query recieved"),r(t),console.log(t)):(console.log("empty"),r(""),d(""),p(""),g([]))}),[t]),Object(c.useEffect)((function(){if(n){console.log("fetching data");var e={base:"https://api.openweathermap.org/data/2.5/forecast?q=",units:"metric",key:"6c8756a49b801bc327f94d283e99889d"};if(n.length>0)fetch(e.base+n+"&units="+e.units+"&appid="+e.key).then((function(e){return e.json()})).then((function(e){"404"!==e.cod?(console.log(e),_(!1),d(e.city.name),p(e.city.country),g(e.list)):(_(!0),d(""),p(""),g([]))}))}else console.log("no search executed")}),[n]),Object(o.jsxs)("div",{className:"app__output",children:[N&&Object(o.jsx)("div",{className:"errorContainer",children:Object(o.jsx)("h1",{children:"Invalid input"})}),j&&Object(o.jsxs)("div",{className:"outputContainer",children:[Object(o.jsx)("div",{className:"outputContainer__title",children:Object(o.jsx)("h1",{children:j+", "+m})}),Object(o.jsx)("div",{className:"outputContainer__list",children:x&&x.map((function(e){return Object(o.jsxs)("div",{className:"weatherItem",children:[Object(o.jsxs)("p",{className:"weatherItem__text",children:[" ",C[new Date(1e3*e.dt).getDay()]+" "+new Date(1e3*e.dt).getDate()+" / "+w[new Date(1e3*e.dt).getMonth()]+" / "+(new Date(1e3*e.dt).getHours()+1)+":00 "+Math.round(e.main.temp)+"\xb0C "+e.weather[0].description," "]}),Object(o.jsx)("div",{className:"weatherItem__img",style:{backgroundImage:"url('http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@4x.png')")}})]},e.dt)}))})]})]})},j=a.p+"static/media/React.3036e716.png",d=a.p+"static/media/Sass.fd475502.png",h=function(){return Object(o.jsxs)("div",{className:"app__footer",children:[Object(o.jsx)("p",{className:"footerText",children:"This site does not store any personal information"}),Object(o.jsxs)("p",{className:"footerText",children:["Built with ",Object(o.jsx)("img",{src:j,alt:"react",className:"react"})," and styled with ",Object(o.jsx)("img",{src:d,alt:"sass",className:"sass"})]}),Object(o.jsxs)("p",{className:"footerText",children:["Check my github ",Object(o.jsx)("a",{href:"https://github.com/ShaumikRahman",children:"here"})]})]})};var b=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h1",{className:"app__title",children:"5 Day Weather"}),Object(o.jsx)(u,{handleQuery:function(e){s(e)}}),Object(o.jsx)(l,{searchQuery:a}),Object(o.jsx)(h,{})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,11)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),m()}},[[10,1,2]]]);
//# sourceMappingURL=main.43689e5f.chunk.js.map