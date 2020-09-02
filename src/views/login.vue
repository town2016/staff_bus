<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="left">
        <div class="inner">
          <img src="../assets/logo.jpg"/>
          <p> WLLCOME TO STAFF BUS SYSTEM</p>
        </div>
      </div>
      <div class="right">
        <div class="inner">
          <h2>登录</h2>
          <iForm :formModel="formModel"></iForm>
          <br>
          <el-button type="primary" class="login-btn">Login</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const layOut = {
  xlSpan: 24,
  colSpan: 24,
  mdSpan: 24,
  smSpan: 24,
}
export default {
  name: 'login',
  data () {
    return {
      formModel: [
        {
          elemType: 'input',
          placeholder: '请输入手机号/邮箱',
          label: '',
          props: 'userName',
          ...layOut
        },
        {
          elemType: 'input',
          placeholder: '请输入密码',
          label: '',
          props: 'password',
          type: 'password',
          ...layOut
        }
      ]
    }
  }
}
</script>
<style lang="less">
.login{
  width: 100%;
  height: 100%;
  position: relative;
  .login-wrapper{
    position: absolute;
    top:50%;
    left: 50%;
    margin-left: -457px;
    margin-top: -200px;
    height: 330px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    .left{
      box-sizing: border-box;
      padding-right: 20px;
      width: 50%;
      text-align: right;
      float: left;
      .inner{
        display: inline-block;
        text-align: center;
      }
      img{
        width: 230px;
        height: 230px;
      }
      p{
        font-size: 30px;
        color: #fbbe60;
        font-weight: 600;
        font-family:Georgia, 'Times New Roman', Times, serif;
      }
    }
    .right{
      float: right;
      width: 50%;
      height: 100%;
      border-left: 1px solid #e5e5e5;
      box-sizing: border-box;
      padding: 20px;
      .inner{
        width: 300px;
        .el-form-item{
          margin-bottom: 24px;
        }
        h2{
          padding-left: 60px;
          font-weight: 400;
          margin-bottom: 30px;
          text-align: center;
          letter-spacing: 5px;
        }
        .login-btn{
          width: 240px;
          margin-left: 60px;
        }
      }
    }
  }
}
</style>
