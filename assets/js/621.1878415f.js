(window.webpackJsonp=window.webpackJsonp||[]).push([[621],{560:function(e,n,s){"use strict";s.r(n);var a=s(0),r=Object(a.a)({},function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"spring-整合-spring-mvc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-整合-spring-mvc","aria-hidden":"true"}},[e._v("#")]),e._v(" Spring 整合 Spring MVC")]),e._v(" "),s("h2",{attrs:{id:"本节视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[e._v("#")]),e._v(" 本节视频")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/av24741988/",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】Spring MVC 与 Maven 模块化开发-Spring 整合 Spring MVC"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"pom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pom","aria-hidden":"true"}},[e._v("#")]),e._v(" POM")]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v("pom.xml")]),e._v(" 配置文件中增加 "),s("code",[e._v("org.springframework:spring-webmvc")]),e._v(" 依赖")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<dependency>\n    <groupId>org.springframework</groupId>\n    <artifactId>spring-webmvc</artifactId>\n    <version>4.3.17.RELEASE</version>\n</dependency>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h2",{attrs:{id:"配置-web-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-web-xml","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置 "),s("code",[e._v("web.xml")])]),e._v(" "),s("h3",{attrs:{id:"characterencodingfilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#characterencodingfilter","aria-hidden":"true"}},[e._v("#")]),e._v(" CharacterEncodingFilter")]),e._v(" "),s("p",[e._v("配置字符集过滤器，用于解决中文编码问题")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<filter>\n    <filter-name>encodingFilter</filter-name>\n    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>\n    <init-param>\n        <param-name>encoding</param-name>\n        <param-value>UTF-8</param-value>\n    </init-param>\n    <init-param>\n        <param-name>forceEncoding</param-name>\n        <param-value>true</param-value>\n    </init-param>\n</filter>\n<filter-mapping>\n    <filter-name>encodingFilter</filter-name>\n    <url-pattern>/*</url-pattern>\n</filter-mapping>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("h3",{attrs:{id:"dispatcherservlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatcherservlet","aria-hidden":"true"}},[e._v("#")]),e._v(" DispatcherServlet")]),e._v(" "),s("p",[e._v("配置 Spring 的 Servlet 分发器处理所有 HTTP 的请求和响应")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<servlet>\n    <servlet-name>springServlet</servlet-name>\n    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n    <init-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>classpath*:/spring-mvc*.xml</param-value>\n    </init-param>\n    <load-on-startup>1</load-on-startup>\n</servlet>\n<servlet-mapping>\n    <servlet-name>springServlet</servlet-name>\n    <url-pattern>/</url-pattern>\n</servlet-mapping>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("h2",{attrs:{id:"配置-spring-mvc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-spring-mvc","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置 Spring MVC")]),e._v(" "),s("p",[e._v("创建一个名为 "),s("code",[e._v("spring-mvc.xml")]),e._v(" 文件来配置 MVC")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xmlns:mvc="http://www.springframework.org/schema/mvc"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd\n        http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd">\n\n    <description>Spring MVC Configuration</description>\n\n    \x3c!-- 加载配置属性文件 --\x3e\n    <context:property-placeholder ignore-unresolvable="true" location="classpath:myshop.properties"/>\n\n    \x3c!-- 使用 Annotation 自动注册 Bean,只扫描 @Controller --\x3e\n    <context:component-scan base-package="com.lusifer.myshop" use-default-filters="false">\n        <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>\n    </context:component-scan>\n\n    \x3c!-- 默认的注解映射的支持 --\x3e\n    <mvc:annotation-driven />\n\n    \x3c!-- 定义视图文件解析 --\x3e\n    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">\n        <property name="prefix" value="${web.view.prefix}"/>\n        <property name="suffix" value="${web.view.suffix}"/>\n    </bean>\n\n    \x3c!-- 静态资源映射 --\x3e\n    <mvc:resources mapping="/static/**" location="/static/" cache-period="31536000"/>\n</beans>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br")])]),s("p",[e._v("相关配置说明：")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("context:property-placeholder")]),e._v("：动态加载属性配置文件以变量的方式引用需要的值")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("context:component-scan")]),e._v("：当前配置文件为 MVC 相关，故只需要扫描包含 "),s("code",[e._v("@Controller")]),e._v(" 的注解即可，由于 "),s("code",[e._v("spring-context.xml")]),e._v(" 配置文件中也配置了包扫描，所以还需要排除 "),s("code",[e._v("@Controller")]),e._v(" 的注解扫描。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("InternalResourceViewResolver")]),e._v("：视图文件解析器的一种，用于配置视图资源的路径和需要解释的视图资源文件类型，这里有两个需要配置的属性 "),s("code",[e._v("prefix")]),e._v("（前缀）以及 "),s("code",[e._v("suffix")]),e._v("（后缀）。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("prefix")]),e._v("：配置视图资源路径，如："),s("code",[e._v("/WEB-INF/views/")])]),e._v(" "),s("li",[s("code",[e._v("suffix")]),e._v("：配置视图资源类型，如："),s("code",[e._v(".jsp")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("mvc:resources")]),e._v("：静态资源映射，主要用于配置静态资源文件存放路径，如：JS、CSS、Image 等")])])]),e._v(" "),s("h3",{attrs:{id:"系统相关配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统相关配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 系统相关配置")]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v("spring-mvc.xnl")]),e._v(" 中，我们配置了 "),s("code",[e._v('<context:property-placeholder ignore-unresolvable="true" location="classpath:myshop.properties"/>')]),e._v(" 用于动态加载属性配置文件，实际开发中我们会将系统所需的一些配置信息封装到 "),s("code",[e._v(".properties")]),e._v(" 配置文件中便于统一的管理。")]),e._v(" "),s("p",[e._v("创建一个名为 "),s("code",[e._v("myshop.properties")]),e._v(" 的配置文件，内容如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("#============================#\n#==== Framework settings ====#\n#============================#\n\n# \\u89c6\\u56fe\\u6587\\u4ef6\\u5b58\\u653e\\u8def\\u5f84\nweb.view.prefix=/WEB-INF/views/\nweb.view.suffix=.jsp\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h3",{attrs:{id:"去掉-spring-配置的重复扫描"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#去掉-spring-配置的重复扫描","aria-hidden":"true"}},[e._v("#")]),e._v(" 去掉 Spring 配置的重复扫描")]),e._v(" "),s("p",[e._v("由于 "),s("code",[e._v("spring-mvc.xml")]),e._v(" 中已经配置了 "),s("code",[e._v("@Controller")]),e._v(" 注解的扫描而 "),s("code",[e._v("spring-context.xml")]),e._v(" 中配置的是扫描全部注解，故在这里需要将 "),s("code",[e._v("@Controller")]),e._v(" 注解的扫描配置排除。")]),e._v(" "),s("p",[e._v("修改 "),s("code",[e._v("spring-context.xml")]),e._v(" 配置：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\x3c!-- 使用 Annotation 自动注册 Bean，在主容器中不扫描 @Controller 注解，在 SpringMVC 中只扫描 @Controller 注解。--\x3e\n<context:component-scan base-package="com.funtl.my.shop">\n    <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>\n</context:component-scan>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])])},[],!1,null,null,null);n.default=r.exports}}]);