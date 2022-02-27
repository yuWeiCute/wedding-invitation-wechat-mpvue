
<script>
  import request from './utils/request'
export default {
// mounted() {
//     wx.login({
//         success: async (res) => {
          
//           // 1. 获取用户登陆的临时凭证, 和用户是否授权没有直接关系， 有效时长： 有效期五分钟
//           let code = res.code;
//           console.log(code);
//           // 2. 发送code给服务器端
//          let token = await request('/getOpenId', {code})
//           // 3. 将自定义登录状态缓存到storage中
//           wx.setStorageSync('token', token);
//         }
//       })
// },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

@font-face {
    font-family: 'FZSuXSLSJW';
    // font-weight: light;
    src: url("https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200&display=swap")
    //src: url("https://dn-qtshe.qbox.me/HYZhengYuan-95W.ttf")
}

page {
    width: 100%;
    height: 100%;
    background-color: #a1413d
    color: #efd896
    // font-family: 'FZSuXSLSJW';
    overflow-x:hidden;
}


</style>
