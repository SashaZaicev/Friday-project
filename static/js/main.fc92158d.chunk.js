(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{14:function(e,t,n){e.exports={header:"header_header__1MIiN",item:"header_item__3Qsd2"}},15:function(e,t,n){e.exports={checkInBlock:"Registration_checkInBlock__37CH2",checkInTitle:"Registration_checkInTitle__3TEZd",checkInBtn:"Registration_checkInBtn__15ozI",help:"Registration_help__3jHA9",preloader:"Registration_preloader__18kJs"}},16:function(e,t,n){e.exports={errorText:"table_errorText__1s5Er",table:"table_table__2pTFG",tableHeader:"table_tableHeader__2109o",tableHeader_packsName:"table_tableHeader_packsName__3gMzA",tableHeader_cardsCount:"table_tableHeader_cardsCount__13obO",tableHeader_updated:"table_tableHeader_updated__3dRYR",tableHeader_buttonAdd:"table_tableHeader_buttonAdd__3bRYA"}},18:function(e,t,n){e.exports={flexMainContainer:"login_flexMainContainer__2c2Iv",forgot:"login_forgot__A4vQ_",error:"login_error__PzkPb",preloader:"login_preloader__1I6Md",answerServer:"login_answerServer__3Uj6t"}},19:function(e,t,n){e.exports={tableBody:"pack_tableBody__3T-d7",tableBody_name:"pack_tableBody_name__3x6dN",tableBody_cardsCount:"pack_tableBody_cardsCount__1BeWa",tableBody_updated:"pack_tableBody_updated__1HBNm",tableBody_buttons:"pack_tableBody_buttons__1BdDe"}},21:function(e,t,n){e.exports={superInput:"SInp_superInput__2pscb",errorInput:"SInp_errorInput__zmMGM",error:"SInp_error__2HSTs",content:"SInp_content__1A0h8"}},22:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__NEA4P",errorInput:"SuperInputText_errorInput__28YHC",error:"SuperInputText_error__3iE1R",content:"SuperInputText_content__fTYMP"}},23:function(e,t,n){e.exports={content:"recoverPassword_content__2b9qB",error:"recoverPassword_error__1MkyL",preloader:"recoverPassword_preloader__D2nPu",answerServer:"recoverPassword_answerServer__3x3be"}},26:function(e,t,n){e.exports={default:"SBtn_default__19WGv",red:"SBtn_red__2vsnZ"}},27:function(e,t,n){e.exports={default:"SuperButton_default__2xbGp",red:"SuperButton_red__1Jo-0"}},28:function(e,t,n){e.exports={content:"newPassword_content__RWvov",preloader:"newPassword_preloader__6l8u1",answerServer:"newPassword_answerServer__1mZ0s"}},34:function(e,t,n){e.exports={checkbox:"SCBox_checkbox__5EX89"}},37:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__SwpSd"}},38:function(e,t,n){e.exports={flexMainContainer:"profile_flexMainContainer__WpkX-",avatar:"profile_avatar__2BhIb"}},39:function(e,t,n){e.exports={searchTable:"search_searchTable__BUakW",inputSearch:"search_inputSearch__25am4",tableBlock:"search_tableBlock__3vAa3"}},50:function(e,t,n){e.exports={preloader:"preloader_preloader__NKPnm"}},56:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(24),s=n.n(a),o=(n(56),n(5)),i=n(6),l=n(7),u=n(15),d=n.n(u),j=n(3),b=n(2),O=n(33),h=n.n(O),p=h.a.create({withCredentials:!0,baseURL:"http://localhost:7542/2.0/"}),x=h.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),f=function(e){return p.post("auth/login",e)},g=function(){return p.delete("auth/me")},m=function(){return p.post("auth/me")},_=function(e,t){return p.post("/auth/register/",{email:e,password:t})},v=function(e,t,n){return x.post("auth/forgot",{email:e,from:t,message:n})},S=function(e,t){return p.post("auth/set-new-password",{password:e,resetPasswordToken:t})},y=function(e,t,n,r,c,a){return p.get("cards/pack?"+(t?"min=".concat(e,"&max=").concat(t,"&"):"")+(n.length>0?"packName=".concat(n,"&"):"")+(r?"page=".concat(r,"&pageCount=").concat(c,"&"):"")+(a?"sortProducts=".concat(a,"&"):""))},C=function(){return p.post("cards/pack",{cardsPack:{name:"new test pack"}})},w=function(e){return p.delete("cards/pack?id=".concat(e))},T=function(e,t){return p.put("cards/pack",{cardsPack:{_id:e,name:"test pack update"}})},P={id:"1",login:"",password:"",confirmPassword:"",isSuccess:!1,rememberMe:!1,error:!1,loading:!1,errorServer:""},N="SET_LOGIN",E="SET_ERROR",k="SET_ERR_SERV",R="SET_PASSWORD",A="SET_REPEAT_PASSWORD",I="SET_SUCCESS",M="SET_LOADING",B="SET_REMEMBER_ME",G=function(e){return{type:"SET_SUCCESS",isSuccess:e}},L=function(e){return{type:"SET_LOADING",loading:e}},D=function(e){return{type:E,error:e}},H=function(e){return{type:k,err:e}},F=n(12),W=n(26),U=n.n(W),K=n(0),Y=function(e){var t=e.callFunction,n=e.red,r=(e.className,e.name),c=Object(F.a)(e,["callFunction","red","className","name"]),a="".concat(n?U.a.red:U.a.default," ").concat(U.a.default),s=r||"click";return Object(K.jsx)("button",Object(b.a)(Object(b.a)({className:a,onClick:function(){return t?t():""}},c),{},{children:s}))},z=n(34),V=n.n(z),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(V.a.checkbox," ").concat(r||"");return Object(K.jsxs)("label",{children:[Object(K.jsx)("input",Object(b.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(K.jsx)("span",{className:V.a.spanClassName,children:c})]})},J=n(21),Z=n.n(J),q=function(e){var t=e.type,n=e.onChange,r=e.onChangeText,c=e.onKeyPress,a=e.onEnter,s=e.info,o=e.error,i=e.className,l=e.spanClassName,u=e.onChangeValue,d=e.value,j=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","info","error","className","spanClassName","onChangeValue","value"]),O="".concat(Z.a.error," ").concat(l||""),h="{ ".concat(o?Z.a.errorInput:Z.a.superInput," ").concat(i);return Object(K.jsxs)("div",{className:Z.a.content,children:[Object(K.jsx)("div",{children:Object(K.jsx)("input",Object(b.a)({type:t,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value),u&&u(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&a&&a()},className:h,value:d},j))}),Object(K.jsxs)("div",{children:[o&&Object(K.jsx)("span",{className:O,children:o}),s&&Object(K.jsx)("span",{children:s})]})]})},Q=n(50),$=n.n(Q),ee=n.p+"static/media/PYh.b3402305.gif",te=function(){return Object(K.jsxs)("div",{className:$.a.preloader,children:[" ",Object(K.jsx)("img",{src:ee,alt:""})," "]})},ne=function(){var e=Object(j.b)(),t=Object(r.useState)("Alex@company.com"),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)("123456789"),u=Object(l.a)(s,2),b=u[0],O=u[1],h=Object(r.useState)("123456789"),p=Object(l.a)(h,2),x=p[0],f=p[1],g=Object(r.useState)(!1),m=Object(l.a)(g,2),v=(m[0],m[1]),S=Object(j.c)((function(e){return e.registration.isSuccess})),y=Object(j.c)((function(e){return e.registration.error})),C=Object(j.c)((function(e){return e.registration.errorServer})),w=Object(j.c)((function(e){return e.registration.loading}));if(S)return Object(K.jsx)(i.a,{to:dt.LOGIN});var T=""===c&&y?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":"",P=""===b&&y?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":"",N=""===x&&y?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":"";return Object(K.jsxs)("div",{className:d.a.checkInBlock,children:[Object(K.jsxs)("div",{className:d.a.preloader,children:[" ",w?Object(K.jsx)(te,{}):""," "]}),Object(K.jsx)("h2",{className:d.a.checkInTitle,children:"Registration"}),y||C?Object(K.jsxs)("div",{style:{color:"red"},children:[" ",C||"\u0423\u041f\u0421 \u043e\u0448\u0438\u0431\u043e\u0447\u043a\u0430..."]}):S?Object(K.jsx)("div",{style:{color:"lime"},children:"Success!"}):Object(K.jsx)("div",{children:Object(K.jsx)("br",{})}),Object(K.jsxs)("label",{children:["Email:",Object(K.jsx)("div",{className:d.a.help,children:"Example: Alex@company.com"}),Object(K.jsx)(q,{error:T,value:c,onChange:function(e){var t=e.currentTarget.value;a(t)},type:"email",placeholder:"Alex@company.com"})]}),Object(K.jsxs)("label",{children:["Password:",Object(K.jsx)("div",{className:d.a.help,children:"Example: Must be between 8-20 character "}),Object(K.jsx)(q,{error:P,value:b,onChange:function(e){var t=e.currentTarget.value;O(t)},type:"password",placeholder:"password"})]}),Object(K.jsxs)("label",{children:["Confirm password:",Object(K.jsx)("div",{className:d.a.help,children:"Example: Must be between 8-20 character "}),Object(K.jsx)(q,{error:N,value:x,onChange:function(e){var t=e.currentTarget.value;f(t)},type:"password",placeholder:"confirm password"})]}),Object(K.jsxs)("div",{className:d.a.checkInBtn,children:[Object(K.jsx)(Y,{callFunction:function(){""!==b&&""!==x&&""!==c?b===x&&(e(function(e,t){return function(n){_(e,t).then((function(e){n(L(!1)),n(G(!0)),setTimeout((function(){return n(G(!1))}),3e3)})).catch((function(e){console.log(e),n(H(e.response.data.error)),setTimeout((function(){return n(H(""))}),3e3)})).finally((function(){n(L(!1))}))}}(c,b)),e(L(!0))):(e(D(!0)),e(G(!1)))},name:"Register",disabled:!!w}),Object(K.jsx)(X,{onChange:function(e){var t=e.currentTarget.checked;v(t)}})]}),Object(K.jsx)(o.c,{to:dt.LOGIN,children:"Sign In"})]})},re=n(22),ce=n.n(re),ae=function(e){var t=e.type,n=e.onChange,r=e.onChangeText,c=e.onKeyPress,a=e.onEnter,s=e.info,o=e.error,i=e.className,l=e.spanClassName,u=e.value,d=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","info","error","className","spanClassName","value"]),j="".concat(ce.a.error," ").concat(l||""),O="{ ".concat(o?ce.a.errorInput:ce.a.superInput," ").concat(i);return Object(K.jsxs)("div",{className:ce.a.content,children:[Object(K.jsx)("div",{children:Object(K.jsx)("input",Object(b.a)({type:t,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&a&&a()},className:O,value:u},d))}),Object(K.jsxs)("div",{children:[o&&Object(K.jsx)("span",{className:j,children:o}),s&&Object(K.jsx)("span",{children:s})]})]})},se=n(18),oe=n.n(se),ie=n(37),le=n.n(ie),ue=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(le.a.checkbox," ").concat(r||"");return Object(K.jsxs)("label",{children:[Object(K.jsx)("input",Object(b.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(K.jsx)("span",{className:le.a.spanClassName,children:c})]})},de=n(27),je=n.n(de),be=function(e){var t=e.callFunction,n=e.red,r=(e.className,e.name),c=Object(F.a)(e,["callFunction","red","className","name"]),a="".concat(n?je.a.red:je.a.default," ").concat(je.a.default),s=r||"click";return Object(K.jsx)("button",Object(b.a)(Object(b.a)({className:a,onClick:function(){return t?t():""}},c),{},{children:s}))},Oe={email:"",from:"ai73a@yandex.by",message:"<div style=\"background-color: #00ff00; padding: 15px\">password recovery link: <a href='http://localhost:3000/Friday-project#/new-password/$token$'>link</a></div>",errorMessage:"",infoMessage:"",status:!1},he=function(e){return{type:"recoverPassword/SET_STATUS",status:e}},pe=function(e){return{type:"recoverPassword/INFO_MESSAGE",infoMessage:e}},xe=function(e){return{type:"recoverPassword/ERROR_MESSAGE",errorMessage:e}},fe={name:"",isAuth:!1,errorText:""},ge=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},me=function(e){return{type:"login/SET_ERROR-TEXT",text:e}},_e=function(){return function(e){e(he(!0)),m().then((function(t){e({type:"login/SET_ME",payload:{name:t.data.name,isAuth:!0}})})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(me(n)),setTimeout((function(){return e(me(""))}),3e3)})).finally((function(){e(he(!1))}))}},ve=function(){var e=Object(j.b)(),t=Object(r.useState)("nya-admin@nya.nya"),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)("1qazxcvBG"),u=Object(l.a)(s,2),d=u[0],b=u[1],O=Object(r.useState)(!1),h=Object(l.a)(O,2),p=h[0],x=h[1],g=Object(j.c)((function(e){return e.login.errorText})),m=Object(j.c)((function(e){return e.login.isAuth})),_=Object(j.c)((function(e){return e.recoverPassword.status}));return m?Object(K.jsx)(i.a,{to:dt.PROFILE}):Object(K.jsxs)("div",{className:oe.a.flexMainContainer,children:[Object(K.jsx)("div",{className:oe.a.preloader,children:_?Object(K.jsx)(te,{}):""})," ",Object(K.jsx)("h2",{children:"Login Page"}),Object(K.jsx)("div",{className:oe.a.answerServer,children:g&&Object(K.jsx)("span",{className:oe.a.error,children:g})}),Object(K.jsx)("div",{children:"Email"}),Object(K.jsx)("div",{children:Object(K.jsx)(ae,{onChangeText:function(e){a(e)},value:c})}),Object(K.jsx)("div",{children:"Password"}),Object(K.jsx)("div",{children:Object(K.jsx)(ae,{type:"password",value:d,onChangeText:function(e){b(e)}})}),Object(K.jsxs)("div",{children:[Object(K.jsx)("span",{children:"Remember me"}),Object(K.jsx)(ue,{checked:p,onChangeChecked:function(e){x(e)}})]}),Object(K.jsx)("div",{children:Object(K.jsx)(be,{onClick:function(){var t;e((t={email:c,password:d,rememberMe:p},function(e){e(he(!0)),f(t).then((function(t){e({type:"login/SET-NAME",name:t.data.name}),e(ge(!0))})).catch((function(t){e(ge(!1)),e(me(t.response.data.error)),setTimeout((function(){return e(me(""))}),3e3)})).finally((function(){e(he(!1))}))}))},name:"Sign in",error:g})}),Object(K.jsxs)("div",{className:oe.a.forgot,children:[Object(K.jsx)("div",{children:Object(K.jsx)(o.c,{to:dt.PASSWORD_RECOVERY,children:"forgot password?"})}),Object(K.jsx)("div",{children:Object(K.jsx)(o.c,{to:dt.REGISTRATION,children:"registration"})})]})]})},Se={errorPassMessage:"",passwordStatus:!1,status:!1},ye=function(e){return{type:"newPassword/ERROR_MESSAGE",errorPassMessage:e}},Ce=function(e){return{type:"newPassword/SET_STATUS",status:e}},we=n(28),Te=n.n(we),Pe=function(){var e=Object(j.b)(),t=Object(i.g)(),n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),u=Object(l.a)(o,2),d=u[0],b=u[1],O=Object(i.h)().token,h=Object(j.c)((function(e){return e.newPassword.passwordStatus})),p=Object(j.c)((function(e){return e.newPassword.errorPassMessage})),x=Object(j.c)((function(e){return e.newPassword.status}));return h&&setTimeout((function(){return t.push(dt.LOGIN)}),2e3),Object(K.jsxs)("div",{className:Te.a.content,children:[Object(K.jsx)("div",{className:Te.a.preloader,children:x?Object(K.jsx)(te,{}):""}),Object(K.jsx)("h2",{children:" NewPassword "}),Object(K.jsxs)("div",{className:Te.a.answerServer,children:[" ",p," "]}),Object(K.jsx)("div",{children:" Enter your new password "}),Object(K.jsx)(ae,{type:"password",placeholder:"password",value:a,onChange:function(e){var t=e.currentTarget.value;s(t)}}),Object(K.jsx)("div",{children:" Repeat your new password "}),Object(K.jsx)(ae,{type:"password",placeholder:"password",value:d,onChange:function(e){var t=e.currentTarget.value;b(t)}}),Object(K.jsx)(be,{name:"New Password",callFunction:function(){a.length>7?a===d?e(function(e,t){return function(n){n(Ce(!0)),console.log(e),console.log(t),S(e,t).then((function(e){n({type:"newPassword/SET_PASS_STATUS",passwordStatus:!0}),console.log("\u0432 then \u0432\u0441\u0435 \u043e\u043a")})).catch((function(e){n(ye(e.message)),console.log("error "+e.message)})).finally((function(){n(Ce(!1))}))}}(a,O)):(e(ye("Passwords don't match")),setTimeout((function(){return e(ye(""))}),3e3)):(e(ye("Password must be 8 or more characters")),setTimeout((function(){return e(ye(""))}),3e3))}})]})},Ne=n(38),Ee=n.n(Ne),ke=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.login.name})),n=Object(j.c)((function(e){return e.login.isAuth}));return Object(r.useEffect)((function(){n||e(_e())}),[]),n?Object(K.jsxs)("div",{className:Ee.a.flexMainContainer,children:["Profile user ",t,Object(K.jsx)("div",{children:Object(K.jsx)(be,{name:"log out",onClick:function(){e((function(e){e(he(!0)),g().then((function(){e(ge(!1))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t)})).finally((function(){e(he(!1))}))}))}})}),Object(K.jsx)("div",{className:Ee.a.avatar,children:Object(K.jsx)("img",{src:"https://shutniki.club/wp-content/uploads/2020/01/smeshnye_avatarki_34_17105705.jpg",alt:"avatar"})})]}):Object(K.jsx)(i.a,{to:dt.LOGIN})},Re=n(23),Ae=n.n(Re),Ie=function(){var e=Object(j.b)(),t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(j.c)((function(e){return e.recoverPassword.from})),o=Object(j.c)((function(e){return e.recoverPassword.message})),i=Object(j.c)((function(e){return e.recoverPassword.infoMessage})),u=Object(j.c)((function(e){return e.recoverPassword.errorMessage})),d=Object(j.c)((function(e){return e.recoverPassword.status})),b=function(t,n,r){e(function(e,t,n){return function(r){r(function(e){return{type:"recoverPassword/CHANGE_EMAIL",email:e}}(e)),console.log(e),r(he(!0)),v(e,t,n).then((function(e){r(pe(e.data.info)),console.log("then "+e.data.info),setTimeout((function(){return r(pe(""))}),3e3)})).catch((function(e){r(xe(e.response.data.error)),console.log("error "+e.response.data.error),setTimeout((function(){return r(xe(""))}),3e3)})).finally((function(){r(he(!1))}))}}(t,n,r))};return Object(K.jsxs)("div",{className:Ae.a.content,children:[Object(K.jsx)("div",{className:Ae.a.preloader,children:d?Object(K.jsx)(te,{}):""})," ",Object(K.jsx)("h2",{children:" Enter your email "}),Object(K.jsxs)("div",{children:[Object(K.jsxs)("div",{className:Ae.a.answerServer,children:[" ",u&&Object(K.jsx)("span",{className:Ae.a.error,children:u}),i&&Object(K.jsx)("span",{children:i})," "]}),Object(K.jsx)(ae,{type:"text",value:c,onChange:function(e){var t=e.currentTarget.value;a(t)}})]}),Object(K.jsx)("div",{children:Object(K.jsx)(be,{name:"Recover password",onClick:function(){return b(c,s,o)},disabled:d})})]})},Me=n.p+"static/media/cat_standing_animated.7a5695a9.gif",Be=function(){return Object(K.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"40% 40% 20%",gridTemplateRows:"33% 33% 33%"},children:[Object(K.jsx)("img",{style:{width:"32%",gridColumn:"1/5",gridRow:"3/2"},src:Me,alt:"404 error cat"}),Object(K.jsx)("h1",{style:{marginBottom:"0.5rem",color:"#e32",fontSize:"4rem",lineHeight:"4.15rem",gridColumn:"2/5",gridRow:"1/2"},children:"Oops."}),Object(K.jsx)("h2",{style:{gridArea:"2 / 2 / 2 / 5",color:"#e32",marginTop:0},children:"We can't find the page you're looking for."}),Object(K.jsx)("p",{style:{gridArea:"3 / 2 / 2 / 3",margin:"38px 0 0 0"},children:"It may have expired, or there could be a typo. Maybe you can find what you need from our homepage."}),Object(K.jsx)("button",{title:"Go to LOGIN PAGE",onClick:function(){return Object(K.jsx)(i.a,{to:dt.LOGIN})},style:{gridArea:"3 / 2 / 4 / 3",fontSize:"300%",width:"85%",height:"62%"},children:Object(K.jsx)(o.b,{style:{textDecoration:"none",color:"black"},to:"/",children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})})]})},Ge=n(16),Le=n.n(Ge),De={tableProducts:{items:[],settingsSearch:{minPrice:0,maxPrice:1e3,min:0,max:1e3,searchName:"",sortProducts:"",productTotalCount:10,page:1,pageCount:10},loading:!1}},He="SET_SEARCH_NAME",Fe="SET_LOADING",We="SET_MIN_MAX_ITEM",Ue="SET_PAGE_COUNT",Ke="SET_TOTAL_COUNT",Ye="SET_SORT",ze=function(e){return{type:He,searchName:e}},Ve=function(e,t){return{type:We,min:e,max:t}},Xe=function(e,t){return{type:Ue,newPage:e,newPageCount:t}},Je=function(e){return{type:Ke,productTotalCount:e}},Ze=function(e){return{type:Ye,sortProducts:e}},qe={cardPacks:[]},Qe=function(e,t){return function(n,r){var c=r().search.tableProducts.settingsSearch,a=c.min,s=c.max,o=c.searchName,i=c.page,l=c.pageCount,u=c.sortProducts;n(he(!0)),y(a,s,o,e||i,t||l,u).then((function(e){n({type:"packs/SET-PACKS",packs:e.data.cardPacks}),n(Je(e.data.cardPacksTotalCount))})).catch((function(e){console.log("some err in getPacks")})).finally((function(){n(he(!1))}))}},$e=n(19),et=n.n($e),tt=function(e){var t=e.pack,n=e.packDate,r=Object(j.b)();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)("div",{className:et.a.tableBody,children:[Object(K.jsx)("div",{className:et.a.tableBody_name,children:t.name}),Object(K.jsx)("div",{className:et.a.tableBody_cardsCount,children:t.cardsCount}),Object(K.jsx)("div",{className:et.a.tableBody_updated,children:n}),Object(K.jsxs)("div",{className:et.a.tableBody_buttons,children:[Object(K.jsx)("button",{onClick:function(){var e;r((e=t._id,function(t){w(e).then((function(){t(Qe())})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t)}))}))},children:"del"}),Object(K.jsx)("button",{onClick:function(){var e,n;r((e=t._id,function(t){T(e,n).then((function(){t(Qe())})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t)}))}))},children:"update"}),Object(K.jsx)(o.c,{to:dt.CARDS,children:"cards"})]})]})})},nt=n(39),rt=n.n(nt),ct=n(40),at=function(){var e=Object(j.c)((function(e){return e.search})).tableProducts.settingsSearch,t=e.minPrice,n=e.maxPrice,c=Object(r.useState)([t,n]),a=Object(l.a)(c,2),s=a[0],o=a[1],i=Object(j.b)(),u=function(e){i(Ve(e[0],e[1])),o(e)};return Object(r.useEffect)((function(){u([t,n])}),[t,n]),Object(K.jsx)(ct.Range,{values:s,step:1,min:t,max:n,onChange:function(e){return u(e)},renderTrack:function(e){var r=e.props,c=e.children;return Object(K.jsx)("div",{onMouseDown:r.onMouseDown,onTouchStart:r.onTouchStart,style:Object(b.a)(Object(b.a)({},r.style),{},{height:"36px",display:"flex",width:"90%",margin:"5%"}),children:Object(K.jsx)("div",{ref:r.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:Object(ct.getTrackBackground)({values:s,colors:["#ccc","#548BF4","#ccc"],min:t,max:n}),alignSelf:"center"},children:c})})},renderThumb:function(e){var t=e.index,n=e.props,r=e.isDragged;return Object(K.jsxs)("div",Object(b.a)(Object(b.a)({},n),{},{style:Object(b.a)(Object(b.a)({},n.style),{},{height:"12px",width:"12px",borderRadius:"1px",backgroundColor:"#FFF",justifyContent:"center",alignItems:"center",display:"flex",boxShadow:"0px 2px 6px #AAA"}),children:[Object(K.jsx)("div",{style:{position:"absolute",top:"-28px",color:"#fff",fontWeight:"bold",fontSize:"14px",fontFamily:"Arial,Helvetica Neue,Helvetica,sans-serif",padding:"4px",borderRadius:"4px",backgroundColor:"#548BF4"},children:s[t].toFixed(0)}),Object(K.jsx)("div",{style:{height:"16px",width:"5px",backgroundColor:r?"#548BF4":"#CCC"}})]}))}})},st=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.search})).tableProducts,n=t.settingsSearch;n.page,n.pageCount,n.productTotalCount;return Object(K.jsxs)("div",{className:rt.a.searchTable,children:[Object(K.jsx)("div",{children:Object(K.jsx)("input",{className:rt.a.inputSearch,value:t.settingsSearch.searchName,onChange:function(t){return n=t.currentTarget.value,void e(ze(n));var n},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"})}),Object(K.jsx)("div",{style:{width:"50%"},children:Object(K.jsx)(at,{})}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{onClick:function(){e(Qe())},children:"\u041f\u043e\u0438\u0441\u043a (Search)"})})]})},ot=function(e){for(var t=e.page,n=e.pageCount,r=e.productTotalCount,c=e.getPage,a=e.title,s=void 0===a?"Pagination ":a,o=e.paginationStyle,i=e.buttonStyle,l=e.selectStyle,u=[],d=Math.ceil(r/n),j=function(e){u.push(Object(K.jsx)("button",{style:Object(b.a)({background:t===e?"lime":void 0},i),onClick:function(){return c(e,n)},children:e},e))},O=1;O<=d;O++)j(O);t+4<d&&(u[t+2]=Object(K.jsx)("span",{style:i,children:"- ... -"},t+3),u=u.filter((function(e,n){return n<t+3||n===d-1}))),t>5&&(u[1]=Object(K.jsx)("span",{style:i,children:"- ... -"},2),u=u.filter((function(e,n){return n<2||n>t-4})));return Object(K.jsxs)("div",{style:Object(b.a)(Object(b.a)({margin:"0 10px",minHeight:"50px",justifyContent:"center",alignItems:"center",display:"flex"},o),{},{flexDirection:"column"}),children:[Object(K.jsxs)("div",{children:[s," "]}),Object(K.jsxs)("div",{style:{display:"flex"},children:[Object(K.jsxs)("select",{value:n,onChange:function(e){return c(t,Number(e.currentTarget.value))},style:Object(b.a)(Object(b.a)({},l),{},{marginRight:"5px"}),children:[Object(K.jsx)("option",{value:4,children:"4"}),Object(K.jsx)("option",{value:7,children:"7"}),Object(K.jsx)("option",{value:10,children:"10"}),Object(K.jsx)("option",{value:20,children:"20"}),Object(K.jsx)("option",{value:50,children:"50"})]}),Object(K.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px",display:"flex"},children:Object(K.jsx)("button",{onClick:function(){c(t-1,n)},children:"PREV"})}),u,Object(K.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px",display:"flex"},children:Object(K.jsx)("button",{onClick:function(){c(t+1,n)},children:"NEXT"})})]})]})},it=function(e){var t=e.title,n=(e.arrayData,Object(r.useState)(0)),c=Object(l.a)(n,2),a=c[0],s=c[1],o=Object(j.b)(),i={background:"none",border:"1px solid black",cursor:"pointer",margin:"0",padding:"0"},u=function(e){s(e),o(Ze(e+"item")),o(Qe())},d=0===a?Object(K.jsx)("button",{style:i,onClick:function(){return u(1)},children:"\u25b2"}):Object(K.jsx)("button",{style:i,onClick:function(){return u(0)},children:"\u25bc"});return Object(K.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(K.jsx)("div",{style:{marginRight:"5px",marginLeft:"5px"},children:t}),Object(K.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:d})]})},lt=function(){var e=Object(j.b)(),t=Object(i.g)(),n=Object(j.c)((function(e){return e.login.isAuth})),c=Object(j.c)((function(e){return e.recoverPassword.status})),a=Object(j.c)((function(e){return e.packs.cardPacks})),s=Object(j.c)((function(e){return e.login.errorText})),o=Object(j.c)((function(e){return e.search.tableProducts.settingsSearch})),l=(o.searchName,o.page),u=o.pageCount,d=o.productTotalCount;Object(r.useEffect)((function(){e(n?Qe():_e())}),[e]);var b=a.map((function(e){var t=new Date(e.updated).toLocaleDateString();return Object(K.jsx)(tt,{pack:e,packDate:t},e._id)}));if(!n)return setTimeout((function(){t.push(dt.LOGIN)}),2e3),Object(K.jsxs)("div",{className:Le.a.errorText,children:[" ",s," "]});return Object(K.jsxs)(K.Fragment,{children:[c?Object(K.jsx)(te,{}):""," ",Object(K.jsx)("h5",{children:"Packs page"}),Object(K.jsx)(st,{}),"table",Object(K.jsxs)("div",{className:Le.a.table,children:[Object(K.jsxs)("div",{className:Le.a.tableHeader,children:[Object(K.jsx)("div",{className:Le.a.tableHeader_packsName,children:"Name"}),Object(K.jsx)("div",{className:Le.a.tableHeader_cardsCount,children:Object(K.jsx)(it,{arrayData:a,title:"CardsCount"})}),Object(K.jsx)("div",{className:Le.a.tableHeader_updated,children:"updated"}),Object(K.jsx)("div",{className:Le.a.tableHeader_buttonAdd,children:Object(K.jsx)("button",{onClick:function(){e((function(e){C().then((function(){e(Qe())})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t)}))}))},children:"add"})})]}),b,Object(K.jsx)("div",{style:{width:"100%"},children:Object(K.jsx)(ot,{page:l,pageCount:u,productTotalCount:d,getPage:function(t,n){e(Xe(t,n)),e(Qe(t,n))}})})]})]})},ut=function(){return Object(K.jsx)(K.Fragment,{children:"Cards"})},dt={HOME_PAGE:"/",LOGIN:"/login",NEW_PASSWORD:"/new-password/:token",REGISTRATION:"/registration",PROFILE:"/profile",PASSWORD_RECOVERY:"/recover_password",TEST_COMPONENT:"/testComponent",PACKS:"/packs",CARDS:"/cards",ERROR_404:"/404",SEARCH_TABLE:"/search_table"},jt=function(){return Object(K.jsx)("div",{children:Object(K.jsxs)(i.d,{children:[Object(K.jsx)(i.b,{exact:!0,path:dt.REGISTRATION,render:function(){return Object(K.jsx)(ne,{})}}),Object(K.jsx)(i.b,{exact:!0,path:["/",dt.LOGIN],render:function(){return Object(K.jsx)(ve,{})}}),Object(K.jsx)(i.b,{path:dt.NEW_PASSWORD,render:function(){return Object(K.jsx)(Pe,{})}}),Object(K.jsx)(i.b,{exact:!0,path:dt.PROFILE,render:function(){return Object(K.jsx)(ke,{})}}),Object(K.jsx)(i.b,{exact:!0,path:dt.PASSWORD_RECOVERY,render:function(){return Object(K.jsx)(Ie,{})}}),Object(K.jsx)(i.b,{exact:!0,path:dt.PACKS,render:function(){return Object(K.jsx)(lt,{})}}),Object(K.jsx)(i.b,{exact:!0,path:dt.CARDS,render:function(){return Object(K.jsx)(ut,{})}}),Object(K.jsx)(i.b,{exact:!0,path:dt.SEARCH_TABLE,render:function(){return Object(K.jsx)(st,{})}}),Object(K.jsx)(i.b,{path:dt.ERROR_404,render:function(){return Object(K.jsx)(Be,{})}}),Object(K.jsx)(i.a,{from:"*",to:dt.ERROR_404})]})})},bt=n(14),Ot=n.n(bt),ht=function(){return Object(K.jsxs)("div",{className:Ot.a.header,children:[Object(K.jsx)("div",{className:Ot.a.item,children:Object(K.jsx)(o.c,{to:dt.REGISTRATION,children:"registration"})}),Object(K.jsx)("div",{className:Ot.a.item,children:Object(K.jsx)(o.c,{to:dt.LOGIN,children:"login"})}),Object(K.jsx)("div",{className:Ot.a.item,children:Object(K.jsx)(o.c,{to:dt.NEW_PASSWORD,children:"new password"})}),Object(K.jsx)("div",{className:Ot.a.item,children:Object(K.jsx)(o.c,{to:dt.PROFILE,children:"profile"})}),Object(K.jsx)("div",{className:Ot.a.item,children:Object(K.jsx)(o.c,{to:dt.PASSWORD_RECOVERY,children:"recover password"})}),Object(K.jsx)("div",{className:Ot.a.item,children:Object(K.jsx)(o.c,{to:dt.PACKS,children:"packs"})}),Object(K.jsx)("div",{className:Ot.a.item,children:Object(K.jsx)(o.c,{to:dt.CARDS,children:"cards"})})]})};var pt=function(){return Object(K.jsx)("div",{className:"App",children:Object(K.jsxs)(o.a,{children:[Object(K.jsx)(ht,{}),Object(K.jsx)(jt,{})]})})},xt=(n(82),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),ft=n(29),gt=n(51),mt={},_t=Object(ft.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET_ERROR-TEXT":return Object(b.a)(Object(b.a)({},e),{},{errorText:t.text});case"login/SET-NAME":return Object(b.a)(Object(b.a)({},e),{},{name:t.name});case"login/SET-IS-LOGGED-IN":return Object(b.a)(Object(b.a)({},e),{},{isAuth:t.value});case"login/SET_ME":return Object(b.a)(Object(b.a)({},e),t.payload);default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{login:t.login});case R:return Object(b.a)(Object(b.a)({},e),{},{password:t.password});case A:return Object(b.a)(Object(b.a)({},e),{},{confirmPassword:t.repeatPassword});case I:return Object(b.a)(Object(b.a)({},e),{},{isSuccess:t.isSuccess});case M:return Object(b.a)(Object(b.a)({},e),{},{loading:t.loading});case E:return Object(b.a)(Object(b.a)({},e),{},{error:t.error});case k:return Object(b.a)(Object(b.a)({},e),{},{errorServer:t.err});case B:return Object(b.a)(Object(b.a)({},e),{},{rememberMe:t.rememberMe});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"":return{};default:return e}},recoverPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"recoverPassword/CHANGE_EMAIL":return Object(b.a)(Object(b.a)({},e),{},{email:t.email});case"recoverPassword/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});case"recoverPassword/INFO_MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{infoMessage:t.infoMessage});case"recoverPassword/ERROR_MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{errorMessage:t.errorMessage});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"newPassword/ERROR_MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{errorPassMessage:t.errorPassMessage});case"newPassword/SET_PASS_STATUS":return Object(b.a)(Object(b.a)({},e),{},{passwordStatus:t.passwordStatus});case"newPassword/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case He:return Object(b.a)(Object(b.a)({},e),{},{tableProducts:Object(b.a)(Object(b.a)({},e.tableProducts),{},{settingsSearch:Object(b.a)(Object(b.a)({},e.tableProducts.settingsSearch),{},{searchName:t.searchName})})});case Fe:return Object(b.a)(Object(b.a)({},e),{},{tableProducts:Object(b.a)(Object(b.a)({},e.tableProducts),{},{loading:t.loading})});case We:return Object(b.a)(Object(b.a)({},e),{},{tableProducts:Object(b.a)(Object(b.a)({},e.tableProducts),{},{settingsSearch:Object(b.a)(Object(b.a)({},e.tableProducts.settingsSearch),{},{min:t.min,max:t.max})})});case Ue:return Object(b.a)(Object(b.a)({},e),{},{tableProducts:Object(b.a)(Object(b.a)({},e.tableProducts),{},{settingsSearch:Object(b.a)(Object(b.a)({},e.tableProducts.settingsSearch),{},{page:t.newPage,pageCount:t.newPageCount})})});case Ke:return Object(b.a)(Object(b.a)({},e),{},{tableProducts:Object(b.a)(Object(b.a)({},e.tableProducts),{},{settingsSearch:Object(b.a)(Object(b.a)({},e.tableProducts.settingsSearch),{},{productTotalCount:t.productTotalCount})})});case Ye:return Object(b.a)(Object(b.a)({},e),{},{tableProducts:Object(b.a)(Object(b.a)({},e.tableProducts),{},{settingsSearch:Object(b.a)(Object(b.a)({},e.tableProducts.settingsSearch),{},{sortProducts:t.sortProducts})})});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"packs/SET-PACKS":return Object(b.a)(Object(b.a)({},e),{},{cardPacks:t.packs});default:return e}}}),vt=Object(ft.c)(_t,Object(ft.a)(gt.a));window.store=vt,s.a.render(Object(K.jsx)(c.a.StrictMode,{children:Object(K.jsx)(j.a,{store:vt,children:Object(K.jsx)(pt,{})})}),document.getElementById("root")),xt()}},[[83,1,2]]]);
//# sourceMappingURL=main.fc92158d.chunk.js.map