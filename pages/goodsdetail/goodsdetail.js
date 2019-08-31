
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		commonUrl: app.globalData.commonUrl,
		id: '',
		info: null,
		buysku: '12*13'
	},

	// 请求商品详情
	reqGoodsDetaile(){
		app.request('/goods/detail',{
			goodsId: this.data.id
		}).then((res) => {
			const {code, msg, data} = res
			if(code == 1){
				this.setData({
					info: data
				})
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
		// options为页面跳转所带来的参数
		const {id} = options;
		this.setData({
			id: id
		})
		this.reqGoodsDetaile();
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

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})