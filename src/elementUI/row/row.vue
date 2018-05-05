<script>
  export default {
    name: 'ElRow',
    props: {
      // 自定义包裹元素标签
      tag: {
        type: String,
        default: 'div'
      },
      // 栅格间隔
      gutter: String,
      // 自定义样式
      rowStyle: String,
      // 是否flex模式
      type: String
    },
    computed: {
      marginHorizontal() {
        return `margin:0 ${this.gutter};${this.rowStyle}`
      }
    },
    render(createElement) {
      return createElement(this.tag, {
        class: ['el-row', this.type === 'flex' && 'el-flex'],
        style: this.marginHorizontal
      }, this.$slots.default)
    }
  }
</script>

<style scoped>
  @import "./row.scss";
  @import "../base.scss";
</style>
