"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[716],{2716:function(t,s,e){e.r(s),e.d(s,{default:function(){return M}});var n=e(5671),u=e(3144),r=e(136),a=e(5716),i=e(2791),o={},p=e(5022),d="MyPosts_postsBlock__C24bo",c="MyPosts_posts__7EmOH",l="Post_item__xrbSH",h=e(184),f=function(t){return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("img",{src:"https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"}),t.message,(0,h.jsx)("div",{children:(0,h.jsxs)("span",{children:["like ",t.likeCounter]})})]})},m=e(6139),j=e(704),x=e(683),v=e(3079),g=(0,v.t)(10),k=(0,j.Z)({form:"addNewPosts"})((function(t){return(0,h.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,h.jsx)(m.Z,{name:"addNewPost",component:x.gN,validate:[v.C,g]}),(0,h.jsx)("button",{children:"Add"})]})})),S=(0,i.memo)((function(t){var s=t.posts.map((function(t,s){return(0,h.jsx)(f,{message:t.message,likeCounter:t.likeCounter},s)}));return(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)("div",{children:(0,h.jsx)(k,{onSubmit:function(s){t.addPost(s.addNewPost)}})}),(0,h.jsx)("div",{className:c,children:s})]})})),y=e(8687),P=(0,y.$j)((function(t){return{posts:t.profilePage.postDate}}),(function(t){return{addPost:function(s){t((0,p.WA)(s))}}}))(S),b=e(9892),w=e(6216),C=e(885),N=function(t){var s=(0,i.useState)(!1),e=(0,C.Z)(s,2),n=e[0],u=e[1],r=(0,i.useState)(t.status),a=(0,C.Z)(r,2),o=a[0],p=a[1];(0,i.useEffect)((function(){p(t.status)}),[t.status]);return(0,h.jsx)("div",{children:n?(0,h.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){u(!1),t.updateStatus(o)},value:o||""}):(0,h.jsx)("span",{onDoubleClick:function(){u(!0)},children:o||"Type your new status"})})},_=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return s?(0,h.jsx)("div",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:s.photos.large?s.photos.large:w}),(0,h.jsx)("div",{children:(0,h.jsx)("b",{children:s.fullName})}),(0,h.jsx)(N,{status:e,updateStatus:n})]})}):(0,h.jsx)(b.Z,{})},Z=function(t){return(0,h.jsxs)("div",{className:o.content,children:[(0,h.jsx)(_,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,h.jsx)(P,{})]})},T=e(9271),I=e(7781),A=function(t){(0,r.Z)(e,t);var s=(0,a.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,u.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=JSON.stringify(this.props.userId),this.props.userId||this.props.history.push("/login")),this.props.getProfileThunk(t),this.props.setStatusThunk(t)}},{key:"render",value:function(){return(0,h.jsx)("div",{children:(0,h.jsx)(Z,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunk})})}}]),e}(i.Component),M=(0,I.qC)(T.EN,(0,y.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,userId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfileThunk:p.VB,setStatusThunk:p.oI,updateStatusThunk:p.dw}))(A)}}]);
//# sourceMappingURL=716.8bc5628f.chunk.js.map