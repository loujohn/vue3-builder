export const getMenuData = [
  // VB:REPLACE-START:MENU-CONFIG
  {
    category: true,
    title: 'Dashboards',
    key: 'Dashboards'
  },
  {
    title: 'Dashboards',
    key: '__dashboard',
    url: '/dashboard',
    icon: 'fe fe-home',
    children: [
      {
        title: 'Dashboard Alpha',
        key: 'iasepr',
        url: '/dashboard/alpha'
      },
      {
        title: 'Dashboard Beta',
        key: 'oi2iv',
        url: '/dashboard/beta'
      },
      {
        title: 'Dashboard Gamma',
        key: 'amhwha',
        url: '/dashboard/gamma'
      },
      {
        title: 'Crypto Terminal',
        key: '0emfve',
        url: '/dashboard/crypto'
      }
    ]
  }
];
