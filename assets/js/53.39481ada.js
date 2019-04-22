(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{361:function(e,a,s){"use strict";s.r(a);var r=s(0),t=Object(r.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"附：linux-下手动安装-zookeeper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附：linux-下手动安装-zookeeper","aria-hidden":"true"}},[e._v("#")]),e._v(" 附：Linux 下手动安装 Zookeeper")]),e._v(" "),s("p",[e._v("Zookeeper 部署有三种方式，单机模式、集群模式、伪集群模式，以下采用手动安装的方式部署")]),e._v(" "),s("p",[s("strong",[e._v("注意：")]),e._v(" 集群为大于等于3个奇数，如 3、5、7,不宜太多，集群机器多了选举和数据同步耗时长，不稳定。")]),e._v(" "),s("h2",{attrs:{id:"单机模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单机模式","aria-hidden":"true"}},[e._v("#")]),e._v(" 单机模式")]),e._v(" "),s("h3",{attrs:{id:"下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载","aria-hidden":"true"}},[e._v("#")]),e._v(" 下载")]),e._v(" "),s("p",[e._v("进入要下载的版本的目录，选择 "),s("code",[e._v(".tar.gz")]),e._v(" 文件下载，下载链接：http://archive.apache.org/dist/zookeeper/")]),e._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),s("p",[s("strong",[e._v("注意：")]),e._v(" 需要先安装 "),s("code",[e._v("Java")])]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("tar")]),e._v(" 解压要安装的目录即可，以 "),s("code",[e._v("3.4.13")]),e._v(" 版本为例，解压到 "),s("code",[e._v("/usr/local/zookeeper-3.4.13")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("tar -zxvf zookeeper-3.4.13.tar.gz -C /usr/local\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),s("p",[e._v("在根目录下创建 "),s("code",[e._v("data")]),e._v(" 和 "),s("code",[e._v("logs")]),e._v(" 两个目录用于存储数据和日志")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd /usr/local/zookeeper-3.4.13\nmkdir data\nmkdir logs\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("在 "),s("code",[e._v("conf")]),e._v(" 目录下新建 "),s("code",[e._v("zoo.cfg")]),e._v(" 文件，写入以下内容保存")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("tickTime=2000\ndataDir=/usr/local/zookeeper-3.4.13/data\ndataLogDir=/usr/local/zookeeper-3.4.13/logs\nclientPort=2181\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"启动和停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动和停止","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动和停止")]),e._v(" "),s("p",[e._v("进入 "),s("code",[e._v("bin")]),e._v(" 目录，启动、停止、重启和查看当前节点状态")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("./zkServer.sh start\n./zkServer.sh stop\n./zkServer.sh restart\n./zkServer.sh status\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h2",{attrs:{id:"伪集群模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪集群模式","aria-hidden":"true"}},[e._v("#")]),e._v(" 伪集群模式")]),e._v(" "),s("p",[e._v("伪集群模式就是在同一主机启动多个 zookeeper 并组成集群，下边以在 192.168.10.134 主机上创 3 个 zookeeper 组集群为例。")]),e._v(" "),s("p",[e._v("将通过单机模式安装的 zookeeper，复制成 zookeeper1/zookeeper2/zookeeper3 三份")]),e._v(" "),s("h3",{attrs:{id:"zookeeper1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper1","aria-hidden":"true"}},[e._v("#")]),e._v(" zookeeper1")]),e._v(" "),s("ul",[s("li",[e._v("修改配置文件")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("tickTime=2000\ndataDir=/usr/local/zookeeper1/data\ndataLogDir=/usr/local/zookeeper1/logs\nclientPort=2181\ninitLimit=5\nsyncLimit=2\nserver.1=192.168.10.134:2888:3888\nserver.2=192.168.10.134:4888:5888\nserver.3=192.168.10.134:6888:7888\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("ul",[s("li",[e._v("设置服务器 ID")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("echo '1' > data/myid\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"zookeeper2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper2","aria-hidden":"true"}},[e._v("#")]),e._v(" zookeeper2")]),e._v(" "),s("ul",[s("li",[e._v("修改配置文件")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("tickTime=2000\ndataDir=/usr/local/zookeeper2/data\ndataLogDir=/usr/local/zookeeper2/logs\nclientPort=2181\ninitLimit=5\nsyncLimit=2\nserver.1=192.168.10.134:2888:3888\nserver.2=192.168.10.134:4888:5888\nserver.3=192.168.10.134:6888:7888\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("ul",[s("li",[e._v("设置服务器 ID")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("echo '2' > data/myid\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"zookeeper3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper3","aria-hidden":"true"}},[e._v("#")]),e._v(" zookeeper3")]),e._v(" "),s("ul",[s("li",[e._v("修改配置文件")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("tickTime=2000\ndataDir=/usr/local/zookeeper3/data\ndataLogDir=/usr/local/zookeeper3/logs\nclientPort=2181\ninitLimit=5\nsyncLimit=2\nserver.1=192.168.10.134:2888:3888\nserver.2=192.168.10.134:4888:5888\nserver.3=192.168.10.134:6888:7888\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("ul",[s("li",[e._v("设置服务器 ID")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("echo '3' > data/myid\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"启动和停止-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动和停止-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动和停止")]),e._v(" "),s("p",[e._v("分别启动服务器，顺序无所谓")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("./zkServer.sh start\n./zkServer.sh stop\n./zkServer.sh restart\n./zkServer.sh status\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h2",{attrs:{id:"集群模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群模式","aria-hidden":"true"}},[e._v("#")]),e._v(" 集群模式")]),e._v(" "),s("p",[e._v("集群模式就是在不同主机上安装 zookeeper 然后组成集群的模式，操作步骤同上，此处不再赘述。")])])},[],!1,null,null,null);a.default=t.exports}}]);