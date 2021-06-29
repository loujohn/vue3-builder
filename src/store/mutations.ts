import constants from './constants';

const mutations = {
  [constants.set_area](state: any, data: any) {
    state.area = data;
  }
};

export default mutations;
