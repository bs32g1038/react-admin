# react-admin-kit

一个基于react，react-router，redux，ant-design，create-react-app 开箱即用的后台模板套件

这是一个后台布局项目，并没有额外的组件，列如ant design pro的图表组件等等。

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad221db6-f3d9-451a-a75a-0d30f389ea07/deploy-status)](https://app.netlify.com/sites/nostalgic-mirzakhani-0c279c/deploys) [![Total alerts](https://img.shields.io/lgtm/alerts/g/bs32g1038/react-admin-kit.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/bs32g1038/react-admin-kit/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/bs32g1038/react-admin-kit.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/bs32g1038/react-admin-kit/context:javascript) ![David](https://img.shields.io/david/dev/bs32g1038/react-admin-kit.svg)

* Preview: http://pro.lizc.net

## 功能特性
* 模仿ant design pro界面，通过简单，易拓展的代码进行实现。
* 基于react，react-router，redux， create-react-app库进行架构
* 每一句代码的存在都有意义
* 极简代码
* 不造轮子，组件几乎都是来源于ant-design
* 路由显式声明，容易扩展，易于追踪代码源
* 高度可用的项目结构，小中大型都支持
* 傻瓜式操作，开箱即用
* 支持typescript（需额外配置，原生支持es6）

## 依赖文件

无冗余的依赖文件，清晰安全稳定！

```
"@craco/craco": "^5.2.3",
"antd": "^3.19.7",
"axios": "^0.19.0",
"babel-plugin-import": "^1.12.0",
"classnames": "^2.2.6",
"http-proxy-middleware": "^0.19.1",
"node-sass": "^4.12.0",
"query-string": "^6.8.1",
"react": "^16.8.6",
"react-document-title": "^2.0.3",
"react-dom": "^16.8.6",
"react-redux": "^7.1.0",
"react-router-config": "^5.0.1",
"react-router-dom": "^5.0.1",
"react-scripts": "^3.0.1",
"redux": "^4.0.1",
"redux-thunk": "^2.3.0"
```

## 使用

    $ git clone https://github.com/bs32g1038/react-admin-kit.git
    $ npm install
    $ npm run dev  # visit http://localhost:3000


## 浏览器支持
主流浏览器 and IE11.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


## 问题

> 整个项目就一个空的界面，什么组件都没有，我该去哪里找组件？

你可以到 [ant design](https://ant.design/) 的官网找组件 或者 到 [pro.ant.design](https://pro.ant.design/) 你只需要通过复制，并简单的修改就可以用到本项目上。我相信你的本事。

> 与ant design pro 相比有什么不同，无非就是删除了一些组件？

ant design pro：

* ```umi``` 构建项目。
* ```dva``` 数据流。
* 深度封装
* 多语言支持
* 隐式路由声明

react-admin-kit：

* ```create-react-app``` 构建项目。
* ```redux``` 数据流。
* 部分封装
* 无多语言支持，专一国语
* 显式路由声明
* 旧的redux项目简单修改就可以快速迁移
* 只做了部分工作，就是简化用户的环境搭建，以及实现简单的界面布局。

## 贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建 😃：

* 在你的公司或个人项目中使用 React Admin Pro。
* 通过 Issue 报告 bug 或进行咨询。
* 提交 Pull Request 改进 Pro 的代码。
