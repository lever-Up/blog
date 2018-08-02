import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import example from './modules/example';
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  modules: {
    example,
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
