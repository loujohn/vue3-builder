<template>
  <div :class="$style.vb__sidebar__fixColorPicker">
    <template v-for="item in colors" :key="item">
      <a
        href="javascript: void(0);"
        :class="{
          [$style.vb__sidebar__select__item]: true,
          [$style.vb__sidebar__select__item__active]: value === item,
          [$style.vb__sidebar__select__item__black]: item === 'dark',
          [$style.vb__sidebar__select__item__white]: item === 'white',
          [$style.vb__sidebar__select__item__gray]: item === 'gray',
          [$style.vb__sidebar__select__item__blue]: item === 'blue',
          [$style.vb__sidebar__select__item__img]: item === 'image'
        }"
        @click="colorPickerHandler(setting, item)"
      ></a>
    </template>
  </div>
</template>

<script lang="ts">
import { useSettingStore } from '@/store/modules/setting';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    setting: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    colors: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const settings = useSettingStore();
    const colorPickerHandler = (setting, value) => {
      settings.changeSetting(setting, value);
    };
    return {
      colorPickerHandler
    };
  }
});
</script>

<style lang="scss" module>
@import '../style.module.scss';
</style>
