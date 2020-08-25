<template>
  <div>
    <List :forms="forms" :tables="tables"></List>
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
  }
}
</script>
