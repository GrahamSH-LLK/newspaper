(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{263:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(41),{head:function(){return{title:"Home"}},data:function(){return{articles:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles","articles-of-confederation").fetch();case 2:e.t0=e.sent,t.articles=[e.t0];case 4:case"end":return e.stop()}}),e)})))()}}),c=n(28),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-row"},[n("div",[n("lazy-fake-ad")],1),t._v(" "),n("div",{staticClass:"flex flex-1 justify-center items-center flex-col"},[n("h1",{staticClass:"font-black text-4xl mb-2"},[t._v("Featured")]),t._v(" "),n("div",{staticClass:"flex flex-1 justify-center w-7/12"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"bg-gray-100 w-96 break-words rounded-md m-2 p-5"},[n("nuxt-link",{attrs:{to:"/history/"+article.slug}},[n("h1",{staticClass:"font-bold text-2xl"},[t._v("\n              "+t._s(article.title)+"\n            ")])]),t._v(" "),n("span",{staticClass:"font-light text-gray-400"},[t._v("\n            By "+t._s(article.author))]),t._v(" "),n("p",{staticClass:"break-words"},[t._v(t._s(article.description))])],1)})),0),t._v(" "),n("nuxt-link",{staticClass:"font-bold italic",attrs:{to:"/browse"}},[t._v("Read more")])],1),t._v(" "),n("div",[n("lazy-fake-ad")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);