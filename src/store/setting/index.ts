import { ISetting } from '/#/setting';

const state: ISetting = {
  locale: 'zh-CN'
};
const gettters = {
  locale: (state: ISetting): string => {
    return state.locale;
  }
};
export default {
  state,
  gettters
};
