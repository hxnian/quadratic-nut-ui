const package = require('../package.json');
const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
// 导入vue
let importStr = `import { App } from 'vue';\n`;
let importScssStr = `\n`;
const packages = [];
// 组价文档加载,更新包
config.nav.map((item) => {
    item.packages.forEach((element) => {
        // 组件名 展示 类型 导出
        let { name, show, type, exportEmpty } = element;
        if (show || exportEmpty) {
            // 引入组件
            importStr += `import ${name} from './${name.toLowerCase()}/index${type === 'methods' ? '' : '.vue'}';\n`;
            // css
            importScssStr += `import './${name.toLowerCase()}/index.scss';\n`;
            packages.push(name);
        }
    });
});
// 组件安装
let installFunction = `function install(app: App) {
  const packages = [${packages.join(',')}];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}`;
//  组件库导出
let fileStrBuild = `${importStr}
${installFunction}
const version = '${package.version}';
export { install, version, ${packages.join(',')}};
export default { install, version};`;
//文件写入
fs.outputFile(path.resolve(__dirname, '../src/packages/mzui.vue.build.ts'), fileStrBuild, 'utf8', (error) => {
    // logger.success(`${package_config_path} 文件写入成功`);
});

let fileStrDev = `${importStr}
${installFunction}
${importScssStr}
export { install, ${packages.join(',')}  };
export default { install, version:'${package.version}'};`;
fs.outputFile(path.resolve(__dirname, '../src/packages/mzui.vue.ts'), fileStrDev, 'utf8', (error) => {
    // logger.success(`${package_config_path} 文件写入成功`);
});
