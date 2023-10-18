# fe
H5项目, Vite + TypeScript + Eslint + Preittier + Stylelint + React + Zustand

## 安装
```
pnpm i
```

## 启动
```
pnpm dev
```

## 本地访问
默认端口3000， 默认base：/h5/, 访问地址 http://localhost:3000/h5/page1/

## 打包
```
pnpm build
```

## 打包后文件
```
dist
├── assets
│   ├── css
│   │   ├── xxx.css
│   └── js
│       ├── xxx.js
├── favicon.ico
├── page1
│   ├── index.html
├── page2
│   ├── index.html
```

## 配合vscode使用
建议在vscode上安装eslint和prettier插件，然后增加配置在保存时格式化的配置，如：
```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true,
  "source.fixAll.markdownlint": true
}
```
