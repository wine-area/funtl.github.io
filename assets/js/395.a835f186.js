(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{707:function(a,e,t){"use strict";t.r(e);var s=t(2),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"选择合适的数据存储方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的数据存储方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 选择合适的数据存储方案")]),a._v(" "),t("h2",{attrs:{id:"关系型数据库-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库-mysql","aria-hidden":"true"}},[a._v("#")]),a._v(" 关系型数据库 MySQL")]),a._v(" "),t("p",[a._v("MySQL 是一个最流行的关系型数据库，在互联网产品中应用比较广泛。一般情况下，MySQL 数据库是选择的第一方案，基本上有 80% ~ 90% 的场景都是基于 MySQL 数据库的。因为，需要关系型数据库进行管理，此外，业务存在许多事务性的操作，需要保证事务的强一致性。同时，可能还存在一些复杂的 SQL 的查询。值得注意的是，前期尽量减少表的联合查询，便于后期数据量增大的情况下，做数据库的分库分表。")]),a._v(" "),t("h2",{attrs:{id:"内存数据库-redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存数据库-redis","aria-hidden":"true"}},[a._v("#")]),a._v(" 内存数据库 Redis")]),a._v(" "),t("p",[a._v("随着数据量的增长，MySQL 已经满足不了大型互联网类应用的需求。因此，Redis 基于内存存储数据，可以极大的提高查询性能，对产品在架构上很好的补充。例如，为了提高服务端接口的访问速度，尽可能将读频率高的热点数据存放在 Redis 中。这个是非常典型的以空间换时间的策略，使用更多的内存换取 CPU 资源，通过增加系统的内存消耗，来加快程序的运行速度。")]),a._v(" "),t("p",[a._v("在某些场景下，可以充分的利用 Redis 的特性，大大提高效率。这些场景包括缓存，会话缓存，时效性，访问频率，计数器，社交列表，记录用户判定信息，交集、并集和差集，热门列表与排行榜，最新动态等。")]),a._v(" "),t("p",[a._v("使用 Redis 做缓存的时候，需要考虑数据不一致与脏读、缓存更新机制、缓存可用性、缓存服务降级、缓存穿透、缓存预热等缓存使用问题。")]),a._v(" "),t("h2",{attrs:{id:"文档数据库-mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档数据库-mongodb","aria-hidden":"true"}},[a._v("#")]),a._v(" 文档数据库 MongoDB")]),a._v(" "),t("p",[a._v("MongoDB 是对传统关系型数据库的补充，它非常适合高伸缩性的场景，它是可扩展性的表结构。基于这点，可以将预期范围内，表结构可能会不断扩展的 MySQL 表结构，通过 MongoDB 来存储，这就可以保证表结构的扩展性。")]),a._v(" "),t("p",[a._v("此外，日志系统数据量特别大，如果用 MongoDB 数据库存储这些数据，利用分片集群支持海量数据，同时使用聚集分析和 MapReduce 的能力，是个很好的选择。")]),a._v(" "),t("p",[a._v("MongoDB 还适合存储大尺寸的数据，GridFS 存储方案就是基于 MongoDB 的分布式文件存储系统。")]),a._v(" "),t("h2",{attrs:{id:"列族数据库-hbase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列族数据库-hbase","aria-hidden":"true"}},[a._v("#")]),a._v(" 列族数据库 HBase")]),a._v(" "),t("p",[a._v("HBase 适合海量数据的存储与高性能实时查询，它是运行于 HDFS 文件系统之上，并且作为 MapReduce 分布式处理的目标数据库，以支撑离线分析型应用。在数据仓库、数据集市、商业智能等领域发挥了越来越多的作用，在数以千计的企业中支撑着大量的大数据分析场景的应用。")]),a._v(" "),t("h2",{attrs:{id:"全文搜索引擎-elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全文搜索引擎-elasticsearch","aria-hidden":"true"}},[a._v("#")]),a._v(" 全文搜索引擎 ElasticSearch")]),a._v(" "),t("p",[a._v("在一般情况下，关系型数据库的模糊查询，都是通过 like 的方式进行查询。其中，like “value%” 可以使用索引，但是对于 like “%value%” 这样的方式，执行全表查询，这在数据量小的表，不存在性能问题，但是对于海量数据，全表扫描是非常可怕的事情。ElasticSearch 作为一个建立在全文搜索引擎 Apache Lucene 基础上的实时的分布式搜索和分析引擎，适用于处理实时搜索应用场景。此外，使用 ElasticSearch 全文搜索引擎，还可以支持多词条查询、匹配度与权重、自动联想、拼写纠错等高级功能。因此，可以使用 ElasticSearch 作为关系型数据库全文搜索的功能补充，将要进行全文搜索的数据缓存一份到 ElasticSearch 上，达到处理复杂的业务与提高查询速度的目的。")]),a._v(" "),t("p",[a._v("ElasticSearch 不仅仅适用于搜索场景，还非常适合日志处理与分析的场景。"),t("strong",[a._v("著名的 ELK 日志处理方案，由 ElasticSearch、LogStash 和 KibAna 三个组件组成")]),a._v("，包括了日志收集、聚合、多维度查询、可视化显示等。")])])},[],!1,null,null,null);e.default=r.exports}}]);