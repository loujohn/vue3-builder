<template>
  <menu-left v-if="settings.menuLayoutType === 'left' && !settings.isMobileView" />
  <menu-top v-if="settings.menuLayoutType === 'top' && !settings.isMobileView" />
  <div v-if="settings.isMobileView">
    <div :class="$style.handler" @click="toggleMobileMenu">
      <div :class="$style.handlerIcon"></div>
    </div>
    <a-drawer
      :closable="false"
      :visible="settings.isMobileMenuOpen"
      placement="left"
      :wrap-class-name="$style.mobileMenu"
      @close="toggleMobileMenu"
      :width="settings.leftMenuWidth"
    >
      <menu-left />
    </a-drawer>
  </div>
</template>
<script lang="ts">
import { useSettingStore } from '@/store/modules/setting';
import { defineComponent, computed } from 'vue';
import MenuLeft from './MenuLeft/index.vue';
import MenuTop from './MenuTop/index.vue';
export default defineComponent({
  name: 'MenuClassic',
  components: {
    MenuLeft,
    MenuTop
  },
  setup() {
    const settingsStore = useSettingStore();
    const settings = computed(() => settingsStore.$state);
    const toggleMobileMenu = () => {
      settingsStore.changeSetting('isMobileMenuOpen', !settingsStore.isMobileMenuOpen);
    };
    return {
      settings,
      toggleMobileMenu
    };
  }
});
</script>
<style lang="scss" module>
@import './style.module.scss';
</style>
