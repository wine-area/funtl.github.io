(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{250:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"基于-docker-安装-fastdfs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-fastdfs","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于 Docker 安装 FastDFS")]),s._v(" "),n("h2",{attrs:{id:"本节视频"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.bilibili.com/video/av35251669/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】Dubbo 实现微服务架构-分布式文件系统-基于 Docker 安装 "),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境准备","aria-hidden":"true"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),n("p",[n("strong",[s._v("所需全部环境配置文件已上传至群中，通过首页扫码加群下载即可")])]),s._v(" "),n("ul",[n("li",[s._v("libfastcommon.tar.gz")]),s._v(" "),n("li",[s._v("fastdfs-5.11.tar.gz")]),s._v(" "),n("li",[s._v("nginx-1.13.6.tar.gz")]),s._v(" "),n("li",[s._v("fastdfs-nginx-module_v1.16.tar.gz")])]),s._v(" "),n("h2",{attrs:{id:"创建工作目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建工作目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建工作目录")]),s._v(" "),n("p",[s._v("在 Linux 服务器上创建 "),n("code",[s._v("/usr/local/docker/fastdfs/environmen")]),s._v(" 目录")]),s._v(" "),n("p",[s._v("说明：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("/usr/local/docker/fastdfs")]),s._v("：用于存放 "),n("code",[s._v("docker-compose.yml")]),s._v(" 配置文件及 FastDFS 的数据卷")]),s._v(" "),n("li",[n("code",[s._v("/usr/local/docker/fastdfs/environmen")]),s._v("：用于存放 "),n("code",[s._v("Dockerfile")]),s._v(" 镜像配置文件及 FastDFS 所需环境")])]),s._v(" "),n("h2",{attrs:{id:"docker-compose-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml","aria-hidden":"true"}},[s._v("#")]),s._v(" docker-compose.yml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("version: '3.1'\nservices:\n  fastdfs:\n    build: environment\n    restart: always\n    container_name: fastdfs\n    volumes:\n      - ./storage:/fastdfs/storage\n    network_mode: host\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile","aria-hidden":"true"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("FROM ubuntu:xenial\nMAINTAINER topsale@vip.qq.com\n\n# 更新数据源\nWORKDIR /etc/apt\nRUN echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse' > sources.list\nRUN echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse' >> sources.list\nRUN echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse' >> sources.list\nRUN echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse' >> sources.list\nRUN apt-get update\n\n# 安装依赖\nRUN apt-get install make gcc libpcre3-dev zlib1g-dev --assume-yes\n\n# 复制工具包\nADD fastdfs-5.11.tar.gz /usr/local/src\nADD fastdfs-nginx-module_v1.16.tar.gz /usr/local/src\nADD libfastcommon.tar.gz /usr/local/src\nADD nginx-1.13.6.tar.gz /usr/local/src\n\n# 安装 libfastcommon\nWORKDIR /usr/local/src/libfastcommon\nRUN ./make.sh && ./make.sh install\n\n# 安装 FastDFS\nWORKDIR /usr/local/src/fastdfs-5.11\nRUN ./make.sh && ./make.sh install\n\n# 配置 FastDFS 跟踪器\nADD tracker.conf /etc/fdfs\nRUN mkdir -p /fastdfs/tracker\n\n# 配置 FastDFS 存储\nADD storage.conf /etc/fdfs\nRUN mkdir -p /fastdfs/storage\n\n# 配置 FastDFS 客户端\nADD client.conf /etc/fdfs\n\n# 配置 fastdfs-nginx-module\nADD config /usr/local/src/fastdfs-nginx-module/src\n\n# FastDFS 与 Nginx 集成\nWORKDIR /usr/local/src/nginx-1.13.6\nRUN ./configure --add-module=/usr/local/src/fastdfs-nginx-module/src\nRUN make && make install\nADD mod_fastdfs.conf /etc/fdfs\n\nWORKDIR /usr/local/src/fastdfs-5.11/conf\nRUN cp http.conf mime.types /etc/fdfs/\n\n# 配置 Nginx\nADD nginx.conf /usr/local/nginx/conf\n\nCOPY entrypoint.sh /usr/local/bin/\nENTRYPOINT [\"/usr/local/bin/entrypoint.sh\"]\n\nWORKDIR /\nEXPOSE 8888\nCMD [\"/bin/bash\"]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br")])]),n("h2",{attrs:{id:"entrypoint-sh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint-sh","aria-hidden":"true"}},[s._v("#")]),s._v(" entrypoint.sh")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#!/bin/sh\n/etc/init.d/fdfs_trackerd start\n/etc/init.d/fdfs_storaged start\n/usr/local/nginx/sbin/nginx -g 'daemon off;'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("注：Shell 创建后是无法直接使用的，需要赋予执行的权限，使用 "),n("code",[s._v("chmod +x entrypoint.sh")]),s._v(" 命令")]),s._v(" "),n("h2",{attrs:{id:"各种配置文件说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#各种配置文件说明","aria-hidden":"true"}},[s._v("#")]),s._v(" 各种配置文件说明")]),s._v(" "),n("h3",{attrs:{id:"tracker-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tracker-conf","aria-hidden":"true"}},[s._v("#")]),s._v(" tracker.conf")]),s._v(" "),n("p",[s._v("FastDFS 跟踪器配置，容器中路径为：/etc/fdfs，修改为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("base_path=/fastdfs/tracker\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"storage-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#storage-conf","aria-hidden":"true"}},[s._v("#")]),s._v(" storage.conf")]),s._v(" "),n("p",[s._v("FastDFS 存储配置，容器中路径为：/etc/fdfs，修改为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("base_path=/fastdfs/storage\nstore_path0=/fastdfs/storage\ntracker_server=192.168.75.128:22122\nhttp.server_port=8888\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"client-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client-conf","aria-hidden":"true"}},[s._v("#")]),s._v(" client.conf")]),s._v(" "),n("p",[s._v("FastDFS 客户端配置，容器中路径为：/etc/fdfs，修改为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("base_path=/fastdfs/tracker\ntracker_server=192.168.75.128:22122\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[s._v("#")]),s._v(" config")]),s._v(" "),n("p",[s._v("fastdfs-nginx-module 配置文件，容器中路径为：/usr/local/src/fastdfs-nginx-module/src，修改为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 修改前\nCORE_INCS="$CORE_INCS /usr/local/include/fastdfs /usr/local/include/fastcommon/"\nCORE_LIBS="$CORE_LIBS -L/usr/local/lib -lfastcommon -lfdfsclient"\n\n# 修改后\nCORE_INCS="$CORE_INCS /usr/include/fastdfs /usr/include/fastcommon/"\nCORE_LIBS="$CORE_LIBS -L/usr/lib -lfastcommon -lfdfsclient"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"mod-fastdfs-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mod-fastdfs-conf","aria-hidden":"true"}},[s._v("#")]),s._v(" mod_fastdfs.conf")]),s._v(" "),n("p",[s._v("fastdfs-nginx-module 配置文件，容器中路径为：/usr/local/src/fastdfs-nginx-module/src，修改为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("connect_timeout=10\ntracker_server=192.168.75.128:22122\nurl_have_group_name = true\nstore_path0=/fastdfs/storage\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"nginx-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-conf","aria-hidden":"true"}},[s._v("#")]),s._v(" nginx.conf")]),s._v(" "),n("p",[s._v("Nginx 配置文件，容器中路径为：/usr/local/src/nginx-1.13.6/conf，修改为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("user  root;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\n    server {\n        listen       8888;\n        server_name  localhost;\n\n        location ~/group([0-9])/M00 {\n            ngx_fastdfs_module;\n        }\n\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("h2",{attrs:{id:"启动容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动容器","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker-compose up -d\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"测试上传"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试上传","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试上传")]),s._v(" "),n("h3",{attrs:{id:"交互式进入容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#交互式进入容器","aria-hidden":"true"}},[s._v("#")]),s._v(" 交互式进入容器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker exec -it fastdfs /bin/bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"测试文件上传"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试文件上传","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试文件上传")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/usr/bin/fdfs_upload_file /etc/fdfs/client.conf /usr/local/src/fastdfs-5.11/INSTALL\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"服务器反馈上传地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务器反馈上传地址","aria-hidden":"true"}},[s._v("#")]),s._v(" 服务器反馈上传地址")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("group1/M00/00/00/wKhLi1oHVMCAT2vrAAAeSwu9TgM3976771\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"测试-nginx-访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试-nginx-访问","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试 Nginx 访问")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://192.168.75.128:8888/group1/M00/00/00/wKhLi1oHVMCAT2vrAAAeSwu9TgM3976771\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])},[],!1,null,null,null);a.default=t.exports}}]);