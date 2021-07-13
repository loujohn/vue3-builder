<template>
  <div>
    <div
      :class="{
        [$style.vb__sidebar]: true,
        [$style.vb__sidebar__toggled]: settings.isSidebarOpen
      }"
    >
      <perfect-scrollbar :style="{ height: '100%' }">
        <div :class="$style.vb__sidebar__inner">
          <a href="javascript: void(0);" :class="$style.vb__sidebar__close" class="fe fe-x" @click="toggleSettings()"></a>
          <h5 class="mb-4">
            <strong>设置</strong>
          </h5>
          <a-collapse v-model:activeKey="activeKey" accordion :bordered="false">
            <a-collapse-panel key="1" header="应用设置">
              <div class="pt-2 mb-2">
                <h6>
                  <strong>应用名称</strong>
                </h6>
                <a-input :value="settings.logo" @change="changeSettingEvent($event, 'logo')" />
              </div>
              <div class="pt-2 mb-2">
                <h6>
                  <strong>路由动画</strong>
                </h6>
                <a-select :default-value="settings.routerAnimation" style="width: 100%;" @change="(value) => changeSettingValue(value, 'routerAnimation')">
                  <a-select-option value="none">None</a-select-option>
                  <a-select-option value="slide-fadein-up">Slide Up</a-select-option>
                  <a-select-option value="slide-fadein-right">Slide Right</a-select-option>
                  <a-select-option value="fadein">Fade In</a-select-option>
                  <a-select-option value="zoom-fadein">Zoom</a-select-option>
                </a-select>
              </div>
              <div class="pt-2 mb-2">
                <h6>
                  <strong>语言</strong>
                </h6>
                <a-select :value="settings.locale" style="width: 100%;" @change="(value) => changelocale(value)">
                  <a-select-option value="en_US">English (en-US)</a-select-option>
                  <a-select-option value="fr-FR">French (fr-FR)</a-select-option>
                  <a-select-option value="ru-RU">Русский (ru-RU)</a-select-option>
                  <a-select-option value="zh_CN">简体中文 (zh-CN))</a-select-option>
                </a-select>
              </div>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="布局设置">
              <div class="pt-3 mb-2">
                <h6>
                  <strong>字体样式</strong>
                </h6>
                <div class="clearfix pt-1">
                  <a-radio-group :default-value="settings.version" @change="changeSettingEvent($event, 'version')">
                    <div class="row">
                      <div class="col-6">
                        <div class="mb-2">
                          <a-radio :value="'fluent'">Fluent (System Default Font)</a-radio>
                        </div>
                        <div class="mb-2">
                          <a-radio :value="'clean'">Clean (Mukta Font)</a-radio>
                        </div>
                        <div class="mb-2">
                          <a-radio :value="'air'">Air (Source Sans Font)</a-radio>
                        </div>
                      </div>
                    </div>
                  </a-radio-group>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>暗黑主题</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="{style.vb__sidebar__fixSwitch}">
                      <a-switch :checked="settings.theme === 'dark'" @click="changeSettingValue($event ? 'dark' : 'default', 'theme')" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Content Max-Width</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <a-switch :checked="settings.isContentMaxWidth" @click="changeSettingSwitch($event, 'isContentMaxWidth')" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Layout Max-Width</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <a-switch :checked="settings.isAppMaxWidth" @click="changeSettingSwitch($event, 'isAppMaxWidth')" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Layout Gray Bg</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <a-switch :checked="settings.isGrayBackground" @click="changeSettingSwitch($event, 'isGrayBackground')" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Card Squared Borders</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <a-switch :checked="settings.isSquaredBorders" @click="changeSettingSwitch($event, 'isSquaredBorders')" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Card Shadow</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <a-switch :checked="settings.isCardShadow" @click="changeSettingSwitch($event, 'isCardShadow')" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Card Borderless</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <a-switch :checked="settings.isBorderless" @click="changeSettingSwitch($event, 'isBorderless')" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Auth Layout Topbar</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <a-switch :checked="settings.isAuthTopbar" @click="changeSettingSwitch($event, 'isAuthTopbar')" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Auth Layout Bg</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <vb-color-picker :value="settings.authPagesColor" :setting="'authPagesColor'" :colors="['white', 'gray', 'image']" />
                    </div>
                  </div>
                </div>
              </div>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="菜单设置">
              <div class="pt-2 mb-2">
                <h6>
                  <strong>Menu Variant</strong>
                </h6>
                <div class="clearfix pt-1">
                  <a-radio-group :default-value="settings.layoutMenu" @change="changeSettingEvent($event, 'layoutMenu')">
                    <div class="row">
                      <div class="col-6">
                        <div class="mb-2">
                          <a-radio :value="'classic'">Classic</a-radio>
                        </div>
                        <div class="mb-2">
                          <a-radio :value="'flyout'">Flyout</a-radio>
                        </div>
                        <div class="mb-2">
                          <a-radio :value="'simply'">Simply</a-radio>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="mb-2">
                          <a-radio :value="'noMenu'">None</a-radio>
                        </div>
                      </div>
                    </div>
                  </a-radio-group>
                </div>
              </div>
              <div v-if="settings.layoutMenu === 'classic' || settings.layoutMenu === 'flyout'">
                <div class="pt-2 mb-2">
                  <h6>
                    <strong>Menu Layout Type</strong>
                  </h6>
                  <div class="clearfix pt-1">
                    <a-radio-group :default-value="settings.menuLayoutType" @change="changeSettingEvent($event, 'menuLayoutType')">
                      <div class="row">
                        <div class="col-6">
                          <div class="mb-2">
                            <a-radio :value="'left'">Left</a-radio>
                          </div>
                          <div class="mb-2">
                            <a-radio :value="'top'">Top</a-radio>
                          </div>
                        </div>
                      </div>
                    </a-radio-group>
                  </div>
                </div>
                <div v-if="settings.layoutMenu === 'flyout'" class="pt-2 mb-2">
                  <h6>
                    <strong>Sub Menu Type</strong>
                  </h6>
                  <div class="clearfix pt-1">
                    <a-radio-group :default-value="settings.flyoutMenuType" @change="changeSettingEvent($event, 'flyoutMenuType')">
                      <div class="row">
                        <div class="col-6">
                          <div class="mb-2">
                            <a-radio :value="'flyout'">Flyout</a-radio>
                          </div>
                          <div class="mb-2">
                            <a-radio :value="'default'">Default</a-radio>
                          </div>
                          <div class="mb-2">
                            <a-radio :value="'compact'">Compact</a-radio>
                          </div>
                        </div>
                      </div>
                    </a-radio-group>
                  </div>
                </div>
              </div>
              <div v-if="settings.layoutMenu === 'classic' || settings.layoutMenu === 'flyout' || settings.layoutMenu === 'simply'">
                <div class="pt-2 mb-2">
                  <div class="row">
                    <div class="col-auto mr-auto">
                      <h6>
                        <strong>Menu Color</strong>
                      </h6>
                    </div>
                    <div class="col-auto">
                      <div class="vb__sidebar__fixColorPicker">
                        <vb-color-picker :value="settings.menuColor" :setting="'menuColor'" :colors="['white', 'gray', 'dark']" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="settings.layoutMenu === 'flyout'">
                <div v-if="settings.flyoutMenuType === 'flyout' || settings.flyoutMenuType === 'compact'" class="pt-2 mb-2">
                  <div class="row">
                    <div class="col-auto mr-auto">
                      <h6>
                        <strong>Flyout Color</strong>
                      </h6>
                    </div>
                    <div class="col-auto">
                      <div class="vb__sidebar__fixColorPicker">
                        <vb-color-picker :value="settings.flyoutMenuColor" :setting="'flyoutMenuColor'" :colors="['white', 'gray', 'dark', 'blue']" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="settings.layoutMenu === 'classic' || settings.layoutMenu === 'flyout'">
                <div class="pt-2 mb-2">
                  <div class="row">
                    <div class="col-auto mr-auto">
                      <h6>
                        <strong>Menu Collapsed</strong>
                      </h6>
                    </div>
                    <div class="col-auto">
                      <div class="vb__sidebar__fixSwitch">
                        <a-switch :checked="settings.isMenuCollapsed" @click="changeSettingSwitch($event, 'isMenuCollapsed')" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-2 mb-2">
                  <div class="row">
                    <div class="col-auto mr-auto">
                      <h6>
                        <strong>Menu Unfixed</strong>
                      </h6>
                    </div>
                    <div class="col-auto">
                      <div class="vb__sidebar__fixSwitch">
                        <a-switch :checked="settings.isMenuUnfixed" @click="changeSettingSwitch($event, 'isMenuUnfixed')" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-2 mb-2">
                  <div class="row">
                    <div class="col-auto mr-auto">
                      <h6>
                        <strong>Menu Shadow</strong>
                      </h6>
                    </div>
                    <div class="col-auto">
                      <div class="vb__sidebar__fixSwitch">
                        <a-switch :checked="settings.isMenuShadow" @click="changeSettingSwitch($event, 'isMenuShadow')" />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="settings.menuLayoutType === 'left'" class="pt-2 mb-2">
                  <h6>
                    <strong>Menu Width</strong>
                  </h6>
                  <div class="clearfix pt-1">
                    <a-slider v-model:value="settings.leftMenuWidth" :min="256" :max="330" />
                  </div>
                </div>
              </div>
            </a-collapse-panel>
            <a-collapse-panel key="4" header="Topbar Settings">
              <div class="pt-2 mb-2">
                <h6>
                  <strong>Topbar Variant</strong>
                </h6>
                <a-radio-group :default-value="settings.layoutTopbar" @change="changeSettingEvent($event, 'layoutTopbar')">
                  <div class="row">
                    <div class="col-6">
                      <div class="mb-2">
                        <a-radio :value="'v1'">Variant 1</a-radio>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2">
                        <a-radio :value="'none'">None</a-radio>
                      </div>
                    </div>
                  </div>
                </a-radio-group>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Topbar Separated</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <a-switch :checked="settings.isTopbarSeparated" @click="changeSettingSwitch($event, 'isTopbarSeparated')" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Topbar Fixed</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <a-switch :checked="settings.isTopbarFixed" @click="changeSettingSwitch($event, 'isTopbarFixed')" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 mb-2">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <h6>
                      <strong>Topbar Gray Bg</strong>
                    </h6>
                  </div>
                  <div class="col-auto">
                    <div class="vb__sidebar__fixSwitch">
                      <a-switch :checked="settings.isGrayTopbar" @click="changeSettingSwitch($event, 'isGrayTopbar')" />
                    </div>
                  </div>
                </div>
              </div>
            </a-collapse-panel>
            <a-collapse-panel key="5" header="Breadcrumbs Settings">
              <div class="pt-2 mb-2">
                <h6>
                  <strong>Breadcrumbs Variant</strong>
                </h6>
                <a-radio-group :default-value="settings.layoutBreadcrumbs" @change="changeSettingEvent($event, 'layoutBreadcrumbs')">
                  <div class="row">
                    <div class="col-6">
                      <div class="mb-2">
                        <a-radio :value="'v1'">Variant 1</a-radio>
                      </div>
                      <div class="mb-2">
                        <a-radio :value="'v2'">Variant 2</a-radio>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2">
                        <a-radio :value="'noBreadcrumbs'">None</a-radio>
                      </div>
                    </div>
                  </div>
                </a-radio-group>
              </div>
            </a-collapse-panel>
            <a-collapse-panel key="6" header="Footer Settings">
              <div class="pt-2 mb-1">
                <h6>
                  <strong>Footer Variant</strong>
                </h6>
                <a-radio-group :default-value="settings.layoutFooter" @change="changeSettingEvent($event, 'layoutFooter')">
                  <div class="row">
                    <div class="col-6">
                      <div class="mb-2">
                        <a-radio :value="'v1'">Variant 1</a-radio>
                      </div>
                      <div class="mb-2">
                        <a-radio :value="'v2'">Variant 2</a-radio>
                      </div>
                      <div class="mb-2">
                        <a-radio :value="'v3'">Variant 3</a-radio>
                      </div>
                      <div class="mb-2">
                        <a-radio :value="'v4'">Variant 4</a-radio>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2">
                        <a-radio :value="'noFooter'">None</a-radio>
                      </div>
                    </div>
                  </div>
                </a-radio-group>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </perfect-scrollbar>
    </div>
    <div class="vb__utils__sidebar__buttons">
      <a-tooltip placement="left">
        <template #title>
          <span>设置</span>
        </template>
        <a href="javascript: void(0);" class="vb__utils__sidebar__button" @click="toggleSettings()">
          <i class="fe fe-settings"></i>
        </a>
      </a-tooltip>
      <a-tooltip placement="left">
        <template #title>
          <span>预定义布局</span>
        </template>
        <a href="javascript: void(0);" class="vb__utils__sidebar__button" @click="togglePreselectedThemes()">
          <i class="fe fe-image"></i>
        </a>
      </a-tooltip>
      <a-tooltip placement="left">
        <template #title>
          <span>切换黑夜模式</span>
        </template>
        <a
          href="javascript: void(0);"
          class="vb__utils__sidebar__button"
          @click="changeSettingValue(settings.theme === 'default' ? 'dark' : 'default', 'theme')"
        >
          <i v-if="settings.theme === 'default'" class="fe fe-moon"></i>
          <i v-if="settings.theme !== 'default'" class="fe fe-sun"></i>
        </a>
      </a-tooltip>
      <a-tooltip placement="left">
        <template #title>
          <span>设置主题色</span>
        </template>
        <a
          href="javascript: void(0);"
          :class="{
            vb__utils__sidebar__button: true,
            vb__utils__sidebar__button__color: true,
            vb__utils__sidebar__button__color__reset: settings.primaryColor === defaultColor
          }"
        >
          <button type="button" tabindex="0" @click="resetColor()">
            <i class="fe fe-x-circle"></i>
          </button>
          <input id="colorPicker" v-model="settings.primaryColor" type="color" @change="(e) => selectColor(e.target.value)" />
          <i class="fe fe-package"></i>
        </a>
      </a-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import throttle from 'lodash/throttle';
