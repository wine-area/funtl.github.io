(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{826:function(t,i,s){"use strict";s.r(i);var e=s(2),l=Object(e.a)({},function(){var t=this.$createElement,i=this._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[i("h1",{attrs:{id:"volatile-实现原理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#volatile-实现原理","aria-hidden":"true"}},[this._v("#")]),this._v(" volatile 实现原理")]),this._v(" "),i("ul",[i("li",[this._v("在 JVM 底层 volatile 是采用“内存屏障”来实现的")]),this._v(" "),i("li",[this._v("缓存一致性协议（MESI协议）它确保每个缓存中使用的共享变量的副本是一致的。其核心思想如下：当某个 CPU 在写数据时，如果发现操作的变量是共享变量，则会通知其他 CPU 告知该变量的缓存行是无效的，因此其他 CPU 在读取该变量时，发现其无效会重新从主存中加载数据")])])])},[],!1,null,null,null);i.default=l.exports}}]);