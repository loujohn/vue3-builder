import { defineStore } from 'pinia';
import { store } from '@/store';
import { ISetting } from '/#/setting';

export const useSettingStore = defineStore({
  id: 'setting',
  state: (): ISetting => ({
    locale: 'zh-CN',
    logo: 'Vue3 Builder',
    authProvider: 'jwt',
    version: 'fluent',
    theme: 'default',
    isSidebarOpen: false,
    isSupportChatOpen: false,
    isMobileView: false,
    isMobileMenuOpen: false,
    isMenuCollapsed: false,
    isPreselectedOpen: false,
    preselectedVariant: 'default',
    menuLayoutType: 'left',
    routerAnimation: 'slide-fadein-up',
    menuColor: 'gray',
    authPagesColor: 'gray',
    isAuthTopbar: true,
    primaryColor: '#4b7cf3',
    leftMenuWidth: 300,
    isMenuUnfixed: false,
    isMenuShadow: false,
    isTopbarFixed: false,
    isTopbarSeparated: false,
    isGrayTopbar: false,
    isContentMaxWidth: false,
    isAppMaxWidth: false,
    isGrayBackground: false,
    isCardShadow: true,
    isSquaredBorders: false,
    isBorderless: false,
    layoutMenu: 'classic',
    layoutTopbar: 'v1',
    layoutBreadcrumbs: 'v1',
    layoutFooter: 'v1',
    flyoutMenuType: 'flyout',
    flyoutMenuColor: 'blue',
    isSettingsOpen: false,
    isTabletView: false
  }),
  actions: {
    changeMenuCollapsed(): void {
      this.isMenuCollapsed = !this.isMenuCollapsed;
      this.changeSetting('preselectedVariant', 'default');
    },
    changeSetting<T extends keyof ISetting, U extends ISetting[T]>(key: T, val: U): void {
      this.$state[key] = val;
    }
  }
});

export function useSettingStoreWithOut() {
  return useSettingStore(store);
}
