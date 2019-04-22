(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{571:function(a,t,s){"use strict";s.r(t);var n=s(2),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"spring-boot-常用配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-常用配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring Boot 常用配置")]),a._v(" "),s("h2",{attrs:{id:"本节视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[a._v("#")]),a._v(" 本节视频")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/av27784298",target:"_blank",rel:"noopener noreferrer"}},[a._v("【视频】微服务框架-SpringBoot-常用配置"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),s("p",[a._v("本章节主要介绍一下 Spring Boot 中的一些常用配置，比如：自定义 Banner、配置日志、关闭特定的自动配置等。")]),a._v(" "),s("h2",{attrs:{id:"自定义-banner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义-banner","aria-hidden":"true"}},[a._v("#")]),a._v(" 自定义 Banner")]),a._v(" "),s("p",[a._v("在 Spring Boot 启动的时候会有一个默认的启动图案")]),a._v(" "),s("pre",[s("code",[a._v("  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::        (v1.5.8.RELEASE)\n")])]),a._v(" "),s("p",[a._v("我们在 "),s("code",[a._v("src/main/resources")]),a._v(" 目录下新建一个 banner.txt")]),a._v(" "),s("p",[a._v("通过 "),s("a",{attrs:{href:"http://patorjk.com/software/taag",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://patorjk.com/software/taag"),s("OutboundLink")],1),a._v(" 网站生成字符串，将网站生成的字符复制到 banner.txt 中")]),a._v(" "),s("p",[a._v("再次运行这个程序")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("${AnsiColor.BRIGHT_RED}\n////////////////////////////////////////////////////////////////////\n//                          _ooOoo_                               //\n//                         o8888888o                              //\n//                         88\" . \"88                              //\n//                         (| ^_^ |)                              //\n//                         O\\  =  /O                              //\n//                      ____/`---'\\____                           //\n//                    .'  \\\\|     |//  `.                         //\n//                   /  \\\\|||  :  |||//  \\                        //\n//                  /  _||||| -:- |||||-  \\                       //\n//                  |   | \\\\\\  -  /// |   |                       //\n//                  | \\_|  ''\\---/''  |   |                       //\n//                  \\  .-\\__  `-`  ___/-. /                       //\n//                ___`. .'  /--.--\\  `. . ___                     //\n//              .\"\" '<  `.___\\_<|>_/___.'  >'\"\".                  //\n//            | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |                 //\n//            \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /                 //\n//      ========`-.____`-.___\\_____/___.-`____.-'========         //\n//                           `=---='                              //\n//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //\n//            佛祖保佑       永不宕机     永无BUG                  //\n////////////////////////////////////////////////////////////////////\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br")])]),s("p",[a._v("常用属性设置：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("${AnsiColor.BRIGHT_RED}")]),a._v("：设置控制台中输出内容的颜色")]),a._v(" "),s("li",[s("code",[a._v("${application.version}")]),a._v("：用来获取 "),s("code",[a._v("MANIFEST.MF")]),a._v(" 文件中的版本号")]),a._v(" "),s("li",[s("code",[a._v("${application.formatted-version}")]),a._v("：格式化后的 "),s("code",[a._v("${application.version}")]),a._v(" 版本信息")]),a._v(" "),s("li",[s("code",[a._v("${spring-boot.version}")]),a._v("：Spring Boot 的版本号")]),a._v(" "),s("li",[s("code",[a._v("${spring-boot.formatted-version}")]),a._v("：格式化后的 "),s("code",[a._v("${spring-boot.version}")]),a._v(" 版本信息")])]),a._v(" "),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),s("p",[a._v("Spring Boot 项目使用一个全局的配置文件 "),s("code",[a._v("application.properties")]),a._v(" 或者是 "),s("code",[a._v("application.yml")]),a._v("，在 "),s("code",[a._v("resources")]),a._v(" 目录下或者类路径下的 "),s("code",[a._v("/config")]),a._v(" 下，一般我们放到 "),s("code",[a._v("resources")]),a._v(" 下。")]),a._v(" "),s("p",[a._v('修改 Tomcat 的端口为 9090，并将默认的访问路径 "/" 修改为 "boot"，可以在 '),s("code",[a._v("application.properties")]),a._v(" 中添加：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("server.port=9090\nserver.context-path=/boot\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("或在 application.yml 中添加：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("server:\n  port: 9090\n  context-path: /boot\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("测试效果：")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/Lusifer1509896204.png",alt:""}})]),a._v(" "),s("p",[s("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/2.0.2.RELEASE/reference/html/common-application-properties.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("更多配置"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"starter-pom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starter-pom","aria-hidden":"true"}},[a._v("#")]),a._v(" Starter POM")]),a._v(" "),s("p",[a._v("Spring Boot 为我们提供了简化企业级开发绝大多数场景的 starter pom ，只要使用了应用场景所需要的 starter pom ，相关的技术配置将会消除，就可以得到 Spring Boot 为我们提供的自动配置的 Bean。")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/2.0.2.RELEASE/reference/html/using-boot-build-systems.html#using-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[a._v("更多 Starter POM"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"日志配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 日志配置")]),a._v(" "),s("p",[a._v("Spring Boot 对各种日志框架都做了支持，我们可以通过配置来修改默认的日志的配置")]),a._v(" "),s("p",[a._v("默认情况下，Spring Boot 使用 Logback 作为日志框架")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ../logs/spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("hello.log\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("level.org.springframework.web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" DEBUG\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"关闭特定的自动配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭特定的自动配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 关闭特定的自动配置")]),a._v(" "),s("p",[a._v("关闭特定的自动配置使用 "),s("code",[a._v("@SpringBootApplication")]),a._v(" 注解的 "),s("code",[a._v("exclude")]),a._v(" 参数即可，这里以关闭数据源的自动配置为例")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@SpringBootApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("exclude "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);