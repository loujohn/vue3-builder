import constants from './constants';

const actions = {
  [constants.set_area]({ commit }: any, data: any) {
    commit(constants.set_area, data);
  }
};

export default actions;
