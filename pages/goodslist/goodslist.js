
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
		isBack: true,
		goodsList: [],
		pageNum: 1,
		allLoad: true // 上拉刷新的开关
	},
	
	reqGoodsList(){
		const {pageNum} = this.data;
		app.request('/goods/typelist',{
			pageNum,
			goodsType: 3,
		}).then((res) => {
			const {code, list, msg} = res
			if(code == 1){
				this.setData({
					pageNum: 1,
					goodsList: list,
					allLoad: true
				})
				wx.stopPullDownRefresh() //得到结果后关掉下拉刷新
			}else{
				wx.showToast({
					title: msg,
					icon: 'none'
				}) 
			}
		})
	},

	// 上拉刷新
	loadMore(){
		const {pageNum,goodsList,allLoad} = this.data;
		if(!allLoad){
			return false
		}
		app.request('/goods/typelist',{
			pageNum: pageNum + 1,
			goodsType: 3,
		}).then((res) => {
			const {code, list, msg} = res
			if(code == 1){
				if(list.length){
					this.setData({
						pageNum: pageNum + 1,
						goodsList: goodsList.concat(list)
					})
				}else{
					wx.showToast({
						title: '没数据了,老哥!',
						icon: 'none'
					})
					this.setData({
						allLoad: false
					})
				}
			}else{
				wx.showToast({
					title: msg,
					icon: 'none'
				}) 
			}
		})
	},
	

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
		//方法调用的方式触发下拉刷新事件
		wx.startPullDownRefresh()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
		this.reqGoodsList()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
		this.loadMore()
	},
	
	// 监听用户滑动页面事件
	onPageScroll(obj){
		this.setData({
			isBack: obj.scrollTop > 300 ? false : true
		})
	},


    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})