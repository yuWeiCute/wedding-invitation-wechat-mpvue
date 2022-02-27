<template>
  <div>
    <div class="form">
      <h1>访客登记</h1>
      <div class="ipt">
        <label>
          <span class="message">姓名*</span>
        </label>
        <input
          @focus="focus"
          @confirm="handleSearch"
          confirm-type="姓名"
          v-model="name"
          type="text"
          placeholder="请输入参加者姓名（若已登记将更新数据）"
          placeholder-class="placeholder"
        />
        <span v-show="!rightName">您的姓名已经登记，提交将更新记录</span>
      </div>
      <div class="ipt">
        <label>
          <span class="number">电话（选填）</span>
          <span class="notice" v-show="!rightTel">请输入正确的电话号码</span>
        </label>
        <input
          v-model="tel"
          data-name="account"
          type="text"
          placeholder="请输入联系电话（选填）"
          placeholder-class="placeholder"
          @input="checkPhone"
        />
      </div>
      <div class="ipt">
        <label>
          <span class="message">人数*</span>
          <span class="notice" v-show="!rightNum">请输入正确的数字</span>
        </label>
        <input
          @input="checkNum"
          v-model="number"
          type="number"
          placeholder="请输入参与人数"
          placeholder-class="placeholder"
        />
      </div>
      <div class="ipt">
        <label>
          <span class="message">备注（选填）</span>
        </label>
        <textarea
          v-model="remark"
          type="number"
          placeholder="备注（选填）"
          placeholder-class="placeholder"
        />
      </div>
      <div class="ipt">
        <button @tap="submit">确认提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import tools from '../../utils/popup'
import request from '../../utils/request'
export default {


  data() {
    return {
      name: '',
      tel: '',
      number: '',
      remark: '',
      rightName: true,
      rightTel: true,
      rightNum: true,
    }
  },


  beforeMount() {
    // wx.cloud.init()
    // let m=db.collection('regdata')
  // .get()
  // console.log(m);

    // console.log(wx.cloud.database());
    // db = wx.cloud.database()
    // regdata = db.collection('regdata')
    // console.log(regdata);


    // const data1 = db.collection('regdata').doc('54ad1eea61d5a020035cedbe3b681050')
    // console.log(regdata);
    // console.log(data1);
    // wx.request({
    //   url: 'http://localhost:3000/register',
    //   // data,
    //   success: (res) => {
    //     // console.log(res.data);
    //     this.regList = res.data;
    //   }

    // })

    // db.collection('regdata').add({
    //   // data 字段表示需新增的 JSON 数据
    //   data: {
    //     // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
    //     name: "陈曦",
    //     tel: "15357561870",
    //     number:1
    //   },
    //   success: function(res) {
    //     // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    //     console.log(res)
    //   }
    // })




    //   db.collection('regdata').doc('54ad1eea61d5b2ff03606a8a488b8bb1').get().then(res => {
    //     // res.data 包含该记录的数据
    //     console.log(res.data)
    //     console.log(res.data.name)
    //     console.log(res.data.number)
    //   })

  },




  methods: {

    submit() {
      const that = this
      if (that.rightNum && that.number != '') {
        if (that.rightTel && that.tel != '' && that.tel.length === 11) {
          db.collection('regdata').add({
            // data 字段表示需新增的 JSON 数据
            data: {
              // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
              name: that.name,
              tel: that.tel,
              number: 1
            },
            success: function (res) {
              // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
              console.log(res)
            }
          })
        } else {
          tools.showToast('手机号码格式不正确')
        }
      } else {
        tools.showToast('请输入正确的出席人数')
      }
      if (that.rightName && that.name != '') {
        tools.showLongToast('您的姓名已经登记，已更新记录')
      }
    },


    checkPhone() {
      let that = this
      that.tel = that.tel.replace(/\s+/g, "");
      let reg = /^(1[3-9][0-9])\d{8}$/
      if (that.tel.length === 11) {
        if (reg.test(that.tel)) {
          that.rightTel = true
        }
        else {
          that.rightTel = false
        }
      }
      if (that.tel.length === 0) {
        that.rightTel = true
      }
    },

    checkNum() {
      let that = this
      that.number = that.number.replace(/\s+/g, "");
      if (that.number.length != 0) {
        if (/^\d+$/.test(that.number)) {
          that.rightNum = true
        }
        else {
          that.rightNum = false
        }
      }
    },


    addPresent() {
      const that = this
      wx.cloud.init()
      const db = wx.cloud.database()
      console.log(db);
      const present = db.collection('regdata')
      console.log(present);
      //查询姓名是否登记过
      present.where({
        name: that.name
      }).get({
        success: function (res) {
          console.log(res.data)
          that.rightName = false;
        }
      })

      if (that.rightName == false) {
        present.where({
          name: that.name
        }).update({
          data: {
            // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
            name: that.name,
            tel: that.tel,
            count: that.number,
            remark: that.remark
          },
          success: function (res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            that.name = ''
            that.phone = ''
            that.number = ''
            that.remark = ''
            that.$emit('closeForm')
          }
        })
      } else {
        present.add({
          // data 字段表示需新增的 JSON 数据
          data: {
            // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
            name: that.name,
            tel: that.tel,
            count: that.number,
            remark: that.remark
          },
          success: function (res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            that.name = ''
            that.phone = ''
            that.number = ''
            that.remark = ''
            that.$emit('closeForm')
          }
        })
      }


    },


    // async handleSearch() {
    //   // 搜索功能函数
    //   // 获取用户输入的内容
    //   // let data = { req: this.name }
    //   // 发送请求给服务器获取数据
    //   // wx.request({
    //   //   url: 'http://localhost:3000/register',
    //   //   // data,
    //   //   success: (res) => {
    //   //     // console.log(res.data);
    //   //     this.regList = res.data;
    //   //   }

    //   // })
    //   let result = await request('/register');
    //   this.regList = result
    //   console.log(this.regList);




    //   // let result = await request('/searchBooks', data);
    //   // this.booksArr = result
    //   // console.log("this.rightName"+this.rightName);
    //   this.rightName = true;
    //   for (var i = 0; i < this.regList.length; i++) {
    //     if (this.name === this.regList[i].name) {
    //       this.rightName = false;
    //     }
    //   }
    //   console.log("this.rightName" + this.rightName);
    // }

  }


}
</script>

