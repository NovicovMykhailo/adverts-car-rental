"use strict";(self.webpackChunkadverts_car_rental=self.webpackChunkadverts_car_rental||[]).push([[707],{7747:function(e,n,r){r.d(n,{Z:function(){return C}});var t="AdvertCard_card__x0vGq",a="AdvertCard_cardTitle__8Trld",c="AdvertCard_blued__eMZVe",s="AdvertCard_imageContainer__Wbr3X",i="AdvertCard_icon__Ir6YW",l="AdvertCard_image__grMGg",o="AdvertCard_descrList__apAl9",u=r(8298),d=r(5861),f=r(9439),m=r(4687),p=r.n(m),x=r(2791);var v=r.p+"static/media/HeartHollow.e6aef420dab2877eaa3255f37619c5e3.svg";var h=r.p+"static/media/HeartFull.b825442535eb48fa4c59b66934982764.svg",g=r(9779),j=r(184);function _(e){var n=e.id,r=e.className,t=e.favs,a=e.isChanged,c=(0,x.useState)(t),s=(0,f.Z)(c,2),i=s[0],l=s[1],o=(0,x.useState)("resolved"),u=(0,f.Z)(o,2),m=u[0],_=u[1];function C(){return(C=(0,d.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_("pending"),a&&a(),i){e.next=10;break}return e.next=5,g.I_(n,!0);case 5:e.sent&&l(!0),_("resolved"),e.next=15;break;case 10:return e.next=12,g.I_(n,!1);case 12:e.sent&&l(!1),_("resolved");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,j.jsx)("div",{className:r,onClick:function(){return C.apply(this,arguments)},disabled:"pending"===m,children:i?(0,j.jsx)("img",{src:h,alt:"in favorites"}):(0,j.jsx)("img",{src:v,alt:"not in favorites"})})}function C(e){var n=e.advert,r=e.openModal,d=e.isChanged,f=n.img,m=n.id,p=n.year,x=n.model,v=n.make,h=n.rentalPrice,g=n.rentalCompany,C=n.type,b=n.address,k=n.accessories,y=n.favs;return(0,j.jsxs)("li",{className:t,title:"".concat(k.join("\n")),children:[(0,j.jsxs)("div",{className:s,children:[(0,j.jsx)("img",{src:f,alt:"CarImage",className:l,loading:"lazy"}),(0,j.jsx)(_,{className:i,favs:y||!1,id:m,isChanged:d})]}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h2",{className:a,children:[(0,j.jsxs)("span",{children:["".concat(v," "),(0,j.jsx)("span",{className:c,children:"".concat(x)}),", ".concat(p)]}),(0,j.jsx)("span",{children:h})]}),(0,j.jsxs)("ul",{className:o,children:[(0,j.jsx)("li",{children:(0,u.hw)(b)}),(0,j.jsx)("li",{children:(0,u.rZ)(b)}),(0,j.jsx)("li",{children:g}),(0,j.jsx)("li",{children:"Premium"}),(0,j.jsx)("li",{children:C}),(0,j.jsx)("li",{children:x}),(0,j.jsx)("li",{children:m}),(0,j.jsx)("li",{children:k[2]})]})]}),(0,j.jsx)("button",{className:"button-primary",onClick:function(){return r(m)},children:"Learn more"})]})}},2899:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(184);function a(e){var n=e.onClick;return(0,t.jsx)("div",{style:c,children:(0,t.jsx)("button",{className:"button-secondary",onClick:n,children:" Load more"})})}var c={width:"100%",display:"flex",justifyContent:"center",paddingBottom:"150px"}},9321:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(2791),a=r(4164),c=r(1184),s="Modal_Overlay__yoxbg",i="Modal_Modal__I1UYJ",l=r(184);function o(e){var n=e.onClose,r=e.children,o=e.active,u=document.querySelector("#modal-root"),d=(0,c.Z)(o,300);(0,t.useEffect)((function(){return window.addEventListener("keydown",f),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",f),document.body.style.overflow="unset"}}));var f=function(e){"Escape"===e.code&&n()},m={transform:"scale( ".concat(d?"1":"0",")"),opacity:d?1:0};return(0,a.createPortal)((0,l.jsx)("div",{className:s,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,l.jsx)("div",{style:m,className:i,children:r})}),u)}},8611:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(3433),a=r(5861),c=r(9439),s=r(4687),i=r.n(s),l="ModalCard_modalBody__Rqr05",o="ModalCard_imageContainer__90Jmi",u="ModalCard_image__8zwlp",d="ModalCard_modalTitle__U--es",f="ModalCard_blued__GD-N9",m="ModalCard_feautersList__4JYvT",p="ModalCard_desription__TVRaz",x="ModalCard_subTitle__V2POC",v="ModalCard_rentalDetails__8WruD",h="ModalCard_closeBtn__cbULL",g=r(2791),j=r(1087),_=r(9779),C=r(8298);var b=r.p+"static/media/closeIcon.c68562e5a2ec8cefaf7b97ab0fbf60a5.svg",k=r(184);function y(e){var n=e.id,r=e.closeModal,s=(0,g.useState)(null),y=(0,c.Z)(s,2),N=y[0],w=y[1],Z=(0,g.useState)("pending"),M=(0,c.Z)(Z,2),S=M[0],P=M[1];if((0,g.useEffect)((function(){(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P("pending"),e.prev=1,e.next=4,_.FJ(n);case 4:(r=e.sent)&&w(r),r&&P("resolved"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),P("rejected");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}),[n]),"resolved"===S){var I=N.img,L=N.make,T=N.model,A=N.functionalities,J=N.mileage,z=N.year,E=N.rentalPrice,R=N.rentalConditions,F=N.address,U=N.description,$=N.fuelConsumption,B=N.engineSize,O=N.rentalCompany,V=N.type,Y=N.accessories;return(0,k.jsxs)("article",{className:l,tittle:O,children:[(0,k.jsx)("img",{src:b,alt:"Close Button",className:h,onClick:r}),(0,k.jsx)("div",{className:o,children:(0,k.jsx)("img",{src:I,alt:"CarImage",className:u,loading:"lazy"})}),(0,k.jsx)("h2",{className:d,children:(0,k.jsxs)("span",{children:["".concat(L," "),(0,k.jsx)("span",{className:f,children:"".concat(T)}),", ".concat(z)]})}),(0,k.jsxs)("ul",{className:m,children:[(0,k.jsx)("li",{children:(0,C.hw)(F)}),(0,k.jsx)("li",{children:(0,C.rZ)(F)}),(0,k.jsxs)("li",{children:["Id: ",n]}),(0,k.jsxs)("li",{children:["Year: ",z]}),(0,k.jsxs)("li",{children:["Type: ",V]}),(0,k.jsxs)("li",{children:["Fuel Consumption: ",$]}),(0,k.jsxs)("li",{children:["Engine Size: ",B]})]}),(0,k.jsx)("p",{className:p,children:U}),(0,k.jsx)("h3",{className:x,children:"Accessories and functionalities: "}),(0,k.jsx)("ul",{className:m,children:[].concat((0,t.Z)(A),(0,t.Z)(Y)).map((function(e,n){return(0,k.jsx)("li",{children:e},n)}))}),(0,k.jsx)("h3",{className:x,children:"Rental Conditions:"}),(0,k.jsxs)("ul",{className:v,children:[(0,C.p8)(R).map((function(e,n){return e.includes(":")?(0,k.jsxs)("li",{children:[" ",e.split(":")[0],": ",(0,k.jsx)("span",{className:f,children:e.split(":")[1]})," "]},n):(0,k.jsx)("li",{children:e},n)})),(0,k.jsxs)("li",{children:[" Mileage: ",(0,k.jsx)("span",{className:f,children:(0,C.P1)(J)})," "]}),(0,k.jsxs)("li",{children:[" Price: ",(0,k.jsx)("span",{className:f,children:E})," "]})]}),(0,k.jsx)(j.rU,{className:"button-primary btn-rent","data-rel":"external",to:"tel:+380730000000",target:"blank",children:"Rental car"})]})}}},8208:function(e,n,r){r.d(n,{Z:function(){return c}});var t="Skeleton_container__xl6yV",a=r(184);function c(){return(0,a.jsxs)("ul",{className:t,children:[(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{}),(0,a.jsx)("li",{})]})}},9779:function(e,n,r){r.d(n,{I_:function(){return f},FJ:function(){return d},Rn:function(){return u},Tg:function(){return m},yC:function(){return p}});var t=r(5861),a=r(4687),c=r.n(a),s=r(1243),i=function(e){var n=sessionStorage.getItem("".concat(e));return JSON.parse(n)},l=function(e,n){sessionStorage.setItem("".concat(e),JSON.stringify(n))};function o(e,n){var r=n.make,t=n.rentalPrice,a=n.millageFrom,c=n.millageTo;return e.filter((function(e){return" "!==c&&c&&" "!==a&&a&&" "!==r&&r&&" "!==t&&t?e.mileage<"".concat(c)&&e.mileage>"".concat(a)&&e.make===r&&e.rentalPrice==="$".concat(t):" "!==c&&c&&" "!==a&&a&&" "!==t&&t?e.mileage<="".concat(c)&&e.mileage>="".concat(a)&&e.rentalPrice==="$".concat(t):" "!==c&&c&&" "!==a&&a&&" "!==r&&r?e.make===r&&e.mileage>="".concat(a)&&e.mileage<="".concat(c):" "!==c&&c&&" "!==r&&r?e.mileage>="".concat(c)&&e.make===r:" "!==a&&a&&" "!==t&&t?e.mileage>="".concat(a)&&e.make===r:" "!==c&&c&&" "!==t&&t?e.mileage>="".concat(c)&&e.rentalPrice==="$".concat(t):" "!==a&&a&&" "!==r&&r?e.mileage>="".concat(a)&&e.make===r:" "!==r&&r&&" "!==t&&t?e.make===r&&e.rentalPrice==="$".concat(t):" "!==a&&a?e.mileage>="".concat(a):" "!==c&&c?e.mileage<="".concat(c):" "!==t&&t?e.rentalPrice==="$".concat(t):" "!==r&&r?e.make===r:e}))}s.Z.defaults.baseURL="https://64fcade6605a026163aeba10.mockapi.io/adverts";var u=function(){var e=(0,t.Z)(c().mark((function e(){var n,r,t=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,e.next=3,s.Z.get("?page=".concat(n,"&limit=8"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n,r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put("/".concat(n),{favs:r});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),m=function(){var e=(0,t.Z)(c().mark((function e(){var n,r,t=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,e.next=3,s.Z.get("?favs=true&page=".concat(n,"&limit=8"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n,r,t){var a,u,d,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,s.Z.get("/");case 3:a=e.sent,l("cars",a.data);case 5:if(i("cars")){e.next=12;break}return e.next=8,s.Z.get("/");case 8:u=e.sent,l("cars",u.data),e.next=17;break;case 12:return d=i("cars"),e.next=15,o(d,n);case 15:return f=e.sent,e.abrupt("return",f.slice(0,8*r));case 17:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}()},8298:function(e,n,r){r.d(n,{P1:function(){return c},hw:function(){return t},p8:function(){return s},rZ:function(){return a}});var t=function(e){return e.split(", ").slice(1,-1).toString()},a=function(e){return e.split(", ").slice(2).toString()},c=function(e){return Number(e).toLocaleString()},s=function(e){return e.split("\n")}}}]);
//# sourceMappingURL=707.e6e05b57.chunk.js.map