(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(28),i=c.n(n),r=(c(71),c(12)),o=(c(72),c(73),c(109)),j=c(104),d=c(56),l=c.n(d),h=c(57),b=c.n(h),u=c(58),m=c.n(u),O=c(105),p=(c(74),c(39)),x=p.a.initializeApp({apiKey:"AIzaSyBYty3qBGKF8PCxw3vY1OUtke08FmVUlh4",authDomain:"whats-app-clone-4169d.firebaseapp.com",projectId:"whats-app-clone-4169d",storageBucket:"whats-app-clone-4169d.appspot.com",messagingSenderId:"475593444824",appId:"1:475593444824:web:346f71134049900968b6ad",measurementId:"G-VWLX1FZ8BJ"}),v=x.firestore(),f=x.auth(),g=new p.a.auth.GoogleAuthProvider,N=v,S=c(34),C=c(4);var _=function(e){var t,c=e.id,s=e.name,n=e.addNewChat,i=Object(a.useState)(""),j=Object(r.a)(i,2),d=j[0],l=j[1],h=Object(a.useState)(""),b=Object(r.a)(h,2),u=b[0],m=b[1];return Object(a.useEffect)((function(){c&&N.collection("rooms").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){m(e.docs.map((function(e){return e.data()})))}))}),[c]),Object(a.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[]),n?Object(C.jsx)("div",{onClick:function(){var e=prompt("Please Enter Name for Chat");e&&N.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(C.jsx)("h3",{className:"add-new-chat-title",children:"Add New Chat"})}):Object(C.jsx)(S.b,{to:"/rooms/".concat(c),children:Object(C.jsxs)("div",{className:"sidebarChat",children:[Object(C.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(d,".svg")}),Object(C.jsxs)("div",{className:"sidebarChat_info",children:[Object(C.jsx)("h2",{children:s}),Object(C.jsx)("p",{children:null===(t=u[0])||void 0===t?void 0:t.message})]})]})},c)},y=Object(a.createContext)(),w=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(C.jsx)(y.Provider,{value:Object(a.useReducer)(t,c),children:s})},I=function(){return Object(a.useContext)(y)};var E=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),s=c[0],n=c[1],i=I(),d=Object(r.a)(i,2),h=d[0].user;return d[1],Object(a.useEffect)((function(){var e=N.collection("rooms").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(C.jsxs)("div",{className:"sidebar",children:[Object(C.jsxs)("div",{className:"sidebar_header",children:[Object(C.jsx)(o.a,{src:null===h||void 0===h?void 0:h.photoURL}),Object(C.jsxs)("div",{className:"sidebar_headerRight",children:[Object(C.jsx)(j.a,{children:Object(C.jsx)(l.a,{})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(b.a,{})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(m.a,{})})]})]}),Object(C.jsx)("div",{className:"sidebar_search",children:Object(C.jsxs)("div",{className:"sidebar_searchContainer",children:[Object(C.jsx)(O.a,{}),Object(C.jsx)("input",{type:"text",placeholder:"Search or start new chat"})]})}),Object(C.jsxs)("div",{className:"sidebar_chats",children:[Object(C.jsx)(_,{addNewChat:!0}),s.map((function(e){return Object(C.jsx)(_,{id:e.id,name:e.data.name},e.id)}))]})]})},k=c(106),B=c(107),F=c(60),P=c.n(F),T=c(59),D=c.n(T),M=(c(88),c(10));var U=function(){var e,t,c=Object(a.useState)(""),s=Object(r.a)(c,2),n=s[0],i=s[1],d=Object(a.useState)(""),l=Object(r.a)(d,2),h=l[0],b=l[1],u=Object(M.f)().roomId,m=Object(a.useState)(""),x=Object(r.a)(m,2),v=x[0],f=x[1],g=Object(a.useState)([]),S=Object(r.a)(g,2),_=S[0],y=S[1],w=I(),E=Object(r.a)(w,2),F=E[0].user;return E[1],Object(a.useEffect)((function(){u&&(N.collection("rooms").doc(u).onSnapshot((function(e){f(e.data().name)})),N.collection("rooms").doc(u).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){y(e.docs.map((function(e){return e.data()})))})))}),[u]),Object(a.useEffect)((function(){b(Math.floor(5e3*Math.random()))}),[u]),Object(C.jsxs)("div",{className:"chat",children:[Object(C.jsxs)("div",{className:"chat_header",children:[Object(C.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(h,".svg")}),Object(C.jsxs)("div",{className:"chat_headerInfo",children:[Object(C.jsx)("h3",{className:"chat-room-name",children:v}),Object(C.jsxs)("p",{className:"chat-room-last-seen",children:["Last seen "," ",new Date(null===(e=_[_.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(C.jsxs)("div",{className:"chat_headerRight",children:[Object(C.jsx)(j.a,{children:Object(C.jsx)(O.a,{})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(k.a,{})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(B.a,{})})]})]}),Object(C.jsx)("div",{className:"chat_body",children:_.map((function(e){var t;return Object(C.jsxs)("p",{className:"chat_message ".concat(e.name==F.displayName&&"chat_receiver"),children:[Object(C.jsx)("span",{className:"chat_name",children:e.name}),e.message,Object(C.jsx)("span",{className:"chat_timestemp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(C.jsxs)("div",{className:"chat_footer",children:[Object(C.jsx)(D.a,{}),Object(C.jsxs)("form",{children:[Object(C.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Type a message"}),Object(C.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),N.collection("rooms").doc(u).collection("messages").add({message:n,name:F.displayName,timestamp:p.a.firestore.FieldValue.serverTimestamp()}),i("")},children:" Send a Message"})]}),Object(C.jsx)(P.a,{})]})]})},L=c(61),R=c(108),A=(c(89),c(48)),G="SET_USER",z=function(e,t){return t.type===G?Object(A.a)(Object(A.a)({},e),{},{user:t.user}):e};var J=function(){var e=I(),t=Object(r.a)(e,2);Object(L.a)(t[0]);var c=t[1];return Object(C.jsx)("div",{className:"login",children:Object(C.jsx)("div",{className:"login",children:Object(C.jsxs)("div",{className:"login_container",children:[Object(C.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/007/802/398/non_2x/realistic-smartphone-chatting-3d-icon-illustrations-vector.jpg",alt:""}),Object(C.jsx)("div",{className:"login_text",children:Object(C.jsx)("h1",{children:"Sign Into Private Talk"})}),Object(C.jsx)(R.a,{type:"submit",onClick:function(){f.signInWithPopup(g).then((function(e){c({type:G,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in With Google"})]})})})};var V=function(){var e=I(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(C.jsx)("div",{className:"app",children:c?Object(C.jsx)("div",{className:"app_body",children:Object(C.jsxs)(S.a,{children:[Object(C.jsx)(E,{}),Object(C.jsxs)(M.c,{children:[Object(C.jsx)(M.a,{path:"/rooms/:roomId",children:Object(C.jsx)(U,{})}),Object(C.jsx)(M.a,{path:"/",children:Object(C.jsx)(U,{})})]})]})}):Object(C.jsx)(J,{})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(w,{initialState:{user:null},reducer:z,children:Object(C.jsx)(V,{})})}),document.getElementById("root")),W()}},[[90,1,2]]]);
//# sourceMappingURL=main.6bb8d793.chunk.js.map