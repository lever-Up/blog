<template>
  <div class="fill-image" :style="`width:${ width }px;height: ${ height }px`">
    <a :href="data.img" target="_blank" :title="data.title">
      <img alt="TEST" :src="data.img"/>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'fill-image',
    props: {
      data: {
        type: Object,
        required: true,
        default: () => ({
          img: '',
          title: '',
        })
      },
      width: {
        type: [Number, String],
        default: 200,
      },
      height: {
        type: [Number, String],
        default: 200,
      }
    },
    mounted() {
      this.$nextTick(function () {
      })
    }
  }
</script>
