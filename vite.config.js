import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
  VantResolver
} from 'unplugin-vue-components/resolvers'
import {
  // dirResolver,
  DirResolverHelper
  // AutoGenerateImports
} from 'vite-auto-import-resolvers'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import eslintPlugin from 'vite-plugin-eslint'
import removeConsole from 'vite-plugin-remove-console'
import { compression } from 'vite-plugin-compression2'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

export default () => {
  return defineConfig({
    base: '/dividend/',
    resolve: {
      alias: {
        '@': `${resolve(__dirname, 'src')}/`
      }
    },
    optimizeDeps: {
      include: ['@vue/runtime-dom', '@vueuse/core', 'pinia']
    },
    plugins: [
      vue(),
      Pages(),
      Layouts({
        defaultLayout: 'default'
      }),
      DirResolverHelper(),
      eslintPlugin({ cache: false }),
      Components({
        dirs: ['src/components'],
        extensions: ['vue'],
        dts: 'src/components.d.ts',
        resolvers: [ElementPlusResolver(), VantResolver()]
      }),
      eslintPlugin({
        include: './src/**/*.{vue,js,jsx,ts,tsx}',
        exclude: []
      }),
      removeConsole(),
      compression(),
      chunkSplitPlugin()
    ],
    build: {
      sourcemap: true,
      outDir: 'dist',
      assetsDir: 'dist',
      rollupOptions: {
        output: {
          entryFileNames: 'dist/assets/[name].[hash].js',
          chunkFileNames: 'dist/assets/[name].[hash].js',
          assetFileNames: 'dist/assets/[name].[hash].[ext]'
        }
      },
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    server: {
      port: 5000, // 启动端口
      host: '0.0.0.0' // 显示IP位置
    }
  })
}
