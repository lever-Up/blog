import { mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: mapState({
    count: state => state.example.count
  }),
  methods: mapActions('example', [
    'asyncInc', 'inc'
  ]),
}
