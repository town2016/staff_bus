<template>
  <div>
    <el-tabs v-model="projectStatus">
      <el-tab-pane v-for="tab in tabs" :label="tab.label" :name="tab.name" :key="tab.name">
        <iTable :tableModel="tables.tableModel" :tableData="tables.tableData" border></iTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import List from 'components/list/list.vue'
import IndexMixin from './index.mixin.js'
export default {
  name: 'project-approval',
  mixins: [IndexMixin],
  components: {
    List
  },
  data () {
    return {
      projectStatus: 'community',
      tabs: [
        {
          label: '工友圈',
          name: 'community'
        }, {
          label: '采购需求',
          name: 'purchase'
        }, {
          label: '招标招商',
          name: 'Bidding'
        }, {
          label: '招聘求职',
          name: 'recruitment'
        }, {
          label: '投诉信息',
          name: 'complaint'
        }
      ]
    }
  }
}
</script>

