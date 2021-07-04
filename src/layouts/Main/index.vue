<template>
  <div>
    <a-layout>
      <vb-sidebar />
      <vb-menu-classic v-if="settings.layoutMenu === 'classic'" />
      <vb-menu-flyout v-if="settings.layoutMenu === 'flyout'" />
    </a-layout>
  </div>
</template>
<script lang="ts">
import VbMenuClassic from '@/@vb/components/MenuClassic/index.vue';
import VbMenuFlyout from '@/@vb/components/MenuFlyout/index.vue';
import VbSidebar from '@/@vb/components/Sidebar/index.vue';
import { useSettingStore } from '@/store/modules/setting';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    VbMenuClassic,
    VbMenuFlyout,
    VbSidebar
  },
  setup() {
    const settingsStore = useSettingStore();
    const settings = computed(() => settingsStore.$state);
    return {
      settings
    };
  }
});
</script>
<style lang="scss">
@import './style.module.scss';
</style>
