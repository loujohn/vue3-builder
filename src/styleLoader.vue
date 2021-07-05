<template>
  <div>{{ primaryColor }}</div>
</template>
<script lang="ts">
import { computed, defineComponent, watch } from 'vue';

import '@/style/tailwind.css';

// antd core & themes styles
import 'ant-design-vue/lib/style/index.less';
import '@/@vb/style/vendors/antd/themes/default.less';
import '@/@vb/style/vendors/antd/themes/dark.less';

// third-party plugins styles
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'he-tree-vue/dist/he-tree-vue.css';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
// import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.snow.css';

// vb vendors styles
import '@/@vb/style/vendors/antd/style.scss';
import '@/@vb/style/vendors/bootstrap/style.scss';
import '@/@vb/style/vendors/nprogress/style.scss';
// import '@/@vb/style/vendors/he-tree-vue/style.scss';
import '@/@vb/style/vendors/perfect-scrollbar/style.scss';
// import '@/@vb/style/vendors/quill/style.scss';

// vb styles
import '@/@vb/style/core.scss';
import '@/@vb/style/measurements.scss';
import '@/@vb/style/colors.scss';
import '@/@vb/style/utils.scss';
import '@/@vb/style/layout.scss';
import '@/@vb/style/router.scss';

// vb extra styles
import '@/@vb/style/extra/clean.scss'; // clean styles
import '@/@vb/style/extra/air.scss'; // air styles

import { useSettingStore } from './store/modules/setting';
// import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'StyleLoader',
  setup() {
    const settings = useSettingStore();
    // const route = useRoute();
    // const query = computed(() => route.query);
    const version = computed(() => settings.version);
    const theme = computed(() => settings.theme);
    const primaryColor = computed(() => settings.primaryColor);
    watch(version, (version) => {
      document.querySelector('html')?.setAttribute('data-vb-version', version);
    });
    watch(theme, (theme) => {
      document.querySelector('html')?.setAttribute('data-vb-theme', theme);
      settings.changeSetting('menuColor', theme === 'dark' ? 'dark' : 'white');
    });
    watch(
      () => primaryColor,
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
