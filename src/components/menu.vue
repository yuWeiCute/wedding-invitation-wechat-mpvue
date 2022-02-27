<template>
    <div>
        <view class="bottom" @click="doAnimation">
            {{select}}
        </view>
         <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <!-- <transition name="fade" > -->
        <!-- <div v-show="stretch"  :animation="animation1"  class="wrapper"> -->
        <div v-show="stretch"    class="wrapper show">
            <ul>
                <li>主页</li>
                <li>照片墙</li>
                <li>故事线</li>
                <li>登记</li>
                <li>致谢</li>
            </ul>
            </div>
        </transition>
        <!-- <a href="www.baidu.com" style="position: fixed; top: 0; left: 0;z-index: 99">致谢</a> -->
    </div>
</template>

<script>
// @import url("chrome://communicator/skin/");

export default {

    data() {
        return {
            animation1: {},
            stretch: false, //判断是否展开，默认不展开
            running: false, //动画正在运行状态：控制动画运行完毕后才能再次运行
            select:"≡"
        }
    },

methods: {
        // doAnimation1() {
        //     var that = this;
        //     if (that.running) { //如果动画正在运行，点击无效
        //         return;
        //     }
        //     that.running = true;
        //     setTimeout(() => {//默认400ms能点击一次
        //         var _that = this;
        //         _that.running = false;
        //     }, 400)
        //     if (!that.stretch) { //展开动作
        //         var animation1 = wx.createAnimation({
        //             duration: 300,
        //             delay: 0,
        //             timingFunction: 'ease',
        //         })
        //         //表示一组动画完成
        //         animation1.opacity(1).step();

        //         //清掉之前的动画操作
        //         that.animation1 = animation1.export();

        //     } else { //收起动作
        //         var animation1 = wx.createAnimation({
        //             duration: 300,
        //             delay: 100,
        //             timingFunction: 'ease',
        //         })
        //         var animation2 = wx.createAnimation({
        //             duration: 300,
        //             delay: 50,
        //             timingFunction: 'ease',
        //         })
        //         var animation3 = wx.createAnimation({
        //             duration: 300,
        //             delay: 0,
        //             timingFunction: 'ease',
        //         })
        //         animation1.opacity(0).step();

        //         that.animation1 = animation1.export();

        //     }
        //     that.stretch = !that.stretch; //取反
        //     // setTimeout(() => {//自动恢复初始状态方法
        //     //     console.log(12);
        //     //     var _that = this;
        //     //     var animation1 = wx.createAnimation({
        //     //         duration: 1000,
        //     //         timingFunction: 'ease',
        //     //     })
        //     //     var animation2 = wx.createAnimation({
        //     //         duration: 1000,
        //     //         timingFunction: 'ease',
        //     //     })
        //     //     var animation3 = wx.createAnimation({
        //     //         duration: 1000,
        //     //         timingFunction: 'ease',
        //     //     })
        //     //     animation1.opacity(1).step();
        //     //     animation2.opacity(1).step();
        //     //     animation3.opacity(1).step();
        //     //     _that.animation1 = animation1.export();
        //     //     _that.animation2 = animation2.export();
        //     //     _that.animation3 = animation3.export();
        //     // }, 1000)
        // },
        doAnimation() { //启动动画
            var that = this;
            if (that.running) { //如果动画正在运行，点击无效
                return;
            }
            that.running = true;
            setTimeout(() => { //默认400ms能点击一次
                var _that = this;
                _that.running = false;
            }, 400)
            that.stretch = !that.stretch; //取反
            if (that.stretch) { //展开动作
                // this.showAnimation();
                that.select ="x"
            } else { //收起动作
                // this.hiddenAnimation();
                that.select ="≡"
            }
            
        },
    //     showAnimation() { //展示动画
    //         var that = this;
    //         var animation1 = wx.createAnimation({
    //             duration: 500,
    //             delay: 0,
    //             timingFunction: 'ease',
    //         });

    //         //表示一组动画完成
    //         animation1.opacity(1).step();


    //         //清掉之前的动画操作
    //         that.animation1 = animation1.export();

    //     },
    //     hiddenAnimation() { //隐藏动画
    //         var that = this;
    //         var animation1 = wx.createAnimation({
    //             duration: 300,
    //             delay: 0,
    //             timingFunction: 'ease',

    //         })
    //         animation1.opacity(0).step();

    //         that.animation1 = animation1.export();

    //     },
    //     create_match(tag) {
    //         console.log("111！" + tag);
    //     },
    // }
     // 以下三个与enter相关的方法只会在元素由隐藏变为显示的时候才会执行
     // el:指的是当前调用这个方法的元素对象
     // done:用来决定是否要执行后续的代码如果不执行这个方法，那么将来执行完before执行完enter以后动画就会停止  
             beforeEnter: function (el) {
                 console.log("beforeEnter");
                 // 当入场之前会执行 v-enter
                 el.style = "padding-left:100px";
             },
             enter: function (el, done) {
                 // 当进行的过程中每执行 v-enter-active
                 console.log("enter");
                 // 为了能让代码正常进行，在设置了结束状态后必须调用一下这个元素的
                 // offsetHeight / offsetWeight  只是为了让动画执行
                 el.offsetHeight;
 
                 // 结束的状态最后啊写在enter中
                 el.style = "padding-left:0px";
 
 
                 // 执行done继续向下执行
                 done();
             },
             afterEnter: function (el) {
                 // 当执行完毕以后会执行
                 console.log("afterEnter");
                 this.isshow = false;
             }

}
}
</script>

<style scoped lang="stylus">

.bottom {
    z-index: 100;
    position: fixed;
    right: 25rpx;
    bottom: 40rpx;
    text-align: center;
    font-size: 80rpx;
    display: table-cell;
    vertical-align:middle
}

//好像没用的动画
.fade-enter-active, .fade-leave-active {
      transition: opacity .5s
}
.fade-enter, .fade-leave-active {
      opacity: 0
}


.show {
             transition: all 0.5s;
         }

//菜单样式
    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        // background: #a8453f
        background: linear-gradient(15deg, #993831, #a8453f);
        // clip-path: circle(15px at calc(100% - 45px) 45px);
        // transition: all 0.3s ease-in-out;
        z-index: 99
        // opacity 1
    }

    // #active:checked.wrapper {
    //     clip-path: circle(75%);
    // }


    .wrapper ul {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        list-style: none;
        text-align: center;
    }

    .wrapper ul li {
        margin: 80rpx 0;
    }

    .wrapper ul li {
        color: none;
        text-decoration: none;
        font-size: 38rpx;
        // font-weight: 500;
        padding: 10rpx 60rpx;
        color: #fff;
        position: relative;
        // line-height: 57px;
        transition: all 0.03s ease-in;
    }

    .wrapper ul li:after {
        position: absolute;
        content: "";
        background: #fff;
        width: 100%;
        height: 50rpx;
        left: 0;
        border-radius: 50rpx;
        transform: scaleY(0);
        z-index: -1;
        transition: transform 0.03s ease-in;
    }

    //翻转动画
    .wrapper ul li:active:after {
        transform: scaleY(1);
    }

    .wrapper ul li:active {
        color: #a8453f;
    }

    input[type="checkbox"] {
        display: none;
    }
</style>
