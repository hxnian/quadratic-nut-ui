

# FormList 表单列表
### 介绍

编辑/详情表单

###  基本使用
```html
   <mz-form-list
        :isEdit="params.isEdit"
        ref="ruleForm"
        label-width="100px"
        v-model:modelValue="formParams"
        :formList="formList"
    ></mz-form-list>
```
```javascript
import { reactive, ref } from "vue";
const params = reactive({
    isEdit: true
});
const formParams = ref({
    stationType: 0,
    time: ""
});
const formList = [
    {
        label: "名称",
        name: "name",
        required: true,
        message: "请输入"
    }
];
```
###  场景案例
```html
<mz-form-list
    :isEdit="params.isEdit"
    ref="ruleForm"
    label-width="100px"
    v-model:modelValue="formParams"
    :formList="formList"
>
    <template v-slot:test>
        自定义插槽
    </template>
    <!-- 加油站类型 -->
    <template v-slot:stationType="{ data }">
        <mz-picker-item
            v-if="params.isEdit"
            v-model:show="showViable.station"
            v-model:modelValue="formParams.stationType"
            :options="data.options"
            :cellText="'请选择加油站类型'"
        />
        <mz-edit-item
            v-else
            :formItem="data"
            :value="formParams.stationType"
        ></mz-edit-item>
    </template>
    <!-- 加注日期 happenDate -->
    <template v-slot:happenDate="{ data }">
        <div class="flex width100 height100">
            <mz-date
                fields="day"
                value="YYYY-MM-DD"
                :end="format('YYYY-MM-DD')"
                v-model:modelValue="formParams[data.name]"
                placeholder="加注日期"
                :isEdit="params.isEdit"
            />
        </div>
    </template>
    <!-- 加注时间 time -->
    <template v-slot:time="{ data }">
        <div class="flex width100 height100">
            <mz-date
                :end="getTimeEnd"
                v-model:modelValue="formParams[data.name]"
                v-bind="{
                    mode: 'time',
                    fields: 'day',
                    value: 'hh:mm',
                    isEdit: params.isEdit,
                    placeholder: '加注时间'
                }"
            />
        </div>
    </template>
</mz-form-list>
```
```javascript
import { format } from "@/utils/transfrom";
import { reactive, ref } from "vue";
const params = reactive({
    isEdit: true
});
const formParams = ref({
    stationType: 0,
    time: ""
});
const showViable = reactive({
    station: false
});
const ruleForm = ref<any>(null);

const formList = [
    {
        label: "名称",
        name: "name",
        required: true,
        message: "请输入"
    },
    {
        label: "自定义",
        name: "test",
        required: true,
        itemSlot: "test",
        message: "请选择加注日期"
    },
    {
        label: "加油站类型",
        name: "stationType",
        itemSlot: "stationType", // picker选择
        required: true,
        options: [
            { label: "内部站点", value: 1 },
            { label: "外部站点", value: 0 },
            { label: "合作站点", value: 2 }
        ],
        valueType: "select"
    },
    {
        label: "加注日期",
        name: "happenDate", // 日期选择
        required: true,
        itemSlot: "happenDate",
        message: "请选择加注日期"
    },
    {
        label: "加注时间",
        name: "time", // 时间选择
        required: true,
        itemSlot: "time",
        message: "请选择加注时间"
    }
];

const submit = async () => {
   let isOk = await ruleForm.value.validate();
   if (isOk) {
      const data = await api(formParams);
      if (data) {
          showToast(`操作成功`, { icon: 'success' })
      }
   }
};
```


## API

| 参数     | 说明                                                         | 类型    | 默认值    |
| -------- | ------------------------------------------------------------ | ------- | --------- |
| modelValue    | 绑定值                                      | Object  | `{}`   |
| formList     | 表单项数组                                     | Array  | `[]` |
| isEdit  | 是否是可输入状态                                            | Boolean | `true`   |
| blur  | 失焦事件                                            | Function | -   |


### formList
| 参数     | 说明                                                         | 类型    | 默认值    |
| -------- | ------------------------------------------------------------ | ------- | --------- |
| component    | 绑定值                                     | String  | `nut-input` |
| name     | 表单数据绑定 key                                      | String  | 无 |
| label  | 标题                                 | String  | 无 |
| placeholder  | 提示语                                  | String  | 无 |
| config  | 动态渲染的子组件配置                                 | String  | 无 |
| valueType  | 数据类型，可选值为`price`,`number`,`select`(用于详情是展示的类型)               | String  | 无 |
| itemSlot  | 编辑状态时的动态插槽                                  | String  | 无 |
| editSlot  | 详情状态时的动态插槽                                  | String  | 无 |
| step  | 数据转换单位的阀值，仅`valueType = number` 时生效                               | String  | 无 |
| unit  | 编辑/新增 展示的后缀单位                                | String  | 无 |
| afterUint  | `isEdit = false`时生效 详情展示的后缀单位                                | String  | 无 |
| message  | 必填校验的错误提示信息                                  | String  | `请输入` |

> 其他扩展字段和 NutUI保持一致
### formList-config
 和 Nutui 保持一致的配置
### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| validate  | 表单校验 | Boolean |
| reset  | 表单重置 | - |
| validError  | 校验错误时的错误信息 | - |