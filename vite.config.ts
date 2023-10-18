import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import visualizer from 'rollup-plugin-visualizer'

export default defineConfig(({ command }) => {
  const base = '/h5/'
  // if (command === 'build') {
  //   base = `https://xxxxxx-${process.env.VITE_DEPLOY_ENV}-${process.env.VITE_DEPLOY_CID}/h5/`
  // }
  return {
    // 这么做是为了让本地环境打开时没有 src/pages, 当部署到测试环境打开时和本地的路径相同
    // 测试环境可以配置nginx, 将  xxxx-domain 下的 /h5/page1 转发到 dist/page1
    root: 'src/pages',
    base,
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
    },
    server: {
      port: 3000,
      host: true,
      hmr: {
        protocol: 'ws',
        host: '127.0.0.1',
      },
      proxy: {
        '/api': {
          target: 'https://xxx/',
          changeOrigin: true,
        },
        '/xxx': {
          target: 'https://xxx/',
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      rollupOptions: {
        // XXX: input部分可以开发vite插件完成自动生成html模版和读取目录结构生成rollupOptions.input
        input: {
          page1: path.resolve(__dirname, 'src/pages/page1/index.html'),
          page2: path.resolve(__dirname, 'src/pages/page2/index.html'),
        },
        output: {
          // chunkFileNames: 'static/js/[name]-[hash].js',
          // entryFileNames: 'static/js/[name]-[hash].js',
          // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks: {
            vendor: ['react', 'react-dom'],
            // 想要什么自定义
            // lodash: ['lodash'],
          },
        },
      },
    },
    plugins: [
      react(),
      legacy({
        targets: {
          chrome: '49',
          firefox: '64',
          safari: '10',
          edge: '13',
          ios: '10',
        },
        // 如果有ie需求
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
      // TODO: analyzer文件应该生成到一个.useless文件夹里，用gitigonre忽略
      process.env.REPORT
        ? visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: path.resolve(__dirname, '.useless/stats.html'),
          })
        : null,
    ],
  }
})
