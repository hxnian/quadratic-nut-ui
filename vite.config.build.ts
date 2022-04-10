import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import config from './package.json';
// import image from 'rollup-plugin-image';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2022 @mzui.
* Released under the MIT License.
*/`;

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/styles/variables.scss";@import "./doc/assets/styles/variables.scss";`
      }
    },
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        })
      ]
    }
  },
  plugins: [vue()],
  build: {
    minify: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router'],
      output: {
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
      //  plugins: [
      //   image()
      // ]
    },
    lib: {
      entry: 'src/packages/mzui.vue.build.ts',
      name: 'mzui',
      fileName: 'mzui',
      formats: ['es', 'umd']
    }
  }
});
