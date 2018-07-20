export default {
  side: {
    type: String,
    default: 'left'
  },
  data: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      desc: '',
      createTime: new Date()
    })
  },
  onclick: {
    type: Function,
    default: () => {
    }
  }
}
