(this.webpackJsonpstroysale=this.webpackJsonpstroysale||[]).push([[0],{78:function(e,t,n){e.exports=n(92)},83:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(10),i=n(24),u=(n(83),n(26)),l=n(47),s=n(41),f=n(28),m=n(15),d=n(29),p=n(127),b=n(129),h=n(64),O=n.n(h),g=n(48);!function(e){e.LOGIN_REQUEST="LOGIN_REQUEST",e.LOGIN_SUCCESS="LOGIN_SUCCESS",e.LOGIN_ERROR="LOGIN_ERROR"}(r||(r={}));var v=function(e){return Object(g.action)(r.LOGIN_SUCCESS,{token:e})},x=function(e){return Object(g.action)(r.LOGIN_ERROR,e)},j=n(42),E=n(6),w=n(130),S=n(128),y=n(132),k=n(131),I=Object(E.a)({root:{"& label.Mui-focused":{color:"#2196F3"},"& .MuiInput-underline:after":{borderBottomColor:"#2196F3"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"#2196F3"}}}})(w.a),R=Object(E.a)({root:{"&$checked":{color:"#2196F3"}},checked:{}})(k.a),N=Object(p.a)({input:{margin:"10px 0"},button:{backgroundColor:"#2196F3",textTransform:"none",marginTop:"30px",marginBottom:"15px","&:hover":{backgroundColor:"#2F80ED"}}}),C=function(e){var t=e.onSubmit,n=e.error,r=Object(a.useState)(""),c=Object(j.a)(r,2),i=c[0],u=c[1],l=Object(a.useState)(""),s=Object(j.a)(l,2),f=s[0],m=s[1],d=Object(a.useState)(""),p=Object(j.a)(d,2),b=p[0],h=p[1],O=Object(a.useState)(""),g=Object(j.a)(O,2),v=g[0],x=g[1],E=function(e,t){0===e.length?h("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"):h(""),0===t.length?x("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"):x("")};console.log(n);var w=N();return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.length>0&&f.length>0?(t&&t({email:i,password:f}),u(""),m("")):E(i,f)}},o.a.createElement(I,{fullWidth:!0,className:w.input,id:"email_input",label:"\u041f\u043e\u0447\u0442\u0430",error:0!==b.length,value:i,onChange:function(e){u(e.currentTarget.value),E(i,f)},variant:"outlined",helperText:b}),o.a.createElement(I,{fullWidth:!0,className:w.input,id:"password_input",error:0!==v.length,label:"\u041f\u0430\u0440\u043e\u043b\u044c",value:f,onChange:function(e){m(e.currentTarget.value),E(i,f)},variant:"outlined",helperText:v}),o.a.createElement(y.a,{control:o.a.createElement(R,{style:{fill:"black"},color:"primary"}),label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"}),o.a.createElement(S.a,{fullWidth:!0,className:w.button,type:"submit",variant:"contained",color:"primary"},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"))};function L(){var e=Object(f.a)(["\n    color: rgba(0, 0, 0, 0.54);\n    font: 300 14px/18px Roboto, sans-serif;\n    text-align: center;\n"]);return L=function(){return e},e}function _(){var e=Object(f.a)(["\n    font: 300 24px/18px Roboto, sans-serif;\n    margin-bottom: 20px;\n    text-align: center;\n"]);return _=function(){return e},e}function G(){var e=Object(f.a)(["\n    align-items: center;\n    background-color: #e10050;\n    border-radius: 40px;\n    display: flex;\n    justify-content: center;\n    height: 40px;\n    margin: 0 auto;\n    width: 40px;\n"]);return G=function(){return e},e}function T(){var e=Object(f.a)(["\n    color: #2196f3;\n    font-size: 14px;\n    text-decoration: none;\n    max-width: 215px;\n    min-width: 130px;\n    &:hover {\n        text-decoration: underline;\n    }\n"]);return T=function(){return e},e}function A(){var e=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 60px;\n"]);return A=function(){return e},e}var U=Object(p.a)({container:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center"},link:{textAlign:"right"}}),F=d.a.div(A()),W=d.a.a(T()),B=d.a.div(G()),Q=d.a.h1(_()),z=d.a.footer(L()),M={LogIn:function(e){var t=e.email,n=e.password;return Object(g.action)(r.LOGIN_REQUEST,{email:t,password:n})},push:m.d},D=Object(u.c)((function(e){var t=e.auth;return{isAuthenticated:t.isAuthenticated,error:t.errors}}),M)((function(e){var t=e.LogIn,n=e.push,r=e.isAuthenticated,c=e.error;Object(a.useEffect)((function(){r&&n("/")}));var i=U();return o.a.createElement(b.a,{className:i.container,maxWidth:"xs"},o.a.createElement(B,null,o.a.createElement(O.a,{style:{fill:"white",fontSize:25}})),o.a.createElement(Q,null,"\u0412\u0445\u043e\u0434 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),o.a.createElement(C,{error:c,onSubmit:function(e){var r=e.email,a=e.password;t({email:r,password:a}),n("/")}}),o.a.createElement(F,null,o.a.createElement(W,{href:"#"},"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"),o.a.createElement(W,{className:i.link,href:"#"},"\u0415\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),o.a.createElement(z,null,"Copyright@ \u0412\u0430\u0448 \u0441\u0430\u0439\u0442 2020."))})),J=n(52),$=n.n(J);function H(){var e=Object(f.a)(["\n    color: #2196f3;\n    text-align: center;\n    font-size: 18px;\n    margin-top: 30px;\n"]);return H=function(){return e},e}function P(){var e=Object(f.a)(["\n    color: #2196f3;\n    text-align: center;\n    font-size: 26px;\n    margin-top: 30px;\n"]);return P=function(){return e},e}var q=d.a.h1(P()),K=d.a.p(H()),V=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(q,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),o.a.createElement(K,null,o.a.createElement($.a,null),"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e",o.a.createElement($.a,null)))},X=Object(u.c)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){var t=!0===e.isAuthenticated?o.a.createElement(l.b,{exact:!0,path:"/",component:V}):o.a.createElement(l.b,{path:"/"},o.a.createElement(l.a,{to:"/login"}));return o.a.createElement(u.a,{store:e.store},o.a.createElement(s.a,{history:e.history},o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/login"},o.a.createElement(D,null)),t)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(23),Z=n.n(Y),ee=n(32),te=n(69),ne=n(61),re=n(19),ae=n(49),oe=function(e){localStorage.setItem("jwt",e)},ce={token:localStorage.getItem("jwt"),isAuthenticated:Boolean(localStorage.getItem("jwt")),loading:!1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.LOGIN_REQUEST:return Object(ae.a)({},e,{loading:!0});case r.LOGIN_SUCCESS:return oe(t.payload.token.token),Object(ae.a)({},e,{},t.payload,{isAuthenticated:!0,loading:!1});case r.LOGIN_ERROR:return Object(ae.a)({},e,{errors:t.payload,loading:!1});default:return e}};function ue(e){var t=e.email,n=e.password,r=[{email:"first@mail.ru",password:"first"},{email:"second@mail.ru",password:"second"}].find((function(e){return e.email===t}));return void 0===r?{status:400,error:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}:void 0!==r&&r.password!==n?{status:400,error:"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439"}:{status:200,result:{user:t,token:"86fasfgfsogHGad"}}}var le=Z.a.mark(me),se=Z.a.mark(de),fe=Z.a.mark(pe);function me(e){var t,n,r;return Z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(re.b)(ue,t);case 4:if(!(n=a.sent).hasOwnProperty("status")||200!==n.status){a.next=11;break}return r=n.result,a.next=9,Object(re.d)(v(r));case 9:a.next=13;break;case 11:return a.next=13,Object(re.d)(x(n.error));case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(1),a.next=19,Object(re.d)(x(a.t0));case 19:case"end":return a.stop()}}),le,null,[[1,15]])}function de(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.e)(r.LOGIN_REQUEST,me);case 2:case"end":return e.stop()}}),se)}function pe(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.a)([Object(re.c)(de)]);case 2:case"end":return e.stop()}}),fe)}var be=pe,he=Z.a.mark(Oe);function Oe(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.a)([Object(re.c)(be)]);case 2:case"end":return e.stop()}}),he)}var ge=function(e){var t=Object(te.a)(),n=Object(ee.e)(function(e){return Object(ee.c)({router:Object(s.b)(e),auth:ie})}(e),{},Object(ee.a)(Object(ne.a)(e),t));return t.run(Oe),n},ve=Object(i.a)(),xe=ge(ve);Object(c.render)(o.a.createElement(X,{history:ve,store:xe}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.811f0619.chunk.js.map