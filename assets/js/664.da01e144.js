(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{368:function(e,s,a){"use strict";a.r(s);var n=a(2),t=Object(n.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"jquery-ztree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-ztree","aria-hidden":"true"}},[e._v("#")]),e._v(" jQuery zTree")]),e._v(" "),a("p",[e._v("zTree 是一个依靠 jQuery 实现的多功能 “树插件”。优异的性能、灵活的配置、多种功能的组合是 zTree 最大优点。")]),e._v(" "),a("p",[e._v("本教程是为了配合"),a("code",[e._v("项目实战")]),e._v(" 的简易教程，主要实现了 "),a("code",[e._v("异步加载")]),e._v(" 树形结构数据的功能，具体用法请参考官方文档。")]),e._v(" "),a("h2",{attrs:{id:"页面引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面引用","aria-hidden":"true"}},[e._v("#")]),e._v(" 页面引用")]),e._v(" "),a("p",[e._v("CSS 部分")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<link rel="stylesheet" href="/static/assets/plugins/jquery-ztree/css/zTreeStyle/zTreeStyle.min.css" />\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("JS 部分")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<script src="/static/assets/plugins/jquery-ztree/js/jquery.ztree.core-3.5.min.js"><\/script>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用方法")]),e._v(" "),a("p",[e._v("开启 zTree 异步加载数据的功能，案例代码如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var setting = {\n    view: {\n        // 禁止多选\n        selectedMulti: false\n    },\n    async: {\n        // 开启异步加载功能\n        enable: true,\n        // 远程访问地址\n        url: "/content/category/tree/data",\n        // 选择父节点时会自动将节点中的参数传回服务器再重新取结果\n        autoParam: ["id"]\n    }\n};\n\n// 初始化 zTree 控件\n$.fn.zTree.init($("#myTree"), setting);\n// 绑定事件\n$("#btnModalOk").bind("click", function () {\n    // 获取 zTree 控件\n    var zTree = $.fn.zTree.getZTreeObj("myTree");\n    // 获取已选中的节点\n    var nodes = zTree.getSelectedNodes();\n    if (nodes.length == 0) {\n        alert("请先选择一个父节点");\n    }\n\n    else {\n        var node = nodes[0];\n        alert(node.id);\n    }\n});\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br")])]),a("h3",{attrs:{id:"html-结构代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-结构代码","aria-hidden":"true"}},[e._v("#")]),e._v(" HTML 结构代码")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<ul id="myTree" class="ztree"></ul>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"服务器关键代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器关键代码","aria-hidden":"true"}},[e._v("#")]),e._v(" 服务器关键代码")]),e._v(" "),a("p",[e._v("此为 "),a("code",[e._v("Controller")]),e._v(" 关键代码，其余部分可参考 "),a("a",{attrs:{href:"https://www.bilibili.com/video/av25584906",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频教程】"),a("OutboundLink")],1),e._v(" 完成")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@ResponseBody\n@RequestMapping(value = "tree/data", method = RequestMethod.POST)\npublic List<TbContentCategory> treeData(String id) {\n    if (id == null) {\n        id = "0";\n    }\n    List<TbContentCategory> tbContentCategories = tbContentCategoryService.selectByPid(Long.parseLong(id));\n    return tbContentCategories;\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h3",{attrs:{id:"演示效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#演示效果","aria-hidden":"true"}},[e._v("#")]),e._v(" 演示效果")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1529873938.png",alt:""}})])])},[],!1,null,null,null);s.default=t.exports}}]);