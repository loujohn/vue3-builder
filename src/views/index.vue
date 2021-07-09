<template>
  <div>1234</div>
</template>
<script lang="ts">
import { getUserInfo } from '@/api/sys/user';
import { onMounted } from 'vue';
export default {
  name: '',
  setup() {
    onMounted(async () => {
      const res = await getUserInfo();
      console.log(res);
    });
  }
};
</script>
<style lang="scss"></style>
