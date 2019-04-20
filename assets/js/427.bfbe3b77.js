(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{732:function(v,e,_){"use strict";_.r(e);var a=_(0),r=Object(a.a)({},function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"log4j-日志输出控制文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#log4j-日志输出控制文件","aria-hidden":"true"}},[v._v("#")]),v._v(" Log4j 日志输出控制文件")]),v._v(" "),_("h2",{attrs:{id:"本节视频"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[v._v("#")]),v._v(" 本节视频")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.bilibili.com/video/av24509595/",target:"_blank",rel:"noopener noreferrer"}},[v._v("【视频】基础框架入门-Log4j-Log4j 日志输出控制文件"),_("OutboundLink")],1)])]),v._v(" "),_("h2",{attrs:{id:"日志输出简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日志输出简介","aria-hidden":"true"}},[v._v("#")]),v._v(" 日志输出简介")]),v._v(" "),_("p",[v._v("Log4j 的日志输出控制文件，主要由三个部分构成：")]),v._v(" "),_("ul",[_("li",[v._v("日志信息的输出位置：控制日志信息将要输出的位置，是控制台还是文件等。")]),v._v(" "),_("li",[v._v("日志信息的输出格式：控制日志信息的显示格式，即以怎样的字符串形式显示。")]),v._v(" "),_("li",[v._v("日志信息的输出级别：控制日志信息的显示内容，即显示哪些级别的日志信息。")])]),v._v(" "),_("p",[v._v("有了日志输出控制文件，代码中只要设置好日志信息内容及其级别即可，通过控制文件便可控制这些日志信息的输出了。")]),v._v(" "),_("h2",{attrs:{id:"日志属性配置文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日志属性配置文件","aria-hidden":"true"}},[v._v("#")]),v._v(" 日志属性配置文件")]),v._v(" "),_("p",[v._v("日志属性文件 "),_("code",[v._v("log4j.properties")]),v._v(" 是专门用于控制日志输出的。其主要进行三方面控制：")]),v._v(" "),_("ul",[_("li",[v._v("输出位置：控制日志将要输出的位置，是控制台还是文件等。")]),v._v(" "),_("li",[v._v("输出布局：控制日志信息的显示形式。")]),v._v(" "),_("li",[v._v("输出级别：控制要输出的日志级别。")])]),v._v(" "),_("p",[v._v("日志属性文件由两个对象组成：日志附加器与根日志。")]),v._v(" "),_("p",[v._v("根日志，即为 Java 代码中的日志记录器，其主要由两个属性构成：日志输出级别与日志附加器。")]),v._v(" "),_("p",[v._v("日志附加器，则由日志输出位置定义，由其它很多属性进行修饰，如输出布局、文件位置、文件大小等。")]),v._v(" "),_("h2",{attrs:{id:"什么是日志附加器？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是日志附加器？","aria-hidden":"true"}},[v._v("#")]),v._v(" 什么是日志附加器？")]),v._v(" "),_("p",[v._v("所谓日志附加器，就是为日志记录器附加上很多其它设置信息。附加器的本质是一个接口，其定义语法为："),_("code",[v._v("log4j.appender.appenderName")]),v._v(" = "),_("code",[v._v("输出位置")])]),v._v(" "),_("h3",{attrs:{id:"常用的附加器实现类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的附加器实现类","aria-hidden":"true"}},[v._v("#")]),v._v(" 常用的附加器实现类")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("org.apache.log4j.ConsoleAppender")]),v._v("：日志输出到控制台")]),v._v(" "),_("li",[_("code",[v._v("org.apache.log4j.FileAppender")]),v._v("：日志输出到文件")]),v._v(" "),_("li",[_("code",[v._v("org.apache.log4j.RollingFileAppender")]),v._v("：当日志文件大小到达指定尺寸的时候将产生一个新的日志文件")]),v._v(" "),_("li",[_("code",[v._v("org.apache.log4j.DailyRollingFileAppender")]),v._v("：每天产生一个日志文件")])]),v._v(" "),_("h2",{attrs:{id:"常用布局类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用布局类型","aria-hidden":"true"}},[v._v("#")]),v._v(" 常用布局类型")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("org.apache.log4j.HTMLLayout")]),v._v("：网页布局，以 HTML 表格形式布局")]),v._v(" "),_("li",[_("code",[v._v("org.apache.log4j.SimpleLayout")]),v._v("：简单布局，包含日志信息的级别和信息字符串")]),v._v(" "),_("li",[_("code",[v._v("org.apache.log4j.PatternLayout")]),v._v("：匹配器布局，可以灵活地指定布局模式。其主要是通过设置 PatternLayout 的 ConversionPattern 属性值来控制具体输出格式的 。")])]),v._v(" "),_("p",[v._v("打印参数: Log4J 采用类似 C 语言中的 printf 函数的打印格式格式化日志信息")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("%m")]),v._v("：输出代码中指定的消息")]),v._v(" "),_("li",[_("code",[v._v("%p")]),v._v("：输出优先级，即 "),_("code",[v._v("DEBUG")]),v._v("，"),_("code",[v._v("INFO")]),v._v("，"),_("code",[v._v("WARN")]),v._v("，"),_("code",[v._v("ERROR")]),v._v("，"),_("code",[v._v("FATAL")])]),v._v(" "),_("li",[_("code",[v._v("%r")]),v._v("：输出自应用启动到输出该 log 信息耗费的毫秒数")]),v._v(" "),_("li",[_("code",[v._v("%c")]),v._v("：输出所属的类目，通常就是所在类的全名")]),v._v(" "),_("li",[_("code",[v._v("%t")]),v._v("：输出产生该日志事件的线程名")]),v._v(" "),_("li",[_("code",[v._v("%n")]),v._v("：输出一个回车换行符，Windows 平台为 "),_("code",[v._v("/r/n")]),v._v("，Unix 平台为 "),_("code",[v._v("/n")])]),v._v(" "),_("li",[_("code",[v._v("%d")]),v._v("：输出日志时间点的日期或时间，默认格式为 ISO8601，也可以在其后指定格式，比如：%d{yyy MMM dd HH:mm:ss , SSS}，输出类似：2002年10月18日 22:10:28,921")]),v._v(" "),_("li",[_("code",[v._v("%l")]),v._v("：输出日志事件的发生位置，包括类目名、发生的线程，以及在代码中的行数。举例：Testlog4.main(TestLog4.java: 10 )")])])])},[],!1,null,null,null);e.default=r.exports}}]);