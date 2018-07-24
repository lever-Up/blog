/* 全局方法 */
import {formatTime, randomColor} from './utils';

const commonFn = [
  formatTime,
  randomColor
];

// Vue install
const fnsInstall = (Vue, opts = {}) => {
  commonFn.map(fn => {
    Vue.prototype[fn.name] = fn;
  })
};

export default fnsInstall;
