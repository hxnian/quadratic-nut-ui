<!--
 * @Author: your name
 * @Date: 2022-03-30 22:06:14
 * @LastEditTime: 2022-03-30 22:13:13
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \quadratic-nut-ui\src\packages\cell\index.vue
-->
<template>
    <div v-bind="$attrs" class="flex-between mz-cell-wrapper" :style="getStyle" @click="clickItem">
        <div class="mz-cell-icon flex">
            <slot v-if="slots.icon" name="icon"></slot>
            <template v-else>
                <img v-if="image" class="mz-cell-img" :src="image" />
                <mz-icon
                    v-else-if="icon"
                    class="mz-cell-img-icon"
                    :size="40"
                    v-bind="$attrs"
                    :name="icon"
                    class-prefix="icon"
                ></mz-icon>
                <div class="mgl-20 mz-cell-text">
                    <p class="mz-cell-title">
                        <slot v-if="slots.title" name="title"></slot><span v-else>{{ title }}</span>
                    </p>
                    <div v-if="subTitle" class="mz-cell-sub-title" :style="{ color: subColor }">{{ subTitle }}</div>
                </div>
            </template>
        </div>
        <div class="mz-cell-link">
            <slot v-if="slots.link" name="link"></slot>
            <template v-else>
                <span :style="{ color: desColor }" class="mz-cell-desc">{{ desc }}</span>
                <mz-icon
                    name="youcejiantou"
                    class-prefix="icon"
                    :color="desColor"
                    v-if="isLink"
                    class="mz-cell-right mgl-20"
                    size="18"
                />
            </template>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useStyle } from '@/components/hooks/base';
import { computed, useAttrs, useSlots } from 'vue';

interface Props {
    title?: string;
    subTitle?: string; // 副标题
    desc?: string | string; // 右侧箭头文字
    height?: number;
    background?: string;
    image?: string; // 左侧图展示
    icon?: string; // 左侧icon
    desColor?: string; // 右侧箭头前文字颜色
    subColor?: string; // 副文本文字颜色
    isLink?: boolean; // 是否展示右侧箭头
}
const props = withDefaults(defineProps<Props>(), {
    title: '',
    desc: '',
    subTitle: '',
    icon: '',
    height: 100,
    background: '#fff',
    image: '',
    desColor: '#999999',
    subColor: '#666666',
    isLink: true
});
const emit = defineEmits<{
    (e: 'click', ...args: any): void;
}>();
const getStyle = computed(() => {
    return { ...useStyle(props).value, background: props.background };
});
const $attrs = useAttrs();
const slots = useSlots();
const clickItem = (e) => {
    e.stopPropagation();
    emit('click');
};
</script>
