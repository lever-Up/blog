import tools from './tools.js';

export default {
  name: 'header-navigate',
  data() {
    return {
      tools,
      keyword: '',
    }
  },
  watch: {
    keyword(val) {
      console.log(val)
    }
  },
  methods: {
    inputChange(e) {
      const { value } = e.target;
      console.log(`查询:${value}`)
    }
  }
}
