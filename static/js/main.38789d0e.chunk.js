(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(8),l=n.n(c),o=(n(14),n(6)),r=n(4),s=n(3),u=n(1);n(15);function d(e){var t=Object(i.useState)(""),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(i.useState)(null),r=Object(u.a)(o,2),s=r[0],d=r[1],f=e.tasks.map((function(t){return a.a.createElement("li",{className:t.isDone?"is-done":"",key:t.id},a.a.createElement("input",{onChange:function(n){e.changeTaskstatus(t.id,n.currentTarget.checked,e.id)},type:"checkbox",checked:t.isDone})," ",a.a.createElement("span",null,t.title),a.a.createElement("button",{onClick:function(){e.removeTask(t.id,e.id)}},"x"))})),m=function(){var t=c.trim();""!==t?e.addTask(t,e.id):d("Title is required"),l("")};return a.a.createElement("div",null,a.a.createElement("h3",null,e.title," ",a.a.createElement("button",{onClick:function(){e.removeTodolist(e.id)}},"x")),a.a.createElement("div",null,a.a.createElement("input",{value:c,onChange:function(e){d(null),l(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&m()},className:s?"error":""}),a.a.createElement("button",{onClick:m},"+"),s&&a.a.createElement("div",{className:"error-message"},s)),a.a.createElement("ul",null,f),a.a.createElement("div",null,a.a.createElement("button",{className:"all"===e.filter?"active-filter":"",onClick:function(){e.changeFilter("all",e.id)}},"all"),a.a.createElement("button",{className:"active"===e.filter?"active-filter":"",onClick:function(){e.changeFilter("active",e.id)}},"Active"),a.a.createElement("button",{className:"completed"===e.filter?"active-filter":"",onClick:function(){e.changeFilter("completed",e.id)}},"Completed")))}var f=n(18);var m=function(){var e,t=Object(f.a)(),n=Object(f.a)(),c=Object(i.useState)([{id:t,title:"wont to bye",filter:"all"},{id:n,title:"wont to milk",filter:"all"}]),l=Object(u.a)(c,2),m=l[0],b=l[1],v=Object(i.useState)((e={},Object(s.a)(e,t,[{id:Object(f.a)(),title:"HTML&CSS",isDone:!0},{id:Object(f.a)(),title:"JS",isDone:!0},{id:Object(f.a)(),title:"ReactJS",isDone:!1},{id:Object(f.a)(),title:"ReactJS",isDone:!1}]),Object(s.a)(e,n,[{id:Object(f.a)(),title:"Milk",isDone:!1},{id:Object(f.a)(),title:"Bread",isDone:!0},{id:Object(f.a)(),title:"eggs",isDone:!1},{id:Object(f.a)(),title:"popi",isDone:!1}]),e)),j=Object(u.a)(v,2),O=j[0],k=j[1];function h(e,t){var n=O[t];O[t]=n.filter((function(t){return t.id!==e})),k(Object(r.a)({},O))}function E(e,t){var n={id:Object(f.a)(),title:e,isDone:!1},i=O[t];O[t]=[n].concat(Object(o.a)(i)),k(Object(r.a)({},O))}function p(e,t){var n=m.find((function(e){return e.id===t}));n&&(n.filter=e,b(Object(o.a)(m)))}function g(e,t,n){var i=O[n].find((function(t){return t.id===e}));i&&(i.isDone=t,k(Object(r.a)({},O)))}function D(e){var t=m.filter((function(t){return t.id!==e}));b(t),delete O[e],k(Object(r.a)({},O))}return a.a.createElement("div",{className:"App"},m.map((function(e){var t=O[e.id];return"active"===e.filter&&(t=O[e.id].filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(t=O[e.id].filter((function(e){return!0===e.isDone}))),a.a.createElement(d,{removeTodolist:D,key:e.id,id:e.id,title:e.title,tasks:t,addTask:E,removeTask:h,changeFilter:p,filter:e.filter,changeTaskstatus:g})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.38789d0e.chunk.js.map