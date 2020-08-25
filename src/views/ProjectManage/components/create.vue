<template>
  <div class="create" style="width: 500px">
    <iForm
      :formModel="formModel"
      :formData="formData">
    </iForm>
  </div>
</template>
<script>
export default {
  name: 'create',
  data () {
    return {}
  },
  props: {
    formModel: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

