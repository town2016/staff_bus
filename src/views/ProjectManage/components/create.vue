<template>
  <div class="create" style="width: 500px">
    <iForm
      ref="iform"
      :formModel="formModel"
      :formData="formData">
    </iForm>
    <el-dialog
      width="1000px"
      :visible="visible"
      @close="$_close"
      title="位置选择">
      <div>
        <el-select
          style="width: 100%"
          v-model="keyWord"
          filterable
          remote
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
        <br><br>
        <div id="mapContainer"></div>
      </div>
      <br>
      <div align="center">
        <el-button size="medium" @click="$_close">取消</el-button>
        <el-button size="medium" type="primary" @click="setLocation">确定</el-button>
      </div>
     </el-dialog>
  </div>
</template>
<script>
const layOut = {
  xlSpan: 24,
  colSpan: 24,
  mdSpan: 24,
  smSpan: 24,
}
import AMap from 'AMap'

export default {
  name: 'create',
  data () {
    return {
      visible: true,
      formData: {},
      formModel: [
          {
            elemType: 'input',
            prop: 'projectName',
            label: '项目名称',
            ...layOut
          }, {
            elemType: 'input',
            prop: 'constructionUnit',
            label: '建设单位',
            ...layOut
          }, {
            elemType: 'input',
            prop: 'address',
            label: '工程地点',
            ...layOut,
            slot: () => {
              return <i class="el-icon-location-outline" style="font-size: 20px;" onClick={this.positionHandler}></i>
            }
          }, {
            elemType: 'render',
            prop: 'imgList',
            label: '项目照片',
            ...layOut,
            render: () => {
              return <div>
                <ul class="file-wrapper">
                  <li onClick={this.selectFile}><el-icon class="el-icon-plus"></el-icon></li>
                </ul>
                <input type="file" id="upload" accept="image/png,image/jpg" style="display:none" onChange={this.fileChangeHandler}/>
              </div>
            }
          }
        ],
        AMap: null,
        curLocation: {},
        options: [],
        keyWord: '',
        poiList: []
    }
  },
  props: {},
  mounted () {
    this.$nextTick(() => {
      this._getLocation()
    })
  },
  methods: {
    // 选择图片
    selectFile () {
      document.querySelector('#upload').click()
    },
    // 图片上传
    fileChangeHandler (e) {
      console.log(e)
    },
    //  打开地图弹框，并初始化地图
    positionHandler () {
      this.visible = true
      this.$nextTick(() => {
        this._getLocation()
      })
    },
    // 获取地图定位
     _getLocation () {
      var amap = new AMap.Map('mapContainer', {
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
          this.curLocation = data
          this.keyWord = this.curLocation.formattedAddress
          amap.setCenter([position.R, position.Q])
          var marker = this.creatMark(position.R, position.Q)
          // this.setCurPos(data)// 将当前定位信息保存到vuex中
          amap.add(marker)
          // 地图覆盖物的拖拽回调
          marker.on('dragend', (data) => {
            amap.setCenter([data.lnglat.R, data.lnglat.Q])
            getAddres([data.lnglat.R, data.lnglat.Q])
          })
          // 拖动地图的时候的回调
          amap.on('dragend', (data) => {
            // 获取地图中心点位置
            let center = amap.getCenter()
            let positions = [center.R, center.Q]
            setTimeout(() => {
              marker.setPosition(positions)
              getAddres(positions)
            }, 100)
          })
        })
        AMap.event.addListener(geolocation, 'error', (data) => {
          this.$message.error('定位失败，请检查网络，并稍后重试')
        })
        // 地址逆解析
        var getAddres = (lnglat) => {
          var geocoder = new AMap.Geocoder()
          geocoder.getAddress(lnglat, (status, result) => {
            if (status === 'complete' && result.regeocode) {
              var address = result.regeocode.formattedAddress
              this.curLocation = result.regeocode
              this.keyWord = this.curLocation.formattedAddress
            }
          })
        }
      })
    },
    // 关闭地图
    $_close () {
      this.visible = false
    },
    // 设置选择的地图位置
    setLocation () {
      if (this.curLocation.formattedAddress) {}
      this.$_close()
      this.$refs.iform.setFormData({
        address: this.curLocation.formattedAddress
      })
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
            this.$message.error('网络繁忙，请稍后重试')
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
    }
  }
}
</script>
<style lang="less" scoped>
#mapContainer{
  width: 100%;
  height: 500px;
}
</style>

