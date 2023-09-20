# vue-rabbit

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### My note

```sh
1.配置别名路径
  创建jsconfig.json
    {
      "compilerOptions" : {
        "baseUrl" : "./",
        "paths" : {
          "@/*":["src/*"]
        }
      }
    }
    
2.elementPlus引入 按官方文档引入
  npm i elementPlus
  npm install -D unplugin-vue-components unplugin-auto-import

3.定制elementPlus主题
  安装 sass npm i sass -D
  阅读官方文档
  
4.axios基础配置
5.路由配置 一级/二级
6.scss 文件自动导入
7.Layout 静态模块搭建
8.字体图标引入 阿里图标库
9.封装api 以及导航动态渲染
10.吸顶导航交互实现
    i.    准备吸顶导航组件 
    ii.   获取滚动距离 
          VueUse库 useScroll函数
    iii. 根据滚动距离判断条件控制组件盒子展示隐藏    

11.Pinia 优化重复请求 吸顶导航和正常导航需要发送一样的请求 在共同父组件中调用action函数   
12.Home 整体结构拆分和分类渲染实现
13.Home Banner轮播图实现和动态渲染 elementPlus 中 el-carousel
14.面板组件封装 props传参 slot插槽
15.新鲜好物业务实现
```
