<template>
  <localization />
  <style-loader />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Localization from '@/localization.vue';
import StyleLoader from '@/styleLoader.vue';

export default defineComponent({
  name: 'App',
  components: {
    Localization,
    StyleLoader
  }
});
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
