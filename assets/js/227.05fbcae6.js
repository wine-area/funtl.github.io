(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{882:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"基于-docker-安装-gitlab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-gitlab","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于 Docker 安装 GitLab")]),s._v(" "),n("p",[s._v("我们使用 Docker 来安装和运行 GitLab 中文版，由于新版本问题较多，这里我们使用目前相对稳定的 10.5 版本，"),n("code",[s._v("docker-compose.yml")]),s._v(" 配置如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("version: '3'\nservices:\n    web:\n      image: 'twang2218/gitlab-ce-zh:10.5'\n      restart: always\n      hostname: '192.168.75.145'\n      environment:\n        TZ: 'Asia/Shanghai'\n        GITLAB_OMNIBUS_CONFIG: |\n          external_url 'http://192.168.75.145:8080'\n          gitlab_rails['gitlab_shell_ssh_port'] = 2222\n          unicorn['port'] = 8888\n          nginx['listen_port'] = 8080\n      ports:\n        - '8080:8080'\n        - '8443:443'\n        - '2222:22'\n      volumes:\n        - /usr/local/docker/gitlab/config:/etc/gitlab\n        - /usr/local/docker/gitlab/data:/var/opt/gitlab\n        - /usr/local/docker/gitlab/logs:/var/log/gitlab\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"安装完成后的工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装完成后的工作","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装完成后的工作")]),s._v(" "),n("ul",[n("li",[s._v("访问地址：http://ip:8080")]),s._v(" "),n("li",[s._v("端口 8080 是因为我在配置中设置的外部访问地址为 8080，默认是 80")]),s._v(" "),n("li",[s._v("初始化安装完成后效果如下：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/Lusifer1511797825.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("设置管理员初始密码，这里的密码最好是 字母 + 数字 组合，并且 大于等于 8 位")]),s._v(" "),n("li",[s._v("配置完成后登录，管理员账号是 root")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/Lusifer1511798229.png",alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("注意：")]),s._v(" 如果服务器配置较低，启动运行可能需要较长时间，请耐心等待")])])},[],!1,null,null,null);a.default=e.exports}}]);