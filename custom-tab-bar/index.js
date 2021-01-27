Component({
  data: {
    selected: 0,
    color: "#707070",
    selectedColor: "#00c4cc",
    list: [{
      pagePath: "/pages/index/index",
      iconPath:'',
      text: "首页"
    }, {
      pagePath: "/pages/account/account",
      iconPath:'',
      text: "我的"
    },{
      pagePath: "/pages/logs/logs",
      iconPath:'',
      text: "日志"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      console.log(data.index)
      this.setData({
        selected: data.index
      })
    }
  }
})