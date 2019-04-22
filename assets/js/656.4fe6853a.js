(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{379:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"lombok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lombok","aria-hidden":"true"}},[a._v("#")]),a._v(" Lombok")]),a._v(" "),s("p",[a._v("Lombok 是一个可以通过简单的注解形式来帮助我们简化消除一些必须有但显得很臃肿的 Java 代码的工具，通过使用对应的注解，可以在编译源码的时候生成对应的方法。")]),a._v(" "),s("ul",[s("li",[a._v("官网地址：https://projectlombok.org/")]),a._v(" "),s("li",[a._v("GitHub：https://github.com/rzwitserloot/lombok")])]),a._v(" "),s("h2",{attrs:{id:"idea-安装-lombok-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea-安装-lombok-插件","aria-hidden":"true"}},[a._v("#")]),a._v(" IDEA 安装 Lombok 插件")]),a._v(" "),s("p",[a._v("IDEA 中依次点击 "),s("code",[a._v("File")]),a._v(" --\x3e "),s("code",[a._v("Settings")]),a._v(" --\x3e "),s("code",[a._v("Plugins")]),a._v(" 搜索 Lombok 安装即可")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/Lusifer1512345603.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"查看是否安装成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看是否安装成功","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看是否安装成功")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/Lusifer1512345786.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"使用-lombok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-lombok","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 Lombok")]),a._v(" "),s("h3",{attrs:{id:"pom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pom","aria-hidden":"true"}},[a._v("#")]),a._v(" POM")]),a._v(" "),s("p",[s("code",[a._v("pom.xml")]),a._v(" 中增加所需依赖，坐标如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("<dependency>\n    <groupId>org.projectlombok</groupId>\n    <artifactId>lombok</artifactId>\n    <version>1.16.18</version>\n</dependency>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"使用-data-注解简化-pojo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-data-注解简化-pojo","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 "),s("code",[a._v("@Data")]),a._v(" 注解简化 POJO")]),a._v(" "),s("p",[s("code",[a._v("@Data")]),a._v(" 包含了 "),s("code",[a._v("@ToString")]),a._v("，"),s("code",[a._v("@EqualsAndHashCode")]),a._v("，"),s("code",[a._v("@Getter/@Setter")]),a._v(" 和 "),s("code",[a._v("@RequiredArgsConstructor")]),a._v(" 的功能")]),a._v(" "),s("p",[a._v("其他相关注解请自行查阅：http://jnb.ociweb.com/jnb/jnbJan2010.html")]),a._v(" "),s("h3",{attrs:{id:"使用案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用案例","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用案例")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('@Data\npublic class ItemCatNode implements Serializable {\n    @JsonProperty(value = "u")\n    private String url;\n    @JsonProperty(value = "n")\n    private String name;\n    @JsonProperty(value = "i")\n    private List<?> item;\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[s("img",{attrs:{src:"/assets/Lusifer1512346835.png",alt:""}})])])},[],!1,null,null,null);t.default=r.exports}}]);