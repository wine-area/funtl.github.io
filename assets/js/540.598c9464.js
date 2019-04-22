(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{518:function(a,s,t){"use strict";t.r(s);var n=t(2),e=Object(n.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"使用熔断器防止服务雪崩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用熔断器防止服务雪崩","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用熔断器防止服务雪崩")]),a._v(" "),t("h2",{attrs:{id:"本节视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[a._v("#")]),a._v(" 本节视频")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av40734071/",target:"_blank",rel:"noopener noreferrer"}},[a._v("【视频】Spring Cloud Alibaba-Sentinel-熔断器防止服务雪崩"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("在微服务架构中，根据业务来拆分成一个个的服务，服务与服务之间可以通过 "),t("code",[a._v("RPC")]),a._v(" 相互调用，在 Spring Cloud 中可以用 "),t("code",[a._v("RestTemplate + LoadBalanceClient")]),a._v(" 和 "),t("code",[a._v("Feign")]),a._v(" 来调用。为了保证其高可用，单个服务通常会集群部署。由于网络原因或者自身的原因，服务并不能保证 100% 可用，如果单个服务出现问题，调用这个服务就会出现线程阻塞，此时若有大量的请求涌入，"),t("code",[a._v("Servlet")]),a._v(" 容器的线程资源会被消耗完毕，导致服务瘫痪。服务与服务之间的依赖性，故障会传播，会对整个微服务系统造成灾难性的严重后果，这就是服务故障的 "),t("strong",[a._v("“雪崩”")]),a._v(" 效应。")]),a._v(" "),t("p",[a._v("为了解决这个问题，业界提出了熔断器模型。")]),a._v(" "),t("p",[a._v("阿里巴巴开源了 Sentinel 组件，实现了熔断器模式，Spring Cloud 对这一组件进行了整合。在微服务架构中，一个请求需要调用多个服务是非常常见的，如下图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer201805292246007.png",alt:""}})]),a._v(" "),t("p",[a._v("较底层的服务如果出现故障，会导致连锁故障。当对特定的服务的调用的不可用达到一个阀值熔断器将会被打开。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/assets1/Lusifer201901080205008.png",alt:""}})]),a._v(" "),t("p",[a._v("熔断器打开后，为了避免连锁故障，通过 "),t("code",[a._v("fallback")]),a._v(" 方法可以直接返回一个固定值。")]),a._v(" "),t("h2",{attrs:{id:"什么是-sentinel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-sentinel","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是 Sentinel")]),a._v(" "),t("p",[a._v("随着微服务的流行，服务和服务之间的稳定性变得越来越重要。 Sentinel 以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。")]),a._v(" "),t("h2",{attrs:{id:"sentinel-的特征"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-的特征","aria-hidden":"true"}},[a._v("#")]),a._v(" Sentinel 的特征")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("丰富的应用场景：")]),a._v(" Sentinel 承接了阿里巴巴近 10 年的 "),t("strong",[a._v("双十一大促流量")]),a._v(" 的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、实时熔断下游不可用应用等。")]),a._v(" "),t("li",[t("strong",[a._v("完备的实时监控：")]),a._v(" Sentinel 同时提供实时的监控功能。您可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况。")]),a._v(" "),t("li",[t("strong",[a._v("广泛的开源生态：")]),a._v(" Sentinel 提供开箱即用的与其它开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合。您只需要引入相应的依赖并进行简单的配置即可快速地接入 Sentinel。")]),a._v(" "),t("li",[t("strong",[a._v("完善的 SPI 扩展点：")]),a._v(" Sentinel 提供简单易用、完善的 SPI 扩展点。您可以通过实现扩展点，快速的定制逻辑。例如定制规则管理、适配数据源等。")])]),a._v(" "),t("h2",{attrs:{id:"feign-中使用-sentinel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feign-中使用-sentinel","aria-hidden":"true"}},[a._v("#")]),a._v(" Feign 中使用 Sentinel")]),a._v(" "),t("p",[a._v("如果要在您的项目中引入 Sentinel，使用 group ID 为 "),t("code",[a._v("org.springframework.cloud")]),a._v(" 和 artifact ID 为 "),t("code",[a._v("spring-cloud-starter-alibaba-sentinel")]),a._v(" 的 starter。")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.cloud"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-alibaba-sentinel"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("Sentinel 适配了 Feign 组件。但默认是关闭的。需要在配置文件中配置打开它，在配置文件增加以下代码：")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("feign")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sentinel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"在-service-中增加-fallback-指定类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-service-中增加-fallback-指定类","aria-hidden":"true"}},[a._v("#")]),a._v(" 在 Service 中增加 fallback 指定类")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("funtl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("spring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("alibaba"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nacos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("consumer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("feign"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("funtl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("spring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("alibaba"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nacos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("consumer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("feign"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fallback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoServiceFallback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("openfeign")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FeignClient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PathVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@FeignClient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nacos-provider"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" fallback "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoServiceFallback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoService")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/echo/{message}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("echo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@PathVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"message"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h3",{attrs:{id:"创建熔断器类并实现对应的-feign-接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建熔断器类并实现对应的-feign-接口","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建熔断器类并实现对应的 Feign 接口")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("funtl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("spring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("alibaba"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nacos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("consumer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("feign"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fallback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("funtl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("spring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("alibaba"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nacos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("consumer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("feign"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("stereotype")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Component")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoServiceFallback")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoService")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("echo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"echo fallback"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("h2",{attrs:{id:"测试熔断器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试熔断器","aria-hidden":"true"}},[a._v("#")]),a._v(" 测试熔断器")]),a._v(" "),t("p",[a._v("此时我们关闭服务提供者，再次请求 http://localhost:9092/echo/hi 浏览器会显示：")]),a._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[a._v("echo fallback\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])},[],!1,null,null,null);s.default=e.exports}}]);