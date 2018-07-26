初始化项目示例，只需拷贝代码即可开发，无需搭建环境。

使用create-react-app搭建，暴露出配置并进行个性化修改。

## 项目结构

初始化项目结构如下：

```
react-start/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

以下两个文件的文件名和路径不能修改，否则将会无法构建：

* `public/index.html` 是页面模板；
* `src/index.js` 是JS入口。

其他文件可以删除或重命名。

可以在`src`文件夹中创建子目录。为了保证构建速度，Webpack只处理`src`中的文件。因此，所有JS和CSS文件都要放入`src`中。

 `public/index.html`中只能引用`public`文件夹中的文件。

## 代码目录

```js
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- public/                                 
|   --- index.html						  ---首页入口html文件
|   --- favicon.ico						  ---收藏夹图标
|   --- manifest.json					  ---移动app的配置文件
+-- scripts/                                 
|   --- build.js						  ---打包命令
|   --- start.js						  ---运行命令
|   --- test.js							  ---测试命令
+-- src/                                    ---核心代码目录
|   +-- components                          ---各式各样的组件存放目录           
|   +-- style                               ---项目的样式存放目录
|   +-- utils                               ---工具文件存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件
--- .eslintrc.js                            ---自定义eslint配置文件
--- .prettierrc                             ---自定义prettierrc配置文件
--- .stylelintrc                            ---自定义stylelintrc配置文件
--- package.json                                    
```

## 安装运行

##### 1.下载或克隆项目源码

##### 2.npm安装相关包文件(建议翻墙或增加淘宝镜像源，不然很慢)

```js
npm i
```

##### 3.启动项目

```js
npm start
```

##### 4.打包项目

```js
npm run build
```
## 安装ant-design

```
npm install antd --save
```

##### 按需加载

使用babel-plugin-import

```js
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
  ]
}
```

然后只需从 antd 引入模块即可，无需单独引入样式。

```js
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { DatePicker } from 'antd';
```

## CSS预处理

已配置`node-sass`，可使用sass，less请自行配制。

## 代码风格

配置Eslint和Prettify限制代码风格，前端代码规范参考http://wiki.internal.hyperchain.cn/plat:damaijia:workfolow:frontend-code。可以在编辑器中安装相应的插件来优化开发体验。