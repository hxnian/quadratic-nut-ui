import { App } from 'vue';
import Button from './button/index.vue';
import Cell from './cell/index.vue';
import DetailsCell from './detailscell/index.vue';
import FormList from './formlist/index.vue';
import Loading from './loading/index.vue';
import SearchPage from './searchpage/index.vue';

function install(app: App) {
  const packages = [Button,Cell,DetailsCell,FormList,Loading,SearchPage];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
const version = '1.0.0';
export { install, version, Button,Cell,DetailsCell,FormList,Loading,SearchPage};
export default { install, version};