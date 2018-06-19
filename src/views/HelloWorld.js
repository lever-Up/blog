import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  created(){
    console.log(
      ...mapGetters('example',[
        'compareMax'
      ])
    )
  },
  // computed: mapState('example',['count']),
  computed: {
    ...mapState('example',{
      count: state => state.count
    }),
    ...mapGetters('example',[
      'compareMax'
    ])
    
  },
  methods: {
    ...mapActions('example', [
      'asyncInc'
    ]),
    
    ...mapMutations('example',[
      'inc'
    ]),
  },
}
