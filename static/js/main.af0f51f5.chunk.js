(this.webpackJsonpprestamos=this.webpackJsonpprestamos||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(4),r=c.n(n),a=c(2),j=(c(9),c(0));var o=function(e){var t=e.titulo;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("header",{className:"encabezado",children:Object(j.jsx)("h1",{children:t})})})},u=function(e){var t=e.docu,c=e.nuevaDocu,n=e.nombre,r=e.nuevoNombre,o=e.contra_vacia,u=e.contra_full,b=e.usu,l=e.cargando,i=Object(s.useState)(!1),d=Object(a.a)(i,2),O=d[0],x=d[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),0===t||""===n||""===o)return console.log("datos incompletos"),void x(!0);b({documento:t,nombre_apellido:n,contrasena:u}),x(!1),l(!0),setTimeout((function(){l(!1)}),5e3)},className:"formulario",children:[Object(j.jsx)("legend",{children:"Datos Personales"}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("label",{children:"Documento"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"number",name:"documento",onChange:function(e){return c(parseInt(e.target.value))}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Nombre y Apellidos"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Contrase\xf1a"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"password",onChange:function(e){u(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Enviar datos"})]}),O?Object(j.jsx)("p",{className:"mensaje_error",children:"datos incompletos"}):null]})})},b=(c(11),function(e){var t=e.usuario,c=e.usu;return e.spinker?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"ventana2",children:Object(j.jsxs)("div",{class:"sk-folding-cube",children:[Object(j.jsx)("div",{class:"sk-cube1 sk-cube"}),Object(j.jsx)("div",{class:"sk-cube2 sk-cube"}),Object(j.jsx)("div",{class:"sk-cube4 sk-cube"}),Object(j.jsx)("div",{class:"sk-cube3 sk-cube"})]})})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"ventana",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"El usuario fue creado"}),Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"Datos del usuario creado: "})}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Documento: "}),t.documento]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Nombres y Apellidos: "}),t.nombre_apellido]}),Object(j.jsx)("button",{onClick:function(e){return c(null)},children:"Cerrar"})]})})})});var l=function(){var e=Object(s.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),l=Object(a.a)(r,2),i=l[0],d=l[1],O=Object(s.useState)(""),x=Object(a.a)(O,2),m=x[0],h=x[1],p=Object(s.useState)(null),v=Object(a.a)(p,2),f=v[0],g=v[1],k=Object(s.useState)(!1),N=Object(a.a)(k,2),y=N[0],D=N[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o,{titulo:"Formulario "}),Object(j.jsx)("div",{className:"cuerpo",children:Object(j.jsx)(u,{docu:c,nuevaDocu:n,nombre:i,nuevoNombre:d,contra_vacia:m,contra_full:h,usuario:f,usu:g,cargando:D})}),null==f?null:Object(j.jsx)(b,{usuario:f,usu:g,spinker:y,cargando:D})]})};r.a.render(Object(j.jsx)(l,{}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.af0f51f5.chunk.js.map