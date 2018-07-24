export default {
  title: {
    type: String,
    default: '推荐'
  },
  list: {
    type: Array,
    required: true,
    default: () => ([]),
  }
}
