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

16.图片懒加载指令实现 v-img-lazy
  1.在main.js中定义全局指令
  2.判断图片是否进入视口
      使用vueuse中的函数useIntersectionObserver
  优化
    1.写在main.js中不合理 
      把懒加载指令封装成插件 在main.js中只需注册即可
    2.useIntersectionObserver 重复监听
      调用stop方法
      
17.Product 产品列表实现
18.封装gooditems 组件

一级分类      
    19.面包屑导航渲染
    20.轮播图
    21.菜单高亮 active-class="active"类名
       分类列表渲染
       
    22.解决路由缓存
      方案一: 给 RouterView 添加 key 属性 :key="$route.fullPath"    
      方案二: onBeforeRouteUpdate ('性能更好,没有重复的请求')
      
    23.使用逻辑函数拆分业务
      实现步骤:
        1. 按照业务声明以 `use` 打头的逻辑函数
        2. 把独立的业务逻辑封装到各个函数内部
        3. 函数内部把组件中需要用到的数据或者方法return出去
        4. 在组件中调用函数把数据或者方法组合回来使用
        
二级分类
    24. 路由配置
    25. 面包屑导航配置
    26. 基础商品列表实现
    27. 列表筛选功能 了解 el-tab 的api
    28. 无限加载实现
          触底条件满足之后 page++,拉取下一页数据
          新老数据做数组拼接('展开运算符' ...)
          判断是否已经全部加载完毕,停止监听 v-infinite-scroll
    29. 定制路由行为
          路由切换时,自动滚动到页面顶部,而不是原先的位置  
          vue-router scrollBehavior    
详情页
    30. 静态搭建 路由配置 新鲜好物跳转
    31. 基础数据渲染
    32. 封装热榜区组件
          适配title computed 计算属性
    33. 图片预览组件
          小图切换大图
            维护一个数组图片列表, 绑定鼠标移入事件获取当前小图下标值 
          下标值激活状态
            动态class设置激活状态 判断循环中的i是否和activeIndex相等
          放大镜效果
            滑块跟随鼠标移动
              获取鼠标相对位置 useMouseInElement  
              计算有效范围内控制滑块距离 处理边界
            放大
              v-show 控制大图显示
              宽高比2:1 反方向2倍移动    
    34. SKU 组件熟悉使用
    35. 通用组件全局注册

登录
    36. 登录页面静态搭建
    37. 表单校验 自定义校验 统一校验
    38. 登录基础功能 封装登录接口 响应拦截器添加错误提示           
    37. Pinia 管理用户数据 持久化
    38. 根据是否有 token 渲染不同模板
    39. 请求头携带token 
    40. 退出登录
    41. token 失效 401 响应拦截器处理

购物车
    本地购物车 ('未登录')  
      封装cartStore 按钮点击事件 选择好规格调用action添加 已有+1 没有则push
      小购物车渲染 删除 
      列表购物车路由绑定 基础渲染 单选 全选
    接口购物车 ('登录')
      封装接口 判断是否登录 使用不同逻辑 删除购物车 退出登录清楚购物车
    登录时合并购物车  
      未登录时选中的购物车商品合并到登录后的账户
        实现步骤:
          1.登陆时调用合并接口
          2.获取最新购物车列表
    
结算
    路由配置 ('路由关系 跳转')    
    基础数据渲染 ('封装接口 获取数据')
    切换地址('tab切换类交互')
      记录激活项('整个对象/id/index' + '动态控制类名')
    生成订单
      调用接口生成订单id 跳转支付页
      调用更新购物车列表接口 更新购物车状态

支付
    封装获取订单详情接口 渲染基础数据
    实现支付功能
    支付结果展示 配置路由 渲染数据       
```
