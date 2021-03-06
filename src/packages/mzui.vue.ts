import { App } from 'vue';
import Cell from './cell/index.vue';
import DetailsCell from './detailscell/index.vue';
import FormList from './formlist/index.vue';
import Loading from './loading/index.vue';
import SearchPage from './searchpage/index.vue';

function install(app: App) {
  const packages = [Cell,DetailsCell,FormList,Loading,SearchPage];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

import './cell/index.scss';
import './detailscell/index.scss';
import './formlist/index.scss';
import './loading/index.scss';
import './searchpage/index.scss';

export { install, Cell,DetailsCell,FormList,Loading,SearchPage  };
export default { install, version:'1.0.1'};