(function(){"use strict";var t={4899:function(t,e,s){var a=s(144),n=s(998),o=s(6232),r=s(5550),i=s(9223),l=s(4324),c=s(5808),u=s(4525),p=s(6195),d=s(982),m=s(4611),f=s(3059),h=s(6975),g=s(7953),v=function(){var t=this,e=t._self._c;return e(n.Z,{attrs:{id:"inspire"}},[e(h.Z,{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(u.Z,[e(p.km,[e(p.V9,[t._v(" MovieTrove ")]),e(p.oZ,[t._v(" Your Personal Movie Vault ")])],1)],1),e(i.Z),e(c.Z,{attrs:{dense:""}},[e(d.Z,{attrs:{color:"primary"}},t._l(t.items,(function(s,a){return e(u.Z,{key:a,attrs:{to:s.link,link:""}},[e(m.Z,[e(l.Z,{domProps:{textContent:t._s(s.icon)}})],1),e(p.km,[e(p.V9,{domProps:{textContent:t._s(s.title)}})],1)],1)})),1)],1)],1),e(o.Z,{attrs:{app:""}},[e(r.Z,{on:{click:function(e){t.drawer=!t.drawer}}}),e(g.qW,[t._v("MovieTrove")])],1),e(f.Z,[e("router-view")],1)],1)},Z=[],y={data:()=>({drawer:null,items:[{title:"Home",icon:"mdi-home",link:"/"},{title:"Add Post",icon:"mdi-note-plus",link:"/add-post"},{title:"About",icon:"mdi-help-box",link:"/about"}]})},b=y,_=s(1001),w=(0,_.Z)(b,v,Z,!1,null,null,null),P=w.exports,C=s(8345),k=s(1653),x=s(6190),$=s(9582),T=s(4886),O=s(266),j=s(2150),F=s(5495),A=s(1713),E=function(){var t=this,e=t._self._c;return e(j.Z,[this.$route.params.message?e(k.Z,{attrs:{border:"left","close-text":"Close Alert",color:"green accent-4",dark:"",dismissable:""}},[t._v(t._s(this.$route.params.message))]):t._e(),e(A.Z,{attrs:{"no-gutters":""}},t._l(t.posts,(function(s){return e(O.Z,{key:s._id,staticClass:"pa-3",attrs:{sm:"4"}},[e($.Z,{staticClass:"pa-1",attrs:{to:{name:"post",params:{id:[s._id]}}}},[e(F.Z,{attrs:{height:"250",src:`/${s.image}`}}),e(x.Z,{staticClass:"ml-4 mt-3",attrs:{small:"",outlined:"",color:"indigo"}},[t._v(" "+t._s(s.category)+" ")]),e(T.EB,{staticClass:"headline"},[t._v(" "+t._s(s.title)+" ")]),e(T.ZB,{staticClass:"py-0"},[e("p",[t._v(t._s(s.content.substring(0,100)+"..."))])])],1)],1)})),1)],1)},B=[],S=s(6154);const I="/api/post";class M{static async getAllPosts(){const t=await S.Z.get(I);return t.data}static async getPostById(t){const e=await S.Z.get(`${I}/${t}`);return e.data}static async addPost(t){const e=await S.Z.post(I,t);return e.data}static async updatePost(t,e){const s=await S.Z.patch(`${I}/${t}`,e);return s.data}static async deletePost(t){const e=await S.Z["delete"](`${I}/${t}`);return e.data}}var q={name:"Home",data(){return{posts:[]}},async created(){this.posts=await M.getAllPosts()}},D=q,N=(0,_.Z)(D,E,B,!1,null,null,null),V=N.exports,z=s(1234),H=s(5125),L=s(8088),Q=s(2648),U=function(){var t=this,e=t._self._c;return e(j.Z,[e(A.Z,{staticClass:"mt-5",attrs:{"no-gutters":""}},[e(O.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e($.Z,{staticClass:"pa-5"},[e(T.EB,[t._v("Add New Post")]),e(i.Z),e(H.Z,{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(L.Z,{attrs:{label:"Title","prepend-icon":"mdi-note",rules:t.rules},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),e(L.Z,{attrs:{label:"Category","prepend-icon":"mdi-view-list",rules:t.rules},model:{value:t.post.category,callback:function(e){t.$set(t.post,"category",e)},expression:"post.category"}}),e(Q.Z,{attrs:{label:"Content","prepend-icon":"mdi-note-plus",rules:t.rules},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}}),e(z.Z,{attrs:{rules:t.rules,"show-size":"",counter:"",multiple:"",label:"Select Image"},on:{change:t.selectFile}}),e(x.Z,{staticClass:"mt-3",attrs:{type:"submit",color:"primary"}},[t._v("Add Post")])],1)],1)],1)],1)],1)},W=[],Y=(s(7658),{data(){return{rules:[t=>!!t||"This field is required"],post:{title:"",category:"",content:"",image:""},image:""}},methods:{selectFile(t){this.image=t[0]},async submitForm(){const t=new FormData;if(t.append("image",this.image),t.append("title",this.post.title),t.append("category",this.post.category),t.append("content",this.post.content),this.$refs.form.validate()){const e=await M.addPost(t);this.$router.push({name:"home",params:{message:e.message}})}}}}),G=Y,J=(0,_.Z)(G,U,W,!1,null,null,null),K=J.exports,R=function(){var t=this,e=t._self._c;return e(j.Z,[e(A.Z,{attrs:{"no-gutters":""}},[e(O.Z,{staticClass:"pa-4 mx-auto",attrs:{sm:"10"}},[e($.Z,{staticClass:"pa-2"},[e(F.Z,{attrs:{src:`/${t.post.image}`,height:"500"}}),e(T.h7,{staticClass:"pb-0"},[e(A.Z,{staticClass:"mt-1 mx-1"},[e(O.Z,[e(x.Z,{attrs:{small:"",outlined:"",color:"primary"}},[t._v(t._s(t.post.category))])],1),e(O.Z,{staticClass:"d-flex justify-end",attrs:{sm:"10"}},[e(x.Z,{attrs:{color:"success",to:{name:"edit-post",params:{id:t.post._id}},text:""}},[t._v("Edit")]),e(x.Z,{attrs:{color:"red",text:""},on:{click:function(e){return t.removePost(t.post._id)}}},[t._v("Delete")])],1)],1)],1),e(T.Qq,{staticClass:"headline"},[e("h3",[t._v(t._s(t.post.title))])]),e(T.ZB,{staticClass:"grey--text"},[e("p",[t._v(t._s(t.post.content))]),e("p",[t._v(t._s(t.post.created))])])],1)],1)],1)],1)},X=[],tt={data(){return{post:{}}},async created(){const t=await M.getPostById(this.$route.params.id);this.post=t},methods:{async removePost(t){const e=await M.deletePost(t);this.$router.push({name:"home",params:{message:e.message}})}}},et=tt,st=(0,_.Z)(et,R,X,!1,null,null,null),at=st.exports,nt=function(){var t=this,e=t._self._c;return e(j.Z,[e(A.Z,{staticClass:"mt-5",attrs:{"no-gutters":""}},[e(O.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e($.Z,{staticClass:"pa-5"},[e(T.EB,[t._v("Edit This Post")]),e(i.Z),e(H.Z,{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateForm.apply(null,arguments)}}},[e(L.Z,{attrs:{label:"Title","prepend-icon":"mdi-note",rules:t.rules},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),e(L.Z,{attrs:{label:"Category","prepend-icon":"mdi-view-list",rules:t.rules},model:{value:t.post.category,callback:function(e){t.$set(t.post,"category",e)},expression:"post.category"}}),e(Q.Z,{attrs:{label:"Content","prepend-icon":"mdi-note-plus",rules:t.rules},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}}),e(z.Z,{attrs:{"show-size":"",counter:"",multiple:"",label:"Select Image"},on:{change:t.selectFile}}),e(F.Z,{attrs:{src:`/${t.post.image}`,width:"120"}}),e(x.Z,{staticClass:"mt-3",attrs:{type:"submit",color:"success"}},[t._v("Update Post")])],1)],1)],1)],1)],1)},ot=[],rt={data(){return{rules:[t=>!!t||"This field is required"],post:{title:"",category:"",content:"",image:""},image:""}},async created(){const t=await M.getPostById(this.$route.params.id);this.post=t},methods:{selectFile(t){this.image=t[0]},async updateForm(){const t=new FormData;if(t.append("image",this.image),t.append("title",this.post.title),t.append("category",this.post.category),t.append("content",this.post.content),t.append("oldImage",this.post.image),this.$refs.form.validate()){const e=await M.updatePost(this.$route.params.id,t);this.$router.push({name:"home",params:{message:e.message}})}}}},it=rt,lt=(0,_.Z)(it,nt,ot,!1,null,null,null),ct=lt.exports;a.ZP.use(C.ZP);const ut=[{path:"/",name:"home",component:V},{path:"/add-post",name:"add-post",component:K},{path:"/post/:id",name:"post",component:at},{path:"/edit-post/:id",name:"edit-post",component:ct},{path:"/about",name:"about",component:()=>s.e(443).then(s.bind(s,5910))}],pt=new C.ZP({routes:ut});var dt=pt,mt=s(629);a.ZP.use(mt.ZP);var ft=new mt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),ht=s(8864);a.ZP.use(ht.Z);var gt=new ht.Z({});a.ZP.config.productionTip=!1,new a.ZP({router:dt,store:ft,vuetify:gt,render:t=>t(P)}).$mount("#app")}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,o){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],o=t[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(i=!1,o<r&&(r=o));if(i){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,n,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/about.389f41c5.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";s.l=function(a,n,o,r){if(t[a])t[a].push(n);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==e+o){i=p;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",e+o),i.src=a),t[a]=[n];var d=function(e,s){i.onerror=i.onload=null,clearTimeout(m);var n=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(t){return t(s)})),e)return e(s)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.f.j=function(e,a){var n=s.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(s,a){n=t[e]=[s,a]}));a.push(n[2]=o);var r=s.p+s.u(e),i=new Error,l=function(a){if(s.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",i.name="ChunkLoadError",i.type=o,i.request=r,n[1](i)}};s.l(r,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,r=a[0],i=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(l)var u=l(s)}for(e&&e(a);c<r.length;c++)o=r[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(u)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(4899)}));a=s.O(a)})();
//# sourceMappingURL=app.398af6ab.js.map