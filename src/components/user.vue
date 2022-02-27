<template>
  <div>
    <!-- 用户头像-->
    <div class="fullPage" style="display: flex;">
      <open-data
        v-if="isShow"
        style="width: 120rpx;height: 120rpx;align-self: center;"
        type="userAvatarUrl"
      ></open-data>
      <p>hello</p>
      <open-data v-if="isShow" type="userNickName"></open-data>
      <button @click="toRegList" style="height: 120rpx;align-self: center;">查看名单</button>
      <button open-type="getUserInfo" @getuserinfo="handleGetUserInfo" class="btn">获取授权</button>
    </div>
  </div>
</template>



<script>
export default {

  data() {
    return {
      isShow: false,
      userInfo: {},
      registerName: '',
      openid: "",

    }
  },


  beforeMount() {
    // 自动加载获取用户信息：
    console.log('组件挂载之前')
    // this.getUserInfo()
    this.getUserInfo();
  },


  methods: {

    // 获取用户信息：

    handleGetUserInfo(msg) {

      // console.log(msg);
      if (msg.mp.detail.userInfo) {
        this.getUserInfo();
      }


      //   const that=this;
      //   wx.cloud.init()
      //    wx.cloud.callFunction({
      //     name:"login",
      //     success:res=>{
      //       console.log("cloud success");
      //       that.setData({
      //         openid: res.result.openid,
      //          userinfo: msg.detail.userInfo
      //       })
      //       console.log("openid", that.data.openid)
      //               console.log("userinfo", that.data.userinfo)

      //     },
      //      fail:res=>{
      //     console.log("云函数调用失败")
      //   }
      //   })



    },

    getUserInfo() {
      // 获取用户信息

      wx.getUserInfo({
        success: (data) => {
          // console.log(data)
          this.isShow = true;

          // this.userInfo = data.userInfo
        },
        fail: () => {
          console.log('getUserInfofail')
        }
      })

    },
  },

  toRegList() {
    //跳转至RegList页面
    wx.navigateTo({
      url: '/pages/regList/main'
    })
  },



}
</script>
     
<style lang="stylus" rel="stylesheet/stylus">
.fullPage
    width 100%;
    height 100%;
</style>
