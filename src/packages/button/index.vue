<template>
    <view @click="handleClick"> 按钮-{{ text }} </view>
</template>

<script lang="ts">
import { PropType, CSSProperties, toRefs, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('button');

export default create({
    //   components: {
    //     [Icon.name]: Icon
    //   },
    props: {
        text: String
    },
    emits: ['click'],
    setup(props, { emit, slots }) {
        const handleClick = (event: MouseEvent) => {
            emit('click', event);
        };
        return {
            handleClick
        };
    }
});
</script>
