import defaultProps from './defaultProps.js'

export default {
  name: 'pagination',
  props: defaultProps,
  data() {
    return {
      currentPage: this.current,
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  watch: {
    currentPage(current) {
      this.onChange(current);
    }
  },
  methods: {
    changePages(index) {
      this.currentPage = index;
    },
    changePagesPN(pn) {
      const {currentPage, pages} = this;
      if (currentPage === 0 || currentPage === pages) {
        return;
      }
      this.currentPage += pn;
    }
  }
}
