(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{232:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"基于-docker-安装-jenkins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-jenkins","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于 Docker 安装 Jenkins")]),s._v(" "),e("h2",{attrs:{id:"本节视频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.bilibili.com/video/av34862403/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】Dubbo 实现微服务架构-持续交付-基于 Docker 安装 Jenkins"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[s._v("#")]),s._v(" docker-compose")]),s._v(" "),e("p",[s._v("Jenkins 是一个简单易用的持续集成软件平台，我们依然采用 Docker 的方式部署，"),e("code",[s._v("docker-compose.yml")]),s._v(" 配置文件如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("version: '3.1'\nservices:\n  jenkins:\n    restart: always\n    image: jenkinsci/jenkins\n    container_name: jenkins\n    ports:\n      # 发布端口\n      - 8080:8080\n      # 基于 JNLP 的 Jenkins 代理通过 TCP 端口 50000 与 Jenkins master 进行通信\n      - 50000:50000\n    environment:\n      TZ: Asia/Shanghai\n    volumes:\n      - ./data:/var/jenkins_home\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("安装过程中会出现 "),e("code",[s._v("Docker 数据卷")]),s._v(" 权限问题，用以下命令解决：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("chown -R 1000 /usr/local/docker/jenkins/data\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"解锁-jenkins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解锁-jenkins","aria-hidden":"true"}},[s._v("#")]),s._v(" 解锁 Jenkins")]),s._v(" "),e("p",[s._v("Jenkins 第一次启动时需要输入一个初始密码用以解锁安装流程，使用 "),e("code",[s._v("docker logs jenkins")]),s._v(" 即可方便的查看到初始密码")]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029010826.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029010853.png",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("注意：")]),s._v(" 安装时可能会因为网速等原因导致安装时间比较长，请大家耐心等待。如果长时间停留在安装页没反应，请尝试使用 "),e("code",[s._v("F5")]),s._v(" 刷新一下。")]),s._v(" "),e("h2",{attrs:{id:"使用自定义插件的方式安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义插件的方式安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用自定义插件的方式安装")]),s._v(" "),e("p",[s._v("插件是 Jenkins 的核心，其丰富的插件（截止到 "),e("code",[s._v("2018.10.29")]),s._v(" 共有 "),e("code",[s._v("77350")]),s._v(" 个插件）可以满足不同人群的不同需求")]),s._v(" "),e("p",[s._v("插件地址：https://plugins.jenkins.io/")]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029012228.png",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("注意：")]),s._v(" 除了默认勾选的插件外，一定要勾选 "),e("code",[s._v("Publish over SSH")]),s._v(" 插件，这是我们实现持续交付的重点插件。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029013023.png",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("开始安装了，根据网络情况，安装时间可能会比较长，请耐心等待")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029013257.png",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("很多插件装不上怎么办？不要慌，记住这些插件的名字，咱们稍后可以手动安装")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029013529.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"安装成功效果图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装成功效果图","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装成功效果图")]),s._v(" "),e("ul",[e("li",[s._v("创建管理员")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029014606.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("安装完成，进入首页")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029014814.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"附：jenkins-手动安装插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附：jenkins-手动安装插件","aria-hidden":"true"}},[s._v("#")]),s._v(" 附：Jenkins 手动安装插件")]),s._v(" "),e("h3",{attrs:{id:"使用插件管理器安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用插件管理器安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用插件管理器安装")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Manage Jenkins")]),s._v(" -> "),e("code",[s._v("Manage Plugins")]),s._v(" -> "),e("code",[s._v("Avaliable")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029015721.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("过滤出想要安装的插件，然后点击 "),e("code",[s._v("Download now and install after restart")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029015918.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029020240.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"手动上传-hpi-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动上传-hpi-文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 手动上传 "),e("code",[s._v(".hpi")]),s._v(" 文件")]),s._v(" "),e("ul",[e("li",[s._v("点击进入插件中心")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029021411.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("点击 "),e("code",[s._v("Archives")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029021906.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("下载需要的版本")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029022059.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("在插件管理器中选择 "),e("code",[s._v("Advanced")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029022309.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("选择上传即可")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029022410.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"重启-jenkins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启-jenkins","aria-hidden":"true"}},[s._v("#")]),s._v(" 重启 Jenkins")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker-compose down\ndocker-compose up -d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("注意：")]),s._v(" 请留意需要下载插件的警告信息，如果不满足安装条件，Jenkins 是会拒绝安装的。如下图：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/Lusifer_20181029021640.png",alt:""}})])])},[],!1,null,null,null);a.default=r.exports}}]);