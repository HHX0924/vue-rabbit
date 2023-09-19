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
```
