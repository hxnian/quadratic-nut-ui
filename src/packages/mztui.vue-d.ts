import { App } from 'vue';
import Button from './button/index.vue';

function install(app: App) {
  const packages = [Button];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

import './button/index.scss';

export { install, Button  };
export default { install, version:'1.0.3'};