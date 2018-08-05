import RainyDay from "../../utils/lib/rainyday.min.js";
const loginBgs = [
  '',
  'http://pamnpeizp.bkt.clouddn.com/login_bg.jpg',
  'http://pamnpeizp.bkt.clouddn.com/login_bg3.png',
];
const _SIGN = [{
  label: 'SingIn', value: 'SingIn',
}, {
  label: 'SingUp', value: 'SingUp',
}];

export default {
  name: "singIn",
  data() {
    return {
      sing: _SIGN,
      currentSing: 'SingIn',
      code: 'SFDB',
    };
  },
  mounted() {
    document.querySelector('body').setAttribute('style', 'overflow: hidden');
    const image = document.getElementById("loading-background");
    image.onload = function() {
      const engine = new RainyDay({
        image: this,
        enableSizeChange: false
      });
      engine.rain([[1, 2, 8000]]);
      engine.rain([[3, 3, 0.88], [5, 5, 0.9], [6, 2, 1]], 100);

      this.loading = true;
    };
    image.crossOrigin = 'anonymous';
    image.src = loginBgs[Math.floor(Math.random() * 2 + 1)];
  },
  methods: {
    changeTab(tab) {
      this.currentSing = tab;
    }
  }
};
