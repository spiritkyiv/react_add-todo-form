(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),c=a(3),s=a(6),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(8),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.email,n=t.name;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},h=function(e){var t=e.todo,a=t.completed,n=t.id,i=t.title,r=t.user;return Object(m.jsxs)("article",{"data-id":n,className:u()("TodoInfo",{"TodoInfo--completed":a}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:i}),r&&Object(m.jsx)(j,{user:r})]})},b=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(h,{todo:e},e.id)}))})};function f(e){return l.find((function(t){return t.id===e}))||null}var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:f(e.userId)})})),p=function(){var e=Object(o.useState)(O),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),s=Object(c.a)(i,2),d=s[0],u=s[1],j=Object(o.useState)(""),h=Object(c.a)(j,2),p=h[0],x=h[1],v=Object(o.useState)(!1),y=Object(c.a)(v,2),S=y[0],N=y[1],_=function(){return d&&function(){var e=Boolean(p.replace(/ /g,"").length);return e||x(""),e}()},g=function(e){return e.reduce((function(e,t){return Math.max(e,t.id)}),0)},I=function(){_()?(n((function(e){return[].concat(Object(r.a)(e),[{id:g(e)+1,title:p,userId:d,completed:!1,user:f(d)}])})),u(0),x(""),N(!1)):N(!0)};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),I()},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title_id",children:"Title:"}),Object(m.jsx)("input",{type:"text","data-cy":"titleInput",name:"title",value:p,id:"title_id",placeholder:"Enter a title",onChange:function(e){var t,a=((t=e.target.value).trim().replace(/[^a-zA-Z\u0400-\u04FF\0-9 ]/g,""),t);x(a)}}),!p&&S&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"user_id",children:"User:"}),Object(m.jsxs)("select",{"data-cy":"userSelect",name:"user",value:d,id:"user_id",onChange:function(e){var t=e.target.value;u(+t)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),!d&&S&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)("section",{className:"TodoList",children:Object(m.jsx)(b,{todos:a})})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.df0297e1.chunk.js.map