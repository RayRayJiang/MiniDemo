
const app = getApp()
Component({
    // 从父级传入的数据
    properties: {
        item: {
            type: Object, // 类型
            value: null // 默认值
        }
    },

    // 当前组件的数据
    data: {
        commonUrl: app.globalData.commonUrl
    },

    // 当前组件的函数
    methods: {
        toGoodsDetail(){
            wx.navigateTo({
                // 跳转详情页，传入商品id
                url: '/pages/goodsdetail/goodsdetail?id=' + this.data.item._id
            })
        }
    },

    // 当前组件的生命周期
    lifetimes: {
        attached: function() {
            // 在组件实例进入页面节点树时执行

        },
        detached: function() {
            // 在组件实例被从页面节点树移除时执行
        }
      },    


    
})