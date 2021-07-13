<template>
  <a-config-provider :locale="getAntdLocale">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useLocale } from '@/locales/useLocale';

export default defineComponent({
  name: 'Localization',
  setup() {
    const { getAntdLocale } = useLocale();

    return {
      getAntdLocale
    };
  }
});
</script>
<style lang="scss"></style>
