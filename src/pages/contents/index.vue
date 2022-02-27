<template>
    <view>
        <view class="bottom" @click="doAnimation">
            <img src="/static/images/add.png" />
            <p>按钮</p>
        </view>
        <view>
            <view class="create_ball" :animation="animation1" @click="create(1)">类1</view>
            <view class="create_ball" :animation="animation2" @click="create(2)">类2</view>
            <view class="create_ball" :animation="animation3" @click="create(3)">类3</view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            animation1: {},
            animation2: {},
            animation3: {},
            stretch: false, //判断是否展开，默认不展开
            running: false, //动画正在运行状态：控制动画运行完毕后才能再次运行
            //data中新增参数 大屏适配
            // rpx: 0 //动画适配比例
        }
    },

    // //onLoad 大屏适配
    // onLoad() {
    //     Object.assign(this.$data, this.$options.data());
    //     wx.getSystemInfo({
    //       success: function (res) {
    //         let rpx = 1 * (res.windowWidth * res.pixelRatio) / (750 * res.pixelRatio);
    //         that.rpx = rpx;
    //       }
    //     })
    //     //this.btnClick('全部','')
    //   },


    //通过组合式API的形式去使用生命周期钩子
    BeforeMount() {
        console.log('---onBeforeMount---')
    },
    Mounted() {
        console.log('---onMounted---')
    },
    BeforeUpdate() {
        console.log('---onBeforeUpdate---')
    },
    onUpdated() {
        console.log('---onUpdated---')
    },
    BeforeUnmount() {
        console.log('---onBeforeUnmount---')
    },
    Unmounted() {
        console.log('---onUnmounted---')
    },



    methods: {
        doAnimation1() {
            var that = this;
            if (that.running) { //如果动画正在运行，点击无效
                return;
            }
            that.running = true;
            setTimeout(() => {//默认400ms能点击一次
                var _that = this;
                _that.running = false;
            }, 400)
            if (!that.stretch) { //展开动作
                var animation1 = wx.createAnimation({
                    duration: 300,
                    delay: 0,
                    timingFunction: 'ease',
                });
                var animation2 = wx.createAnimation({
                    duration: 300,
                    delay: 50,
                    timingFunction: 'ease',
                });
                var animation3 = wx.createAnimation({
                    duration: 300,
                    delay: 100,
                    timingFunction: 'ease',
                })
                //表示一组动画完成
                animation1.translateX(-85).translateY(-15).opacity(1).step();
                //表示一组动画完成
                animation2.translateX(-70).translateY(-65).opacity(1).step();
                //表示一组动画完成
                animation3.translateX(-15).translateY(-85).opacity(1).step();

                //清掉之前的动画操作
                that.animation1 = animation1.export();
                that.animation2 = animation2.export();
                that.animation3 = animation3.export();
            } else { //收起动作
                var animation1 = wx.createAnimation({
                    duration: 300,
                    delay: 100,
                    timingFunction: 'ease',
                })
                var animation2 = wx.createAnimation({
                    duration: 300,
                    delay: 50,
                    timingFunction: 'ease',
                })
                var animation3 = wx.createAnimation({
                    duration: 300,
                    delay: 0,
                    timingFunction: 'ease',
                })
                animation1.opacity(0).step();
                animation2.opacity(0).step();
                animation3.opacity(0).step();
                that.animation1 = animation1.export();
                that.animation2 = animation2.export();
                that.animation3 = animation3.export();
            }
            that.stretch = !that.stretch; //取反
            // setTimeout(() => {//自动恢复初始状态方法
            //     console.log(12);
            //     var _that = this;
            //     var animation1 = wx.createAnimation({
            //         duration: 1000,
            //         timingFunction: 'ease',
            //     })
            //     var animation2 = wx.createAnimation({
            //         duration: 1000,
            //         timingFunction: 'ease',
            //     })
            //     var animation3 = wx.createAnimation({
            //         duration: 1000,
            //         timingFunction: 'ease',
            //     })
            //     animation1.opacity(1).step();
            //     animation2.opacity(1).step();
            //     animation3.opacity(1).step();
            //     _that.animation1 = animation1.export();
            //     _that.animation2 = animation2.export();
            //     _that.animation3 = animation3.export();
            // }, 1000)
        },
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
            if (!that.stretch) { //展开动作
                this.showAnimation();
            } else { //收起动作
                this.hiddenAnimation();
            }
            that.stretch = !that.stretch; //取反
        },
        showAnimation() { //展示动画
            var that = this;
            var animation1 = wx.createAnimation({
                duration: 300,
                delay: 0,
                timingFunction: 'ease',
            });
            var animation2 = wx.createAnimation({
                duration: 300,
                delay: 50,
                timingFunction: 'ease',
            });
            var animation3 = wx.createAnimation({
                duration: 300,
                delay: 100,
                timingFunction: 'ease',
            })
            //表示一组动画完成
            animation1.translateX(-85).translateY(-5).opacity(1).step();
            //表示一组动画完成
            animation2.translateX(-70).translateY(-55).opacity(1).step();
            //表示一组动画完成
            animation3.translateX(-15).translateY(-75).opacity(1).step();

            //清掉之前的动画操作
            that.animation1 = animation1.export();
            that.animation2 = animation2.export();
            that.animation3 = animation3.export();
        },
        hiddenAnimation() { //隐藏动画
            var that = this;
            var animation1 = wx.createAnimation({
                duration: 300,
                delay: 100,
                timingFunction: 'ease',
            })
            var animation2 = wx.createAnimation({
                duration: 300,
                delay: 50,
                timingFunction: 'ease',
            })
            var animation3 = wx.createAnimation({
                duration: 300,
                delay: 0,
                timingFunction: 'ease',
            })
            animation1.opacity(0).step();
            animation2.opacity(0).step();
            animation3.opacity(0).step();
            that.animation1 = animation1.export();
            that.animation2 = animation2.export();
            that.animation3 = animation3.export();
        },
        create_match(tag) {
            console.log("111！" + tag);
        },
    }
}
</script>

<style scoped>
.create_ball {
    height: 80rpx;
    width: 80rpx;
    line-height: 80rpx;
    position: fixed;
    right: 10rpx;
    bottom: 20rpx;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    opacity: 0;
    text-align: center;
    vertical-align: middle;
}

.bottom {
    z-index: 999;
    position: fixed;
    right: 10rpx;
    bottom: 20rpx;
    width: 136rpx;
    height: 136rpx;
    border-radius: 140rpx;
    background: #ffffff;
    text-align: center;
    font-size: 24rpx;
}

.bottom img {
    width: 40rpx;
    height: 40rpx;
    display: block;
    margin: 0 auto;
    margin-top: 28rpx;
    position: relative;
}

.bottom p {
    top: 4rpx;
    position: relative;
    width: 80rpx;
    height: 28rpx;
    font-size: 20rpx;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 28rpx;
    color: rgb(160, 17, 17);
    opacity: 1;
    margin-left: 28rpx;
    margin-top: 12rpx;
}
</style>