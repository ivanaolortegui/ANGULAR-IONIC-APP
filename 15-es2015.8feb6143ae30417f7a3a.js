(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{qI4B:function(l,n,t){"use strict";t.r(n);var o=t("8Y7J");class u{}var e=t("pMnS"),a=t("oBZk"),r=t("ZZ/e"),b=t("ZVGD"),i=t("HVfF"),c=t("D5da"),s=t("iInd"),d=t("mrSG");class h{constructor(l,n,t){this.toDo=l,this.router=n,this.alertController=t}addList(){return d.b(this,void 0,void 0,function*(){(yield this.alertController.create({header:"Nueva lista",inputs:[{name:"title",type:"text",placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Cancelar")}},{text:"Crear",handler:l=>{if(console.log(l),0===l.title.length)return;const n=this.toDo.createList(l.title);this.router.navigateByUrl(`tabs/tab1/add/${n}`)}}]})).present()})}}var p=o.ob({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function f(l){return o.Ib(0,[(l()(),o.qb(0,0,null,null,6,"ion-header",[["no-border",""]],null,null,null,a.E,a.h)),o.pb(1,49152,null,0,r.B,[o.h,o.k,o.x],null,null),(l()(),o.qb(2,0,null,0,4,"ion-toolbar",[["color","dark"]],null,null,null,a.T,a.w)),o.pb(3,49152,null,0,r.Bb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.qb(4,0,null,0,2,"ion-title",[],null,null,null,a.S,a.v)),o.pb(5,49152,null,0,r.zb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(-1,0,[" Pendientes "])),(l()(),o.qb(7,0,null,null,9,"ion-content",[["color","dark"]],null,null,null,a.B,a.e)),o.pb(8,49152,null,0,r.u,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.qb(9,0,null,0,1,"app-list",[],null,null,null,b.b,b.a)),o.pb(10,114688,null,0,i.a,[c.a,s.m,r.a],{finished:[0,"finished"]},null),(l()(),o.qb(11,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.D,a.f)),o.pb(12,49152,null,0,r.w,[o.h,o.k,o.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),o.qb(13,0,null,0,3,"ion-fab-button",[["color","tertiary"]],null,[[null,"click"]],function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.addList()&&o),o},a.C,a.g)),o.pb(14,49152,null,0,r.x,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.qb(15,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,a.F,a.i)),o.pb(16,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],function(l,n){l(n,3,0,"dark"),l(n,8,0,"dark"),l(n,10,0,!1),l(n,12,0,"end","bottom"),l(n,14,0,"tertiary"),l(n,16,0,"add")},null)}function z(l){return o.Ib(0,[(l()(),o.qb(0,0,null,null,1,"app-tab1",[],null,null,null,f,p)),o.pb(1,49152,null,0,h,[c.a,s.m,r.a],null,null)],null,null)}var k=o.mb("app-tab1",h,z,{},{},[]),m=t("SVse"),v=t("s7LF"),g=t("iTUp"),x=t("j1ZV");t.d(n,"Tab1PageModuleNgFactory",function(){return q});var q=o.nb(u,[],function(l){return o.yb([o.zb(512,o.j,o.Y,[[8,[e.a,k]],[3,o.j],o.v]),o.zb(4608,m.k,m.j,[o.s,[2,m.q]]),o.zb(4608,r.b,r.b,[o.x,o.g]),o.zb(4608,r.Fb,r.Fb,[r.b,o.j,o.p]),o.zb(4608,r.Ib,r.Ib,[r.b,o.j,o.p]),o.zb(4608,v.g,v.g,[]),o.zb(1073742336,m.b,m.b,[]),o.zb(1073742336,r.Db,r.Db,[]),o.zb(1073742336,v.f,v.f,[]),o.zb(1073742336,v.a,v.a,[]),o.zb(1073742336,g.a,g.a,[]),o.zb(1073742336,x.a,x.a,[]),o.zb(1073742336,s.n,s.n,[[2,s.s],[2,s.m]]),o.zb(1073742336,u,u,[]),o.zb(1024,s.k,function(){return[[{path:"",component:h}]]},[])])})}}]);