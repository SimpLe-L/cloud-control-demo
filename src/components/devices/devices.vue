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
    >
    </el-tree>
  </div>
</template>

<script>
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
            label: "marker 111号",
            position: [103.96, 30.63]
          },
          {
            id: 2,
            label: "marker 222号",
          },
          {
            id: 3,
            label: "marker 333号",
          },
          {
            id: 4,
            label: "marker 444号",
          },
          {
            id: 5,
            label: "marker 555号",
          },
          {
            id: 6,
            label: "marker 666号",
          },

        ],
      },
    ],
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
      // this.nodes = this.$refs.tree.getCheckedNodes().concat(this.$refs.tree.getHalfCheckedNodes());
      this.nodes = this.$refs.tree.getCheckedNodes()
      console.log(this.nodes);
    },
   
  },

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