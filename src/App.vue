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

<style></style>
