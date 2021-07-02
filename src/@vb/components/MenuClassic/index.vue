<template>
  <menu-left />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MenuLeft from './MenuLeft/index.vue';
export default defineComponent({
  name: 'MenuClassic',
  components: {
    MenuLeft
  },
  setup() {}
});
</script>
<style lang="scss"></style>
