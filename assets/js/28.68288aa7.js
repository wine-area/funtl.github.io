(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{221:function(s,n,a){"use strict";a.r(n);var e=a(0),r=Object(e.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"配置-mybatis-redis-二级缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-mybatis-redis-二级缓存","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 MyBatis Redis 二级缓存")]),s._v(" "),a("h2",{attrs:{id:"本节视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av35395285/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】Dubbo 实现微服务架构-使用 Redis 实现数据缓存-MyBatis 二级缓存"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"mybatis-缓存介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-缓存介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" MyBatis 缓存介绍")]),s._v(" "),a("h3",{attrs:{id:"一级缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一级缓存","aria-hidden":"true"}},[s._v("#")]),s._v(" 一级缓存")]),s._v(" "),a("p",[s._v("MyBatis 会在表示会话的 "),a("code",[s._v("SqlSession")]),s._v(" 对象中建立一个简单的缓存，将每次查询到的结果结果缓存起来，当下次查询的时候，如果判断先前有个完全一样的查询，会直接从缓存中直接将结果取出，返回给用户，不需要再进行一次数据库查询了。")]),s._v(" "),a("p",[s._v("一级缓存是 "),a("code",[s._v("SqlSession")]),s._v(" 级别的缓存。在操作数据库时需要构造 sqlSession 对象，在对象中有一个（内存区域）数据结构（HashMap）用于存储缓存数据。不同的 sqlSession 之间的缓存数据区域（HashMap）是互相不影响的。其作用域是同一个 SqlSession，在同一个 sqlSession 中两次执行相同的 sql 语句，第一次执行完毕会将数据库中查询的数据写到缓存（内存），第二次会从缓存中获取数据将不再从数据库查询，从而提高查询效率。当一个 sqlSession 结束后该 sqlSession 中的一级缓存也就不存在了。Mybatis 默认开启一级缓存。")]),s._v(" "),a("h3",{attrs:{id:"二级缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二级缓存","aria-hidden":"true"}},[s._v("#")]),s._v(" 二级缓存")]),s._v(" "),a("p",[s._v("二级缓存是 mapper 级别的缓存，多个 "),a("code",[s._v("SqlSession")]),s._v(" 去操作同一个 Mapper 的 sql 语句，多个 SqlSession 去操作数据库得到数据会存在二级缓存区域，多个 SqlSession 可以共用二级缓存，二级缓存是跨 SqlSession 的。其作用域是 mapper 的同一个 "),a("code",[s._v("namespace")]),s._v("，不同的 sqlSession 两次执行相同 namespace下的 sql 语句且向 sql 中传递参数也相同即最终执行相同的 sql 语句，第一次执行完毕会将数据库中查询的数据写到缓存（内存），第二次会从缓存中获取数据将不再从数据库查询，从而提高查询效率。Mybatis 默认没有开启二级缓存需要在 setting 全局参数中配置开启二级缓存。")]),s._v(" "),a("h2",{attrs:{id:"配置-mybatis-二级缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-mybatis-二级缓存","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 MyBatis 二级缓存")]),s._v(" "),a("h3",{attrs:{id:"spring-boot-中开启-mybatis-二级缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-中开启-mybatis-二级缓存","aria-hidden":"true"}},[s._v("#")]),s._v(" Spring Boot 中开启 MyBatis 二级缓存")]),s._v(" "),a("p",[s._v("以 "),a("code",[s._v("myshop-service-user-provider")]),s._v(" 项目为例，完整配置如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# Spring boot application\nspring:\n  application:\n    name: myshop-service-user-provider\n  datasource:\n    druid:\n      url: jdbc:mysql://192.168.10.131:3306/myshop?useUnicode=true&characterEncoding=utf-8&useSSL=false\n      username: root\n      password: 123456\n      initial-size: 1\n      min-idle: 1\n      max-active: 20\n      test-on-borrow: true\n      driver-class-name: com.mysql.cj.jdbc.Driver\n  redis:\n    lettuce:\n      pool:\n        max-active: 8\n        max-idle: 8\n        max-wait: -1ms\n        min-idle: 0\n    sentinel:\n      master: mymaster\n      nodes: 192.168.10.131:26379, 192.168.10.131:26380, 192.168.10.131:26381\nserver:\n  port: 8501\n\n# MyBatis Config properties\nmybatis:\n  configuration:\n    cache-enabled: true\n  type-aliases-package: com.funtl.myshop.commons.domain\n  mapper-locations: classpath:mapper/*.xml\n\n# Services Versions\nservices:\n  versions:\n    redis:\n      v1: 1.0.0\n    user:\n      v1: 1.0.0\n\n# Dubbo Config properties\ndubbo:\n  ## Base packages to scan Dubbo Component：@com.alibaba.dubbo.config.annotation.Service\n  scan:\n    basePackages: com.funtl.myshop.service.user.provider.api.impl\n  ## ApplicationConfig Bean\n  application:\n    id: myshop-service-user-provider\n    name: myshop-service-user-provider\n    qos-port: 22222\n    qos-enable: true\n  ## ProtocolConfig Bean\n  protocol:\n    id: dubbo\n    name: dubbo\n    port: 20881\n    status: server\n    serialization: kryo\n  ## RegistryConfig Bean\n  registry:\n    id: zookeeper\n    address: zookeeper://192.168.10.131:2181?backup=192.168.10.131:2182,192.168.10.131:2183\n\n# Enables Dubbo All Endpoints\nmanagement:\n  endpoint:\n    dubbo:\n      enabled: true\n    dubbo-shutdown:\n      enabled: true\n    dubbo-configs:\n      enabled: true\n    dubbo-services:\n      enabled: true\n    dubbo-references:\n      enabled: true\n    dubbo-properties:\n      enabled: true\n  # Dubbo Health\n  health:\n    dubbo:\n      status:\n        ## StatusChecker Name defaults (default : "memory", "load" )\n        defaults: memory\n        ## StatusChecker Name extras (default : empty )\n        extras: load,threadpool\n\nlogging:\n  level.com.funtl.myshop.commons.mapper: DEBUG\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br")])]),a("p",[s._v("主要增加了如下配置：")]),s._v(" "),a("ul",[a("li",[s._v("MyBaits 二级缓存配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mybatis:\n  configuration:\n    cache-enabled: true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("Redis 配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("spring:\n  redis:\n    lettuce:\n      pool:\n        max-active: 8\n        max-idle: 8\n        max-wait: -1ms\n        min-idle: 0\n    sentinel:\n      master: mymaster\n      nodes: 192.168.10.131:26379, 192.168.10.131:26380, 192.168.10.131:26381\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"实体类实现序列化接口并声明序列号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实体类实现序列化接口并声明序列号","aria-hidden":"true"}},[s._v("#")]),s._v(" 实体类实现序列化接口并声明序列号")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("private static final long serialVersionUID = 8289770415244673535L;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"实现-mybatis-cache-接口，自定义缓存为-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-mybatis-cache-接口，自定义缓存为-redis","aria-hidden":"true"}},[s._v("#")]),s._v(" 实现 MyBatis Cache 接口，自定义缓存为 Redis")]),s._v(" "),a("p",[s._v("为了增加通用性，请在 "),a("code",[s._v("myshop-commons-mapper")]),s._v(" 项目中创建一个名为 "),a("code",[s._v("RedisCache")]),s._v(" 的工具类，代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.funtl.myshop.commons.utils;\n\nimport com.funtl.myshop.commons.context.ApplicationContextHolder;\nimport org.apache.ibatis.cache.Cache;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.data.redis.core.RedisCallback;\nimport org.springframework.data.redis.core.RedisTemplate;\nimport org.springframework.data.redis.core.ValueOperations;\n\nimport java.util.concurrent.TimeUnit;\nimport java.util.concurrent.locks.ReadWriteLock;\nimport java.util.concurrent.locks.ReentrantReadWriteLock;\n\n/**\n * Redis 缓存工具类\n * <p>Title: RedisCache</p>\n * <p>Description: </p>\n *\n * @author Lusifer\n * @version 1.0.0\n * @date 2018/8/13 6:03\n */\npublic class RedisCache implements Cache {\n    private static final Logger logger = LoggerFactory.getLogger(RedisCache.class);\n\n    private final ReadWriteLock readWriteLock = new ReentrantReadWriteLock();\n    private final String id; // cache instance id\n    private RedisTemplate redisTemplate;\n\n    private static final long EXPIRE_TIME_IN_MINUTES = 30; // redis过期时间\n\n    public RedisCache(String id) {\n        if (id == null) {\n            throw new IllegalArgumentException("Cache instances require an ID");\n        }\n        this.id = id;\n    }\n\n    @Override\n    public String getId() {\n        return id;\n    }\n\n    /**\n     * Put query result to redis\n     *\n     * @param key\n     * @param value\n     */\n    @Override\n    public void putObject(Object key, Object value) {\n        try {\n            RedisTemplate redisTemplate = getRedisTemplate();\n            ValueOperations opsForValue = redisTemplate.opsForValue();\n            opsForValue.set(key, value, EXPIRE_TIME_IN_MINUTES, TimeUnit.MINUTES);\n            logger.debug("Put query result to redis");\n        } catch (Throwable t) {\n            logger.error("Redis put failed", t);\n        }\n    }\n\n    /**\n     * Get cached query result from redis\n     *\n     * @param key\n     * @return\n     */\n    @Override\n    public Object getObject(Object key) {\n        try {\n            RedisTemplate redisTemplate = getRedisTemplate();\n            ValueOperations opsForValue = redisTemplate.opsForValue();\n            logger.debug("Get cached query result from redis");\n//            System.out.println("****" + opsForValue.get(key).toString());\n            return opsForValue.get(key);\n        } catch (Throwable t) {\n            logger.error("Redis get failed, fail over to db", t);\n            return null;\n        }\n    }\n\n    /**\n     * Remove cached query result from redis\n     *\n     * @param key\n     * @return\n     */\n    @Override\n    @SuppressWarnings("unchecked")\n    public Object removeObject(Object key) {\n        try {\n            RedisTemplate redisTemplate = getRedisTemplate();\n            redisTemplate.delete(key);\n            logger.debug("Remove cached query result from redis");\n        } catch (Throwable t) {\n            logger.error("Redis remove failed", t);\n        }\n        return null;\n    }\n\n    /**\n     * Clears this cache instance\n     */\n    @Override\n    public void clear() {\n        RedisTemplate redisTemplate = getRedisTemplate();\n        redisTemplate.execute((RedisCallback) connection -> {\n            connection.flushDb();\n            return null;\n        });\n        logger.debug("Clear all the cached query result from redis");\n    }\n\n    /**\n     * This method is not used\n     *\n     * @return\n     */\n    @Override\n    public int getSize() {\n        return 0;\n    }\n\n    @Override\n    public ReadWriteLock getReadWriteLock() {\n        return readWriteLock;\n    }\n\n    private RedisTemplate getRedisTemplate() {\n        if (redisTemplate == null) {\n            redisTemplate = ApplicationContextHolder.getBean("redisTemplate");\n        }\n        return redisTemplate;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br")])]),a("h3",{attrs:{id:"mapper-接口中增加注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapper-接口中增加注解","aria-hidden":"true"}},[s._v("#")]),s._v(" Mapper 接口中增加注解")]),s._v(" "),a("p",[s._v("在 Mapper 接口中增加 "),a("code",[s._v("@CacheNamespace(implementation = RedisCache.class)")]),s._v(" 注解，声明需要使用二级缓存")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("package com.funtl.myshop.commons.mapper;\n\nimport com.funtl.myshop.commons.domain.TbUser;\nimport com.funtl.myshop.commons.utils.RedisCache;\nimport org.apache.ibatis.annotations.CacheNamespace;\nimport tk.mybatis.mapper.MyMapper;\n\n@CacheNamespace(implementation = RedisCache.class)\npublic interface TbUserMapper extends MyMapper<TbUser> {}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"附：idea-生成序列号的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附：idea-生成序列号的方法","aria-hidden":"true"}},[s._v("#")]),s._v(" 附：IDEA 生成序列号的方法")]),s._v(" "),a("ul",[a("li",[s._v("使用 "),a("code",[s._v("GenerateSerialVersionUID")]),s._v(" 插件生成，安装完插件后在实现了序列化接口的类中使用快捷键 "),a("code",[s._v("alt + insert")]),s._v(" 即可呼出生成菜单")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer_20181105033818.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("IDEA 提示生成序列号")])]),s._v(" "),a("p",[s._v("默认情况下 Intellij IDEA 不会提示继承了 Serializable 接口的类生成 serialVersionUID 的警告。如果需要生成 serialVersionUID，需要手动配置。")]),s._v(" "),a("p",[a("code",[s._v("File -> Settings -> Inspections -> Serialization issues -> Serialization class without ‘serialVersionUID’")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1534116410.png",alt:""}})])])},[],!1,null,null,null);n.default=r.exports}}]);