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
        groupInfo: [
          {
            elemType: 'input',
            prop: 'groupName',
            label: '班组名称',
            ...layOut,
            disabled: true
          }, {
            elemType: 'input',
            prop: 'handler',
            label: '班组负责人',
            ...layOut,
            disabled: true
          }, {
            elemType: 'input',
            prop: 'groupCount',
            label: '班组管理员人数',
            ...layOut,
            disabled: true
          }, {
            elemType: 'input',
            prop: 'staffCount',
            label: '班组民工人数',
            ...layOut,
            disabled: true
          }, {
            elemType: 'input',
            prop: 'score',
            ...layOut,
            label: '班组评分',
            disabled: true
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
        groupAdmin: [
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
            render: (h, {row}) => {
              return <el-button type="text">删除</el-button>
            }
          }
        ],
        group: [
          {
            label: '姓名 ',
            prop: 'name'
          }, {
            label: '工作内容',
            prop: 'jobContent'
          }, {
            label: '评分',
            prop: 'score'
          }, {
            label: '操作',
            render: (h, {row}) => {
              return <div>
                <el-button type="text">删除</el-button>
              </div>
            }
          }
        ],
        enclosure: [
          {
            elemType: 'input',
            prop: 'name',
            label: '项目名称'
          }
        ],
        report: [
          {
            label: '姓名',
            prop: 'name'
          }, {
            label: '身份',
            prop: 'position'
          }, {
            label: '报告图片',
            prop: 'imgList',
            render: (h, {row}) => {
              var imgList = row.imgList || []
              imgList = imgList.map(e => (
                <li><img src={e} height="100%"/></li>
              ))
              return <ul class="img-list">{imgList}</ul>
            }
          }, {
            label: '文字描述',
            prop: 'commnet'
          }, {
            label: '操作',
            render: (h, row) => {
              return <div>
                <el-button type="text">删除</el-button>
              </div>
            }
          }
        ]
      },
      formDataMap: {
        groupInfo: {
          imgList: [
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3216805947,683070568&fm=26&gp=0.jpg'
          ]
        },
        groupAdmin: [{}],
        group: [{}],
        enclosure: {},
        report: [
          {
            imgList: [
              'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3216805947,683070568&fm=26&gp=0.jpg'
            ]
          }
        ]
      }
      
    }
  }
}