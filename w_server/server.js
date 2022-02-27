//  搭建服务器的核心文件

let Koa = require('koa');
let KoaRouter = require('koa-router');
let Fly=require("flyio/src/node")


let fly=new Fly;

// 1. 生成应用及路由器实例
const app = new Koa();
const router = new KoaRouter();


// 核心代码
router.get('/', (ctx, next) => {
    // 1. 获取请求的参数

    // 2. 根据请求的地址和参数处理数据

    // 3. 响应数据
    ctx.body = '服务器返回的数据';
});

// 登记的接口
let datas = require('../src/datas/data.json');
router.get('/register', (ctx, next) => {
  // 1. 获取请求的参数
  let req = ctx.query.req;
  console.log('获取请求参数： ', req);
  // 2. 根据请求的地址和参数处理数据
  let registerList = datas;
  // 3. 响应数据
  ctx.body = registerList;
});


// // 获取用户openId的接口
// router.get('/getOpenId', async (ctx, next) => {
//   // 1. 获取请求的参数
//   let code = ctx.query.code;
//   let appId = 'wx468cd814ee7f3a24';
//   let appSecret = '72d026a579115cdb228cfa2ba6a643cc';
//   // 2. 根据请求的地址和参数处理数据
//   let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
//   // 发送请求给微信接口，获取openId
//   let result = await fly.get(url);
//   userInfo = JSON.parse(result.data)
  
//   // 将用户的openId存入数据库， openId: {userName: 'xx', money: 'yyy'}
  
//   // 自定义登录状态，就是根据用户的openid和sessionKey进行加密生成token，返回给前端的
//   // 对openId和sessionKey进行加密, 自定义登录状态
//   let token = jwt.sign(userInfo, 'atguigu');
//   console.log(token);
//   // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2tleSI6IlN6WWJyNnBLUGN0WkFqMWJKUFk1ckE9PSIsIm9wZW5pZCI6Im9sblFfNWNyb0pfUXR5NTFx
//   // cktUQzktd1pKeVkiLCJpYXQiOjE1NzEyMjc2NjB9.lopVRU3qyb4q47mn21tJ8T5Z3pot4l5_zSf2-g-FGgo
//   // 3. 响应数据
//   ctx.body = token;
// });






// 2. 使用路由器及路由
app
    .use(router.routes()) // 声明使用路由
    .use(router.allowedMethods()) // 允许使用路由的方法

// 3. 监听端口
app.listen('3000', () => {
    console.log('服务器启动成功');
    console.log('服务器地址： http://localhost:3000');
})
