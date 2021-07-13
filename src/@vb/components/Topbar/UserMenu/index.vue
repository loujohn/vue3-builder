<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.dropdown">
      <a-avatar shape="square" size="large" :class="$style.avatar">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <div>
            <strong>{{ t('layout.topBar.profileMenu.hello') }}, {{ user.name || 'Anonymous' }}</strong>
          </div>
          <div>
            <strong class="mr-1">{{ t('layout.topBar.profileMenu.billingPlan') }}:</strong>
            Professional
          </div>
          <div>
            <strong class="mr-1">{{ t('layout.topBar.profileMenu.role') }}:</strong>
            {{ user.role || '—' }}
          </div>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item>
          <div>
            <strong class="mr-1">{{ t('layout.topBar.profileMenu.email') }}:</strong>
            {{ user.email || '—' }}
          </div>
          <div>
            <strong class="mr-1">{{ t('layout.topBar.profileMenu.phone') }}:</strong>
            —
          </div>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item>
          <a href="javascript: void(0);">
            <i class="mr-2 fe fe-user"></i>
            {{ t('layout.topBar.profileMenu.editProfile') }}
          </a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item>
          <a href="javascript: void(0);" @click="logout">
            <i class="mr-2 fe fe-log-out"></i>
            {{ t('layout.topBar.profileMenu.logout') }}
          </a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { useUserStore } from '@/store/modules/user';
import { UserOutlined } from '@ant-design/icons-vue';
import { useI18n } from '@/hooks/web/useI18n';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  components: {
    UserOutlined
  },
  setup() {
    const userStore = useUserStore();
    const user = computed(() => userStore.$state);
    const { t } = useI18n();

    const logout = () => {};

    return {
      user,
      t,
      logout
    };
  }
});
</script>

<style lang="scss" module>
@import './style.module.scss';
</style>
