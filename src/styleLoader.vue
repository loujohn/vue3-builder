<template>
  <div>{{ primaryColor }}</div>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue';

// import '@/style/tailwind.css';

import '@/@vb/style/utils.scss';

// import '@/@vb/style/vendors/antd/style.scss';
// import '@/@vb/style/vendors/bootstrap/style.scss';
// import '@/@vb/style/vendors/nprogress/style.scss';
// import '@/@vb/style/vendors/he-tree-vue/style.scss';
// import '@/@vb/style/vendors/perfect-scrollbar/style.scss';
// import '@/@vb/style/vendors/quill/style.scss';

import '@/@vb/style/core.scss';

import { useSettingStore } from './store/modules/setting';
export default defineComponent({
  name: 'StyleLoader',
  setup() {
    const settings = useSettingStore();
    watch(
      () => settings.primaryColor,
      (primaryColor) => {
        const styleElement = document.querySelector('#primaryColor');
        if (styleElement) {
          styleElement.remove();
        }
        const body = document.querySelector('body');
        const styleEl = document.createElement('style');
        const css = document.createTextNode(`:root { --vb-color-primary: ${primaryColor};}`);
        styleEl.setAttribute('id', 'primaryColor');
        styleEl.appendChild(css);
        body?.appendChild(styleEl);
      }
    );
    return {};
  }
});
</script>
<style lang="scss"></style>
