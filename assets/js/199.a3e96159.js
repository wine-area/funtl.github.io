(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{819:function(a,s,e){"use strict";e.r(s);var t=e(2),n=Object(t.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker-容器访问控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器访问控制","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker 容器访问控制")]),a._v(" "),e("p",[a._v("容器的访问控制，主要通过 Linux 上的 "),e("code",[a._v("iptables")]),a._v(" 防火墙来进行管理和实现。"),e("code",[a._v("iptables")]),a._v(" 是 Linux 上默认的防火墙软件，在大部分发行版中都自带。")]),a._v(" "),e("h2",{attrs:{id:"容器访问外部网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器访问外部网络","aria-hidden":"true"}},[a._v("#")]),a._v(" 容器访问外部网络")]),a._v(" "),e("p",[a._v("容器要想访问外部网络，需要本地系统的转发支持。在Linux 系统中，检查转发是否打开。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$sysctl")]),a._v(" net.ipv4.ip_forward\nnet.ipv4.ip_forward "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("如果为 0，说明没有开启转发，则需要手动打开。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$sysctl")]),a._v(" -w net.ipv4.ip_forward"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("如果在启动 Docker 服务的时候设定 "),e("code",[a._v("--ip-forward=true")]),a._v(", Docker 就会自动设定系统的 "),e("code",[a._v("ip_forward")]),a._v(" 参数为 1。")]),a._v(" "),e("h2",{attrs:{id:"容器之间访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器之间访问","aria-hidden":"true"}},[a._v("#")]),a._v(" 容器之间访问")]),a._v(" "),e("p",[a._v("容器之间相互访问，需要两方面的支持。")]),a._v(" "),e("ul",[e("li",[a._v("容器的网络拓扑是否已经互联。默认情况下，所有容器都会被连接到 "),e("code",[a._v("docker0")]),a._v(" 网桥上。")]),a._v(" "),e("li",[a._v("本地系统的防火墙软件 -- "),e("code",[a._v("iptables")]),a._v(" 是否允许通过。")])]),a._v(" "),e("h3",{attrs:{id:"访问所有端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问所有端口","aria-hidden":"true"}},[a._v("#")]),a._v(" 访问所有端口")]),a._v(" "),e("p",[a._v("当启动 Docker 服务时候，默认会添加一条转发策略到 iptables 的 FORWARD 链上。策略为通过（"),e("code",[a._v("ACCEPT")]),a._v("）还是禁止（"),e("code",[a._v("DROP")]),a._v("）取决于配置"),e("code",[a._v("--icc=true")]),a._v("（缺省值）还是 "),e("code",[a._v("--icc=false")]),a._v("。当然，如果手动指定 "),e("code",[a._v("--iptables=false")]),a._v(" 则不会添加 "),e("code",[a._v("iptables")]),a._v(" 规则。")]),a._v(" "),e("p",[a._v("可见，默认情况下，不同容器之间是允许网络互通的。如果为了安全考虑，可以在 "),e("code",[a._v("/etc/default/docker")]),a._v(" 文件中配置 "),e("code",[a._v("DOCKER_OPTS=--icc=false")]),a._v(" 来禁止它。")]),a._v(" "),e("h3",{attrs:{id:"访问指定端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问指定端口","aria-hidden":"true"}},[a._v("#")]),a._v(" 访问指定端口")]),a._v(" "),e("p",[a._v("在通过 "),e("code",[a._v("-icc=false")]),a._v(" 关闭网络访问后，还可以通过 "),e("code",[a._v("--link=CONTAINER_NAME:ALIAS")]),a._v(" 选项来访问容器的开放端口。")]),a._v(" "),e("p",[a._v("例如，在启动 Docker 服务时，可以同时使用 "),e("code",[a._v("icc=false --iptables=true")]),a._v(" 参数来关闭允许相互的网络访问，并让 Docker 可以修改系统中的 "),e("code",[a._v("iptables")]),a._v(" 规则。")]),a._v(" "),e("p",[a._v("此时，系统中的 "),e("code",[a._v("iptables")]),a._v(" 规则可能是类似")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" iptables -nL\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nChain FORWARD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("policy ACCEPT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ntarget     prot opt "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v("               destination\nDROP       all  --  0.0.0.0/0            0.0.0.0/0\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("之后，启动容器（"),e("code",[a._v("docker run")]),a._v("）时使用 "),e("code",[a._v("--link=CONTAINER_NAME:ALIAS")]),a._v(" 选项。Docker 会在 "),e("code",[a._v("iptable")]),a._v(" 中为 两个容器分别添加一条 "),e("code",[a._v("ACCEPT")]),a._v(" 规则，允许相互访问开放的端口（取决于 "),e("code",[a._v("Dockerfile")]),a._v(" 中的 "),e("code",[a._v("EXPOSE")]),a._v(" 指令）。")]),a._v(" "),e("p",[a._v("当添加了 "),e("code",[a._v("--link=CONTAINER_NAME:ALIAS")]),a._v(" 选项后，添加了 "),e("code",[a._v("iptables")]),a._v(" 规则。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" iptables -nL\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nChain FORWARD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("policy ACCEPT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ntarget     prot opt "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v("               destination\nACCEPT     tcp  --  172.17.0.2           172.17.0.3           tcp spt:80\nACCEPT     tcp  --  172.17.0.3           172.17.0.2           tcp dpt:80\nDROP       all  --  0.0.0.0/0            0.0.0.0/0\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("注意："),e("code",[a._v("--link=CONTAINER_NAME:ALIAS")]),a._v(" 中的 "),e("code",[a._v("CONTAINER_NAME")]),a._v(" 目前必须是 Docker 分配的名字，或使用 "),e("code",[a._v("--name")]),a._v(" 参数指定的名字。主机名则不会被识别。")])])},[],!1,null,null,null);s.default=n.exports}}]);