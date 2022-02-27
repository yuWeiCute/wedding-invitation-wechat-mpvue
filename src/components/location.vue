
<template>
    <div  class="map">
        <map  class="content"
            id="mpMap"
            style="width: 550rpx; height: 550rpx"
            subkey="57UBZ-4DK66-OXRSK-EPS2T-6TC7K-IDFP2"
            longitude="118.740759"
            latitude="30.969805"
            scale="16"
            layer-style="1"
            :markers="markers"
            @tap="toHere"
        ></map>
        <!-- <button @click="toHere" style="height: 120rpx;align-self: center;">去这里</button> -->
    </div>
</template>

<script>

import markers from "../datas/location.js"

export default {


    data() {
        return {
            markers: markers.markers
        }
    },


    methods: {
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
        }
    }


}
</script>

<style lang="stylus" rel="stylesheet/stylus">

     
</style>