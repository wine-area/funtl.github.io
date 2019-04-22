(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{509:function(s,a,n){"use strict";n.r(a);var e=n(0),r=Object(e.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"spring-boot-整合-druid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-整合-druid","aria-hidden":"true"}},[s._v("#")]),s._v(" Spring Boot 整合 Druid")]),s._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),n("p",[s._v("Druid 是阿里巴巴开源平台上的一个项目，整个项目由数据库连接池、插件框架和 SQL 解析器组成。该项目主要是为了扩展 JDBC 的一些限制，可以让程序员实现一些特殊的需求，比如向密钥服务请求凭证、统计 SQL 信息、SQL 性能收集、SQL 注入检查、SQL 翻译等，程序员可以通过定制来实现自己需要的功能。")]),s._v(" "),n("p",[s._v("Druid 是目前最好的数据库连接池，在功能、性能、扩展性方面，都超过其他数据库连接池，包括 DBCP、C3P0、BoneCP、Proxool、JBoss DataSource。Druid 已经在阿里巴巴部署了超过 600 个应用，经过多年生产环境大规模部署的严苛考验。Druid 是阿里巴巴开发的号称为监控而生的数据库连接池！")]),s._v(" "),n("h2",{attrs:{id:"引入依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖","aria-hidden":"true"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("pom.xml")]),s._v(" 文件中引入 "),n("code",[s._v("druid-spring-boot-starter")]),s._v(" 依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependency>\n    <groupId>com.alibaba</groupId>\n    <artifactId>druid-spring-boot-starter</artifactId>\n    <version>1.1.10</version>\n</dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("引入数据库连接依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <scope>runtime</scope>\n</dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"配置-application-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-application-yml","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 "),n("code",[s._v("application.yml")])]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("application.yml")]),s._v(" 中配置数据库连接")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring:\n  datasource:\n    druid:\n      url: jdbc:mysql://ip:port/dbname?useUnicode=true&characterEncoding=utf-8&useSSL=false\n      username: root\n      password: 123456\n      initial-size: 1\n      min-idle: 1\n      max-active: 20\n      test-on-borrow: true\n      # MySQL 8.x: com.mysql.cj.jdbc.Driver\n      driver-class-name: com.mysql.jdbc.Driver\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("strong",[s._v("PS：")]),s._v(" 具体使用方法在 "),n("code",[s._v("测试 MyBatis 操作数据库")]),s._v(" 章节中进行介绍，本章节仅为准备环节。")])])},[],!1,null,null,null);a.default=r.exports}}]);