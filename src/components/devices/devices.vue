<template>
  <div class="wrapper">
    <span class="title">我的设备</span>
    <el-tree
      ref="tree"
      :data="data"
      node-key="id"
      empty-text="暂无数据"
      default-expand-all
      show-checkbox
      :render-content="renderContent"
      @check-change="handleCheckChange"
      @node-click="handleClick"
    >
    </el-tree>
    
  </div>
</template>

<script>
import { useHooks } from '../../hooks/index';
import { getAllDevice } from '../../api/api';
export default {
  
  data() {
    return {
      data: [
      {
        id: 1,
        label: "设备列表",
        children: [
          {
            id: 1,
            label: "marker1号 公司",
            position: [103.977088,30.633617]
          },
          {
            id: 2,
            label: "marker2号 动物园",
            position: [104.105944,30.710045]
          },
          {
            id: 3,
            label: "marker3号 德阳",
            position: [104.396066,31.131464]
          },
          {
            id: 4,
            label: "marker4号 西安",
            position: [108.984753,34.253464]
            
          },
          {
            id: 5,
            label: "marker5号 河南",
            position: [113.818912,34.796594]
          },
          {
            id: 6,
            label: "marker6号 苏州",
            position: [120.573269,31.363965]
          },

        ],
      },
    ],
      posi: [],
      nodes: []
    };
  },

  methods: {
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
        </span>
      );
    },
    handleCheckChange() {
      const { get_ipArray } = useHooks();
      this.nodes = this.$refs.tree.getCheckedNodes();
      get_ipArray(this.nodes);
      // this.$store.dispatch('GET_IPARRAY', this.nodes);
      // this.nodes = this.$refs.tree.getCheckedNodes().concat(this.$refs.tree.getHalfCheckedNodes());

    },

    handleClick(){
      const { set_curPosition } = useHooks();
      let node = this.$refs.tree.getCurrentNode();
      // this.posi = node.position;
      set_curPosition(node.position);
      // this.$store.dispatch('SET_CURPOSITION', this.posi);

    },
  },
  created(){
    // getAllDevice();
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  // height: 100%;
  .title {
    display: block;
    text-align: center;
    margin: 5px;
  }
}
/deep/ .el-tree {
  background: transparent;
}

/deep/ .el-checkbox__inner {
  background: transparent;
}
/deep/ .el-tree-node__content:hover {
  background-color: #080c3b;
}
/deep/ .el-tree-node:focus > .el-tree-node__content {
  background-color: #080c3b;
  color: #fff;
}
</style>