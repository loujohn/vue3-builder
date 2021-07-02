<template>
  <a-config-provider :locale="localeAntd">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import chinese from './locales/zh-CN';
import { createI18n } from 'vue-i18n';

import { useSettingStore } from '@/store/modules/setting';
import { defineComponent, ref, watch } from 'vue';
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
export default defineComponent({
  name: 'Localization',
  setup() {
    // const { locale } = useI18n();
    const settingStore = useSettingStore();
    const settingLocale = settingStore.locale;
    // locale.value = settingLocale;
    const localeAntd = ref(locales[settingLocale].localeAntd);
    watch(
      () => settingLocale,
      (settingLocale) => {
        // locale.value = settingLocale;
        localeAntd.value = locales[settingLocale].localeAntd;
      }
    );
    return {
      localeAntd
    };
  }
});
</script>
<style lang="scss"></style>
