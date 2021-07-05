<template>
  <a-modal
    v-model:visible="isPreselectedOpen"
    title="Theme Configurator"
    :footer="null"
    :wrap-class-name="$style.wrapper"
    :mask-сlosable="false"
    :mask="false"
    @cancel="closeModal"
  >
    <div>
      <h6 class="mb-3">
        <strong>预定义主题</strong>
      </h6>
      <template v-for="(item, index) in themes" :key="index">
        <a-button
          size="large"
          :class="$style.button"
          :type="item.preselectedVariant === variant ? 'primary' : 'default'"
          @click="() => applyVariant(item.preselectedVariant)"
        >
          {{ item.preselectedVariant }}
        </a-button>
      </template>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="mt-4">
          <h6 class="mb-3">
            <strong>Visual Builder Style</strong>
          </h6>
          <a-radio-group :default-value="version" @change="changeSettingEvent($event, 'version')">
            <a-radio-button :value="'fluent'">Fluent</a-radio-button>
            <a-radio-button :value="'clean'">Clean</a-radio-button>
            <a-radio-button :value="'air'">Air</a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="mt-4">
          <h6 class="mb-3">
            <strong>Theme</strong>
          </h6>
          <a-radio-group :default-value="theme" @change="changeSettingEvent($event, 'theme')">
            <a-radio-button :value="'default'">Light</a-radio-button>
            <a-radio-button :value="'dark'">Dark</a-radio-button>
          </a-radio-group>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script>
import { computed, ref, watch } from 'vue';
import themes from './configs.json';
import { useSettingStore } from '@/store/modules/setting';

export default {
  setup() {
    const settingsStore = useSettingStore();
    const isPreselectedOpen = computed(() => settingsStore.isPreselectedOpen);
    const preselectedVariant = computed(() => settingsStore.preselectedVariant);
    const version = computed(() => settingsStore.version);
    const theme = computed(() => settingsStore.theme);
    const variant = ref('default');

    const closeModal = () => {
      settingsStore.changeSetting('isPreselectedOpen', false);
    };

    const changeSettingEvent = (e, setting) => {
      const { value } = e.target;
      settingsStore.changeSetting(setting, value);
    };

    const applyVariant = (key) => {
      variant.value = key;
      const payload = JSON.parse(JSON.stringify(themes[key]));
      if (theme.value === 'dark') {
        payload.menuColor = 'dark';
      }
      settingsStore.changeSettingBulk(payload);
    };

    watch(preselectedVariant, (preselectedVariant) => {
      applyVariant(preselectedVariant);
    });

    return {
      isPreselectedOpen,
      preselectedVariant,
      version,
      theme,
      closeModal,
      changeSettingEvent,
      themes,
      applyVariant,
      variant
    };
  }
};
</script>

<style lang="scss" module>
@import './style.module.scss';
</style>
