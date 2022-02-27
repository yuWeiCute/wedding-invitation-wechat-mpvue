<template>
  <div class="fullPage">
    <!-- 背景音乐 -->
    <h-music :music="musicList.indexMusic"></h-music>
    <h-menu></h-menu>
    <!-- 背景图片 -->
    <div id="backgroundBlock"></div>
    <img id="background" src="/static/images/background/texture.jpg" alt />

    <!-- 封面-->
    <div class="toFit" id="firstPage">
      <!-- <logo> -->
      <img
        style="width: 75rpx; height: 75rpx; margin-bottom: 7rpx"
        src="/static/images/background/doubleXi.gif"
      />
      <!-- <span>囍</span>
      <li>結良緣</li>-->
      <!-- </logo> -->
      <p>WEDDING</p>
      <div>
        <img src="/static/images/person/littlePerson.png" />
      </div>
      <h1>陈曦 & 江宇薇</h1>
      <time>2025年02月25日</time>
      <image
        style="width: 440rpx; height: 20rpx; margin-top: 10rpx"
        src="/static/images/background/separator.png"
      />
      <text>\n安徽省宣城市宣州区水阳江北大道278号</text>
      <text>敬亭湖宾馆\n</text>
      <section>欢迎您的到来</section>
      <text>\n\n</text>
    </div>

    <!-- 故事-->
    <div class="toFit" id="storyGuide">
      <video
        src="https://vod.ma3you.com/94d194050a304e25b61edb1ca32b6890/3e626fbc08a9460abed633c5bf64d074-ceb5bed7688d295c454ed49531b8f7f0-ld.mp4?auth_key=1642598891-52f33c296da74761a6d30f2e687878d9-0-7ba620e3e80311da636a7d9ba573df94"
        :controls="false"
        :autoplay="true"
        :loop="true"
        :muted="true"
        :show-fullscreen-btn="false"
        :show-play-btn="false"
        :show-center-play-btn="false"
        :enable-progress-gesture="false"
      ></video>
      <button @click="toStories">开始故事的篇章</button>
      <button>查看相册</button>
      <text>\nFrom 2020.08.27\n</text>
      <!-- <button @click="toStories" class="btn">开始故事</button> -->
    </div>

    <!-- 时间 -->
    <div class="toFit" id="time">
      <!-- 倒计时 -->
      <countdown v-if="marryTime && marryTime.length>0">
        <span class="timer">
          <p>{{marryTime[0]}}</p>
          <p style="font-size:18rpx">天</p>
        </span>
        <span class="timer">
          <p>{{marryTime[1]}}</p>
          <p style="font-size:18rpx">时</p>
        </span>
        <span class="timer">
          <p>{{marryTime[2]}}</p>
          <p style="font-size:18rpx">分</p>
        </span>
        <span class="timer">
          <p>{{marryTime[3]}}</p>
          <p style="font-size:18rpx">秒</p>
        </span>
      </countdown>
      <!-- 日历 -->
      <div class="goldBorder">
        <div
          style="width: 440rpx; background:white; border:25rpx solid white; box-sizing: content-box"
        >
          <div class="month">
            <span style="font-size:36rpx">\n2025</span>
            <span>
              <span style="font-size:60rpx">2</span>
              <span style="font-size:42rpx">月\n</span>
            </span>
          </div>

          <ul class="weekdays">
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li>日</li>
          </ul>

          <ul class="days">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>
              <span class="active">25</span>
            </li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
          </ul>
        </div>
      </div>
      <text>\n时间：2025/02/05 11：58am</text>
      <text>农历正月初八 星期三\n\n</text>
      <section>10:00 | 迎宾仪式</section>
      <section>11:00 | 婚礼仪式</section>
      <section>12:00 | 婚礼酒宴</section>
    </div>

    <!-- 地址 -->
    <div class="toFit disFlex" id="site" >
      <div class="goldBorder">
        <h-location></h-location>
        
        </div>
        <text @tap="toHere">\n↑点击可一键导航至酒店\n\n</text>
        <section>席设：敬亭湖宾馆</section>
        <section>地址：安徽省宣城市水阳江北大道278号</section>
    </div>

    <!-- 登记页面 -->
    <div class="toFit disFlex" id="register">
      <h2>C/J</h2>
      <p>02.05.2025</p>
      <button @click="toRegister">点此登记访客信息</button>
      <section>05 · Feb · 25</section>
      <section>at 11:58 in the morning</section>
      <text>安徽省宣城市水阳江北大道278号</text>
      <text>敬亭湖宾馆</text>
      <text>期待您的到来\n\n</text>
    </div>
  </div>
