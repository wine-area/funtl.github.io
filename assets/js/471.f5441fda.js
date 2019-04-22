(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{598:function(s,r,t){"use strict";t.r(r);var a=t(2),e=Object(a.a)({},function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装-docker-registry-私服"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-registry-私服","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 Docker Registry 私服")]),s._v(" "),t("h2",{attrs:{id:"本节视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av27624569",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】平台即服务-Registry-简介与安装"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("官方的 Docker Hub 是一个用于管理公共镜像的地方，我们可以在上面找到我们想要的镜像，也可以把我们自己的镜像推送上去。但是，有时候我们的服务器无法访问互联网，或者你不希望将自己的镜像放到公网当中，那么你就需要 Docker Registry，它可以用来存储和管理自己的镜像。")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("在之前的 "),t("router-link",{attrs:{to:"/2018/05/13/docker/Docker-私有仓库/"}},[s._v("Docker 私有仓库")]),s._v(" 章节中已经提到过如何配置和使用容器运行私有仓库，这里我们使用 "),t("code",[s._v("docker-compose")]),s._v(" 来安装，配置如下：")],1),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("version: '3.1'\nservices:\n  registry:\n    image: registry\n    restart: always\n    container_name: registry\n    ports:\n      - 5000:5000\n    volumes:\n      - /usr/local/docker/registry/data:/var/lib/registry\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),t("p",[s._v("启动成功后需要测试服务端是否能够正常提供服务，有两种方式：")]),s._v(" "),t("ul",[t("li",[s._v("浏览器端访问")])]),s._v(" "),t("p",[s._v("http://ip:5000/v2/")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer1520955730.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("终端访问")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl http://ip:5000/v2/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"/assets/Lusifer1520955773.png",alt:""}})])])},[],!1,null,null,null);r.default=e.exports}}]);