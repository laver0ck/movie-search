(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=(a(10),a(1)),l=a(2),s=(a(11),function(e){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,e.text))}),u=function(e){var t=e.movie,a="N/A"===t.Poster?"https://www.vuecinemas.nl/thumb?w=268&f=jpg&src=userfiles/file/KLER_Poster_World.jpg&alt=img/movie_placeholder.png":t.Poster;return r.a.createElement("div",{className:"movie"},r.a.createElement("h2",null,t.Title),r.a.createElement("div",null,r.a.createElement("img",{width:"200",alt:"The movie titled: ".concat(t.Title),src:a})),r.a.createElement("p",null,"(",t.Year,")"))},m=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1];return r.a.createElement("form",{className:"search"},r.a.createElement("input",{value:o,onChange:function(e){c(e.target.value)},type:"text"}),r.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(o),c("")},type:"submit",value:"SEARCH"}))},E="https://www.omdbapi.com/?s=man&apikey=".concat("74a51b04"),p={loading:!0,movies:[],errorMessage:null},h=function(e,t){switch(t.type){case"SEARCH_MOVIES_REQUEST":return Object(l.a)({},e,{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return Object(l.a)({},e,{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return Object(l.a)({},e,{loading:!1,errorMessage:t.error});default:return e}},v=function(){var e=Object(n.useReducer)(h,p),t=Object(i.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){fetch(E).then((function(e){return e.json()})).then((function(e){o({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search})}))}),[]);var c=a.movies,l=a.errorMessage,v=a.loading;return r.a.createElement("div",{className:"App"},r.a.createElement(s,{text:"Movie Search"}),r.a.createElement(m,{search:function(e){o({type:"SEARCH_MOVIES_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=").concat("74a51b04")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?o({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search}):o({type:"SEARCH_MOVIES_FAILURE",error:e.Error})}))}}),r.a.createElement("p",{className:"App-intro"},"Sharing a few of our favourite movies"),r.a.createElement("div",{className:"movies"},v&&!l?r.a.createElement("span",null,"loading..."):l?r.a.createElement("div",{className:"errorMessage"},l):c.map((function(e,t){return r.a.createElement(u,{key:"".concat(t,"-").concat(e.Title),movie:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.8de80454.chunk.js.map