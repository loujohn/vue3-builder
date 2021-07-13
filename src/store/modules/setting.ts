import { defineStore } from 'pinia';
import { store } from '@/store';
import { ISetting, LocaleType } from '/#/setting';
import * as localStore from 'store';
const STORED_SETTINGS = (storedSettings: ISetting): ISetting => {
  Object.keys(storedSettings).forEach((key) => {
    const item = localStore.get(`app.settings.${key}`);
    storedSettings[key] = typeof item !== 'undefined' ? item : storedSettings[key];
  });
  return storedSettings;
};
export const useSettingStore = defineStore({
  id: 'setting',
  state: (): ISetting =>
    STORED_SETTINGS({
      locale: 'zh_CN',
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
      leftMenuWidth: 312,
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
      localStore.set(`app.settings.isMenuCollapsed`, this.isMenuCollapsed);
    },
    changeSetting<T extends keyof ISetting, U extends ISetting[T]>(key: T, val: U): void {
      localStore.set(`app.settings.${key}`, val);
      this.$state[key] = val;
    },
    changelocale(locale: LocaleType) {
      localStore.set('app.settings.locale', locale);
      location.reload();
    },
    changeSettingBulk(setting: Partial<ISetting>): void {
      Object.keys(setting).forEach((key) => {
        localStore.set(`app.settings.${key}`, setting[key]);
        this.$state[key] = setting[key];
      });
    }
  }
});

export function useSettingStoreWithOut() {
  return useSettingStore(store);
}
