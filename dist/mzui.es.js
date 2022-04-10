/*!
* mz-taro-ui v1.0.0 Sun Apr 10 2022 17:39:42 GMT+0800 (中国标准时间)
* (c) 2022 @mzui.
* Released under the MIT License.
*/
import { defineComponent, openBlock, createElementBlock, toDisplayString } from "vue";
function createComponent(name) {
  const componentName2 = "mz-" + name;
  return {
    componentName: componentName2,
    create: function(_component) {
      _component.baseName = name;
      _component.name = componentName2;
      _component.install = (vue) => {
        vue.component(_component.name, _component);
      };
      return defineComponent(_component);
    },
    createDemo: function(_component) {
      _component.baseName = name;
      _component.name = "demo-" + name;
      return defineComponent(_component);
    }
  };
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const { componentName, create } = createComponent("button");
const _sfc_main$5 = create({
  props: {
    text: String
  },
  emits: ["click"],
  setup(props, { emit, slots }) {
    const handleClick = (event) => {
      emit("click", event);
    };
    return {
      handleClick
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, " \u6309\u94AE-" + toDisplayString(_ctx.text), 1);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {};
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("view", null, "cell");
}
var Cell = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {};
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("view", null, "CELL****");
}
var DetailsCell = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {};
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("view", null, "cell");
}
var FormList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("view", null, "CELL****");
}
var Loading = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("view", null, "CELL****");
}
var SearchPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
function install(app) {
  const packages = [Button, Cell, DetailsCell, FormList, Loading, SearchPage];
  packages.forEach((item) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
const version = "1.0.0";
var mzui_vue_build = { install, version };
export { Button, Cell, DetailsCell, FormList, Loading, SearchPage, mzui_vue_build as default, install, version };
