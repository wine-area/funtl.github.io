(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{765:function(e,t,r){"use strict";r.r(t);var n=r(2),o=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"镜像的实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像的实现原理","aria-hidden":"true"}},[e._v("#")]),e._v(" 镜像的实现原理")]),e._v(" "),r("p",[e._v("Docker 镜像是怎么实现增量的修改和维护的？")]),e._v(" "),r("p",[e._v("每个镜像都由很多层次构成，Docker 使用 "),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/UnionFS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Union FS"),r("OutboundLink")],1),e._v(" 将这些不同的层结合到一个镜像中去。")]),e._v(" "),r("p",[e._v("通常 Union FS 有两个用途, 一方面可以实现不借助 LVM、RAID 将多个 disk 挂到同一个目录下,另一个更常用的就是将一个只读的分支和一个可写的分支联合在一起，Live CD 正是基于此方法可以允许在镜像不变的基础上允许用户在其上进行一些写操作。")]),e._v(" "),r("p",[e._v("Docker 在 AUFS 上构建的容器也是利用了类似的原理。")])])},[],!1,null,null,null);t.default=o.exports}}]);