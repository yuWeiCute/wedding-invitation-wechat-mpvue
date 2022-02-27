<template>
  <div class="index">
    <!-- 背景音乐 -->
    <div class="bg_music" v-if="isPlay" @tap="audioPlay">
      <img src="/static/images/music/music_icon.png" class="musicImg music_icon" />
      <img src="/static/images/music/music_play.png" class="music_play pauseImg" />
    </div>
    <div class="bg_music" v-else @tap="audioPlay">
      <img src="/static/images/music/music_icon.png" class="musicImg" />
      <img src="/static/images/music/music_play.png" class="music_play playImg" />
    </div>
  </div>
</template>

<script>
import tools from '../utils/popup.js'
export default {

  data() {
    return {
      isPlay: true  // 标识音乐是否播放
    }
  },

  props: {
    music: {
      type: Object, //name的类型是字符串
      required: true, //name是必要的
    },
  },

  beforeMount() {
    let oldStorage = wx.getStorageSync('isPlay');
    console.log(oldStorage);
    if (oldStorage === false) {
      this.isPlay = false;
      wx.pauseBackgroundAudio();
    } else {
      //自动播放
      let { dataUrl, title } = this.music;
      wx.playBackgroundAudio({
        dataUrl,
        title,
        complete: this.isLetPlay
      })
    }
    // 监听音乐的播放和暂停
    // wx.onBackgroundAudioPlay(() => {
    //   this.isPlay = true
    // }),
    //   wx.onBackgroundAudioPause(() => {
    //     this.isPlay = false
    //   })
  },


  onShow() {
    let oldStorage = wx.getStorageSync('isPlay');
    console.log(oldStorage);
    if (oldStorage === false) {
      this.isPlay = false;
      wx.pauseBackgroundAudio();
    } else {
      //自动播放
      let { dataUrl, title } = this.music;
      wx.playBackgroundAudio({
        dataUrl,
        title,
        complete: this.isLetPlay
      })
    }
  },



  methods: {

    audioPlay() {
      // 处理音乐播放
      let isPlay = !this.isPlay
      this.isPlay = isPlay
      let { dataUrl, title } = this.music;
      if (isPlay) {
        wx.playBackgroundAudio({
          dataUrl,
          title,
          complete: this.isLetPlay
        })
        tools.showToast('背景音乐已开启')
        this.isPlay = true;
      } else {
        wx.pauseBackgroundAudio()
        tools.showToast('您已暂停音乐播放')
        this.isPlay = false;
      }

      // 将本次设置的结果再缓存到本地
      wx.setStorage({
        key: 'isPlay',
        data: isPlay
      })
    },
  }

}
</script>

<style scoped lang="stylus">
@-webkit-keyframes musicRotate
  from
    -webkit-transformb rotate(0deg)
  to
    -webkit-transform rotate(360deg)
@-webkit-keyframes musicStop
  from
    -webkit-transform rotate(20deg)
  to
    -webkit-transform rotate(0deg)
@-webkit-keyframes musicStart
  from
    -webkit-transform rotate(0deg)
  to
    -webkit-transform rotate(20deg)
@-webkit-keyframes infoAnimation
  0%
    -webkit-transform scale(1) translate(0, 0)
  50%
    -webkit-transform scale(.9) translate(5px, 5px)
  100%
    -webkit-transform scale(1) translate(0, 0)
.index
  position relative
  .bg_music
    position fixed
    right 0
    top 20rpx
    width 100rpx
    z-index 98
    display flex
    justify-content flex-start
    align-items flex-start
    .musicImg
      width 60rpx
      height 60rpx
    .music_icon
      animation musicRotate 3s linear infinite
    .music_play
      width 28rpx
      height 60rpx
      margin-left -10rpx
      transform-origin top
      -webkit-transform rotate(20deg)
    .playImg
      animation musicStop 1s linear forwards
    .pauseImg
      animation musicStart 1s linear forwards
  

</style>