<style lang="stylus" rel="stylesheet/stylus">
page {
    color: white;
    position: relative;
}


        @media screen and (max-width: 767px) {
            page {
                font-size: 26rpx;
            }
        }
        /* 2. 小屏幕下  大于等于768  */
        
        @media screen and (min-width: 768px) {
            page {
                font-size: 14rpx;
            }
        }
        /* 3. 中等屏幕下 大于等于 992px    */
        
        @media screen and (min-width: 992px) {
            page {
                font-size: 14rpx;
            }
        }
        /* 4. 大屏幕下 大于等于1200  */
        
        @media screen and (min-width: 1200px) {
            page {
                font-size: 10rpx;
            }
        }


.form {
    position: relative;
    width: 26em;
    height: 20em;
    margin: auto;
    top: 5em;
    // left: 50%;
    // transform: translate(-50%, 0%);
    // margin: 4em 0 0 -13em;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    width: 100%;
    font-weight: 350;
    font-size: 1.8em;
    text-align: center;
    margin: 0 0 1.5em 0;
    letter-spacing: 0.6em;
    border-bottom: 0.07em solid rgba(255,255,255,0.4)
    padding-bottom: 0.8em;
}

h1::after {
    content: "";
    color: #9AA4C2;
    position: absolute;
    top: calc( 100% - 8.93em);
    left: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    -o-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
    width: 0.2em;
    height: 0.2em;
    border: 0.05em solid #e5d49c;
    background-color: #fff;
    -webkit-transition: all 333ms ease-out;
    -moz-transition: all 333ms ease-out;
    transition: all 333ms ease-out;
}


.ipt{
    width 100%;
    position: relative;
}

input,textarea {
    border: 0.126em solid rgba(255,255,255,0.4);
    height: 2.2em;
    margin-bottom: 2.4em;
    border-radius: 0.08em;
    padding: 0 0.8em;
    transition: all .7s;
}

input:hover,textarea:hover{
    border: 0.126em solid #fff;
    background: rgba(255,255,255,0.3);
}

.placeholder{
    color: rgba(255,255,255,0.4)
}

textarea {
    width: 24.2em;
    line-height 1.68em
    padding: 0.8em;
    // background: #f5f5f5;
    resize none
    outline none
}

// input:checked{
//     border: 0.126em solid #fff;
//     background: #f5f5f5;
// }

// input:active{
//     border: 0.126em solid #fff;
//     background: #f5f5f5;
// }



// input:enabled{
//     border: 0.126em solid #fff;
//     background: #f5f5f5;
// }

// input:valid{
//     border: 0.126em solid #fff;
//     background: #f5f5f5;
// }

// input:focus{
//     border: 0.126em solid #fff;
//     background: #f5f5f5;
// }


label{
    width: 100%
    position absolute
    left 0.28em
    top -1.6em
    color white
}

.notice
    color rgba(90,18,10,0.8)
    position absolute 
    right 0.4em



button
    width: 100%;
    font-size: 1em;
    font-weight: 550;
    color: #452c29
    background: #e5d49c;
    transition: all .1s;

button:active{
    background: #f4e8c2;
}


</style>