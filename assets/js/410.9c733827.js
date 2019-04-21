(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{708:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"linux-安装-mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装-mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux 安装 MySQL")]),s._v(" "),e("h2",{attrs:{id:"本节视频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.bilibili.com/video/av27165678/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】基础设施即服务-Linux-安装 MySQL"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("h3",{attrs:{id:"更新数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新数据源","aria-hidden":"true"}},[s._v("#")]),s._v(" 更新数据源")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("apt-get update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"安装-mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 MySQL")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("apt-get install mysql-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("系统将提示您在安装过程中创建 root 密码。选择一个安全的密码，并确保你记住它，因为你以后需要它。接下来，我们将完成 MySQL 的配置。")]),s._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),e("p",[s._v("因为是全新安装，您需要运行附带的安全脚本。这会更改一些不太安全的默认选项，例如远程 root 登录和示例用户。在旧版本的 MySQL 上，您需要手动初始化数据目录，但 Mysql 5.7 已经自动完成了。")]),s._v(" "),e("p",[s._v("运行安全脚本：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql_secure_installation\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这将提示您输入您在之前步骤中创建的 root 密码。您可以按 Y，然后 ENTER 接受所有后续问题的默认值，但是要询问您是否要更改 root 密码。您只需在之前步骤中进行设置即可，因此无需现在更改。")]),s._v(" "),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),e("p",[s._v("按上边方式安装完成后，MySQL 应该已经开始自动运行了。要测试它，请检查其状态。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("lusifer@ubuntu:~$ systemctl status mysql.service\n● mysql.service - MySQL Community Server\n   Loaded: loaded (/lib/systemd/system/mysql.service; enabled; vendor preset: enabled)\n   Active: active (running) since Tue 2017-11-21 13:04:34 CST; 3min 24s ago\n Main PID: 2169 (mysqld)\n   CGroup: /system.slice/mysql.service\n           └─2169 /usr/sbin/mysqld\n\nNov 21 13:04:33 ubuntu systemd[1]: Starting MySQL Community Server...\nNov 21 13:04:34 ubuntu systemd[1]: Started MySQL Community Server.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("查看 MySQL 版本：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysqladmin -p -u root version\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"配置远程访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置远程访问","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置远程访问")]),s._v(" "),e("ul",[e("li",[s._v("修改配置文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("nano /etc/mysql/mysql.conf.d/mysqld.cnf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("注释掉(语句前面加上 # 即可)：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("bind-address = 127.0.0.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("重启 MySQL")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service mysql restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("登录 MySQL")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql -u root -p\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("授权 root 用户允许所有人连接")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("grant all privileges on *.* to 'root'@'%' identified by '你的 mysql root 账户密码';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"因弱口令无法成功授权解决步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#因弱口令无法成功授权解决步骤","aria-hidden":"true"}},[s._v("#")]),s._v(" 因弱口令无法成功授权解决步骤")]),s._v(" "),e("ul",[e("li",[s._v("查看和设置密码安全级别")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select @@validate_password_policy;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set global validate_password_policy=0;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("查看和设置密码长度限制")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select @@validate_password_length;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set global validate_password_length=1;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),e("h3",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service mysql start\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"停止"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止","aria-hidden":"true"}},[s._v("#")]),s._v(" 停止")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service mysql stop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"重启"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启","aria-hidden":"true"}},[s._v("#")]),s._v(" 重启")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service mysql restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"其它配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其它配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 其它配置")]),s._v(" "),e("p",[s._v("修改配置 "),e("code",[s._v("mysqld.cnf")]),s._v(" 配置文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vi /etc/mysql/mysql.conf.d/mysqld.cnf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"配置默认字符集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置默认字符集","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置默认字符集")]),s._v(" "),e("p",[s._v("在 "),e("code",[s._v("[mysqld]")]),s._v(" 节点上增加如下配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[client]\ndefault-character-set=utf8\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("在 "),e("code",[s._v("[mysqld]")]),s._v(" 节点底部增加如下配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("default-storage-engine=INNODB\ncharacter-set-server=utf8\ncollation-server=utf8_general_ci\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"配置忽略数据库大小写敏感"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置忽略数据库大小写敏感","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置忽略数据库大小写敏感")]),s._v(" "),e("p",[s._v("在 "),e("code",[s._v("[mysqld]")]),s._v(" 节点底部增加如下配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("lower-case-table-names = 1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])},[],!1,null,null,null);a.default=r.exports}}]);