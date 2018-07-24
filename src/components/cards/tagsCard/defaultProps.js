export default {
  title: {
    type: String,
    default: '标签'
  },
  tags: {
    type: Array,
    required: true,
    default: () => ([]),
  }
}
