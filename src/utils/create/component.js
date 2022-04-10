import { defineComponent } from 'vue';
export function createComponent(name) {
    const componentName = 'mz-' + name;
    return {
        componentName,
        create: function (_component) {
            _component.baseName = name;
            _component.name = componentName;
            _component.install = (vue) => {
                vue.component(_component.name, _component);
            };
            return defineComponent(_component);
        },
        createDemo: function (_component) {
            _component.baseName = name;
            _component.name = 'demo-' + name;
            return defineComponent(_component);
        }
    };
}
