export default {
  data () {
    return {
      forms: {
        formModel: [
          {
            elemType: 'input',
            prop: 'name',
            label: '姓名'
          }, {
            elemType: 'input',
            prop: 'phoneNumber',
            label: '手机号码'
          }
        ],
        formData: {}
      },
      tables: {
        tableModel: [
          {
            label: '姓名',
            prop: 'name'
          }, {
            label: '手机号',
            prop: 'phoneNumber'
          }, {
            label: '身份证号码',
            prop: 'IDNumber',
          }, {
            label: '身份证照',
            prop: 'IDCard',
            render: (h, params) => {
              var row = params.row
              return row.banner ? <img src={row.banner} height="30"/> : null
            }
          }, {
            label: '认证时间',
            prop: 'updateDate'
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