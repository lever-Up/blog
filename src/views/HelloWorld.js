import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

const datas = [{
  id: 1,
  img: 'https://vignette.wikia.nocookie.net/villainstournament/images/7/7c/Woody.jpg/revision/latest?cb=20170630110634',
  createTime: new Date('2018-07-17'),
  title: '测试',
  desc: '这是一条测试数据',
}];

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      datas,
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
