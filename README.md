# wepyApp
基于wepy的微信小程序脚手架

## 使用方法
```
npm install wepy-cli -g  // 安装wepy

npm install // 安装依赖包

npm run dev  // 编译

```

## 目录介绍
```
src/
  api/         #请求的接口的位置
  common/        #公共的配置文件和公共方法的位置
  components/  #用于存放所有页面的子组件
  lib/      #存储第三方库
  mixins/    #存储mixins方法
  pages/    #存储所有的页面入口
  store/  #存储redux的action，reducer
  theme/ #存储less所需要的提取出来的文件
app.wpy  #wepy的入口文件
index.template.html #wepy的模板html
```

## 使用方法
1. 更新最新的iconfont
将iconfont里的font-class里的css下载下来，替换到src/lib/iconfont.less即可

2. eslint用的standard，查看规则文档[eslint standard文档](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)