(this["webpackJsonpmovie-seat-booking"]=this["webpackJsonpmovie-seat-booking"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Avengers: Endgame","price":10,"backgroundColor":"#1a1e46","seats":{"row":6,"col":9}},{"id":2,"name":"Joker","price":12,"backgroundColor":"#240603","seats":{"row":8,"col":7}},{"id":3,"name":"Toy Story 4","price":8,"backgroundColor":"#3a1619","seats":{"row":10,"col":10}},{"id":4,"name":"The Lion King","price":9,"backgroundColor":"#867719","seats":{"row":6,"col":10}}]')},,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(10),a(2)),s=a(1),i=["","occupied"];function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];localStorage.setItem("movies",JSON.stringify(e))}s.forEach((function(e){e.theaterSeats=new Array(e.seats.row).fill([]).map((function(t,a){for(var n=[],r=0;r<e.seats.col;r++)n.push({status:i[Math.floor(Math.random()*i.length)]});return n}))}));var m={get:function(){var e=localStorage.getItem("movies");return e?JSON.parse(e):(u(s),s)},update:function(e){return u(e)},clear:function(){return u()}},d=(a(11),function(e){var t=Object(n.useRef)(null),a=Object(n.useRef)(null),c=Object(n.useRef)(null),o=function(){var t=0;e.theaterSeats.forEach((function(e){console.log(e.filter((function(e){return"selected"===e.status}))),t+=e.filter((function(e){return"selected"===e.status})).length})),a.current.innerText=t,c.current.innerText=t*e.price};return Object(n.useEffect)((function(){o()}),[]),r.a.createElement("div",{style:{backgroundColor:e.backgroundColor}},r.a.createElement("div",{className:"container",ref:t},r.a.createElement("div",{className:"screen"}),e.theaterSeats.map((function(t,a){return r.a.createElement("div",{className:"row",key:a},t.map((function(t,n){return r.a.createElement("div",{className:"seat ".concat(t.status),key:"".concat(a-n),onClick:function(t){return function(t,a,n){t.target.classList.contains("seat")&&!t.target.classList.contains("occupied")&&(e.theaterSeats[a][n].status=t.target.classList.toggle("selected")?"selected":""),o(),e.updateMovie(e.theaterSeats)}(t,a,n)}})})))}))),r.a.createElement("p",{className:"text"},"You have selected","  ",r.a.createElement("span",{id:"count",ref:a},"0")," ","seats for a price of $",r.a.createElement("span",{id:"total",ref:c},"0")))}),f=(a(12),function(){return r.a.createElement("ul",{className:"showcase"},r.a.createElement("li",null,r.a.createElement("div",{className:"seat"}),r.a.createElement("small",null,"N/A")),r.a.createElement("li",null,r.a.createElement("div",{className:"seat selected"}),r.a.createElement("small",null,"Selected")),r.a.createElement("li",null,r.a.createElement("div",{className:"seat occupied"}),r.a.createElement("small",null,"Occupied")))});var p=function(){var e=Object(n.useState)(m.get()),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),s=Object(l.a)(o,2),i=s[0],u=s[1],p=Object(n.useRef)(null);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"movie-container"},r.a.createElement("label",null,"Pick a movie:"),r.a.createElement("select",{id:"movie",ref:p,onChange:function(e){u(e.target.value)},defaultValue:"0"},a.map((function(e,t){return r.a.createElement("option",{key:e.id,value:t},"".concat(e.name," ($").concat(e.price,")"))})))),r.a.createElement(f,null),r.a.createElement(d,{key:a[i].id,seats:a[i].seats,price:a[i].price,theaterSeats:a[i].theaterSeats,backgroundColor:a[i].backgroundColor,name:a[i].name,updateMovie:function(e){a[i].theaterSeats=e,c(a),m.update(a)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.b30230aa.chunk.js.map