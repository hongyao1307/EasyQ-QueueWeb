(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1aa1"],{"218d":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid py-5 h-100"},[e("button",{staticClass:"btn btn-warning mr-2 btn-lg btn-block",staticStyle:{position:"absolute",bottom:"0",right:"0"}},[e("router-link",{attrs:{to:"/instructor/main"}},[t._v(" Return ")])],1),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.Memberlist,(function(s){return e("tr",{key:s.USER_ID},[e("td",[t._v(t._s(s.FIRST_NME))]),e("td",[t._v(t._s(s.LAST_NME))]),e("td",[t._v(t._s(s.USER_ROLE))])])})),0)]),e("button",{staticClass:"btn btn-warning mr-2 btn-lg btn-block"},[e("router-link",{attrs:{to:"/instructor/CourseDetail/addStudent/"+this.CourseID}},[t._v(" Add a student ")])],1),e("button",{staticClass:"btn btn-warning mr-2 btn-lg btn-block"},[e("router-link",{attrs:{to:"/instructor/CourseDetail/addTA/"+this.CourseID}},[t._v(" Add a TA ")])],1)])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("First Name")]),e("th",{attrs:{scope:"col"}},[t._v("Last Name")]),e("th",{attrs:{scope:"col"}},[t._v("Role")])])])}],o=e("bc3a"),a=e.n(o),i={data(){return{CourseID:null,invitation_code:null,Memberlist:[]}},methods:{async GetStudent(){console.log("COURSE ID:"+this.CourseID);const t=await a.a.post("http://100.25.219.17/api/user/instructor/getClassMembers",{class_id:this.CourseID},{headers:{"Content-type":"application/json"}});console.log("member list:"+t.data.memberList.length),this.Memberlist=t.data.memberList}},created(){this.CourseID=this.$route.params.CLASSID,console.log("COURSE ID:"+this.CourseID),this.GetStudent(),console.log("this member list:"+this.memberList.length)}},l=i,c=e("2877"),u=Object(c["a"])(l,n,r,!1,null,"6d13be0c",null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0b1aa1.414f2598.js.map