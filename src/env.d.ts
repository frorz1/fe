/// <reference types="vite/client" />

interface ImportMetaEnv {
  // import.meta.env的智能提示
  readonly VITE_ENV: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.less'
