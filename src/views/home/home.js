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
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532370884327&di=b05c3838b2a47df500620fb167040f5b&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201505%2F08%2F20150508155454_vJMeU.jpeg'
  },
  {
    id: 2,
    title: '火影忍者',
    desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈。哈哈哈哈哈哈哈哈哈，哈哈哈哈哈哈哈哈哈哈哈哈哈',
    createTime: new Date(),
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532370884327&di=b05c3838b2a47df500620fb167040f5b&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201505%2F08%2F20150508155454_vJMeU.jpeg'
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
