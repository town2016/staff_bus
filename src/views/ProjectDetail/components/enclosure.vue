<template>
  <div class="enclosure" style="height: 100%;">
    <div class="btn-group">
      <el-select
        v-model="keyWord"
        filterable
        remote
        size="medium"
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        @change="changeHandler">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button @click="startEdit" size="medium">开始编辑</el-button>
      <el-button @click="stopEdit" size="medium">结束编辑</el-button>
      <el-button @click="deleteEnclosure" size="medium">清除围栏</el-button>
    </div>
    <div id="enclosure" style="width: 100%; height: calc(100% - 80px)"></div>
  </div>
</template>
<script>
import AMap from 'AMap'
export default {
  name: 'enclosure',
  mounted () {
    this.$nextTick(() => {
      this._getLocation()
    })
  },
  data () {
    return {
      path: [],
      polygon: null,
      polyEditor: null,
      keyWord: '',
      options: [],
      poiList: [],
      curLocation: null
    }
  },
  methods: {
    // 获取地图定位
     _getLocation () {
      var amap = new AMap.Map('enclosure', {
        zoom: 14,
        resizeEnable: true
      })
      this.AMap = amap
      amap.plugin('AMap.Geolocation', () => {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (data) => {
          let position = data.position
          amap.setCenter([position.R, position.Q])
          var marker = this.creatMark(position.R, position.Q)
          amap.add(marker)
        })
        AMap.event.addListener(geolocation, 'error', (data) => {
          this.$message.error('定位失败，请检查网络，并稍后重试')
        })
      })
    },
    // 创建点标记
    creatMark (R, Q) {
      var marker = new AMap.Marker({
        position: new AMap.LngLat(R, Q),
        // 设置是否可以拖拽
        draggable: true,
        cursor: 'move',
        // 设置拖拽效果
        raiseOnDrag: true
      })
      return marker
    },
    // 创建围栏
    createEnclosure () {
       this.polygon = new AMap.Polygon({
          path: this.path,
          strokeColor: "#FF33FF", 
          strokeWeight: 2,
          strokeOpacity: 0.2,
          fillOpacity: 0.4,
          fillColor: '#1791fc',
          zIndex: 50,
      })
      this.AMap.add(this.polygon)
      this.AMap.setFitView([this.polygon]) // 是否缩放到合适的比例
      this.polyEditor = new AMap.PolyEditor(this.AMap, this.polygon)
      this.polyEditor.open()
      // 结束编辑的回调
      this.polyEditor.on('end', (e) => {
        console.log(e)
      })
    },
    // 开始编辑
    startEdit () {
      this.AMap.on('click', this.clickEventHandler)
    },
    // 地图点击事件
    clickEventHandler (e) {
      this.path.push(e.lnglat)
      this.AMap.clearMap()
      this.createEnclosure()
    },
    // 结束编辑
    stopEdit () {
      this.polyEditor.close()
      this.AMap.off('click', this.clickEventHandler)
    },
    // 清除围栏
    deleteEnclosure () {
      this.AMap.clearMap()
    },
    // IPO搜索
    remoteMethod (kw) {
      if (!kw) return
      AMap.service(['AMap.PlaceSearch'], () => {
        var placeSearch = new AMap.PlaceSearch({
          pageSize: 10, // 单页显示结果条数
          pageIndex: 1, // 页码
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        })
        placeSearch.search(kw, (status, result) => {
          if (status === 'complete' && result.info === 'OK') {
            this.poiList =  result.poiList.pois || []
            this.poiList.forEach(e => {
              var formattedAddress =  `${e.pname || ''}${e.cityname || ''}${e.adname || ''}${e.name}(${e.address || ''})`
              var item = {
                label: formattedAddress,
                value: e.id
              }
              e.formattedAddress = formattedAddress
              this.options.push(item)
            })
          } else {
            this.$message.error('暂无搜索到结果')
          }
        })
      })
    },
    // 选择地点
    changeHandler (val) {
      this.curLocation = this.poiList.filter(e => {
        return e.id === val
      })[0]
      var {location: {Q, R}} = this.curLocation
      this.AMap.setCenter([R, Q])
      this.AMap.add(this.creatMark(R, Q))
    },
  }
}
</script>
<style lang="less" scoped>
.btn-group{
  padding-bottom: 20px;
  .el-select{
    margin-right: 10px;
  }
}
</style>
