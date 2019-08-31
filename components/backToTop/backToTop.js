const app = getApp()

Component({

    // 从父级传入的数据
    properties: {
        isBack: {
            type: Boolean, // 类型
            value: true // 默认值
        }
    },
    
    data:{

    },

    // 当前组件的函数
    methods: {
        // 回到顶部
        backToTop(){
            wx.pageScrollTo({
                scrollTop: 0,
                duration:300
            })
        },
    },

    // 当前组件的生命周期
    lifetimes: {
        attached: function() {
            // 在组件实例进入页面节点树时执行

        },
        detached: function() {
            // 在组件实例被从页面节点树移除时执行
        },
    },    

})