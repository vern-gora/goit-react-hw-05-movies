"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[623],{623:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var s=r(861),n=r(439),i=r(757),a=r.n(i),o=r(791),l=r(689),c=r(87),u=r(243),v=function(){var e=(0,s.Z)(a().mark((function e(t){var r,s,n,i,o,l,c,v,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("4c3007a9629b6abce42eca24ebb164b2","&language=en-US"),e.prev=1,e.next=4,u.Z.get(r);case 4:return s=e.sent,n=s.data,i=n.poster_path,o=n.title,l=Math.round(10*n.vote_average),c=n.overview,v=n.genres.map((function(e){return e.name})).join(", "),d=n.id,e.abrupt("return",{smallPoster:i,title:o,user_score:l,overview:c,genres:v,id:d});case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),d="MovieDetails_PosterImg__NI8Xr",h="MovieDetails_MovieTitle__Aj4a0",p="MovieDetails_MovieH2__alkX6",m="MovieDetails_MovieH3__ouM7V",x="MovieDetails_MovieText__8Z2Ex",_=r(184),f=function(){var e,t,r=(0,o.useState)(),i=(0,n.Z)(r,2),u=i[0],f=i[1],j=(0,l.TH)(),g=(0,l.UO)().movieId,w=(0,o.useRef)(null!==(e=null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");(0,o.useEffect)((function(){function e(){return(e=(0,s.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(g);case 3:t=e.sent,f(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g]);var b="https://image.tmdb.org/t/p/original/".concat(null===u||void 0===u?void 0:u.smallPoster);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c.rU,{to:w.current,children:"go back"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("img",{src:b,alt:null===u||void 0===u?void 0:u.title,className:d}),(0,_.jsxs)("h1",{className:h,children:[" ",null===u||void 0===u?void 0:u.title]}),(0,_.jsxs)("p",{className:x,children:["User Score: ",null===u||void 0===u?void 0:u.user_score,"%"]}),(0,_.jsx)("h2",{className:p,children:"Overview"}),(0,_.jsx)("p",{className:x,children:null===u||void 0===u?void 0:u.overview}),(0,_.jsx)("h3",{className:m,children:"Genres"}),(0,_.jsx)("p",{className:x,children:null===u||void 0===u?void 0:u.genres})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h3",{className:m,children:"Additional information:"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(c.rU,{to:"cast",children:"Cast "})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.rU,{to:"reviews",children:"Reviews "})})]})]}),(0,_.jsx)(o.Suspense,{children:(0,_.jsx)(l.j3,{})})]})}}}]);
//# sourceMappingURL=623.5daf015c.chunk.js.map