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
import projectInfo from './components/projectInfo'
import projectAdmin from './components/projectAdmin'
import group from './components/group'
import enclosure from './components/enclosure'
export default {
  name: 'projectDetail',
  mixins: [IndexMixin],
  components: {
    projectInfo,
    projectAdmin,
    group,
    enclosure
  },
  data () {
    return {
      activeName: 'projectInfo',
      attrs: {},
      tabs: [
        {
          label: '项目信息',
          name: 'projectInfo'
        }, {
          label: '项目管理员',
          name: 'projectAdmin'
        }, {
          label: '班组',
          name: 'group'
        }, {
          label: '项目围栏',
          name: 'enclosure'
        } 
      ]
    }
  },
  watch: {
    activeName: {
      handler (val) {
        val === 'projectInfo' && (
          this.attrs = {
            formModel: this.formModelMap[val],
            formData: this.formDataMap[val]
          }
        )
        val === 'projectAdmin' && (
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
</style>
