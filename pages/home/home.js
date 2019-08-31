// pages/home/home.js
const app = getApp()

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		commonUrl: app.globalData.commonUrl,
		swiperList: [],
		goodsList: [],
		pageNum: 1,
		isBack: true,
		allLoad: true // 上拉刷新的开关
	},

	// 轮播图
	reqSwiper(){
		app.request('/goods/swiper').then((res) => {
			this.setData({
				swiperList: res.list
			})
		})
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

	// 回到顶部
	backToTop(){
		wx.pageScrollTo({
			scrollTop: 0,
			duration:300
		})
	},

	// 去往详情页
	// 点击事件的函数传参，根据自定义属性传递，在函数的默认参数里的currentTarget里提取
	// 通过wxml设置自定义属性data-[参数名]传递参数，[参数名]只能是小写，不能有大写
	toGoodsDetail(e){
		const id = e.currentTarget.dataset.id
		wx.navigateTo({
			// 跳转详情页，传入商品id
			url: '/pages/goodsdetail/goodsdetail?id=' + id
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.reqSwiper();
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