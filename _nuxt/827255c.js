(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{262:function(t,e,r){"use strict";r.r(e);var n=r(8),l=(r(41),{head:function(){return{title:"".concat(this.article.title)}},data:function(){return{article:{},seeAlso:!1}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles",t.$route.params.slug).fetch();case 2:if(t.article=e.sent,!t.article.seeAlso){e.next=7;break}return e.next=6,t.$content("articles",t.article.seeAlso).only(["title","slug"]).fetch();case 6:t.seeAlso=e.sent;case 7:case"end":return e.stop()}}),e)})))()}}),c=r(28),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.$fetchState.error?r("div",[r("h1",{staticClass:"font-black text-4xl"},[t._v("Error 404")]),t._v("\n    Page not found\n  ")]):r("div",{staticClass:"flex items-center justify-center flex-col"},[r("div",{staticClass:"mb-3 flex items-center justify-center flex-col"},[t.article.image?r("div",{staticClass:"max-w-64"},[r("img",{staticClass:"max-w-xl mb-2",attrs:{src:t.article.image}})]):t._e(),t._v(" "),r("h1",{staticClass:"font-black font-newspaper text-4xl"},[t._v(t._s(t.article.title))]),t._v(" "),r("span",{staticClass:"font-light text-gray-500"},[t._v("By "+t._s(t.article.author))])]),t._v(" "),r("article",{staticClass:"prose"},[r("NuxtContent",{staticClass:"prose flex-1",attrs:{document:t.article}}),t._v(" "),t.seeAlso?r("div",[t._v("\n        See also:\n        "),r("nuxt-link",{attrs:{to:"/history/"+t.seeAlso.slug}},[t._v(t._s(t.seeAlso.title))])],1):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);