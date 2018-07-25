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

## 可用指令

### `npm start`

开发环境运行，端口号3000。

### `npm test`

测试。

### `npm run build`

打包。
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
