(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(6),i=c.n(a),r=(c(21),{gitHubUsername:"harshbhandariv",repos:["formmaker","fourierchaos","Blog-API","characteristicEquation","chromaticpolynomial","harshbhandariv.github.io"]}),j={firstName:"Harsh",lastName:"Bhandari",aboutme:"Hi, I am Harsh V Bhandari pursuing my Bachelors in Electronics and Communication Engineering from Thiagarajar College of Engineering, Madurai. I am passionate about Web Deveolopment and love to use technologies to create fun stuffs on the Internet",tags:["Engineer","Web Developer","Tech Enthusiast"]},o="harsh.bhandari.v@gmail.com",l={GitHub:"https://github.com/harshbhandariv",LinkedIn:"https://www.linkedin.com/in/harshvbhandari/",Twitter:"https://twitter.com/harshbhandariv"},h="Feel free to say Hi",d=c(0);function b(){return Object(d.jsxs)("div",{className:"Hero",children:[Object(d.jsx)("h1",{children:"".concat(j.firstName," ").concat(j.lastName)}),Object(d.jsx)("div",{className:"tags",children:j.tags.join(" | ")}),Object(d.jsx)("a",{href:"#about",className:"cta",children:"More about me"})]})}c(23);var u=c.p+"static/media/Resume_HARSHVBHANDARI.5120a0d9.pdf";function m(){var e=Object(s.useRef)(null);return Object(d.jsxs)("nav",{children:[Object(d.jsxs)("div",{className:"nav-content",children:[Object(d.jsx)("a",{href:"#home",className:"name",children:j.firstName}),Object(d.jsxs)("ul",{ref:e,children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:u,target:"_blank",rel:"noreferrer",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#about",children:"About Me"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#projects",children:"Projects"})})]})]}),Object(d.jsxs)("div",{className:"burger",onClick:function(){return e.current.classList.toggle("show")},children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})]})}var O=c.p+"static/media/profilePhoto.5c0607de.jpg";c(24);function x(){return Object(d.jsxs)("div",{className:"About",id:"about",children:[Object(d.jsx)("h1",{children:"About Me"}),Object(d.jsxs)("div",{className:"about-content",children:[Object(d.jsx)("div",{className:"profileDiv",children:Object(d.jsx)("img",{src:O,alt:"".concat(j.firstName)})}),Object(d.jsx)("div",{className:"profileAboutDiv",children:j.aboutme})]})]})}var f=c(15),v=(c(25),c(12)),p=c.n(v),g=c(14),N=c.n(g);function k(){var e=Object(s.useState)([]),t=Object(f.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){fetch("https://api.github.com/users/".concat(r.gitHubUsername,"/repos")).then((function(e){return e.json()})).then((function(e){n(e.filter((function(e){return r.repos.includes(e.name)})).reverse())}))}),[]),Object(d.jsxs)("div",{className:"Project",id:"projects",children:[Object(d.jsx)("h1",{children:"Projects"}),Object(d.jsx)("div",{className:"project-card-container",children:c.map((function(e){return Object(d.jsxs)("div",{className:"project-card",children:[Object(d.jsx)("h2",{className:"project-name",children:e.name}),Object(d.jsx)("div",{className:"project-description",children:e.description}),Object(d.jsxs)("div",{className:"project-language",children:["Language: ",e.language]}),Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)("div",{className:"link-github",children:Object(d.jsx)("a",{href:e.html_url,children:Object(d.jsx)(p.a,{style:{color:"black"}})})}),e.homepage&&Object(d.jsx)("div",{className:"link-deployment",children:Object(d.jsx)("a",{href:e.homepage,children:Object(d.jsx)(N.a,{style:{color:"black"}})})})]})]},e.id)}))})]})}c(31);var H=c(48),w=c(49),A=c(50);function I(){return Object(d.jsxs)("div",{className:"Contact",children:[Object(d.jsx)("h1",{children:"Get in Touch"}),Object(d.jsxs)("div",{className:"contact-content",children:[Object(d.jsx)("div",{children:h}),Object(d.jsxs)("div",{className:"social",children:[Object(d.jsx)("a",{href:l.GitHub,children:Object(d.jsx)(H.a,{})}),Object(d.jsx)("a",{href:l.Twitter,style:{margin:"0em 1em"},children:Object(d.jsx)(w.a,{})}),Object(d.jsx)("a",{href:l.LinkedIn,children:Object(d.jsx)(A.a,{})})]}),Object(d.jsxs)("div",{children:["email:"," ",Object(d.jsx)("a",{href:"mailto:".concat(o),className:"mail",children:o})]})]})]})}c(32);function y(){return Object(d.jsxs)("div",{className:"Home",id:"home",children:[Object(d.jsx)(m,{}),Object(d.jsx)(b,{}),Object(d.jsx)(x,{}),Object(d.jsx)(k,{}),Object(d.jsx)(I,{})]})}var E=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(y,{})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),B()}},[[34,1,2]]]);
//# sourceMappingURL=main.e2920d53.chunk.js.map