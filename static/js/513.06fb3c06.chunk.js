"use strict";(self.webpackChunkadverts_car_rental=self.webpackChunkadverts_car_rental||[]).push([[513],{9933:function(e,n,r){r.d(n,{Z:function(){return y}});var t="AdvertCard_card__x0vGq",a="AdvertCard_cardTitle__8Trld",i="AdvertCard_blued__eMZVe",c="AdvertCard_imageContainer__Wbr3X",s="AdvertCard_icon__Ir6YW",l="AdvertCard_image__grMGg",o="AdvertCard_descrList__apAl9",u="AdvertCard_isLoading__1lkAl",d="AdvertCard_hide__9Kfmr",m=r(8298),f=r(5861),p=r(9439),x=r(4687),h=r.n(x),v=r(2791);var _=r.p+"static/media/HeartHollow.e6aef420dab2877eaa3255f37619c5e3.svg";var g=r.p+"static/media/HeartFull.b825442535eb48fa4c59b66934982764.svg",j=r(4345),b=r(184);function N(e){var n=e.id,r=e.className,t=e.favs,a=e.isChanged,i=(0,v.useState)(t),c=(0,p.Z)(i,2),s=c[0],l=c[1],o=(0,v.useState)("resolved"),u=(0,p.Z)(o,2),d=u[0],m=u[1];function x(){return(x=(0,f.Z)(h().mark((function e(){var r,t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m("pending"),s){e.next=10;break}return e.next=4,j.I_(n,!0);case 4:(r=e.sent)&&l(!0),r&&a&&a(),m("resolved"),e.next=16;break;case 10:return e.next=12,j.I_(n,!1);case 12:(t=e.sent)&&l(!1),t&&a&&a(),m("resolved");case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,b.jsx)("div",{className:r,onClick:function(){return x.apply(this,arguments)},disabled:"pending"===d,children:s?(0,b.jsx)("img",{src:g,alt:"in favorites"}):(0,b.jsx)("img",{src:_,alt:"not in favorites"})})}function C(e){var n=e.src,r=(0,v.useState)(!1),t=(0,p.Z)(r,2),a=t[0],i=t[1];return(0,b.jsxs)("div",{className:c,children:[a?null:(0,b.jsx)("div",{className:u}),(0,b.jsx)("img",{src:n,alt:"CarImage",className:"".concat(a?l:d),onLoad:function(){return setTimeout((function(){return i(!0)}),300)}})]})}function y(e){var n=e.advert,r=e.openModal,l=e.isChanged,u=n.img,d=n.id,f=n.year,p=n.model,x=n.make,h=n.rentalPrice,v=n.rentalCompany,_=n.type,g=n.address,j=n.accessories,y=n.favs;return(0,b.jsxs)("li",{className:t,title:"".concat(j.join("\n")),"data-aos":"zoom-in",children:[(0,b.jsxs)("div",{className:c,children:[(0,b.jsx)(C,{src:u}),(0,b.jsx)(N,{className:s,favs:y||!1,id:d,isChanged:l})]}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h3",{className:a,children:[(0,b.jsxs)("span",{children:["".concat(x," "),(0,b.jsx)("span",{className:i,children:"".concat(p)}),", ".concat(f)]}),(0,b.jsx)("span",{children:h})]}),(0,b.jsxs)("ul",{className:o,children:[(0,b.jsx)("li",{children:(0,m.hw)(g)}),(0,b.jsx)("li",{children:(0,m.rZ)(g)}),(0,b.jsx)("li",{children:v}),(0,b.jsx)("li",{children:"Premium"}),(0,b.jsx)("li",{children:_}),(0,b.jsx)("li",{children:p}),(0,b.jsx)("li",{children:d}),(0,b.jsx)("li",{children:j[2]})]})]}),(0,b.jsx)("button",{className:"button-primary",onClick:function(){return r(n)},children:"Learn more"})]})}},2899:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(184);function a(e){var n=e.onClick;return(0,t.jsx)("div",{style:i,children:(0,t.jsx)("button",{className:"button-secondary",onClick:n,children:" Load more"})})}var i={width:"100%",display:"flex",justifyContent:"center",paddingBottom:"150px"}},9321:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(2791),a=r(4164),i=r(1184),c="Modal_Overlay__yoxbg",s="Modal_Modal__I1UYJ",l=r(184);function o(e){var n=e.onClose,r=e.children,o=e.active,u=document.querySelector("#modal-root"),d=(0,i.Z)(o,300);(0,t.useEffect)((function(){return window.addEventListener("keydown",m),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",m),document.body.style.overflow="unset"}}));var m=function(e){"Escape"===e.code&&n()},f={transform:"scale( ".concat(d?"1":"0",")"),opacity:d?1:0};return(0,a.createPortal)((0,l.jsx)("div",{className:c,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,l.jsx)("div",{style:f,className:s,children:r})}),u)}},8611:function(e,n,r){r.d(n,{Z:function(){return _}});var t=r(3433),a="ModalCard_modalBody__Rqr05",i="ModalCard_imageContainer__90Jmi",c="ModalCard_image__8zwlp",s="ModalCard_modalTitle__U--es",l="ModalCard_blued__GD-N9",o="ModalCard_feautersList__4JYvT",u="ModalCard_desription__TVRaz",d="ModalCard_subTitle__V2POC",m="ModalCard_rentalDetails__8WruD",f="ModalCard_closeBtn__cbULL",p=r(1087),x=r(8298);r(2791);var h=r.p+"static/media/closeIcon.c68562e5a2ec8cefaf7b97ab0fbf60a5.svg",v=r(184);function _(e){var n=e.advert,r=e.closeModal,_=n.id,g=n.img,j=n.make,b=n.model,N=n.functionalities,C=n.mileage,y=n.year,k=n.rentalPrice,w=n.rentalConditions,Z=n.address,P=n.description,M=n.fuelConsumption,S=n.engineSize,L=n.rentalCompany,A=n.type,I=n.accessories;return(0,v.jsxs)("article",{className:a,tittle:L,children:[(0,v.jsx)("img",{src:h,alt:"Close Button",className:f,onClick:r}),(0,v.jsx)("div",{className:i,children:(0,v.jsx)("img",{src:g,alt:"CarImage",className:c,loading:"lazy"})}),(0,v.jsx)("h2",{className:s,children:(0,v.jsxs)("span",{children:["".concat(j," "),(0,v.jsx)("span",{className:l,children:"".concat(b)}),", ".concat(y)]})}),(0,v.jsxs)("ul",{className:o,children:[(0,v.jsx)("li",{children:(0,x.hw)(Z)}),(0,v.jsx)("li",{children:(0,x.rZ)(Z)}),(0,v.jsxs)("li",{children:["Id: ",_]}),(0,v.jsxs)("li",{children:["Year: ",y]}),(0,v.jsxs)("li",{children:["Type: ",A]}),(0,v.jsxs)("li",{children:["Fuel Consumption: ",M]}),(0,v.jsxs)("li",{children:["Engine Size: ",S]})]}),(0,v.jsx)("p",{className:u,children:P}),(0,v.jsx)("h3",{className:d,children:"Accessories and functionalities: "}),(0,v.jsx)("ul",{className:o,children:[].concat((0,t.Z)(N),(0,t.Z)(I)).map((function(e,n){return(0,v.jsx)("li",{children:e},n)}))}),(0,v.jsx)("h3",{className:d,children:"Rental Conditions:"}),(0,v.jsxs)("ul",{className:m,children:[(0,x.p8)(w).map((function(e,n){return e.includes(":")?(0,v.jsxs)("li",{children:[" ",e.split(":")[0],": ",(0,v.jsx)("span",{className:l,children:e.split(":")[1]})," "]},n):(0,v.jsx)("li",{children:e},n)})),(0,v.jsxs)("li",{children:[" Mileage: ",(0,v.jsx)("span",{className:l,children:(0,x.P1)(C)})," "]}),(0,v.jsxs)("li",{children:[" Price: ",(0,v.jsx)("span",{className:l,children:k})," "]})]}),(0,v.jsx)(p.rU,{className:"button-primary btn-rent","data-rel":"external",to:"tel:+380730000000",target:"blank",children:"Rental car"})]})}},1929:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(184);function a(e){var n=e.message;return(0,t.jsx)("div",{style:i.container,children:(0,t.jsx)("h2",{style:i.text,children:n})})}var i={container:{display:"flex",alighItems:"center",justifyContent:"center",height:"100vh"},text:{fontFamily:"inherit",color:"gray",paddingTop:"10vh"}}},8208:function(e,n,r){r.d(n,{Z:function(){return i}});var t="Skeleton_container__xl6yV",a=r(184);function i(){return(0,a.jsxs)("ul",{className:t,children:[(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{})]})}},4345:function(e,n,r){r.d(n,{I_:function(){return u},go:function(){return m},Rn:function(){return o},Tg:function(){return d},yC:function(){return f}});var t=r(5861),a=r(4687),i=r.n(a),c=r(1243),s=r(2989);function l(e,n){var r=n.make,t=n.rentalPrice,a=n.millageFrom,i=n.millageTo;return e.filter((function(e){return" "!==r&&r&&" "!==t&&t&&" "!==i&&i&&" "!==a&&a?e.mileage>="".concat(a)&&e.mileage<="".concat(i)&&Number(e.rentalPrice.split("$")[1])<=Number(t)&&e.make===r:" "!==t&&t&&" "!==i&&i&&" "!==a&&a?e.mileage>="".concat(a)&&e.mileage<="".concat(i)&&Number(e.rentalPrice.split("$")[1])<=Number(t):" "!==r&&r&&" "!==i&&i&&" "!==a&&a?e.mileage>="".concat(a)&&e.mileage<="".concat(i)&&e.make===r:" "!==t&&" "!==r&&r&&t&&" "!==i&&i?e.make===r&&e.mileage<="".concat(i)&&Number(e.rentalPrice.split("$")[1])<=Number(t):" "!==t&&" "!==r&&r&&t&&" "!==a&&a?e.make===r&&e.mileage>="".concat(a)&&Number(e.rentalPrice.split("$")[1])<=Number(t):" "!==t&&t&&" "!==a&&a?e.mileage>="".concat(a)&&Number(e.rentalPrice.split("$")[1])<=Number(t)&&e.make===r:" "!==t&&t&&" "!==i&&i?e.mileage<="".concat(i)&&Number(e.rentalPrice.split("$")[1])===t:" "!==r&&r&&" "!==a&&a?e.mileage>="".concat(a)&&e.make===r:" "!==r&&r&&" "!==i&&i?e.mileage<="".concat(i)&&e.make===r:" "!==r&&r&&" "!==t&&t?Number(e.rentalPrice.split("$")[1])<=Number(t)&&e.make===r:" "!==a&&a?e.mileage>="".concat(a):" "!==i&&i?e.mileage<="".concat(i):" "!==t&&t?Number(e.rentalPrice.split("$")[1])<=Number(t):" "!==r&&r?e.make===r:e}))}c.Z.defaults.baseURL="https://64fcade6605a026163aeba10.mockapi.io/adverts";var o=function(){var e=(0,t.Z)(i().mark((function e(){var n,r,t=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,e.next=3,c.Z.get("?page=".concat(n,"&limit=8"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(i().mark((function e(n,r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.put("/".concat(n),{favs:r});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(i().mark((function e(){var n,r,t=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,r=null,e.prev=2,e.next=5,c.Z.get("?favs=true&page=".concat(n,"&limit=8"));case 5:r=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),r=[];case 11:return e.abrupt("return",r.data?r.data:[]);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(i().mark((function e(n,r,t){var a,c,o,u,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return e.next=3,m();case 3:return a=e.sent,(0,s.P)("cars",a.data),c=(0,s.R)("cars"),e.next=8,l(c,n);case 8:return o=e.sent,e.abrupt("return",o.slice(0,8*r));case 10:if(!(0,s.R)("cars")){e.next=16;break}return u=(0,s.R)("cars"),e.next=14,l(u,n);case 14:return d=e.sent,e.abrupt("return",d.slice(0,8*r));case 16:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}()},2989:function(e,n,r){r.d(n,{P:function(){return a},R:function(){return t}});var t=function(e){var n=sessionStorage.getItem("".concat(e));return JSON.parse(n)},a=function(e,n){sessionStorage.setItem("".concat(e),JSON.stringify(n))}},8298:function(e,n,r){r.d(n,{P1:function(){return i},_v:function(){return s},hw:function(){return t},p8:function(){return c},rZ:function(){return a}});var t=function(e){return e.split(", ").slice(1,-1).toString()},a=function(e){return e.split(", ").slice(2).toString()},i=function(e){return Number(e).toLocaleString()},c=function(e){return e.split("\n")},s=function(e){return 0===function(e){for(var n=e.split(""),r=[],t=0;t<n.length;t++)!1===isNaN(n[t])&&r.push(n[t]);return Number(r.join(""))}(e)?"":Number(e).toLocaleString()}}}]);
//# sourceMappingURL=513.06fb3c06.chunk.js.map