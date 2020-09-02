export default {
  data () {
    return {
      formModelMap: {
        passed: [
          {
            label: '项目名称',
            prop: 'projectName'
          }, {
            label: '负责人',
            prop: 'handler'
          }, {
            label: '项目照片',
            prop: 'banner',
            render: (h, params) => {
              var row = params.row
              return row.banner ? <img src={row.banner} height="30"/> : null
            }
          }, {
            label: '建设单位',
            prop: 'constructionUnit'
          }, {
            label: '地址',
            prop: 'address'
          }, {
            label: '通过时间',
            prop: 'createDate'
          }, {
            label: '操作',
            render: () => {
              return <div>
                <el-button type='text' onClick={() => {
                  this.$router.push({
                    path: '/project-detail'
                  })
                }}>查看</el-button>
                {this.projectStatus === 'passed' ? <el-button type='text'>删除</el-button> : null}
              </div>
            }
          }
        ],
        approval: [
          {
            label: '项目名称',
            prop: 'projectName'
          }, {
            label: '负责人',
            prop: 'handler'
          }, {
            label: '项目照片',
            prop: 'banner',
            render: (h, params) => {
              var row = params.row
              return row.banner ? <img src={row.banner} height="30"/> : null
            }
          }, {
            label: '建设单位',
            prop: 'constructionUnit'
          }, {
            label: '地址',
            prop: 'address',
          }, {
            label: '通过时间',
            prop: 'createDate'
          }, {
            label: '操作',
            render: () => {
              return <div>
                <el-button type='text' onClick={() => {
                  this.$router.push({
                    path: '/project-detail'
                  })
                }}>查看</el-button>
                {this.projectStatus === 'passed' ? <el-button type='text'>删除</el-button> : null}
              </div>
            }
          }
        ],
        
      },
      formDataMap: {
        passed: [{banner: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3216805947,683070568&fm=26&gp=0.jpg'}],
        approval: [],
        create: {}
      }
    }
  }
}
