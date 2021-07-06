<template>
  <cesium-map />
  <div class="w-2/12 p-2 bg-white left-2">
    <a-input-search style="margin-bottom: 8px;" placeholder="Search" @change="onChange" />
    <a-tree :expanded-keys="expandedKeys" :auto-expand-parent="autoExpandParent" :tree-data="gData" @expand="onExpand">
      <template #title="{ title }">
        <span v-if="title.indexOf(searchValue) > -1">
          {{ title.substr(0, title.indexOf(searchValue)) }}
          <span style="color: #f50;">{{ searchValue }}</span>
          {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        </span>
        <span v-else>{{ title }}</span>
      </template>
    </a-tree>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import cesiumMap from '@/@map/map.vue';
export default defineComponent({
  name: 'LeftSideBar',
  components: {
    cesiumMap
  },
  props: {},
  setup: () => {}
});
</script>

<style scoped></style>
