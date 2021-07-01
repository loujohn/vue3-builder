import { createStore } from 'vuex';
// import state from './state';
import mutations from './mutations';
import actions from './actions';
import setting from './setting';
import { ISetting } from '/#/setting';

export interface State {
  setting: ISetting;
}

const store = createStore<State>({
  mutations,
  actions,
  modules: {
    setting
  }
});

export default store;
