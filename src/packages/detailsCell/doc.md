
# DetailsCell 单元格
### 介绍

简单的数据信息的展示

###  基本使用
```html
   <mz-details-cell class="mgt-10" v-bind="datalist"></mz-details-cell>
    <mz-details-cell class="mgt-10" v-bind="dataNoDes"></mz-details-cell>
    <mz-details-cell class="mgt-10" v-bind="dataDetails"></mz-details-cell>
```
```javascript
const datalist = {
    icon: "baoche",
    title: "图标标题",
    value: "值",
    desc: "描述"
};
const dataNoDes = {
    title: "图标+标题图标",
    titleIcon: "baoche",
    icon: "ranyoujilu",
    desc: "描述",
    value: "值"
};
const dataDetails = {
    title: "详情使用",
    value: "值",
    color: "red"
};
```
###  自定义颜色和字体大小
```html
   <mz-details-cell class="mgt-10" v-bind="dataColor"></mz-details-cell>
```
```javascript
const dataColor = {
    title: "信息颜色",
    value: "值",
    desc: "描述",
    color: "red",
    fontSize: 40
};
```
###  自定义高度
```html
  <mz-details-cell class="mgt-10" v-bind="dataHeight"></mz-details-cell>
```
```javascript
const dataHeight = {
    title: "详情使用",
    value: "值",
    height: 150,
    color: "red"
};
```

## API

| 参数     | 说明                                                         | 类型    | 默认值    |
| -------- | ------------------------------------------------------------ | ------- | --------- |
| title     | 标题                                              | String  | 无 |
| titleIcon    | 标题左侧icon                                                        | String  | 无 |
| desc     | 副标题                                               | String  | 无 |
| icon    | 内容左侧icon（可支持图片）                                                        | String  | 无 |
| value    | 右侧值                                                             | String  | 无 |
| height    | cell容器的高度                                           | Number  | `120`       |
| color     | 右侧文字颜色                                 | String  | 无 |
| fontSize    | 右侧文字字体大小                                                      | String  | `28` |

## Slot
| slot名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| desc  | 副标题插槽 | - |
| link  | 右侧内容插槽 | - |


