(this["webpackJsonp14.1-proyecto-rh-react"]=this["webpackJsonp14.1-proyecto-rh-react"]||[]).push([[0],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),s=a(16),i=a(67),l=a(127),d=a(9),u="[Auth] User has logged in",j="[Auth] User has logged out",b="[Auth] User is auth",m="[Search] User type of search",p="[Search] User search string",h="[Search] User can get the results",f="[Search] Clean the results",O="[Search] Clean the type of the search",x="[Search] User has benn updated o modified one result",v="[Row] User select one row",g="[Row] User unselect row",y="[Modal] User open the Modal options",_="[Modal] User close the Modal options",w="[Modal] User open the Modal Add Employee",C="[Modal] User close the Modal Add Employee",N="[Enviroment] Development enviroment",S="[Enviroment] Production enviroment",k={isAuth:!1},E=a(25),A={typeToSearch:"",toSearch:"",results:"",isModified:!1},M={rowSelected:{}},T={open:!1,openAdd:!1},D={development:!0},I=Object(i.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.payload),{},{isAuth:!0});case j:return{isAuth:!1};case b:return Object(d.a)(Object(d.a)({},e),{},{isAuth:!0});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(d.a)(Object(d.a)({},e),{},{typeToSearch:t.payload});case p:return Object(d.a)(Object(d.a)({},e),{},{toSearch:t.payload});case h:return Object(d.a)(Object(d.a)({},e),{},{results:Object(E.a)(t.payload)});case f:return Object(d.a)(Object(d.a)({},e),{},{results:[]});case O:return Object(d.a)(Object(d.a)({},e),{},{typeToSearch:""});case x:return Object(d.a)(Object(d.a)({},e),{},{isModified:t.payload});default:return e}},row:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(d.a)(Object(d.a)({},e),{},{rowSelected:Object(d.a)({},t.payload)});case g:return Object(d.a)(Object(d.a)({},e),{},{rowSelected:{}});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:case _:return Object(d.a)(Object(d.a)({},e),{},{open:t.payload});case w:case C:return Object(d.a)(Object(d.a)({},e),{},{openAdd:t.payload});default:return e}},enviroment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(d.a)(Object(d.a)({},e),{},{development:!0,uri:t.payload});case S:return Object(d.a)(Object(d.a)({},e),{},{development:!1,uri:t.payload});default:return e}}}),q="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,U=Object(i.d)(I,q(Object(i.a)(l.a))),R=a(21),W=a(20),P=a(27),V=a.n(P),F=a(44),z=a(23),G=a.n(z),L=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"GET",r="".concat(e,"/").concat(t);try{return"GET"===n?fetch(r):fetch(r,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(a)})}catch(o){throw console.log(o),new Error("Ha ocurrido un error a la hora de hacer la petici\xf3n")}},H=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"GET",r="".concat(e,"/").concat(t),o=localStorage.getItem("token")||"";try{return"GET"===n?fetch(r,{method:n,headers:{"x-token":o}}):fetch(r,{method:n,headers:{"x-token":o},body:JSON.stringify(a)})}catch(c){throw console.log(c),new Error("Ha ocurrido un error a la hora de hacer la petici\xf3n")}},B=function(e){return{type:u,payload:e}},J=function(){return{type:b}},K=a(2),X=function(){return Object(K.jsx)("div",{className:"navbar__main",children:Object(K.jsxs)("div",{className:"navbar__main-container",children:[Object(K.jsx)("img",{src:"https://res.cloudinary.com/docq8rbdu/image/upload/v1623369167/hr-project/HrLogo_pt2k32.svg",alt:"logo proyecto",className:"navbar__logo"}),Object(K.jsxs)("div",{className:"navbar__icons-container",children:[Object(K.jsx)(R.b,{to:"/",children:Object(K.jsx)("img",{src:"https://res.cloudinary.com/docq8rbdu/image/upload/v1623370017/hr-project/home_dlrpuc.svg",alt:"home icon",className:"navbar__home-icon"})}),Object(K.jsx)("img",{src:"https://res.cloudinary.com/docq8rbdu/image/upload/v1623370127/hr-project/power-button_tuccds.svg",alt:"home icon",className:"navbar__logout-icon"})]})]})})},Q=function(){return[{id:"1",title:"Modulo Employees",grid:"a",disabled:!1,route:"employees"},{id:"2",title:"Modulo Schools",grid:"b",disabled:!1,route:"schools"},{id:"3",title:"Modulo Absences",grid:"c",disabled:!0,route:""},{id:"4",title:"Modulo Contracts",grid:"d",disabled:!0,route:""},{id:"5",title:"Modulo Enroll",grid:"e",disabled:!0,route:""}].map((function(e){return Object(K.jsx)("div",{className:e.disabled?"dash__modules-option_menu dash__modules-option_disabled":"dash__modules-option_menu dash__modules-option_enabled",style:{gridArea:e.grid},children:e.disabled?Object(K.jsx)("p",{className:"dash__module-link_disabled",children:e.title}):Object(K.jsx)(R.b,{to:"/".concat(e.route),style:{textDecoration:"none"},children:Object(K.jsx)("div",{className:"dash__module-link_enabled",children:e.title})})},e.id)}))},Y=function(){return Object(K.jsx)("div",{className:"dash__right-module",children:Object(K.jsx)(Q,{})})},Z=function(){return Object(K.jsxs)("div",{children:[Object(K.jsx)(X,{}),Object(K.jsxs)("div",{className:"dash__main",children:[Object(K.jsx)("h1",{className:"dash__title-main",children:"Menu principal"}),Object(K.jsxs)("div",{className:"dash__container",children:[Object(K.jsx)("div",{children:Object(K.jsx)("lottie-player",{src:"https://assets2.lottiefiles.com/packages/lf20_pkvo1bxw.json",background:"transparent",speed:"1",style:{width:"100%",height:"450px"},loop:!0,autoplay:!0})}),Object(K.jsx)(Y,{})]})]})]})},$=a(7),ee=function(e){return{type:h,payload:e}},te=function(){return{type:f}},ae=function(e){return{type:x,payload:e}},ne=["https://res.cloudinary.com/docq8rbdu/image/upload/v1623019124/hr-project/SVG/nodejs_original_wordmark_logo_icon_146412_ydnu43.svg","https://res.cloudinary.com/docq8rbdu/image/upload/v1623019124/hr-project/SVG/express_original_wordmark_logo_icon_146528_ogbpwl.svg","https://res.cloudinary.com/docq8rbdu/image/upload/v1623019124/hr-project/SVG/react_original_logo_icon_146374_dfm7xu.svg","https://res.cloudinary.com/docq8rbdu/image/upload/v1623019125/hr-project/SVG/file_type_sass_icon_130182_m1e90b.svg","https://res.cloudinary.com/docq8rbdu/image/upload/v1623019125/hr-project/SVG/redux_original_logo_icon_146365_llkhu8.svg","https://res.cloudinary.com/docq8rbdu/image/upload/v1623021846/hr-project/SVG/file_type_sequelize_icon_130173_zl4wln.svg"],re=[{word:"Mostrar todos",translate:"all"},{word:"Dni",translate:"dni"},{word:"Apellido",translate:"lastname"},{word:"Tel\xe9fono",translate:"phone"}],oe=a(45),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object($.a)(t,2),r=a[0],o=a[1],c=function(){o(e)},s=function(e){var t=e.target;o(Object(d.a)(Object(d.a)({},r),{},Object(oe.a)({},t.name,t.value)))};return[r,s,c]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object($.a)(t,2),r=a[0],o=a[1],c=function(){o(e)},s=function(e){var t=e.target;"rgb(213, 213, 213)"!==t.style.backgroundColor&&(t.style.backgroundColor="#D5D5D5"),o(Object(d.a)(Object(d.a)({},r),{},Object(oe.a)({},t.name,t.value)))};return[r,s,o,c]},ie=a(125),le=a(91),de=a(55),ue=a(197),je=a(68),be=a(90),me=Object(ie.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:150},selectEmpty:{marginTop:e.spacing(2)}}})),pe=function(e){var t=e.multiplesOpt,a=void 0===t?["Sin opciones"]:t,n=e.inputLabel,o=void 0===n?"Descripci\xf3n":n,c=e.textHelper,i=void 0===c?"Ayuda":c,l=me(),d=r.a.useState(""),u=Object($.a)(d,2),j=u[0],b=u[1],p=Object(s.b)();return Object(K.jsxs)(je.a,{className:l.formControl,children:[Object(K.jsx)(le.a,{id:"demo-simple-select-helper-label",children:o}),Object(K.jsxs)(be.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:j,onChange:function(e){var t,a=e.target;b(a.value),p((t=a.value,{type:m,payload:t}))},required:!0,children:[Object(K.jsx)(de.a,{value:"none",children:Object(K.jsx)("em",{children:"None"})}),a.map((function(e){return Object(K.jsx)(de.a,{value:e.translate,children:e.word},e.word+1)}))]}),Object(K.jsx)(ue.a,{children:i})]})},he=function(){var e=Object(s.b)(),t=ce({search:""}),a=Object($.a)(t,2),r=a[0],o=a[1],c=r.search;Object(n.useEffect)((function(){e({type:p,payload:c})}),[e,c]);var i=function(t){t.preventDefault(),e(function(){var e=Object(F.a)(V.a.mark((function e(t,a){var n,r,o,c,s,i,l,d,u;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a().search,r=n.typeToSearch,o=n.toSearch,c=n.results,s=a().enviroment.uri,i="".concat(s.uri,"/employees/search"),l="".concat(r,"/").concat(o),r){e.next=6;break}return e.abrupt("return",G.a.fire("Error","Debe incluir el tipo de b\xfasqueda","error"));case 6:if(o){e.next=8;break}return e.abrupt("return",G.a.fire("Cuidado","Se previno de hacer una b\xfasqueda con el campo vac\xedo","info"));case 8:return c&&t(te()),e.prev=9,e.next=12,H(i,l);case 12:return d=e.sent,e.next=15,d.json();case 15:(u=e.sent).ok?t(ee(Object(E.a)(u.Empleados))):G.a.fire("Error",u.Message,"error"),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(9),console.log(e.t0),G.a.fire("Error","Se produjo un error","error");case 23:case"end":return e.stop()}}),e,null,[[9,19]])})));return function(t,a){return e.apply(this,arguments)}}())};return Object(K.jsxs)("div",{className:"search__container",children:[Object(K.jsxs)("form",{onSubmit:i,className:"search__field-container",children:[Object(K.jsx)("input",{type:"text",placeholder:"Search...",className:"search__input",name:"search",value:c,onChange:o,autoComplete:"off"}),Object(K.jsx)("i",{className:"fas fa-search pointer",onClick:i})]}),Object(K.jsx)(pe,{multiplesOpt:re,inputLabel:"Tipo de b\xfasqueda",textHelper:"Los resultados se mostrar\xe1n abajo"})]})},fe=a(132),Oe=function(){return{type:g}};function xe(e){var t=e.style,a=void 0===t?{height:250}:t,n=e.rows,r=void 0===n?[{id:1,col1:"Hello",col2:"World"}]:n,o=e.columns,c=void 0===o?[{field:"col1",headerName:"Column 1",width:150}]:o,i=Object(s.b)();return Object(K.jsx)("div",{style:a,children:Object(K.jsx)(fe.a,{rows:r,columns:c,pageSize:10,autoPageSize:!0,getRowId:function(e){return e._id||e.id},onRowClick:function(e){return i((t=e.row,{type:v,payload:t}));var t}})})}var ve=a(63),ge={styleShowData:{height:650,width:"80%",margin:"0 auto"},fabStyleEmployee:{top:"-3rem",left:"1rem"},buttonEditStyle:{width:"100%",fontSize:"0.8rem",margin:"0 auto"},buttonRemoveStyle:{width:"50px",fontSize:"0.5rem"}},ye=Object(ie.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),_e=a(240),we=a(233),Ce=a(204),Ne=function(e){var t=e.open,a=e.classes,n=e.handleClose,r=e.body;return Object(K.jsx)("div",{children:Object(K.jsx)(_e.a,{className:a.modal,open:t,onClose:n,closeAfterTransition:!0,BackdropComponent:we.a,BackdropProps:{timeout:500},children:Object(K.jsx)(Ce.a,{in:t,children:Object(K.jsx)("div",{className:a.paper,children:r})})})})},Se=a(109),ke=a(134),Ee=a.n(ke),Ae=function(){return{type:_,payload:!1}},Me=function(){return{type:C,payload:!1}},Te=a(234),De=a(199),Ie=a(201),qe=function(e){var t=e.handleChange,a=e.bool,n=e.name;return Object(K.jsx)(Te.a,{row:!0,children:Object(K.jsx)(De.a,{control:Object(K.jsx)(Ie.a,{checked:a,onChange:t,name:n,color:"secondary"}),label:a?"Empleado Activo":"Empleado Inactivo"})})},Ue=Object(ie.a)((function(e){return{root:{width:"400px",height:"320px",display:"flex",flexWrap:"wrap","& .MuiTextField-root":{margin:e.spacing(1)}},button:{margin:e.spacing(1)}}})),Re=function(e){var t=e.values,a=void 0===t?{id:"",name:"",lastname:"",dni:"",email:"",phone:"",address:"",streetnumber:"",cuil:"",postalcode:"",isactive:""}:t,r=Ue(),o=se(a),c=Object($.a)(o,2),i=c[0],l=c[1],d=Object(s.c)((function(e){return e.enviroment})).uri,u=Object(s.b)(),j=i.id,b=i.name,m=i.lastname,p=i.dni,h=i.email,f=i.phone,O=i.address,x=i.streetnumber,v=i.cuil,g=i.postalcode,y=Object(n.useState)(!0),_=Object($.a)(y,2),w=_[0],C=_[1],N=function(){var e=Object(F.a)(V.a.mark((function e(t){var a,n,r,o,c,s;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="".concat(d.uri,"/employees"),n="update/".concat(j),r=localStorage.getItem("token")||"",o={body:JSON.stringify(i),method:"PUT",headers:{"Content-Type":"application/json","x-token":r}},e.prev=5,e.next=8,fetch("".concat(a,"/").concat(n),o);case 8:return c=e.sent,e.next=11,c.json();case 11:if(!(s=e.sent).ok){e.next=17;break}return u(ae(!0)),e.abrupt("return",G.a.fire("OK",s.Message,"success"));case 17:return e.abrupt("return",G.a.fire("Error",s.Message,"error"));case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:N,children:[Object(K.jsxs)("div",{className:r.root,children:[Object(K.jsx)(Se.a,{label:"Nombre",value:b,name:"name",onChange:l}),Object(K.jsx)(Se.a,{label:"Apellido",value:m,name:"lastname",onChange:l}),Object(K.jsx)(Se.a,{label:"Dni",value:p,name:"dni",onChange:l}),Object(K.jsx)(Se.a,{label:"Cuil",value:v,name:"cuil",onChange:l}),Object(K.jsx)(Se.a,{label:"Email",value:h,name:"email",onChange:l}),Object(K.jsx)(Se.a,{label:"Tel\xe9fono",value:f,name:"phone",onChange:l}),Object(K.jsx)(Se.a,{label:"Calle",value:O,name:"address",onChange:l}),Object(K.jsx)(Se.a,{label:"Altura",value:x,name:"streetnumber",onChange:l}),Object(K.jsx)(Se.a,{label:"C\xf3digo postal",value:g,name:"postalcode",onChange:l}),Object(K.jsx)(qe,{handleChange:function(e){i.isactive=e.target.checked,C(!w)},bool:w,name:"isactive"})]}),Object(K.jsx)(ve.a,{variant:"contained",color:"primary",className:r.button,startIcon:Object(K.jsx)(Ee.a,{}),type:"submit",onClick:function(){u(Ae())},children:"Actualizar"}),w?Object(K.jsx)("strong",{style:{color:"#0A66C2"},children:"Click afuera para salir ;)"}):Object(K.jsx)("strong",{style:{color:"#C51162"},children:"Est\xe1 por dar de baja al empleado"})]})},We=function(){var e=Object(s.c)((function(e){return e.row})).rowSelected,t=Object(s.c)((function(e){return e.modal})).open,a=Object(s.b)(),n=ye();return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("div",{children:Object(K.jsx)(Ne,{classes:n,open:t,handleClose:function(){t&&a(Ae())},body:Object(K.jsx)(Re,{values:e})})}),Object(K.jsx)("div",{className:"employees__buttons-grid",children:Object(K.jsx)(ve.a,{variant:"contained",color:"primary",className:"employees__button-edit",style:ge.buttonEditStyle,onClick:function(){t||a({type:y,payload:!0})},children:"Editar"})})]})},Pe=a(235),Ve=function(e){var t=e.iconClass,a=e.styles,n=e.fabClass,r=void 0===n?"login__fab-Button":n,o=e.onClick;return Object(K.jsx)(Pe.a,{color:"primary","aria-label":"add",className:r,style:a,onClick:o,children:Object(K.jsx)("i",{className:t})})},Fe=function(e,t,a){H(e,t).then((function(e){return e.json()})).then((function(e){return e?a(e.Empleados):G.a.fire("Error","No se encontraron resultados","error")})).catch((function(e){console.log(e),G.a.fire("Error","Ha ocurrido un problema contacte con el administrador","error")}))},ze=a(135),Ge=a.n(ze),Le=Object(ie.a)((function(e){return{root:{width:"400px",height:"320px",display:"flex",flexWrap:"wrap","& .MuiTextField-root":{margin:e.spacing(1)}},button:{margin:e.spacing(1)}}})),He=function(e){var t=e.values,a=void 0===t?{id:"",name:"",lastname:"",dni:"",email:"",phone:"",address:"",streetnumber:"",cuil:"",postalcode:"",isactive:!0}:t,n=Le(),r=se(a),o=Object($.a)(r,2),c=o[0],i=o[1],l=Object(s.b)(),d=Object(s.c)((function(e){return e.enviroment})).uri,u=c.name,j=c.lastname,b=c.dni,m=c.email,p=c.phone,h=c.address,f=c.streetnumber,O=c.cuil,x=c.postalcode,v=function(){var e=Object(F.a)(V.a.mark((function e(t){var a,n,r,o,s;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="".concat(d.uri,"/employees"),"create",n=localStorage.getItem("token")||"",r={body:JSON.stringify(c),method:"POST",headers:{"Content-Type":"application/json","x-token":n}},e.prev=5,e.next=8,fetch("".concat(a,"/").concat("create"),r);case 8:return o=e.sent,e.next=11,o.json();case 11:if(!(s=e.sent).ok){e.next=17;break}return l(ae(!0)),e.abrupt("return",G.a.fire("OK",s.Message,"success"));case 17:return e.abrupt("return",G.a.fire("Error",s.Message,"error"));case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h2",{children:"Dar de alta un nuevo empleado !"}),Object(K.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:v,children:[Object(K.jsxs)("div",{className:n.root,children:[Object(K.jsx)(Se.a,{autoComplete:"off",label:"Nombre",value:u,name:"name",onChange:i}),Object(K.jsx)(Se.a,{autoComplete:"off",label:"Apellido",value:j,name:"lastname",onChange:i}),Object(K.jsx)(Se.a,{autoComplete:"off",label:"Dni",value:b,name:"dni",onChange:i}),Object(K.jsx)(Se.a,{autoComplete:"off",label:"Cuil",value:O,name:"cuil",onChange:i}),Object(K.jsx)(Se.a,{autoComplete:"off",label:"Email",value:m,name:"email",onChange:i}),Object(K.jsx)(Se.a,{autoComplete:"off",label:"Tel\xe9fono",value:p,name:"phone",onChange:i}),Object(K.jsx)(Se.a,{autoComplete:"off",label:"Calle",value:h,name:"address",onChange:i}),Object(K.jsx)(Se.a,{autoComplete:"off",label:"Altura",value:f,name:"streetnumber",onChange:i}),Object(K.jsx)(Se.a,{autoComplete:"off",label:"C\xf3digo postal",value:x,name:"postalcode",onChange:i})]}),Object(K.jsx)(ve.a,{variant:"contained",color:"primary",className:n.button,startIcon:Object(K.jsx)(Ge.a,{}),type:"submit",onClick:function(){l(Me())},children:"Crear"}),Object(K.jsx)("strong",{style:{color:"#0A66C2"},children:"Click afuera para salir ;)"})]})]})},Be=function(){var e=1,t=Object(s.b)(),a=Object(s.c)((function(e){return e.search})),r=a.results,o=a.typeToSearch,c=a.isModified,i=Object(s.c)((function(e){return e.enviroment})).uri,l=Object(s.c)((function(e){return e.auth})).isAuth;Object(n.useEffect)((function(){l&&(t({type:O}),t(te()),t(Oe()))}),[t,l]);var d=Object(n.useState)([]),u=Object($.a)(d,2),j=u[0],b=u[1];Object(n.useEffect)((function(){var e=i.uri;if(c)return Fe(e,"employees/all",b),t(Oe()),t(ae(!1))}),[b,c,t,i]),Object(n.useEffect)((function(){var e=i.uri;"all"===o&&(t(te()),Fe(e,"employees/all",b))}),[o,t,i]),Object(n.useEffect)((function(){if("none"===o)return b([])}),[o]),Object(n.useEffect)((function(){if(r)return b(r)}),[r]);var m=j.map((function(t){return{id:t._id,counter:"".concat(e++),lastname:t.lastname,name:t.name,dni:t.dni,email:t.email,phone:t.phone,addressAndNumber:"".concat(t.address," ").concat(t.streetnumber),address:t.address,streetnumber:t.streetnumber,cuil:t.cuil,postalcode:t.postalcode,isactive:t.isactive}})),p=[{field:"counter",headerName:"#",width:70,disableColumnMenu:!0},{field:"lastname",headerName:"Apellido",width:120},{field:"name",headerName:"Nombre",width:120},{field:"dni",headerName:"DNI",width:100},{field:"email",headerName:"Email",width:170},{field:"phone",headerName:"Tel\xe9fono",width:120},{field:"addressAndNumber",headerName:"Domicilio",width:150},{field:"address",headerName:"address",width:150,hide:!0},{field:"streetnumber",headerName:"streetnumber",width:150,hide:!0},{field:"cuil",headerName:"cuil",width:150,hide:!0},{field:"postalcode",headerName:"postalcode",width:150,hide:!0},{field:"isactive",headerName:"isactive",width:150,hide:!0},{field:"col8",headerName:"Acciones",width:150,renderCell:We,disableColumnMenu:!0}],h=Object(s.c)((function(e){return e.modal})).openAdd,f=ye();return Object(K.jsxs)("div",{children:[Object(K.jsx)(X,{}),Object(K.jsxs)("div",{className:"employees__main-container",children:[Object(K.jsx)("h1",{className:"dash__title-main",children:"Employees Module"}),Object(K.jsx)(he,{}),Object(K.jsx)(xe,{style:ge.styleShowData,rows:m,columns:p})]}),Object(K.jsx)("div",{children:Object(K.jsx)(Ne,{classes:f,open:h,handleClose:function(){h&&t(Me())},body:Object(K.jsx)(He,{})})}),Object(K.jsx)(Ve,{iconClass:"fas fa-plus",styles:ge.fabStyleEmployee,fabClass:"employees__fab-add",onClick:function(){h||t({type:w,payload:!0})}})]})},Je=function(){return Object(K.jsx)("div",{className:"buttons__btn-Login",children:Object(K.jsx)(R.b,{className:"buttons__btn-anchor",to:"/login",children:"Login"})})},Ke=function(){return Object(K.jsx)("div",{className:"buttons__btn-Register",children:Object(K.jsx)(R.b,{className:"buttons__btn-anchor",to:"/register",children:"Registro"})})},Xe=function(){return Object(K.jsx)("div",{className:"description__area-container",children:Object(K.jsxs)("div",{className:"description__container",children:[Object(K.jsx)("h1",{className:"description__title",children:"BASE DE DATOS HR"}),Object(K.jsx)("p",{className:"parraf__black",children:"Una base de datos creada con el fin de compartir la informaci\xf3n de forma r\xe1pida, actualizada y veraz. El fin de este proyecto es netamente EDUCATIVO, los datos que figuran aqu\xed no son reales."}),Object(K.jsx)("p",{children:'El proyecto "HR | DataBase" nace de la necesidad de implementar todo lo aprendido en el curso de Desarrollo Web en un entorno real con necesidades reales. El proyecto est\xe1 en constante desarrollo, por eso las tecnolog\xedas, vistas y la l\xf3gica se ir\xe1n actualizando conforme lo crea conveniente.'}),Object(K.jsxs)("p",{className:"description__anchor-container_version parraf__black",children:["El proyecto inicialmente se encuentra alojado en ",Object(K.jsx)("a",{href:"https://apprrhh.herokuapp.com/",target:"_blank",rel:"noreferrer",children:"CLICK PARA IR A LA VERSI\xd3N 1.0"})]}),Object(K.jsxs)("p",{children:["El principal cambio con respecto a la anterior es la",Object(K.jsx)("span",{className:"parraf__black",children:" implementaci\xf3n del Framework React "}),"para el front-end"]}),Object(K.jsx)("p",{children:"Las principales tecnolog\xedas implementadas son:"}),Object(K.jsx)("ul",{className:"description__ul",children:ne.map((function(e){return Object(K.jsx)("li",{children:Object(K.jsx)("img",{src:"".concat(e),alt:"Teconolog\xeda de programaci\xf3n usados",className:"description_image-teconology"})},e)}))}),Object(K.jsxs)("p",{className:"description__anchor-container_git parraf__black",children:["El Proyecto est\xe1 100% implementado por ",Object(K.jsx)("a",{href:"https://github.com/MatataFerra",target:"_blank",rel:"noreferrer",children:" Matata Ferra "})]}),Object(K.jsxs)("div",{style:{display:"flex"},children:[Object(K.jsx)(Je,{}),Object(K.jsx)(Ke,{})]})]})})},Qe=function(){return Object(K.jsxs)("div",{className:"home__container",children:[Object(K.jsx)("div",{className:"home_image-container",children:Object(K.jsx)("img",{src:"https://res.cloudinary.com/docq8rbdu/image/upload/v1623018100/hr-project/homeVector_powfmw.svg",alt:"Escritorio de trabajo"})}),Object(K.jsx)(Xe,{})]})},Ye=a(241),Ze=a(237),$e=a(143),et=a(238),tt=a(239),at=a(86),nt=a.n(at),rt=a(200),ot=a(236),ct=Object(ie.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function st(){var e=ct(),t=Object(s.b)(),a=ce({email:"doncarlo@mail.com",password:"123456"}),n=Object($.a)(a,2),r=n[0],o=n[1],c=r.email,i=r.password;return Object(K.jsxs)(ot.a,{component:"main",maxWidth:"xs",children:[Object(K.jsx)(Ze.a,{}),Object(K.jsxs)("div",{className:e.paper,children:[Object(K.jsx)(Ye.a,{className:e.avatar,children:Object(K.jsx)(nt.a,{})}),Object(K.jsx)(rt.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(K.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),t(function(e,t){return function(){var a=Object(F.a)(V.a.mark((function a(n,r){var o,c,s,i,l,d,u,j,b,m,p;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=r().enviroment.uri,c=o.uri,a.next=5,L(c,"login",{email:e,password:t},"POST");case 5:return s=a.sent,a.next=8,s.json();case 8:i=a.sent,l=i.ok,d=i.token,u=i.name,j=i.uid,b=i.Message,m=i.errors,l?(localStorage.setItem("token",d),n(B({username:u,uid:j}))):(console.log(m),p=m?Object.values(m)[0].msg:b,G.a.fire({title:"Error",text:p,icon:"error",heightAuto:!1}));case 16:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}(c,i))},children:[Object(K.jsx)(Se.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",autoFocus:!0,value:c,onChange:o}),Object(K.jsx)(Se.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"off",value:i,onChange:o}),Object(K.jsx)(De.a,{control:Object(K.jsx)($e.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(K.jsx)(ve.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(K.jsxs)(et.a,{container:!0,children:[Object(K.jsx)(et.a,{item:!0,xs:!0,children:Object(K.jsx)(R.b,{to:"/",children:"Forgot password?"})}),Object(K.jsx)(et.a,{item:!0,children:Object(K.jsx)(R.b,{to:"/register",children:"Don't have an account? Sign Up"})})]})]})]}),Object(K.jsx)(tt.a,{mt:8})]})}var it=function(){return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(st,{}),Object(K.jsx)(R.b,{to:"/home",children:Object(K.jsx)(Ve,{iconClass:"fas fa-chevron-left",styles:{top:"3rem",left:"1rem"}})})]})},lt=Object(ie.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function dt(){var e=lt(),t=Object(s.b)(),a=ce({username:"matataFerra",email:"matata@mail.com",password:"123456",password2:"123456"}),n=Object($.a)(a,2),r=n[0],o=n[1],c=r.username,i=r.email,l=r.password,d=r.password2;return Object(K.jsxs)(ot.a,{component:"main",maxWidth:"xs",children:[Object(K.jsx)(Ze.a,{}),Object(K.jsxs)("div",{className:e.paper,children:[Object(K.jsx)(Ye.a,{className:e.avatar,children:Object(K.jsx)(nt.a,{})}),Object(K.jsx)(rt.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(K.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),d!==l&&G.a.fire("Error","Contrase\xf1as no coinciden","error"),t(function(e,t,a){return function(){var n=Object(F.a)(V.a.mark((function n(r,o){var c,s,i,l,d,u,j,b,m,p,h;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=o().enviroment.uri,console.log(c.uri),s=c.uri,n.next=6,L(s,"singup",{email:e,password:t,username:a},"POST");case 6:return i=n.sent,n.next=9,i.json();case 9:l=n.sent,d=l.ok,u=l.token,j=l.name,b=l.uid,m=l.Message,p=l.errors,d?(localStorage.setItem("token",u),G.a.fire({title:"Congrats!",text:"Usuario creado con \xe9xito",icon:"success",timer:1e3}),r(B({uid:b,username:j}))):(console.log(p),h=p?Object.values(p)[0].msg:m,G.a.fire({title:"Error",text:h,icon:"error",heightAuto:!1}));case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}(i,l,c))},children:[Object(K.jsxs)(et.a,{container:!0,spacing:2,children:[Object(K.jsx)(et.a,{item:!0,xs:12,children:Object(K.jsx)(Se.a,{autoComplete:"off",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"User Name",autoFocus:!0,value:c,onChange:o})}),Object(K.jsx)(et.a,{item:!0,xs:12,children:Object(K.jsx)(Se.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",value:i,onChange:o})}),Object(K.jsx)(et.a,{item:!0,xs:12,children:Object(K.jsx)(Se.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l,onChange:o})}),Object(K.jsx)(et.a,{item:!0,xs:12,children:Object(K.jsx)(Se.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"current-password",value:d,onChange:o})}),Object(K.jsx)(et.a,{item:!0,xs:12,children:Object(K.jsx)(De.a,{control:Object(K.jsx)($e.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(K.jsx)(ve.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(K.jsx)(et.a,{container:!0,justify:"flex-end",children:Object(K.jsx)(et.a,{item:!0,children:Object(K.jsx)(R.b,{to:"/login",children:"Already have an account? Sign in"})})})]})]}),Object(K.jsx)(tt.a,{mt:5})]})}var ut=function(){return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(dt,{}),Object(K.jsx)(R.b,{to:"/",children:Object(K.jsx)(Ve,{iconClass:"fas fa-chevron-left",styles:{top:"-5rem",left:"1rem"}})})]})},jt=a(203),bt=function(){return Object(K.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"},children:Object(K.jsx)(jt.a,{})})},mt=a(87),pt=["isAuthenticated","component"],ht=function(e){var t=e.isAuthenticated,a=e.component,n=Object(mt.a)(e,pt);return localStorage.setItem("lastPath",n.location.pathname),Object(K.jsx)(W.b,Object(d.a)(Object(d.a)({},n),{},{component:function(e){return t?Object(K.jsx)(a,Object(d.a)({},e)):Object(K.jsx)(W.a,{to:"/"})}}))},ft=["isAuthenticated","component"],Ot=function(e){var t=e.isAuthenticated,a=e.component,n=Object(mt.a)(e,ft);return Object(K.jsx)(W.b,Object(d.a)(Object(d.a)({},n),{},{component:function(e){return t?Object(K.jsx)(W.a,{to:"/dash"}):Object(K.jsx)(a,Object(d.a)({},e))}}))},xt=function(){var e,t,a,r=Object(s.c)((function(e){return e.auth})),o=r.isAuth,c=r.uid,i=Object(s.b)();return i((t="http://localhost:4000/api",a="https://apphr-react.herokuapp.com/api","dev"===(e="prod")?{type:N,payload:{uri:t}}:"prod"===e?{type:S,payload:{uri:a}}:void 0)),Object(n.useEffect)((function(){i(function(){var e=Object(F.a)(V.a.mark((function e(t,a){var n,r,o,c,s,i,l,d,u;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().enviroment.uri,r=n.uri,e.next=5,H(r,"token",{});case 5:return o=e.sent,e.next=8,o.json();case 8:c=e.sent,s=c.ok,i=c.token,l=c.name,d=c.uid,u=c.errors,s?(localStorage.setItem("token",i),t(B({username:l,uid:d}))):(console.log(u),t(J()));case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}),[i]),o?Object(K.jsx)(R.a,{children:Object(K.jsx)("div",{children:Object(K.jsxs)(W.d,{children:[Object(K.jsx)(Ot,{exact:!0,path:"/login",component:it,isAuthenticated:!!c}),Object(K.jsx)(Ot,{exact:!0,path:"/register",component:ut,isAuthenticated:!!c}),Object(K.jsx)(Ot,{exact:!0,path:"/",component:Qe,isAuthenticated:!!c}),Object(K.jsx)(ht,{exact:!0,path:"/employees",component:Be,isAuthenticated:!!c}),Object(K.jsx)(ht,{exact:!0,path:"/dash",component:Z,isAuthenticated:!!c}),Object(K.jsx)(W.a,{to:"/"})]})})}):Object(K.jsx)(bt,{})},vt=function(){return Object(K.jsx)(s.a,{store:U,children:Object(K.jsx)("div",{children:Object(K.jsx)(xt,{})})})};c.a.render(Object(K.jsx)(vt,{}),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.dcb92a18.chunk.js.map