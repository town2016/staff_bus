<template>
  <div>
    <el-tabs v-model="projectStatus">
      <el-tab-pane label="通过项目" name="passed">
        <List :forms="forms" :tables="tables"></List>
      </el-tab-pane>
      <el-tab-pane label="驳回项目" name="reject">
        <List :forms="forms" :tables="tables"></List>
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
      projectStatus: 'passed'
    }
  }
}
</script>
