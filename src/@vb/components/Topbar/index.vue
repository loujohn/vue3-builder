<template>
  <div :class="$style.topbar">
    <!-- <div class="mr-4">
      <vb-fav-pages />
    </div>
    <div class="mr-auto mr-md-1">
      <vb-search />
    </div>
    <div class="mr-4 d-none d-md-block">
      <vb-issues-history />
    </div>
    <div class="mr-auto d-xl-block d-none">
      <vb-project-management />
    </div>
    <div class="ml-auto mr-3 d-none d-sm-block">
      <vb-cart />
    </div>
    <div class="mr-3 d-none d-sm-block">
      <vb-actions />
    </div>
    <div class="mr-3 d-none d-sm-block">
      <vb-language-switcher />
    </div> -->
    <div>
      <vb-user-menu />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VbUserMenu from './UserMenu/index.vue';

export default defineComponent({
  components: {
    // VbIssuesHistory,
    // VbProjectManagement,
    // VbSearch,
    // VbLanguageSwitcher,
    // VbActions,
    VbUserMenu
    // VbFavPages,
    // VbCart
  }
});
</script>

<style lang="scss" module>
@import './style.module.scss';
</style>
