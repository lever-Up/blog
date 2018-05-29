<template>
  <div class="myTransfer">
    <div class="el-transfer">
      <div class="el-transfer-panel">
        <div class="el-transfer-panel__header">
          <el-input
            :on-icon-click="handleIconClick"
            v-model="keywords"
            :icon="keywords?'circle-cross':'search'"
            size="mini"
            :placeholder="header.searchPlaceholder"
            v-if="header.search"/>
          <span v-else>{{header.leftLabel}}</span>
        </div>
        <div class="el-transfer-panel__body">
          <div class="el-transfer-panel__list">
            <div class="el-transfer-panel__item"
                 v-for="(item,index) in list"
                 :key="`list-${item.id || index}`"
                 title="点击选择"
                 @click="onSelectItem(item)"
            >
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
        <div class="el-transfer-panel__footer">
          <el-button @click="onSelectAll" type="text">全选</el-button>
        </div>
      </div>
      <div class="el-transfer-panel">
        <div class="el-transfer-panel__header" v-if="header.rightLabel">
          <span>{{header.rightLabel + selectItem.length}}</span>
        </div>
        <div class="el-transfer-panel__body">
          <div class="el-transfer-panel__list">
            <div class="el-transfer-panel__item"
                 v-for="(item,index) in selectItem"
                 :key="`selected-${item.id || index}`"
                 title="点击取消选择"
                 @click="onCancelItem(item)"
            >
              <span>{{item.name}}</span>
              <i class="hoverCancel el-icon-circle-cross"></i>
            </div>
          </div>
        </div>
        <div class="el-transfer-panel__footer">
          <el-button @click="onCancelSelectAll" type="text">全不选</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Transfer',
    data() {
      return {
        keywords: '',
        list: this.listSort(this.data),
        listTemp: this.data,
        selectItem: []
      }
    },
    computed: {},
    watch: {
      keywords(val) {
        this.list = this.listSort(this.listTemp.filter(d => d.name.indexOf(val) !== -1));
      },
      selectItem(arr) {
        arr.map(item => {
          this.list = this.list.filter(d => d.id !== item.id && d.name !== item.name);
          this.listTemp = this.listTemp.filter(d => d.id !== item.id && d.name !== item.name);
        });
        this.list = this.listSort(this.list);
        this.listTemp = this.listSort(this.listTemp);
      }
    },
    props: {
      data: {
        type: Array,
        required: true,
        default: function () {
          return []
        }
      },
      header: {
        type: Object,
        default: () => ({
          search: true,
          searchPlaceholder: '请输入搜索内容',
          leftLabel: '可选择：',
          rightLabel: '已选择：'
        })
      }
    },
    methods: {
      listSort(list) {
        return list.sort((a, b) => a.id - b.id);
      },
      onSelectItem(item) {
        this.selectItem.unshift(item);
      },
      onCancelItem(item) {
        this.selectItem = this.selectItem.filter(d => d.id !== item.id);
        this.list.push(item);
        this.listTemp.push(item);
      },
      onSelectAll() {
        this.selectItem = this.listSort(this.selectItem.concat([], this.list));
      },
      onCancelSelectAll() {
        this.list = this.listSort(this.list.concat([], this.selectItem));
        this.listTemp = this.listSort(this.listTemp.concat([], this.selectItem));
        this.selectItem = [];
      },
      handleIconClick() {
        this.keywords = '';
      },
      getSelectItems() {
        return this.selectItem;
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-transfer-panel__header, .el-transfer-panel__footer {
    padding: 0 10px;
  }

  .el-transfer-panel__body {
    min-height: 287px;
  }

  .el-transfer-panel__item {
    cursor: pointer;
    position: relative;
  }

  .el-transfer-panel__item:hover {
    background: #eee;
    .hoverCancel {
      opacity: 1;
    }
  }

  .hoverCancel {
    position: absolute;
    right: 10px;
    top: 8px;
    opacity: 0;
  }

</style>
