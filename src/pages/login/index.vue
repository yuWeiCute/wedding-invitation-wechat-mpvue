<template>
<view class="container">
  <!-- <view class="userinfo">
    <block :wx:if="!hasUserInfo">
      <button :wx:if="canIUseGetUserProfile" @bindtap="getUserProfile"> 获取头像昵称 </button> -->

    <!-- </block>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" :src="userInfo.avatarUrl" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
        <open-data
        v-if="isShow"
        style="width: 120rpx;height: 120rpx;align-self: center;"
        type="userAvatarUrl"
      ></open-data>
      <p>hello</p>
      <open-data v-if="isShow" type="userNickName"></open-data> -->
</view>
</template>

<script>
export default {
  //   data() {
  //       return {
  //       userInfo: {},
  //   hasUserInfo: false,
  //   canIUseGetUserProfile: false
  //       }
  //   },

  //   onLoad() {
  //   if (wx.getUserProfile) {
  //     this.canIUseGetUserProfile=true
  //     console.log("1111");
  //     console.log(userInfo);
  //   }
  // },



  //   methods: {
  //    getUserProfile(e) {
  //        console.log(e);
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
  //   // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true,
  //       })
  //       console.log(userInfo);
  //     }
  //   })
  //   console.log(userInfo);
  // },
  // getUserInfo(e) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },

    // }



}
</script>

<style scoped>
</style>