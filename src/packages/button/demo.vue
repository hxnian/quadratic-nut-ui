<template>
  <div class="demo">
    <h2>按钮类型</h2>
    <div class="demo-button-row">
      <mz-button type="primary">主要按钮</mz-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('button');
export default createDemo({
  props: {},
  setup(props) {
    let isLoading = ref(false);
    const changeLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 3000);
    };

    return {
      isLoading,
      changeLoading
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-button-row {
  margin-bottom: 20px;
}
.demo-button-row2 {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.nut-button {
  margin-right: 15px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
}
</style>
