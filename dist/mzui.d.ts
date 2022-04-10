import { App } from 'vue';
declare class UIComponent {
  static install(vue: App): void;
}
declare class Button extends UIComponent {}
declare class Cell extends UIComponent {}
declare class DetailsCell extends UIComponent {}
declare class FormList extends UIComponent {}
declare class Loading extends UIComponent {}
declare class SearchPage extends UIComponent {}

export interface InstallationOptions {
  locale?: any;
  lang?: any;
}
declare function install(app: App, options?: InstallationOptions): void;
export { Button,Cell,DetailsCell,FormList,Loading,SearchPage,install };
declare const _default: {
  install: typeof install;
  version: string;
};
export default _default;