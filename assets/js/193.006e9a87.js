(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{798:function(e,r,a){"use strict";a.r(r);var s=a(2),t=Object(s.a)({},function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"macos-安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos-安装-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" macOS 安装 Docker")]),e._v(" "),a("h2",{attrs:{id:"系统要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统要求","aria-hidden":"true"}},[e._v("#")]),e._v(" 系统要求")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker for Mac"),a("OutboundLink")],1),e._v(" 要求系统最低为 macOS 10.10.3 Yosemite。如果系统不满足需求，可以安装 "),a("a",{attrs:{href:"https://docs.docker.com/toolbox/overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Toolbox"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("h3",{attrs:{id:"使用-homebrew-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-homebrew-安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 Homebrew 安装")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),a("OutboundLink")],1),e._v(" 的 "),a("a",{attrs:{href:"https://caskroom.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cask"),a("OutboundLink")],1),e._v(" 已经支持 Docker for Mac，因此可以很方便的使用 Homebrew Cask 来进行安装：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ brew cask "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" docker\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"手动下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动下载安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 手动下载安装")]),e._v(" "),a("p",[e._v("如果需要手动下载，请点击以下链接下载 "),a("a",{attrs:{href:"https://download.docker.com/mac/stable/Docker.dmg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stable"),a("OutboundLink")],1),e._v(" 或 "),a("a",{attrs:{href:"https://download.docker.com/mac/edge/Docker.dmg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Edge"),a("OutboundLink")],1),e._v(" 版本的 Docker for Mac。")]),e._v(" "),a("p",[e._v("如同 macOS 其它软件一样，安装也非常简单，双击下载的 "),a("code",[e._v(".dmg")]),e._v(" 文件，然后将那只叫 "),a("a",{attrs:{href:"https://blog.docker.com/2013/10/call-me-moby-dock/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Moby"),a("OutboundLink")],1),e._v(" 的鲸鱼图标拖拽到 "),a("code",[e._v("Application")]),e._v(" 文件夹即可（其间需要输入用户密码）。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/install-mac-dmg.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[e._v("#")]),e._v(" 运行")]),e._v(" "),a("p",[e._v("从应用中找到 Docker 图标并点击运行。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/install-mac-apps.png",alt:""}})]),e._v(" "),a("p",[e._v("运行之后，会在右上角菜单栏看到多了一个鲸鱼图标，这个图标表明了 Docker 的运行状态。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/install-mac-menubar.png",alt:""}})]),e._v(" "),a("p",[e._v('第一次点击图标，可能会看到这个安装成功的界面，点击 "Got it!" 可以关闭这个窗口。')]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/install-mac-success.png",alt:""}})]),e._v(" "),a("p",[e._v("以后每次点击鲸鱼图标会弹出操作菜单。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/install-mac-menu.png",alt:""}})]),e._v(" "),a("p",[e._v("启动终端后，通过命令可以检查安装后的 Docker 版本。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker --version\nDocker version 17.10.0-ce, build f4ffd25\n$ docker-compose --version\ndocker-compose version 1.17.0-rc1, build a0f95af\n$ docker-machine --version\ndocker-machine version 0.13.0, build 9ba6da9\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("如果 "),a("code",[e._v("docker version")]),e._v("、"),a("code",[e._v("docker info")]),e._v(" 都正常的话，可以尝试运行一个 "),a("a",{attrs:{href:"https://store.docker.com/images/nginx/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nginx 服务器"),a("OutboundLink")],1),e._v("：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run -d -p 80:80 --name webserver nginx\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("服务运行后，可以访问 "),a("a",{attrs:{href:"http://localhost",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost"),a("OutboundLink")],1),e._v('，如果看到了 "Welcome to nginx!"，就说明 Docker for Mac 安装成功了。')]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/install-mac-example-nginx.png",alt:""}})]),e._v(" "),a("p",[e._v("要停止 Nginx 服务器并删除执行下面的命令：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker stop webserver\n$ docker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" webserver\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速","aria-hidden":"true"}},[e._v("#")]),e._v(" 镜像加速")]),e._v(" "),a("p",[e._v("鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，强烈建议安装 Docker 之后配置 "),a("code",[e._v("国内镜像加速")]),e._v("。")])])},[],!1,null,null,null);r.default=t.exports}}]);