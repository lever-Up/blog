<template>
  <div class="imgLiquidFill imgLiquid" style="width:100%; height:200px;">
    <a :href="img"  target="_blank" title="test">
      <img alt="TEST" :src="img"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'svgIcon',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        img: '',
      })
    },
  }
}
</script>
<style scoped>
  .default{
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
</style>
