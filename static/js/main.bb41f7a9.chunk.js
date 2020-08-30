(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,a){e.exports={contactList:"list_contactList__2Otwk",list:"list_list___M4xL",delete:"list_delete__1fX2M",enter:"list_enter__2oe0J",enterActive:"list_enterActive__PKinY",exit:"list_exit__2r5Ur",exitActive:"list_exitActive__XI4VB"}},17:function(e,t,a){e.exports={form:"filter_form__27_H4",label:"filter_label__3a7qb",filterInput:"filter_filterInput__2nlSe"}},21:function(e,t,a){e.exports={title:"title_title__2RWeX",appear:"title_appear__1_hAs",appearActive:"title_appearActive__1HbZi"}},26:function(e,t,a){e.exports={enter:"filter_enter__efMDE",enterActive:"filter_enterActive__3wDqX",exit:"filter_exit__3RoV1",exitActive:"filter_exitActive__2Ua1e"}},29:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),i=a(13),o=a(14),u=a(16),m=a(15),s=a(7),_=a(8),b=a.n(_),p=a(41),f=a(4),d=a(42),v="contacts/changeFilter",E=a(5),h={addContact:Object(E.b)("contacts/add",(function(e,t){return{payload:{contact:{id:Object(d.a)(),name:e,number:t}}}})),removeContact:Object(E.b)("contacts/reove"),changeFilter:Object(E.b)(v)},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var a=t.target,n=a.name,c=a.value;e.setState(Object(s.a)({},n,c))},e.preventSubmit=function(e){e.preventDefault()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(p.a,{in:!0,appear:!0,classNames:b.a,timeout:700,unmountOnExit:!0},c.a.createElement("form",{className:b.a.form,onSubmit:this.preventSubmit},c.a.createElement("label",{className:b.a.label},"Name",c.a.createElement("br",null),c.a.createElement("input",{className:b.a.inputName,name:"name",type:"text",onChange:this.handleChange})),c.a.createElement("label",{className:b.a.label},"Number",c.a.createElement("br",null),c.a.createElement("input",{className:b.a.inputNumber,name:"number",type:"text",onChange:this.handleChange})),c.a.createElement("button",{className:b.a.submit,name:"name",onClick:function(){return e.props.clickEvent(e.state.name,e.state.number)},type:"submit"},"Add to contacts")))}}]),a}(n.Component),j={clickEvent:h.addContact},C=Object(f.b)(null,j)(O),y=a(17),N=a.n(y);var x={onChangeFilter:h.changeFilter},g=Object(f.b)((function(e){return{value:e.contacts.filter}}),x)((function(e){var t=e.value,a=e.onChangeFilter;return c.a.createElement("form",{className:N.a.form},c.a.createElement("label",{className:N.a.label},"Find contacts by name",c.a.createElement("br",null),c.a.createElement("input",{className:N.a.filterInput,type:"text",value:t,onChange:function(e){return a(e.target.value)}})))})),A=a(11),k=a.n(A),F=a(25),w=Object(f.b)((function(e,t){var a=e.contacts.items.find((function(e){return e.id===t.id}));return Object(F.a)({},a)}),(function(e,t){return{click:function(){return e(h.removeContact(t.id))}}}))((function(e){var t=e.id,a=e.name,n=e.number,r=e.click;return c.a.createElement("li",{key:t,className:k.a.list},a,": ",n,c.a.createElement("button",{className:k.a.delete,onClick:r}))})),L=a(43);var I,S={hclick:h.removeContact},U=Object(f.b)((function(e){return{filteredArr:e.contacts.items.filter((function(t){return t.name.toLowerCase().includes(e.contacts.filter.toLowerCase())}))}}),S)((function(e){var t=e.filteredArr;return c.a.createElement(L.a,{component:"ul",className:k.a.contactList},t.map((function(e){return c.a.createElement(p.a,{key:e.id,timeout:250,classNames:k.a,unmountOnExit:!0},c.a.createElement(w,{id:e.id}))})))})),J=a(21),X=a.n(J),q=a(26),D=a.n(q),M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(p.a,{in:!0,classNames:X.a,timeout:700,appear:!0,unmountOnExit:!0},c.a.createElement("h2",{className:X.a.title},"Phonebook")),c.a.createElement(C,null),c.a.createElement(p.a,{in:!0,appear:!0,classNames:D.a,timeout:250,unmountOnExit:!0},c.a.createElement(g,null)),c.a.createElement(U,null)))}}]),a}(n.Component),P=a(1),B=a(27),H=Object(E.c)([],(I={},Object(s.a)(I,"contacts/add",(function(e,t){return""===t.payload.contact.name||""===t.payload.contact.number?e:[].concat(Object(B.a)(e),[t.payload.contact])})),Object(s.a)(I,"contacts/reove",(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),I)),R=Object(E.c)("",Object(s.a)({},v,(function(e,t){return t.payload}))),V=Object(P.c)({items:H,filter:R}),Y=Object(P.c)({contacts:V}),K=Object(E.a)({reducer:Y});l.a.render(c.a.createElement(f.a,{store:K},c.a.createElement(M,null)),document.getElementById("root"))},8:function(e,t,a){e.exports={form:"styleContactForm_form__12Yc5",label:"styleContactForm_label__19jLq",submit:"styleContactForm_submit__u-ahu",inputName:"styleContactForm_inputName__2w6dU",inputNumber:"styleContactForm_inputNumber__3feC6",appear:"styleContactForm_appear__PnjjA",appearActive:"styleContactForm_appearActive__2JULU"}}},[[29,1,2]]]);
//# sourceMappingURL=main.bb41f7a9.chunk.js.map