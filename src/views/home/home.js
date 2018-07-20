import dayJs from 'dayjs';
import {randomColor} from '../../utils/utils'

// 测试数据
import {carouseData, paginationData} from './data';

const bannerArticles = [
  {
    id: 1,
    title: '火影忍者',
    desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈。哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈哈',
    createTime: new Date(),
    img: 'http://img4q.duitang.com/uploads/item/201505/08/20150508155454_vJMeU.jpeg'
  },
  {
    id: 2,
    title: '火影忍者',
    desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈。哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈哈',
    createTime: new Date(),
    img: 'http://img4q.duitang.com/uploads/item/201505/08/20150508155454_vJMeU.jpeg'
  },
];
export default {
  name: 'Home',
  data() {
    return {
      bannerDatas: carouseData,
      paginationData,
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
