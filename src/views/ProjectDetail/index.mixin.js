const layOut = {
  xlSpan: 24,
  colSpan: 24,
  mdSpan: 24,
  smSpan: 24,
}
export default {
  data () {
    return {
      formModelMap: {
        projectInfo: [
          {
            elemType: 'input',
            prop: 'projectName',
            label: '项目名称',
            ...layOut,
            disabled: true
          }, {
            elemType: 'input',
            prop: 'handler',
            label: '项目负责人',
            ...layOut,
            disabled: true
          }, {
            elemType: 'input',
            prop: 'handlerCount',
            label: '项目管理员人数',
            ...layOut,
            disabled: true
          }, {
            elemType: 'input',
            prop: 'staffCount',
            label: '项目总人数',
            ...layOut,
            disabled: true
          }, {
            elemType: 'input',
            prop: 'constructionUnit',
            label: '建设单位',
            ...layOut,
            disabled: true
          }, {
            elemType: 'input',
            prop: 'address',
            ...layOut,
            label: '地址',
            disabled: true
          }, {
            elemType: 'input',
            prop: 'score',
            ...layOut,
            label: '项目评分',
            disabled: true
          }, {
            elemType: 'render',
            prop: 'imgList',
            ...layOut,
            label: '项目照片',
            render: (h, formData) => {
              var imgList = formData.imgList || []
              imgList = imgList.map(e => (
                <li><img src={e} height="100%"/></li>
              ))
              return <ul class="img-list">{imgList}</ul>
            }
          }, {
            elemType: 'render',
            prop: 'handlerCount',
            ...layOut,
            label: ' 操作',
            render: () => {
              return <el-button size="small" type="danger">删除</el-button>
            }
          }
        ],
        projectAdmin: [
          {
            label: '姓名',
            prop: 'name'
          }, {
            label: '职位',
            prop: 'position'
          }, {
            label: '工作内容',
            prop: 'jobContent'
          }, {
            label: '操作',
            render: (h, row) => {
              return <el-button type="text">删除</el-button>
            }
          }
        ],
        group: [
          {
            label: '班组名称',
            prop: 'groupName'
          }, {
            label: '班组负责人',
            prop: 'handler'
          }, {
            label: '总人数',
            prop: 'totalCount'
          }, {
            label: '操作',
            render: (h, row) => {
              return <div>
                <el-button type="text" onClick={() => {
                  this.$router.push({
                    path: '/group-detail'
                  })
                }}>查看</el-button>
                <el-button type="text">删除</el-button>
              </div>
            }
          }
        ],
        enclosure: [
          {
            elemType: 'input',
            prop: 'projectName',
            label: '项目名称'
          }
        ],
      },
      formDataMap: {
        projectInfo: {
          imgList: [
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3216805947,683070568&fm=26&gp=0.jpg'
          ]
        },
        projectAdmin: [{}],
        group: [{}],
        enclosure: {}
      }
      
    }
  }
}