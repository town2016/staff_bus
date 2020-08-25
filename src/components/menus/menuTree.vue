<template>
	<div class="menuTree">
		<template v-for="item in menuData">
      <el-submenu :index="item.id" v-if="item.childs" :key="item.id">
        <template slot="title">
          <span slot="title">{{item.label}}</span>
        </template>
        <MenuTree :menuData="item.childs"></MenuTree>
      </el-submenu>
      <el-menu-item :index="item.id" v-else :key="item.id">
      	<router-link tag='span' :to='item.path'>
      		{{item.label}}
      	</router-link>
      </el-menu-item>
    </template>
	</div>
</template>

<script>
	export default {
		name: 'MenuTree',
		props: {
			menuData: {
				type: Array,
				default () {
					return []
				}
			}
		},
		created () {}
	}
</script>

<style scoped lang="scss">
.menuTree{
	/deep/ .el-menu-item{
		height: 40px;
		line-height: 40px;
	}
}
span{
	display: block;
}
</style>