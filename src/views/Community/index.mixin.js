export default {
  data () {
    return {
      tables: {
        tableModel: [
          {
            label: '姓名',
            prop: 'name'
          }, {
            label: '照片',
            prop: 'banner',
            render: (h, params) => {
              var row = params.row
              return row.banner ? <img src={row.banner} height="30"/> : null
            }
          }, {
            label: '标题',
            prop: 'title'
          }, {
            label: '内容',
            prop: 'content'
          }, {
            label: '时间',
            prop: 'date'
          }, {
            label: '操作',
            render: () => {
              return <div>
                <el-button type='text'>删除</el-button>
              </div>
            }
          }
        ],
        tableData: [{banner: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3216805947,683070568&fm=26&gp=0.jpg'}]
      }
    }
  }
}