</template>



<script>
import musicList from '../../datas/music.js'
import HLocation from '../../components/location'
import HMenu from '../../components/menu'
import HMusic from '../../components/music'
import HUser from '../../components/user'
import tools from '../../common/js/tools'
export default {
  components: {
    HUser,
    HLocation,
    HMusic,
    HMenu
  },

  data() {
    return {
      marryTime: [],
      timer: null,
      musicList: musicList
    }
  },

  // //通过组合式API的形式去使用生命周期钩子
  mounted() {
    const that = this
    that.timer = setInterval(() => {
      that.marryTime = tools.getTimer('02/05/2025')
    }, 1000)
  },
  // mounted() {
  //   console.log('---onMounted---')
  // },
  // beforeUpdate() {
  //   console.log('---onBeforeUpdate---')
  // },`
  // updated() {
  //   console.log('---onUpdated---')
  // },
  // beforeUnmount() {
  //   console.log('---onBeforeUnmount---')
  // },
  // unmounted() {
  //   console.log('---onUnmounted---')
  // },


  // //mpvue 生命周期
  // created() {
  //   console.log('page index created', this)
  // },
  // mounted() {
  //   console.log('mounted', this)
  // },
  // onLoad() {
  //   console.log('page index onLoad', this)
  // },
  // onReady() {
  //   console.log('page index onReady', this)
  // },
  // onShow() {
  //   console.log('onShow', this)
  // },
  // onUnload() {
  //   console.log('onUnload', this)
  // },
  // onHide() {
  //   console.log('onHide', this)

  // },

  // 分享页面：
  onShareAppMessage(event) {
    console.log(event);
    return {
      title: '陈曦&江宇薇的婚礼请帖',
      path: '/pages/index/main',
      imageUrl: '/static/images/bridegroom&bride.gif'
    }
  },



  methods: {

    //跳转至stories页面 并暂停音乐播放
    toStories() {
      wx.pauseBackgroundAudio();
      wx.navigateTo({
        url: '/pages/stories/main'
      })
    },

        toHere() {
            // let plugin = requirePlugin("routePlan");
            let key = "57UBZ-4DK66-OXRSK-EPS2T-6TC7K-IDFP2";  //使用在腾讯位置服务申请的key
            let referer = "wx468cd814ee7f3a24";   //调用插件的app的名称
            let endPoint = JSON.stringify({  //终点
                "name": "敬亭湖宾馆(宣城)",
                "latitude": 30.969805,
                "longitude": 118.740759,
            });
            wx.navigateTo({
                url: "plugin://routePlan/index?key=" + key + "&referer=" + referer + "&endPoint=" + endPoint
            });
        },


    toRegister() {
      //跳转至register页面
      wx.navigateTo({
        url: '/pages/register/main'
      })
    },

  },

}
</script>
     
<style lang="stylus" rel="stylesheet/stylus">


/* 滚动贴合核心样式 */
.fullPage{
  // // scroll-snap-type: y mandatory;
  // /* 需要把滚动条设置到直接父容器，scroll-snap-type 才能生效 */
  // scroll-snap-type: y proximity;
  // overflow: scroll;
  height: 100%;
}

.toFit {
  // width 100%;
  height 100%;
  // scroll-snap-align: end;
}

.disFlex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    position relative
}


#background
  position: fixed;
  width 100%;
  height 100%;
  opacity: 1;
  z-index: -10;

#backgroundBlock
  position: fixed;
  background-color: #913229;
  opacity: 0.6;
  height 100%;
  left: 20%;
  right: 20%;
  z-index: -9;




