import {mavonEditor, toolbars} from '../../../components'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'articleEdit',
  components: {
    mavonEditor
  },
  data() {
    return {
      msg: '文章编辑',
      content: '', // 文章内容
      toolbars, // 编辑器工具栏
      containStyle: {
        minHeight: `${document.body.clientHeight - 80}px`
      }
    }
  },
  created() {
    console.log()
  }
}
