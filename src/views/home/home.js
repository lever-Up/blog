import dayJs from 'dayjs';
import {randomColor} from '../../utils/utils'

const bannerImages = [
  {
    id: 1,
    url: 'http://pamnpeizp.bkt.clouddn.com/react.jpg',
  }, {
    id: 2,
    url: 'http://pamnpeizp.bkt.clouddn.com/vue.jpg'
  }, {
    id: 3,
    url: 'http://pamnpeizp.bkt.clouddn.com/vue.jpg'
  }, {
    id: 4,
    url: 'http://pamnpeizp.bkt.clouddn.com/vue.jpg'
  }
];
const bannerArticles = [
  {
    id: 1,
    title: 'JavaScript + HTML + Css',
    desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈。哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈哈',
    createTime: new Date(),
    img: 'http://pamnpeizp.bkt.clouddn.com/react.jpg'
  },
  {
    id: 2,
    title: '精美Css3效果',
    desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈。哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈哈',
    createTime: new Date(),
    img: 'http://pamnpeizp.bkt.clouddn.com/react.jpg'
  },
];
export default {
  name: 'Home',
  data() {
    return {
      bannerImages,
      bannerArticles
    }
  },
  methods: {
    randomColor,

    formatTime(date) {
      return dayJs().format('MMM DD, YYYY')
    }
  }
}