import VbColorPicker from './partials/colorPicker.vue';
import { useSettingStore } from '@/store/modules/setting';

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    VbColorPicker
  },
  setup() {
    const defaultColor = '#4b7cf3';
    const activeKey = ref(['1']);
    const settings = useSettingStore();

    const changeSettingValue = (value, setting) => {
      settings.changeSetting(setting, value);
    };
    const changeSettingEvent = (e, setting) => {
      const { value } = e.target;
      settings.changeSetting(setting, value);
    };
    const changeSettingSwitch = (e, setting) => {
      const value = !settings[setting];
      settings.changeSetting(setting, value);
    };
    const changelocale = (value) => {
      settings.changelocale(value);
    };
    const toggleSettings = () => {
      settings.changeSetting('isSidebarOpen', !settings.isSidebarOpen);
    };
    const togglePreselectedThemes = () => {
      settings.changeSetting('isPreselectedOpen', !settings.isPreselectedOpen);
    };
    const selectColor = throttle((color: string) => {
      settings.changeSetting('primaryColor', color);
    }, 200);
    const resetColor = () => {
      settings.changeSetting('primaryColor', defaultColor);
    };
    return {
      defaultColor,
      activeKey,
      settings,

      changeSettingValue,
      changeSettingEvent,
      changeSettingSwitch,
      changelocale,
      toggleSettings,
      togglePreselectedThemes,
      selectColor,
      resetColor
    };
  }
});
</script>

<style lang="scss" module>
@import './style.module.scss';
</style>
