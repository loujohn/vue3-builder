<template>
  <div>
    <a-layout>
      <menu-classic />
    </a-layout>
  </div>
</template>
<script lang="ts">
import MenuClassic from '@/@vb/components/MenuClassic/index.vue';
export default {
  name: 'MainLayout',
  components: {
    MenuClassic
  },
  setup() {}
};
</script>
<style lang="scss"></style>
