(this["webpackJsonpwall-app"]=this["webpackJsonpwall-app"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),i=n.n(c),o=(n(81),n(14)),s=n(10),l=n(12),u=n(56),j=n.n(u),b=n(2),d=function(){return Object(b.jsx)(j.a,{type:"Oval",style:{padding:"5%"},color:"#00BFFF",height:100,width:100})},h=n(145),m=n(45),p=n.n(m),O=n(138),f=n(142),x=n(143),g=n(144),v=n(38),y=n.n(v);var _=function(e){return Object(b.jsxs)(O.a,{className:e.preview?y.a.previewStory:y.a.story,children:[Object(b.jsx)(f.a,{className:y.a.media,image:e.image,title:e.title}),Object(b.jsxs)(x.a,{className:y.a.content,children:[Object(b.jsx)(g.a,{gutterBottom:!0,variant:"h2",component:"h2",children:e.title}),Object(b.jsxs)(g.a,{gutterBottom:!0,variant:"h3",component:"h3",children:["By ",e.author]}),Object(b.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description})]})]})},S=n(58),w=n.n(S),C=n(20),I=n.n(C),N=n(32),k=n(59),B=Object(k.a)({accessKey:"0oJhi_V8eHNlNtyOLjykytXjPWxFd79JZ7FWUduq0vk"}),E=function(){var e=Object(N.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,B.search.getPhotos({query:t});case 4:e.sent.response.results.forEach((function(e){n.push({id:e.id,url:e.urls.regular})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),i=Object(s.a)(c,2),o=i[0],l=i[1],u=Object(r.useCallback)(function(){var e=Object(N.a)(I.a.mark((function e(t,n){var r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),l(null),e.prev=2,e.next=5,fetch(t.url,{method:t.method?t.method:"GET",headers:t.headers?t.headers:{},body:t.body?JSON.stringify(t.body):null});case 5:if((r=e.sent).ok){e.next=8;break}throw new Error("Request failed!");case 8:return e.next=10,r.json();case 10:c=e.sent,n(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),l(e.t0.message||"Something went wrong!");case 17:a(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}(),[]);return{sendRequest:u,error:o,isLoading:n,restartReq:function(){l(null),a(!1)}}},T=function(e){var t,n=e.onFetchStories,a=L(),c=a.sendRequest,i=a.error,o=a.isLoading,s=Object(r.useCallback)((function(){c({url:"https://react-http-de690-default-rtdb.firebaseio.com/stories.json"},(function(e){var t=[];for(var r in e){var a=e[r];t.push(Object(l.a)({id:r},a))}t.reverse(),n(t)}))}),[c,n]);return Object(r.useEffect)((function(){s()}),[s]),e.stories.length>0&&(t=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Stories Wall"}),Object(b.jsx)("ul",{className:w.a["stories-list"],children:e.stories.map((function(e){return Object(b.jsx)(_,{title:e.title,author:e.author,description:e.description,image:e.image},e.id)}))})]})),0===e.stories.length&&(t=Object(b.jsx)("p",{children:"Wall is empty!"})),i&&(t=Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:i}),Object(b.jsx)(h.a,{startIcon:Object(b.jsx)(p.a,{}),variant:"contained",color:"primary",onClick:function(){return s()},children:"Try again"})]})),o&&(t=Object(b.jsx)(d,{})),t},W=n(17),q=n(47),F=n.n(q),P=n(146),R=n(61),A=n.n(R),D=n(62),J=n.n(D),H=n(35),V=n.n(H),z=function(e){var t=e.isNext,n=e.error,r=e.move;return Object(b.jsxs)("div",{className:V.a.buttonCon,children:[t&&Object(b.jsx)("span",{className:V.a.buttonText,children:"Next"}),Object(b.jsx)(P.a,{color:"primary",style:{backgroundColor:n?"red":null},onClick:function(){return r(t?"next":"back")},children:t?Object(b.jsx)(A.a,{}):Object(b.jsx)(J.a,{})})," ",!t&&Object(b.jsx)("span",{className:V.a.buttonText,children:"Back"})]})},Y=function(e){var t=e.currentStep,n=e.steps,r=e.error,a=e.onError,c=function(r){function c(){var a="next"===r?1:-1,c=n.indexOf(t)+a;e.onStepChange(n[c])}if(e.onError(null),"next"===r){var i=e.onStepValidation(t);i?(a(i),setTimeout((function(){a(!1)}),1500)):c()}else c();window.scrollTo(0,0)},i=t===n[0],o=t===n[n.length-1],s={justifyContent:i?"flex-end":"space-between"};return Object(b.jsxs)("div",{className:V.a.navigationButtons,style:s,children:[!i&&Object(b.jsx)(z,{move:c,isNext:!1,error:!1}),!o&&Object(b.jsx)(z,{move:c,isNext:!0,error:r})]})},K={containSpecialChars:new RegExp(/[$&+,:;=?@#|'<>.^*()%!-]/),containDigit:new RegExp(/\d/)},Z=n(24),G=n.n(Z),M=n(149),U=n(147),X=n(148),$=n(63),Q=n.n($);var ee=function(e){var t=Object(r.useRef)(),n=Object(r.useState)([]),a=Object(s.a)(n,2),c=a[0],i=a[1],u=Object(r.useState)([]),j=Object(s.a)(u,2),m=j[0],p=j[1],O=Object(r.useState)(!1),f=Object(s.a)(O,2),x=f[0],g=f[1],v=Object(r.useState)(!1),y=Object(s.a)(v,2),_=y[0],S=y[1],w=e.onImageChoice,C=m.length>0,k=function(){var e=Object(N.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),p([]),i([]),e.next=5,E(t);case 5:n=e.sent,p(n),S(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){e.searchTerm&&k(e.searchTerm),w(null)}),[e.searchTerm,w]);var B={variant:"contained",color:"primary"};return Object(b.jsxs)("div",{className:G.a.optionalImgsCon,style:{display:e.display},children:[Object(b.jsxs)("div",{className:G.a.searchBox,children:[x&&Object(b.jsx)(M.a,{inputRef:t,type:"search",variant:"outlined",label:"search term.."}),C&&!x&&Object(b.jsxs)("span",{className:G.a.imgsListText,children:["Dont like this results? ",Object(b.jsx)("br",{})]}),Object(b.jsx)("div",{className:G.a.buttonCon,children:x?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h.a,Object(l.a)(Object(l.a)({},B),{},{onClick:function(){return function(){var e=t.current.value;e&&(k(e),w(null),g(!1))}()},children:"Search"})),Object(b.jsx)(h.a,Object(l.a)(Object(l.a)({},{variant:"contained",color:"secondary"}),{},{onClick:function(){return g(!1)},children:"Cancel"}))]}):Object(b.jsx)(h.a,Object(l.a)(Object(l.a)({startIcon:Object(b.jsx)(Q.a,{})},B),{},{onClick:function(){return g(!0)},children:"Click to search"}))})]}),C?Object(b.jsx)(U.a,{rowHeight:e.screenWidth>650?260:160,className:G.a.optionalImgs,cols:e.screenWidth>650?5:2,children:m.map((function(t){var n=e.chosenImg&&e.chosenImg===t.id?G.a.chosenImg:"";return Object(b.jsxs)(X.a,{className:n,cols:1,children:[Object(b.jsx)("img",{onClick:function(){return function(t){e.onImageChoice(t)}(t)},style:{display:c.includes(t.id)?"block":"none"},onLoad:function(){return e=t.id,void i((function(t){return[].concat(Object(o.a)(t),[e])}));var e},src:t.url,alt:"gallery img"}),!c.includes(t.id)&&Object(b.jsx)(d,{})]},t.id)}))}):Object(b.jsx)("span",{className:G.a.imgsListText,children:_?"Searching...":"couldent find optional images."})]})},te=function(e){var t="description"===e.name,n=e.screenWidth<650,r=n?"90%":"35%",a=n?"90%":"50%",c={InputLabelProps:{style:{fontSize:n?15:22}},InputProps:{style:{fontSize:n?25:45}},value:e.value,type:"text",variant:"filled",label:e.label,onChange:function(t){return e.update(e.name,t)},onBlur:function(t){return e.update(e.name,t)},style:{marginTop:n?"10%":"1%",width:t?a:r,display:e.current===e.name?"flex":"none"},rows:t?5:1};return t?Object(b.jsx)(M.a,Object(l.a)(Object(l.a)({},c),{},{multiline:!0})):Object(b.jsx)(M.a,Object(l.a)({},c))},ne=n(64),re=n.n(ne),ae=function(e){var t=e.currentStep,n=e.inputs,r=e.steps,a=e.onSubmit,c=e.reqLoading,i=e.reqError,o=Object(s.a)(r,5),l=o[0],u=o[1],j=o[2],m=o[3],O=o[4],f=[l,u,m],x=t===j.name?"block":"none",g=t===O.name;return Object(b.jsxs)("form",{onSubmit:a,children:[f.map((function(r){return Object(b.jsx)(te,{name:r.name,current:t,label:r.label,screenWidth:e.screenWidth,update:e.updateInput,value:n[r.name].current},r.name)})),Object(b.jsx)(ee,{display:x,chosenImg:n.image?n.image.id:null,onImageChoice:e.onImageChoice,searchTerm:n.title.final,screenWidth:e.screenWidth}),g&&Object(b.jsxs)(b.Fragment,{children:[!c&&Object(b.jsx)(h.a,{startIcon:i?Object(b.jsx)(p.a,{}):Object(b.jsx)(re.a,{}),variant:"contained",color:"primary",type:"submit",children:i?"try again":"Sure, Post It!"}),i?Object(b.jsxs)("b",{children:[" ",i," "]}):c?Object(b.jsx)(d,{}):Object(b.jsx)(_,{preview:!0,title:n.title.final,author:n.author.final,description:n.description.final,image:n.image.url})]})]})},ce=n(65),ie=n.n(ce),oe=n(66),se=n.n(oe),le={author:{current:"",final:null},title:{current:"",final:null},image:{url:null,id:null},description:{current:"",final:null}};var ue=function(e){var t=[{name:"author",title:"Who are you?",label:"Your name"},{name:"title",title:"What is your story name?",label:"Story title"},{name:"image",title:"Which image describes it the most?"},{name:"description",title:"So,what happen?",label:"Your story"},{name:"finish",title:"Is that OK?"}],n=Object(r.useState)(!1),a=Object(s.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(t[0]),u=Object(s.a)(o,2),j=u[0],d=u[1],m=Object(r.useState)(le),p=Object(s.a)(m,2),O=p[0],f=p[1],x=L(),g=x.sendRequest,v=x.error,y=x.isLoading,_=x.restartReq,S=function(t,n){var r=n.name,a=Object(l.a)({id:r},t);e.onAddStory(a),w()},w=function(){f(le),d(t[0]),i(!1),_()},C=Object(r.useCallback)((function(e){f((function(t){return Object(l.a)(Object(l.a)({},t),{},{image:e})}))}),[]),I=function(t){e.onError(t)};return Object(b.jsxs)("div",{className:F.a.postBar,children:[c&&Object(b.jsxs)("div",{className:F.a.postBarContent,children:[Object(b.jsx)("h2",{children:j.title}),Object(b.jsx)(ae,{currentStep:j.name,inputs:O,steps:t,onSubmit:function(e){e.preventDefault();var t={author:O.author.final,title:O.title.final,description:O.description.final,image:O.image.url};!function(e,t,n){e({url:"https://react-http-de690-default-rtdb.firebaseio.com/stories.json",method:"POST",body:n,headers:{"Content-Type":"application/json"}},t.bind(null,n))}(g,S,t)},updateInput:function(e,t){var n=t.target.value,r=t._reactName;f((function(t){var a;return"onChange"===r?a=Object(l.a)(Object(l.a)({},t[e]),{},{current:n}):"onBlur"===r&&(a=Object(l.a)(Object(l.a)({},t[e]),{},{final:n})),Object(l.a)(Object(l.a)({},t),{},Object(W.a)({},e,a))})),I(null)},onImageChoice:C,screenWidth:e.screenWidth,reqLoading:y,reqError:v}),Object(b.jsx)(Y,{currentStep:j.name,steps:t.map((function(e){return e.name})),onStepChange:function(e){return function(e){var n=t.filter((function(t){return t.name===e}))[0];d(n)}(e)},onStepValidation:function(e){var t=function(e,t){var n=null;if("image"===e)null===t&&(n="Must choose an image");else{var r=t.trim();switch(e){case"author":""===r?n="Provide your name below":K.containSpecialChars.test(r)||K.containDigit.test(r)?n="Provide name without special chars or digits":r.length<2&&(n="Name is too short.");break;case"title":""===r&&(n="Provide title below");break;case"description":""===r&&(n="Provide your story below.")}}return n}(e,"image"===e?O.image:O[e].current);return t},onError:I,error:e.error})]}),Object(b.jsx)(h.a,{style:{alignSelf:c?"flex-start ":"center"},variant:"contained",color:"primary",className:F.a.postToggleButton,onClick:function(){c?w():i((function(e){return!e}))},startIcon:c?Object(b.jsx)(se.a,{}):Object(b.jsx)(ie.a,{}),children:c?"Cancel":"Post your story"})]})},je=n(67),be=n.n(je);var de=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(window.innerWidth),l=Object(s.a)(i,2),u=l[0],j=l[1],d=Object(r.useState)(null),h=Object(s.a)(d,2),m=h[0],p=h[1],O=function(){j(window.innerWidth)};Object(r.useEffect)((function(){return window.addEventListener("resize",O),function(){return window.removeEventListener("resize",O)}}),[]);var f=Object(r.useCallback)((function(e){c(e)}),[]);return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("section",{children:m?Object(b.jsx)("p",{className:be.a.formError,children:m}):Object(b.jsx)("h1",{children:"Wall to all "})}),Object(b.jsx)("section",{children:Object(b.jsx)(ue,{screenWidth:u,onError:p,onAddStory:function(e){c((function(t){return[e].concat(Object(o.a)(t))}))}})}),Object(b.jsx)("section",{children:Object(b.jsx)(T,{onFetchStories:f,stories:n})})]})};i.a.render(Object(b.jsx)(de,{}),document.getElementById("root"))},24:function(e,t,n){e.exports={optionalImgsCon:"ImgList_optionalImgsCon__2YE6M",optionalImgs:"ImgList_optionalImgs__3mtgb",chosenImg:"ImgList_chosenImg__19cJS",searchBox:"ImgList_searchBox__3OGjD",buttonCon:"ImgList_buttonCon__2C0oN",imgsListText:"ImgList_imgsListText__xSB2_"}},35:function(e,t,n){e.exports={navigationButtons:"NavButtons_navigationButtons__1uNHt",buttonCon:"NavButtons_buttonCon__1i5A0",buttonText:"NavButtons_buttonText__3nZW1"}},38:function(e,t,n){e.exports={story:"Story_story__1bVPs",previewStory:"Story_previewStory__3Yfo_",content:"Story_content__vwEig",media:"Story_media__VHaO7"}},47:function(e,t,n){e.exports={postToggleButton:"AddStory_postToggleButton__9NIuE",postBar:"AddStory_postBar__218Sl",postBarContent:"AddStory_postBarContent__2KZHL"}},58:function(e,t,n){e.exports={"stories-list":"StoriesList_stories-list__2_DO6"}},67:function(e,t,n){e.exports={formError:"App_formError__3DF59"}},81:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.4a377ca8.chunk.js.map