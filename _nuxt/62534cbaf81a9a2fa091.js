(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{185:function(e,t,n){"use strict";var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("figure",{staticClass:"icon main-menu"},[t("img",{attrs:{src:n(366)}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"menuitem brand"},[t("a",{attrs:{href:"/"}},[t("figure",{staticClass:"icon logo"},[t("img",{attrs:{src:n(356)}})])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"menuitem"},[t("a",{attrs:{href:"/tag/all"}},[this._v("Products")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"menuitem"},[t("a",{attrs:{href:"/tag/skin"}},[this._v("Skin")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"menuitem"},[t("a",{attrs:{href:"/tag/makeup-and-nails"}},[this._v("Makeup & Nails")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"menuitem"},[t("a",{attrs:{href:"/info/our-mission"}},[this._v("Our Mission")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"menu-section brand"},[t("a",{attrs:{href:"/"}},[t("figure",{staticClass:"icon logo"},[t("img",{attrs:{src:n(356)}})])])])}],o=n(316),c={components:{SearchBar:o.a},data:function(){return{}}},m=(n(367),n(14)),l=Object(m.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"hero-container"},[this._m(0),this._v(" "),t("div",{staticClass:"search"},[t("search-bar",{attrs:{variant:"frontpage"}})],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hero"},[t("section",{staticClass:"hero-body"},[t("div",{staticClass:"container has-text-centered"},[t("h1",{staticClass:"title"},[this._v("\n          Title\n        ")]),this._v(" "),t("h2",{staticClass:"subtitle"},[this._v("\n          Subtitle\n        ")])])])])}],!1,null,null,null).exports,d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"usp"},[r("div",{staticClass:"container"},[r("h2",{staticClass:"title-usp"},[e._v("Where personal grooming products are people-tested")]),e._v(" "),r("ul",{staticClass:"usp-item-container"},[r("li",{staticClass:"usp"},[r("img",{staticClass:"icon",attrs:{src:n(369)}}),e._v(" "),r("span",{staticClass:"label"},[e._v("Worldwide recommendations made available locally")])]),e._v(" "),r("li",{staticClass:"usp"},[r("img",{staticClass:"icon",attrs:{src:n(370)}}),e._v(" "),r("span",{staticClass:"label"},[e._v("Recommended by 40k honest reviewers")])]),e._v(" "),r("li",{staticClass:"usp"},[r("img",{staticClass:"icon",attrs:{src:n(371)}}),e._v(" "),r("span",{staticClass:"label"},[e._v("\n          Tested 3 hearts & above products only"),r("br"),e._v(" "),r("a",{staticClass:"link-usp",attrs:{href:"/info/product-selection-process"}},[e._v("Read about our process")])])]),e._v(" "),r("li",{staticClass:"usp"},[r("img",{staticClass:"icon",attrs:{src:n(372)}}),e._v(" "),r("span",{staticClass:"label"},[e._v("Guaranteed 100% authentic")])])])])])}],h={},v=(n(373),Object(m.a)(h,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),d,!1,null,"36578c18",null).exports),f=[{name:"Home",altMobileName:"Back to home",link:"/"},{name:"Skin",link:"/tag/skin"},{name:"Makeup & Nails",link:"/tag/makeup-and-nails"},{name:"Read",link:"/post/all",items:[{name:"Top 10",link:"/post/top-10/all"},{name:"Beauty Blog",link:"/post/beauty-blog/all"}]},{name:"Info",link:"/",items:[{name:"Our Mission",link:"/info/our-mission"},{name:"Privacy Policy",link:"/info/privacy-policy"},{name:"Terms of Use",link:"/info/terms-of-use"},{name:"FAQ",link:"/info/faq"}]}],_={components:{Hero:l,Usp:v,SearchBar:o.a},mounted:function(){var e=this;FB.getLoginStatus((function(t){"connected"===t.status&&e.$store.commit("login",t.authResponse)}))},computed:{loggedIn:function(){return this.$store.state.auth}},methods:{toggleSiteMenu:function(){this.showSiteMenu=!this.showSiteMenu},login:function(){var e=this;FB.login((function(t){e.$store.commit("login",t.authResponse)}),{scope:"public_profile,email"})},logout:function(){this.$store.commit("logout")}},data:function(){return{authResponse:{},showSiteMenu:!1,menu:f}},props:["hero","usp","title","search"]},x=(n(375),Object(m.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"page-header"},[n("nav",{staticClass:"topnav"},[n("div",{staticClass:"menu-section sitemenu"},[n("button",{staticClass:"navbutton",attrs:{role:"button"},on:{click:e.toggleSiteMenu}},[e._m(0),e._v(" "),n("ul",{staticClass:"sitemenu-container",class:{"is-active":!0===e.showSiteMenu}},[e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5)])])]),e._v(" "),e._m(6),e._v(" "),n("div",{staticClass:"menu-section usermenu"},[n("ul",{staticClass:"usermenu-container"},[n("li",{staticClass:"menuitem"},[!0!==e.loggedIn?n("button",{staticClass:"create-account",on:{click:e.login}},[n("i",{staticClass:"fas fa-user-plus"}),e._v(" "),n("span",{staticClass:"label"},[e._v("Create Account")])]):e._e(),e._v(" "),!0===e.loggedIn?n("button",{staticClass:"logout",on:{click:e.logout}},[n("i",{staticClass:"fas fa-sign-out-alt"}),e._v(" "),n("span",{staticClass:"label"},[e._v("Logout")])]):e._e()])])])]),e._v(" "),e.hero?n("hero"):e._e(),e._v(" "),e.usp?n("usp"):e._e(),e._v(" "),e.search?n("search-bar"):e._e(),e._v(" "),e.title?n("h1",{staticClass:"page-title"},[e._v(e._s(e.title))]):e._e()],1)}),r,!1,null,"431669d9",null));t.a=x.exports},186:function(e,t,n){var content=n(319);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("eacbcdec",content,!0,{sourceMap:!1})},316:function(e,t,n){"use strict";n(75),n(15),n(59),n(42),n(21),n(18),n(111);var r=n(38),o=n.n(r),c=n(357),m=n.n(c),l={mounted:function(){var e=this;o.a.get("http://localhost:9999/search/indices").then((function(e){return e.data.data})).then((function(t){var n=t.indices,r=t.products;e.s=m.a.Index.load(n),e.p=r}))},data:function(){return{s:null,p:null,term:"",showResults:!1,results:[]}},methods:{searchUpdate:function(){var e=this.s.search("*".concat(this.term,"*"));if(0!==e.length){this.results=[];var t=!0,n=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var m=o.value,l=m.ref,d=this.p[l];if(d){var h=m.matchData.metadata,v={tagsRaw:0,title:0,sku:0};for(var f in h){var _=h[f],x=Object.keys(_).shift();void 0!==v[x]&&(v[x]+=1)}this.results.push({slug:l,sku:d.sku,title:d.title,tags:d.tagsRaw.split(",").join(", "),match:v,matchSummary:k(v)})}}}catch(e){n=!0,r=e}finally{try{t||null==c.return||c.return()}finally{if(n)throw r}}this.showResults=!0}function k(e){var t=[];return e.tagsRaw&&t.push("tags/categories"),e.title&&t.push("title"),e.sku&&t.push("sku"),t.join(", ")}},searchEnd:function(){this.showResults=!1}},props:["variant"]},d=(n(318),n(14)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-search container"},[n("button",{staticClass:"invis-button"},[n("svg",{staticClass:"search icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16.74",height:"16.727",viewBox:"0 0 16.74 16.727"}},[n("path",{attrs:{id:"icon_search",d:"M6.856,13.762a6.83,6.83,0,0,0,3.8-1.156L14.6,16.545a.82.82,0,0,0,1.143,0l.766-.766a.82.82,0,0,0,0-1.143l-3.952-3.925a6.854,6.854,0,1,0-5.7,3.052Zm0-11.024A4.167,4.167,0,1,1,2.689,6.906,4.171,4.171,0,0,1,6.856,2.739Z",transform:"translate(0 -0.05)",fill:"#ff8a80"}})]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.term,expression:"term"}],staticClass:"search-bar",class:e.variant,attrs:{type:"text",placeholder:"e.g. cleanser for dry skin"},domProps:{value:e.term},on:{keyup:e.searchUpdate,input:function(t){t.target.composing||(e.term=t.target.value)}}}),e._v(" "),e.showResults?n("div",{staticClass:"search-results"},[n("ul",{staticClass:"results"},e._l(e.results,(function(t){return n("li",{key:t.title,staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:"/product/"+t.slug}},[n("span",{staticClass:"title"},[e._v(e._s(t.title))]),e._v(" "),n("span",{staticClass:"tags"},[e._v(e._s(t.tags))]),e._v(" "),t.match.sku||t.match.title||t.match.tagsRaw?n("span",{staticClass:"match-summary"},[e._v("- matched your search on "+e._s(t.matchSummary))]):e._e()])])})),0)]):e._e()])])}),[],!1,null,"26ba0e8d",null);t.a=component.exports},318:function(e,t,n){"use strict";var r=n(186);n.n(r).a},319:function(e,t,n){(t=n(29)(!1)).push([e.i,".app-search[data-v-26ba0e8d]{margin:1rem auto;padding-left:1rem;padding-right:1rem;position:relative;background:transparent}.app-search .icon[data-v-26ba0e8d]{position:absolute}.app-search .search.icon[data-v-26ba0e8d]{top:.75rem;right:2rem;padding-left:1rem;border-left:1px solid #ffbcaf;width:2.1rem;margin:auto}.app-search .search-bar[data-v-26ba0e8d]{border:1px solid #ffbcaf;border-radius:2rem;color:#c85a54;display:block;box-sizing:border-box;width:100%;margin:0;padding:.9rem 3.5rem .9rem 3rem;overflow:hidden;font-size:.8rem;position:relative;z-index:10}.app-search .search-bar.frontpage[data-v-26ba0e8d]{border:none;background:#fff}.app-search .search-bar[data-v-26ba0e8d]:focus{outline:none}.app-search .search-bar[data-v-26ba0e8d]::-webkit-input-placeholder{color:#ffbcaf}.app-search .search-bar[data-v-26ba0e8d]::-moz-placeholder{color:#ffbcaf}.app-search .search-bar[data-v-26ba0e8d]:-ms-input-placeholder{color:#ffbcaf}.app-search .search-bar[data-v-26ba0e8d]::-ms-input-placeholder{color:#ffbcaf}.app-search .search-bar[data-v-26ba0e8d]::placeholder{color:#ffbcaf}.app-search .search-results[data-v-26ba0e8d]{background:#fff;position:absolute;z-index:99;top:1.5rem;left:.5rem;right:.5rem;z-index:9;margin:0;padding:1rem;max-height:20rem;overflow-y:scroll}.app-search .search-results .results[data-v-26ba0e8d]{text-align:left}.app-search .search-results .results .item[data-v-26ba0e8d]{margin-bottom:1rem}.app-search .search-results .results .item .item-link[data-v-26ba0e8d]{display:block;margin-bottom:0;padding:.5rem .5rem 0}.app-search .search-results .results .item .title[data-v-26ba0e8d]{font-size:.8rem;color:#ff8a80}@media (min-width:40rem){.app-search .search-results .results .item .title[data-v-26ba0e8d]{font-size:1rem}}.app-search .search-results .results .item .match-summary[data-v-26ba0e8d],.app-search .search-results .results .item .tags[data-v-26ba0e8d]{display:block;margin:0;padding:0 0 0 .5rem;font-size:.7em;color:#888}.invis-button[data-v-26ba0e8d]{position:relative;border:none;background:transparent;outline:none;width:100%}",""]),e.exports=t},320:function(e,t,n){var content=n(368);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("554af6e4",content,!0,{sourceMap:!1})},321:function(e,t,n){var content=n(374);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("04784918",content,!0,{sourceMap:!1})},322:function(e,t,n){var content=n(376);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("91d60b40",content,!0,{sourceMap:!1})},356:function(e,t,n){e.exports=n.p+"img/0ab1b5d.svg"},366:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4NCiAgPGcgaWQ9Ikdyb3VwXzEiIGRhdGEtbmFtZT0iR3JvdXAgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMiAtOTMpIj4NCiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEiIHdpZHRoPSI4IiBoZWlnaHQ9IjYiIHJ4PSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzIgOTMpIiBmaWxsPSIjZWMxNTVhIi8+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV80IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA0IiB3aWR0aD0iOCIgaGVpZ2h0PSIxMCIgcng9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMiAxMDEpIiBmaWxsPSIjZGY5M2FjIi8+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8yIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAyIiB3aWR0aD0iOCIgaGVpZ2h0PSIxMCIgcng9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0MiA5MykiIGZpbGw9IiNkZjkzYWMiLz4NCiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzMiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDMiIHdpZHRoPSI4IiBoZWlnaHQ9IjYiIHJ4PSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDIgMTA1KSIgZmlsbD0iI2VjMTU1YSIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="},367:function(e,t,n){"use strict";var r=n(320);n.n(r).a},368:function(e,t,n){(t=n(29)(!1)).push([e.i,".hero-container{background:#fff7f7;position:relative}.hero-container .hero-body{padding-top:12rem;padding-bottom:12rem;background:none;visibility:hidden}.hero-container .hero{background:#e4c09e url(/hero1-mobile.jpg) 50% no-repeat;background-size-y:500px}@media (min-width:40rem){.hero-container .hero{background-image:url(/hero1.jpg)}}.hero-container>.search{max-width:800px;margin:-2.5rem auto 0;padding-left:1rem;padding-right:1rem}",""]),e.exports=t},369:function(e,t,n){e.exports=n.p+"img/18dbe42.svg"},370:function(e,t,n){e.exports=n.p+"img/2f75b72.svg"},371:function(e,t,n){e.exports=n.p+"img/c327ee5.svg"},372:function(e,t,n){e.exports=n.p+"img/237382a.svg"},373:function(e,t,n){"use strict";var r=n(321);n.n(r).a},374:function(e,t,n){(t=n(29)(!1)).push([e.i,".usp[data-v-36578c18]{background:#fff7f7}.usp .container[data-v-36578c18]{padding-bottom:1rem;margin-bottom:0}.usp .container .usp-item-container[data-v-36578c18]{display:grid;grid-template-columns:50% 50%;grid-template-rows:50% 50%}.usp .container .usp-item-container .usp[data-v-36578c18]{text-align:center;padding:.8rem .5rem}.usp .container .usp-item-container .usp .icon[data-v-36578c18]{display:block;margin:0 auto 1rem;height:4rem;width:unset}.usp .container .usp-item-container .usp .label[data-v-36578c18]{display:inline-block;font-weight:400;font-size:.8rem}.usp .container .title-usp[data-v-36578c18]{text-align:center;font-size:1rem;font-weight:700;color:#070668;margin:0 0 2rem;padding:3rem 2rem 0}.usp .container .link-usp[data-v-36578c18]{color:#ff8a80}@media (min-width:768px){.usp .container .usp-item-container[data-v-36578c18]{grid-template-columns:25% 25% 25% 25%}}",""]),e.exports=t},375:function(e,t,n){"use strict";var r=n(322);n.n(r).a},376:function(e,t,n){(t=n(29)(!1)).push([e.i,".page-header[data-v-431669d9]{margin:0;padding:0;position:relative}.page-header .icon.logo[data-v-431669d9]{display:block;margin:0 auto;width:auto}.page-header .icon.logo img[data-v-431669d9]{height:1.5rem;max-width:unset;max-height:unset}.page-header .page-title[data-v-431669d9]{font-size:1.5rem;font-weight:700;text-transform:capitalize;text-align:center;letter-spacing:.1rem;padding:1rem 1rem 2rem}@media (min-width:50rem){.page-header .page-title[data-v-431669d9]{font-size:3rem;padding:2rem 2rem 3rem}}.page-header .topnav[data-v-431669d9]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;position:relative;z-index:2}.page-header .topnav .brand[data-v-431669d9],.page-header .topnav .sitemenu[data-v-431669d9],.page-header .topnav .usermenu[data-v-431669d9]{-webkit-box-flex:0;flex:0 1 33%}.page-header .topnav .menu-section.sitemenu[data-v-431669d9]{text-align:left}@media (min-width:50rem){.page-header .topnav .menu-section.sitemenu[data-v-431669d9]{-webkit-box-flex:1;flex-grow:1}.page-header .topnav .menu-section.sitemenu .icon.main-menu[data-v-431669d9]{display:none}}.page-header .topnav .menu-section.sitemenu .sitemenu-container[data-v-431669d9]{display:block;text-align:left;padding:1rem 0 0;margin:0;list-style:none;background:#fff7f7;position:fixed;top:0;left:-100vw;height:100vh;width:80vw;-webkit-transition:.3s;transition:.3s}@media (min-width:50rem){.page-header .topnav .menu-section.sitemenu .sitemenu-container[data-v-431669d9]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;text-align:center;position:relative;background:transparent;width:unset;height:unset;padding-top:0;left:unset}}.page-header .topnav .menu-section.sitemenu .sitemenu-container.is-active[data-v-431669d9]{left:0}.page-header .topnav .menu-section.sitemenu .sitemenu-container .menuitem[data-v-431669d9]{padding:.5rem;margin:0 .5rem;letter-spacing:.05rem}@media (min-width:50rem){.page-header .topnav .menu-section.sitemenu .sitemenu-container .menuitem[data-v-431669d9]{padding-right:.25rem;-webkit-box-flex:1;flex:1 1 auto;border:none}}.page-header .topnav .menu-section.sitemenu .sitemenu-container .menuitem a[data-v-431669d9],.page-header .topnav .menu-section.sitemenu .sitemenu-container .menuitem figure[data-v-431669d9]{color:#000;font-weight:700;font-size:1.2rem}@media (min-width:50rem){.page-header .topnav .menu-section.sitemenu .sitemenu-container .menuitem a[data-v-431669d9],.page-header .topnav .menu-section.sitemenu .sitemenu-container .menuitem figure[data-v-431669d9]{font-size:.9rem}}.page-header .topnav .menu-section.sitemenu .sitemenu-container .menuitem a.active[data-v-431669d9],.page-header .topnav .menu-section.sitemenu .sitemenu-container .menuitem figure.active[data-v-431669d9]{color:#bf360c}.page-header .topnav .menu-section.brand[data-v-431669d9]{text-align:center}@media (min-width:50rem){.page-header .topnav .menu-section.brand[data-v-431669d9]{display:none}}.page-header .topnav .menu-section.usermenu[data-v-431669d9]{text-align:right}@media (min-width:50rem){.page-header .topnav .menu-section.usermenu .usermenu-container[data-v-431669d9]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}}.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem[data-v-431669d9]{display:inline-block;padding:.5rem;letter-spacing:.05rem}@media (min-width:50rem){.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem[data-v-431669d9]{-webkit-box-flex:0;flex:0 0 auto;padding:.75rem 1rem 1rem 0}}.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem a[data-v-431669d9]{color:#000}.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .create-account[data-v-431669d9],.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .logout[data-v-431669d9]{cursor:pointer;background:none;color:#000;border:none;padding:0}.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .create-account .fas[data-v-431669d9],.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .logout .fas[data-v-431669d9]{font-size:1.2rem;color:#bf360c}@media (min-width:50rem){.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .create-account .fas[data-v-431669d9],.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .logout .fas[data-v-431669d9]{display:none}}.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .create-account .label[data-v-431669d9],.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .logout .label[data-v-431669d9]{display:none;color:#fff}@media (min-width:50rem){.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .create-account .label[data-v-431669d9],.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .logout .label[data-v-431669d9]{display:inline}}@media (min-width:50rem){.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .create-account[data-v-431669d9],.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .logout[data-v-431669d9]{background:#bf360c;color:#fff;border:none;outline:none;font-size:.9rem;font-weight:700;border-radius:.5rem;padding:.4rem .5rem}}@media (min-width:50rem){.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .logout[data-v-431669d9]{background:transparent}}@media (min-width:50rem){.page-header .topnav .menu-section.usermenu .usermenu-container .menuitem .logout .label[data-v-431669d9]{color:#888}}.page-header .topnav .navbutton[data-v-431669d9]{background:transparent;border:0;outline:none}.hero-container[data-v-431669d9]{margin-top:-3rem;margin-bottom:-2rem;z-index:1}@media (min-width:50rem){.hero-container[data-v-431669d9]{margin-top:-3.5rem;margin-bottom:-2.5rem}}",""]),e.exports=t}}]);