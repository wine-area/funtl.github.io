(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{378:function(e,s,a){"use strict";a.r(s);var n=a(2),t=Object(n.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"使用-nginx-解决跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-nginx-解决跨域问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 Nginx 解决跨域问题")]),e._v(" "),a("h2",{attrs:{id:"本节视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[e._v("#")]),e._v(" 本节视频")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av35251789/",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】Dubbo 实现微服务架构-使用 Nginx 解决跨域问题-CORS"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av35395247/",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】Dubbo 实现微服务架构-使用 Nginx 解决跨域问题-假请求问题"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("在浏览器端进行 Ajax 请求时会出现跨域问题，那么什么是跨域，如何解决跨域呢？先看浏览器端出现跨域问题的现象，如下图所示")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1520520301.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"什么是跨域问题？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域问题？","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是跨域问题？")]),e._v(" "),a("p",[e._v("跨域，指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对 JavaScript 施加的安全限制。")]),e._v(" "),a("h2",{attrs:{id:"什么是同源？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是同源？","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是同源？")]),e._v(" "),a("p",[e._v("所谓同源是指，域名，协议，端口均相同")]),e._v(" "),a("ul",[a("li",[e._v("http://www.funtl.com --\x3e http://admin.funtl.com 跨域")]),e._v(" "),a("li",[e._v("http://www.funtl.com --\x3e http://www.funtl.com 非跨域")]),e._v(" "),a("li",[e._v("http://www.funtl.com --\x3e http://www.funtl.com:8080 跨域")]),e._v(" "),a("li",[e._v("http://www.funtl.com --\x3e https://www.funtl.com 跨域")])]),e._v(" "),a("h2",{attrs:{id:"如何解决跨域问题？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决跨域问题？","aria-hidden":"true"}},[e._v("#")]),e._v(" 如何解决跨域问题？")]),e._v(" "),a("h3",{attrs:{id:"使用-cors（跨资源共享）解决跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-cors（跨资源共享）解决跨域问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 CORS（跨资源共享）解决跨域问题")]),e._v(" "),a("p",[e._v('CORS 是一个 W3C 标准，全称是"跨域资源共享"（Cross-origin resource sharing）。它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。')]),e._v(" "),a("p",[e._v("CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE 浏览器不能低于 IE10。整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与同源的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信（在 "),a("code",[e._v("header")]),e._v(" 中设置："),a("code",[e._v("Access-Control-Allow-Origin")]),e._v("）")]),e._v(" "),a("h3",{attrs:{id:"使用-jsonp-解决跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-jsonp-解决跨域问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 JSONP 解决跨域问题")]),e._v(" "),a("p",[e._v("JSONP（JSON with Padding）是 JSON 的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题。由于同源策略，一般来说位于 "),a("code",[e._v("server1.example.com")]),e._v(" 的网页无法与 "),a("code",[e._v("server2.example.com")]),e._v(" 的服务器沟通，而 HTML 的 "),a("code",[e._v("<script>")]),e._v(" 元素是一个例外。利用 "),a("code",[e._v("<script>")]),e._v(" 元素的这个开放策略，网页可以得到从其他来源动态产生的 JSON 资料，而这种使用模式就是所谓的 JSONP。用 JSONP 抓到的资料并不是 JSON，而是任意的 JavaScript，用 JavaScript 直译器执行而不是用 JSON 解析器解析（需要目标服务器配合一个 "),a("code",[e._v("callback")]),e._v(" 函数）。")]),e._v(" "),a("h3",{attrs:{id:"cors-与-jsonp-的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors-与-jsonp-的比较","aria-hidden":"true"}},[e._v("#")]),e._v(" CORS 与 JSONP 的比较")]),e._v(" "),a("p",[e._v("CORS 与 JSONP 的使用目的相同，但是比 JSONP 更强大。")]),e._v(" "),a("p",[e._v("JSONP 只支持 GET 请求，CORS 支持所有类型的 HTTP 请求。JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据。")]),e._v(" "),a("h3",{attrs:{id:"使用-nginx-反向代理解决跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-nginx-反向代理解决跨域问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 Nginx 反向代理解决跨域问题")]),e._v(" "),a("p",[e._v("以上跨域问题解决方案都需要服务器支持，当服务器无法设置 "),a("code",[e._v("header")]),e._v(" 或提供 "),a("code",[e._v("callback")]),e._v(" 时我们就可以采用 Nginx 反向代理的方式解决跨域问题。")]),e._v(" "),a("p",[e._v("以下为文件上传的跨域配置方案：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("user  nginx;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\n    server {\n        listen 80;\n        server_name upload.myshop.com;\n        add_header 'Access-Control-Allow-Origin'  '*';\n        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';\n        location / {\n            proxy_pass  http://192.168.0.104:8888;\n            if ($request_method = 'OPTIONS') {\n                add_header Access-Control-Allow-Origin  *;\n                add_header Access-Control-Allow-Headers X-Requested-With;\n                add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,PATCH,OPTIONS;\n                # 解决假请求问题，如果是简单请求则没有这个问题，但这里是上传文件，首次请求为 OPTIONS 方式，实际请求为 POST 方式\n                # Provisional headers are shown.\n                # Request header field Cache-Control is not allowed by Access-Control-Allow-Headers in preflight response.\n                add_header Access-Control-Allow-Headers DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range;\n                return 200;\n            }\n        }\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br")])])])},[],!1,null,null,null);s.default=t.exports}}]);