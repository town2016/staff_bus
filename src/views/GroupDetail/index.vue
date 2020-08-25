<template>
  <div class="projectDetail">
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="tab in tabs" :label="tab.label" :name="tab.name" :key="tab.name">
        <component :is="tab.name" v-bind="attrs" v-if="activeName === tab.name"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import IndexMixin from './index.mixin.js'
import groupInfo from './components/projectInfo'
import groupAdmin from './components/projectAdmin'
import group from './components/group'
import enclosure from './components/enclosure'
import report from './components/report.vue'
export default {
  name: 'projectDetail',
  mixins: [IndexMixin],
  components: {
    groupInfo,
    groupAdmin,
    group,
    enclosure,
    report
  },
  data () {
    return {
      activeName: 'groupInfo',
      attrs: {},
      tabs: [
        {
          label: '班组',
          name: 'groupInfo'
        }, {
          label: '班组管理员',
          name: 'groupAdmin'
        }, {
          label: '民工',
          name: 'group'
        }, {
          label: '围栏',
          name: 'enclosure'
        } ,{
          label: '报告',
          name: 'report'
        }
      ]
    }
  },
  watch: {
    activeName: {
      handler (val) {
        val === 'groupInfo' && (
          this.attrs = {
            formModel: this.formModelMap[val],
            formData: this.formDataMap[val]
          }
        )
        val === 'groupAdmin' && (
          this.attrs = {
            tableModel: this.formModelMap[val],
            tableData: this.formDataMap[val]
          }
        )
        val === 'group' && (
          this.attrs = {
            tableModel: this.formModelMap[val],
            tableData: this.formDataMap[val]
          }
        )
         val === 'report' && (
          this.attrs = {
            tableModel: this.formModelMap[val],
            tableData: this.formDataMap[val]
          }
        )
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style lang="less">
.img-list{
  li{
    width: 60px;
    height: 60px;
    overflow: hidden;
    float: left;
    margin-right: 10px;
    img{
      height: 100%;
    }
  }
}
td{
  li{
    width: 30px;
    height: 30px;
    overflow: hidden;
    float: left;
    margin-right: 10px;
    img{
      height: 100%;
    }
  }
}
</style>
