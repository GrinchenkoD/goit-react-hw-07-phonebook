(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{23:function(t,e,n){t.exports={input:"ContactFilter_input__2hKpc",label:"ContactFilter_label__2olPl"}},37:function(t,e,n){},6:function(t,e,n){t.exports={container:"ContactForm_container__1Yoej",title:"ContactForm_title__jEyeS",input:"ContactForm_input__2WXoH",label:"ContactForm_label__2ngQ2",submitBtn:"ContactForm_submitBtn__5mepP"}},64:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),s=(n(37),n(2)),i=n(20),u=n(12),l=n(13),b=n(15),j=n(14),h=n(8),d=n(9),p=n.n(d),m=n(16),O=n(10),f=n.n(O),x=n(3),v=Object(x.b)("contacts/get-contacts-request"),_=Object(x.b)("contacts/get-contacts-success"),C=Object(x.b)("contacts/get-contacts-error"),g=Object(x.b)("contacts/add-contact-request"),y=Object(x.b)("contacts/add-contact-success"),N=Object(x.b)("contacts/add-contact-error"),k=Object(x.b)("contacts/remove-contact-request"),w=Object(x.b)("contacts/remove-contact-success"),F=Object(x.b)("contacts/remove-contact-error"),L=Object(x.b)("contacts/filter-change");f.a.defaults.baseURL="http://localhost:3004";var B=function(t){return function(){var e=Object(m.a)(p.a.mark((function e(n){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(g()),e.prev=1,e.next=4,f.a.post("/contacts",t);case 4:a=e.sent,c=a.data,n(y(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(N(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},S=function(t){return t.contacts.items.filter((function(e){return e.name.toLowerCase().includes(t.contacts.filter.toLowerCase())}))},q=function(t){return t.contacts.items},D=function(t){return t.contacts.filter},P=n(6),T=n.n(P),A=n(1),M={name:"",phone:""},E=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(i.a)({},M),t.handleChange=function(e){var n=e.target.name;t.setState(Object(s.a)({},n,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.contacts.some((function(e){return e.name===t.state.name}))?alert("".concat(t.state.name," is already exist")):(t.props.addContact(t.state),t.setState(Object(i.a)({},M)))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(A.jsxs)("div",{className:T.a.container,children:[Object(A.jsx)("h2",{className:T.a.title,children:"Phonebook"}),Object(A.jsxs)("form",{onSubmit:this.handleSubmit,className:T.a.form,children:[Object(A.jsx)("label",{htmlFor:"name",className:T.a.label,children:"Name"}),Object(A.jsx)("input",{id:"name",type:"text",name:"name",value:e,onChange:this.handleChange,placeholder:"Name*",required:!0,className:T.a.input}),Object(A.jsx)("label",{htmlFor:"phone",className:T.a.label,children:"Number"}),Object(A.jsx)("input",{id:"phone",type:"tel",name:"phone",value:n,onChange:this.handleChange,placeholder:"Phone number*",required:!0,className:T.a.input}),Object(A.jsx)("button",{type:"submit",className:T.a.submitBtn,children:"Add contact"})]})]})}}]),n}(a.Component),I={addContact:B},J=Object(h.b)((function(t){return{contacts:q(t)}}),I)(E),R=n(23),H=n.n(R),K={filterChange:L},Q=Object(h.b)((function(t){return{filter:D(t)}}),K)((function(t){var e=t.filterChange,n=t.filter;return Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{htmlFor:"search",className:H.a.label,children:"Find contacts by name"}),Object(A.jsx)("input",{id:"search",type:"text",className:H.a.input,name:"search",value:n,onChange:function(t){e(t.target.value)},placeholder:"Name*"})]})})),U=n(7),V=n.n(U),W=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleDelete=function(e){var n=e.target.closest("[data-id]").dataset.id;t.props.removeContact(n)},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var t=this,e=this.props.contacts;return Object(A.jsx)(A.Fragment,{children:e.length?Object(A.jsx)("ul",{className:V.a.list,children:e.length>0&&e.map((function(e){return Object(A.jsxs)("li",{"data-id":e.id,className:V.a.item,children:[Object(A.jsx)("div",{className:V.a.textThumb,children:Object(A.jsx)("p",{className:V.a.text,children:e.name})}),Object(A.jsx)("div",{className:V.a.textThumb,children:Object(A.jsx)("p",{className:V.a.text,children:e.phone})}),Object(A.jsx)("button",{type:"button",onClick:t.handleDelete,className:V.a.deleteBtn,children:"Delete"})]},e.id)}))}):Object(A.jsx)("h2",{className:V.a.noContacts,children:"There are no added contacts yet"})})}}]),n}(a.PureComponent),X={addContact:B,getContacts:function(){return function(){var t=Object(m.a)(p.a.mark((function t(e){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(v()),t.prev=1,t.next=4,f.a.get("/contacts");case 4:n=t.sent,a=n.data,e(_(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(C(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},removeContact:function(t){return function(){var e=Object(m.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k()),e.prev=1,e.next=4,f.a.delete("/contacts/".concat(t));case 4:a=e.sent,200===a.status&&n(w(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(F(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},Y=Object(h.b)((function(t){return{contacts:S(t)}}),X)(W);var z,G,Z,$=function(){return Object(A.jsxs)("div",{className:"thumb",children:[Object(A.jsx)(J,{}),Object(A.jsx)(Q,{}),Object(A.jsx)(Y,{})]})},tt=n(17),et=n(5),nt=Object(x.c)([],(z={},Object(s.a)(z,_,(function(t,e){return Object(tt.a)(e.payload)})),Object(s.a)(z,y,(function(t,e){return[].concat(Object(tt.a)(t),[e.payload])})),Object(s.a)(z,w,(function(t,e){return Object(tt.a)(t.filter((function(t){return t.id!==+e.payload})))})),z)),at=Object(x.c)("",Object(s.a)({},L,(function(t,e){return e.payload}))),ct=Object(x.c)(!1,(G={},Object(s.a)(G,F,(function(){return!1})),Object(s.a)(G,w,(function(){return!1})),Object(s.a)(G,k,(function(){return!0})),Object(s.a)(G,N,(function(){return!1})),Object(s.a)(G,y,(function(){return!1})),Object(s.a)(G,g,(function(){return!0})),Object(s.a)(G,C,(function(){return!1})),Object(s.a)(G,_,(function(){return!1})),Object(s.a)(G,v,(function(){return!0})),G)),rt=function(){return null},ot=function(t,e){return e.payload},st=Object(x.c)(null,(Z={},Object(s.a)(Z,v,rt),Object(s.a)(Z,g,rt),Object(s.a)(Z,k,rt),Object(s.a)(Z,C,ot),Object(s.a)(Z,N,ot),Object(s.a)(Z,F,ot),Z)),it={contacts:Object(et.c)({items:nt,filter:at,loading:ct,error:st})},ut=Object(x.a)({reducer:it});o.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(h.a,{store:ut,children:Object(A.jsx)($,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={item:"ContactList_item__1MxNt",textThumb:"ContactList_textThumb__1_evj",text:"ContactList_text__3CB2R",deleteBtn:"ContactList_deleteBtn__1rLky",noContacts:"ContactList_noContacts__3IfaV"}}},[[64,1,2]]]);
//# sourceMappingURL=main.780db11a.chunk.js.map