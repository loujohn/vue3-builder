<template>
  <menu-left v-if="settings.menuLayoutType === 'left'" />
  <menu-top v-if="settings.menuLayoutType === 'top'" />
</template>

<script>
import { computed, toRefs } from 'vue';
import MenuLeft from './MenuLeft/index.vue';
import MenuTop from './MenuTop/index.vue';

import { defineComponent } from 'vue';
import { useSettingStore } from '@/store/modules/setting';

export default defineComponent({
  components: { MenuTop, MenuLeft },
  setup() {
    const settingsStore = useSettingStore();
    const settings = computed(() => settingsStore.$state);
    return {
      settings
    };
  }
});
</script>
