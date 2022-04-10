
# SearchPage 可搜索的无限滚动
### 介绍

简单的数据信息的展示

###  基本使用
```html
    <mz-search-page v-model:modelValue="modelValue">
        <mz-loading-page
            :key="state.loadKey"
            v-bind="{ ...loadParams, value: modelValue }"
            @select-item="selectItem"
            :active="state.active"
        >
        </mz-loading-page>
    </mz-search-page>
```
```javascript
import MzSearchPage from '@/components/search-page/index.vue';
import MzLoadingPage from '@/components/search-page/loading-page.vue';

const modelValue = ref('');
```


## searchPage API

| 参数     | 说明                                                         | 类型    | 默认值    |
| -------- | ------------------------------------------------------------ | ------- | --------- |
| modelValue     |  搜索的内容                                              | String  | `'' `|


## searchPage Slot
| slot名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| -   | 默认内容插槽 | - |

## loadingPage API
| 参数     | 说明                                                         | 类型    | 默认值    |
| -------- | ------------------------------------------------------------ | ------- | --------- |
| active    | 选中的标识，  默认为id子段                                                      | string | number  | 无 |
| api     |  列表数据请求接口（分页的接口才行）                                              | String  | 无 |
| params     |  接口请求参数                                              | Object  | 无 |
| transfrom    |  数据的转换方法                                                        | String  | 无 |
| value    | 搜索的值  ，对应请求参数  `param`                                                        | String  | 无 |


### loadingPage Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| select-item  |   选中其中一项时出发 | `item` 当前这一项数据 |



