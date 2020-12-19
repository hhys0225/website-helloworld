# website-helloworld

> 基于Vue.js +ElementUI 的前端展示页面 目前只有前端,没有后端
>
> 前端需要学一下Vue.js 后端需要学一下Django 

## Build Setup

``` bash
1. 首先将项目clone到本地
2. 需要安装nodejs （安装完成后会自动安装npm）直接到nodejs官网下载安装即可
3. cd 到文件目录 在该目录下安装依赖
# install dependencies
npm install
4.run
# serve with hot reload at localhost:8080
npm run dev

下面两个命令暂时用不到，只运行上面的命令就可以
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
> 执行正常的话会看到以下结果  访问localhost:8080就能看到页面了 注意不能通过文件夹里的index.html访问 那个页面是个空白页

![image]( https://raw.githubusercontent.com/BITCS-Information-Retrieval-2020/website-helloworld/master/1.PNG )
>目前写了两个页面 一个首页、一个检索页


### 首页

![image](https://raw.githubusercontent.com/BITCS-Information-Retrieval-2020/website-helloworld/master/2.PNG)

### 检索页

![image](https://raw.githubusercontent.com/BITCS-Information-Retrieval-2020/website-helloworld/master/3.PNG)

## 后续工作
>1. 具体的样式还需要再改,要改成统一的格式，以及展示还有bug要修复
>2. 检索页展示信息目前是简单的显示，后面还要加视频，图片之类
>3. 还需要写一个一个从搜索页跳转的某一个论文的具体页面 
>4. 以及这些页面之间的互相跳转
>5. 可能还需要写一个高级检索界面 根据论文题目之类的进行检索
>6. 目前展示的结果是通过文件写死的 后面要改成从接口动态获取
>7. 后端需要用Django写接口
