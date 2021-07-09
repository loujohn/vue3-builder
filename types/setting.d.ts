export type language = 'zh-CN' | 'en-US';
export interface ISetting {
  locale: language;
  logo: string;
  authProvider: 'jwt';
  version: 'fluent';
  theme: 'default' | 'dark';
  isSidebarOpen: Boolean;
  isSupportChatOpen: Boolean;
  isMobileView: Boolean;
  isTabletView: Boolean;
  isMobileMenuOpen: Boolean;
  isMenuCollapsed: Boolean;
  isPreselectedOpen: Boolean;
  preselectedVariant: 'default';
  menuLayoutType: 'left';
  routerAnimation: 'slide-fadein-up';
  menuColor: 'gray';
  authPagesColor: 'gray';
  isAuthTopbar: true;
  primaryColor: string;
  leftMenuWidth: number;
  isMenuUnfixed: Boolean;
  isMenuShadow: Boolean;
  isTopbarFixed: Boolean;
  isTopbarSeparated: Boolean;
  isGrayTopbar: Boolean;
  isContentMaxWidth: Boolean;
  isAppMaxWidth: Boolean;
  isGrayBackground: Boolean;
  isCardShadow: true;
  isSquaredBorders: Boolean;
  isBorderless: Boolean;
  layoutMenu: 'classic';
  layoutTopbar: 'v1';
  layoutBreadcrumbs: 'v1';
  layoutFooter: 'v1';
  flyoutMenuType: 'flyout';
  flyoutMenuColor: 'blue';
  isSettingsOpen: Boolean;
}
export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
}
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
}
