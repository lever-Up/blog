export default {
  // 数据总数
  total: {
    type: Number,
    required: true,
    default: 10,
  },
  // 每页条数
  pageSize: {
    type: Number,
    required: true,
    default: 10,
  },
  // 当前页数
  current: {
    type: Number,
    default: 1,
  },
  // 默认的当前页数
  defaultCurrent: {
    type: Number,
    default: 1,
  },
  // 页码改变的回调，参数是改变后的页码及每页条数
  onChange: {
    type: Function,
    default: (current) => {
      console.log(`page:${current}`)
    },
  },
}