//首页样式
#firstPage
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    position relative
    // logo
    //  width: 50rpx;
    //  height: 50rpx;
    //  position relative
    //  span
    //   text-align: center;
    //   display: table-cell;
    //   vertical-align: middle;
    //   // font-family: Microsoft YaHei
    //   font-size: 88rpx
    //  li
    //   position: absolute
    //   top: 50%
    //   left: 50%
    //   transform: translate3d(-50%,-50%,0);
    //   border: 0.25rpx solid rgba(243,221,130,0.5)
    //   padding: 4rpx 3rpx
    //   background-color: #913229
    //   font-size: 15rpx
    //   // font-weight: lighter
    //   // font-family: NSimSun
    //   letter-spacing: 3.8rpx;
    //   white-space: nowrap;
    //   writing-mode: vertical-rl;
    //   z-index:1;
    p
      font-size: 17rpx
      font-weight: lighter;
      letter-spacing: 4rpx;
      font-family: Microsoft YaHei
      margin-bottom: 50rpx
    div
     img
      width: 440rpx;
      height: 440rpx;
    h1
     position relative
     margin-top: 90rpx
     font-size: 57rpx
    time
     position relative
     font-size: 38rpx
    //  font-weight: 100;
    text
     font-size: 24rpx
     
h1::before {
    content: "";
    position: absolute;
    top: calc( 100% - 157rpx);
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 33rpx;
    height: 33rpx;
    border-right-width: 7rpx;
    border-bottom-width: 7rpx;
    border-radius: 6rpx;
    border-right-style: solid;
    border-bottom-style: solid;
}

h1::after {
    content: "";
    position: absolute;
    top: calc( 100% - 117rpx);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0rpx;
    height: 0rpx;
    border: 5rpx solid #efd896;
    border-radius: 5rpx;
}

//首页样式



//故事样式
#storyGuide
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    position relative

    video
      width: 550rpx;
      height: 550rpx;
      border: 10rpx solid #efd896;
      border-color: #e6d59d #c2a55e #b9974d #d7c184
    button
      color: inherit
      text-align center
      border: 0rpx solid rgba(154, 60, 51, 0)
      background rgba(154, 60, 51, 0)
//故事样式

//时间样式
#time
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    position relative
    countdown
      display: flex; 
      flex-direction: row; 
      .timer
        padding: 6rpx 32rpx 10rpx;
        border-radius: 10rpx;
        background: black;
        opacity 0.8
        margin: 12rpx;
        font-size: 40rpx
        text-align:center; 
        color: white

.goldBorder
      border: 10rpx solid #efd896;
      border-color: #e6d59d #c2a55e #b9974d #d7c184


.month {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: baseline;
    padding: 5rpx 20rpx;
    width: 100%;
    background: white;
    color: #973835
}

.weekdays {
    border: 0rpx solid #973835;
    border-radius: 50rpx;
    background-color: #973835;
}

.weekdays li {
    display: inline-block;
    width: 14.28%;
    color: white;
    font-size: 20rpx;
    text-align: center;
}

.days {
    padding: 5rpx 0;
    background: white;
    margin: 0;
}

.days li {
    list-style-type: none;
    display: inline-block;
    width: 14.28%;
    text-align: center;
    margin-bottom: 2.5rpx;
    font-size:20rpx;
    color: #624a4a;
}

.days li .active {
    padding: 0rpx 5rpx;
    border: 5rpx solid #973835;
    border-radius: 25rpx;
    background: #973835;
    color: white !important
}


//时间样式




.btn
      width 280px
      height  80px
      text-align center
      line-height 80px
      position absolute
      bottom 20px
      left 50%
      margin-left -140rpx
      background rgba(255, 255, 255, .5)

#site
    position relative
.btn2
      width 280px
      height  80px
      text-align center
      line-height 80px
      position absolute
      bottom 200px
      left 50%
      margin-left -140rpx
      background rgba(193, 136, 136, .5)


#register
  position relative


#register
  position relative
    .registerName
      width 80%
      height 80rpx
      margin auto
      border-bottom 1rpx solid #02a774
      position relative
      input
        height 100%
        width 100%
        .placeholder
          color #02a774
          text-align center
          font-size 28rpx

      .clear
        position absolute
        right 20rpx
        top 20rpx
        z-index 99  
</style>
