webpackJsonp([8],{UmNL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"project-approval",mixins:[{data:function(){var t=this,e=this.$createElement;return{forms:{formModel:[{elemType:"input",prop:"projectName",label:"",placeholder:"请输入关键字",labelWidth:"0px"}],formData:{}},tables:{tableModel:[{label:"项目名称",prop:"projectName"},{label:"负责人",prop:"handler"},{label:"项目照片",prop:"banner",render:function(t,e){var a=e.row;return a.banner?t("img",{attrs:{src:a.banner,height:"30"}}):null}},{label:"建设单位",prop:"constructionUnit"},{label:"地址",prop:"address"},{label:"申请时间",prop:"createDate"},{label:"操作",render:function(){return e("div",[e("el-button",{attrs:{type:"text"},on:{click:function(){t.$router.push({path:"/project-detail"})}}},["查看"]),"passed"===t.projectStatus?e("el-button",{attrs:{type:"text"}},["删除"]):null])}}],tableData:[{banner:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3216805947,683070568&fm=26&gp=0.jpg"}]}}}}],components:{List:a("Z7ab").a},data:function(){return{projectStatus:"passed"}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{model:{value:t.projectStatus,callback:function(e){t.projectStatus=e},expression:"projectStatus"}},[a("el-tab-pane",{attrs:{label:"通过项目",name:"passed"}},[a("List",{attrs:{forms:t.forms,tables:t.tables}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"驳回项目",name:"reject"}},[a("List",{attrs:{forms:t.forms,tables:t.tables}})],1)],1)],1)},staticRenderFns:[]},n=a("VU/8")(r,l,!1,null,null,null);e.default=n.exports}});
//# sourceMappingURL=8.d81171d58d674b339baf.js.map