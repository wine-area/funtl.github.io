(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{895:function(t,e,n){"use strict";n.r(e);var r=n(2),a=Object(r.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"concurrenthashmap-的工作原理及代码实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap-的工作原理及代码实现","aria-hidden":"true"}},[this._v("#")]),this._v(" ConcurrentHashMap 的工作原理及代码实现")]),this._v(" "),e("p",[this._v('ConcurrentHashMap 采用了非常精妙的"分段锁"策略，ConcurrentHashMap 的主干是个 Segment 数组。Segment 继承了 ReentrantLock，所以它就是一种可重入锁（ReentrantLock)。在 ConcurrentHashMap，一个 Segment 就是一个子哈希表，Segment 里维护了一个 HashEntry 数组，并发环境下，对于不同 Segment 的数据进行操作是不用考虑锁竞争的。')])])},[],!1,null,null,null);e.default=a.exports}}]);