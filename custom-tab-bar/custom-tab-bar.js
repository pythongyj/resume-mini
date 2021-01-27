const app = getApp();
Component({
  data: {
    selected:0,
    color:'#ff0036',
    selectedColor:'#008c8c',
    list:[
      {
        pagePath:'/pages/index/index',
        text:"首页"
      },
      {
        pagePath:'/pages/account/account',
        text:"个人中心"
      }
    ],
     //适配IphoneX的屏幕底部横线
     isIphoneX: app.globalData.isIphoneX
  },
  properties: {},
  methods: {
    switchTab(e){
      const data = e.currentTarget.dataset;
      const index = e.currentTarget.dataset.index;
      if (index==1) {
        wx.scanCode({
          success:(res)=>{
            console.log(res);
          }
        })
      }else{
        const url = data.url
        wx.switchTab({
          url
        })
      }
      this.setData({
        selected:data.index
      })
    }
  }
})