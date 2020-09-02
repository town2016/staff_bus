<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="tab in tabs" :label="tab.label" :name="tab.name" :key="tab.name">
        <component :is="tab.name" v-bind="attrs" v-if="tab.name === activeName"></component>
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>
<script>
import List from 'components/list/list.vue'
import IndexMixin from './index.mixin.js'
import passed from './components/passed.vue'
import approval from './components/approval.vue'
import create from './components/create.vue'
export default {
  name: 'project-approval',
  mixins: [IndexMixin],
  components: {
    List,
    passed,
    approval,
    create
  },
  watch: {
    activeName: {
      handler (val) {
        val === 'passed' && (
          this.attrs = {
            tableModel: this.formModelMap[val],
            tableData: this.formDataMap[val]
          }
        )
        val === 'approval' && (
          this.attrs = {
            tableModel: this.formModelMap[val],
            tableData: this.formDataMap[val]
          }
        )
      },
      deep: true,
      immediate: true
    }
  },
  data () {
    return {
      attrs: {},
      activeName: 'passed',
      tabs: [
        {
          label: '已通过',
          name: 'passed'
        }, {
          label: '审核中',
          name: 'approval'
        }, {
          label: '申请创建',
          name: 'create'
        }
      ]
    }
  }
}
</script>
<style lang="less">
.file-wrapper{
  li{
    width: 90px;
    height: 90px;
    border: 1px dashed #ddd;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    margin-right: 10px;
    i{
      font-size: 40px;
      color: #ddd;
    }
  }
}
</style>
