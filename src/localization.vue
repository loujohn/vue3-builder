<template>
  <a-config-provider :locale="localeAntd">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import chinese from './locales/zh-CN';
import { createI18n } from 'vue-i18n';
// import { useStoreHooks } from './hooks/useStoreHooks';
const locales = {
  'zh-CN': chinese
};
export const i18n = createI18n({
  // legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': locales['zh-CN'].messages
  }
});
export default {
  naem: 'Localization',
  setup() {
    // const { state, getters } = useStoreHooks();
  }
};
</script>
<style lang="scss"></style>
