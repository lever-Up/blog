import dayJs from 'dayjs';
import {randomColor} from '../../utils/utils'

// 测试数据
import {carouseData, paginationData, blackboardData, itemCard, listCard, gridCard, smallListCard, tags} from './data';

export default {
  name: 'Home',
  data() {
    return {
      bannerDatas: carouseData,
      paginationData,
      blackboardData,
      itemCard,
      listCard,
      gridCard,
      smallListCard,
      tags
    }
  },
  methods: {
    randomColor,

    formatTime(date) {
      return dayJs().format('MMM DD, YYYY')
    }
  }
}
