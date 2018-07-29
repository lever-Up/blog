export default {
  data: {
    type: Object,
    required: true,
    default: () => ([]),
  },
  onclick: {
    type: Function,
    default: () => {}
  }
}
