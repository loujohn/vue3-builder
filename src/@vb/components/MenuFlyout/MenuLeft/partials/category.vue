<template>
  <li :class="styles.air__menuLeft__category">
    <span>{{ item.title }}</span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Category',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    styles: {
      type: Object,
      default: () => {}
    }
  }
});
</script>
