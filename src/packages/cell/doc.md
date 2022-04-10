

# Cell 单元格
### 介绍

复杂的数据信息的展示

###  基本使用
```html
  <mz-cell class="mgt-10" v-bind="datalist"></mz-cell>
  <mz-cell class="mgt-10" v-bind="dataNoDes"></mz-cell>
  <mz-cell class="mgt-10" v-bind="dataColor"></mz-cell>
```
```javascript
const datalist = {
    title: "标题",
    subTitle: "副标题",
    desc: 88
};
const dataNoDes = {
    title: "没有副标题和右箭头",
    desc: 88,
    isLink: false
};
const dataColor = {
    title: "信息颜色",
    desc: 88,
    desColor: "red",
    isLink: false
};
```
###  图片的展示方式
```html
  <mz-cell class="mgt-10" v-bind="dataImgList"></mz-cell>
```
```javascript
const dataImgList = {
    image:
        "https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png",
    title: "图片标题",
    subTitle: "副标题",
    desc: 88
};
```
###  图标的展示方式
```html
  <mz-cell class="mgt-10" v-bind="dataImgList"></mz-cell>
```
```javascript
const dataIconList = {
    icon: "daohang",
    title: "图标标题",
    subTitle: "副标题",
    desc: 88
};
```
###  图标的展示方式
```html
<div class="mgt-10">
    <mz-cell v-bind="dataSlot">
        <template #icon>自定义左侧内容</template>
    </mz-cell>
    <br />
    <mz-cell v-bind="dataSlotRight">
        <template #link>自定义右侧</template> </mz-cell
    ><br />
    <mz-cell v-bind="dataSlotLeft">
        <template #title>自定义标题</template>
    </mz-cell>
</div>
```
```javascript
const dataSlot = {
    icon: "daohang",
    subTitle: "副标题",
    desc: 88
};
const dataSlotLeft = {
    icon: "daohang",
    subTitle: "副标题",
    desc: 88
};
const dataSlotright = {
    icon: "daohang",
    title: "标题",
    subTitle: "副标题",
    desc: 88
};
```

## API

| 参数     | 说明                                                         | 类型    | 默认值    |
| -------- | ------------------------------------------------------------ | ------- | --------- |
| title     | 标题                                              | String  | 无 |
| subTitle     | 副标题                                               | String  | 无 |
| desc    | 右侧箭头文字                                                             | String  | 无 |
| height    | cell容器的高度                                           | Number  | `100`       |
| background    | 背景色                                                       | String  | `#fff` |
| image | 左侧图片                                                          | String  | 无 |
| icon    | 左侧icon                                                        | String  | 无 |
| desColor     | 右侧箭头前文字颜色                                 | String  | `#999999` |
| subColor  | 副文本文字颜色                                             | String  | `#666666` |
| isLink  | 是否展示右侧箭头                                             | Boolean | `true`   |

## Slot
| slot名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| icon  | 左侧内容插槽 | - |
| title  | 标题插槽 | - |
| link  | 右侧内容插槽 | - |


### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: MouseEvent |

