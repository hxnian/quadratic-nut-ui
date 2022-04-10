/*!
* mz-taro-ui v1.0.0 Sun Apr 10 2022 17:39:43 GMT+0800 (中国标准时间)
* (c) 2021 @mzui.
* Released under the MIT License.
*/
import { defineComponent, openBlock, createElementBlock, toDisplayString } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.js";
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
const { componentName, create } = createComponent("button");
const _sfc_main = create({
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, " \u6309\u94AE-" + toDisplayString(_ctx.text), 1);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
