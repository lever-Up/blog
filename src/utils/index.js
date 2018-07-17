/* 全局方法 */
import {formatTime} from './utils';

const commonFn = [
  formatTime
];

// Vue install
const fnsInstall = (Vue, opts = {}) => {
  commonFn.map(fn => {
    Vue.prototype[fn.name] = fn;
  })
};

export default fnsInstall;
