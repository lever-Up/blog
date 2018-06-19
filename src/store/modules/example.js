import {asyncInc} from '../../apis/exampleServices'

export default {
  namespaced: true,

  state: {
    count: 10,
  },

  getters: {
    compareMax: state => max => {
      return state.count > max
    }
  },

  /**
   * 异步改变state
   * @desc: asyncInc 第一个参数: const { commit, dispatch, state, rootState, rootGetters } = store
   *  1、调用其他模块 actions: commit('products/decrementProductInventory', {id: product.id}, {root: true})
   *  2、调用其他模块 state: rootState.moduleName
   *  3、调用其他模块 mutations: commit('vip/receive', data, {root: true})
   *  4、调用其他模块 getter: rootGetters['vip/get']
   * */
  actions: {
    async asyncInc({commit, state}, params) {
      const count = await asyncInc(state.count);
      commit('inc', {count})
    }
  },

  /* 同步改变state */
  mutations: {
    inc(state, {count}) {
      state.count += count;
    }
  }

};
