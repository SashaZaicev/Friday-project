(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{12:function(e,t,n){e.exports={table:"table_table__2pTFG",tableHeader:"table_tableHeader__2109o",tableHeader_productName:"table_tableHeader_productName__2QwkO",tableHeader_price:"table_tableHeader_price__2cdD3",tableHeader_buttonAdd:"table_tableHeader_buttonAdd__3bRYA",tableBody:"table_tableBody__3kxDr",tableBody_item:"table_tableBody_item__3TOHG"}},15:function(e,t,n){e.exports={header:"header_header__1MIiN",item:"header_item__3Qsd2"}},16:function(e,t,n){e.exports={checkInBlock:"CheckIn_checkInBlock__2KsNS",checkInTitle:"CheckIn_checkInTitle__dtjN2",checkInBtn:"CheckIn_checkInBtn__1K3Jq",help:"CheckIn_help__oEAv9"}},19:function(e,t,n){e.exports={superInput:"SInp_superInput__2rtsD",errorInput:"SInp_errorInput__1-898",error:"SInp_error__1ORjs",content:"SInp_content__2hiDi"}},20:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__NEA4P",errorInput:"SuperInputText_errorInput__28YHC",error:"SuperInputText_error__3iE1R",content:"SuperInputText_content__fTYMP"}},23:function(e,t,n){e.exports={default:"SBtn_default__1M-Mg",red:"SBtn_red__38Fqf"}},24:function(e,t,n){e.exports={default:"SuperButton_default__2xbGp",red:"SuperButton_red__1Jo-0"}},28:function(e,t,n){e.exports={checkbox:"SCBox_checkbox__1gP8d"}},31:function(e,t,n){e.exports={flexMainContainer:"login_flexMainContainer__2c2Iv",forgot:"login_forgot__A4vQ_"}},32:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__SwpSd"}},42:function(e,t,n){e.exports={preloader:"preloader_preloader__NKPnm"}},43:function(e,t,n){e.exports={content:"newPassword_content__RWvov"}},44:function(e,t,n){e.exports={content:"recoverPassword_content__2b9qB"}},50:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(21),s=n.n(a),o=(n(50),n(6)),i=n(5),l=n(8),u=n(16),j=n.n(u),d=n(4),b=n(2),O=n(41),h=n.n(O).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),p=function(e){return h.post("auth/login",e)},x=function(){return h.delete("auth/me")},f=function(){return h.post("auth/me")},m=function(e,t){return h.post("/auth/register/",{email:e,password:t})},_=function(e,t,n){return h.post("auth/forgot",{email:e,from:t,message:n})},g=function(e,t){return h.post("auth/set-new-password",{newPassword:e,token:t})},v={id:"1",login:"",password:"",confirmPassword:"",isSuccess:!1,rememberMe:!1,error:!1,loading:!1,errorServer:""},S="SET_LOGIN",E="SET_ERROR",N="SET_ERR_SERV",w="SET_PASSWORD",C="SET_REPEAT_PASSWORD",T="SET_SUCCESS",y="SET_LOADING",P="SET_REMEMBER_ME",R=function(e){return{type:"SET_SUCCESS",isSuccess:e}},I=function(e){return{type:"SET_LOADING",loading:e}},k=function(e){return{type:E,error:e}},A=function(e){return{type:N,err:e}},M=n(13),B=n(23),G=n.n(B),F=n(0),H=function(e){var t=e.callFunction,n=e.red,r=(e.className,e.name),c=Object(M.a)(e,["callFunction","red","className","name"]),a="".concat(n?G.a.red:G.a.default," ").concat(G.a.default),s=r||"click";return Object(F.jsx)("button",Object(b.a)(Object(b.a)({className:a,onClick:function(){return t?t():""}},c),{},{children:s}))},D=n(28),L=n.n(D),K=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(L.a.checkbox," ").concat(r||"");return Object(F.jsxs)("label",{children:[Object(F.jsx)("input",Object(b.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(F.jsx)("span",{className:L.a.spanClassName,children:c})]})},W=n(19),U=n.n(W),Y=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.info,s=e.error,o=e.className,i=e.spanClassName,l=e.onChangeValue,u=e.value,j=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","info","error","className","spanClassName","onChangeValue","value"]),d="".concat(U.a.error," ").concat(i||""),O="{ ".concat(s?U.a.errorInput:U.a.superInput," ").concat(o);return Object(F.jsxs)("div",{className:U.a.content,children:[Object(F.jsx)("div",{children:Object(F.jsx)("input",Object(b.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value),l&&l(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),"Enter"===e.key&&c&&c()},className:O,value:u},j))}),Object(F.jsxs)("div",{children:[s&&Object(F.jsx)("span",{className:d,children:s}),a&&Object(F.jsx)("span",{children:a})]})]})},V=function(){var e=Object(d.b)(),t=Object(r.useState)("Alex@company.com"),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)("123456789"),o=Object(l.a)(s,2),u=o[0],b=o[1],O=Object(r.useState)("123456789"),h=Object(l.a)(O,2),p=h[0],x=h[1],f=Object(r.useState)(!1),_=Object(l.a)(f,2),g=(_[0],_[1]),v=Object(d.c)((function(e){return e.registration.isSuccess})),S=Object(d.c)((function(e){return e.registration.error})),E=Object(d.c)((function(e){return e.registration.errorServer})),N=Object(d.c)((function(e){return e.registration.loading}));if(v)return Object(F.jsx)(i.a,{to:Pe.LOGIN});var w=""===c&&S?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":"",C=""===u&&S?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":"",T=""===p&&S?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":"";return Object(F.jsxs)("div",{className:j.a.checkInBlock,children:[Object(F.jsx)("h2",{className:j.a.checkInTitle,children:"Registration"}),N?Object(F.jsx)("div",{style:{color:"orange"},children:"loading..."}):S||E?Object(F.jsxs)("div",{style:{color:"red"},children:[" ",E||"\u0423\u041f\u0421 \u043e\u0448\u0438\u0431\u043e\u0447\u043a\u0430..."]}):v?Object(F.jsx)("div",{style:{color:"lime"},children:"Success!"}):Object(F.jsx)("div",{children:Object(F.jsx)("br",{})}),Object(F.jsxs)("label",{children:["Email:",Object(F.jsx)("label",{className:j.a.help,children:"Example: Alex@company.com"}),Object(F.jsx)(Y,{error:w,value:c,onChange:function(e){var t=e.currentTarget.value;a(t)},type:"email",placeholder:"Alex@company.com"})]}),Object(F.jsxs)("label",{children:["Password:",Object(F.jsx)("label",{className:j.a.help,children:"Example: Must be between 8-20 character "}),Object(F.jsx)(Y,{error:C,value:u,onChange:function(e){var t=e.currentTarget.value;b(t)},placeholder:"password"})]}),Object(F.jsxs)("label",{children:["Confirm password:",Object(F.jsx)("label",{className:j.a.help,children:"Example: Must be between 8-20 character "}),Object(F.jsx)(Y,{error:T,value:p,onChange:function(e){var t=e.currentTarget.value;x(t)},placeholder:"confirm password"})]}),Object(F.jsxs)("div",{className:j.a.checkInBtn,children:[Object(F.jsx)(H,{callFunction:function(){""!=u&&""!=p&&""!=c?u===p&&(e(function(e,t){return function(n){m(e,t).then((function(e){n(I(!1)),n(R(!0)),setTimeout((function(){return n(R(!1))}),3e3)})).catch((function(e){console.log(e),n(I(!1)),n(A(e.response.data.error)),setTimeout((function(){return n(A(""))}),3e3)})).catch((function(e){console.log(e),n(I(!1)),n(A(e.response.data.error)),setTimeout((function(){return n(A(""))}),3e3)}))}}(c,u)),e(I(!0))):(e(k(!0)),e(R(!1)))},name:"Register",disabled:!!N}),Object(F.jsx)(K,{onChange:function(e){var t=e.currentTarget.checked;g(t)}})]}),Object(F.jsx)("a",{href:"#/login",children:"Sign In"})]})},q=n(20),J=n.n(q),Q=function(e){var t=e.type,n=e.onChange,r=e.onChangeText,c=e.onKeyPress,a=e.onEnter,s=e.info,o=e.error,i=e.className,l=e.spanClassName,u=e.value,j=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","info","error","className","spanClassName","value"]),d="".concat(J.a.error," ").concat(l||""),O="{ ".concat(o?J.a.errorInput:J.a.superInput," ").concat(i);return Object(F.jsxs)("div",{className:J.a.content,children:[Object(F.jsx)("div",{children:Object(F.jsx)("input",Object(b.a)({type:t,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&a&&a()},className:O,value:u},j))}),Object(F.jsxs)("div",{children:[o&&Object(F.jsx)("span",{className:d,children:o}),s&&Object(F.jsx)("span",{children:s})]})]})},X=n(31),$=n.n(X),z=n(32),Z=n.n(z),ee=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Z.a.checkbox," ").concat(r||"");return Object(F.jsxs)("label",{children:[Object(F.jsx)("input",Object(b.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(F.jsx)("span",{className:Z.a.spanClassName,children:c})]})},te=n(24),ne=n.n(te),re=function(e){var t=e.callFunction,n=e.red,r=(e.className,e.name),c=Object(M.a)(e,["callFunction","red","className","name"]),a="".concat(n?ne.a.red:ne.a.default," ").concat(ne.a.default),s=r||"click";return Object(F.jsx)("button",Object(b.a)(Object(b.a)({className:a,onClick:function(){return t?t():""}},c),{},{children:s}))},ce={name:"",isAuth:!1,errorText:""},ae=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},se=function(){var e=Object(d.b)(),t=Object(r.useState)("nya-admin@nya.nya"),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)("1qazxcvBG"),u=Object(l.a)(s,2),j=u[0],b=u[1],O=Object(r.useState)(!1),h=Object(l.a)(O,2),x=h[0],f=h[1],m=Object(d.c)((function(e){return e.login.errorText}));return Object(d.c)((function(e){return e.login.isAuth}))?Object(F.jsx)(i.a,{to:Pe.PROFILE}):Object(F.jsxs)("div",{className:$.a.flexMainContainer,children:[Object(F.jsx)("h3",{children:"Login Page"}),Object(F.jsx)("div",{children:"Email"}),Object(F.jsx)("div",{children:Object(F.jsx)(Q,{onChangeText:function(e){a(e)},value:c,error:m})}),Object(F.jsx)("div",{children:"Password"}),Object(F.jsx)("div",{children:Object(F.jsx)(Q,{value:j,onChangeText:function(e){b(e)}})}),Object(F.jsxs)("div",{children:[Object(F.jsx)("span",{children:"Remember me"}),Object(F.jsx)(ee,{checked:x,onChangeChecked:function(e){f(e)}})]}),Object(F.jsx)("div",{children:Object(F.jsx)(re,{onClick:function(){var t;e((t={email:c,password:j,rememberMe:x},function(e){p(t).then((function(t){e({type:"login/SET-NAME",name:t.data.name}),e(ae(!0))})).catch((function(t){e(ae(!1)),e({type:"login/SET_ERROR-TEXT",text:t.response.data.error})}))}))},name:"Sign in",error:m})}),Object(F.jsxs)("div",{className:$.a.forgot,children:[Object(F.jsx)("div",{children:Object(F.jsx)(o.b,{to:Pe.PASSWORD_RECOVERY,children:"forgot password?"})}),Object(F.jsx)("div",{children:Object(F.jsx)(o.b,{to:Pe.CHECK_IN,children:"registration"})})]})]})},oe={errorPassMessage:"",passwordStatus:!1,status:!1},ie=function(e){return{type:"newPassword/ERROR_MESSAGE",errorPassMessage:e}},le=function(e){return{type:"newPassword/SET_STATUS",status:e}},ue=n(42),je=n.n(ue),de=n.p+"static/media/PYh.b3402305.gif",be=function(){return Object(F.jsxs)("div",{className:je.a.preloader,children:[" ",Object(F.jsx)("img",{src:de,alt:""})," "]})},Oe=n(43),he=n.n(Oe),pe=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(l.a)(a,2),o=s[0],u=s[1],j=Object(i.g)().token,b=Object(d.c)((function(e){return e.newPassword.passwordStatus})),O=Object(d.c)((function(e){return e.newPassword.errorPassMessage})),h=Object(d.c)((function(e){return e.newPassword.status})),p=Object(d.b)();return b?Object(F.jsx)(i.a,{to:Pe.LOGIN}):Object(F.jsxs)("div",{className:he.a.content,children:[Object(F.jsx)("h3",{children:" NewPassword "}),h?Object(F.jsx)(be,{}):"",Object(F.jsx)("div",{children:" Enter your new password "}),Object(F.jsx)(Q,{type:"password",placeholder:"password",value:n,onChange:function(e){var t=e.currentTarget.value;c(t)}}),Object(F.jsx)("div",{children:" Repeat your new password "}),Object(F.jsx)(Q,{type:"password",placeholder:"password",value:o,onChange:function(e){var t=e.currentTarget.value;u(t)}}),Object(F.jsxs)("div",{children:[" ",O," "]}),Object(F.jsx)(re,{name:"New Password",callFunction:function(){n.length>7?n===o?p(function(e,t){return function(n){n(le(!0)),console.log(e),console.log(t),g(e,t).then((function(e){n(le(!1)),console.log("\u0432 then \u0432\u0441\u0435 \u043e\u043a")})).catch((function(e){n(ie(e.message)),console.log("error "+e.message)})).finally((function(){n({type:"newPassword/SET_PASS_STATUS",passwordStatus:!0})}))}}(n,j)):(p(ie("Passwords don't match")),setTimeout((function(){return p(ie(""))}),3e3)):(p(ie("Password must be 8 or more characters")),setTimeout((function(){return p(ie(""))}),3e3))}})]})},xe=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.login.name})),n=Object(d.c)((function(e){return e.login.isAuth}));return Object(r.useEffect)((function(){n||e((function(e){f().then((function(t){e({type:"login/SET_ME",payload:{name:t.data.name,isAuth:!0}})})).catch((function(e){e.response?e.response.data.error:e.message}))}))}),[]),n?Object(F.jsxs)(F.Fragment,{children:["Profile user ",t,Object(F.jsx)("div",{children:Object(F.jsx)(re,{name:"log out",onClick:function(){e((function(e){x().then((function(){e(ae(!1))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t)}))}))}})})]}):Object(F.jsx)(i.a,{to:Pe.LOGIN})},fe=n(44),me=n.n(fe),_e={email:"",from:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: #00ff00; padding: 15px\">password recovery link: <a href='http://localhost:3000/Friday-project#/new-password/$token$'>link</a></div>",errorMessage:"",infoMessage:"",status:!1},ge=function(e){return{type:"recoverPassword/SET_STATUS",status:e}},ve=function(e){return{type:"recoverPassword/INFO_MESSAGE",infoMessage:e}},Se=function(e){return{type:"recoverPassword/ERROR_MESSAGE",errorMessage:e}},Ee=function(){var e=Object(d.b)(),t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(d.c)((function(e){return e.recoverPassword.from})),o=Object(d.c)((function(e){return e.recoverPassword.message})),i=Object(d.c)((function(e){return e.recoverPassword.infoMessage})),u=Object(d.c)((function(e){return e.recoverPassword.errorMessage})),j=Object(d.c)((function(e){return e.recoverPassword.status})),b=function(t,n,r){e(function(e,t,n){return function(r){r(function(e){return{type:"recoverPassword/CHANGE_EMAIL",email:e}}(e)),console.log(e),r(ge(!0)),_(e,t,n).then((function(e){r(ve(e.data.info)),console.log("then "+e.data.info),setTimeout((function(){return r(ve(""))}),3e3)})).catch((function(e){r(Se(e.response.data.error)),console.log("error "+e.response.data.error),setTimeout((function(){return r(Se(""))}),3e3)})).finally((function(){r(ge(!1))}))}}(t,n,r))};return Object(F.jsxs)("div",{className:me.a.content,children:[j?Object(F.jsx)(be,{}):""," ",Object(F.jsx)("h3",{children:" Enter your email "}),Object(F.jsx)("div",{children:Object(F.jsx)(Q,{type:"text",value:c,info:i,error:u,onChange:function(e){var t=e.currentTarget.value;a(t)}})}),Object(F.jsx)("div",{children:Object(F.jsx)(re,{name:"Recover password",error:u,onClick:function(){return b(c,s,o)},disabled:j})})]})},Ne=function(){return Object(F.jsx)(F.Fragment,{children:"Error"})},we=n(12),Ce=n.n(we),Te=function(){return Object(F.jsxs)(F.Fragment,{children:["Packs table",Object(F.jsxs)("div",{className:Ce.a.table,children:[Object(F.jsxs)("div",{className:Ce.a.tableHeader,children:[Object(F.jsx)("div",{className:Ce.a.tableHeader_packsName,children:"Name"}),Object(F.jsx)("div",{className:Ce.a.tableHeader_price,children:"cardsCount"}),Object(F.jsx)("div",{className:Ce.a.tableHeader_price,children:"cardsCount"}),Object(F.jsx)("div",{className:Ce.a.tableHeader_buttonAdd,children:Object(F.jsx)("button",{children:"add"})})]}),Object(F.jsx)("div",{className:Ce.a.tableBody,children:Object(F.jsxs)("div",{className:Ce.a.tableBody_item,children:[Object(F.jsx)("div",{className:Ce.a.tableBody_item_name,children:'"name"'}),Object(F.jsx)("div",{className:Ce.a.tableBody_item_cardsCount,children:'"cardsCount"'}),Object(F.jsx)("div",{className:Ce.a.tableBody_item_updated,children:'"updated"'}),Object(F.jsxs)("div",{className:Ce.a.tableBody_item_buttons,children:[Object(F.jsx)("button",{children:"del"}),Object(F.jsx)("button",{children:"update"}),Object(F.jsx)("a",{children:"cards"})]})]})})]})]})},ye=function(){return Object(F.jsx)(F.Fragment,{children:"Cards"})},Pe={HOME_PAGE:"/",LOGIN:"/login",NEW_PASSWORD:"/new-password/:token",CHECK_IN:"/check-in",PROFILE:"/profile",PASSWORD_RECOVERY:"/recover_password",TEST_COMPONENT:"/testComponent",PACKS:"/packs",CARDS:"/cards",ERROR_404:"/404"},Re=function(){return Object(F.jsx)("div",{children:Object(F.jsxs)(i.d,{children:[Object(F.jsx)(i.b,{exact:!0,path:Pe.CHECK_IN,render:function(){return Object(F.jsx)(V,{})}}),Object(F.jsx)(i.b,{exact:!0,path:["/",Pe.LOGIN],render:function(){return Object(F.jsx)(se,{})}}),Object(F.jsx)(i.b,{path:Pe.NEW_PASSWORD,render:function(){return Object(F.jsx)(pe,{})}}),Object(F.jsx)(i.b,{exact:!0,path:Pe.PROFILE,render:function(){return Object(F.jsx)(xe,{})}}),Object(F.jsx)(i.b,{exact:!0,path:Pe.PASSWORD_RECOVERY,render:function(){return Object(F.jsx)(Ee,{})}}),Object(F.jsx)(i.b,{exact:!0,path:Pe.PACKS,render:function(){return Object(F.jsx)(Te,{})}}),Object(F.jsx)(i.b,{exact:!0,path:Pe.CARDS,render:function(){return Object(F.jsx)(ye,{})}}),Object(F.jsx)(i.b,{path:Pe.ERROR_404,render:function(){return Object(F.jsx)(Ne,{})}}),Object(F.jsx)(i.a,{from:"*",to:Pe.ERROR_404})]})})},Ie=n(15),ke=n.n(Ie),Ae=function(){return Object(F.jsxs)("div",{className:ke.a.header,children:[Object(F.jsx)("div",{className:ke.a.item,children:Object(F.jsx)(o.b,{to:Pe.CHECK_IN,children:"registration"})}),Object(F.jsx)("div",{className:ke.a.item,children:Object(F.jsx)(o.b,{to:Pe.LOGIN,children:"login"})}),Object(F.jsx)("div",{className:ke.a.item,children:Object(F.jsx)(o.b,{to:Pe.NEW_PASSWORD,children:"new password"})}),Object(F.jsx)("div",{className:ke.a.item,children:Object(F.jsx)(o.b,{to:Pe.PROFILE,children:"profile"})}),Object(F.jsx)("div",{className:ke.a.item,children:Object(F.jsx)(o.b,{to:Pe.PASSWORD_RECOVERY,children:"recover password"})}),Object(F.jsx)("div",{className:ke.a.item,children:Object(F.jsx)(o.b,{to:Pe.PACKS,children:"packs"})}),Object(F.jsx)("div",{className:ke.a.item,children:Object(F.jsx)(o.b,{to:Pe.CARDS,children:"cards"})})]})};var Me=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(o.a,{children:[Object(F.jsx)(Ae,{}),Object(F.jsx)(Re,{})]})})})},Be=(n(75),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),Ge=n(25),Fe=n(45),He={},De=Object(Ge.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET_ERROR-TEXT":return Object(b.a)(Object(b.a)({},e),{},{errorText:t.text});case"login/SET-NAME":return Object(b.a)(Object(b.a)({},e),{},{name:t.name});case"login/SET-IS-LOGGED-IN":return Object(b.a)(Object(b.a)({},e),{},{isAuth:t.value});case"login/SET_ME":return Object(b.a)(Object(b.a)({},e),t.payload);default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(b.a)(Object(b.a)({},e),{},{login:t.login});case w:return Object(b.a)(Object(b.a)({},e),{},{password:t.password});case C:return Object(b.a)(Object(b.a)({},e),{},{confirmPassword:t.repeatPassword});case T:return Object(b.a)(Object(b.a)({},e),{},{isSuccess:t.isSuccess});case y:return Object(b.a)(Object(b.a)({},e),{},{loading:t.loading});case E:return Object(b.a)(Object(b.a)({},e),{},{error:t.error});case N:return Object(b.a)(Object(b.a)({},e),{},{errorServer:t.err});case P:return Object(b.a)(Object(b.a)({},e),{},{rememberMe:t.rememberMe});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"":return{};default:return e}},recoverPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"recoverPassword/CHANGE_EMAIL":return Object(b.a)(Object(b.a)({},e),{},{email:t.email});case"recoverPassword/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});case"recoverPassword/INFO_MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{infoMessage:t.infoMessage});case"recoverPassword/ERROR_MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{errorMessage:t.errorMessage});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"newPassword/ERROR_MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{errorPassMessage:t.errorPassMessage});case"newPassword/SET_PASS_STATUS":return Object(b.a)(Object(b.a)({},e),{},{passwordStatus:t.passwordStatus});case"newPassword/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});default:return e}}}),Le=Object(Ge.c)(De,Object(Ge.a)(Fe.a));window.store=Le,s.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(d.a,{store:Le,children:Object(F.jsx)(Me,{})})}),document.getElementById("root")),Be()}},[[76,1,2]]]);
//# sourceMappingURL=main.e7e9ac3a.chunk.js.map