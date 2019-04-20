(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{321:function(s,n,a){"use strict";a.r(n);var e=a(0),r=Object(e.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"配置-fastdfs-java-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-fastdfs-java-客户端","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 FastDFS Java 客户端")]),s._v(" "),a("h2",{attrs:{id:"本节视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av35251691/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】Dubbo 实现微服务架构-分布式文件系统-FastDFS Java 客户端"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("p",[s._v("创建一个名为 "),a("code",[s._v("myshop-service-upload")]),s._v(" 的服务提供者项目")]),s._v(" "),a("h2",{attrs:{id:"安装-fastdfs-java-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-fastdfs-java-客户端","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 FastDFS Java 客户端")]),s._v(" "),a("h3",{attrs:{id:"从-github-克隆源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-github-克隆源码","aria-hidden":"true"}},[s._v("#")]),s._v(" 从 GitHub 克隆源码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/happyfish100/fastdfs-client-java.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"在项目中添加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在项目中添加依赖","aria-hidden":"true"}},[s._v("#")]),s._v(" 在项目中添加依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\x3c!-- FastDFS Begin --\x3e\n<dependency>\n    <groupId>org.csource</groupId>\n    <artifactId>fastdfs-client-java</artifactId>\n    <version>1.27-SNAPSHOT</version>\n</dependency>\n\x3c!-- FastDFS End --\x3e\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"创建-fastdfs-工具类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-fastdfs-工具类","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建 FastDFS 工具类")]),s._v(" "),a("h3",{attrs:{id:"定义文件存储服务接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义文件存储服务接口","aria-hidden":"true"}},[s._v("#")]),s._v(" 定义文件存储服务接口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("package com.funtl.myshop.service.upload.fastdfs;\n\n/**\n * 文件存储服务接口\n * <p>Title: StorageService</p>\n * <p>Description: </p>\n *\n * @author Lusifer\n * @version 1.0.0\n * @date 2018/8/14 5:22\n */\npublic interface StorageService {\n    /**\n     * 上传文件\n     *\n     * @param data    文件的二进制内容\n     * @param extName 扩展名\n     * @return 上传成功后返回生成的文件id；失败，返回null\n     */\n    public String upload(byte[] data, String extName);\n\n    /**\n     * 删除文件\n     *\n     * @param fileId 被删除的文件id\n     * @return 删除成功后返回0，失败后返回错误代码\n     */\n    public int delete(String fileId);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"实现文件存储服务接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现文件存储服务接口","aria-hidden":"true"}},[s._v("#")]),s._v(" 实现文件存储服务接口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.funtl.myshop.service.upload.fastdfs;\n\nimport org.csource.common.NameValuePair;\nimport org.csource.fastdfs.ClientGlobal;\nimport org.csource.fastdfs.StorageClient1;\nimport org.csource.fastdfs.StorageServer;\nimport org.csource.fastdfs.TrackerClient;\nimport org.csource.fastdfs.TrackerGroup;\nimport org.csource.fastdfs.TrackerServer;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.InitializingBean;\nimport org.springframework.beans.factory.annotation.Value;\n\nimport java.io.File;\nimport java.io.FileWriter;\nimport java.io.IOException;\nimport java.io.PrintWriter;\n\n/**\n * 文件存储服务实现\n * <p>Title: FastDFSStorageService</p>\n * <p>Description: </p>\n *\n * @author Lusifer\n * @version 1.0.0\n * @date 2018/8/14 5:27\n */\npublic class FastDFSStorageService implements StorageService, InitializingBean {\n    private static final Logger logger = LoggerFactory.getLogger(FastDFSStorageService.class);\n\n    private TrackerClient trackerClient;\n\n    @Value("${storage.fastdfs.tracker_server}")\n    private String trackerServer;\n\n    @Override\n    public String upload(byte[] data, String extName) {\n        TrackerServer trackerServer = null;\n        StorageServer storageServer = null;\n        StorageClient1 storageClient1 = null;\n        try {\n            NameValuePair[] meta_list = null; // new NameValuePair[0];\n\n            trackerServer = trackerClient.getConnection();\n            if (trackerServer == null) {\n                logger.error("getConnection return null");\n            }\n            storageServer = trackerClient.getStoreStorage(trackerServer);\n            storageClient1 = new StorageClient1(trackerServer, storageServer);\n            String fileid = storageClient1.upload_file1(data, extName, meta_list);\n            logger.debug("uploaded file <{}>", fileid);\n            return fileid;\n        } catch (Exception ex) {\n            logger.error("Upload fail", ex);\n            return null;\n        } finally {\n            if (storageServer != null) {\n                try {\n                    storageServer.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n            if (trackerServer != null) {\n                try {\n                    trackerServer.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n            storageClient1 = null;\n        }\n    }\n\n    @Override\n    public int delete(String fileId) {\n//        System.out.println("deleting ....");\n        TrackerServer trackerServer = null;\n        StorageServer storageServer = null;\n        StorageClient1 storageClient1 = null;\n        int index = fileId.indexOf(\'/\');\n        String groupName = fileId.substring(0, index);\n        try {\n            trackerServer = trackerClient.getConnection();\n            if (trackerServer == null) {\n                logger.error("getConnection return null");\n            }\n            storageServer = trackerClient.getStoreStorage(trackerServer, groupName);\n            storageClient1 = new StorageClient1(trackerServer, storageServer);\n            int result = storageClient1.delete_file1(fileId);\n            return result;\n        } catch (Exception ex) {\n            logger.error("Delete fail", ex);\n            return 1;\n        } finally {\n            if (storageServer != null) {\n                try {\n                    storageServer.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n            if (trackerServer != null) {\n                try {\n                    trackerServer.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n            storageClient1 = null;\n        }\n    }\n\n    @Override\n    public void afterPropertiesSet() throws Exception {\n        File confFile = File.createTempFile("fastdfs", ".conf");\n        PrintWriter confWriter = new PrintWriter(new FileWriter(confFile));\n        confWriter.println("tracker_server=" + trackerServer);\n        confWriter.close();\n        ClientGlobal.init(confFile.getAbsolutePath());\n        confFile.delete();\n        TrackerGroup trackerGroup = ClientGlobal.g_tracker_group;\n        trackerClient = new TrackerClient(trackerGroup);\n\n        logger.info("Init FastDFS with tracker_server : {}", trackerServer);\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br")])]),a("h3",{attrs:{id:"文件存储服务工厂类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件存储服务工厂类","aria-hidden":"true"}},[s._v("#")]),s._v(" 文件存储服务工厂类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.funtl.myshop.service.upload.fastdfs;\n\nimport org.springframework.beans.factory.FactoryBean;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.beans.factory.config.AutowireCapableBeanFactory;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n/**\n * 文件存储服务工厂类\n * <p>Title: StorageFactory</p>\n * <p>Description: </p>\n *\n * @author Lusifer\n * @version 1.0.0\n * @date 2018/8/14 5:28\n */\npublic class StorageFactory implements FactoryBean<StorageService> {\n\n    @Autowired\n    private AutowireCapableBeanFactory acbf;\n\n    /**\n     * 存储服务的类型，目前仅支持fastdfs\n     */\n    @Value("${storage.type}")\n    private String type;\n\n    private Map<String, Class<? extends StorageService>> classMap;\n\n    public StorageFactory() {\n        classMap = new HashMap<>();\n        classMap.put("fastdfs", FastDFSStorageService.class);\n    }\n\n    @Override\n    public StorageService getObject() throws Exception {\n        Class<? extends StorageService> clazz = classMap.get(type);\n        if (clazz == null) {\n            throw new RuntimeException("Unsupported storage type [" + type + "], valid are " + classMap.keySet());\n        }\n\n        StorageService bean = clazz.newInstance();\n        acbf.autowireBean(bean);\n        acbf.initializeBean(bean, bean.getClass().getSimpleName());\n        return bean;\n    }\n\n    @Override\n    public Class<?> getObjectType() {\n        return StorageService.class;\n    }\n\n    @Override\n    public boolean isSingleton() {\n        return true;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br")])]),a("h3",{attrs:{id:"配置文件存储服务工厂类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件存储服务工厂类","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置文件存储服务工厂类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("package com.funtl.myshop.service.upload.fastdfs;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n/**\n * Java 配置方式定义 StorageFactory 的 Bean 使其可以被依赖注入\n * <p>Title: FastDFSConfiguration</p>\n * <p>Description: </p>\n *\n * @author Lusifer\n * @version 1.0.0\n * @date 2018/8/14 5:28\n */\n@Configuration\npublic class FastDFSConfiguration {\n    @Bean\n    public StorageFactory storageFactory() {\n        return new StorageFactory();\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h2",{attrs:{id:"创建-fastdfs-控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-fastdfs-控制器","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建 FastDFS 控制器")]),s._v(" "),a("h3",{attrs:{id:"增加云配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加云配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 增加云配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("fastdfs.base.url: http://192.168.75.128:8888/\nstorage:\n  type: fastdfs\n  fastdfs:\n    tracker_server: 192.168.75.128:22122\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"控制器代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制器代码","aria-hidden":"true"}},[s._v("#")]),s._v(" 控制器代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.funtl.myshop.service.upload.controller;\n\nimport com.funtl.itoken.service.upload.fastdfs.StorageService;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.web.bind.annotation.CrossOrigin;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RequestMethod;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.multipart.MultipartFile;\n\nimport java.io.IOException;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\n@CrossOrigin(origins = "*", maxAge = 3600)\n@RestController\npublic class UploadController {\n    @Value("${fastdfs.base.url}")\n    private String FASTDFS_BASE_URL;\n\n    @Autowired\n    private StorageService storageService;\n\n    /**\n     * 文件上传\n     *\n     * @param dropFile    Dropzone\n     * @param editorFiles wangEditor\n     * @return\n     */\n    @RequestMapping(value = "upload", method = RequestMethod.POST)\n    public Map<String, Object> upload(MultipartFile dropFile, MultipartFile[] editorFiles) {\n        Map<String, Object> result = new HashMap<>();\n\n        // Dropzone 上传\n        if (dropFile != null) {\n            result.put("fileName", writeFile(dropFile));\n        }\n\n        // wangEditor 上传\n        if (editorFiles != null && editorFiles.length > 0) {\n            List<String> fileNames = new ArrayList<>();\n\n            for (MultipartFile editorFile : editorFiles) {\n                fileNames.add(writeFile(editorFile));\n            }\n\n            result.put("errno", 0);\n            result.put("data", fileNames);\n        }\n\n        return result;\n    }\n\n    /**\n     * 将图片写入指定目录\n     *\n     * @param multipartFile\n     * @return 返回文件完整路径\n     */\n    private String writeFile(MultipartFile multipartFile) {\n        // 获取文件后缀\n        String oName = multipartFile.getOriginalFilename();\n        String extName = oName.substring(oName.lastIndexOf(".") + 1);\n\n        // 文件存放路径\n        String url = null;\n        try {\n            String uploadUrl = storageService.upload(multipartFile.getBytes(), extName);\n            url = FASTDFS_BASE_URL + uploadUrl;\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n\n        // 返回文件完整路径\n        return url;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br")])])])},[],!1,null,null,null);n.default=r.exports}}]);